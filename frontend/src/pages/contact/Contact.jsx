import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from "lucide-react";

/**
 * Avanza — Contact page
 * Design matched to reference screenshot:
 *  - Pale blue page bg, left info column + right white card form
 *  - Teal icon squares, dark navy submit button
 *  - SMTP integration is server-side (see api-contact.js / api/contact.js)
 *
 * Replace the constants below with real Avanza details when needed.
 */
const CONTACT_INFO = {
  phoneDisplay: "+91 91361 54481",
  phoneTel: "+919136154481",
  whatsappUrl: "https://wa.me/919136154481?text=" + encodeURIComponent("Hello Avanza, I would like to chat about a project."),
  email: "info@avanzasurvey.in",
  mediaEmail: "info@avanzasurvey.in",
  office: {
    name: "Avanza Surveying Solutions Pvt. Ltd.",
    line1: "4113/2 Jag Jiwan Niwas,",
    line2: "Reghar Pura, Karol Bagh, New Delhi-110005",
    // used for Get Directions if needed
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=4113%2F2+Jag+Jiwan+Niwas+Reghar+Pura+Karol+Bagh+New+Delhi+110005",
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | sending | success | error

  useEffect(() => {
    const prev = document.title;
    document.title = "Contact Avanza | Surveying & Geospatial Solutions";
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const prevDesc = meta.content;
    meta.content = "Get in touch with Avanza for professional surveying, geospatial solutions, mapping services, and survey equipment rental.";
    return () => {
      document.title = prev;
      if (created) meta.remove();
      else meta.content = prevDesc;
    };
  }, []);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    else if (form.phone.replace(/\D/g, "").length < 8) e.phone = "Invalid number";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.length > 500) e.message = "Max 500 characters";
    return e;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields." });
      const first = Object.keys(v)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setStatus({ type: "sending", msg: "" });
    try {
      const payload = {
        name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: `${form.countryCode} ${form.phone.trim()}`.trim(),
        countryCode: form.countryCode,
        service: "General enquiry (Contact Us)",
        location: "",
        message: form.message.trim(),
        website: form.website, // honeypot
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send.");
      setStatus({ type: "success", msg: "Thank you. Your enquiry has been sent successfully. Our team will get back to you shortly." });
      setForm({ firstName: "", lastName: "", email: "", countryCode: "+91", phone: "", message: "", website: "" });
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Something went wrong. Please try again or contact us directly." });
    }
  }

  const msgCount = form.message.length;

  return (
    <div className=" bg-[#EFF3FA] text-[#162033] mt-15">
      <main>
        {/* subtle page container */}
        <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Top bar — AVANZA */}
          <div className="mb-6 flex items-center gap-2 sm:mb-8">
            <span className="grid h-5 w-5 place-items-center text-[#D4A017]" aria-hidden>
              {/* small compass / location-like icon matching screenshot teal */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3a4 4 0 0 1 4 4c0 2.8-4 6.5-4 6.5S8 9.8 8 7a4 4 0 0 1 4-4Z" />
                <circle cx="12" cy="7" r="1.6" fill="currentColor" stroke="none" />
                <path d="M12 13.5V21" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#D4A017]">AVANZA</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* LEFT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="text-[40px] font-extrabold leading-none tracking-[-0.03em] text-[#162033] sm:text-[48px]">Contact Us</h1>
              <p className="mt-3 max-w-[520px] text-md leading-5 text-[#5B6B7E]">
                We&apos;re here to help. Reach out to us for any inquiries, project discussions, or support.
              </p>

              {/* contact rows */}
              <div className="mt-7 space-y-0 divide-y divide-[#E2E8F0]">
                {/* Call Us */}
                <a
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="flex items-center gap-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFF3FA]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#D4A017] text-white">
                    <Phone className="h-5 w-5 fill-white" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none text-[#162033]">Call Us</span>
                    <span className="block pt-0.5 text-md font-medium text-[#5B6B7E]">{CONTACT_INFO.phoneDisplay}</span>
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFF3FA]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#D4A017] text-white">
                    <MessageCircle className="h-5 w-5 fill-white" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none text-[#162033]">WhatsApp</span>
                    <span className="block pt-0.5 text-md font-medium text-[#5B6B7E]">Chat with us on WhatsApp</span>
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFF3FA]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#D4A017] text-white">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none text-[#162033]">Email Us</span>
                    <span className="block pt-0.5 text-md font-medium text-[#5B6B7E]">{CONTACT_INFO.email}</span>
                  </span>
                </a>

                {/* Office */}
                <div className="flex gap-3 py-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#D4A017] text-white">
                    <MapPin className="h-5 w-5 fill-white" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none text-[#162033]">Office</span>
                    <span className="block pt-1 text-md font-medium text-[#5B6B7E]">
                      {CONTACT_INFO.office.name}
                      <br />
                      {CONTACT_INFO.office.line1}
                      <br />
                      {CONTACT_INFO.office.line2}
                    </span>
                  </span>
                </div>
              </div>

              {/* bottom 3 columns */}
              <div className="mt-8 grid gap-6 border-t border-[#E2E8F0] pt-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-md font-bold tracking-tight text-[#162033]">Customer Support</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-[#6B7A8D]">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
                <div>
                  <h3 className="text-md font-bold tracking-tight text-[#162033]">Feedback and Suggestions</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-[#6B7A8D]">
                    We value your feedback and are continuously working to improve Avanza. Your input is crucial in shaping the
                    future of our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-md font-bold tracking-tight text-[#162033]">Media Inquiries</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-[#6B7A8D]">
                    For media-related questions or press inquiries, please contact us at{" "}
                    <a href={`mailto:${CONTACT_INFO.mediaEmail}`} className="font-medium text-[#D4A017] hover:underline">
                      {CONTACT_INFO.mediaEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Form card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="rounded-[4px] bg-white p-6 shadow-[0_8px_30px_rgba(22,32,51,0.08)] sm:p-7">
                <h2 className="text-3xl font-bold tracking-tight text-[#162033]">Get in Touch</h2>
                <p className="mt-1 text-lg text-[#6B7A8D]">You can reach us anytime</p>

                <form onSubmit={onSubmit} noValidate className="mt-5">
                  {/* honeypot */}
                  <div className="hidden" aria-hidden>
                    <label htmlFor="field-website">Website</label>
                    <input id="field-website" value={form.website} onChange={(e) => update("website", e.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div aria-live="polite" aria-atomic="true">
                    {status.type === "success" && (
                      <div role="status" className="mb-4 rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-[12px] leading-5 text-emerald-900">
                        {status.msg}
                      </div>
                    )}
                    {status.type === "error" && (
                      <div role="alert" className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-[12px] leading-5 text-red-900">
                        {status.msg}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="field-firstName" className="sr-only">First name</label>
                      <input
                        id="field-firstName"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        placeholder="First name"
                        autoComplete="given-name"
                        aria-invalid={!!errors.firstName}
                        className={`h-9 w-full border bg-white px-3 text-[12px] placeholder:text-[#8A9AB0] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${errors.firstName ? "border-red-300" : "border-[#E6EAF0]"}`}
                      />
                      {errors.firstName && <p className="mt-1 text-[11px] text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="field-lastName" className="sr-only">Last name</label>
                      <input
                        id="field-lastName"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Last name"
                        autoComplete="family-name"
                        className="h-9 w-full border border-[#E6EAF0] bg-white px-3 text-[12px] placeholder:text-[#8A9AB0] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="field-email" className="sr-only">Your email</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9AB0]" aria-hidden>
                        <Mail className="h-3.5 w-3.5" />
                      </span>
                      <input
                        id="field-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="Your email"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        className={`h-9 w-full border bg-white pl-8 pr-3 text-[12px] placeholder:text-[#8A9AB0] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${errors.email ? "border-red-300" : "border-[#E6EAF0]"}`}
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
                  </div>

                  <div className="mt-3 grid grid-cols-[88px_1fr] gap-3">
                    <label className="relative block">
                      <span className="sr-only">Country code</span>
                      <select
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className="h-9 w-full appearance-none border border-[#E6EAF0] bg-white px-2 pr-6 text-[12px] font-medium text-[#162033] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
                      >
                        <option value="+91">+ 91</option>
                        <option value="+971">+971</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-[#8A9AB0]" aria-hidden />
                    </label>
                    <div>
                      <label htmlFor="field-phone" className="sr-only">Phone number</label>
                      <input
                        id="field-phone"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value.replace(/[^\d\s]/g, ""))}
                        placeholder="Phone number"
                        inputMode="tel"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        className={`h-9 w-full border bg-white px-3 text-[12px] placeholder:text-[#8A9AB0] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${errors.phone ? "border-red-300" : "border-[#E6EAF0]"}`}
                      />
                      {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="field-message" className="sr-only">How can we help?</label>
                    <div className="relative">
                      <textarea
                        id="field-message"
                        rows={5}
                        maxLength={500}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="How can we help?"
                        aria-invalid={!!errors.message}
                        className={`min-h-[118px] w-full resize-none border bg-white px-3 py-2.5 text-[12px] placeholder:text-[#8A9AB0] focus:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${errors.message ? "border-red-300" : "border-[#E6EAF0]"}`}
                      />
                      <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-medium tracking-wide text-[#8A9AB0]">
                        {msgCount}/500
                      </span>
                    </div>
                    {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === "sending"}
                    className="mt-5 inline-flex h-9 w-full items-center justify-center rounded-[3px] bg-[#162033] px-6 text-[12px] font-semibold tracking-wide text-white hover:bg-[#0F1A2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 disabled:opacity-60"
                  >
                    {status.type === "sending" ? "Sending..." : "Submit"}
                  </button>

                  <p className="mt-3 text-center text-[10.5px] leading-4 text-[#6B7A8D]">
                    By contacting us, you agree to our{" "}
                    <a href="/about" className="font-semibold text-[#162033] hover:underline">Terms of Service</a> and{" "}
                    <a href="/contact" className="font-semibold text-[#162033] hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
