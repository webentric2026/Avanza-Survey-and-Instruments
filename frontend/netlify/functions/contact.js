import nodemailer from "nodemailer";

// ── helpers ──────────────────────────────────────────────────────────

function env(name, fallback = "") {
    return process.env[name] ?? fallback;
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

// ── rate limiter ─────────────────────────────────────────────────────

const hits = new Map();

function rateLimit(ip) {
    const windowMs = Number(env("RATE_LIMIT_WINDOW_MS", "60000"));
    const max = Number(env("RATE_LIMIT_MAX", "5"));

    const now = Date.now();
    const cur = hits.get(ip);

    if (!cur || now > cur.resetAt) {
        hits.set(ip, {
            count: 1,
            resetAt: now + windowMs,
        });

        return { ok: true };
    }

    if (cur.count >= max) {
        const retryAfter = Math.ceil((cur.resetAt - now) / 1000);

        return {
            ok: false,
            retryAfter,
        };
    }

    cur.count += 1;

    return { ok: true };
}

// ── SMTP transporter ─────────────────────────────────────────────────

let transporter = null;

function getTransporter() {
    if (transporter) {
        return transporter;
    }

    const host = env("SMTP_HOST");
    const port = Number(env("SMTP_PORT", "587"));
    const user = env("SMTP_USER");
    const pass = env("SMTP_PASSWORD");

    if (!host || !user || !pass) {
        throw new Error(
            "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASSWORD."
        );
    }

    const secure =
        env(
            "SMTP_SECURE",
            port === 465 ? "true" : "false"
        ) === "true";

    transporter = nodemailer.createTransport({
        host,
        port,
        secure,

        auth: {
            user,
            pass,
        },

        connectionTimeout: 10_000,
        greetingTimeout: 8_000,
        socketTimeout: 15_000,
    });

    return transporter;
}

// ── HTML email ───────────────────────────────────────────────────────

function buildHtmlEmail({
    name,
    company,
    email,
    phone,
    service,
    location,
    message,
}) {
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
            ([key, value]) => `
      <tr>
        <td style="
          padding:10px 14px;
          font-size:12px;
          font-weight:600;
          letter-spacing:0.06em;
          color:#66737F;
          text-transform:uppercase;
          border-bottom:1px solid #E6EBEF;
          width:180px;
          vertical-align:top;
        ">
          ${escapeHtml(key)}
        </td>

        <td style="
          padding:10px 14px;
          font-size:13px;
          color:#17212B;
          border-bottom:1px solid #E6EBEF;
          vertical-align:top;
          word-break:break-word;
        ">
          ${escapeHtml(value)}
        </td>
      </tr>
    `
        )
        .join("");

    return `
<!doctype html>

<html>
<body style="
    margin:0;
    background:#F5F7F8;
    font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
">

    <div style="
        max-width:640px;
        margin:0 auto;
        padding:24px;
    ">

        <!-- Header -->

        <div style="
            background:#0B1F33;
            padding:18px 22px;
            border-left:4px solid #0F8B8D;
        ">

            <div style="
                font-size:11px;
                letter-spacing:0.16em;
                color:rgba(255,255,255,0.7);
                font-weight:700;
            ">
                AVANZA — NEW WEBSITE ENQUIRY
            </div>

            <div style="
                margin-top:6px;
                font-size:16px;
                font-weight:700;
                color:#fff;
                letter-spacing:-0.01em;
            ">
                New Website Enquiry — ${escapeHtml(service)}
            </div>

            <div style="
                margin-top:4px;
                font-size:12px;
                color:rgba(255,255,255,0.65);
            ">
                Received via Avanza website contact form
            </div>

        </div>

        <!-- Content -->

        <div style="
            background:#fff;
            border:1px solid #DCE3E8;
            border-top:none;
        ">

            <table
                role="presentation"
                style="
                    width:100%;
                    border-collapse:collapse;
                "
            >
                ${rowsHtml}
            </table>

            <!-- Message -->

            <div style="
                padding:16px 14px;
                border-top:1px solid #E6EBEF;
            ">

                <div style="
                    font-size:11px;
                    font-weight:700;
                    letter-spacing:0.08em;
                    color:#29465B;
                    text-transform:uppercase;
                ">
                    Message
                </div>

                <div style="
                    margin-top:8px;
                    font-size:13px;
                    line-height:1.7;
                    color:#17212B;
                    white-space:pre-wrap;
                    word-break:break-word;
                    background:#F5F7F8;
                    border:1px solid #E6EBEF;
                    padding:12px 14px;
                    border-radius:2px;
                ">
                    ${escapeHtml(message)}
                </div>

            </div>

            <!-- Reply information -->

            <div style="
                padding:12px 14px;
                background:#F5F7F8;
                border-top:1px solid #E6EBEF;
                font-size:11px;
                color:#66737F;
                line-height:1.5;
            ">

                Reply directly to this email to respond to

                <strong style="color:#17212B;">
                    ${escapeHtml(name)}
                </strong>

                &lt;${escapeHtml(email)}&gt;.

                Reply-To is set to the visitor's email.

            </div>

        </div>

        <!-- Footer -->

        <div style="
            padding:12px 4px;
            font-size:11px;
            color:#66737F;
            text-align:center;
        ">
            Avanza — Surveying • Geospatial • Infrastructure • Equipment Rental
        </div>

    </div>

</body>
</html>
`;
}

// ── client IP ────────────────────────────────────────────────────────

function getClientIp(req, context) {
    const forwardedFor = req.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    const realIp = req.headers.get("x-real-ip");

    if (realIp) {
        return realIp;
    }

    // Netlify may provide the client IP through context
    if (context?.ip) {
        return context.ip;
    }

    return "unknown";
}

// ── core contact logic ───────────────────────────────────────────────

export async function handleContactRequest(body, { ip } = {}) {

    // ── honeypot ─────────────────────────────────────────────────────

    if (body?.website) {
        // Pretend success so bots don't know they were detected.
        return {
            ok: true,
            honeypot: true,
        };
    }

    // ── rate limit ───────────────────────────────────────────────────

    if (ip && ip !== "unknown") {
        const rl = rateLimit(ip);

        if (!rl.ok) {
            const error = new Error(
                `Too many requests. Please try again in ${rl.retryAfter}s.`
            );

            error.status = 429;
            error.retryAfter = rl.retryAfter;

            throw error;
        }
    }

    // ── sanitize input ───────────────────────────────────────────────

    const name = sanitize(body?.name, 120);
    const company = sanitize(body?.company, 120);
    const email = sanitize(body?.email, 200);
    const phone = sanitize(body?.phone, 40);
    const service = sanitize(body?.service, 80);
    const location = sanitize(body?.location, 200);
    const message = sanitize(body?.message, 5000);

    // ── validation ───────────────────────────────────────────────────

    const errors = {};

    if (!name || name.length < 2) {
        errors.name = "Name is required.";
    }

    if (!email || !isEmail(email)) {
        errors.email = "Valid email is required.";
    }

    if (
        !phone ||
        phone.replace(/\D/g, "").length < 10
    ) {
        errors.phone = "Valid phone is required.";
    }

    if (!service) {
        errors.service = "Service is required.";
    }

    if (!message || message.length < 1) {
        errors.message = "Message is required.";
    }

    // ── allowed services ─────────────────────────────────────────────

    const allowedServices = new Set([
        "Land Surveying",
        "Topographic Survey",
        "DGPS Survey",
        "Total Station Survey",
        "Drone Survey",
        "Mapping & GIS",
        "Equipment Rental",
        "Construction & Infrastructure Survey",
        "General enquiry (Contact Us)",
        "Other",
    ]);

    if (
        service &&
        !allowedServices.has(service)
    ) {
        errors.service = "Invalid service.";
    }

    // ── validation failure ───────────────────────────────────────────

    if (Object.keys(errors).length > 0) {
        const error = new Error("Validation failed.");

        error.status = 422;
        error.fields = errors;

        throw error;
    }

    // ── email configuration ──────────────────────────────────────────

    const contactEmail = env("CONTACT_EMAIL");
    const from = env("SMTP_FROM");

    if (!contactEmail || !from) {
        throw new Error(
            "Email is not configured. Set CONTACT_EMAIL and SMTP_FROM."
        );
    }

    // ── SMTP transporter ─────────────────────────────────────────────

    const mailTransporter = getTransporter();

    // ── email content ────────────────────────────────────────────────

    const subject = `New Website Enquiry — ${service}`;

    const html = buildHtmlEmail({
        name,
        company,
        email,
        phone,
        service,
        location,
        message,
    });

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
        ``,
        `Reply directly to this email to respond to ${name} <${email}>.`,
    ].join("\n");

    // ── send email ───────────────────────────────────────────────────

    await mailTransporter.sendMail({
        from,
        to: contactEmail,

        // Clicking Reply in Gmail will reply to the visitor.
        replyTo: `"${name.replace(/"/g, "'")}" <${email}>`,

        subject,
        text,
        html,

        headers: {
            "X-Contact-Form": "avanza-website",
        },
    });

    return {
        ok: true,
    };
}

// ── Netlify Function ─────────────────────────────────────────────────

export default async (req, context) => {

    // Only allow POST requests
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({
                ok: false,
                error: "Method not allowed.",
            }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    try {

        // Parse JSON body
        const body = await req.json();

        // Get visitor IP
        const ip = getClientIp(req, context);

        // Process contact form
        await handleContactRequest(body, {
            ip,
        });

        // Success
        return new Response(
            JSON.stringify({
                ok: true,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

    } catch (error) {

        console.error(
            "CONTACT FUNCTION ERROR:",
            error
        );

        const status = error.status || 500;

        const headers = {
            "Content-Type": "application/json",
        };

        if (error.retryAfter) {
            headers["Retry-After"] = String(
                error.retryAfter
            );
        }

        // Don't leak SMTP internals (e.g. "Invalid login...") to visitors.
        // Real cause is still in the function logs via console.error above.
        const isClientError = status === 422 || status === 429;
        const publicMessage = isClientError
            ? (error.message || "Failed to send.")
            : "Something went wrong while sending your enquiry. Please try again or contact us directly.";

        return new Response(
            JSON.stringify({
                ok: false,
                error: publicMessage,
                fields: error.fields,
            }),
            {
                status,
                headers,
            }
        );
    }
};