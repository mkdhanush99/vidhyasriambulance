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
              Enter your number. Our Somajiguda control room calls back in 2 minutes.
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
        Mobile Action Rail (4 actions)
        Edge-to-edge full width, 2px navy top border, light white + blue system.
        Hidden on tablet & desktop (md:hidden).
      */}
      <aside
        aria-label="Mobile Emergency Quick Actions"
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden w-full border-t-2 border-[#0A2A5E] bg-white shadow-[0_-4px_16px_rgba(10,42,94,0.08)] select-none"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {/* 1. CALL (Care Blue #1565D8 with White Text — Emergency Primary) */}
        <a
          href={siteConfig.phone.href}
          aria-label={`Call emergency line 24x7 at ${siteConfig.phone.display}`}
          className="flex-1 min-h-[58px] flex flex-col items-center justify-center py-2 px-1 bg-[#1565D8] text-white border-r border-[#0A2A5E]/20 active:bg-[#0B3F9E] transition-colors"
        >
          <span
            className="material-symbols-outlined text-[22px] leading-none mb-0.5"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            call
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-none">
            Call
          </span>
        </a>

        {/* 2. WHATSAPP (WhatsApp Green #25D366 with White Text) */}
        <a
          href={siteConfig.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open WhatsApp emergency chat at ${siteConfig.whatsapp.display}`}
          className="flex-1 min-h-[58px] flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] text-white border-r border-[#0A2A5E]/20 active:bg-[#1EBE5D] transition-colors"
        >
          <span
            className="material-symbols-outlined text-[22px] leading-none mb-0.5"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            chat
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-none">
            WhatsApp
          </span>
        </a>

        {/* 3. LOCATION (White Ground with Navy Text & Care Blue Icon) */}
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Somajiguda control room on Google Maps"
          className="flex-1 min-h-[58px] flex flex-col items-center justify-center py-2 px-1 bg-white text-[#0A2A5E] border-r border-[#DDE7F2] active:bg-[#F3F7FC] transition-colors"
        >
          <span
            className="material-symbols-outlined text-[22px] leading-none mb-0.5 text-[#1565D8]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            location_on
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-none">
            Location
          </span>
        </a>

        {/* 4. CALLBACK (Clinic Mist #EAF2FC with Navy Text & Care Blue Icon) */}
        <button
          type="button"
          onClick={() => setCallbackOpen(true)}
          aria-label="Request an instant callback"
          className="flex-1 min-h-[58px] flex flex-col items-center justify-center py-2 px-1 bg-[#EAF2FC] text-[#0A2A5E] active:bg-[#DDE7F2] transition-colors cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-[22px] leading-none mb-0.5 text-[#1565D8]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            phone_callback
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-none">
            Callback
          </span>
        </button>
      </aside>

      {/* Bottom spacer on mobile so content isn't obscured by fixed bar */}
      <div
        className="md:hidden w-full pointer-events-none"
        style={{ height: "calc(58px + env(safe-area-inset-bottom, 0px))" }}
        aria-hidden="true"
      />
    </>
  );
}
