// src/pages/AboutUs.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Map, Satellite, Crosshair, Plane, HardHat, Layers3, } from "lucide-react";
import { companyIntro, ourStory, approachSteps, technology, industries, quality, visionMission, closingCta, } from "./aboutData.js";
import SEO from "../../components/SEO.jsx";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

import about_main from "../../assets/images/Logo.png";

const ICON_MAP = {
    map: Map,
    satellite: Satellite,
    crosshair: Crosshair,
    plane: Plane,
    hardhat: HardHat,
    layers: Layers3,
};

/* Shared scroll-reveal hook, kept local to this file so the whole page
   lives in a single component + a single data file. */
function useReveal({ threshold = 0.2, rootMargin = "0px 0px -60px 0px" } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(media.matches);
        const onChange = () => setReducedMotion(media.matches);
        media.addEventListener?.("change", onChange);
        return () => media.removeEventListener?.("change", onChange);
    }, []);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (reducedMotion) {
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
            { threshold, rootMargin }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [reducedMotion, threshold, rootMargin]);

    return [ref, inView];
}

function Reveal({ as: Tag = "div", inView, delay = 0, className = "", children, ...rest }) {
    return (
        <Tag
            className={[
                `transition-all duration-700 ${EASE}`,
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                className,
            ].join(" ")}
            style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
            {...rest}
        >
            {children}
        </Tag>
    );
}



/* ------------------------- COMPANY INTRO ------------------------- */
function CompanyIntro() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <Reveal as="h2" inView={inView} className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0B1F4B] flex flex-col gap-6 items-center">
                        {companyIntro.heading}
                        <img src={about_main} alt="Company Introduction" className=" w-100" />
                    </Reveal>

                    <Reveal as="div" inView={inView} delay={150} className="space-y-5">
                        {companyIntro.paragraphs.map((p, i) => (
                            <p key={i} className="text-base sm:text-[17px] leading-relaxed text-slate-600">{p}</p>
                        ))}
                    </Reveal>
                </div>

                <div className="mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 border-t border-slate-200 pt-10">
                    {companyIntro.stats.map((stat, i) => (
                        <Reveal key={stat.number} inView={inView} delay={250 + i * 100}>
                            <p className="font-mono text-sm text-[#D4A017]">{stat.number}</p>
                            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#0B1F4B]">{stat.title}</h3>
                            <p className="mt-1.5 text-sm text-slate-500">{stat.description}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------- OUR STORY ---------------------------- */
function OurStory() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="relative overflow-hidden bg-[#0B1F4B] py-20 sm:py-24 lg:py-28">
            <div className="absolute inset-0">
                <img src={ourStory.image} alt={ourStory.alt} className="h-full w-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-[#0B1F4B]/70" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="">
                    <Reveal as="p" inView={inView} className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
                        OUR STORY
                    </Reveal>
                    <Reveal as="h2" inView={inView} delay={120} className="mt-4 text-3xl sm:text-4xl font-bold leading-[1.15] text-white">
                        {ourStory.heading}
                    </Reveal>
                    <Reveal as="p" inView={inView} delay={220} className="mt-5 text-base leading-relaxed text-white/75">
                        {ourStory.text}
                    </Reveal>
                    <Reveal as="div" inView={inView} delay={340} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                        {ourStory.milestones.map((label, i) => (
                            <div key={label} className="flex items-center gap-3">
                                <span className="text-md font-medium text-white/80">{label}</span>
                                {i < ourStory.milestones.length - 1 && (
                                    <span className="h-px w-8 bg-[#D4A017]/60" aria-hidden="true" />
                                )}
                            </div>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------------------------- OUR APPROACH ---------------------------- */
function OurApproach() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">HOW WE WORK</p>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0B1F4B]">How We Work</h2>
                </div>

                <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    <div
                        className={`hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-slate-200 origin-left transition-transform duration-[900ms] ${EASE} ${inView ? "scale-x-100" : "scale-x-0"}`}
                        aria-hidden="true"
                    />
                    {approachSteps.map((step, i) => (
                        <Reveal key={step.id} inView={inView} delay={i * 140} className="relative flex flex-col items-center text-center">
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0B1F4B] bg-white font-mono text-sm font-semibold text-[#0B1F4B]">
                                {step.number}
                            </div>
                            <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#0B1F4B]">{step.title}</h3>
                            <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-500 max-w-xs">{step.description}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------ TECHNOLOGY & EQUIPMENT ------------------------ */
function TechnologyEquipment() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="bg-[#FAFAF9] py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">TECHNOLOGY</p>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0B1F4B]">{technology.heading}</h2>
                        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">{technology.text}</p>
                    </div>
                    <Link
                        to="/rental"
                        className="group inline-flex shrink-0 items-center gap-2.5 border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-[#0B1F4B] hover:text-white self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                    >
                        Explore Our Equipment
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                </div>

                <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                    {technology.categories.map((item, i) => (
                        <Reveal key={item.id} inView={inView} delay={i * 70} className="group relative aspect-square overflow-hidden bg-[#0B1F4B]">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${EASE} group-hover:scale-110`}
                            />
                            <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/35" />
                            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white leading-snug">{item.title}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------- INDUSTRIES SLIDER -------------------------- */
function IndustriesSlider() {
    const [ref, inView] = useReveal();
    const trackRef = useRef(null);
    const slideRefs = useRef([]);
    const [index, setIndex] = useState(0);
    const total = industries.length;

    const centerSlide = useCallback((i, behavior = "smooth") => {
        const track = trackRef.current;
        const slide = slideRefs.current[i];
        if (!track || !slide) return;
        const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
        track.scrollTo({ left, behavior });
    }, []);

    const goTo = (i) => {
        const normalized = (i + total) % total;
        setIndex(normalized);
        centerSlide(normalized);
    };

    useEffect(() => {
        centerSlide(0, "auto");
    }, [centerSlide]);

    return (
        <section ref={ref} className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">INDUSTRIES WE SERVE</p>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0B1F4B]">
                            Built for the Projects That Shape Communities
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 self-start">
                        <button
                            type="button"
                            onClick={() => goTo(index - 1)}
                            aria-label="Previous industry"
                            className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => goTo(index + 1)}
                            aria-label="Next industry"
                            className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    className="mt-10 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {industries.map((industry, i) => (
                        <div key={industry.id} ref={(node) => (slideRefs.current[i] = node)} className="w-[80%] sm:w-[46%] lg:w-[30%] shrink-0 snap-start">
                            <article className="group relative h-[340px] sm:h-[380px] overflow-hidden bg-[#0B1F4B]">
                                <img
                                    src={industry.image}
                                    alt={industry.alt}
                                    loading="lazy"
                                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${EASE} group-hover:scale-105`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="relative z-10 flex h-full flex-col justify-end p-6 ">
                                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/80">{industry.description}</p>
                                    <Link
                                        to="/services"
                                        className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-white hover:text-[#D4A017] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                                    >
                                        Learn more
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* ------------------------- QUALITY & ACCURACY ------------------------- */
function QualityAccuracy() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            <svg
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-[1400ms] ${inView ? "opacity-[0.04]" : "opacity-0"}`}
            >
                <defs>
                    <pattern id="quality-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                        <path d="M56 0H0V56" fill="none" stroke="#0B1F4B" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#quality-grid)" />
            </svg>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">QUALITY & ACCURACY</p>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0B1F4B]">{quality.heading}</h2>
                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">{quality.text}</p>
                </div>

                <div className="mt-14 flex flex-wrap items-center gap-3 sm:gap-4">
                    {quality.workflow.map((step, i) => (
                        <div key={step} className="flex items-center gap-3 sm:gap-4">
                            <Reveal
                                inView={inView}
                                delay={i * 90}
                                className="border border-slate-200 bg-[#FAFAF9] px-4 sm:px-5 py-3 text-sm font-medium text-[#0B1F4B]"
                            >
                                {step}
                            </Reveal>
                            {i < quality.workflow.length - 1 && (
                                <span
                                    className={`h-px w-6 sm:w-8 bg-[#D4A017] origin-left transition-transform duration-500 ease-out ${inView ? "scale-x-100" : "scale-x-0"}`}
                                    style={{ transitionDelay: inView ? `${i * 90 + 60}ms` : "0ms" }}
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* --------------------------- VISION & MISSION --------------------------- */
function VisionMission() {
    const [ref, inView] = useReveal();

    return (
        <section ref={ref} className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {visionMission.map((card, i) => (
                        <Reveal key={card.label} inView={inView} delay={i * 140} className="border border-slate-200 bg-[#FAFAF9] p-8 sm:p-10 lg:p-12">
                            <p className="text-2xl md:text-3xl font-semibold tracking-[0.25em] text-[#D4A017]">{card.label}</p>

                            <p className="mt-5 text-base leading-relaxed text-slate-600">{card.text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================ PAGE EXPORT ============================ */
export default function AboutUs() {
    return (
        <>
            <SEO
                path="/about"
                title="About Us"
                description="Avanza Survey & Instruments is a professional surveying and geospatial company in Delhi — DGPS, total station, drone surveys, GIS mapping and equipment rental built on accuracy."
                keywords={[
                    "survey company Delhi",
                    "Avanza Survey Instruments",
                    "geospatial company India",
                    "professional land surveyors Delhi",
                ]}
            />
            <main className="mt-10">

                <CompanyIntro />
                <OurStory />
                <OurApproach />
                <TechnologyEquipment />
                <IndustriesSlider />
                <QualityAccuracy />
                <VisionMission />
            </main>
        </>
    );
}
