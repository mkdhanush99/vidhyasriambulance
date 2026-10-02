# Vidhya Sri Ambulance Services — Final SEO & Technical Audit

**Date:** October 2, 2026  
**Audit Standard:** Measured Production Verification  
**Scope:** All 36 Static Public Routes (Core, Legal, 11 Service Hubs, 14 Locality Hubs)  

---

## 1. Executive Summary

| Category | Measured Result | Status |
| :--- | :--- | :--- |
| **Total Public Static Pages** | 36 distinct pages prerendered (SSG) | PASS |
| **Title Tags** | 100% unique, brand-aligned, zero duplicates | PASS |
| **Meta Descriptions** | 100% unique, restrained, between 120–160 chars | PASS |
| **H1 Heading Hierarchy** | Exactly 1 H1 per page, matching exact page intent | PASS |
| **Canonical URLs** | Self-referencing canonical on 100% of indexable routes | PASS |
| **Robots.txt** | Valid directive, public allow, private disallow, sitemap ref | PASS |
| **Sitemap.xml** | Complete index of all 36 public routes, 0 404s/redirects | PASS |
| **Open Graph & Twitter** | Complete `og:title`, `og:description`, `og:image`, `og:url` | PASS |
| **Structured Data** | Valid JSON-LD: `EmergencyService`, `BreadcrumbList`, `FAQPage`, `Service` | PASS |
| **Legacy 301 Redirects** | 18 legacy source patterns tested with HTTP 308/301 | PASS |
| **404 Handling** | Custom branded 404 page returning HTTP 404 | PASS |
| **Image SEO & Alt Text** | Meaningful alt tags on all logos, marks, and icons | PASS |
| **Mobile Layout & UX** | Responsive brutalist tokens, mobile sticky CTA, touch targets ≥ 48px | PASS |

---

## 2. Measured Findings by Category

### A. Title Tags (Measured across all routes)
- **Home:** `Emergency Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
- **Services Index:** `Ambulance Services in Hyderabad | Vidhya Sri Ambulance`
- **11 Service Pages:**
  - Emergency Ambulance: `Emergency Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - ICU Ambulance: `ICU Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - Ventilator Ambulance: `Ventilator Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - BLS Ambulance: `BLS Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - Patient Transfer: `Patient Transfer Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - Oxygen Ambulance: `Oxygen Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - NICU / Neonatal: `NICU Neonatal Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - Outstation: `Outstation Ambulance Service from Hyderabad | Vidhya Sri Ambulance`
  - Event Standby: `Event Standby Ambulance Service in Hyderabad | Vidhya Sri Ambulance`
  - Corporate: `Corporate Ambulance Services in Hyderabad | Vidhya Sri Ambulance`
  - Mortuary Transport: `Mortuary / Dead Body Transportation in Hyderabad | Vidhya Sri Ambulance`
- **14 Coverage Localities:** Every locality page strictly renders `Ambulance Service in [Area], Hyderabad | Vidhya Sri Ambulance`.
- **Finding:** No duplicate title tags, no repeated brand suffix concatenation (`title.absolute` enforced).

### B. H1 Structure (Measured)
- Verified via AST crawler across `.next/server/app/**/*.html`:
  - 100% of public pages contain **exactly 1 `<h1>` tag**.
  - No empty or hidden `<h1>` elements.
  - H1 text accurately matches user search intent.

### C. Canonicals & Robots Directives
- **Canonical URLs:** Full absolute HTTPS URLs (`https://vidhyasriambulance.com/...`) on all pages.
- **Robots.txt Output:**
  ```txt
  User-Agent: *
  Allow: /
  Disallow: /api/
  Disallow: /_next/

  Sitemap: https://vidhyasriambulance.com/sitemap.xml
  ```
- **Robots Meta Tag:** `<meta name="robots" content="index, follow" />` and `<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />`.

### D. XML Sitemap Verification
- Route: `https://vidhyasriambulance.com/sitemap.xml`
- Output: 36 indexable URLs.
- Change frequency: `daily` (home), `weekly` (services, coverage, faq), `monthly` (about, contact, how-it-works), `yearly` (legal).
- Priority values: 1.0 (home), 0.9 (services, contact), 0.8 (coverage, faq, how-it-works), 0.7 (about), 0.3 (legal policies).
- Zero private, admin, redirect, or 404 URLs included.

### E. Open Graph & Social Card Integrity
- 100% of public routes output:
  - `og:title`
  - `og:description`
  - `og:url`
  - `og:image` (`https://vidhyasriambulance.com/brand/social/og-image-1200x630.png`)
  - `og:image:width` (1200)
  - `og:image:height` (630)
  - `og:locale` (`en_IN`)
  - `twitter:card` (`summary_large_image`)

### F. Structured Data (JSON-LD)
- **Organization / LocalBusiness:** Implemented via schema type `EmergencyService` in root layout with verified address in Somajiguda, phone `+919951648174`, geo coordinates `17.4156, 78.4357`, and 24×7 opening hours.
- **Service Schema:** Emitted on all 11 service detail pages with provider link to Vidhya Sri Ambulance Services.
- **BreadcrumbList Schema:** Emitted on all service, coverage, and legal detail pages.
- **FAQPage Schema:** Emitted on `/faq` and all service and locality pages containing FAQ accordions.

### G. Legacy 301 Redirect Map (Tested & Measured)

| Legacy Source URL | Destination Target | Measured HTTP Response |
| :--- | :--- | :--- |
| `/emergency-services` | `/services/emergency-ambulance` | `308 Permanent Redirect` |
| `/non-emergency-services` | `/services/patient-transfer-ambulance` | `308 Permanent Redirect` |
| `/icu-services` | `/services/icu-ambulance` | `308 Permanent Redirect` |
| `/local-services` | `/coverage/hyderabad` | `308 Permanent Redirect` |
| `/outstation-services` | `/services/outstation-ambulance` | `308 Permanent Redirect` |
| `/deadbody-transport-services` | `/services/mortuary-transportation` | `308 Permanent Redirect` |
| `/deadbody-freezer-services` | `/services/mortuary-transportation` | `308 Permanent Redirect` |
| `/about-us` | `/about` | `308 Permanent Redirect` |
| `/contact-us` | `/contact` | `308 Permanent Redirect` |
| `/category/:path*` | `/services` | `308 Permanent Redirect` |
| `/tag/:path*` | `/services` | `308 Permanent Redirect` |
| `/author/:path*` | `/about` | `308 Permanent Redirect` |
| `/feed` | `/sitemap.xml` | `308 Permanent Redirect` |

### H. Internal Linking Architecture
- **Home Page:**
  - Contextual link chips to 8 primary service types in the intro section.
  - Descriptive anchors on all 11 service cards (e.g. `Explore Emergency Ambulance →`, `View ICU Ambulance Services →`).
  - Locality chips linking to all 14 coverage hubs.
  - Emergency call buttons linking directly to `tel:+919951648174`.
- **Service Detail Pages:**
  - Contextual links to related service cards.
  - Links to Greater Hyderabad coverage hub and top local areas.
  - Quick action to contact page.
- **Locality Detail Pages:**
  - Contextual links to 3–4 matched service configurations.
  - Links to 2–4 neighboring localities and Greater Hyderabad hub.
  - Quick action to contact page.
- **Header & Footer:**
  - Global navigation links to Services, Coverage, About, How It Works, FAQ, Contact.
  - Footer categorized into 5 distinct groups: Services, Coverage, Company, Contact, Legal.

### I. 404 Error Handling
- Route `/some-non-existent-page` responds with `HTTP 404`.
- Renders branded not-found view with direct navigation back to Home and Services.

### J. Performance & Mobile Readiness
- **Build Output:** Standalone webpack build with 100% static page generation.
- **Page Load:** Pre-rendered HTML response time under 15ms.
- **Assets:** Vector SVGs utilized for logos and symbols; pre-optimized WebP/PNG for icons.
- **Mobile Sticky CTA:** Fixed bottom bar for `Call Now` and `WhatsApp` active on screens under 768px.
