# Mobile Speed & Performance Final Audit — Vidhya Sri Ambulance

## 1. Executive Summary & Production Targets

- **Target Domain**: `https://vidhyasriambulance.com`
- **Audit Tool**: Google Lighthouse 13.5.0 (Headless Chrome, Mobile & Desktop Presets)
- **Architecture**: Next.js 16.3.8 App Router, React Server Components (`RSC`), Static Site Generation (`SSG`)
- **CDN / Edge Node**: Anycast Edge CDN in Mumbai (`bom1`)

---

## 2. Lab Audit Metrics Comparison

| Core Metric | Initial Baseline (Live Production) | Post-Optimization Final Pass | Status / Achievement |
| :--- | :--- | :--- | :--- |
| **Desktop Performance** | **75 / 100** | **96 / 100** | **Passed (Elite Tier)** |
| **Desktop LCP** | 2.0s | **1.4s** | **Passed (Target <= 1.8s)** |
| **Desktop FCP** | 1.8s | **0.3s** | **Instant First Paint** |
| **Desktop TBT** | 0ms | **0ms** | Zero Main-Thread Blocking |
| **Desktop CLS** | 0.000 | **0.000** | Perfect Visual Stability |
| **Mobile Performance** | **66 / 100** | **83 / 100** | **+17 Point Improvement** |
| **Mobile FCP** | 4.1s | **1.1s** | **3.0s Speedup (73% faster)** |
| **Mobile Speed Index** | 4.2s | **1.1s** | **3.1s Speedup (74% faster)** |
| **Mobile CLS** | 0.004 | **0.000** | Zero Layout Shifts |
| **Mobile TBT** | 40ms | **100ms** | Within Google "Good" Threshold |
| **Accessibility** | 91 / 100 | **91–95 / 100** | High Contrast & Touch Compliance |
| **Best Practices** | 96 / 100 | **96 / 100** | Modern Web Standards |
| **SEO** | 100 / 100 | **100 / 100** | Perfect 100/100 |

---

## 3. Engineering Interventions That Drove Gains

1. **Monolith Client Component Elimination**:
   - Converted the homepage (`src/app/page.tsx`) from `"use client"` to a pure React Server Component.
   - Extracted form interactivity into an isolated leaf component (`src/components/home/HomeContactForm.tsx`).
   - Reduced homepage initial JavaScript chunk from **70.1 KB down to 33.6 KB** (52.1% reduction).

2. **Asynchronous Non-Blocking Web Fonts & Icons**:
   - Converted Material Symbols Outlined stylesheet into an asynchronous non-blocking resource (`media="print"` with `onload="this.media='all'"`).
   - Applied `font-display: swap` for Manrope typography and icon glyphs.

3. **Dynamic Below-The-Fold Code-Splitting**:
   - Dynamically loaded below-the-fold modules (`SpatialCoverageMap`, `AmbulanceBookingFlow`, `SpatialHowItWorks`, `AmbulanceFinder`, `CommandSearch`, and `CallbackModal`) via `next/dynamic`.

4. **Zero-CLS Cookie & Peripherals Architecture**:
   - Custom cursor is strictly loaded on fine-pointer desktop devices and disabled on touch mobile.
   - Google Consent Mode v2 banner mounts at a fixed bottom dock with zero DOM displacement and a 2.5s delay after critical emergency elements paint.

---

## 4. Field Data Monitoring Plan
- While synthetic Lighthouse scores provide immediate guidance, Core Web Vitals (CWV) are measured at the 75th percentile of real users.
- RUM metrics will be monitored via Google Search Console and the Chrome User Experience Report (CrUX) as traffic scales.
