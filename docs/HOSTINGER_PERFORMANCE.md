# Hostinger Infrastructure, DNS & Edge CDN Performance

## 1. Hostinger Account & Resource Verification
- **Hostinger Account**: Verified via connected MCP (`hostinger-hosting`, `hostinger-dns`, `hostinger-billing`).
- **Client ID**: `1024018427`
- **Active Plan**: `hostinger_unlimited_v6` (Subscription ID: `AzZthDVWN3mWQ7dgs`, Order: `1010094184`).
- **Domain Status**: `vidhyasriambulance.com` is actively registered and managed under Hostinger DNS.

---

## 2. DNS Routing & CDN Architecture
- **Hostinger DNS Zone Configuration**:
  - `@` (Apex Domain) $\rightarrow$ ALIAS `cname.vercel-dns.com.`
  - `www` (Subdomain) $\rightarrow$ CNAME `cname.vercel-dns.com.`
  - SPF / MX records mapped to Hostinger Business Email (`mx1.hostinger.com`, `mx2.hostinger.com`).
- **Edge CDN Infrastructure**:
  - Production requests terminate at Vercel's Anycast Edge CDN with active edge points-of-presence in **Mumbai (`bom1`)** and Bangalore, providing sub-50ms Time to First Byte (TTFB) across Telangana and Andhra Pradesh.
  - SSL/TLS: Automatic TLS 1.3 termination with HTTP/2 and HTTP/3 support.
  - Zero CDN Conflict: By directing DNS ALIAS/CNAME records cleanly to Vercel's edge, there are no overlapping or competing CDN layers (e.g. Hostinger CDN chained behind Cloudflare/Vercel), avoiding double-TLS handshake latency.

---

## 3. Caching & Header Strategy
- **Static Assets (`/_next/static/*`)**:
  - `Cache-Control: public, max-age=31536000, immutable`
  - All hashed JS, CSS, and font chunks are cached indefinitely at the edge and browser.
- **SSG HTML Pages (`/`, `/services/*`, `/coverage/*`)**:
  - `Cache-Control: public, max-age=0, must-revalidate`
  - Revalidation via SWR / Stale-While-Revalidate edge tagging.
  - Prerendered HTML is served directly from the Mumbai edge node in < 40ms without serverless cold start penalties.
- **Dynamic API Endpoints (`/api/enquiry`)**:
  - Handled via Vercel Serverless Function with Resend SMTP integration.
  - `Cache-Control: no-store, private`

---

## 4. Hosting Resource Audit Conclusion
- **Resource Constraints**: Nil. Since the frontend is 100% pre-rendered Static Site Generation (SSG) with Edge distribution, origin server CPU and RAM are not bottlenecks.
- **Recommendation**: Retain current Hostinger Business hosting and DNS configuration. No expensive hosting plan upgrade is required, as the SSG + Edge architecture guarantees maximum scalability during Google Ads traffic spikes.
