import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

// Simple in-memory rate limiting (max 5 requests per 10 minutes per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please call our 24×7 dispatch helpline directly." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name = "",
      phone = "",
      email = "",
      route = "",
      service = "General Transport / Inquiry",
      notes = "",
      timing = "",
      honeypot = "",
    } = body;

    // 1. Anti-spam honeypot detection
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 2. Field validation
    const cleanPhone = String(phone).replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile phone number." },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim() || "Website Visitor";
    const cleanRoute = String(route).trim() || "Not specified";
    const cleanEmail = String(email).trim();
    const cleanService = String(service).trim() || "Ambulance Transfer";
    const cleanNotes = String(notes).trim();
    const cleanTiming = String(timing).trim() || "Immediate";

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      // Return success in local preview so UX testing is unobstructed
      return NextResponse.json({
        success: true,
        message: "Enquiry received (local fallback).",
      });
    }

    const senderEmail = `Vidhya Sri Ambulance <noreply@${siteConfig.seo.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}>`;
    const adminRecipient = "lokesh.aluvala123@gmail.com";

    // ── EMAIL A: ADMIN NOTIFICATION ──
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #0A2A5E; border-radius: 6px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0A2A5E; padding: 20px 24px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800;">
            🚑 New Ambulance Enquiry
          </h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #EAF2FC;">
            Received from vidhyasriambulance.com
          </p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #DDE7F2;">
              <td style="padding: 10px 0; color: #536B86; font-weight: 600; width: 35%;">Service Required:</td>
              <td style="padding: 10px 0; color: #0A2A5E; font-weight: 800;">${cleanService}</td>
            </tr>
            <tr style="border-bottom: 1px solid #DDE7F2;">
              <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Caller / Patient:</td>
              <td style="padding: 10px 0; color: #0A2A5E; font-weight: 700;">${cleanName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #DDE7F2;">
              <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Phone:</td>
              <td style="padding: 10px 0; color: #1565D8; font-weight: 800;">
                <a href="tel:${cleanPhone}" style="color: #1565D8; text-decoration: none;">+91 ${cleanPhone}</a>
              </td>
            </tr>
            ${
              cleanEmail
                ? `<tr style="border-bottom: 1px solid #DDE7F2;">
                    <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Email:</td>
                    <td style="padding: 10px 0; color: #0A2A5E;">${cleanEmail}</td>
                  </tr>`
                : ""
            }
            <tr style="border-bottom: 1px solid #DDE7F2;">
              <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Pickup & Destination:</td>
              <td style="padding: 10px 0; color: #0A2A5E; font-weight: 600;">${cleanRoute}</td>
            </tr>
            <tr style="border-bottom: 1px solid #DDE7F2;">
              <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Timing:</td>
              <td style="padding: 10px 0; color: #0A2A5E;">${cleanTiming}</td>
            </tr>
            ${
              cleanNotes
                ? `<tr>
                    <td style="padding: 10px 0; color: #536B86; font-weight: 600;">Additional Details:</td>
                    <td style="padding: 10px 0; color: #0A2A5E;">${cleanNotes}</td>
                  </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding: 14px; background-color: #F8FAFD; border: 1px solid #DDE7F2; border-radius: 4px; text-align: center;">
            <a href="tel:${cleanPhone}" style="display: inline-block; padding: 10px 20px; background-color: #1565D8; color: #ffffff; text-decoration: none; font-weight: 800; font-size: 13px; text-transform: uppercase; border-radius: 4px;">
              📞 Call Caller Immediately
            </a>
          </div>
        </div>

        <div style="background-color: #F8FAFD; padding: 12px 24px; border-top: 1px solid #DDE7F2; font-size: 11px; color: #536B86; text-align: center;">
          Somajiguda Dispatch Control Room · Vidhya Sri Ambulance Services
        </div>
      </div>
    `;

    const adminPayload: Record<string, unknown> = {
      from: senderEmail,
      to: [adminRecipient],
      subject: `New Vidhya Sri Ambulance Enquiry — ${cleanService}`,
      html: adminHtml,
    };

    if (cleanEmail && cleanEmail.includes("@")) {
      adminPayload.reply_to = cleanEmail;
    }

    // Call Resend API for Admin Email
    const adminRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminPayload),
    });

    if (!adminRes.ok) {
      const errText = await adminRes.text();
      console.error("Resend API error for admin email:", errText);
    }

    // ── EMAIL B: CUSTOMER CONFIRMATION (if customer provided email) ──
    if (cleanEmail && cleanEmail.includes("@")) {
      const customerHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #0A2A5E; border-radius: 6px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0A2A5E; padding: 24px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800;">
              Vidhya Sri Ambulance Services
            </h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #EAF2FC;">
              We have received your transport enquiry
            </p>
          </div>

          <div style="padding: 24px;">
            <p style="font-size: 15px; color: #0A2A5E; font-weight: 700; margin-top: 0;">
              Hello ${cleanName},
            </p>
            <p style="font-size: 14px; color: #536B86; line-height: 1.6;">
              Thank you for contacting Vidhya Sri Ambulance. Our Somajiguda dispatch coordinators have received your journey details and are reviewing vehicle availability.
            </p>

            <div style="margin: 20px 0; padding: 16px; background-color: #F8FAFD; border: 1px solid #DDE7F2; border-radius: 4px;">
              <h3 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #0A2A5E; font-weight: 800;">
                Submitted Summary
              </h3>
              <p style="margin: 4px 0; font-size: 13px; color: #536B86;">
                <strong>Service:</strong> ${cleanService}
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #536B86;">
                <strong>Contact Phone:</strong> +91 ${cleanPhone}
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #536B86;">
                <strong>Route / Destination:</strong> ${cleanRoute}
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #536B86;">
                <strong>Preferred Timing:</strong> ${cleanTiming}
              </p>
            </div>

            <div style="padding: 16px; background-color: #FDEDEC; border-left: 4px solid #D32F2F; border-radius: 3px; margin: 24px 0;">
              <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 800; color: #D32F2F; text-transform: uppercase;">
                🚨 Urgent Medical Need?
              </p>
              <p style="margin: 0; font-size: 13px; color: #536B86; line-height: 1.5;">
                For immediate trauma or life-threatening emergencies, do not wait for email. Call our 24×7 Somajiguda dispatch helpline directly:
                <br/>
                <a href="${siteConfig.phone.href}" style="font-weight: 800; color: #D32F2F; font-size: 15px; text-decoration: none; display: inline-block; margin-top: 4px;">
                  📞 ${siteConfig.phone.display}
                </a>
              </p>
            </div>

            <p style="font-size: 13px; color: #536B86; margin-bottom: 0;">
              Warm regards,<br/>
              <strong>Vidhya Sri Dispatch Team</strong><br/>
              Somajiguda, Hyderabad
            </p>
          </div>
        </div>
      `;

      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [cleanEmail],
            subject: "We received your enquiry — Vidhya Sri Ambulance",
            html: customerHtml,
          }),
        });
      } catch (custErr) {
        console.error("Failed sending customer confirmation email:", custErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received.",
    });
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
