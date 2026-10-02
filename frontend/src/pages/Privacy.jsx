import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    h: "1. Information we collect",
    p: "When you use our contact or enquiry forms, we collect your name, email address, phone number and project details you share. We also receive basic technical data (such as pages visited) through standard web logs to keep the site secure and improve it.",
  },
  {
    h: "2. How we use your information",
    p: "We use your details only to respond to your enquiry, prepare quotations, schedule survey visits or rental deliveries, and provide customer support. We do not sell your personal information to third parties.",
  },
  {
    h: "3. Communication",
    p: "By submitting a form, you agree that we may contact you by phone, WhatsApp, SMS or email at info@avanzasurvey.in regarding your enquiry. You may ask us to stop marketing communication at any time.",
  },
  {
    h: "4. Data sharing",
    p: "We share your information only where necessary: with email/service providers that help us operate the website, or with authorities when required by law. All such parties are expected to handle data responsibly.",
  },
  {
    h: "5. Data retention",
    p: "Enquiry records are retained for as long as needed to serve you and meet legal or accounting requirements, after which they are deleted or anonymised.",
  },
  {
    h: "6. Cookies and analytics",
    p: "Our site may use basic cookies and privacy-friendly analytics to understand aggregate usage. You can control cookies through your browser settings; the site remains usable with cookies disabled.",
  },
  {
    h: "7. Your rights",
    p: "You may request access, correction or deletion of your personal data by writing to info@avanzasurvey.in. We respond to verifiable requests within a reasonable time.",
  },
  {
    h: "8. External links",
    p: "Our site links to external services (e.g. maps, messaging apps). Their privacy practices are governed by their own policies, not this one.",
  },
  {
    h: "9. Contact",
    p: "For privacy questions, email info@avanzasurvey.in or call 9136154481 / 8860988478. Office: 4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005.",
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        path="/privacy"
        title="Privacy Policy"
        description="Privacy Policy of Avanza Survey & Instruments — what enquiry data we collect, how we use it, and your rights."
        keywords={["Avanza privacy policy", "survey data privacy"]}
      />
      <main className="bg-[#F7F7F8] mt-20">
        <div className="mx-auto max-w-[860px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
            LEGAL
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#202B4A] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#8A8A8A]">Last updated: October 2026</p>

          <div className="mt-8 space-y-8 rounded border border-[#E6E6E9] bg-white p-6 sm:p-10">
            {SECTIONS.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-bold tracking-tight text-[#202B4A]">{s.h}</h2>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#3A3A3A]">{s.p}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 bg-[#202B4A] px-6 text-[13px] font-bold text-white hover:bg-black"
            >
              Contact Us <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/terms"
              className="inline-flex h-11 items-center justify-center gap-2 border border-[#C9C9CE] bg-white px-6 text-[13px] font-semibold text-[#202B4A] hover:bg-[#F7F7F8]"
            >
              Read Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
