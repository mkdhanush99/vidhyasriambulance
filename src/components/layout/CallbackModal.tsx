"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { trackConversion } from "@/lib/tracking";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "customer",
          name: name.trim() || "Emergency Callback Request",
          phone: cleanPhone,
          service: "Immediate Callback Request",
          route: note.trim() || "Somajiguda / Hyderabad Area",
          timing: "Immediate / Urgent",
          notes: note.trim() ? `Note: ${note.trim()}` : "Urgent callback requested via mobile dock.",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        trackConversion("callback_submit", {
          serviceCategory: "Mobile Quick Callback",
          locationContext: note.trim() || "Hyderabad",
        });
      } else {
        alert("Something went wrong. Please call directly at " + siteConfig.phone.display);
      }
    } catch {
      alert("Network error. Please call our 24x7 helpline directly at " + siteConfig.phone.display);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-4 bg-[#0A2A5E]/70 backdrop-blur-xs anim-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cb-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-white border-[3px] border-[#0A2A5E] shadow-[6px_6px_0_#0A2A5E] rounded-[4px] p-5 z-10 anim-slide-up">
        <div className="flex items-center justify-between border-b-2 border-[#DDE7F2] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[20px] text-[#1565D8]"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
            >
              phone_callback
            </span>
            <h3 id="cb-title" className="text-sm font-black uppercase text-[#0A2A5E] tracking-wider">
              24×7 Instant Dispatch Callback
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center border-2 border-[#0A2A5E] bg-[#F8FAFD] hover:bg-[#EAF2FC] text-[#0A2A5E] text-xs font-bold rounded-[2px] cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EAF2FC] border-2 border-[#1565D8] flex items-center justify-center text-[#1565D8]">
              <span className="material-symbols-outlined text-2xl">check</span>
            </div>
            <p className="text-sm font-extrabold text-[#0A2A5E] uppercase tracking-wide">
              Callback Request Sent
            </p>
            <p className="text-xs text-[#536B86] leading-relaxed">
              Our 24×7 Somajiguda dispatch desk will call you at <strong>+91 {phone.replace(/\D/g, "")}</strong> within 2 minutes.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-5 py-2.5 bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[2px] shadow-[2px_2px_0_#0A2A5E] cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="cb-phone" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0A2A5E] mb-1">
                Your Mobile Number <span className="text-[#1565D8]">*</span>
              </label>
              <input
                id="cb-phone"
                type="tel"
                required
                autoFocus
                placeholder="+91 Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8]"
              />
            </div>

            <div>
              <label htmlFor="cb-name" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0A2A5E] mb-1">
                Caller / Patient Name <span className="text-[#536B86] font-normal">(Optional)</span>
              </label>
              <input
                id="cb-name"
                type="text"
                placeholder="Your name"
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
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-[18px]">phone_callback</span>
                {loading ? "Sending..." : "Request Callback Now"}
              </button>
              <a
                href={siteConfig.phone.href}
                onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Mobile Dock Direct Call" })}
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
