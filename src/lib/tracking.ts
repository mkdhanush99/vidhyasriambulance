export type ConsentChoice = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const CONSENT_STORAGE_KEY = "vidhya_sri_consent_settings";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveConsentChoice(choice: { analytics: boolean; marketing: boolean }): ConsentChoice {
  const fullChoice: ConsentChoice = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(fullChoice));
    } catch (e) {
      console.warn("Could not save consent preference to storage:", e);
    }
    applyConsentToGtag(fullChoice);
    window.dispatchEvent(new Event("vidhya_consent_updated"));
  }

  return fullChoice;
}

export function applyConsentToGtag(choice: ConsentChoice) {
  if (typeof window === "undefined") return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      ad_storage: choice.marketing ? "granted" : "denied",
      analytics_storage: choice.analytics ? "granted" : "denied",
      ad_user_data: choice.marketing ? "granted" : "denied",
      ad_personalization: choice.marketing ? "granted" : "denied",
    });
  }
}

/**
 * ── PRIVACY-COMPLIANT CONVERSION TRACKING ──
 * NEVER transmits sensitive patient names, medical conditions,
 * symptom details, or private health data into advertising platforms.
 */
export function trackConversion(
  eventName: "ambulance_call_click" | "whatsapp_click" | "enquiry_submit" | "callback_submit",
  metadata?: {
    serviceCategory?: string;
    locationContext?: string;
    pagePath?: string;
  }
) {
  if (typeof window === "undefined") return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, {
      event_category: "Emergency & Patient Transport",
      event_label: metadata?.serviceCategory || "General Medical Transport",
      location_context: metadata?.locationContext || "Greater Hyderabad",
      page_location: metadata?.pagePath || window.location.pathname,
    });
  }
}
