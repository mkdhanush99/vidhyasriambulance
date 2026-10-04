# SEO & Technical SEO Final Shipping Audit — Vidhya Sri Ambulance

## 1. Executive Summary
- **Domain**: `https://vidhyasriambulance.com`
- **Audit Date**: October 2026
- **Status**: **PASS (100/100 Lighthouse SEO Score)**
- **Indexable Public URLs**: 43 Pages
- **Primary Search Market**: Hyderabad & Secunderabad, Telangana, India (Hyperlocal Emergency & Patient Transportation)

---

## 2. On-Page Hierarchy & Metadata Verification

| Check Item | Status | Architectural Rule & Implementation |
| :--- | :--- | :--- |
| **Title Tags** | **PASS** | Every page possesses a unique, descriptive title tag adhering to `<Primary Intent> \| Vidhya Sri Ambulance`. No keyword stuffing or duplicate strings across locations. |
| **Meta Descriptions** | **PASS** | 100% unique per page. Each highlights emergency response readiness, trained paramedic support, 24/7 dispatch phone (`+91 99516 48174`), and exact locality/service details. |
| **Single H1 Tag** | **PASS** | Every page renders exactly one semantic `<h1>` tag in the hero section matching user search intent. |
| **Semantic Heading Tree** | **PASS** | Headings strictly cascade from `<h1>` to `<h2>` (Section headings), `<h3>` (Service cards / feature points), with zero heading level skips for visual styling. |
| **Canonicals** | **PASS** | Every page emits an explicit `<link rel="canonical" href="https://vidhyasriambulance.com/..." />`. No localhost, no trailing-slash duplication, no staging leakage. |
| **Language & Charset** | **PASS** | `<html lang="en">` with `<meta charset="utf-8" />` declared in root layout. |

---

## 3. Crawlability & Machine Directives

### A. Robots.txt (`/robots.txt`)
- **Status**: **PASS**
- **Directives**:
  ```text
  User-agent: *
  Allow: /
  Disallow: /api/

  Sitemap: https://vidhyasriambulance.com/sitemap.xml
  ```
- **Validation**:
  - `Allow: /` ensures all public HTML, service pages, and locality hubs are crawled.
  - Critical rendering assets (`/_next/static/*`, CSS, JS, SVG, and fonts) are **never blocked**, ensuring full visual DOM rendering by Googlebot.
  - Internal backend submission endpoints (`/api/`) are protected.

### B. XML Sitemap (`/sitemap.xml`)
- **Status**: **PASS**
- **Output**: UTF-8 XML generated dynamically via Next.js `MetadataRoute.Sitemap`.
- **URL Count**: 43 absolute HTTPS URLs.
- **Exclusions**: 404s, redirected URLs, test routes, and API endpoints are excluded.

### C. Agent Discoverability (`/llms.txt`)
- **Status**: **PASS**
- **Implementation**: Deployed at `/llms.txt` following standard AI/agent discoverability conventions. Concisely documents core services, 14 Hyderabad coverage hubs, dispatch phone, and policies with zero sensitive data.

---

## 4. Structured Data (Schema.org JSON-LD)

| Schema Type | Applied Locations | Validated Fields |
| :--- | :--- | :--- |
| **`EmergencyService` / `LocalBusiness`** | Root Layout (`layout.tsx`) & Homepage (`page.tsx`) | `@id`, `name`, `legalName`, `telephone`, `address` (Somajiguda, Hyderabad), `openingHours: "Mo-Su 00:00-24:00"`, `geo` coordinates, `priceRange: "₹₹"`, `hasOfferCatalog`. |
| **`BreadcrumbList`** | All Service (`/services/[slug]`) and Location (`/coverage/[slug]`) pages | 3-tier semantic breadcrumbs (`Home` -> `Services/Coverage` -> `[Item]`). |
| **`Service`** | Each dynamic service detail page | `name`, `description`, `provider`, `areaServed`, `serviceType`. |

*Integrity Check: No fabricated aggregate reviews, fake star ratings, or misleading clinical claims are present in JSON-LD.*

---

## 5. Mobile-First Indexing & Content Parity
- **Content Equivalence**: Mobile and desktop render the exact same semantic HTML, headings, service descriptions, and dispatch numbers.
- **Touch Responsiveness**: Minimum touch target size $\ge 48\times 48\text{px}$ for all phone call and WhatsApp action buttons.
- **No Hidden Critical Text**: All essential medical information is available directly in the static DOM without requiring user gestures or JavaScript execution to unpack.
