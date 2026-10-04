# Cookie & Consent Mode Architecture — Vidhya Sri Ambulance

## 1. Regulatory Context & Architecture Overview
Vidhya Sri Ambulance provides 24/7 emergency medical logistics, ICU transport, and outstation ambulance services. In compliance with:
- **Google Consent Mode v2** (Mandatory for Google Ads and GA4 EEA/Global signal verification)
- **Digital Personal Data Protection Act (DPDP Act, India)**
- **GDPR / ePrivacy Directives** (for cross-border/international medical repatriation inquiries)

The platform implements a **zero-CLS, asynchronous, privacy-first consent management system** designed specifically for emergency healthcare services.

---

## 2. Google Consent Mode v2 Implementation

### Default State (Head Injection)
Prior to any analytics, Google Ads, or third-party marketing tags loading, Google Consent Mode v2 initializes all storage types to `'denied'`. This is embedded directly in `<head>` in `src/app/layout.tsx`:

```html
<script id="google-consent-mode-init">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
</script>
```

### Consent Signal Updates (`gtag('consent', 'update', ...)`)
When the user interacts with the Cookie Consent Banner or adjusts their preferences via the footer, `applyConsentToGtag()` in `src/lib/tracking.ts` dynamically emits the update command:

```typescript
export function applyConsentToGtag(consent: CookieConsentState) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', {
    ad_storage: consent.advertising ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_user_data: consent.advertising ? 'granted' : 'denied',
    ad_personalization: consent.advertising ? 'granted' : 'denied',
    personalization_storage: consent.functional ? 'granted' : 'denied',
  });
}
```

---

## 3. UI/UX & Zero Layout Shift (CLS) Design

- **Non-Intrusive Fixed Dock**: The banner mounts at `fixed bottom-4 right-4 z-50` with max-width `460px`. It NEVER pushes, shifts, or reflows page content.
- **Controlled Interaction Delay**: To ensure emergency dispatch text and phone numbers paint and become interactive immediately, the banner display is deferred by **2500ms** or until explicit interaction.
- **Balanced Buttons**:
  - `[Accept all]` (Vidhya Blue `#1338be` primary pill)
  - `[Reject non-essential]` (Slate clean outline button)
  - `[Preferences]` (Interactive chevron to toggle granular controls)
- **Persistent Access**: A `<CookiePreferencesButton />` is permanently available in the site footer, allowing users to modify or revoke their choices at any time.

---

## 4. Storage & Cookie Inventory

| Identifier | Domain / Type | Purpose | Category | Expiry | Default State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `vidhya_sri_cookie_consent_v1` | `localStorage` | Persists user consent preferences | Essential | 1 Year | Created on interaction |
| `_ga`, `_ga_*` | `.vidhyasriambulance.com` | Google Analytics session aggregation | Analytics | 2 Years / 24h | **Blocked until consented** |
| `_gcl_au`, `_gac_*` | `.vidhyasriambulance.com` | Google Ads conversion linking | Advertising | 90 Days | **Blocked until consented** |
| Session Caches | In-memory | Routing & UI state | Functional | Session | Active |

---

## 5. Healthcare Privacy Safeguards

In emergency and medical ambulance transport, patient privacy is paramount:
1. **No Sensitive Medical Data in Tracking**: When booking an ICU or ventilator ambulance, diagnostic details (e.g., "cardiac arrest", "stroke") are strictly processed through secure backend dispatch APIs and **NEVER** passed into `gtag`, Google Analytics, or Google Ads tags.
2. **Generic Ad Conversion Events**:
   - `ambulance_call_click`: Triggered when calling dispatch (`tel:+919985223344`).
   - `whatsapp_click`: Triggered when opening WhatsApp emergency triage.
   - `enquiry_submit`: Triggered upon general inquiry submission.
   - `callback_submit`: Triggered upon emergency callback request.
