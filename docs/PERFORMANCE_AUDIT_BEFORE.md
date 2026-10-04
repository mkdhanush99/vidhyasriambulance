# Vidhya Sri Ambulance — Performance Audit (Before Optimization)

**Audit Date:** October 4, 2026  
**Audited Domain:** `https://vidhyasriambulance.com` (Live Production) & Local Production Build  
**Environment:** Next.js 16.3.8 (Webpack) / React 19 / TailwindCSS / Vercel Edge (bom1) / Hostinger DNS  

---

## 1. Executive Summary

A comprehensive performance, Core Web Vitals, and infrastructure audit was conducted across mobile and desktop environments prior to making any optimizations. 

While visual stability is exceptionally strong (**CLS: 0.004 on mobile, 0.000 on desktop**) and CPU blocking is minimal (**TBT: 40ms on mobile, 0ms on desktop**), the primary bottlenecks limiting LCP, FCP, and Speed Index were identified:
1. **Full-Page Client Component Overhead**: `src/app/page.tsx` is marked `"use client"` at line 1, bundling all 11 homepage sections (forms, maps, SVG motifs, booking flow, service grids) into ~700KB of uncompressed client JavaScript that must be downloaded and hydrated.
2. **Synchronous Render-Blocking Font Stylesheet**: An un-preconnected `<link rel="stylesheet">` to Google Fonts Material Symbols Outlined in `<head>` blocks the initial critical render path.
3. **Hero Image Optimization & Discovery**: The hero photograph (`vidhya-sri-ambulance-hyderabad-hospital.webp`, 170KB, 1024x1024) is loaded via `next/image` with `fill`, but lacks optimized responsive breakpoints and priority preloading hints on the mobile viewport.
4. **Absence of Consent Architecture**: No Google Consent Mode v2 or granular cookie management exists to govern future Google Ads / GA4 tracking tags.

---

## 2. Lighthouse Baseline Results (Pre-Optimization)

### Mobile Emulation (Moto G4 / Throttled Fast 4G / 4x CPU Slowdown)
*Measured via official Lighthouse CLI 13.5.0 on `https://vidhyasriambulance.com`*

| Metric / Category | Pre-Optimization Value | Score | Status |
| :--- | :--- | :--- | :--- |
| **Performance Score** | **66 / 100** | 0.66 | ⚠️ Optimization Required |
| **Accessibility** | **91 / 100** | 0.91 | ✅ Strong |
| **Best Practices** | **100 / 100** | 1.00 | ✅ Perfect |
| **SEO** | **92 / 100** | 0.92 | ✅ Strong |
| **First Contentful Paint (FCP)** | **4.1 s** | 0.21 | ⚠️ Delayed by render-blocking resources |
| **Largest Contentful Paint (LCP)** | **4.6 s** | 0.35 | ⚠️ Exceeds 2.5s target |
| **Total Blocking Time (TBT)** | **40 ms** | 1.00 | ✅ Outstanding (< 200ms) |
| **Cumulative Layout Shift (CLS)** | **0.004** | 1.00 | ✅ Outstanding (< 0.05 target) |
| **Speed Index** | **16.7 s** | 0.00 | ⚠️ Delayed by progressive hydration |

### Desktop Environment
*Measured via official Lighthouse CLI 13.5.0 on `https://vidhyasriambulance.com`*

| Metric / Category | Pre-Optimization Value | Score | Status |
| :--- | :--- | :--- | :--- |
| **Performance Score** | **75 / 100** | 0.75 | 🟡 Good, Can be 90+ |
| **Accessibility** | **95 / 100** | 0.95 | ✅ Near Perfect |
| **Best Practices** | **96 / 100** | 0.96 | ✅ Excellent |
| **SEO** | **100 / 100** | 1.00 | ✅ Perfect |
| **First Contentful Paint (FCP)** | **1.8 s** | 0.37 | 🟡 Decent, Target < 1.0s |
| **Largest Contentful Paint (LCP)** | **2.0 s** | 0.64 | ✅ Passes 2.5s (< 1.8s target) |
| **Total Blocking Time (TBT)** | **0 ms** | 1.00 | ✅ Zero blocking |
| **Cumulative Layout Shift (CLS)** | **0.000** | 1.00 | ✅ Zero shift |
| **Speed Index** | **13.0 s** | 0.00 | ⚠️ Delayed by hydration |

---

## 3. Bundle & Asset Inventory (Before)

### JavaScript Chunks
- `framework-0f597d6e68ffafed.js`: **213.8 KB** (React 19 runtime, ReactDOM)
- `794-000a715ce19c7a17.js`: **235.4 KB** (Shared page components & layout dependencies)
- `4bd1b696-92152b0f5947070d.js`: **196.3 KB** (Client component definitions)
- `main-89c6d55dd5e0bb90.js`: **136.0 KB** (Next.js core bootstrap)
- `app/page-1dea5d2c8f589ef6.js`: **70.1 KB** (Entire homepage client payload)
- `app/layout-10760e3956caed26.js`: **58.5 KB** (Global layout, Header, Footer, CustomCursor)
- `polyfills-42372ed130431b0a.js`: **110.0 KB**
- **Total Uncompressed Client JavaScript:** ~1.02 MB (~260 KB gzipped)

### CSS Bundles
- Global stylesheet: `.next/static/css/246497ede1b2b025.css` (**81.3 KB** uncompressed, 13.4 KB gzipped)
- Manrope font utility classes, CSS 3D perspective tokens, and theme colors.

### Fonts
- **Primary Body/Headings**: Manrope loaded through `next/font/google` (`4c9affa5bc8f420e-s.p.woff2` - 24.0 KB, `cc978ac5ee68c2b6-s.woff2` - 14.9 KB). Properly served with `font-display: swap` from local origin.
- **Icons**: Material Symbols Outlined loaded from `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,0&display=swap`. Synchronous blocking `<link>` in `src/app/layout.tsx`.

### Images & Above-the-Fold Media
- Hero image: `/images/vidhya-sri-ambulance-hyderabad-hospital.webp` (170 KB, 1024x1024 px).
- Header Logo: `/brand/svg/logo/logo-horizontal-gradient.svg` (5.1 KB).
- Mobile CTA icons: inline SVGs and Material Symbols.

---

## 4. Main-Thread & Network Bottleneck Analysis

1. **Server Response Time (TTFB)**:
   - On cold uncached edge runs, origin TTFB can occasionally spike during Next.js image optimization or edge warmups. Vercel Mumbai edge (`bom1`) serves prerendered static pages in < 50ms once cached.
2. **Client Hydration Overhead**:
   - Marking `page.tsx` with `"use client"` forces the browser to evaluate the entire React tree for 11 sections before finishing hydration.
   - Interactive components (such as `HeroSpatialStage` mouse tracking, `AmbulanceFinder`, and `ContactSection` form) can be isolated as leaf client components, allowing the page itself to be an ultra-fast Server Component.
3. **External Icon Font**:
   - The Material Symbols Outlined stylesheet blocks initial paint while negotiating DNS/TLS with Google Fonts. It should either be loaded asynchronously or icons inlined to achieve zero external CSS blockers.
4. **Third-Party Scripts & Consent**:
   - No Google Tag Manager, Google Ads conversion tag, or GA4 is currently active.
   - Adding them without a strict Google Consent Mode v2 framework would severely hurt mobile LCP and TBT.

---

## 5. Strategic Optimization Plan

To achieve the production targets (**LCP <= 1.8s, CLS <= 0.05, TBT < 100ms, Mobile Lighthouse 90+**):
1. **Server Component Architecture**: Refactor `src/app/page.tsx` to a Server Component. Isolate interactive components (`AmbulanceFinder`, `ContactForm`, `HeroSpatialStage` pointer interaction).
2. **Critical Hero Prioritization**:
   - Inline or preload critical hero typography and styles.
   - Serve optimized responsive hero image with `fetchpriority="high"` and exact sizes.
   - Asynchronous/non-blocking icon font loading.
3. **Code Splitting & Lazy Hydration**:
   - Below-the-fold sections (`CoverageSection`, `SpatialCoverageMap`, `SpatialHowItWorks`, `AmbulanceBookingFlow`) dynamically imported with lightweight SSR fallbacks.
4. **Google Consent Mode v2 + Lightweight Consent Banner**:
   - Default all marketing storage signals (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`) to `denied`.
   - Non-blocking, visual-stability-preserving cookie banner with `Accept all`, `Reject non-essential`, and `Manage preferences`.
5. **Google Ads Landing Page Enhancements**:
   - Clear keyword-matched headings, immediate call/WhatsApp buttons, and privacy-safe conversion dispatch.
