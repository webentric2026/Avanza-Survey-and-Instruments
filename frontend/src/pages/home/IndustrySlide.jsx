// src/components/industries/IndustrySlide.jsx
import { ArrowUpRight } from "lucide-react";

export default function IndustrySlide({ industry, isActive }) {
  return (
    <article
      className={[
        "group relative isolate overflow-hidden bg-[#0B1F4B] transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "h-[420px] sm:h-[470px] lg:h-[560px]",
        isActive
          ? "scale-100 opacity-100 shadow-[0_20px_60px_rgba(11,31,75,0.18)]"
          : "scale-[0.94] opacity-65 shadow-none",
      ].join(" ")}
      aria-hidden={!isActive}
    >
      <img
        src={industry.image}
        alt={industry.alt}
        loading="lazy"
        className={[
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isActive ? "scale-100" : "scale-105",
        ].join(" ")}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
        <div
          className={[
            "max-w-[34rem] transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isActive ? "translate-y-0 opacity-100" : "translate-y-5 opacity-70",
          ].join(" ")}
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#D4A017]">
            {industry.number} / 06
          </p>

          <h3 className="mt-3 text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold leading-tight text-white">
            {industry.title}
          </h3>

          <p className="mt-3 max-w-[30rem] text-sm sm:text-base leading-relaxed text-white/82">
            {industry.description}
          </p>


        </div>
      </div>
    </article>
  );
}
