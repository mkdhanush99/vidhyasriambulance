"use client";

import React, { useState, useEffect } from "react";
import { getStoredConsent, saveConsentChoice, applyConsentToGtag } from "@/lib/tracking";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    // 1. Check if user has already made a consent choice
    const stored = getStoredConsent();
    if (stored) {
      applyConsentToGtag(stored);
      setAnalyticsEnabled(stored.analytics);
      setMarketingEnabled(stored.marketing);
    } else {
      // 2. Delayed appearance (2.5s) so the initial hero paint & user orientation is never interrupted
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2500);

      // Or trigger on first scroll if earlier
      const onScrollOnce = () => {
        setVisible(true);
        window.removeEventListener("scroll", onScrollOnce);
      };
      window.addEventListener("scroll", onScrollOnce, { passive: true });

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", onScrollOnce);
      };
    }

    // 3. Listener for reopening preferences from footer
    const handleReopen = () => {
      const current = getStoredConsent();
      if (current) {
        setAnalyticsEnabled(current.analytics);
        setMarketingEnabled(current.marketing);
      }
      setPreferencesOpen(true);
      setVisible(true);
    };

    window.addEventListener("open_cookie_preferences", handleReopen);
    return () => {
      window.removeEventListener("open_cookie_preferences", handleReopen);
    };
  }, []);

  const handleAcceptAll = () => {
    saveConsentChoice({ analytics: true, marketing: true });
    setVisible(false);
    setPreferencesOpen(false);
  };

  const handleRejectNonEssential = () => {
    saveConsentChoice({ analytics: false, marketing: false });
    setVisible(false);
    setPreferencesOpen(false);
  };

  const handleSaveCustom = () => {
    saveConsentChoice({ analytics: analyticsEnabled, marketing: marketingEnabled });
    setVisible(false);
    setPreferencesOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Cookie Banner Floating Card (Zero CLS, Fixed Overlay) ── */}
      <div
        role="region"
        aria-label="Privacy and Cookie Settings"
        className="fixed bottom-20 md:bottom-6 left-3 right-3 md:left-auto md:right-6 z-[95] max-w-[480px] bg-white border-[3px] border-[#0A2A5E] shadow-[6px_6px_0_#0A2A5E] rounded-[4px] p-4 sm:p-5 anim-fade-in"
      >
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-[2px] bg-[#EAF2FC] border border-[#1565D8] flex items-center justify-center shrink-0 text-[#1565D8]">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              verified_user
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-black uppercase tracking-[.14em] text-[#0A2A5E]">
              Privacy &amp; Cookie Consent
            </div>
            <p className="text-[12.5px] sm:text-[13px] font-medium text-[#536B86] leading-relaxed mt-1">
              We use necessary cookies for emergency routing and security. You can choose whether to enable anonymous analytics and advertising measurement.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t border-[#DDE7F2]">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-3 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-[11.5px] font-black uppercase tracking-[.08em] border-2 border-[#0A2A5E] shadow-[2px_2px_0_#0A2A5E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer rounded-[2px]"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="flex-1 py-2.5 px-3 bg-white hover:bg-[#EAF2FC] text-[#0A2A5E] text-[11.5px] font-black uppercase tracking-[.08em] border-2 border-[#0A2A5E] shadow-[2px_2px_0_#0A2A5E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer rounded-[2px]"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => setPreferencesOpen(true)}
            className="py-2 px-3 text-[#1565D8] hover:text-[#0A2A5E] text-[11px] font-extrabold uppercase tracking-wider underline underline-offset-2 cursor-pointer transition-colors text-center"
          >
            Preferences
          </button>
        </div>
      </div>

      {/* ── Granular Preferences Modal ── */}
      {preferencesOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#0A2A5E]/70 backdrop-blur-xs anim-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-pref-title"
        >
          <div
            className="fixed inset-0"
            onClick={() => setPreferencesOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg bg-white border-[3px] border-[#0A2A5E] shadow-[8px_8px_0_#0A2A5E] rounded-[4px] p-5 sm:p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b-2 border-[#DDE7F2] pb-3 mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8]">
                  Vidhya Sri Ambulance
                </span>
                <h2
                  id="cookie-pref-title"
                  className="text-lg font-black uppercase text-[#0A2A5E] tracking-tight mt-0.5"
                >
                  Manage Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPreferencesOpen(false)}
                className="w-8 h-8 flex items-center justify-center border-2 border-[#0A2A5E] bg-[#F8FAFD] hover:bg-[#EAF2FC] text-[#0A2A5E] rounded-[2px] cursor-pointer"
                aria-label="Close preferences modal"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-[#536B86] leading-relaxed mb-4">
              We prioritize patient privacy and emergency dispatch transparency. Customize your data preferences below. Sensitive medical and patient transit details are never processed for advertising.
            </p>

            <div className="space-y-3">
              {/* Essential Cookies */}
              <div className="p-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[3px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#0A2A5E]">
                    Strictly Necessary
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-[#EAF2FC] text-[#1565D8] border border-[#1565D8] rounded-[2px]">
                    Always Active
                  </span>
                </div>
                <p className="text-[11.5px] text-[#536B86] mt-1 leading-normal">
                  Required for emergency dispatch form routing, spam protection (honeypot), secure session management, and site navigation.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[3px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#0A2A5E]">
                    Performance &amp; Analytics
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-[#DDE7F2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1565D8]"></div>
                  </label>
                </div>
                <p className="text-[11.5px] text-[#536B86] mt-1 leading-normal">
                  Helps us understand which emergency service pages are most accessed across Hyderabad so we can optimize dispatch readiness.
                </p>
              </div>

              {/* Marketing / Google Ads Cookies */}
              <div className="p-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[3px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#0A2A5E]">
                    Advertising &amp; Conversion Measurement
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-[#DDE7F2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1565D8]"></div>
                  </label>
                </div>
                <p className="text-[11.5px] text-[#536B86] mt-1 leading-normal">
                  Allows measurement of Google Ads campaign clicks and conversion actions (e.g. click-to-call) to ensure relevant emergency ads are shown.
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-5 pt-3 border-t border-[#DDE7F2] flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[2px] hover:bg-[#EAF2FC] cursor-pointer"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-xs font-black uppercase tracking-wider rounded-[2px] shadow-[2px_2px_0_#0A2A5E] hover:bg-[#0B3F9E] cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
