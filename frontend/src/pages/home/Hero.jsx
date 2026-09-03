// src/components/hero/Hero.jsx
import { useEffect, useRef, useCallback } from "react";
import slides from "../../data/SlidesData.js";
import useHeroSlider from "./useHeroSlider";

const TOTAL = slides.length;

export default function Hero() {
  const {
    index,
    progressKey,
    autoplayMs,
    prefersReducedMotion,
    next,
    prev,
    goToIndex,
    pause,
    resume,
  } = useHeroSlider(TOTAL);

  const heroRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const nextIdx = (index + 1) % TOTAL;
    const img = new Image();
    img.src = slides[nextIdx].image;
  }, [index]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        pause();
        next();
      } else if (e.key === "ArrowLeft") {
        pause();
        prev();
      }
    },
    [next, prev, pause]
  );

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const THRESHOLD = 40;
    if (delta > THRESHOLD) {
      pause();
      prev();
    } else if (delta < -THRESHOLD) {
      pause();
      next();
    }
    touchStartX.current = null;
  };

  const handlePrev = () => {
    pause();
    prev();
  };
  const handleNext = () => {
    pause();
    next();
  };
  const handleDotClick = (i) => {
    pause();
    goToIndex(i);
  };

  const current = slides[index];

  return (
    <section
      ref={heroRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Avanza Survey & Instruments highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full overflow-hidden bg-black outline-none h-[75vh] sm:h-[80vh] md:h-[70vh] lg:h-[75vh] mt-25"
    >
      {/* Background layer stack */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            aria-hidden={i !== index}
            className={[
              "absolute inset-0 will-change-[opacity,transform]",
              prefersReducedMotion ? "duration-150 transition-opacity" : "",
              i === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-[1.08] z-0",
            ].join(" ")}
            style={
              prefersReducedMotion
                ? undefined
                : {
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: slide.focal || "center",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "1400ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }
            }
          >
            {prefersReducedMotion && (
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: slide.focal || "center",
                }}
                className="absolute inset-0"
              />
            )}
            {/* Flat dark overlay only — no gradient, no navy tint */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="mx-auto h-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-full items-center">
            <div className="w-full sm:max-w-[85%] md:max-w-[60%] lg:max-w-[48%]">
              <SlideContent key={current.id} slide={current} reduced={prefersReducedMotion} />

              <div
                className={[
                  "mt-6 sm:mt-8 will-change-[opacity,transform]",
                  prefersReducedMotion
                    ? "opacity-100 translate-y-0"
                    : "animate-[heroFadeUp_900ms_cubic-bezier(0.22,1,0.36,1)_forwards]",
                ].join(" ")}
                style={prefersReducedMotion ? undefined : { animationDelay: "320ms", opacity: 0 }}
              >
                <a
                  href="#about"
                  className="inline-flex items-center justify-center border border-white/70 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-white transition-all duration-200 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  KNOW MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category label (bottom-left) */}
        <div className="absolute left-0 bottom-5 sm:bottom-5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <p
              key={current.id + "-cat"}
              className={[
                "text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-white/70 truncate will-change-[opacity,transform]",
                prefersReducedMotion
                  ? "opacity-100 translate-y-0"
                  : "animate-[heroFadeUp_800ms_cubic-bezier(0.22,1,0.36,1)_forwards]",
              ].join(" ")}
              style={prefersReducedMotion ? undefined : { animationDelay: "120ms", opacity: 0 }}
            >
              {current.category}
            </p>
          </div>
        </div>

        {/* Vertical line indicators — right edge, stacked, same on all breakpoints */}
        <div
          className="flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-2 sm:gap-2.5"
          role="tablist"
          aria-label="Select slide"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}: ${s.category}`}
              onClick={() => handleDotClick(i)}
              className={[
                "h-[2px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]",
                i === index ? "w-6 sm:w-8 bg-[#D4A017]" : "w-3 sm:w-4 bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Full-width progress bar at the very bottom of the hero */}
        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-white/15 overflow-hidden z-30">
          <div
            key={progressKey}
            className="h-full bg-[#D4A017]"
            style={{
              animation: prefersReducedMotion
                ? "none"
                : `heroProgress ${autoplayMs}ms linear forwards`,
              width: prefersReducedMotion ? "100%" : undefined,
            }}
          />
        </div>
      </div>

      {/* Prev / Next controls — sharp square, bottom-right corner */}
      <div className="absolute right-5 bottom-5 z-30 flex gap-2">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="group flex h-12 w-12  items-center justify-center border-t border-l border-white/25 bg-black/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-[#D4A017] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] "
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-x-0.5">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="group flex h-12 w-12  items-center justify-center border-t border-l border-white/25 bg-black/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-[#D4A017] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

function SlideContent({ slide, reduced }) {
  return (
    <div>
      <p
        className={[
          "text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017] will-change-[opacity,transform]",
          reduced
            ? "opacity-100 translate-y-0"
            : "animate-[heroFadeUp_850ms_cubic-bezier(0.22,1,0.36,1)_forwards]",
        ].join(" ")}
        style={reduced ? undefined : { animationDelay: "0ms", opacity: 0 }}
      >
        {slide.eyebrow}
      </p>

      <h1
        className={[
          "mt-4 font-bold leading-[1.08] text-white will-change-[opacity,transform]",
          "text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl",
          reduced
            ? "opacity-100 translate-y-0"
            : "animate-[heroFadeUp_950ms_cubic-bezier(0.22,1,0.36,1)_forwards]",
        ].join(" ")}
        style={reduced ? undefined : { animationDelay: "100ms", opacity: 0 }}
      >
        {slide.title}
      </h1>

      <p
        className={[
          "mt-4 sm:mt-5 max-w-md sm:max-w-lg text-md leading-relaxed text-white/80 will-change-[opacity,transform]",
          reduced
            ? "opacity-100 translate-y-0"
            : "animate-[heroFadeUp_950ms_cubic-bezier(0.22,1,0.36,1)_forwards]",
        ].join(" ")}
        style={reduced ? undefined : { animationDelay: "220ms", opacity: 0 }}
      >
        {slide.description}
      </p>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
