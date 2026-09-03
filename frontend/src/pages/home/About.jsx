import about from "../../assets/images/about.jpg"
import useInView from "./useInView";


export default function About() {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative topographic contour lines — subtle, brand-aligned, GPU-cheap */}
      <TopographicLines inView={inView} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image — stacks above content on mobile, left column on desktop */}
          <div
            className={[
              "relative order-1 lg:order-none transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              inView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-8 lg:-translate-x-6",
            ].join(" ")}
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] w-full overflow-hidden bg-[#0B1F4B]">
              <img
                src={about}
                alt="Surveyor operating a total station on a project site"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* Flat navy overlay for brand cohesion — no gradient */}
              <div className="absolute inset-0 bg-[#0B1F4B]/10" />
            </div>

            {/* Gold corner accent — small, restrained emphasis */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 h-16 w-16 sm:h-20 sm:w-20 border-b-2 border-r-2 border-[#D4A017]" />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-none">
            <p
              className={[
                "text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "120ms" : "0ms" }}
            >
              ABOUT AVANZA
            </p>

            <h2
              id="about-heading"
              className={[
                "mt-4 font-bold leading-[1.15] text-[#0B1F4B]",
                "text-3xl sm:text-4xl lg:text-[42px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "220ms" : "0ms" }}
            >
              Precision in Surveying. Excellence in Instruments.
            </h2>

            <div
              className={[
                "mt-6 space-y-4 max-w-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "340ms" : "0ms" }}
            >
              <p className="text-base sm:text-[17px] leading-relaxed text-slate-600">
                Avanza Survey & Instruments provides professional surveying
                and geospatial solutions for projects that demand accurate,
                dependable data. From topographical and land surveys to DGPS,
                total station, drone surveying, and GIS mapping, we combine
                modern technology with precise fieldwork to deliver reliable
                results.
              </p>
              <p className="text-base sm:text-[17px] leading-relaxed text-slate-600">
                We also provide surveying instruments for sale and rental,
                helping professionals and project teams access the equipment
                they need for accurate measurement and mapping.
              </p>
            </div>

            <div
              className={[
                "mt-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: inView ? "460ms" : "0ms" }}
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-[#0B1F4B] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#0A1A3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
              >
                Discover Avanza
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-[#D4A017] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopographicLines({ inView }) {
  // Concentric contour-style paths, echoing topographic map lines — a
  // restrained nod to surveying/geospatial work without illustration.
  return (
    <svg
      viewBox="0 0 800 800"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={[
        "pointer-events-none absolute -right-24 sm:-right-16 lg:-right-8 top-1/2 -translate-y-1/2",
        "h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] lg:h-[640px] lg:w-[640px]",
        "opacity-0 transition-opacity duration-[1400ms] ease-out",
        inView ? "opacity-[0.06] lg:opacity-[0.08]" : "opacity-0",
      ].join(" ")}
    >
      {[80, 140, 200, 260, 320, 380].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          fill="none"
          stroke="#0B1F4B"
          strokeWidth="1.5"
          style={{
            transitionProperty: "stroke-dashoffset",
            transitionDuration: "1600ms",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: `${i * 90}ms`,
          }}
        />
      ))}
    </svg>
  );
}
