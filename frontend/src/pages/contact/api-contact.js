/**
 * Avanza — Contact SMTP handler (server-side only)
 *
 * Works with:
 *  - Next.js App Router:  move this file to  app/api/contact/route.js  and export POST
 *  - Next.js Pages Router: move to pages/api/contact.js and export default handler
 *  - Express:            app.post('/api/contact', handler)  (example at bottom)
 *  - Vite + custom server / any Node server
 *
 * Env (never expose to client):
 *  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, CONTACT_EMAIL
 * Optional: SMTP_SECURE (true/false), RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX
 *
 * Install:  npm i nodemailer
 */

import nodemailer from "nodemailer";

// ── helpers ──────────────────────────────────────────────────────────

function env(name, fallback = "") {
  const v = process.env[name] ?? fallback;
  if (!v && fallback === "") {
    // CONTACT_EMAIL and SMTP_* are required — fail fast on server boot
    // Do not log secrets.
  }
  return v;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitize(str, max = 2000) {
  return String(str || "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

// Simple in-memory rate limiter (per instance). For multi-instance / serverless
// replace with Redis / Upstash / Vercel KV.
const hits = new Map(); // ip -> { count, resetAt }
function rateLimit(ip) {
  const windowMs = Number(env("RATE_LIMIT_WINDOW_MS", "60000")); // 1 min
  const max = Number(env("RATE_LIMIT_MAX", "5")); // 5 requests / window
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || now > cur.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (cur.count >= max) {
    const retryAfter = Math.ceil((cur.resetAt - now) / 1000);
    return { ok: false, retryAfter };
  }
  cur.count += 1;
  return { ok: true };
}

// Lazy transporter so missing env in dev doesn't crash import
let _transporter = null;
function getTransporter() {
  if (_transporter) return _transporter;
  const host = env("SMTP_HOST");
  const port = Number(env("SMTP_PORT", "587"));
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASSWORD");
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.");
  }
  const secure = env("SMTP_SECURE", port === 465 ? "true" : "false") === "true";
  _transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // sensible timeouts
    connectionTimeout: 10_000,
    greetingTimeout: 8_000,
    socketTimeout: 15_000,
  });
  return _transporter;
}

function buildHtmlEmail({ name, company, email, phone, service, location, message }) {
  const rows = [
    ["Name", name],
    ["Company", company || "—"],
    ["Email", email],
    ["Phone", phone],
    ["Service", service],
    ["Project Location", location || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 14px; font-size:12px; font-weight:600; letter-spacing:0.06em; color:#66737F; text-transform:uppercase; border-bottom:1px solid #E6EBEF; width:180px; vertical-align:top;">${escapeHtml(k)}</td>
        <td style="padding:10px 14px; font-size:13px; color:#17212B; border-bottom:1px solid #E6EBEF; vertical-align:top; word-break:break-word;">${escapeHtml(v)}</td>
      </tr>`
    )
    .join("");

  return `
  <!doctype html>
  <html>
  <body style="margin:0; background:#F5F7F8; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
    <div style="max-width:640px; margin:0 auto; padding:24px;">
      <div style="background:#0B1F33; padding:18px 22px; border-left:4px solid #0F8B8D;">
        <div style="font-size:11px; letter-spacing:0.16em; color:rgba(255,255,255,0.7); font-weight:700;">AVANZA — NEW WEBSITE ENQUIRY</div>
        <div style="margin-top:6px; font-size:16px; font-weight:700; color:#fff; letter-spacing:-0.01em;">New Website Enquiry — ${escapeHtml(service)}</div>
        <div style="margin-top:4px; font-size:12px; color:rgba(255,255,255,0.65);">Received via avanza.example/contact</div>
      </div>
      <div style="background:#fff; border:1px solid #DCE3E8; border-top:none;">
        <table role="presentation" style="width:100%; border-collapse:collapse;">
          ${rowsHtml}
        </table>
        <div style="padding:16px 14px; border-top:1px solid #E6EBEF;">
          <div style="font-size:11px; font-weight:700; letter-spacing:0.08em; color:#29465B; text-transform:uppercase;">Message</div>
          <div style="margin-top:8px; font-size:13px; line-height:1.7; color:#17212B; white-space:pre-wrap; word-break:break-word; background:#F5F7F8; border:1px solid #E6EBEF; padding:12px 14px; border-radius:2px;">${escapeHtml(message)}</div>
        </div>
        <div style="padding:12px 14px; background:#F5F7F8; border-top:1px solid #E6EBEF; font-size:11px; color:#66737F; line-height:1.5;">
          Reply directly to this email to respond to <strong style="color:#17212B;">${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; — Reply-To is set to the visitor.
        </div>
      </div>
      <div style="padding:12px 4px; font-size:11px; color:#66737F; text-align:center;">
        Avanza — Surveying • Geospatial • Infrastructure • Equipment Rental
      </div>
    </div>
  </body>
  </html>`;
}

function getClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf) return xf.split(",")[0].trim();
  return req.ip || req.socket?.remoteAddress || "unknown";
}

// ── core logic (framework-agnostic) ─────────────────────────────────
export async function handleContactRequest(body, { ip, headers } = {}) {
  // honeypot
  if (body?.website) {
    // pretend success — don't reveal honeypot
    return { ok: true, honeypot: true };
  }

  // rate limit
  if (ip) {
    const rl = rateLimit(ip);
    if (!rl.ok) {
      const err = new Error(`Too many requests. Please try again in ${rl.retryAfter}s.`);
      err.status = 429;
      err.retryAfter = rl.retryAfter;
      throw err;
    }
  }

  // validation (server-side, never trust client)
  const name = sanitize(body?.name, 120);
  const company = sanitize(body?.company, 120);
  const email = sanitize(body?.email, 200);
  const phone = sanitize(body?.phone, 40);
  const service = sanitize(body?.service, 80);
  const location = sanitize(body?.location, 200);
  const message = sanitize(body?.message, 5000);

  const errors = {};
  if (!name || name.length < 2) errors.name = "Name is required.";
  if (!email || !isEmail(email)) errors.email = "Valid email is required.";
  if (!phone || phone.replace(/\D/g, "").length < 10) errors.phone = "Valid phone is required.";
  if (!service) errors.service = "Service is required.";
  if (!message || message.length < 10) errors.message = "Message is required.";

  const allowedServices = new Set([
    "Land Surveying",
    "Topographic Survey",
    "DGPS Survey",
    "Total Station Survey",
    "Drone Survey",
    "Mapping & GIS",
    "Equipment Rental",
    "Construction & Infrastructure Survey",
    "Other",
  ]);
  if (service && !allowedServices.has(service)) errors.service = "Invalid service.";

  if (Object.keys(errors).length) {
    const err = new Error("Validation failed.");
    err.status = 422;
    err.fields = errors;
    throw err;
  }

  const contactEmail = env("CONTACT_EMAIL");
  const from = env("SMTP_FROM");
  if (!contactEmail || !from) {
    throw new Error("Email is not configured. Set CONTACT_EMAIL and SMTP_FROM.");
  }

  const transporter = getTransporter();

  const subject = `New Website Enquiry — ${service}`;
  const html = buildHtmlEmail({ name, company, email, phone, service, location, message });
  const text = [
    `New Website Enquiry — ${service}`,
    ``,
    `Name: ${name}`,
    `Company: ${company || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Project Location: ${location || "—"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to: contactEmail,
    replyTo: `"${name.replace(/"/g, "'")}" <${email}>`,
    subject,
    text,
    html,
    headers: {
      "X-Contact-Form": "avanza-website",
      "X-Forwarded-For": ip || undefined,
    },
  });

  return { ok: true };
}

// ── Next.js App Router:  app/api/contact/route.js ────────────────────
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
//     await handleContactRequest(body, { ip });
//     return Response.json({ ok: true }, { status: 200 });
//   } catch (e) {
//     const status = e.status || 500;
//     const headers = {};
//     if (e.retryAfter) headers["Retry-After"] = String(e.retryAfter);
//     return Response.json({ ok: false, error: e.message || "Failed to send.", fields: e.fields }, { status, headers });
//   }
// }

// ── Next.js Pages Router:  pages/api/contact.js ──────────────────────
// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed." });
//   try {
//     const ip = getClientIp(req);
//     await handleContactRequest(req.body, { ip });
//     return res.status(200).json({ ok: true });
//   } catch (e) {
//     const status = e.status || 500;
//     if (e.retryAfter) res.setHeader("Retry-After", String(e.retryAfter));
//     return res.status(status).json({ ok: false, error: e.message || "Failed to send.", fields: e.fields });
//   }
// }

// ── Express ───────────────────────────────────────────────────────────
export function createExpressHandler() {
  return async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed." });
    try {
      const ip = getClientIp(req);
      await handleContactRequest(req.body, { ip });
      return res.status(200).json({ ok: true });
    } catch (e) {
      const status = e.status || 500;
      if (e.retryAfter) res.setHeader("Retry-After", String(e.retryAfter));
      return res.status(status).json({ ok: false, error: e.message || "Failed to send.", fields: e.fields });
    }
  };
}

// Default export for Next.js Pages Router compatibility
export default createExpressHandler();
