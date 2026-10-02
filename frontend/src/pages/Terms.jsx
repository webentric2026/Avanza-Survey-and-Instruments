import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    h: "1. Services",
    p: "Avanza Survey & Instruments (\"Avanza\", \"we\", \"us\") provides land and topographical surveys, DGPS/GNSS surveys, drone surveys, total station surveys, GIS mapping and survey instrument sales and rental services. Quotations describe the agreed scope, deliverables and timelines for each project.",
  },
  {
    h: "2. Quotations and payments",
    p: "All prices are quoted in INR and remain valid for the period stated in the quotation. Work begins after written acceptance of the quotation and receipt of any advance payment specified. Balance payments are due as per the agreed milestones. Taxes, government fees and statutory charges, where applicable, are charged extra.",
  },
  {
    h: "3. Site access and client responsibilities",
    p: "The client shall provide timely site access, relevant property documents (sale deed, khasra/khatauni records, prior drawings where available) and a point of contact for coordination. Delays caused by denied access, disputed boundaries or missing approvals may affect timelines and attract additional visit charges.",
  },
  {
    h: "4. Deliverables and accuracy",
    p: "Survey outputs are prepared using calibrated instruments and standard field procedures. While we take every care to ensure accuracy, survey data reflects site conditions at the time of measurement. Deliverables are provided in the formats agreed in the quotation (e.g. AutoCAD drawings, KMZ, reports).",
  },
  {
    h: "5. Equipment rental terms",
    p: "Rented instruments are provided in calibrated, working condition along with agreed accessories. The renter is responsible for safe handling, and for loss or damage beyond normal wear during the rental period. Rental charges apply for the full booked duration, including idle days on site. Breakdown replacement is provided as per availability.",
  },
  {
    h: "6. Cancellations",
    p: "Confirmed survey visits cancelled within 48 hours of the scheduled date may attract a visit charge. Confirmed rental bookings cancelled after dispatch may attract transport and handling charges.",
  },
  {
    h: "7. Limitation of liability",
    p: "Our liability for any claim arising from our services is limited to the fees paid for the specific assignment. We are not liable for indirect or consequential losses, including construction delays or third-party claims, except as required by applicable law.",
  },
  {
    h: "8. Governing law",
    p: "These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts at New Delhi.",
  },
  {
    h: "9. Contact",
    p: "For questions about these terms, contact us at info@avanzasurvey.in or call 9136154481 / 8860988478. Our office is at 4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005.",
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        path="/terms"
        title="Terms of Service"
        description="Terms of Service for Avanza Survey & Instruments — survey quotations, payments, site responsibilities, equipment rental terms and liability."
        keywords={["Avanza terms of service", "survey terms", "equipment rental terms"]}
      />
      <main className="bg-[#F7F7F8] mt-20">
        <div className="mx-auto max-w-[860px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
            LEGAL
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#202B4A] sm:text-5xl">
            Terms of Service
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
              to="/privacy"
              className="inline-flex h-11 items-center justify-center gap-2 border border-[#C9C9CE] bg-white px-6 text-[13px] font-semibold text-[#202B4A] hover:bg-[#F7F7F8]"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
