"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

/**
 * MobileQuickActions (MobileCTA)
 * Edge-to-edge 4-action mobile rail: Call · WhatsApp · Location · Callback
 * Built specifically in Vidhya Sri's brutalist editorial design language:
 * - 3px solid navy (#0A2A5E) top border
 * - Distinct contextual accent color blocks with 2px dividers
 * - Heavy Manrope font, uppercase tracking, filled Material Symbols
 * - Full accessibility with aria-labels and touch targets >= 56px
 * - Accessible Callback bottom sheet dialog
 * - Auto safe-area-inset-bottom support
 */

function CallbackModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.trim();
    if (!cleanPhone) return;

    // Send background email notification via server-side /api/enquiry
    fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim() || "Mobile Callback Request",
        phone: cleanPhone,
        service: "Immediate Mobile Callback Request",
        notes: note.trim() || "User clicked 'Request Callback' from mobile bottom rail.",
        timing: "Immediate",
      }),
    }).catch((err) => console.error("Callback notification error:", err));

    const message = encodeURIComponent(
      `🚨 *Urgent Callback Request — Vidhya Sri Ambulance*\n` +
      `• *Name:* ${name.trim() || "Immediate Assistance Needed"}\n` +
      `• *Contact Number:* ${cleanPhone}\n` +
      (note.trim() ? `• *Requirement:* ${note.trim()}\n` : "") +
      `\n_Please call me back immediately for ambulance coordination._`
    );

    window.open(`${siteConfig.whatsapp.href}?text=${message}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet Modal with Emil Kowalski drawer physics */}
      <div
        className="relative w-full max-w-lg bg-white border-t-[3px] border-x-[3px] border-[#0A2A5E] shadow-[0_-8px_0_#0A2A5E] px-5 pt-5 pb-6 z-10 anim-drawer-up"
        style={{ paddingBottom: "max(24px, calc(env(safe-area-inset-bottom, 0px) + 16px))" }}
      >
        {/* Top grab bar */}
        <div className="w-12 h-1 bg-[#0A2A5E]/20 mx-auto rounded-full mb-4" />

        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b-2 border-[#DDE7F2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#EAF2FC] border border-[#1565D8]/30 text-[10px] font-extrabold uppercase tracking-widest text-[#1565D8] mb-1.5 rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1565D8]" />
              Quick Dispatch Support
            </div>
            <h2 id="callback-title" className="text-xl font-extrabold uppercase text-[#0A2A5E] tracking-tight leading-none">
              Request Immediate Callback
            </h2>
            <p className="text-xs text-[#536B86] mt-1 font-medium">
              Enter your number. Our Somajiguda control room coordinates promptly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close callback dialog"
            className="w-9 h-9 flex items-center justify-center border-2 border-[#0A2A5E] bg-white text-[#0A2A5E] shadow-[2px_2px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>
              close
            </span>
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center bg-[#EAF2FC] border-2 border-[#1565D8] p-4 shadow-[4px_4px_0_#0A2A5E]">
            <span
              className="material-symbols-outlined text-4xl text-[#1565D8] mb-2 inline-block"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              check_circle
            </span>
            <p className="text-base font-extrabold uppercase text-[#0A2A5E] tracking-tight">
              Callback Request Sent
            </p>
            <p className="text-xs text-[#536B86] mt-1 font-medium">
              Opening WhatsApp with your dispatch details. You can also call us directly at:
            </p>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 mt-4 w-full py-3 bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0_#0A2A5E]"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Direct Call: {siteConfig.phone.display}
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label htmlFor="cb-phone" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0A2A5E] mb-1">
                Phone Number <span className="text-[#1565D8]">*</span>
              </label>
              <input
                id="cb-phone"
                type="tel"
                required
                autoFocus
                placeholder="Enter 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8]"
              />
            </div>

            <div>
              <label htmlFor="cb-name" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0A2A5E] mb-1">
                Your Name <span className="text-[#536B86] font-normal">(Optional)</span>
              </label>
              <input
                id="cb-name"
                type="text"
                placeholder="Patient / Caller name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8]"
              />
            </div>

            <div>
              <label htmlFor="cb-note" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0A2A5E] mb-1">
                Requirement / Location <span className="text-[#536B86] font-normal">(Optional)</span>
              </label>
              <input
                id="cb-note"
                type="text"
                placeholder="e.g. ICU Ambulance needed in Somajiguda"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8]"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">phone_callback</span>
                Request Callback Now
              </button>
              <a
                href={siteConfig.phone.href}
                className="flex items-center justify-center px-4 py-3 bg-white text-[#0A2A5E] border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#0A2A5E]"
                aria-label="Call directly"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function MobileCTA() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />

      {/* 
        Floating Pill Mobile CTA Dock (Matches screenshot: Call · WhatsApp · Location · Callback)
        Floating capsule pill design adapted to Vidhya Sri brand identity:
        - Floating rounded-full pill container with blur and subtle border/shadow
        - 4 evenly spaced quick actions:
            1. Call: Red telephone receiver + "Call"
            2. WhatsApp: Official Green WhatsApp icon + "WhatsApp"
            3. Location: Blue navigation dart + "Location"
            4. Callback: Deep Navy phone callback + "Callback"
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

      {/* Bottom spacer on mobile so content isn't obscured by fixed floating pill */}
      <div
        className="md:hidden w-full pointer-events-none"
        style={{ height: "calc(78px + env(safe-area-inset-bottom, 0px))" }}
        aria-hidden="true"
      />
    </>
  );
}
