// src/components/equipment/EquipmentSection.jsx
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import equipment from "../../data/equipmentData.js";
import EquipmentShowcase from "./EquipmentShowcase";

const AUTO_DELAY = 5800;
const RESUME_DELAY = 4200;

export default function EquipmentSection() {
    const [index, setIndex] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [manualPause, setManualPause] = useState(false);

    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const autoplayRef = useRef(null);
    const resumeRef = useRef(null);
    const touchStartX = useRef(null);

    const total = equipment.length;

    const pauseTemporarily = useCallback(() => {
        setManualPause(true);
        window.clearTimeout(resumeRef.current);
        resumeRef.current = window.setTimeout(() => setManualPause(false), RESUME_DELAY);
    }, []);

    const goTo = useCallback(
        (target, triggeredByUser = false) => {
            setIndex((target + total) % total);
            if (triggeredByUser) pauseTemporarily();
        },
        [pauseTemporarily, total]
    );

    const next = useCallback((triggeredByUser = true) => goTo(index + 1, triggeredByUser), [goTo, index]);
    const prev = useCallback((triggeredByUser = true) => goTo(index - 1, triggeredByUser), [goTo, index]);

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
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.25 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || !isInView || isHovered || manualPause) return;
        window.clearTimeout(autoplayRef.current);
        autoplayRef.current = window.setTimeout(() => next(false), AUTO_DELAY);
        return () => window.clearTimeout(autoplayRef.current);
    }, [index, isHovered, isInView, manualPause, next, prefersReducedMotion]);

    useEffect(() => {
        return () => {
            window.clearTimeout(autoplayRef.current);
            window.clearTimeout(resumeRef.current);
        };
    }, []);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") next(true);
        if (e.key === "ArrowLeft") prev(true);
    };

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        pauseTemporarily();
    };

    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) prev(true);
        if (delta < -50) next(true);
        touchStartX.current = null;
    };

    return (
        <section
            ref={sectionRef}
            id="equipment"
            aria-labelledby="equipment-heading"
            className="relative overflow-hidden bg-[#FAFAF9] py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                {/* Header row */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
                            SURVEYING EQUIPMENT
                        </p>
                        <h2
                            id="equipment-heading"
                            className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] text-[#0B1F4B]"
                        >
                            Professional equipment for precise fieldwork.
                        </h2>
                        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                            Explore reliable surveying instruments available for sale and
                            rental, selected to support accurate measurement, mapping,
                            construction, and geospatial work.
                        </p>
                    </div>

                    <a
                        href="/rental"
                        className="group inline-flex shrink-0 items-center gap-2.5 border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-[#0B1F4B] hover:text-white self-start lg:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                    >
                        View All Equipment
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                </div>

                {/* Showcase */}
                <div
                    className="relative mt-14 lg:mt-16"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onKeyDown={onKeyDown}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    tabIndex={0}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Surveying equipment showcase"
                >
                    <div ref={trackRef} className="relative">
                        {equipment.map((item, i) => (
                            <div key={item.id} className={i === index ? "block" : "hidden"}>
                                <EquipmentShowcase item={item} isActive={i === index} />
                            </div>
                        ))}
                    </div>

                    {/* Nav arrows */}
                    <div className="mt-8 flex items-center justify-center gap-3 lg:absolute lg:right-0 lg:top-0 lg:mt-0">
                        <button
                            type="button"
                            onClick={() => prev(true)}
                            aria-label="Previous equipment category"
                            className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => next(true)}
                            aria-label="Next equipment category"
                            className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-slate-300 text-[#0B1F4B] transition-all duration-300 hover:border-[#0B1F4B] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/* Category progress indicator */}
                <div
                    className="mt-10 flex items-center justify-center gap-2 sm:gap-3"
                    role="tablist"
                    aria-label="Select equipment category"
                >
                    {equipment.map((item, i) => (
                        <button
                            key={item.id}
                            role="tab"
                            aria-selected={i === index}
                            aria-label={`View ${item.title}`}
                            onClick={() => goTo(i, true)}
                            className={[
                                "h-[3px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]",
                                i === index ? "w-8 bg-[#D4A017]" : "w-4 bg-slate-300 hover:bg-slate-400",
                            ].join(" ")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
