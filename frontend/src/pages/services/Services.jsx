import React, { useEffect, useRef } from "react";
import instruments from "../../assets/images/equipments/accessories.jfif";
import {
  Mountain,
  Satellite,
  Plane,
  Crosshair,
  Map,
  ScanLine,
  ShoppingCart,
  HandCoins,
  ArrowRight,
  Phone,
  Building2,
  LandPlot,
  Route,
  Pickaxe,
  Landmark,
  Layers,
  Navigation,
  Box,
  Ruler,
} from "lucide-react";


const SERVICES = [
  {
    title: "Topographical Survey",
    desc: "Detailed measurement and mapping of terrain, elevations, natural features, and existing site conditions.",
    icon: Mountain,
  },
  {
    title: "DGPS Survey",
    desc: "High-precision positioning and coordinate data for surveying, mapping, boundary identification, and infrastructure projects.",
    icon: Satellite,
  },
  {
    title: "Drone Survey",
    desc: "Efficient aerial data collection for large areas, terrain mapping, site documentation, and project monitoring.",
    icon: Plane,
  },
  {
    title: "Total Station Survey",
    desc: "Precise measurement of angles, distances, coordinates, and elevations for construction and engineering applications.",
    icon: Crosshair,
  },
  {
    title: "GIS Mapping",
    desc: "Digital mapping and spatial data solutions for visualization, analysis, planning, and asset management.",
    icon: Map,
  },
  {
    title: "Land Survey",
    desc: "Accurate land measurement, boundary identification, area calculation, and site-related surveying.",
    icon: LandPlot,
  },
  {
    title: "Survey Instrument Sales",
    desc: "Supply of reliable surveying instruments and accessories for professional field applications.",
    icon: ShoppingCart,
  },
  {
    title: "Survey Instrument Rental",
    desc: "Flexible rental solutions for survey equipment, helping projects access professional instruments without unnecessary capital investment.",
    icon: HandCoins,
  },
];

const STEPS = [
  { n: "01", t: "Understand", d: "Understand the project requirements, site conditions, and expected deliverables." },
  { n: "02", t: "Survey", d: "Deploy the appropriate surveying equipment and field expertise." },
  { n: "03", t: "Process", d: "Process, validate, and organize the collected survey data." },
  { n: "04", t: "Deliver", d: "Provide accurate, usable outputs aligned with the project requirements." },
];

const INDUSTRIES = [
  { label: "Construction & Infrastructure", icon: Building2 },
  { label: "Real Estate & Land Development", icon: LandPlot },
  { label: "Roads & Transportation", icon: Route },
  { label: "Urban Planning", icon: Landmark },
  { label: "Mining", icon: Pickaxe },
  { label: "Government & Public Infrastructure", icon: Landmark },
];

const EQUIPMENT = [
  { label: "Total Stations", icon: Crosshair },
  { label: "DGPS / GNSS", icon: Satellite },
  { label: "Surveying Drones", icon: Plane },
  { label: "Auto Levels", icon: Ruler },
  { label: "Survey Accessories", icon: Box },
];

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      refs.current.forEach((el) => el && el.classList.add("is-visible"));
      return;
    }
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      refs.current.forEach((el) => el && el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };
}

export default function Services() {
  const setReveal = useReveal();

  useEffect(() => {
    const prev = document.title;
    document.title = "Surveying & Geospatial Services | Avanza Survey & Instruments";
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    const prevDesc = meta.content;
    meta.content = "Avanza Survey & Instruments provides topographical, DGPS, drone, total station, GIS, land surveying, and survey instrument sales and rental services.";
    return () => { document.title = prev; if (created) meta.remove(); else meta.content = prevDesc; };
  }, []);

  const phoneTel = "+919136154481";

  return (
    <div className="min-h-screen bg-[#F7F7F8] text-[#202020] antialiased">

      <main id="main-content">

        {/* SERVICES OVERVIEW */}
        <section className="bg-[#F7F7F8] py-8 sm:py-10 lg:py-12 mt-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div ref={setReveal} className="reveal max-w-[720px]">
              <h2 id="services-heading" className="font-display text-4xl font-bold tracking-tight text-[#202B4A] ">Surveying & Geospatial Services</h2>
              <p className="mt-2 text-md leading-6 text-[#5A5A5A]">
                Avanza provides accurate field data, mapping, and surveying solutions for construction, infrastructure, land development, and other projects — combining modern instruments with practical field experience to deliver results you can rely on.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  ref={setReveal}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="reveal card-hover flex flex-col border border-[#D4A017] bg-white p-5"
                >
                  <span className="grid h-9 w-9 place-items-center border border-[#E6E6E9] bg-white text-[#202B4A]">
                    <s.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-tight text-[#202B4A]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-[#6A6A6A]">{s.desc}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="bg-[#F7F7F8] py-8 sm:py-10 lg:py-12" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div ref={setReveal} className="reveal flex items-end justify-between gap-4">
              <h2 id="industries-heading" className="font-display text-4xl font-bold tracking-tight text-[#202B4A] ">Industries We Serve</h2>

            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.label}
                  ref={setReveal}
                  className="card-hover group flex items-center gap-3 border border-[#D4A017] bg-white px-4 py-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#E6E6E9] bg-[#F7F7F8] text-[#202B4A] group-hover:border-[#D9A515] group-hover:text-[#202B4A]">
                    <ind.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-[12.5px] font-semibold leading-tight text-[#202B4A]">{ind.label}</span>
                </div>
              ))}
            </div>
            <a href="/about" className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#202B4A] hover:text-[#D9A515] sm:hidden">
              View all industries <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </section>

        {/* EQUIPMENT & TECHNOLOGY */}
        <section className="border-y border-[#E6E6E9] bg-white py-8 sm:py-10 lg:py-12" aria-labelledby="equipment-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
              <div ref={setReveal} className="reveal lg:col-span-7">
                <h2 id="equipment-heading" className="font-display text-4xl font-bold tracking-tight text-[#202B4A] ">Powered by the Right Technology</h2>
                <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#5A5A5A]">
                  From total stations and DGPS equipment to drones and precision surveying accessories, Avanza combines modern instruments with practical field expertise.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {EQUIPMENT.map((eq) => (
                    <span key={eq.label} className="inline-flex items-center gap-1.5 border border-[#E6E6E9] bg-[#F7F7F8] px-3 py-1.5 text-sm font-medium text-[#202B4A]">
                      <eq.icon className="h-3.5 w-3.5 text-[#8A7A3A]" aria-hidden /> {eq.label}
                    </span>
                  ))}
                </div>
                <a href="/rental" className="mt-6 inline-flex h-12 items-center gap-2 border border-[#202B4A] bg-white px-5 text-md font-semibold text-[#202B4A] hover:bg-[#F7F7F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A515] focus-visible:ring-offset-2">
                  Explore Our Instruments <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
              <div ref={setReveal} className="reveal lg:col-span-5">
                <div className="overflow-hidden border border-[#E6E6E9] bg-[#F7F7F8]">
                  <img
                    src={instruments}
                    alt="Surveying instruments including total station and accessories on site"
                    width={700}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="h-[260px] w-full object-cover sm:h-[300px]"
                  />
                </div>
                <p className="mt-2 text-[11px] leading-4 text-[#8A8A8A]">Modern instruments, maintained for dependable field performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F7F8] py-8 sm:py-10" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div ref={setReveal} className="reveal relative overflow-hidden border border-[#202B4A] bg-[#202B4A] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#D9A515]" aria-hidden />
              <div>
                <h2 id="cta-heading" className="font-display text-[20px] font-bold tracking-tight text-white sm:text-[22px]">Have a Surveying Requirement?</h2>
                <p className="mt-2 max-w-[520px] text-[12.5px] leading-6 text-white/70">Tell us about your project and our team will help you identify the right surveying solution.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <a href="/contact" className="inline-flex h-10 items-center justify-center gap-2 bg-[#D9A515] px-6 text-[12.5px] font-bold tracking-wide text-[#202B4A] hover:bg-[#C99A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#202B4A]">
                  Contact Avanza <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a href={`tel:${phoneTel}`} className="inline-flex h-10 items-center justify-center gap-2 border border-white/20 bg-transparent px-6 text-[12.5px] font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#202B4A]">
                  <Phone className="h-3.5 w-3.5" aria-hidden /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
