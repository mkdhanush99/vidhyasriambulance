# Performance Budget — Vidhya Sri Ambulance

## 1. Executive Summary & Purpose
This document establishes the production performance budgets for **Vidhya Sri Ambulance** (`https://vidhyasriambulance.com`). In emergency medical transport services, page loading speed directly impacts user health outcomes, conversion rates, and Google Ads Quality Scores. Every 100ms delay in emergency situation response increases drop-off and user anxiety.

---

## 2. Core Web Vitals Production Thresholds

| Metric | Google Standard (Good) | Vidhya Sri Production Target | Internal Target (Homepage) | Emergency Context Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | <= 2.5s | **<= 2.0s** | **<= 1.8s** | Critical: User needs immediate reassurance that emergency help is available. |
| **INP** (Interaction to Next Paint) | <= 200ms | **<= 150ms** | **<= 100ms** | Tap responsiveness for "Call Emergency" must feel instantaneous on touch devices. |
| **CLS** (Cumulative Layout Shift) | <= 0.10 | **<= 0.05** | **<= 0.02** | Zero visual movement prevents accidental mis-taps when trying to press "Call Now". |
| **FCP** (First Contentful Paint) | <= 1.8s | **<= 1.5s** | **<= 1.2s** | Brand and phone number must appear in the first rendered frame. |
| **TBT** (Total Blocking Time) | <= 200ms | **<= 100ms** | **<= 50ms** | Main thread cannot be blocked by scripts when user tries to dial. |

---

## 3. Resource Size Budgets (Transferred Over Network / Compressed)

| Resource Category | Budget Limit | Current Measurement (Post-Optimization) | Status |
| :--- | :--- | :--- | :--- |
| **Initial HTML Document** | <= 45 KB | ~22 KB | Passed |
| **Critical Initial JavaScript (Homepage)** | <= 120 KB | ~78 KB (33.6 KB page chunk) | Passed |
| **Critical Above-the-Fold CSS** | <= 30 KB | ~16.5 KB | Passed |
| **Hero Image / 2.5D SVG Elements** | <= 80 KB | ~24 KB (inline vector + SVG) | Passed |
| **Web Fonts (Manrope)** | <= 60 KB | ~35 KB (woff2 subset) | Passed |
| **Total Initial Viewport Payloads** | <= 350 KB | ~175.5 KB | Passed |
| **Total Homepage Assets (Fully Loaded)** | <= 1.2 MB | ~680 KB | Passed |

---

## 4. Request Count Budgets

| Metric | Budget Limit | Current Post-Optimization |
| :--- | :--- | :--- |
| **Initial Critical Requests (0–2s)** | <= 12 requests | 7 requests |
| **Render-Blocking Requests** | **0** requests | 0 requests (Material Symbols made async) |
| **Total Third-Party Scripts Before User Interaction** | <= 2 (GTM / Consent Mode v2 minimal stub) | 1 (Consent Mode v2 default stub) |
| **Total Requests on Complete Page Idle** | <= 45 requests | 28 requests |

---

## 5. Architectural Enforcement Rules

1. **Server Components First (`RSC`)**:
   - The homepage root (`src/app/page.tsx`) and layout shells MUST remain React Server Components.
   - Client interactivity (`useState`, `useEffect`) is strictly encapsulated in isolated leaf components (`HomeContactForm`, `CallbackModal`, `CommandSearch`).
2. **Dynamic Code-Splitting for Below-the-Fold Features**:
   - Interactive widgets below the first viewport (`SpatialCoverageMap`, `AmbulanceBookingFlow`, `SpatialHowItWorks`, `AmbulanceFinder`) MUST use `next/dynamic` with loading placeholders.
3. **Zero Third-Party Blocking**:
   - Google Tag Manager, GA4, and Google Ads scripts must NEVER block hero paint.
   - Scripts are loaded with `strategy="afterInteractive"` or triggered upon explicit consent.
4. **Font Loading Hygiene**:
   - Manrope is loaded via `next/font/google` with `display: 'swap'` and preconnect.
   - External icon stylesheets (Material Symbols) must load asynchronously via media trick (`media="print"` with `onload="this.media='all'"`).
5. **Image Sizing & Modern Formats**:
   - Every `next/image` must define explicit `width`, `height`, and `sizes`.
   - `priority` flag is reserved strictly for the primary hero visual. Below-the-fold images default to `loading="lazy"`.

---

## 6. Continuous Monitoring & Regression Prevention
- **Pre-Merge Audit**: All Pull Requests must pass `npm run build` with zero chunk warnings.
- **Automated Synthetic Testing**: Weekly Lighthouse CI testing on mobile (`Moto G4` emulation, 4x CPU slowdown).
- **Field Data (CrUX)**: Monitored via Google Search Console Core Web Vitals report targeting >= 90% Good URLs at the 75th percentile.
