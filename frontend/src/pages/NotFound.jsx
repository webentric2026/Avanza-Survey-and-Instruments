import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import SEO from "../components/SEO.jsx";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/rental", label: "Instruments & Rentals" },
  { to: "/blog", label: "Blog & Guides" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <>
      <SEO
        path="/404"
        title="Page Not Found"
        description="The page you are looking for does not exist. Explore Avanza Survey & Instruments services, equipment rental, blog and contact pages."
        noindex
      />
      <main className="bg-[#F7F7F8] mt-20">
        <div className="mx-auto max-w-[860px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#E6E6E9] bg-white text-[#8A7A3A]">
            <Compass className="h-6 w-6" aria-hidden />
          </span>
          <p className="mt-6 font-mono text-sm tracking-[0.25em] text-[#D4A017]">404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#202B4A] sm:text-5xl">
            This point isn't on our map.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-md leading-6 text-[#5A5A5A]">
            The page you're looking for has moved or never existed. Here are some
            useful places to continue from:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex h-11 items-center border border-[#C9C9CE] bg-white px-5 text-[13px] font-semibold text-[#202B4A] transition hover:border-[#202B4A] hover:bg-[#202B4A] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2 bg-[#D9A515] px-7 text-sm font-bold text-[#202B4A] hover:bg-[#C99A12] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#202B4A]"
          >
            Talk to Our Team <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </main>
    </>
  );
}
