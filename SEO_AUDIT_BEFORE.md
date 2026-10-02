# Vidhya Sri Ambulance — Baseline Technical & Local SEO Audit (BEFORE)

**Audit Date**: October 2, 2026  
**Audited Domain**: `https://vidhyasriambulance.com`  
**Framework**: Next.js 16.3.8 (App Router, Turbopack, React 19)  
**Environment**: Production Build Compilation & Local Dev Server Verification  

---

## 1. Executive Summary & Measured Findings

This baseline audit evaluates the live implementation of Vidhya Sri Ambulance prior to the comprehensive SEO optimization pass. All results reflect direct HTTP status codes, DOM extraction via curl, route tree compilation analysis, and Next.js metadata verification.

| Category | Measured Status | Severity | Core Issues Identified |
| :--- | :--- | :--- | :--- |
| **A. Crawlability & Robots** | **FAIL (404)** | CRITICAL | `/robots.txt` returns HTTP 404; no crawl directive file exists. |
| **B. Sitemap** | **FAIL (404)** | CRITICAL | `/sitemap.xml` returns HTTP 404; no XML sitemap generated. |
| **C. Internal Broken Links** | **FAIL (404)** | HIGH | Footer links to `/terms`, `/cancellation-refund`, and 12 locality subpaths return HTTP 404. |
| **D. Canonical Tags** | **FAIL (Missing)** | HIGH | `<link rel="canonical">` is absent from all compiled page headers. |
| **E. Structured Data (JSON-LD)** | **FAIL (Missing)** | HIGH | No `Organization`, `LocalBusiness`, `EmergencyService`, `Service`, or `FAQPage` schema found. |
| **F. Legacy URL Handling** | **FAIL (404)** | HIGH | Older WordPress URLs (e.g., `/emergency-services/`, `/icu-services/`) result in 404s after slash stripping. |
| **G. Social Metadata (OG/Twitter)** | **PARTIAL** | MEDIUM | Root layout defines global OG/Twitter tags; individual pages lack unique OG images/canonical URLs. |
| **H. Heading Hierarchy** | **PASS with warnings** | LOW | Single H1 on analyzed pages; some template cards lack contextual heading tags. |
| **I. Content Depth & Local Silos** | **PARTIAL** | HIGH | Local SEO pages do not exist; service descriptions are brief (~1 paragraph). |

---

## 2. Detailed Audit Sections

### A. Crawlability & Indexation
- **`robots.txt`**: Measured HTTP 404 (`curl -s -I http://localhost:3000/robots.txt`). Search engine crawlers have no directive guidance.
- **Indexation Directives**: No explicit `robots: { index: true, follow: true }` metadata configured in root layout.
- **Orphan / Dead Paths**: 
  - Footer explicitly references `/terms` (HTTP 404) and `/cancellation-refund` (HTTP 404).
  - Footer and coverage components reference `/coverage/[area]` which have no underlying route files.

### B. Sitemap Inspection
- **`sitemap.xml`**: Measured HTTP 404 (`curl -s -I http://localhost:3000/sitemap.xml`).
- **Route Mismatch**: 11 dynamic service pages are pre-rendered, but 0 are submitted via an XML index to search engines.

### C. Canonical Tag Implementation
- **Inspection**: `<link rel="canonical" href="...">` was verified via raw HTML source inspection on `/`, `/services`, `/about`, and `/services/emergency-ambulance`.
- **Result**: Not present. While `metadataBase: new URL("https://vidhyasriambulance.com")` is set in `src/app/layout.tsx`, no `alternates: { canonical: ... }` is defined in layout or page metadata.

### D. Titles & Meta Descriptions
- **Global Default Title**: `Vidhya Sri Ambulance | 24×7 Emergency Ambulance Service Hyderabad` (61 characters) — **Pass**.
- **Global Template**: `%s | Vidhya Sri Ambulance` — **Pass**.
- **Meta Description**: `24×7 emergency ambulance and advanced patient transportation across Hyderabad and Telangana. ICU ambulance, ventilator support, neonatal transport, and bed-to-bed clinical continuity.` (185 characters) — Slightly long (optimal: 145–160 chars).
- **Service Pages**: Present in `services.ts`, but descriptions are concise and lack breadcrumb integration.

### E. Headings & Semantic Markup
- **Homepage**:
  - H1: `Care, Moving When It Matters.`
  - H2: `Every Emergency, Covered.`
  - H2: `Clinical Logistics, Engineered.`
  - H2: `Why Vidhya Sri?`
  - H2: `Coverage Across Greater Hyderabad`
  - H2: `Emergency Dispatch When Every Second Counts`
- **Service Detail Page (`/services/[slug]`)**:
  - H1: Dynamic service name (e.g. `Emergency Ambulance (ALS)`)
  - H2: `What's On Board`
  - H2: `Frequently Asked`
  - H2: `Related Services`
  - H2: `Need {service.name}?`
  - Assessment: Clear single H1 hierarchy, logical progression.

### F. Structured Data (Schema.org / JSON-LD)
- Direct inspection reveals **zero** `<script type="application/ld+json">` tags in the compiled output.
- Missing schemas:
  - `EmergencyService` / `MedicalBusiness` / `LocalBusiness` for Hyderabad headquarters.
  - `BreadcrumbList` for service hierarchy and navigation paths.
  - `Service` schema detailing individual ambulance transport capabilities.
  - `FAQPage` schema on `/faq` and service detail pages.

### G. Legacy WordPress URL Migration
The previous WordPress installation had several public indexable URLs that risk becoming 404 errors post-migration:
- `/emergency-services/` → 404
- `/non-emergency-services/` → 404
- `/icu-services/` → 404
- `/local-services/` → 404
- `/outstation-services/` → 404
- `/deadbody-transport-services/` → 404
- `/deadbody-freezer-services/` → 404

### H. Performance & Rendering
- **Server-Side Generation (SSG)**: 21 pages compile statically (`○` and `●`), ensuring full HTML crawlability without client-side hydration dependency for primary text.
- **Images**: SVGs are utilized directly with `unoptimized` flag for vector logos. Social OG image is located at `/brand/social/og-image-1200x630.png`.
- **Fonts**: Manrope Google font loaded with `display: swap` and variable CSS definition.

---

## 3. Required Implementation Actions (Phases 2 – 5)

1. **Legacy 301 Redirects**: Implement Next.js `redirects()` in `next.config.ts` mapping legacy WordPress URLs.
2. **Missing Legal & Utility Pages**: Create `/terms` and `/cancellation-refund`.
3. **Local SEO Hierarchy**: Create dynamic `/coverage/[slug]` route with rich, verified locality content for 14 Hyderabad zones.
4. **Structured Data Utility**: Build reusable JSON-LD generators for `EmergencyService`, `BreadcrumbList`, `Service`, and `FAQPage`.
5. **Technical Crawl Files**: Build dynamic `src/app/robots.ts` and `src/app/sitemap.ts` covering all 35 indexable URLs.
6. **Canonical & Metadata Overhaul**: Add explicit `alternates.canonical`, optimized descriptions, and OpenGraph parameters across all pages.
7. **Contextual Internal Linking**: Replace generic anchors with descriptive keyword anchors connecting services, localities, and core triage.
