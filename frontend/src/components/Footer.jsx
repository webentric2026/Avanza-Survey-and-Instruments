// src/components/footer/Footer.jsx
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "../assets/images/Logo.png";
import { NAV_LINKS, SERVICE_LINKS, CONTACT_INFO } from "../data/footerData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1F4B] text-white/70">
      {/* Faint coordinate-grid backdrop, consistent with Why Choose Us section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" preserveAspectRatio="none">
          <defs>
            <pattern id="footer-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top area: brand + nav + services + contact */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm">
              <img
                src={logo}
                alt="Avanza Survey & Instruments"
                className="h-25 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Precision in Surveying, Excellence in Instruments.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#D4A017]">
              QUICK LINKS
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#D4A017]">
              SERVICES
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + CTA */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#D4A017]">
              GET IN TOUCH
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#D4A017]" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${CONTACT_INFO.phones[0]}`}
                  className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#D4A017]" aria-hidden="true" />
                  <span>{CONTACT_INFO.phones.join(" / ")}</span>
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#0B1F4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F4B]"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/45 text-center sm:text-left">
            © {year} Avanza Survey & Instruments. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Designed for precision-driven surveying & geospatial solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
