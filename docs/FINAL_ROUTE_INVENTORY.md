# Final Route Inventory & URL Consolidation — Vidhya Sri Ambulance

## 1. Executive Summary
This document provides the definitive, complete inventory of all public indexable pages, canonical URLs, utility routes, dynamic SSG endpoints, and legacy 301 redirects for **Vidhya Sri Ambulance** (`https://vidhyasriambulance.com`).

---

## 2. Core Public Pages (4)
| Route | Canonical URL | Type | Status | Description |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `https://vidhyasriambulance.com` | SSG | 200 | Homepage, 24/7 Emergency Dispatch, Core Value Proposition |
| `/about` | `https://vidhyasriambulance.com/about` | SSG | 200 | Organization Background, Medical Standards, Fleet Credentials |
| `/services` | `https://vidhyasriambulance.com/services` | SSG | 200 | Complete Ambulance & Transport Service Directory |
| `/contact` | `https://vidhyasriambulance.com/contact` | SSG | 200 | 24/7 Helpline, Central Hub Location, Dual Enquiry Portals |

---

## 3. Specialized Medical Services Directory (12 Pages)
All service routes are pre-rendered via Next.js Static Site Generation (`generateStaticParams`):

| Route | Canonical URL | H1 Title | Category |
| :--- | :--- | :--- | :--- |
| `/services/emergency-ambulance` | `https://vidhyasriambulance.com/services/emergency-ambulance` | 24/7 Emergency Ambulance Service in Hyderabad | Emergency ALS |
| `/services/icu-ambulance` | `https://vidhyasriambulance.com/services/icu-ambulance` | ICU Ambulance with Multi-Para Monitors | Critical Care |
| `/services/ventilator-ambulance` | `https://vidhyasriambulance.com/services/ventilator-ambulance` | Advanced Ventilator Ambulance Transport | Critical Care |
| `/services/bls-ambulance` | `https://vidhyasriambulance.com/services/bls-ambulance` | Basic Life Support (BLS) Ambulance Service | Non-Emergency |
| `/services/patient-transfer-ambulance` | `https://vidhyasriambulance.com/services/patient-transfer-ambulance` | Scheduled Hospital & Patient Transfer | Non-Emergency |
| `/services/oxygen-ambulance` | `https://vidhyasriambulance.com/services/oxygen-ambulance` | Oxygen-Equipped Ambulance Transport | Specialized |
| `/services/nicu-neonatal-ambulance` | `https://vidhyasriambulance.com/services/nicu-neonatal-ambulance` | Neonatal & Infant NICU Ambulance Service | Critical Care |
| `/services/outstation-ambulance` | `https://vidhyasriambulance.com/services/outstation-ambulance` | Intercity & Outstation Ambulance Service | Long-Distance |
| `/services/event-standby-ambulance` | `https://vidhyasriambulance.com/services/event-standby-ambulance` | Event & Sports Standby Ambulance Fleet | On-Site Medical |
| `/services/corporate-ambulance` | `https://vidhyasriambulance.com/services/corporate-ambulance` | Corporate & Industrial Campus Ambulance | Contractual |
| `/services/mortuary-ambulance` | `https://vidhyasriambulance.com/services/mortuary-ambulance` | Dignified Mortuary Ambulance Transportation | Deceased Care |
| `/services/dead-body-freezer-box` | `https://vidhyasriambulance.com/services/dead-body-freezer-box` | Dead Body Freezer Box Hire & Delivery | Deceased Care |

---

## 4. Hyperlocal Hyderabad Coverage Directory (14 Localities + 1 Hub)
All coverage routes map to real dispatch stations across Greater Hyderabad:

| Route | Canonical URL | Locality / Suburb | ETA Target |
| :--- | :--- | :--- | :--- |
| `/coverage` | `https://vidhyasriambulance.com/coverage` | Greater Hyderabad Overview | Central Hub |
| `/coverage/hyderabad` | `https://vidhyasriambulance.com/coverage/hyderabad` | Citywide Metro Hyderabad | 10–15 Mins |
| `/coverage/somajiguda` | `https://vidhyasriambulance.com/coverage/somajiguda` | Somajiguda (Headquarters) | 8–12 Mins |
| `/coverage/banjara-hills` | `https://vidhyasriambulance.com/coverage/banjara-hills` | Banjara Hills (Road 1–14) | 8–12 Mins |
| `/coverage/jubilee-hills` | `https://vidhyasriambulance.com/coverage/jubilee-hills` | Jubilee Hills & Check Post | 10–15 Mins |
| `/coverage/punjagutta` | `https://vidhyasriambulance.com/coverage/punjagutta` | Punjagutta & Nagarjuna Circle | 8–12 Mins |
| `/coverage/begumpet` | `https://vidhyasriambulance.com/coverage/begumpet` | Begumpet & Prakash Nagar | 10–15 Mins |
| `/coverage/secunderabad` | `https://vidhyasriambulance.com/coverage/secunderabad` | Secunderabad Station & Marredpally | 10–15 Mins |
| `/coverage/madhapur` | `https://vidhyasriambulance.com/coverage/madhapur` | Madhapur & Cyber Towers | 10–15 Mins |
| `/coverage/hitech-city` | `https://vidhyasriambulance.com/coverage/hitech-city` | HITEC City & Mindspace | 10–15 Mins |
| `/coverage/gachibowli` | `https://vidhyasriambulance.com/coverage/gachibowli` | Gachibowli & Financial District | 12–15 Mins |
| `/coverage/kondapur` | `https://vidhyasriambulance.com/coverage/kondapur` | Kondapur & Botanical Garden | 12–15 Mins |
| `/coverage/kukatpally` | `https://vidhyasriambulance.com/coverage/kukatpally` | Kukatpally (KPHB & Y Junction) | 12–18 Mins |
| `/coverage/mehdipatnam` | `https://vidhyasriambulance.com/coverage/mehdipatnam` | Mehdipatnam & PVNR Expressway | 10–15 Mins |
| `/coverage/lb-nagar` | `https://vidhyasriambulance.com/coverage/lb-nagar` | LB Nagar & Nagole Ring Road | 15–20 Mins |

---

## 5. Utility & Information Pages (7)
| Route | Canonical URL | Purpose |
| :--- | :--- | :--- |
| `/how-it-works` | `https://vidhyasriambulance.com/how-it-works` | 3-Step Emergency Dispatch Workflow |
| `/faq` | `https://vidhyasriambulance.com/faq` | Pricing, Fleet, Booking Questions |
| `/customer-enquiry` | `https://vidhyasriambulance.com/customer-enquiry` | Patient & Family Booking Portal |
| `/business-enquiry` | `https://vidhyasriambulance.com/business-enquiry` | Hospital & Corporate Tie-Up Portal |
| `/privacy-policy` | `https://vidhyasriambulance.com/privacy-policy` | DPDP Act & Data Protection Notice |
| `/terms` | `https://vidhyasriambulance.com/terms` | Service Terms & Dispatch Liability |
| `/cancellation-refund` | `https://vidhyasriambulance.com/cancellation-refund` | Cancellation Terms & Dispatch Refund Policy |

---

## 6. Technical & Machine Endpoints (4)
| Endpoint | URL | Purpose | Status |
| :--- | :--- | :--- | :--- |
| `/robots.txt` | `https://vidhyasriambulance.com/robots.txt` | Search Crawler Instructions | 200 |
| `/sitemap.xml` | `https://vidhyasriambulance.com/sitemap.xml` | Full 43-URL XML Sitemap | 200 |
| `/llms.txt` | `https://vidhyasriambulance.com/llms.txt` | AI & Agent Discovery Manifest | 200 |
| `/manifest.webmanifest` | `https://vidhyasriambulance.com/manifest.webmanifest` | Progressive Web App Manifest | 200 |
| `/_not-found` | Dynamic (Client 404) | Branded Zero-Drop Emergency 404 | 404 |

---

## 7. Legacy 301 Permanent Redirect Matrix (`next.config.ts`)
To prevent broken traffic from legacy WordPress installations, marketing links, or alternate URL structures:

| Legacy / Alternate Source Pattern | Destination Canonical Route | Type |
| :--- | :--- | :--- |
| `/hyderabad` | `/coverage/hyderabad` | 301 Permanent |
| `/hyderabad/:slug` | `/coverage/:slug` | 301 Permanent |
| `/emergency-services`, `/emergency-services/:path*` | `/services/emergency-ambulance` | 301 Permanent |
| `/non-emergency-services`, `/non-emergency-services/:path*` | `/services/patient-transfer-ambulance` | 301 Permanent |
| `/icu-services`, `/icu-services/:path*` | `/services/icu-ambulance` | 301 Permanent |
| `/outstation-services`, `/outstation-services/:path*` | `/services/outstation-ambulance` | 301 Permanent |
| `/services/mortuary-transportation` | `/services/mortuary-ambulance` | 301 Permanent |
| `/services/mortuary-dead-body-transportation` | `/services/mortuary-ambulance` | 301 Permanent |
| `/deadbody-transport-services`, `/mortuary-ambulance` | `/services/mortuary-ambulance` | 301 Permanent |
| `/deadbody-freezer-services`, `/freezer-box`, `/vip-freezer-box` | `/services/dead-body-freezer-box` | 301 Permanent |
| `/about-us`, `/about-us/:path*` | `/about` | 301 Permanent |
| `/contact-us`, `/contact-us/:path*` | `/contact` | 301 Permanent |
| `/category/:path*`, `/tag/:path*` | `/services` | 301 Permanent |
| `/author/:path*` | `/about` | 301 Permanent |
| `/feed`, `/feed/:path*` | `/sitemap.xml` | 301 Permanent |
