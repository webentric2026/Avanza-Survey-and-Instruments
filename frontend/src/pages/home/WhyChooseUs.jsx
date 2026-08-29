// src/components/why-choose-us/WhyChooseUs.jsx
import { useEffect, useRef, useState } from "react";
import reasons from "../../data/reasonsData.js";
import ReasonItem from "./ReasonItem";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);
    const onChange = () => setPrefersReducedMotion(media.matches);
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="why-choose-avanza"
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-[#0B1F4B] py-20 sm:py-24 lg:py-28"
    >
      {/* Technical background: coordinate grid + topographic contours — subtle, decorative, aria-hidden */}
      <TechnicalBackdrop inView={inView} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16">
          {/* Left column — label, heading, supporting text */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p
              className={[
                "text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              WHY CHOOSE AVANZA
            </p>

            <h2
              id="why-choose-heading"
              className={[
                "mt-4 font-bold leading-[1.15] text-white",
                "text-3xl sm:text-4xl lg:text-[42px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "120ms" : "0ms" }}
            >
              Built around precision, technology, and dependable results.
            </h2>

            <p
              className={[
                "mt-6 max-w-md text-base sm:text-[17px] leading-relaxed text-white/70 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "220ms" : "0ms" }}
            >
              From field measurement to final data, we focus on delivering
              accurate surveying solutions backed by modern technology,
              professional execution, and the right equipment.
            </p>

            <div
              className={[
                "mt-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "320ms" : "0ms" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-white/25 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F4B]"
              >
                Talk to Our Team
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — four differentiators, asymmetric 2-col on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-12">
            {reasons.map((reason, i) => (
              <ReasonItem
                key={reason.id}
                reason={reason}
                index={i}
                inView={inView}
                offsetClass={i % 2 === 1 ? "sm:mt-10 lg:mt-14" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalBackdrop({ inView }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Faint coordinate grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="wcu-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wcu-grid)" />
      </svg>

      {/* Topographic contour arcs, bottom-right */}
      <svg
        viewBox="0 0 600 600"
        className={[
          "absolute -bottom-32 -right-32 h-[420px] w-[420px] lg:h-[520px] lg:w-[520px] transition-opacity duration-[1400ms] ease-out",
          inView ? "opacity-[0.09]" : "opacity-0",
        ].join(" ")}
      >
        {[60, 120, 180, 240, 300].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#D4A017" strokeWidth="1.2" />
        ))}
      </svg>

      {/* Small coordinate marker + label, top-left */}
      <div
        className={[
          "absolute left-5 top-8 sm:left-8 lg:left-12 flex items-center gap-2 transition-opacity duration-[1200ms] ease-out",
          inView ? "opacity-30" : "opacity-0",
        ].join(" ")}
      >
        <span className="h-2 w-2 rounded-full border border-[#D4A017]" />
        <span className="font-mono text-[10px] tracking-widest text-white/60">
          28.6448° N, 77.1877° E
        </span>
      </div>
    </div>
  );
}
