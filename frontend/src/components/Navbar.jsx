import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, Mail, Phone, Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.png";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Instruments", to: "/rental" },
    { label: "Services", to: "/services" },
    { label: "Leadership", to: "/leadership" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const menuBtnRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 8);
            lastScrollY.current = y;
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Close on Escape, return focus to trigger button
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
    };

    const navLinkClass = ({ isActive }) =>
        [
            "relative px-1 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200",
            isActive
                ? "text-[#0B1F4B]"
                : "text-slate-600 hover:text-[#0B1F4B]",
            "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[#D4A017] after:transition-all after:duration-300",
            isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
        ].join(" ");

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Information Bar */}
            <div
                className={[
                    "w-full bg-[#0B1F4B] text-slate-200 overflow-hidden transition-all duration-300 ease-in-out",
                    scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
                ].join(" ")}
                aria-hidden={scrolled}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs sm:text-[13px]">
                    <div className="hidden sm:flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#D4A017] shrink-0" aria-hidden="true" />
                        <span className="truncate">
                            4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005
                        </span>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                        <a
                            href="mailto:avanzadelhi@gmail.com"
                            className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors duration-200"
                        >
                            <Mail className="w-3.5 h-3.5 text-[#D4A017] shrink-0" aria-hidden="true" />
                            <span className=" inline">avanzadelhi@gmail.com</span>
                        </a>
                        <a
                            href="tel:+919136154481"
                            className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors duration-200"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#D4A017] shrink-0" aria-hidden="true" />
                            <span>9136154481</span>
                            <span className="hidden lg:inline">/ 8860988478</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav
                className={[
                    "w-full bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ease-in-out shadow-sm",
                    scrolled
                        ? "border-slate-200 shadow-md"
                        : "border-transparent shadow-none",
                ].join(" ")}
                aria-label="Primary"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-[72px]">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 shrink-0 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                            onClick={() => setMenuOpen(false)}
                        >
                            <img
                                src={logo}
                                alt="Avanza Survey & Instruments"
                                className="h-18 md:h-25 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Links */}
                        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
                            {NAV_LINKS.map((link) => (
                                <li key={link.to}>
                                    <NavLink to={link.to} className={navLinkClass} end={link.to === "/"}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <Link
                                to="/contact"
                                className="hidden sm:inline-flex items-center justify-center bg-[#0B1F4B] px-5 py-2.5 text-sm font-semibold text-white border border-[#0B1F4B] transition-all duration-200 hover:bg-[#0A1A3E] hover:border-[#D4A017] hover:text-[#D4A017] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
                            >
                                Get a Quote
                            </Link>

                            <button
                                ref={menuBtnRef}
                                type="button"
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-nav-panel"
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#0B1F4B] hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                            >
                                {menuOpen ? (
                                    <X className="w-6 h-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="w-6 h-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Slide-in Panel (from right) */}
            <div
                className={[
                    "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ease-in-out",
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
                aria-hidden={!menuOpen}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-[#0B1F4B]/40 backdrop-blur-sm"
                    onClick={closeMenu}
                />

                {/* Panel */}
                <div
                    id="mobile-nav-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    className={[
                        "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl",
                        "flex flex-col transition-transform duration-300 ease-in-out will-change-transform",
                        menuOpen ? "translate-x-0" : "translate-x-full",
                    ].join(" ")}
                >
                    {/* Panel Header */}
                    <div className="flex items-center justify-between h-16 md:h-[72px] px-4 sm:px-6 border-b border-slate-100 shrink-0">
                        <img
                            src={logo}
                            alt="Avanza Survey & Instruments"
                            className="h-18 w-auto object-contain"
                        />
                        <button
                            type="button"
                            onClick={closeMenu}
                            aria-label="Close menu"
                            className="inline-flex items-center justify-center w-11 h-11 rounded-md text-[#0B1F4B] hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            <X className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex-1 overflow-y-auto   px-4 sm:px-6 py-4" aria-label="Mobile primary">
                        <ul>
                            {NAV_LINKS.map((link) => (
                                <li key={link.to} className="border-b border-slate-100 last:border-b-0">
                                    <NavLink
                                        to={link.to}
                                        end={link.to === "/"}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            [
                                                "flex items-center min-h-[56px] text-lg font-medium transition-colors duration-200",
                                                isActive ? "text-[#0B1F4B]" : "text-slate-700",
                                                "hover:text-[#0B1F4B]",
                                            ].join(" ")
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                            <a href="tel:+919136154481" className="flex items-center gap-2 min-h-[44px] hover:text-[#0B1F4B] transition-colors duration-200">
                                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" aria-hidden="true" />
                                <span>9136154481 / 8860988478</span>
                            </a>
                            <a href="mailto:avanzadelhi@gmail.com" className="flex items-center gap-2 min-h-[44px] hover:text-[#0B1F4B] transition-colors duration-200">
                                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" aria-hidden="true" />
                                <span>avanzadelhi@gmail.com</span>
                            </a>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" aria-hidden="true" />
                                <span>4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005</span>
                            </div>
                        </div>
                    </nav>

                    {/* CTA */}
                    <div className="px-4 sm:px-6 py-5 border-t border-slate-100 shrink-0">
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="flex items-center justify-center w-full min-h-[52px] bg-[#0B1F4B] text-white font-semibold text-base transition-colors duration-200 hover:bg-[#0A1A3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}