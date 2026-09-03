// src/components/services/ServiceCard.jsx
import { ArrowUpRight } from "lucide-react";
import useInView from "./useInView";

export default function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${index * 90}ms` : "0ms" }}
      className={[
        "group relative flex flex-col justify-between border border-slate-200 bg-white p-7 sm:p-8",
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
        "hover:border-[#0B1F4B]/30 hover:shadow-[0_8px_30px_rgba(11,31,75,0.08)]",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      ].join(" ")}
    >
      {/* Gold accent bar — appears on hover */}
      <span className="absolute left-0 top-0 h-full w-[3px] bg-[#D4A017] scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100" />

      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center border border-slate-200 text-[#0B1F4B] transition-colors duration-300 group-hover:border-[#0B1F4B] group-hover:bg-[#0B1F4B] group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="font-mono text-sm text-slate-300 transition-colors duration-300 group-hover:text-[#D4A017]">
            {service.number}
          </span>
        </div>

        <h3 className="mt-6 text-xl sm:text-[22px] font-semibold text-[#1A1A1A] leading-snug">
          {service.title}
        </h3>

        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-500">
          {service.description}
        </p>
      </div>

      <a
        href='/services'
        aria-label={`Explore ${service.title}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 rounded-sm min-h-[44px] sm:min-h-0"
      >
        <span className="border-b border-transparent group-hover:border-[#0B1F4B] transition-colors duration-300">
          Explore service
        </span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
