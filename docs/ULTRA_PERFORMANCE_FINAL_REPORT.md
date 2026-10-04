# Ultra-Performance, Google Ads Landing Page & Consent Hardening — Final Report

## 1. Executive Summary & Core Web Vitals Audit

Vidhya Sri Ambulance (`https://vidhyasriambulance.com`) has undergone a complete production performance optimization, Google Consent Mode v2 implementation, and Google Ads landing page hardening without compromising the approved visual system, White + Vidhya Blue identity, Manrope typography, or CSS 3D/SVG 2.5D hero ambulance.

### Core Web Vitals & Lighthouse Comparison

| Metric / Audit | Baseline Before (Live Production) | Post-Optimization (After) | Improvement / Achievement |
| :--- | :--- | :--- | :--- |
| **Desktop Performance Score** | **75 / 100** | **96 / 100** | **+21 Points (Elite Grade)** |
| **Desktop LCP** | 2.0s | **1.4s** | **0.6s Faster (Beats <= 1.8s target)** |
| **Desktop FCP** | 1.8s | **0.3s** | **1.5s Faster (Instant paint)** |
| **Desktop TBT** | 0ms | **0ms** | Zero main-thread blocking |
| **Desktop CLS** | 0.000 | **0.000** | Perfect visual stability |
| **Mobile Performance Score** | **66 / 100** | **83 / 100** | **+17 Points** |
| **Mobile FCP** | 4.1s | **1.1s** | **3.0s Faster (73% reduction)** |
| **Mobile Speed Index** | 4.2s | **1.1s** | **3.1s Faster (74% reduction)** |
| **Mobile CLS** | 0.004 | **0.000** | Zero layout shifts |
| **Mobile TBT** | 40ms | **100ms** | Maintained within good threshold |
| **SEO Score** | 100 / 100 | **100 / 100** | Perfect 100/100 |
| **Best Practices Score** | 96 / 100 | **96 / 100** | High compliance |
| **Accessibility Score** | 91 / 100 | **91-95 / 100** | Accessible touch targets & contrast |
| **Homepage Page JS Chunk** | 70.1 KB | **33.6 KB** | **52.1% Reduction in initial page JS** |

---

## 2. Key Architecture & Engineering Changes

### A. React Server Component (RSC) Architecture
- **Root Conversion**: Converted `src/app/page.tsx` from an oversized monolithic client component (`"use client"`) to a pure **Server Component**.
- **Form Leaf Component**: Extracted the interactive callback form into an isolated client component (`src/components/home/HomeContactForm.tsx`), eliminating hydration delays for all static hero and service sections.
- **Dynamic Code-Splitting**: Code-split interactive below-the-fold features (`SpatialCoverageMap`, `AmbulanceBookingFlow`, `SpatialHowItWorks`, `AmbulanceFinder`, `CommandSearch`, and `CallbackModal`) via `next/dynamic`.

### B. Hero & Above-The-Fold Prioritization
- **Instant Hero Render**: Critical hero text, emergency dispatch badge ("10-15 Min Response"), and primary `tel:+919985223344` CTA render in the first paint ($FCP = 0.3\text{s}$ desktop, $1.1\text{s}$ mobile).
- **CSS 3D / SVG 2.5D Ambulance**: Preserved with hardware-accelerated CSS transforms (`translate3d`, `rotateY`) and lightweight vector rendering.
- **Material Symbols Optimization**: Converted blocking Google Fonts stylesheet into an asynchronous non-blocking resource (`media="print"` with `onload="this.media='all'"`) and declared `font-display: swap`.

### C. Google Consent Mode v2 & Privacy Hardening
- **Default State**: Initialized in `<head>` prior to any tracking tags with `ad_storage`, `analytics_storage`, `ad_user_data`, and `ad_personalization` set to `'denied'`.
- **Zero-CLS Banner**: Created lightweight fixed dock (`src/components/ui/CookieConsentBanner.tsx`) with a 2.5s non-blocking delay.
- **Options**: `[Accept all]`, `[Reject non-essential]`, and `[Preferences]` granular controls.
- **Permanent Access**: `<CookiePreferencesButton />` integrated into the site footer.
- **Healthcare Privacy Guard**: Conversion events (`ambulance_call_click`, `whatsapp_click`, `callback_submit`, `enquiry_submit`) strictly transmit sanitized metadata and never send patient symptoms or medical details.

### D. Hostinger Infrastructure & Edge Delivery
- **Hostinger Account**: Verified active `hostinger_unlimited_v6` plan (Order `1010094184`, Client `1024018427`).
- **DNS**: Managed by Hostinger DNS routing `@` and `www` via ALIAS/CNAME to Vercel Anycast Edge network with Mumbai (`bom1`) point-of-presence for sub-50ms TTFB.
- **Static Assets**: Cached indefinitely with `Cache-Control: public, max-age=31536000, immutable`.

---

## 3. Google Ads Landing Page Matrix
Campaign clicks are routed directly to intent-specific SSG pages:
- **Emergency Ambulance**: `/services/emergency-ambulance`
- **ICU & Critical Care**: `/services/icu-ambulance`
- **Ventilator Ambulance**: `/services/ventilator-ambulance`
- **Outstation Transport**: `/services/outstation-ambulance`
- **Hyperlocal Hyderabad**: `/coverage/[slug]` (e.g. `/coverage/banjara-hills`)

Each landing page presents immediate emergency dispatch dialers without modal obstruction.

---

## 4. Verification Artifacts & Logs
- Before Mobile Audit: `docs/lh-before-mobile.report.json` & `.html`
- Before Desktop Audit: `docs/lh-before-desktop.report.json` & `.html`
- After Mobile Audit: `docs/lh-after-mobile.report.json` & `.html`
- After Desktop Audit: `docs/lh-after-desktop.report.json` & `.html`
- Performance Budget: `docs/PERFORMANCE_BUDGET.md`
- Cookie & Consent Architecture: `docs/COOKIE_CONSENT_ARCHITECTURE.md`
- Google Ads Landing Page Guide: `docs/GOOGLE_ADS_LANDING_PAGE.md`
- Hostinger Performance Audit: `docs/HOSTINGER_PERFORMANCE.md`
