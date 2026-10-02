import React, { useEffect, useRef } from "react";
import { ArrowRight, Compass, ShieldCheck, Layers, Clock3 } from "lucide-react";
import founder from "../assets/images/sonu.jpg";
import SEO from "../components/SEO.jsx";


const FOUNDER_IMAGE = founder;
const FOUNDER_IMAGE_ALT = "Sonu Kumar Jaluthria, Owner";

const PRINCIPLES = [
  {
    id: "01",
    title: "Precision",
    text: "Accuracy is the foundation of every reliable survey and every decision that follows.",
  },
  {
    id: "02",
    title: "Practicality",
    text: "Technology should solve real field problems, not simply add complexity.",
  },
  {
    id: "03",
    title: "Responsibility",
    text: "Every measurement and deliverable carries responsibility because projects depend on it.",
  },
  {
    id: "04",
    title: "Long-Term Thinking",
    text: "Build systems, relationships, and capabilities that create value beyond a single project.",
  },
];

export default function Leadership() {
  const revealRefs = useRef([]);
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      revealRefs.current.forEach((el) => el && el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const setReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 antialiased selection:bg-[#D4A017] selection:text-white">
      <SEO
        path="/leadership"
        title="Leadership"
        description="Meet Sonu Kumar Jaluthria, Owner of Avanza Survey & Instruments, and the vision behind dependable surveying and geospatial solutions in Delhi NCR."
        keywords={["Avanza leadership", "Sonu Kumar Jaluthria", "survey company Delhi owner"]}
      />

      {/* Page */}
      <main id="main-content">
        {/* 1. Hero */}
        <section className="border-b border-slate-200 bg-white" aria-labelledby="leadership-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-30">


            <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-20">
              {/* Right — text */}
              <div className="order-1 lg:col-span-6 lg:pr-6 xl:col-span-5 xl:pr-2 gap-0">
                <h1
                  id="leadership-heading"
                  ref={setReveal}
                  className="reveal reveal-delay-1 font-display mt-5 text-[30px] font-bold leading-[0.95] tracking-[-0.032em] text-[#0B1220] sm:text-[36px] lg:text-[42px] xl:text-[46px]"
                >
                  Leadership with a
                  <br />
                  <span className="font-light tracking-[-0.02em] text-slate-500">Ground-Level</span> Perspective.
                </h1>

                <div ref={setReveal} className="reveal reveal-delay-1 lg:col-span-8 mt-5">
                  <div className="bg-white">
                    <p className="max-w-[68ch] text-md leading-[1.75] text-slate-700">
                      <span className="font-semibold text-[#0B1220]">Sonu Kumar Jaluthria</span> is the Owner of
                      Avanza, driving the company&apos;s focus on dependable surveying, geospatial solutions, and practical field
                      execution. His leadership is grounded in a clear standard: work that is accurate on site and trustworthy in
                      decisions that follow.
                    </p>
                    <p className="mt-4 max-w-[68ch] text-md leading-[1.75] text-slate-600">
                      That perspective shapes how Avanza operates — from disciplined field practices and careful checks to the
                      choice of technology that genuinely helps in real-world conditions. The emphasis remains on understanding
                      terrain, site challenges, and project requirements before recommending a solution.
                    </p>
                    <p className="mt-4 max-w-[68ch] text-md leading-[1.75] text-slate-600">
                      Under his direction, Avanza is being built as a dependable partner for construction, infrastructure, mapping,
                      and land development — combining capable people, reliable instruments, and a long-term commitment to service
                      that clients can rely on.
                    </p>
                  </div>
                </div>

                {/* subtle index line — desktop only */}
                <div ref={setReveal} className="reveal reveal-delay-3 mt-8 hidden items-center gap-3 border-t border-slate-200 pt-6 lg:flex">
                </div>
              </div>
              {/* Left — portrait */}
              <div className=" w-80 md:w-100">
                <figure
                  ref={setReveal}
                  className="reveal group relative border border-slate-200 bg-[#F8F9FB] p-2 sm:p-3"
                  aria-labelledby="founder-caption"
                >
                  {/* technical corners */}
                  <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-slate-300" aria-hidden />
                  <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-slate-300" aria-hidden />
                  <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-slate-300" aria-hidden />
                  <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-slate-300" aria-hidden />

                  <div className="relative overflow-hidden bg-white">
                    {/* faint grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.04]"
                      aria-hidden
                    />
                    <img
                      ref={(el) => {
                        if (el) {
                          // trigger hero image reveal once loaded / immediately
                          const apply = () => el.classList.add("is-visible");
                          if (el.complete) requestAnimationFrame(apply);
                          else el.addEventListener("load", apply, { once: true });
                          el.classList.add("hero-img");
                        }
                      }}
                      src={FOUNDER_IMAGE}
                      alt={FOUNDER_IMAGE_ALT}
                      loading="eager"
                      decoding="async"
                      className="hero-img relative aspect-square w-full h-auto object-cover object-top "
                    />
                  </div>

                  <figcaption
                    id="founder-caption"
                    className="flex items-end justify-between gap-4 bg-white px-4 py-3.5 sm:px-4"
                  >
                    <div>
                      <div className="font-display text-[14px] font-semibold tracking-tight text-[#0B1220]">Sonu Kumar Jaluthria</div>
                      <div className="text-[12px] font-medium tracking-wide text-slate-500">Owner</div>
                    </div>
                    <span className="hidden font-mono text-[11px] tracking-[0.12em] text-slate-400 sm:inline">AVANZA — 2026</span>
                  </figcaption>
                </figure>
              </div>

              {/* mobile caption divider — keeps order correct if needed */}
              <div className="order-3 hidden lg:hidden" aria-hidden />
            </div>
          </div>
        </section>


        {/* 3. Message from the Founder — editorial centerpiece */}
        <section className="border-y border-slate-200 bg-white" aria-labelledby="message-heading">
          <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

            <div className="mt-6 ">

              {/* quote */}
              <div ref={setReveal} className="reveal lg:col-span-8">
                <div className="relative border border-slate-200 bg-[#F8F9FB] p-6 sm:p-8 lg:p-10">
                  <span
                    className="pointer-events-none absolute left-6 top-4 select-none font-display text-[96px] font-bold leading-none text-slate-200 sm:left-8 sm:text-[120px]"
                    aria-hidden
                  >
                    “
                  </span>
                  <blockquote className="relative">
                    <div className="mt-6 space-y-5">
                      <p className="font-display  text-xl font-medium leading-[1.6] tracking-[-0.01em] text-[#0B1220] sm:text-[20px] lg:text-[21px]">
                        At Avanza, our goal is not simply to collect data. It is to provide information that people can trust
                        when making important decisions about their projects.
                      </p>
                      <p className=" text-md leading-[1.75] text-slate-600">
                        Every site has its own conditions, challenges, and requirements, and our responsibility is to understand
                        those realities and deliver accurate, practical solutions.
                      </p>
                      <p className=" text-md leading-[1.75] text-slate-600">
                        We are building Avanza with a long-term vision — combining capable people, reliable technology, and
                        disciplined field practices to create surveying and geospatial services that our clients can depend on.
                      </p>
                    </div>

                    <footer className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                      <div>
                        <div className="font-display text-md font-semibold text-[#0B1220]">Sonu Kumar Jalutria</div>
                        <div className="text-sm text-slate-500">Owner, Avanza</div>
                      </div>
                      <span className="ml-auto hidden h-8 w-px bg-slate-200 sm:block" aria-hidden />

                    </footer>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Leadership Principles */}
        {/* <section className="bg-[#F8F9FB] py-10 sm:py-12 lg:py-14" aria-labelledby="principles-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div ref={setReveal} className="reveal max-w-[640px]">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#D4A017]" aria-hidden />
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#D4A017]">HOW WE LEAD</span>
              </div>
              <h2
                id="principles-heading"
                className="font-display mt-3 text-[24px] font-bold tracking-tight text-[#0B1220] sm:text-[28px]"
              >
                Leadership Principles
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-slate-600">Four ideas that guide how Avanza approaches every project.</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.id}
                  ref={setReveal}
                  className="reveal group relative border border-slate-200 bg-white p-6 transition hover:border-slate-300 sm:p-7"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] tracking-[0.14em] text-slate-400">{p.id}</span>
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#FF5A1F] transition group-hover:scale-125" aria-hidden />
                  </div>
                  <h3 className="font-display mt-3 text-[15px] font-semibold text-[#0B1220]">{p.title}</h3>
                  <p className="mt-2 max-w-[38ch] text-[13px] leading-6 text-slate-600">{p.text}</p>
                  <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#FF5A1F] transition-all duration-500 group-hover:w-full" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* 5. Vision for Avanza */}
        {/* <section className="relative overflow-hidden border-y border-slate-200 bg-white" aria-labelledby="vision-heading"> */}
        {/* subtle background — lightweight, lazy */}
        {/* <div className="pointer-events-none absolute inset-0" aria-hidden>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-[0.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0B1220 1px, transparent 1px), linear-gradient(to bottom, #0B1220 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div ref={setReveal} className="reveal lg:col-span-7">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#D4A017]" aria-hidden />
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#D4A017]">VISION</span>
                </div>
                <h2
                  id="vision-heading"
                  className="font-display mt-3 max-w-[16ch] text-[26px] font-bold leading-[0.95] tracking-[-0.02em] text-[#0B1220] sm:text-[30px]"
                >
                  Building Avanza
                  <br />
                  for What Comes Next
                </h2>
                <p className="mt-4 max-w-[60ch] text-[14px] leading-[1.75] text-slate-600">
                  Avanza aims to bring together skilled professionals, modern surveying technology, and practical field
                  experience to deliver increasingly capable surveying and geospatial solutions.
                </p>
                <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.75] text-slate-600">
                  The direction is steady and deliberate: better instruments where they matter, stronger field capabilities,
                  reliable data that clients can act on, and support that extends beyond a single deliverable — toward
                  sustainable, long-term growth.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Better technology", "Stronger field capabilities", "Reliable data", "Practical project support"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold tracking-wide text-slate-700"
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div ref={setReveal} className="reveal reveal-delay-1 lg:col-span-5">
                <div className="border border-slate-200 bg-white p-6 sm:p-7">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-slate-400">FOCUS AREAS</div>
                  <ul className="mt-4 space-y-4">
                    {[
                      { t: "Technology, applied wisely", d: "Adopting tools that improve accuracy and field efficiency — not complexity for its own sake." },
                      { t: "Field capability", d: "Investing in people and practices that perform in real site conditions." },
                      { t: "Data you can act on", d: "Deliverables prepared for decisions, approvals, and next steps on site." },
                    ].map((item) => (
                      <li key={item.t} className="flex gap-3">
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center border border-slate-200 bg-[#F8F9FB]">
                          <Clock3 className="h-3.5 w-3.5 text-[#0B1220]" aria-hidden />
                        </span>
                        <div>
                          <div className="text-[13px] font-semibold text-[#0B1220]">{item.t}</div>
                          <div className="mt-1 text-[12px] leading-5 text-slate-500">{item.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-slate-100 pt-4 text-[11px] leading-5 text-slate-400">
                    No speculative promises — just the capabilities Avanza continues to strengthen, project by project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* 6. Closing CTA */}
        <section className="bg-[#F8F9FB] py-10 sm:py-12" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div
              ref={setReveal}
              className="reveal relative overflow-hidden border border-slate-200 bg-white px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10"
            >
              {/* thin accent line */}
              <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#D4A017]" aria-hidden />

              <div className="max-w-[620px]">
                <h2
                  id="cta-heading"
                  className="font-display text-[22px] font-bold leading-tight tracking-tight text-[#0B1220] sm:text-[26px]"
                >
                  Built on Precision. Driven by Purpose.
                </h2>
                <p className="mt-2 max-w-[58ch] text-[13px] leading-6 text-slate-600">
                  Explore how Avanza&apos;s people, technology, and field capabilities come together to support projects across
                  industries.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <a
                  href="/services"
                  className="inline-flex h-11 items-center justify-center gap-2 bg-[#0B1220] px-6 text-[13px] font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
                >
                  Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="/rental"
                  className="inline-flex h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-6 text-[13px] font-semibold text-[#0B1220] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
                >
                  Explore Instruments <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] tracking-wide text-slate-400 sm:text-left">
              Avanza — surveying, geospatial and infrastructure solutions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
