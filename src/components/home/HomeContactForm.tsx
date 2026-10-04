"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { trackConversion } from "@/lib/tracking";

export function HomeContactForm() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRoute, setFormRoute] = useState("");
  const [formHoneypot, setFormHoneypot] = useState("");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formHoneypot.trim().length > 0) {
      setFormState("success");
      return;
    }

    const cleanPhone = formPhone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number for immediate dispatch coordination.");
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "customer",
          name: formName.trim() || "Website Visitor",
          phone: cleanPhone,
          email: formEmail.trim(),
          route: formRoute.trim() || "Somajiguda / Hyderabad Area",
          service: "Emergency Callback Request",
          timing: "Immediate / Urgent Callback",
          notes: "Submitted via homepage quick callback module.",
          honeypot: formHoneypot,
        }),
      });

      if (res.ok) {
        setFormState("success");
        trackConversion("callback_submit", {
          serviceCategory: "Homepage Callback Request",
          locationContext: formRoute.trim() || "Hyderabad",
        });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div>
      {formState === "success" && (
        <div className="py-8 text-center bg-[#EAF2FC] border-2 border-[#1565D8] p-6 rounded-[4px] space-y-3">
          <span
            className="material-symbols-outlined text-4xl text-[#1565D8] inline-block"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            check_circle
          </span>
          <p className="text-sm font-extrabold uppercase text-[#0A2A5E]">
            Enquiry Received by Dispatch Control
          </p>
          <p className="text-xs text-[#536B86] max-w-sm mx-auto leading-relaxed">
            Our 24×7 Somajiguda team has logged your transfer details. A coordinator will call you directly at <strong>+91 {formPhone.replace(/\D/g, "")}</strong>.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.phone.href}
              onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Post-Enquiry Direct Call" })}
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase rounded-[3px] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Need Urgent Help? Call {siteConfig.phone.display}
            </a>
          </div>
        </div>
      )}

      {formState === "error" && (
        <div className="py-6 text-center bg-[#FDEDEC] border-2 border-[#D32F2F] p-5 rounded-[4px] space-y-3">
          <span
            className="material-symbols-outlined text-4xl text-[#D32F2F] inline-block"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            error
          </span>
          <p className="text-sm font-extrabold uppercase text-[#D32F2F]">
            Something went wrong while sending your enquiry. Please try again or call us directly.
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <a
              href={siteConfig.phone.href}
              onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Error Fallback Call" })}
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-black uppercase rounded-[3px] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <button
              type="button"
              onClick={() => setFormState("idle")}
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] hover:bg-[#EAF2FC] text-xs font-black uppercase rounded-[3px] transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {(formState === "idle" || formState === "loading") && (
        <form onSubmit={handleFormSubmit} className="space-y-3.5">
          {/* Honeypot for Bot Prevention */}
          <input
            type="text"
            name="address_secondary"
            value={formHoneypot}
            onChange={(e) => setFormHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="home-name"
              className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
            >
              Name
            </label>
            <input
              id="home-name"
              type="text"
              placeholder="Patient / caller"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="home-phone"
              className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
            >
              Phone <span className="text-[#1565D8]">*</span>
            </label>
            <input
              id="home-phone"
              type="tel"
              required
              placeholder="+91 Mobile number"
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="home-email"
              className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
            >
              Email <span className="text-[10px] font-normal text-[#536B86]">(Optional for confirmation)</span>
            </label>
            <input
              id="home-email"
              type="email"
              placeholder="yourname@gmail.com"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="home-route"
              className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
            >
              Pickup &amp; Destination
            </label>
            <input
              id="home-route"
              type="text"
              placeholder="e.g. Somajiguda → Yashoda Hospital"
              value={formRoute}
              onChange={(e) => setFormRoute(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[13px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer mt-2 disabled:opacity-60"
          >
            {formState === "loading" ? "Sending Request..." : "Request Callback"}
            <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
          </button>
        </form>
      )}
    </div>
  );
}
