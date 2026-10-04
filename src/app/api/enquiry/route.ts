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

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const baseUrl = "https://vidhyasriambulance.com";

function parseRoute(routeStr: string): { pickup: string; destination: string } {
  const clean = routeStr.trim();
  if (!clean || clean.toLowerCase() === "not specified") {
    return {
      pickup: "To be confirmed on dispatch call",
      destination: "To be confirmed on dispatch call",
    };
  }
  const separators = [" to ", " -> ", " → ", " - ", " >> "];
  for (const sep of separators) {
    const parts = clean.split(new RegExp(sep, "i"));
    if (parts.length >= 2 && parts[0].trim() && parts[1].trim()) {
      return {
        pickup: parts[0].trim(),
        destination: parts.slice(1).join(" to ").trim(),
      };
    }
  }
  return {
    pickup: clean,
    destination: "Hospital / Destination to be confirmed on call",
  };
}

function parseTiming(timingStr: string): { date: string; time: string } {
  const clean = timingStr.trim();
  if (!clean || clean.toLowerCase() === "immediate" || clean.toLowerCase() === "urgent" || clean.toLowerCase() === "asap") {
    const today = new Date().toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return { date: `${today} (Immediate)`, time: "ASAP / Emergency Dispatch" };
  }
  if (clean.includes(" - ") || clean.includes(" at ") || clean.includes(" @ ")) {
    const parts = clean.split(/ - | at | @ /i);
    return { date: parts[0].trim(), time: parts[1]?.trim() || "As scheduled" };
  }
  return { date: clean, time: "Confirmed upon coordinator call" };
}

/**
 * ── CUSTOMER / PATIENT ENQUIRY EMAIL TEMPLATE ──
 * Exact match to Vidhya Sri Admin Email.html design system
 */
function renderCustomerEmailTemplate({
  variant,
  cleanName,
  cleanPhone,
  cleanEmail,
  cleanService,
  cleanRoute,
  cleanTiming,
  cleanNotes,
}: {
  variant: "admin" | "customer";
  cleanName: string;
  cleanPhone: string;
  cleanEmail: string;
  cleanService: string;
  cleanRoute: string;
  cleanTiming: string;
  cleanNotes: string;
}): string {
  const isAdmin = variant === "admin";
  const label = isAdmin ? "New enquiry" : "Enquiry received";
  const whoLabel = isAdmin ? "Customer" : "Your contact details";
  const headline = isAdmin
    ? "New ambulance enquiry received"
    : "We've received your enquiry.";
  const intro = isAdmin
    ? "A visitor submitted a request through the website. Details are below."
    : `Thank you, ${cleanName}. Your request has been received by the Vidhya Sri team. Here is what you submitted.`;
  const footnote = isAdmin
    ? cleanEmail
      ? "Sent automatically from the vidhyasriambulance.com enquiry form. Replying goes to the customer."
      : "Sent automatically from the vidhyasriambulance.com enquiry form. Customer provided contact phone number only."
    : "You received this email because an enquiry was submitted on vidhyasriambulance.com with this address.";

  const { pickup, destination } = parseRoute(cleanRoute);
  const { date: preferredDate, time: preferredTime } = parseTiming(cleanTiming);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${headline}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; background: #E3EAF4; font-family: Manrope, Arial, Helvetica, sans-serif; color: #0A2A5E; -webkit-font-smoothing: antialiased; }
    a { color: #1565D8; text-decoration: none; }
    a:hover { color: #0B3F9E; }
    @media only screen and (max-width: 580px) {
      .outer-wrap { padding: 16px 10px 32px !important; }
      .email-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .email-h1 { font-size: 24px !important; }
      .stack-mobile { display: block !important; width: 100% !important; }
      .stack-border { border-right: none !important; border-bottom: 1px solid #DDE7F2 !important; }
      .action-col { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#E3EAF4;font-family:Manrope,Arial,Helvetica,sans-serif;color:#0A2A5E;">
  <div class="outer-wrap" style="min-height:100%;background:#E3EAF4;padding:32px 20px 48px;box-sizing:border-box;">
    <div style="width:100%;max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #DDE7F2;color:#0A2A5E;">

      <!-- HEADER -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FFFFFF;border-bottom:3px solid #0A2A5E;">
        <tr>
          <td class="email-pad" style="padding:16px 40px;vertical-align:middle;text-align:left;">
            <a href="${baseUrl}" target="_blank" style="display:inline-block;text-decoration:none;">
              <img src="${baseUrl}/brand/png/logo/logo-horizontal-gradient-800.png" alt="Vidhya Sri Ambulance" height="40" style="display:block;height:40px;width:auto;border:0;" />
            </a>
          </td>
          <td class="email-pad" style="padding:16px 40px;vertical-align:middle;text-align:right;">
            <div style="display:inline-block;padding:6px 10px;background:#EAF2FC;border:1px solid #1565D8;color:#1565D8;font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;">
              ${label}
            </div>
          </td>
        </tr>
      </table>

      <!-- ACCENT BANNER -->
      <div class="email-pad" style="padding:20px 40px 0;">
        <img src="${baseUrl}/email-accent.gif" alt="" width="560" style="display:block;width:100%;height:auto;border:0;" />
      </div>

      <!-- HERO -->
      <div class="email-pad" style="padding:14px 40px 28px;">
        <h1 class="email-h1" style="margin:0 0 12px;font-size:32px;line-height:1.15;font-weight:800;letter-spacing:-.01em;color:#0A2A5E;">
          ${headline}
        </h1>
        <p style="margin:0;font-size:16px;line-height:1.6;font-weight:500;color:#3F5873;">
          ${intro}
        </p>
      </div>

      <!-- SUMMARY CARD -->
      <div class="email-pad" style="padding:0 40px 32px;">
        <div style="border:2px solid #0A2A5E;box-shadow:6px 6px 0 #DDE7F2;background:#FFFFFF;">
          
          <!-- SERVICE HEADER -->
          <div style="background:#0A2A5E;padding:16px 20px;">
            <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#BBD5F7;">Service</div>
            <div style="margin-top:4px;font-size:22px;line-height:1.2;font-weight:800;color:#FFFFFF;">${cleanService}</div>
          </div>

          <!-- WHO / CONTACT DETAILS -->
          <div style="padding:18px 20px;border-bottom:1px solid #DDE7F2;">
            <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">${whoLabel}</div>
            <div style="margin-top:4px;font-size:18px;font-weight:800;color:#0A2A5E;">${cleanName}</div>
            <div style="margin-top:6px;font-size:15px;font-weight:700;">
              <a href="tel:+91${cleanPhone}" style="color:#1565D8;text-decoration:none;margin-right:20px;display:inline-block;">+91 ${cleanPhone}</a>
              ${cleanEmail ? `<a href="mailto:${cleanEmail}" style="color:#0A2A5E;text-decoration:none;font-weight:600;word-break:break-all;display:inline-block;">${cleanEmail}</a>` : ""}
            </div>
          </div>

          <!-- JOURNEY GRAPHIC -->
          <div style="padding:20px;background:#EAF2FC;border-bottom:1px solid #DDE7F2;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="24" valign="top" style="padding-top:3px;text-align:center;">
                  <div style="width:16px;height:16px;box-sizing:border-box;border:4px solid #0A2A5E;background:#FFFFFF;border-radius:50%;margin:0 auto;"></div>
                  <div style="width:3px;height:38px;background:#1565D8;margin:4px auto;"></div>
                  <div style="width:16px;height:16px;background:#1565D8;border:2px solid #0A2A5E;box-sizing:border-box;margin:0 auto;"></div>
                </td>
                <td valign="top" style="padding-left:16px;">
                  <div style="margin-bottom:18px;">
                    <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">From · Pickup</div>
                    <div style="margin-top:3px;font-size:17px;line-height:1.35;font-weight:800;color:#0A2A5E;word-break:break-word;">${pickup}</div>
                  </div>
                  <div>
                    <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">To · Destination</div>
                    <div style="margin-top:3px;font-size:17px;line-height:1.35;font-weight:800;color:#0A2A5E;word-break:break-word;">${destination}</div>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!-- DATE / TIME -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:1px solid #DDE7F2;">
            <tr>
              <td class="stack-mobile stack-border" width="50%" valign="top" style="padding:16px 20px;border-right:1px solid #DDE7F2;">
                <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Preferred date</div>
                <div style="margin-top:4px;font-size:16px;font-weight:800;color:#0A2A5E;">${preferredDate}</div>
              </td>
              <td class="stack-mobile" width="50%" valign="top" style="padding:16px 20px;">
                <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Preferred time</div>
                <div style="margin-top:4px;font-size:16px;font-weight:800;color:#0A2A5E;">${preferredTime}</div>
              </td>
            </tr>
          </table>

          <!-- MESSAGE / NOTES (if present) -->
          ${
            cleanNotes
              ? `<div style="padding:16px 20px;background:#F8FAFD;">
                  <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Message</div>
                  <div style="margin-top:6px;font-size:15px;line-height:1.6;font-weight:500;color:#0A2A5E;">${cleanNotes}</div>
                </div>`
              : ""
          }
        </div>
      </div>

      <!-- CONDITIONAL SECTION: ADMIN vs CUSTOMER -->
      ${
        isAdmin
          ? `
      <!-- ADMIN ACTIONS -->
      <div class="email-pad" style="padding:0 40px 36px;">
        <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Next action</div>
        <p style="margin:6px 0 16px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">Call the customer to confirm the vehicle, route and timing.</p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td class="action-col" width="${cleanEmail ? "50%" : "100%"}" style="padding-right:${cleanEmail ? "7px" : "0"};">
              <a href="tel:+91${cleanPhone}" style="display:block;box-sizing:border-box;text-align:center;padding:15px 22px;background:#1565D8;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#FFFFFF;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Call customer</a>
            </td>
            ${
              cleanEmail
                ? `<td class="action-col" width="50%" style="padding-left:7px;">
                    <a href="mailto:${cleanEmail}" style="display:block;box-sizing:border-box;text-align:center;padding:15px 22px;background:#FFFFFF;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Reply to customer</a>
                  </td>`
                : ""
            }
          </tr>
        </table>
      </div>
      `
          : `
      <!-- CUSTOMER REASSURANCE -->
      <div class="email-pad" style="padding:0 40px 32px;">
        <div style="background:#EAF2FC;border:1px solid #1565D8;padding:22px 20px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="42" valign="top">
                <div style="width:34px;height:34px;background:#0A2A5E;color:#FFFFFF;font-size:18px;font-weight:800;line-height:34px;text-align:center;">✓</div>
              </td>
              <td valign="top" style="padding-left:12px;">
                <div style="font-size:18px;line-height:1.3;font-weight:800;color:#0A2A5E;">Your enquiry has been received.</div>
                <p style="margin:6px 0 0;font-size:15px;line-height:1.6;font-weight:500;color:#2C4560;">For emergency assistance, call Vidhya Sri directly rather than waiting for an email response.</p>
              </td>
            </tr>
          </table>
          <a href="tel:+919951648174" style="display:block;box-sizing:border-box;margin-top:18px;text-align:center;padding:15px 22px;background:#1565D8;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#FFFFFF;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Call 24×7 · +91 99516 48174</a>
        </div>
      </div>

      <!-- WHAT HAPPENS NEXT -->
      <div class="email-pad" style="padding:0 40px 36px;">
        <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;margin-bottom:12px;">What happens next</div>
        
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">1</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              Our team reviews the journey details you submitted.
            </td>
          </tr>
        </table>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">2</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              We contact you on the phone number you provided.
            </td>
          </tr>
        </table>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">3</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              If anything changes or is urgent, call us directly.
            </td>
          </tr>
        </table>
      </div>
      `
      }

      <!-- FOOTER -->
      <div class="email-pad" style="background:#0A2A5E;padding:28px 40px;">
        <a href="${baseUrl}" target="_blank" style="display:inline-block;text-decoration:none;">
          <img src="${baseUrl}/brand/png/logo/logo-horizontal-reverse-800.png" alt="Vidhya Sri Ambulance" height="34" style="display:block;height:34px;width:auto;border:0;" />
        </a>
        <div style="margin-top:16px;font-size:12px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#BBD5F7;">Emergency &amp; Patient Transport</div>
        <div style="margin-top:10px;font-size:14px;line-height:1.7;font-weight:500;color:#FFFFFF;">
          <a href="tel:+919951648174" style="color:#FFFFFF;font-weight:800;text-decoration:none;">+91 99516 48174</a> · 24 Hours / 7 Days<br>
          Arun Residency, Jafar Ali Bagh, Somajiguda, Hyderabad 500082
        </div>
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid #2A4A80;font-size:12px;line-height:1.6;color:#BBD5F7;">
          ${footnote}
        </div>
      </div>

    </div>
  </div>
</body>
</html>`.trim();
}

/**
 * ── BUSINESS / CORPORATE / HOSPITAL TIE-UP EMAIL TEMPLATE ──
 * Exact match to Vidhya Sri design system & branding
 */
function renderBusinessEmailTemplate({
  variant,
  cleanOrgName,
  cleanContactPerson,
  cleanDesignation,
  cleanPhone,
  cleanEmail,
  cleanCategory,
  cleanLocation,
  cleanVolume,
  cleanNotes,
}: {
  variant: "admin" | "customer";
  cleanOrgName: string;
  cleanContactPerson: string;
  cleanDesignation: string;
  cleanPhone: string;
  cleanEmail: string;
  cleanCategory: string;
  cleanLocation: string;
  cleanVolume: string;
  cleanNotes: string;
}): string {
  const isAdmin = variant === "admin";
  const label = isAdmin ? "Business Tie-Up" : "Partnership Received";
  const headline = isAdmin
    ? "New Corporate / Hospital Tie-Up Enquiry"
    : "We've received your business enquiry.";
  const intro = isAdmin
    ? `An institution submitted a partnership enquiry for ${cleanOrgName}. Details are below.`
    : `Dear ${cleanContactPerson}, thank you for reaching out on behalf of ${cleanOrgName}. Our corporate relations team has received your request. Here are the details you submitted.`;
  const footnote = isAdmin
    ? cleanEmail
      ? `Sent automatically from the vidhyasriambulance.com business enquiry form. Replying goes to ${cleanEmail}.`
      : "Sent automatically from the vidhyasriambulance.com business enquiry form."
    : `You received this email because a business enquiry was submitted on vidhyasriambulance.com for ${cleanOrgName}.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${headline}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; background: #E3EAF4; font-family: Manrope, Arial, Helvetica, sans-serif; color: #0A2A5E; -webkit-font-smoothing: antialiased; }
    a { color: #1565D8; text-decoration: none; }
    a:hover { color: #0B3F9E; }
    @media only screen and (max-width: 580px) {
      .outer-wrap { padding: 16px 10px 32px !important; }
      .email-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .email-h1 { font-size: 24px !important; }
      .stack-mobile { display: block !important; width: 100% !important; }
      .stack-border { border-right: none !important; border-bottom: 1px solid #DDE7F2 !important; }
      .action-col { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#E3EAF4;font-family:Manrope,Arial,Helvetica,sans-serif;color:#0A2A5E;">
  <div class="outer-wrap" style="min-height:100%;background:#E3EAF4;padding:32px 20px 48px;box-sizing:border-box;">
    <div style="width:100%;max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #DDE7F2;color:#0A2A5E;">

      <!-- HEADER -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FFFFFF;border-bottom:3px solid #0A2A5E;">
        <tr>
          <td class="email-pad" style="padding:16px 40px;vertical-align:middle;text-align:left;">
            <a href="${baseUrl}" target="_blank" style="display:inline-block;text-decoration:none;">
              <img src="${baseUrl}/brand/png/logo/logo-horizontal-gradient-800.png" alt="Vidhya Sri Ambulance" height="40" style="display:block;height:40px;width:auto;border:0;" />
            </a>
          </td>
          <td class="email-pad" style="padding:16px 40px;vertical-align:middle;text-align:right;">
            <div style="display:inline-block;padding:6px 10px;background:#EAF2FC;border:1px solid #1565D8;color:#1565D8;font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;">
              ${label}
            </div>
          </td>
        </tr>
      </table>

      <!-- ACCENT BANNER -->
      <div class="email-pad" style="padding:20px 40px 0;">
        <img src="${baseUrl}/email-accent.gif" alt="" width="560" style="display:block;width:100%;height:auto;border:0;" />
      </div>

      <!-- HERO -->
      <div class="email-pad" style="padding:14px 40px 28px;">
        <h1 class="email-h1" style="margin:0 0 12px;font-size:32px;line-height:1.15;font-weight:800;letter-spacing:-.01em;color:#0A2A5E;">
          ${headline}
        </h1>
        <p style="margin:0;font-size:16px;line-height:1.6;font-weight:500;color:#3F5873;">
          ${intro}
        </p>
      </div>

      <!-- SUMMARY CARD -->
      <div class="email-pad" style="padding:0 40px 32px;">
        <div style="border:2px solid #0A2A5E;box-shadow:6px 6px 0 #DDE7F2;background:#FFFFFF;">
          
          <!-- ORG & CATEGORY BAR -->
          <div style="background:#0A2A5E;padding:16px 20px;">
            <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#BBD5F7;">Organization / Institution</div>
            <div style="margin-top:4px;font-size:22px;line-height:1.2;font-weight:800;color:#FFFFFF;">${cleanOrgName}</div>
            <div style="margin-top:6px;font-size:13px;font-weight:700;color:#BBD5F7;text-transform:uppercase;letter-spacing:0.05em;">
              📌 ${cleanCategory}
            </div>
          </div>

          <!-- REPRESENTATIVE DETAILS -->
          <div style="padding:18px 20px;border-bottom:1px solid #DDE7F2;">
            <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Official Representative</div>
            <div style="margin-top:4px;font-size:18px;font-weight:800;color:#0A2A5E;">
              ${cleanContactPerson} ${cleanDesignation ? `<span style="font-size:14px;font-weight:600;color:#536B86;">(${cleanDesignation})</span>` : ""}
            </div>
            <div style="margin-top:6px;font-size:15px;font-weight:700;">
              <a href="tel:+91${cleanPhone}" style="color:#1565D8;text-decoration:none;margin-right:20px;display:inline-block;">+91 ${cleanPhone}</a>
              ${cleanEmail ? `<a href="mailto:${cleanEmail}" style="color:#0A2A5E;text-decoration:none;font-weight:600;word-break:break-all;display:inline-block;">${cleanEmail}</a>` : ""}
            </div>
          </div>

          <!-- LOCATION & CAPACITY METRICS -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:1px solid #DDE7F2;">
            <tr>
              <td class="stack-mobile stack-border" width="50%" valign="top" style="padding:16px 20px;border-right:1px solid #DDE7F2;">
                <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Facility Location / Area</div>
                <div style="margin-top:4px;font-size:16px;font-weight:800;color:#0A2A5E;">${cleanLocation}</div>
              </td>
              <td class="stack-mobile" width="50%" valign="top" style="padding:16px 20px;">
                <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Fleet / Volume Need</div>
                <div style="margin-top:4px;font-size:16px;font-weight:800;color:#0A2A5E;">${cleanVolume}</div>
              </td>
            </tr>
          </table>

          <!-- MESSAGE / NOTES (if present) -->
          ${
            cleanNotes
              ? `<div style="padding:16px 20px;background:#F8FAFD;">
                  <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Specific Requirements / Notes</div>
                  <div style="margin-top:6px;font-size:15px;line-height:1.6;font-weight:500;color:#0A2A5E;">${cleanNotes}</div>
                </div>`
              : ""
          }
        </div>
      </div>

      <!-- CONDITIONAL ACTIONS -->
      ${
        isAdmin
          ? `
      <!-- ADMIN ACTIONS -->
      <div class="email-pad" style="padding:0 40px 36px;">
        <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;">Next action</div>
        <p style="margin:6px 0 16px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">Initiate partnership discussion with representative.</p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td class="action-col" width="${cleanEmail ? "50%" : "100%"}" style="padding-right:${cleanEmail ? "7px" : "0"};">
              <a href="tel:+91${cleanPhone}" style="display:block;box-sizing:border-box;text-align:center;padding:15px 22px;background:#1565D8;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#FFFFFF;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Call representative</a>
            </td>
            ${
              cleanEmail
                ? `<td class="action-col" width="50%" style="padding-left:7px;">
                    <a href="mailto:${cleanEmail}" style="display:block;box-sizing:border-box;text-align:center;padding:15px 22px;background:#FFFFFF;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Reply via Email</a>
                  </td>`
                : ""
            }
          </tr>
        </table>
      </div>
      `
          : `
      <!-- CLIENT REASSURANCE -->
      <div class="email-pad" style="padding:0 40px 32px;">
        <div style="background:#EAF2FC;border:1px solid #1565D8;padding:22px 20px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="42" valign="top">
                <div style="width:34px;height:34px;background:#0A2A5E;color:#FFFFFF;font-size:18px;font-weight:800;line-height:34px;text-align:center;">✓</div>
              </td>
              <td valign="top" style="padding-left:12px;">
                <div style="font-size:18px;line-height:1.3;font-weight:800;color:#0A2A5E;">Corporate tie-up request logged.</div>
                <p style="margin:6px 0 0;font-size:15px;line-height:1.6;font-weight:500;color:#2C4560;">Our corporate relations team will review your fleet / standby requirements and prepare a tailored SLA proposal.</p>
              </td>
            </tr>
          </table>
          <a href="tel:+919951648174" style="display:block;box-sizing:border-box;margin-top:18px;text-align:center;padding:15px 22px;background:#1565D8;border:2px solid #0A2A5E;box-shadow:4px 4px 0 #0A2A5E;color:#FFFFFF;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;">Call 24×7 · +91 99516 48174</a>
        </div>
      </div>

      <!-- WHAT HAPPENS NEXT -->
      <div class="email-pad" style="padding:0 40px 36px;">
        <div style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#536B86;margin-bottom:12px;">Partnership workflow</div>
        
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">1</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              Needs Assessment: We review your site location, emergency tiers and fleet requirements.
            </td>
          </tr>
        </table>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">2</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              SLA Proposal: We share pricing tiers, dedicated ALS/BLS vehicle allocation, and driver roster.
            </td>
          </tr>
        </table>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #DDE7F2;">
          <tr>
            <td width="36" valign="top" style="padding:12px 0;">
              <div style="width:26px;height:26px;box-sizing:border-box;border:2px solid #0A2A5E;color:#0A2A5E;font-size:13px;font-weight:800;line-height:22px;text-align:center;">3</div>
            </td>
            <td valign="top" style="padding:14px 0 12px 14px;font-size:15px;line-height:1.55;font-weight:600;color:#0A2A5E;">
              Onboarding: 24×7 hotline activation and priority dispatch hotline integration.
            </td>
          </tr>
        </table>
      </div>
      `
      }

      <!-- FOOTER -->
      <div class="email-pad" style="background:#0A2A5E;padding:28px 40px;">
        <a href="${baseUrl}" target="_blank" style="display:inline-block;text-decoration:none;">
          <img src="${baseUrl}/brand/png/logo/logo-horizontal-reverse-800.png" alt="Vidhya Sri Ambulance" height="34" style="display:block;height:34px;width:auto;border:0;" />
        </a>
        <div style="margin-top:16px;font-size:12px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#BBD5F7;">Emergency &amp; Patient Transport</div>
        <div style="margin-top:10px;font-size:14px;line-height:1.7;font-weight:500;color:#FFFFFF;">
          <a href="tel:+919951648174" style="color:#FFFFFF;font-weight:800;text-decoration:none;">+91 99516 48174</a> · 24 Hours / 7 Days<br>
          Arun Residency, Jafar Ali Bagh, Somajiguda, Hyderabad 500082
        </div>
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid #2A4A80;font-size:12px;line-height:1.6;color:#BBD5F7;">
          ${footnote}
        </div>
      </div>

    </div>
  </div>
</body>
</html>`.trim();
}

export async function POST(req: Request) {
  try {
    const rawIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    const ip = rawIp.split(",")[0].trim();
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please call our 24×7 dispatch helpline directly." },
        { status: 429 }
      );
    }

    // Origin / CSRF validation
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");
    if (origin && host) {
      const originHost = origin.replace(/^https?:\/\//, "").split(":")[0];
      const expectedHost = host.split(":")[0];
      if (
        originHost !== expectedHost &&
        !originHost.includes("vidhyasriambulance.com") &&
        !originHost.includes("localhost") &&
        originHost !== "127.0.0.1"
      ) {
        return NextResponse.json(
          { error: "Cross-origin submission rejected." },
          { status: 403 }
        );
      }
    }

    const body = await req.json();
    const {
      enquiryType = "customer", // "customer" | "business"
      honeypot = "",

      // Customer fields
      name = "",
      phone = "",
      email = "",
      route = "",
      service = "General Transport / Inquiry",
      notes = "",
      timing = "",

      // Business fields
      organization = "",
      contactPerson = "",
      designation = "",
      category = "",
      location = "",
      estimatedVolume = "",
    } = body;

    // 1. Anti-spam honeypot detection
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 2. Mobile phone validation
    const cleanPhone = String(phone).replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile phone number." },
        { status: 400 }
      );
    }

    // 3. Email sanitization (Strict RFC check, filters out dummy values)
    const rawEmail = String(email || "").trim().toLowerCase();
    const isEmailValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail) &&
      !rawEmail.includes("example.com") &&
      !rawEmail.includes("test.com") &&
      !rawEmail.startsWith("fake") &&
      rawEmail !== "n/a" &&
      rawEmail !== "none" &&
      rawEmail !== "null" &&
      rawEmail !== "undefined";
    const cleanEmail = isEmailValid ? rawEmail : "";

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json({
        success: true,
        message: "Enquiry received (local fallback).",
      });
    }

    const senderEmail = `Vidhya Sri Ambulance <noreply@${siteConfig.seo.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}>`;
    const adminRecipients = ["lokesh.aluvala123@gmail.com", siteConfig.email];

    // ── ROUTE 1: BUSINESS / CORPORATE ENQUIRY ──
    if (enquiryType === "business") {
      const cleanOrgName = escapeHtml(String(organization).trim().slice(0, 150)) || "Corporate Entity";
      const cleanContactPerson = escapeHtml(String(contactPerson || name).trim().slice(0, 100)) || "Institutional Representative";
      const cleanDesignation = escapeHtml(String(designation).trim().slice(0, 100)) || "Coordinator";
      const cleanCategory = escapeHtml(String(category || service).trim().slice(0, 100)) || "Corporate Fleet Tie-Up";
      const cleanLocation = escapeHtml(String(location || route).trim().slice(0, 300)) || "Hyderabad Facility";
      const cleanVolume = escapeHtml(String(estimatedVolume || timing).trim().slice(0, 100)) || "On-Demand SLA / Contract";
      const cleanNotes = escapeHtml(String(notes).trim().slice(0, 2000));

      const adminHtml = renderBusinessEmailTemplate({
        variant: "admin",
        cleanOrgName,
        cleanContactPerson,
        cleanDesignation,
        cleanPhone,
        cleanEmail,
        cleanCategory,
        cleanLocation,
        cleanVolume,
        cleanNotes,
      });

      const adminPayload: Record<string, unknown> = {
        from: senderEmail,
        to: adminRecipients,
        subject: `🏢 New Business/Hospital Tie-Up — ${cleanOrgName}`,
        html: adminHtml,
      };

      if (cleanEmail) {
        adminPayload.reply_to = cleanEmail;
      }

      // 1. Send Admin Email
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
        console.error("Resend API error for business admin email:", errText);
      }

      // 2. Send Business Confirmation Email to User (if user entered email)
      if (cleanEmail) {
        const customerHtml = renderBusinessEmailTemplate({
          variant: "customer",
          cleanOrgName,
          cleanContactPerson,
          cleanDesignation,
          cleanPhone,
          cleanEmail,
          cleanCategory,
          cleanLocation,
          cleanVolume,
          cleanNotes,
        });

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
              subject: `Tie-up Enquiry Received — ${cleanOrgName} & Vidhya Sri Ambulance`,
              html: customerHtml,
            }),
          });
        } catch (custErr) {
          console.error("Failed sending business confirmation email to client:", custErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: "Business partnership enquiry received successfully.",
      });
    }

    // ── ROUTE 2: CUSTOMER / PATIENT ENQUIRY ──
    const cleanName = escapeHtml(String(name).trim().slice(0, 100)) || "Website Visitor";
    const cleanRoute = escapeHtml(String(route).trim().slice(0, 300)) || "Not specified";
    const cleanService = escapeHtml(String(service).trim().slice(0, 100)) || "Ambulance Transfer";
    const cleanNotes = String(notes).trim();
    const cleanTiming = escapeHtml(String(timing).trim().slice(0, 100)) || "Immediate";

    const adminHtml = renderCustomerEmailTemplate({
      variant: "admin",
      cleanName,
      cleanPhone,
      cleanEmail,
      cleanService,
      cleanRoute,
      cleanTiming,
      cleanNotes,
    });

    const adminPayload: Record<string, unknown> = {
      from: senderEmail,
      to: adminRecipients,
      subject: `New Vidhya Sri Ambulance Enquiry — ${cleanService}`,
      html: adminHtml,
    };

    if (cleanEmail) {
      adminPayload.reply_to = cleanEmail;
    }

    // 1. Send Admin Email
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
      console.error("Resend API error for customer admin email:", errText);
    }

    // 2. Send Customer Confirmation Email to User (if user entered email)
    if (cleanEmail) {
      const customerHtml = renderCustomerEmailTemplate({
        variant: "customer",
        cleanName,
        cleanPhone,
        cleanEmail,
        cleanService,
        cleanRoute,
        cleanTiming,
        cleanNotes,
      });

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
