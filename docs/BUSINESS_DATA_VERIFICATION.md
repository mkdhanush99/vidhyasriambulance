# Vidhya Sri Ambulance Services — Business Data Verification

**Date:** October 2, 2026  
**Document Status:** Final Audit & Verification  
**Standard:** Truth in Healthcare Communications & Restrained Claims  

---

## 1. Verified Business Information (In Production)

The following parameters have been verified and integrated across the website codebase (`src/data/site.ts`, pages, metadata, and JSON-LD structured schemas):

| Field | Verified Value | Implementation Source |
| :--- | :--- | :--- |
| **Business Name** | **Vidhya Sri Ambulance Services** | Site Title, Header, Footer, Schema, Legal terms |
| **Brand Name** | **Vidhya Sri Ambulance** | Logo mark, metadata template |
| **Primary Phone** | **`+91 99516 48174`** | `tel:+919951648174` in header, hero, footer, mobile sticky bar |
| **Primary Address** | **H.No: 6-3-662/5 & 6/4, Arun Residency, Jafar Ali Bagh, Circle 17, Somajiguda, Hyderabad, Telangana 500082, India** | Contact page, footer, schema address, local SEO |
| **Website URL** | **`https://vidhyasriambulance.com`** | Canonicals, sitemap.xml, OpenGraph, JSON-LD `@id` |
| **Service Areas** | **Greater Hyderabad & Outstation** (Somajiguda, Banjara Hills, Jubilee Hills, Punjagutta, Begumpet, Secunderabad, Madhapur, Hitech City, Gachibowli, Kondapur, Kukatpally, Mehdipatnam, LB Nagar, plus Telangana & Andhra Pradesh inter-district routes) | Dedicated SSG coverage hubs, dynamic local pages |
| **Brand Handle** | **`@vidhyasriambulance`** | Preserved in brand metadata |
| **Google Maps Listing** | **`https://maps.google.com/?q=Vidhya+Sri+Ambulance+Services,+Somajiguda,+Hyderabad,+Telangana+500082`** | Contact page map action link |

---

## 2. Items Requiring Client Confirmation

In accordance with strict healthcare communication guidelines, **no unverified claims, fabricated certifications, or assumed guarantees have been published**. The following operational items remain noted for client confirmation:

| Operational Parameter | Status in Site Code | Note / Client Action Required |
| :--- | :--- | :--- |
| **Official Email** | Stored as `vidhyasriambulanceservices@gmail.com` | Client to confirm if an institutional domain email (e.g. `dispatch@vidhyasriambulance.com`) is preferred. |
| **WhatsApp Activation** | Configured to `https://wa.me/919951648174` | Client to confirm if the business WhatsApp account is fully active on `9951648174`. |
| **Social Profile URLs** | Set to `null` (`facebook: null`, `instagram: null`, `youtube: null`) | No placeholder social links are displayed. Profile links will be added only once live channels are verified. |
| **Business Hours** | Set to `24 Hours / 7 Days` | Dispatch helpline is documented as 24×7 operational. |
| **Actual Equipment Models** | Generic clinical descriptions only | No specific ventilator/monitor brand names (e.g. Philips, Hamilton) are published without explicit confirmation. |
| **Certifications (NABH / ISO)** | Omitted entirely | Zero unverified ISO/NABH badges are used anywhere on the website. |
| **Exact Ambulance Fleet Count** | Omitted | No fabricated vehicle counts (e.g. "50+ ambulances") are published. |
| **Pricing / Rate Cards** | Omitted | Pricing is quoted individually by dispatch based on patient condition and distance. |
| **Hospital Partnerships** | Factual landmark references only | Hospital names (NIMS, Yashoda, Apollo, AIG) are referenced purely as geographic landmarks for driver navigation, never claimed as official exclusive tie-ups. |
| **Response Time Guarantees** | Omitted | No unverified claims of "guaranteed 10-minute arrival" or "fastest dispatch" are made. |

---

## 3. Compliance Summary

- **Single Source of Truth:** All contact values originate from `src/data/site.ts`.
- **Zero Placeholder Text:** No "Lorem Ipsum", fake phone numbers, or '#' social links exist in production.
- **Truthful Tone:** Copy is restrained, clear, and reassuring, positioning Vidhya Sri Ambulance Services as a reliable patient transportation provider in Hyderabad.
