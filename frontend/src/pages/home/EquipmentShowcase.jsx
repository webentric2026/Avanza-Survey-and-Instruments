// src/components/equipment/EquipmentShowcase.jsx
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function EquipmentShowcase({ item, isActive }) {
  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch"
      aria-hidden={!isActive}
    >
      {/* Image — dominates ~55% of the showcase on desktop */}
      <div
        className={[
          "relative overflow-hidden bg-[#0B1F4B] transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "h-[300px] sm:h-[380px] lg:h-[480px]",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]",
        ].join(" ")}
      >
        <img
          src={item.image}
          alt={item.alt}
          loading={isActive ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1F4B]/10" />
        <div className="absolute bottom-4 right-4 h-14 w-14 sm:h-16 sm:w-16 border-b-2 border-r-2 border-[#D4A017]" />
      </div>

      {/* Content */}
      <div
        className={[
          "flex flex-col justify-center px-1 lg:pl-14 py-6 lg:py-0 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
        style={{ transitionDelay: isActive ? "120ms" : "0ms" }}
      >
        <p className="text-sm font-medium tracking-[0.2em] text-[#D4A017]">
          {item.number} / 06
        </p>

        <h3 className="mt-4 text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-tight text-[#0B1F4B]">
          {item.title}
        </h3>

        <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-slate-400">
          {item.category.toUpperCase()}
        </p>

        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
          {item.description}
        </p>

        <a
          href="#equipment-catalogue"
          className="group mt-7 inline-flex items-center gap-2.5 text-sm font-semibold text-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 rounded-sm"
        >
          <span className="border-b border-transparent group-hover:border-[#0B1F4B] transition-colors duration-300">
            Explore Equipment
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
