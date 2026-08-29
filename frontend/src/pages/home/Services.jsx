// src/components/services/Services.jsx
import { useRef, useState, useEffect } from "react";
import services from "../../data/servicesData.js";
import ServiceCard from "./ServiceCard";
import useInView from "./useInView";

export default function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const trackRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const slideWidth = track.clientWidth;
        const newIndex = Math.round(track.scrollLeft / slideWidth);
        setActiveSlide(newIndex);
        frame = null;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goToSlide = (i) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#FAFAF9] py-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={[
            "max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
            WHAT WE DO
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] text-[#1A1A1A] "
          >
            ACCURATE DATA. PRECISE SURVEYING. RELIABLE RESULTS.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-500">
            Avanza Survey & Instruments delivers professional surveying and geospatial
            solutions, combining advanced technology with precise fieldwork to provide
            dependable data for planning, development, and engineering projects.
          </p>
        </div>

        {/* Mobile: horizontal swipeable slider (below sm) */}
        <div className="mt-14 sm:hidden">
          <div
            ref={trackRef}
            role="region"
            aria-label="Services carousel"
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-5 px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, i) => (
              <div
                key={service.id}
                className="w-full flex-shrink-0 snap-center pr-3 last:pr-0"
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div
            className="mt-6 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Select service slide"
          >
            {services.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Go to service ${i + 1}: ${s.title}`}
                onClick={() => goToSlide(i)}
                className={[
                  "h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]",
                  i === activeSlide
                    ? "w-6 bg-[#0B1F4B]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: static responsive grid */}
        <div className="mt-14 sm:mt-16 hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
