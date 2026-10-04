# Google Ads Landing Page Optimization & Intent Routing Guide

## 1. Executive Summary & Google Ads Quality Score Factors
Google Ads Quality Score and Ad Rank depend directly on:
1. **Landing Page Experience**: Loading speed, visual stability, mobile responsiveness, and zero friction to conversion.
2. **Ad-to-Landing-Page Relevance**: Direct correspondence between ad copy keywords and hero headlines/content.
3. **Transparent & Trustworthy Action Paths**: Immediate, unobstructed Emergency Dialing (`tel:+919985223344`) and WhatsApp dispatch.

Reference: [Google Ads Landing Page Experience Guidelines](https://support.google.com/google-ads/answer/7543502)

---

## 2. Intent-to-Landing Page Mapping Matrix

Sending all campaign ad clicks to a generic homepage dilutes Quality Score and increases emergency bounce rates. Vidhya Sri Ambulance uses targeted dedicated SSG landing pages for each keyword cluster:

| Google Ads Campaign & Keyword Cluster | Target Landing Page Route | Hero Headline (First Viewport) | Primary Immediate CTA | Conversion Trigger |
| :--- | :--- | :--- | :--- | :--- |
| **Emergency Ambulance** ("ambulance near me", "emergency ambulance Hyderabad") | `/services/emergency-ambulance` | "24/7 Emergency Ambulance Service in Hyderabad" | `Call +91 99852 23344` | `ambulance_call_click` |
| **ICU Ambulance / Cardiac Support** ("ICU ambulance service", "ventilator ambulance near me") | `/services/icu-ambulance` | "Advanced Life Support & Critical Care ICU Ambulance" | `Call Dispatch Team` | `ambulance_call_click` |
| **Ventilator Ambulance** ("ambulance with ventilator support", "mobile ICU") | `/services/ventilator-ambulance` | "Ventilator Equipped Ambulance Service with Critical Care Team" | `Instant Medical Transport` | `ambulance_call_click` |
| **Outstation Medical Transport** ("outstation ambulance Hyderabad to Vijayawada/Bangalore", "intercity patient transport") | `/services/outstation-ambulance` | "Intercity & Outstation Ambulance Service Across India" | `Book Outstation Transfer` | `callback_submit` / `whatsapp_click` |
| **Dead Body / Mortuary Transport** ("hearse van Hyderabad", "mortuary ambulance freezer box") | `/services/dead-body-transport` | "Compassionate Mortuary Ambulance & Freezer Box Services" | `Call 24/7 Support` | `ambulance_call_click` |
| **Local Hyper-Targeted Ads** (e.g. "Ambulance in Banjara Hills", "Ambulance in Somajiguda") | `/coverage/[slug]` (e.g., `/coverage/banjara-hills`) | "Emergency Ambulance Services in Banjara Hills (8-12 Min Arrival)" | `Call Now` | `ambulance_call_click` |

---

## 3. Landing Page First Viewport Best Practices
1. **Above-the-Fold Speed**:
   - Hero headline, response time badge ("10-15 Min Response"), and emergency call button render in $< 1.5\text{s}$ on 4G mobile devices.
   - No popups, no blocking modals, and no full-screen overlays before the user can call.
2. **Sticky Mobile CTAs**:
   - On mobile viewports, the persistent bottom action bar provides direct 1-tap calling and 1-tap WhatsApp consultation.
3. **Medical Trust Elements**:
   - Government registered, certified EMTs, sanitized vehicles, and transparent pricing displayed without requiring extensive scrolling.

---

## 4. Google Ads Conversion Tracking (Safe & Compliant)
In strict compliance with healthcare privacy standards, **no personal health details or patient symptoms are transmitted to Google Ads or GA4**.

### Tracked Micro and Macro Conversions:
- **`ambulance_call_click`**:
  - Direct telephone link clicks (`tel:+919985223344`).
  - Google Ads Macro Conversion (Highest value).
- **`whatsapp_click`**:
  - WhatsApp chat initiation for location sharing and dispatch updates.
- **`callback_submit`**:
  - Callback requested via modal or quick enquiry form.
- **`enquiry_submit`**:
  - Comprehensive service transfer inquiry form submission.

All events are passed through `trackConversion(eventName, params)` in `src/lib/tracking.ts`, verifying that Google Consent Mode `ad_storage` has been granted before firing Google Ads conversion tags.
