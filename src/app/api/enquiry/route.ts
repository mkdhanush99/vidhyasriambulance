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

const baseUrl = "https://vidhyasriambulance.com";

/**
 * ── CUSTOMER / PATIENT ENQUIRY EMAIL TEMPLATE ──
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
  const label = isAdmin ? "Customer enquiry" : "Enquiry received";
  const whoLabel = isAdmin ? "Customer / Caller" : "Your contact details";
  const headline = isAdmin
    ? "New ambulance enquiry received"
    : "We've received your enquiry.";
  const intro = isAdmin
    ? "A patient / family member submitted a transfer request through vidhyasriambulance.com. Details are below."
    : `Thank you, ${cleanName}. Your request has been received by the Vidhya Sri dispatch team. Here is what you submitted.`;
  const footnote = isAdmin
    ? cleanEmail
      ? "Sent automatically from the vidhyasriambulance.com customer enquiry form. Replying goes directly to the customer."
      : "Sent automatically from the vidhyasriambulance.com customer enquiry form. Customer provided contact phone number only."
    : "You received this email because an enquiry was submitted on vidhyasriambulance.com with this address.";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${headline}</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background-color: #E3EAF4; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0A2A5E; -webkit-font-smoothing: antialiased; }
    a { color: #1565D8; text-decoration: none; }
    a:hover { color: #0B3F9E; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .email-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .action-btn { min-width: 100% !important; display: block !important; margin-bottom: 10px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #E3EAF4; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <div style="background-color: #E3EAF4; padding: 32px 16px 48px; min-height: 100%;">
    <div class="email-container" style="max-width: 640px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #DDE7F2; color: #0A2A5E;">
      
      <!-- HEADER -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFFFFF; border-bottom: 3px solid #0A2A5E;">
        <tr>
          <td class="email-pad" style="padding: 16px 32px; text-align: left; vertical-align: middle;">
            <a href="${baseUrl}" target="_blank" style="display: inline-block; text-decoration: none;">
              <img src="${baseUrl}/brand/png/logo/logo-horizontal-gradient-800.png" alt="Vidhya Sri Ambulance" width="180" height="42" style="display: block; width: 180px; height: 42px; border: 0; outline: none; font-family: 'Manrope', Arial, sans-serif; font-size: 18px; font-weight: 800; color: #0A2A5E;" />
            </a>
          </td>
          <td class="email-pad" style="padding: 16px 32px; text-align: right; vertical-align: middle;">
            <span style="display: inline-block; padding: 6px 12px; background-color: #EAF2FC; border: 1px solid #1565D8; color: #1565D8; font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; white-space: nowrap;">
              ${label}
            </span>
          </td>
        </tr>
      </table>

      <!-- ACCENT STRIP -->
      <div class="email-pad" style="padding: 20px 32px 0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height: 4px; background-color: #1565D8; border-top: 2px solid #0A2A5E; font-size: 1px; line-height: 1px;">&nbsp;</td>
          </tr>
        </table>
      </div>

      <!-- HERO INTRO -->
      <div class="email-pad" style="padding: 16px 32px 28px;">
        <h1 style="margin: 0 0 12px; font-size: 28px; line-height: 1.2; font-weight: 800; letter-spacing: -0.01em; color: #0A2A5E;">
          ${headline}
        </h1>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; font-weight: 500; color: #3F5873;">
          ${intro}
        </p>
      </div>

      <!-- SUMMARY CARD -->
      <div class="email-pad" style="padding: 0 32px 32px;">
        <div style="border: 2px solid #0A2A5E; box-shadow: 6px 6px 0 #DDE7F2; background-color: #FFFFFF;">
          
          <!-- SERVICE TITLE BAR -->
          <div style="background-color: #0A2A5E; padding: 16px 20px;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #BBD5F7;">
              Service Required
            </div>
            <div style="margin-top: 4px; font-size: 22px; line-height: 1.2; font-weight: 800; color: #FFFFFF;">
              ${cleanService}
            </div>
          </div>

          <!-- CALLER / CONTACT DETAILS -->
          <div style="padding: 18px 20px; border-bottom: 1px solid #DDE7F2;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
              ${whoLabel}
            </div>
            <div style="margin-top: 4px; font-size: 18px; font-weight: 800; color: #0A2A5E;">
              ${cleanName}
            </div>
            <div style="margin-top: 6px; font-size: 15px; font-weight: 700;">
              <a href="tel:+91${cleanPhone}" style="color: #1565D8; text-decoration: none; margin-right: 18px; display: inline-block;">
                📞 +91 ${cleanPhone}
              </a>
              ${
                cleanEmail
                  ? `<a href="mailto:${cleanEmail}" style="color: #0A2A5E; text-decoration: none; font-weight: 600; word-break: break-all; display: inline-block;">
                      ✉️ ${cleanEmail}
                    </a>`
                  : ""
              }
            </div>
          </div>

          <!-- JOURNEY / ROUTE -->
          <div style="padding: 20px; background-color: #EAF2FC; border-bottom: 1px solid #DDE7F2;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="24" valign="top" style="padding-top: 2px;">
                  <div style="width: 14px; height: 14px; border: 4px solid #0A2A5E; background-color: #FFFFFF; border-radius: 50%;"></div>
                  <div style="width: 3px; height: 32px; background-color: #1565D8; margin: 3px 0 3px 5px;"></div>
                  <div style="width: 14px; height: 14px; background-color: #1565D8; border: 2px solid #0A2A5E;"></div>
                </td>
                <td valign="top" style="padding-left: 12px;">
                  <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
                    Pickup &amp; Destination / Route
                  </div>
                  <div style="margin-top: 4px; font-size: 16px; line-height: 1.4; font-weight: 800; color: #0A2A5E;">
                    ${cleanRoute}
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!-- TIMING -->
          <div style="padding: 16px 20px; border-bottom: 1px solid #DDE7F2;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
              Preferred Timing
            </div>
            <div style="margin-top: 4px; font-size: 16px; font-weight: 800; color: #0A2A5E;">
              ${cleanTiming}
            </div>
          </div>

          <!-- MESSAGE / NOTES (if provided) -->
          ${
            cleanNotes
              ? `<div style="padding: 16px 20px; background-color: #F8FAFD;">
                  <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
                    Message / Additional Details
                  </div>
                  <div style="margin-top: 6px; font-size: 14px; line-height: 1.6; font-weight: 500; color: #0A2A5E;">
                    ${cleanNotes}
                  </div>
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
      <div class="email-pad" style="padding: 0 32px 36px;">
        <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
          Next Action
        </div>
        <p style="margin: 6px 0 16px; font-size: 15px; line-height: 1.55; font-weight: 600; color: #0A2A5E;">
          Call the customer immediately to confirm the vehicle, route and dispatch timing.
        </p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="padding-bottom: ${cleanEmail ? "10px" : "0"};">
              <a class="action-btn" href="tel:+91${cleanPhone}" style="display: block; text-align: center; padding: 14px 22px; background-color: #1565D8; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #FFFFFF; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
                📞 Call Customer (+91 ${cleanPhone})
              </a>
            </td>
          </tr>
          ${
            cleanEmail
              ? `<tr>
                  <td>
                    <a class="action-btn" href="mailto:${cleanEmail}" style="display: block; text-align: center; padding: 14px 22px; background-color: #FFFFFF; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #0A2A5E; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
                      ✉️ Reply to Customer (${cleanEmail})
                    </a>
                  </td>
                </tr>`
              : ""
          }
        </table>
      </div>
      `
          : `
      <!-- CUSTOMER REASSURANCE -->
      <div class="email-pad" style="padding: 0 32px 28px;">
        <div style="background-color: #EAF2FC; border: 1px solid #1565D8; padding: 22px 20px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="40" valign="top">
                <div style="width: 32px; height: 32px; background-color: #0A2A5E; color: #FFFFFF; font-size: 18px; font-weight: 800; line-height: 32px; text-align: center;">
                  ✓
                </div>
              </td>
              <td valign="top" style="padding-left: 10px;">
                <div style="font-size: 17px; line-height: 1.3; font-weight: 800; color: #0A2A5E;">
                  Your enquiry has been received.
                </div>
                <p style="margin: 6px 0 0; font-size: 14px; line-height: 1.6; font-weight: 500; color: #2C4560;">
                  For immediate emergency assistance, call Vidhya Sri Somajiguda control room directly rather than waiting for an email response.
                </p>
              </td>
            </tr>
          </table>
          <a href="${siteConfig.phone.href}" style="display: block; margin-top: 18px; text-align: center; padding: 14px 22px; background-color: #1565D8; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #FFFFFF; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
            🚨 Call 24×7 · ${siteConfig.phone.display}
          </a>
        </div>
      </div>

      <!-- WHAT HAPPENS NEXT -->
      <div class="email-pad" style="padding: 0 32px 36px;">
        <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86; margin-bottom: 12px;">
          What happens next
        </div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                1
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              Our Somajiguda dispatch coordinators review your route and patient requirements.
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                2
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              We contact you directly on +91 ${cleanPhone} to confirm vehicle dispatch and ETA.
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                3
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              If the patient's condition changes or is urgent, call our direct line without delay.
            </td>
          </tr>
        </table>
      </div>
      `
      }

      <!-- FOOTER -->
      <div class="email-pad" style="background-color: #0A2A5E; padding: 28px 32px;">
        <a href="${baseUrl}" target="_blank" style="display: inline-block; text-decoration: none;">
          <img src="${baseUrl}/brand/png/logo/logo-horizontal-reverse-800.png" alt="Vidhya Sri Ambulance" width="160" height="37" style="display: block; width: 160px; height: 37px; border: 0; outline: none; font-family: 'Manrope', Arial, sans-serif; font-size: 16px; font-weight: 800; color: #FFFFFF;" />
        </a>
        <div style="margin-top: 16px; font-size: 12px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #BBD5F7;">
          Emergency &amp; Patient Transport
        </div>
        <div style="margin-top: 10px; font-size: 13px; line-height: 1.7; font-weight: 500; color: #FFFFFF;">
          <a href="tel:+919951648174" style="color: #FFFFFF; font-weight: 800; text-decoration: none;">+91 99516 48174</a> · 24 Hours / 7 Days<br />
          Arun Residency, Jafar Ali Bagh, Somajiguda, Hyderabad 500082
        </div>
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #2A4A80; font-size: 11px; line-height: 1.6; color: #BBD5F7;">
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
  const label = isAdmin ? "Business Tie-Up Enquiry" : "Partnership Received";
  const headline = isAdmin
    ? "New Corporate / Hospital Tie-Up Enquiry"
    : "We've received your business enquiry.";
  const intro = isAdmin
    ? `An institution submitted a partnership enquiry for ${cleanOrgName}. Details are below.`
    : `Dear ${cleanContactPerson}, thank you for reaching out on behalf of ${cleanOrgName}. Our corporate relations team at Somajiguda has received your requirements.`;
  const footnote = isAdmin
    ? `Sent automatically from the vidhyasriambulance.com business enquiry form. Replying goes to ${cleanEmail || "the organization"}.`
    : `You received this email because a business enquiry was submitted on vidhyasriambulance.com for ${cleanOrgName}.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${headline}</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background-color: #E3EAF4; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0A2A5E; -webkit-font-smoothing: antialiased; }
    a { color: #1565D8; text-decoration: none; }
    a:hover { color: #0B3F9E; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .email-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .action-btn { min-width: 100% !important; display: block !important; margin-bottom: 10px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #E3EAF4; font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <div style="background-color: #E3EAF4; padding: 32px 16px 48px; min-height: 100%;">
    <div class="email-container" style="max-width: 640px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #DDE7F2; color: #0A2A5E;">
      
      <!-- HEADER -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFFFFF; border-bottom: 3px solid #0A2A5E;">
        <tr>
          <td class="email-pad" style="padding: 16px 32px; text-align: left; vertical-align: middle;">
            <a href="${baseUrl}" target="_blank" style="display: inline-block; text-decoration: none;">
              <img src="${baseUrl}/brand/png/logo/logo-horizontal-gradient-800.png" alt="Vidhya Sri Ambulance" width="180" height="42" style="display: block; width: 180px; height: 42px; border: 0; outline: none; font-family: 'Manrope', Arial, sans-serif; font-size: 18px; font-weight: 800; color: #0A2A5E;" />
            </a>
          </td>
          <td class="email-pad" style="padding: 16px 32px; text-align: right; vertical-align: middle;">
            <span style="display: inline-block; padding: 6px 12px; background-color: #0A2A5E; border: 1px solid #0A2A5E; color: #FFFFFF; font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; white-space: nowrap;">
              ${label}
            </span>
          </td>
        </tr>
      </table>

      <!-- ACCENT STRIP -->
      <div class="email-pad" style="padding: 20px 32px 0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height: 4px; background-color: #1565D8; border-top: 2px solid #0A2A5E; font-size: 1px; line-height: 1px;">&nbsp;</td>
          </tr>
        </table>
      </div>

      <!-- HERO INTRO -->
      <div class="email-pad" style="padding: 16px 32px 28px;">
        <h1 style="margin: 0 0 12px; font-size: 28px; line-height: 1.2; font-weight: 800; letter-spacing: -0.01em; color: #0A2A5E;">
          ${headline}
        </h1>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; font-weight: 500; color: #3F5873;">
          ${intro}
        </p>
      </div>

      <!-- SUMMARY CARD -->
      <div class="email-pad" style="padding: 0 32px 32px;">
        <div style="border: 2px solid #0A2A5E; box-shadow: 6px 6px 0 #DDE7F2; background-color: #FFFFFF;">
          
          <!-- ORGANIZATION & CATEGORY BAR -->
          <div style="background-color: #0A2A5E; padding: 18px 20px;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #BBD5F7;">
              Organization / Hospital / Entity
            </div>
            <div style="margin-top: 4px; font-size: 24px; line-height: 1.2; font-weight: 800; color: #FFFFFF;">
              ${cleanOrgName}
            </div>
            <div style="margin-top: 6px; font-size: 13px; font-weight: 700; color: #38A3F7; text-transform: uppercase; letter-spacing: 0.05em;">
              📌 ${cleanCategory}
            </div>
          </div>

          <!-- REPRESENTATIVE DETAILS -->
          <div style="padding: 18px 20px; border-bottom: 1px solid #DDE7F2;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
              Official Representative
            </div>
            <div style="margin-top: 4px; font-size: 18px; font-weight: 800; color: #0A2A5E;">
              ${cleanContactPerson} ${cleanDesignation ? `<span style="font-size: 14px; font-weight: 600; color: #536B86;">(${cleanDesignation})</span>` : ""}
            </div>
            <div style="margin-top: 8px; font-size: 15px; font-weight: 700;">
              <a href="tel:+91${cleanPhone}" style="color: #1565D8; text-decoration: none; margin-right: 18px; display: inline-block;">
                📞 +91 ${cleanPhone}
              </a>
              ${
                cleanEmail
                  ? `<a href="mailto:${cleanEmail}" style="color: #0A2A5E; text-decoration: none; font-weight: 600; word-break: break-all; display: inline-block;">
                      ✉️ ${cleanEmail}
                    </a>`
                  : ""
              }
            </div>
          </div>

          <!-- FACILITY LOCATION -->
          <div style="padding: 18px 20px; border-bottom: 1px solid #DDE7F2; background-color: #EAF2FC;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
              Facility / Campus / Event Location
            </div>
            <div style="margin-top: 4px; font-size: 16px; font-weight: 800; color: #0A2A5E;">
              📍 ${cleanLocation}
            </div>
          </div>

          <!-- ESTIMATED VOLUME / FLEET REQUIREMENT -->
          <div style="padding: 18px 20px; border-bottom: 1px solid #DDE7F2;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
              Fleet Structure / Service Scope
            </div>
            <div style="margin-top: 4px; font-size: 16px; font-weight: 800; color: #0A2A5E;">
              🚑 ${cleanVolume}
            </div>
          </div>

          <!-- ADDITIONAL SPECIFICATIONS / NOTES -->
          ${
            cleanNotes
              ? `<div style="padding: 18px 20px; background-color: #F8FAFD;">
                  <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
                    Contract Details / Special Equipment Requirements
                  </div>
                  <div style="margin-top: 6px; font-size: 14px; line-height: 1.6; font-weight: 500; color: #0A2A5E;">
                    ${cleanNotes}
                  </div>
                </div>`
              : ""
          }

        </div>
      </div>

      <!-- CONDITIONAL ACTION: ADMIN vs CORPORATE CLIENT -->
      ${
        isAdmin
          ? `
      <!-- ADMIN ACTIONS -->
      <div class="email-pad" style="padding: 0 32px 36px;">
        <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86;">
          Next Action
        </div>
        <p style="margin: 6px 0 16px; font-size: 15px; line-height: 1.55; font-weight: 600; color: #0A2A5E;">
          Contact ${cleanContactPerson} to discuss fleet allocation, service level agreements (SLA), and commercial terms.
        </p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="padding-bottom: ${cleanEmail ? "10px" : "0"};">
              <a class="action-btn" href="tel:+91${cleanPhone}" style="display: block; text-align: center; padding: 14px 22px; background-color: #1565D8; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #FFFFFF; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
                📞 Call Representative (+91 ${cleanPhone})
              </a>
            </td>
          </tr>
          ${
            cleanEmail
              ? `<tr>
                  <td>
                    <a class="action-btn" href="mailto:${cleanEmail}" style="display: block; text-align: center; padding: 14px 22px; background-color: #FFFFFF; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #0A2A5E; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
                      ✉️ Reply to Work Email (${cleanEmail})
                    </a>
                  </td>
                </tr>`
              : ""
          }
        </table>
      </div>
      `
          : `
      <!-- CLIENT CONFIRMATION -->
      <div class="email-pad" style="padding: 0 32px 28px;">
        <div style="background-color: #EAF2FC; border: 1px solid #1565D8; padding: 22px 20px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="40" valign="top">
                <div style="width: 32px; height: 32px; background-color: #0A2A5E; color: #FFFFFF; font-size: 18px; font-weight: 800; line-height: 32px; text-align: center;">
                  ✓
                </div>
              </td>
              <td valign="top" style="padding-left: 10px;">
                <div style="font-size: 17px; line-height: 1.3; font-weight: 800; color: #0A2A5E;">
                  Partnership Enquiry Received
                </div>
                <p style="margin: 6px 0 0; font-size: 14px; line-height: 1.6; font-weight: 500; color: #2C4560;">
                  Our Somajiguda corporate fleet operations desk is reviewing ${cleanOrgName}'s requirements. A partnerships manager will contact you within 2-4 business hours with vehicle availability and SLA documentation.
                </p>
              </td>
            </tr>
          </table>
          <a href="tel:+919951648174" style="display: block; margin-top: 18px; text-align: center; padding: 14px 22px; background-color: #1565D8; border: 2px solid #0A2A5E; box-shadow: 4px 4px 0 #0A2A5E; color: #FFFFFF; font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; text-decoration: none;">
            📞 Direct Corporate Desk · +91 99516 48174
          </a>
        </div>
      </div>

      <!-- NEXT STEPS -->
      <div class="email-pad" style="padding: 0 32px 36px;">
        <div style="font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #536B86; margin-bottom: 12px;">
          Tie-up Onboarding Process
        </div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                1
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              Preliminary fleet capacity and paramedic staffing alignment for your facility.
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                2
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              Formal proposal, response time SLA guarantees, and contract signing.
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #DDE7F2;">
          <tr>
            <td width="36" style="padding: 12px 0;" valign="top">
              <div style="width: 24px; height: 24px; border: 2px solid #0A2A5E; color: #0A2A5E; font-size: 12px; font-weight: 800; line-height: 20px; text-align: center;">
                3
              </div>
            </td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.5; font-weight: 600; color: #0A2A5E;" valign="top">
              Vehicle deployment, dedicated control room hotline, and driver/paramedic orientation.
            </td>
          </tr>
        </table>
      </div>
      `
      }

      <!-- FOOTER -->
      <div class="email-pad" style="background-color: #0A2A5E; padding: 28px 32px;">
        <a href="${baseUrl}" target="_blank" style="display: inline-block; text-decoration: none;">
          <img src="${baseUrl}/brand/png/logo/logo-horizontal-reverse-800.png" alt="Vidhya Sri Ambulance" width="160" height="37" style="display: block; width: 160px; height: 37px; border: 0; outline: none; font-family: 'Manrope', Arial, sans-serif; font-size: 16px; font-weight: 800; color: #FFFFFF;" />
        </a>
        <div style="margin-top: 16px; font-size: 12px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #BBD5F7;">
          Corporate &amp; Institutional Fleet Solutions
        </div>
        <div style="margin-top: 10px; font-size: 13px; line-height: 1.7; font-weight: 500; color: #FFFFFF;">
          <a href="tel:+919951648174" style="color: #FFFFFF; font-weight: 800; text-decoration: none;">+91 99516 48174</a> · 24 Hours / 7 Days<br />
          Arun Residency, Jafar Ali Bagh, Somajiguda, Hyderabad 500082
        </div>
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #2A4A80; font-size: 11px; line-height: 1.6; color: #BBD5F7;">
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
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please call our 24×7 dispatch helpline directly." },
        { status: 429 }
      );
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
      const cleanOrgName = String(organization).trim() || "Corporate Entity";
      const cleanContactPerson = String(contactPerson || name).trim() || "Institutional Representative";
      const cleanDesignation = String(designation).trim() || "Coordinator";
      const cleanCategory = String(category || service).trim() || "Corporate Fleet Tie-Up";
      const cleanLocation = String(location || route).trim() || "Hyderabad Facility";
      const cleanVolume = String(estimatedVolume || timing).trim() || "On-Demand SLA / Contract";
      const cleanNotes = String(notes).trim();

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
    const cleanName = String(name).trim() || "Website Visitor";
    const cleanRoute = String(route).trim() || "Not specified";
    const cleanService = String(service).trim() || "Ambulance Transfer";
    const cleanNotes = String(notes).trim();
    const cleanTiming = String(timing).trim() || "Immediate";

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
