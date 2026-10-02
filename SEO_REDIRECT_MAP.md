# Vidhya Sri Ambulance — Legacy URL Migration & 301 Redirect Strategy

**Document**: SEO Redirect Mapping & Legacy URL Protection  
**Target Domain**: `https://vidhyasriambulance.com`  
**Redirect Implementation Mechanism**: Next.js `next.config.ts` (`permanent: true` -> HTTP 301)  

---

## 1. Core Service Redirect Mapping

| Legacy WordPress URL | New Canonical URL | HTTP Status | Business & SEO Rationale |
| :--- | :--- | :--- | :--- |
| `/emergency-services/` | `/services/emergency-ambulance` | 301 Permanent | Preserves existing search equity for primary ALS emergency queries. |
| `/emergency-services` | `/services/emergency-ambulance` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/non-emergency-services/` | `/services/patient-transfer-ambulance` | 301 Permanent | Routes planned non-emergency hospital transit to dedicated patient transfer service. |
| `/non-emergency-services` | `/services/patient-transfer-ambulance` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/icu-services/` | `/services/icu-ambulance` | 301 Permanent | Maps legacy critical-care ICU transport queries directly to modern ICU ambulance page. |
| `/icu-services` | `/services/icu-ambulance` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/local-services/` | `/coverage` | 301 Permanent | Directs generic local/citywide transit intent to the primary Hyderabad coverage hub. |
| `/local-services` | `/coverage` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/outstation-services/` | `/services/outstation-ambulance` | 301 Permanent | Maps interstate and long-distance ambulance traffic to outstation service page. |
| `/outstation-services` | `/services/outstation-ambulance` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/deadbody-transport-services/` | `/services/mortuary-transportation` | 301 Permanent | Directs mortuary repatriation queries to dignified deceased transportation page. |
| `/deadbody-transport-services` | `/services/mortuary-transportation` | 301 Permanent | Normalizes non-trailing-slash pattern. |
| `/deadbody-freezer-services/` | `/services/mortuary-transportation` | 301 Permanent | Consolidates mortuary freezer box and refrigeration transport requests into mortuary service. |
| `/deadbody-freezer-services` | `/services/mortuary-transportation` | 301 Permanent | Normalizes non-trailing-slash pattern. |

---

## 2. WordPress System & Taxonomy Redirects

Legacy WordPress installations often leave behind RSS feeds, category archives, and author paths that Google continues to crawl:

| Legacy WordPress Pattern | Target Destination | Status | Rationale |
| :--- | :--- | :--- | :--- |
| `/feed/:path*` | `/` | 301 Permanent | Retired RSS feeds consolidated to homepage. |
| `/category/:path*` | `/services` | 301 Permanent | Older category archives redirected to modern services index. |
| `/tag/:path*` | `/services` | 301 Permanent | Tag taxonomy archives mapped to services directory. |
| `/wp-content/:path*` | `/` | 301 Permanent | Protects against crawl budget depletion from deprecated legacy WP media links. |
| `/contact-us/` | `/contact` | 301 Permanent | Common legacy contact page slug redirected to standard `/contact`. |
| `/contact-us` | `/contact` | 301 Permanent | Normalizes contact slug. |
| `/about-us/` | `/about` | 301 Permanent | Legacy about page redirected to `/about`. |
| `/about-us` | `/about` | 301 Permanent | Normalizes about slug. |
