"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { trackConversion } from "@/lib/tracking";

// Lazy load the callback modal form only when the user taps "Callback"
const CallbackModal = dynamic(
  () => import("./CallbackModal").then((m) => m.CallbackModal),
  { ssr: false }
);

export function MobileCTA() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      {callbackOpen && (
        <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
      )}

      {/* 
        Floating Pill Mobile CTA Dock (Call · WhatsApp · Location · Callback)
        Vidhya Sri brand identity:
        - Floating rounded-full pill container with blur and subtle border/shadow
        - 4 evenly spaced quick actions
        - Safe area padding & smooth press feedback
      */}
      <aside
        aria-label="Mobile Emergency Quick Actions"
        className="fixed bottom-3 left-3 right-3 z-50 max-w-[420px] mx-auto md:hidden bg-white/95 backdrop-blur-md rounded-full border-2 border-[#0A2A5E] shadow-[0_10px_25px_rgba(10,42,94,0.18),2px_2px_0_#0A2A5E] px-2 py-1.5 flex items-center justify-around select-none"
        style={{
          marginBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {/* 1. CALL (Red phone receiver icon + Call label) */}
        <a
          href={siteConfig.phone.href}
          onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Mobile Dock Call" })}
          aria-label={`Call emergency line 24x7 at ${siteConfig.phone.display}`}
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-full text-[#0A2A5E] active:scale-95 active:bg-[#F3F7FC] transition-transform"
        >
          <div className="w-8 h-8 flex items-center justify-center text-[#D32F2F]">
            <span
              className="material-symbols-outlined text-[24px] leading-none"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              call
            </span>
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0A2A5E] tracking-tight leading-tight -mt-0.5">
            Call
          </span>
        </a>

        {/* 2. WHATSAPP (Green WhatsApp icon + WhatsApp label) */}
        <a
          href={siteConfig.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp_click", { serviceCategory: "Mobile Dock WhatsApp" })}
          aria-label={`Open WhatsApp emergency chat at ${siteConfig.whatsapp.display}`}
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-full text-[#0A2A5E] active:scale-95 active:bg-[#F3F7FC] transition-transform"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-[23px] h-[23px] fill-[#25D366]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32" />
            </svg>
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0A2A5E] tracking-tight leading-tight -mt-0.5">
            WhatsApp
          </span>
        </a>

        {/* 3. LOCATION (Blue navigation dart icon + Location label) */}
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Somajiguda control room on Google Maps"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-full text-[#0A2A5E] active:scale-95 active:bg-[#F3F7FC] transition-transform"
        >
          <div className="w-8 h-8 flex items-center justify-center text-[#1565D8]">
            <span
              className="material-symbols-outlined text-[24px] leading-none"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              near_me
            </span>
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0A2A5E] tracking-tight leading-tight -mt-0.5">
            Location
          </span>
        </a>

        {/* 4. CALLBACK (Deep Navy callback phone icon + Callback label) */}
        <button
          type="button"
          onClick={() => setCallbackOpen(true)}
          aria-label="Request an instant callback"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-full text-[#0A2A5E] active:scale-95 active:bg-[#F3F7FC] transition-transform cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center text-[#0A2A5E]">
            <span
              className="material-symbols-outlined text-[24px] leading-none"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              phone_callback
            </span>
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0A2A5E] tracking-tight leading-tight -mt-0.5">
            Callback
          </span>
        </button>
      </aside>

      {/* Bottom spacer on mobile so content isn	 obscured by fixed floating pill */}
      <div
        className="md:hidden w-full pointer-events-none"
        style={{ height: "calc(78px + env(safe-area-inset-bottom, 0px))" }}
        aria-hidden="true"
      />
    </>
  );
}
