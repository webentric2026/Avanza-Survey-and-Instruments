import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, SlidersHorizontal, X, ArrowRight, ArrowUpRight, ShieldCheck, Headset, Phone, Mail, Clock3
} from "lucide-react";

import { CATEGORIES, INSTRUMENTS } from "../data/rentalData.js";
import { Link } from "react-router-dom";


const BRANDS = [...new Set(INSTRUMENTS.map((i) => i.brand))];
const AVAIL_OPTIONS = ["Available", "Limited", "On Request"];

/* helpers */

function useLockScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function Badge({ children, tone = "default" }) {
  const tones = {
    default: "bg-white border-slate-200 text-slate-700",
    available: "bg-emerald-50 border-emerald-200 text-emerald-700",
    limited: "bg-amber-50 border-amber-200 text-amber-700",
    request: "bg-slate-100 border-slate-200 text-slate-600",
  };
  return (
    <span className={`inline-flex items-center border px-2 py-1 text-[11px] font-semibold tracking-[0.04em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-[2px] w-6 bg-[#D4A017]" aria-hidden />
      <span className="text-[11px] font-bold tracking-[0.16em] text-[#D4A017]">{children}</span>
    </div>
  );
}


export default function Instrument() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [detail, setDetail] = useState(null);
  const [toast, setToast] = useState("");

  // form state
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    instrument: "",
    start: "",
    duration: "1 week",
    location: "",
    qty: "1",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useLockScroll(!!detail || showFilters);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return INSTRUMENTS.filter((it) => {
      if (category !== "all" && it.category !== category) return false;
      if (brand !== "all" && it.brand !== brand) return false;
      if (availability !== "all" && it.availability !== availability) return false;
      if (!q) return true;
      const hay = `${it.name} ${it.brand} ${it.model} ${it.categoryLabel} ${it.desc}`.toLowerCase();
      return hay.includes(q);
    });
  }, [search, category, brand, availability]);

  const hasActiveFilters = category !== "all" || brand !== "all" || availability !== "all" || search.trim() !== "";

  function clearFilters() {
    setCategory("all");
    setBrand("all");
    setAvailability("all");
    setSearch("");
  }

  function handleCategorySelect(id) {
    setCategory(id);
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openDetail(item) {
    setDetail(item);
  }

  function handleEnquire(item) {
    setForm((f) => ({ ...f, instrument: item.name }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setToast(`Prefilled — ${item.name}`);
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 antialiased selection:bg-[#D4A017] selection:text-white">

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mt-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>EQUIPMENT CATEGORIES</SectionLabel>
            <h2
              className="mt-2 font-bold leading-none tracking-tight text-[#0B1220] text-3xl sm:text-3xl lg:text-4xl"
            >
              Surveying Instruments <br /> for Every Project
            </h2>
          </div>
          <p className="max-w-[520px] text-sm leading-6 text-slate-600">
            From precise positioning and measurement to topographic mapping and construction layout, choose equipment suited to the
            demands of your project.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`group overflow-hidden border bg-white text-left transition hover:border-[#0B1220] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] ${category === cat.id ? "border-[#0B1220] ring-1 ring-[#0B1220]" : "border-slate-200"
                }`}
            >
              <div className="h-[132px] overflow-hidden bg-slate-100 sm:h-[200px]">
                <img
                  src={cat.image}
                  alt={`${cat.name} — ${cat.desc}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="text-md sm:text-lg font-semibold leading-tight text-[#0B1220]">{cat.name}</div>
                <div className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">{cat.desc}</div>

              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-bold tracking-tight text-[#0B1220]" >
                Available Instruments
              </h2>
              <p className="mt-1 text-[14px] text-slate-600">
                Explore professional surveying equipment available for short-term and long-term rental.{" "}
                <span className="font-semibold text-[#0B1220]">
                  {filtered.length} instrument{filtered.length !== 1 ? "s" : ""} found
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <button onClick={clearFilters} className="hidden h-9 border border-slate-300 bg-white px-4 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 sm:inline-flex sm:items-center">
                  Clear Filters <X className="ml-1.5 h-3.5 w-3.5" />
                </button>
              )}
              <button
                onClick={() => setShowFilters(true)}
                className="inline-flex h-9 items-center gap-2 bg-[#0B1220] px-4 text-[13px] font-semibold text-white lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
                {hasActiveFilters && <span className="bg-[#D4A017] px-1.5 py-0.5 text-[11px]">•</span>}
              </button>
            </div>
          </div>

          {/* search + desktop filters */}
          <div className="mt-6 flex flex-col gap-3 border border-slate-200 bg-white p-3 lg:flex-row">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search instruments, brands or models..."
                className="h-10 w-full border border-slate-200 bg-[#F8F9FB] pl-10 pr-4 text-[13px] placeholder:text-slate-400 focus:border-[#0B1220] focus:bg-white focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center border border-slate-200 bg-white"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </label>

            <div className="hidden gap-2 lg:flex">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 border border-slate-200 bg-white px-3 text-[13px] font-medium text-slate-700 focus:outline-none"
                aria-label="Filter by category"
              >
                <option value="all">All categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="h-10 border border-slate-200 bg-white px-3 text-[13px] font-medium text-slate-700 focus:outline-none"
                aria-label="Filter by brand"
              >
                <option value="all">All brands</option>
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="h-10 border border-slate-200 bg-white px-3 text-[13px] font-medium text-slate-700 focus:outline-none"
                aria-label="Filter by availability"
              >
                <option value="all">All availability</option>
                {AVAIL_OPTIONS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="h-10 border border-slate-300 bg-white px-4 text-[13px] font-semibold text-[#0B1220] hover:bg-slate-50">
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* active filter chips */}
          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              {category !== "all" && (
                <button onClick={() => setCategory("all")} className="inline-flex items-center gap-1.5 border border-slate-200 bg-[#F8F9FB] px-2.5 py-1 text-[12px] font-medium">
                  {CATEGORIES.find((c) => c.id === category)?.name} <X className="h-3 w-3" />
                </button>
              )}
              {brand !== "all" && (
                <button onClick={() => setBrand("all")} className="inline-flex items-center gap-1.5 border border-slate-200 bg-[#F8F9FB] px-2.5 py-1 text-[12px] font-medium">
                  {brand} <X className="h-3 w-3" />
                </button>
              )}
              {availability !== "all" && (
                <button onClick={() => setAvailability("all")} className="inline-flex items-center gap-1.5 border border-slate-200 bg-[#F8F9FB] px-2.5 py-1 text-[12px] font-medium">
                  {availability} <X className="h-3 w-3" />
                </button>
              )}
              {search && (
                <button onClick={() => setSearch("")} className="inline-flex items-center gap-1.5 border border-slate-200 bg-[#F8F9FB] px-2.5 py-1 text-[12px] font-medium">
                  “{search}” <X className="h-3 w-3" />
                </button>
              )}
            </div>
          )}

          {/* grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((it) => (
                <motion.article
                  key={it.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col overflow-hidden border border-slate-200 bg-white"
                >
                  <div className="relative h-[310px] overflow-hidden bg-slate-100">
                    <img src={it.image} alt={`${it.brand} ${it.name} — ${it.categoryLabel}`} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-white/90 px-3 py-1.5 text-lg font-semibold tracking-wide text-black backdrop-blur">
                      <span>
                        {it.brand} • {it.model}
                      </span>

                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">

                    <div className="mt-4 grid grid-cols-1 gap-2">
                      <button
                        onClick={() => openDetail(it)}
                        className="h-9 border border-slate-300 bg-white text-[13px] font-semibold text-[#0B1220] hover:bg-slate-50"
                      >
                        View Details
                      </button>
                      <Link to="/contact" className="h-9 bg-[#0B1220] text-[13px] font-semibold text-white hover:bg-black flex items-center justify-center">
                        Enquire for Rental

                      </Link>

                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="mt-6 border border-slate-200 bg-white p-10 text-center sm:p-12">
              <div className="mx-auto grid h-12 w-12 place-items-center border border-slate-200 bg-[#F8F9FB]">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <div className="mt-4 font-semibold text-[#0B1220]" style={{ fontFamily: "Instrument Sans, Inter, sans-serif" }}>
                No instruments match your filters
              </div>
              <p className="mx-auto mt-1 max-w-md text-[13px] leading-5 text-slate-500">Try adjusting search or clearing filters to see more equipment.</p>
              <button onClick={clearFilters} className="mt-4 inline-flex h-9 items-center bg-[#0B1220] px-5 text-[13px] font-semibold text-white">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1220]/60 p-4 backdrop-blur-[2px] sm:p-6"
            onClick={() => setDetail(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto my-6 max-w-[980px] overflow-hidden border border-slate-200 bg-white"
            >
              <button
                onClick={() => setDetail(null)}
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center border border-slate-200 bg-white hover:bg-slate-50"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[360px] bg-slate-100 lg:h-auto">
                  <img src={detail.image} alt={`${detail.brand} ${detail.name}`} className="h-full min-h-[360px] w-full object-cover lg:min-h-full" />
                  <span className="absolute left-4 top-4 bg-[#0B1220] px-2.5 py-1.5 text-[11px] font-bold tracking-[0.12em] text-white">
                    {detail.categoryLabel.toUpperCase()}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-bold tracking-[0.14em] text-[#D4A017]">
                    {detail.brand.toUpperCase()} • {detail.model}
                  </div>
                  <h3 className="mt-1 font-bold leading-none tracking-tight text-[#0B1220]" style={{ fontFamily: "Instrument Sans, Inter, sans-serif", fontSize: "24px" }}>
                    {detail.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-slate-600">{detail.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge tone={detail.availability === "Available" ? "available" : detail.availability === "Limited" ? "limited" : "request"}>
                      {detail.availability === "Available" ? "Available for Rental" : detail.availability === "Limited" ? "Limited Availability" : "On Request"}
                    </Badge>
                    <span className="border border-slate-200 bg-[#F8F9FB] px-2 py-1 text-[11px] text-slate-600">Rental pricing on request</span>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] font-bold tracking-[0.14em] text-slate-500">TECHNICAL SPECIFICATIONS</div>
                    <div className="mt-2 grid gap-2">
                      {detail.specs.map((s) => (
                        <div key={s} className="flex gap-2 border border-slate-200 bg-[#F8F9FB] px-3 py-2 text-[13px] text-slate-700">
                          <span className="text-[#D4A017]">—</span> {s}
                        </div>
                      ))}
                      <div className="flex gap-2 border border-slate-200 bg-[#F8F9FB] px-3 py-2 text-[13px] text-slate-700">
                        <span className="text-[#D4A017]">—</span> Availability: {detail.availability}
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-500">Specifications shown as provided. Final details confirmed at quotation.</p>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] font-bold tracking-[0.14em] text-slate-500">TYPICAL APPLICATIONS</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {detail.apps.map((a) => (
                        <span key={a} className="border border-slate-200 bg-white px-2.5 py-1 text-[12px] text-slate-700">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        const it = detail;
                        setDetail(null);
                        handleEnquire(it);
                      }}
                      className="h-10 bg-[#D4A017] text-[13px] font-semibold text-white hover:bg-[#B8860B]"
                    >
                      Enquire for Rental
                    </button>
                    <a
                      href="#enquiry"
                      onClick={() => setDetail(null)}
                      className="grid h-10 place-items-center border border-slate-300 bg-white text-[13px] font-semibold text-[#0B1220] hover:bg-slate-50"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-40 bg-[#0B1220]/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[92%] max-w-[380px] flex-col border-l border-slate-200 bg-white"
            >
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4">
                <span className="text-[13px] font-bold tracking-[0.12em]">FILTERS</span>
                <button onClick={() => setShowFilters(false)} className="grid h-8 w-8 place-items-center border border-slate-200 bg-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-5">
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.14em] text-slate-500">CATEGORY</div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 h-10 w-full border border-slate-200 bg-[#F8F9FB] px-3 text-[13px]">
                      <option value="all">All categories</option>
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.14em] text-slate-500">BRAND</div>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-2 h-10 w-full border border-slate-200 bg-[#F8F9FB] px-3 text-[13px]">
                      <option value="all">All brands</option>
                      {BRANDS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.14em] text-slate-500">AVAILABILITY</div>
                    <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="mt-2 h-10 w-full border border-slate-200 bg-[#F8F9FB] px-3 text-[13px]">
                      <option value="all">All availability</option>
                      {AVAIL_OPTIONS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="block">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-slate-500">SEARCH</span>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search instruments..." className="mt-2 h-10 w-full border border-slate-200 bg-[#F8F9FB] px-3 text-[13px]" />
                  </label>
                </div>
              </div>
              <div className="flex gap-2 border-t border-slate-200 p-3">
                <button onClick={clearFilters} className="h-10 flex-1 border border-slate-300 bg-white text-[13px] font-semibold">
                  Clear
                </button>
                <button onClick={() => setShowFilters(false)} className="h-10 flex-1 bg-[#0B1220] text-[13px] font-semibold text-white">
                  Show {filtered.length} results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      <div className="h-[64px] lg:hidden" aria-hidden />

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md border border-slate-200 bg-[#0B1220] px-4 py-3 text-center text-[13px] font-medium text-white shadow-lg sm:bottom-6 lg:bottom-6">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}

function Field({ label, children, error, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[11px] font-semibold tracking-[0.08em] text-slate-600">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-[11px] font-medium text-red-600">{error}</span>}
    </label>
  );
}
