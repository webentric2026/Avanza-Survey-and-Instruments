// src/components/why-choose-us/ReasonItem.jsx
export default function ReasonItem({ reason, index, inView, offsetClass = "" }) {
  const Icon = reason.icon;

  return (
    <div
      className={[
        "group relative border-t border-white/15 pt-6 sm:pt-7 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        offsetClass,
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: inView ? `${index * 110}ms` : "0ms" }}
    >
      {/* Coordinate-style tick mark, appears on hover */}
      <span
        aria-hidden="true"
        className="absolute -top-[1px] left-0 h-[2px] w-0 bg-[#D4A017] transition-all duration-500 ease-out group-hover:w-10"
      />

      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs text-white/50 transition-colors duration-300 group-hover:text-[#D4A017]">
            {reason.number}
          </span>
          <div className="mt-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center border border-white/25 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#D4A017] group-hover:text-[#D4A017]">
            <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        <div className="pt-1">
          <h3 className="text-lg sm:text-xl font-semibold leading-snug text-white">
            {reason.title}
          </h3>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-white/65 max-w-md">
            {reason.description}
          </p>
        </div>
      </div>
    </div>
  );
}
