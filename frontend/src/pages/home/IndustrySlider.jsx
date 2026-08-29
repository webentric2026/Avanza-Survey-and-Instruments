// src/components/industries/IndustrySlider.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import industries from "../../data/industriesData.js";
import IndustrySlide from "./IndustrySlide";

const AUTO_DELAY = 5600;
const RESUME_DELAY = 4200;

export default function IndustrySlider() {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [manualPause, setManualPause] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const autoplayRef = useRef(null);
  const resumeRef = useRef(null);
  const rafRef = useRef(null);
  const touchStartX = useRef(null);
  // Tracks the index we've already centered for, so the resize-recenter
  // effect never re-fires just because `index` changed via goTo().
  const lastCenteredIndex = useRef(0);

  const total = industries.length;
  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);

  const pauseTemporarily = useCallback(() => {
    setManualPause(true);
    window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setManualPause(false), RESUME_DELAY);
  }, []);

  const centerSlide = useCallback((targetIndex, behavior = "smooth") => {
    const track = trackRef.current;
    const slide = slideRefs.current[targetIndex];
    if (!track || !slide) return;

    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left, behavior });
  }, []);

  const goTo = useCallback(
    (targetIndex, behavior = "smooth", triggeredByUser = false) => {
      const normalized = (targetIndex + total) % total;
      lastCenteredIndex.current = normalized;
      setIndex(normalized);
      centerSlide(normalized, behavior);
      if (triggeredByUser) pauseTemporarily();
    },
    [centerSlide, pauseTemporarily, total]
  );

  const next = useCallback(
    (triggeredByUser = true) => goTo(index + 1, "smooth", triggeredByUser),
    [goTo, index]
  );
  const prev = useCallback(
    (triggeredByUser = true) => goTo(index - 1, "smooth", triggeredByUser),
    [goTo, index]
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(media.matches);
    updateMotion();
    media.addEventListener?.("change", updateMotion);
    return () => media.removeEventListener?.("change", updateMotion);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Center once on mount (instant), and re-center on window resize only.
  // This no longer depends on `index`, so it can't fire right after a
  // button click and cancel the smooth slide animation mid-flight.
  useEffect(() => {
    centerSlide(0, "auto");

    const onResize = () => centerSlide(lastCenteredIndex.current, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep index in sync when the user free-scrolls/swipes the track directly
  // (not via the buttons), using the closest-slide-to-center heuristic.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(trackCenter - slideCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        lastCenteredIndex.current = closestIndex;
        setIndex((current) => (current === closestIndex ? current : closestIndex));
        rafRef.current = null;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView || isHovered || manualPause) return;
    window.clearTimeout(autoplayRef.current);
    autoplayRef.current = window.setTimeout(() => next(false), AUTO_DELAY);
    return () => window.clearTimeout(autoplayRef.current);
  }, [index, isHovered, isInView, manualPause, next, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      window.clearTimeout(autoplayRef.current);
      window.clearTimeout(resumeRef.current);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next(true);
    if (e.key === "ArrowLeft") prev(true);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseTemporarily();
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev(true);
    if (delta < -50) next(true);
    touchStartX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      className="overflow-hidden bg-[#F7F5F2] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
              INDUSTRIES WE SERVE
            </p>
            <h2
              id="industries-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] text-[#0B1F4B]"
            >
              Precision that supports every stage of development.
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              Our surveying and geospatial solutions provide accurate spatial data for projects across construction, infrastructure, land development, transportation, and more.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => prev(true)}
              aria-label="Previous industry"
              className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => next(true)}
              aria-label="Next industry"
              className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-12 lg:mt-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries carousel"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-4 sm:gap-5 lg:gap-8 overflow-x-auto scroll-smooth px-[4%] sm:px-[8%] lg:px-[12%] snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {industries.map((industry, i) => (
            <div
              key={industry.id}
              ref={(node) => (slideRefs.current[i] = node)}
              className="w-[90%] sm:w-[78%] lg:w-[70%] shrink-0 snap-center"
            >
              <IndustrySlide industry={industry} isActive={i === index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-5 sm:gap-6">
          <p className="min-w-fit text-sm font-medium tracking-[0.18em] text-[#0B1F4B]">
            {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
          </p>
          <div className="h-[2px] flex-1 overflow-hidden bg-slate-300/70">
            <div
              className="h-full bg-[#D4A017] transition-[width] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
