# Resend Email Setup & Domain Verification Guide

This document outlines the email dispatch setup, DNS configuration, and production environment settings for **Vidhya Sri Ambulance** (`vidhyasriambulance.com`).

---

## 1. Domain & DNS Configuration

The authoritative nameservers for `vidhyasriambulance.com` are managed via **Hostinger DNS**:
- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

Website traffic continues to route without interruption to Vercel via:
- `@` (ALIAS) -> `cname.vercel-dns.com`
- `www` (CNAME) -> `cname.vercel-dns.com`

### Verified Resend DNS Records

The following records are configured in Hostinger DNS and actively resolving across global root nameservers:

| Type | Host / Name | Target / Content | TTL | Priority | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TXT** | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBX30w7pU0eCRuAavs2cnpWuRcRe+EUokBpH1LITopNaj7d1B+bYAtFZog0fbF621eFlNW1ENXvrs9XjPZU+O1BxD+yhJHgcLHp58Y7GRG5jPUiwiIFBmtDVZxa3sFTVSbjYf4na5VPCcqnopk/RekWrXtdK5ZX8kSXRdpkMTwtQIDAQAB` | Auto / 3600 | — | DKIM Public Key |
| **MX** | `send` | `feedback-smtp.ap-northeast-1.amazonses.com` | 60 | 10 | Mail bounce & return-path routing |
| **TXT** | `send` | `v=spf1 include:amazonses.com ~all` | 60 | — | SPF authentication for subdomain |
| **TXT** | `_dmarc` | `v=DMARC1; p=none;` | 3600 | — | DMARC policy |

---

## 2. Resend Credentials & Environment Variables

- **Resend Domain ID:** `b727163e-340d-42b3-81fe-68eceb1110a2`
- **Region:** `ap-northeast-1` (Tokyo / Asia Pacific)
- **Environment Variable Name:** `RESEND_API_KEY`

### Where it is configured:
1. **Hostinger Node.js Web App:** Configured on the Hostinger application instance for user `u100120716`.
2. **Local Environment (`.env.local`):**
   ```bash
   RESEND_API_KEY=re_************************************
   ```
   *(Ensure `.env.local` remains in `.gitignore` and is NEVER committed to version control)*

---

## 3. Server-side API Route (`/api/enquiry`)

Located at [`src/app/api/enquiry/route.ts`](../src/app/api/enquiry/route.ts):

* **Rate Limiting:** Protects against abuse with in-memory IP rate limiting (max 5 requests per 10 minutes per IP).
* **Anti-spam Honeypot:** Discards silent bot submissions if the hidden `honeypot` field is populated.
* **Phone Validation:** Ensures 10-digit mobile number input.
* **Sender Identity:** Uses verified custom domain sender:
  `Vidhya Sri Ambulance <noreply@vidhyasriambulance.com>`
* **Admin Recipient:**
  `lokesh.aluvala123@gmail.com`
  - Includes `reply_to: cleanEmail` if provided by the visitor, allowing the dispatch team to reply directly.
* **Customer Confirmation Email:**
  - Sent automatically to the customer if an email address was provided.
  - Contains summary of requested service, route, timing, and emergency direct dial hotline.

---

## 4. Connected UI Touchpoints

1. **Main Booking Section Form** ([`src/app/page.tsx`](../src/app/page.tsx)):
   - Interactive states: `idle`, `loading`, `success`, `error`.
   - Accessible error handling with direct phone dial fallback.
2. **Interactive Route Booking Flow** ([`src/components/ui/AmbulanceBookingFlow.tsx`](../src/components/ui/AmbulanceBookingFlow.tsx)):
   - Dispatches journey details (pickup, destination, selected ambulance tier, phone) directly to dispatch inbox.
3. **Mobile Quick Action Callback Sheet** ([`src/components/layout/MobileCTA.tsx`](../src/components/layout/MobileCTA.tsx)):
   - Dispatches emergency callback request notification to `/api/enquiry` while simultaneously initiating WhatsApp coordination.

---

## 5. Verification Commands

To verify DNS records directly from the terminal:
```bash
dig +short TXT resend._domainkey.vidhyasriambulance.com @8.8.8.8
dig +short MX send.vidhyasriambulance.com @8.8.8.8
dig +short TXT send.vidhyasriambulance.com @8.8.8.8
dig +short TXT _dmarc.vidhyasriambulance.com @8.8.8.8
```

To trigger re-verification on Resend:
```bash
curl -X POST https://api.resend.com/domains/b727163e-340d-42b3-81fe-68eceb1110a2/verify \
  -H "Authorization: Bearer $RESEND_API_KEY"
```
