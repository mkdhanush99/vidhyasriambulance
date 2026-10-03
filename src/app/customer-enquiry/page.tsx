"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const ambulanceServices = [
  "Advanced Cardiac ICU Ambulance",
  "Ventilator Equipped Ambulance",
  "Emergency Life Support (BLS)",
  "Oxygen Support Ambulance",
  "Dialysis & Chemotherapy Scheduled Transfer",
  "Mortuary Ambulance with Freezer Box",
  "Inter-Hospital Critical Care Transfer",
  "Outstation / Inter-City Long Distance Ambulance",
  "General Patient Transfer / Other",
];

const timingOptions = [
  "Immediate Emergency (Within 10-15 mins)",
  "Within 1 Hour",
  "Today Scheduled Time",
  "Advance Booking (Tomorrow or Later)",
];

export default function CustomerEnquiryPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(ambulanceServices[0]);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [timing, setTiming] = useState(timingOptions[0]);
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "customer",
          name: name.trim(),
          phone: cleanPhone,
          email: email.trim(),
          service,
          route: `${pickup.trim() || "Somajiguda Area"} → ${destination.trim() || "Hospital / Destination"}`,
          timing,
          notes: notes.trim(),
          honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmittedEmail(email.trim());
      setFormState("success");
    } catch (err: unknown) {
      console.error("Customer enquiry submit error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your enquiry. Please try again or call us directly."
      );
      setFormState("error");
    }
  }

  function handleReset() {
    setName("");
    setPhone("");
    setEmail("");
    setPickup("");
    setDestination("");
    setNotes("");
    setFormState("idle");
    setErrorMessage("");
  }

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="w-full bg-[#F8FAFD] py-12 sm:py-16 border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-5"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-[#0A2A5E] transition-colors">
              Contact
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">Customer Enquiry</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/40 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
            <span className="w-2 h-2 rounded-full bg-[#1565D8] animate-pulse" />
            Patient &amp; Family Medical Transfer Form
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-3">
            Customer Ambulance Enquiry
          </h1>
          <p className="text-sm sm:text-base font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Submit your journey details below. Our Somajiguda dispatch coordinators review ambulance availability immediately. If you enter an email, an instant confirmation receipt will be sent to you.
          </p>

          {/* Quick Hotline Banner */}
          <div className="mt-6 p-4 bg-[#FDEDEC] border-l-4 border-[#D32F2F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-[3px]">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-[#D32F2F]">
                🚨 Life-Threatening Emergency?
              </p>
              <p className="text-xs text-[#536B86] mt-0.5">
                Do not wait for online form processing. Connect with our dispatch team right now:
              </p>
            </div>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-extrabold uppercase tracking-wider rounded-[3px] shadow-sm shrink-0 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Direct Call · {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FFFFFF] border-2 border-[#0A2A5E] shadow-[8px_8px_0_#DDE7F2] p-6 sm:p-10">
            {formState === "success" ? (
              <div className="py-8 text-center bg-[#EAF2FC] border-2 border-[#1565D8] p-6 sm:p-8 space-y-4 rounded-[4px]">
                <span
                  className="material-symbols-outlined text-5xl text-[#1565D8] inline-block"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  check_circle
                </span>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A2A5E]">
                  Enquiry Dispatched Successfully!
                </h2>
                <p className="text-sm text-[#536B86] font-medium leading-relaxed max-w-lg mx-auto">
                  Our Somajiguda control room has received your journey details. A dispatch officer will call you directly on{" "}
                  <strong className="text-[#0A2A5E]">+91 {phone}</strong> to confirm the vehicle assignment and ETA.
                </p>

                {submittedEmail && (
                  <div className="p-3 bg-white border border-[#1565D8]/30 max-w-md mx-auto text-xs text-[#0A2A5E] font-medium rounded-[2px]">
                    ✉️ A formatted confirmation email with emergency contacts has been sent to{" "}
                    <strong>{submittedEmail}</strong>.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href={siteConfig.phone.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    Call Helpline · {siteConfig.phone.display}
                  </a>
                  <a
                    href={siteConfig.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp Dispatch
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-extrabold text-[#536B86] hover:text-[#0A2A5E] uppercase tracking-wider underline pt-4 block mx-auto cursor-pointer"
                >
                  Submit another customer enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="address_secondary"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="border-b-2 border-[#DDE7F2] pb-4">
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#0A2A5E]">
                    Patient &amp; Journey Details
                  </h2>
                  <p className="text-xs text-[#536B86] mt-1 font-medium">
                    Please provide accurate contact and location information for fast coordination.
                  </p>
                </div>

                {formState === "error" && (
                  <div className="p-4 bg-[#FDEDEC] border-2 border-[#D32F2F] text-xs font-bold text-[#D32F2F] rounded-[3px]">
                    ⚠️ {errorMessage || "Failed to submit enquiry. Please call us directly."}
                  </div>
                )}

                {/* 1. Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cust-name"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Patient / Caller Name <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="cust-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cust-phone"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      10-Digit Mobile Number <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="cust-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9848012345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>
                </div>

                {/* 2. Email Address (Optional but highlighted) */}
                <div>
                  <label
                    htmlFor="cust-email"
                    className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                  >
                    Email Address{" "}
                    <span className="text-[10px] font-normal text-[#536B86]">
                      (Optional — Enter to receive an instant confirmation receipt)
                    </span>
                  </label>
                  <input
                    id="cust-email"
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                  />
                </div>

                {/* 3. Service Category & Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cust-service"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Ambulance Service Type <span className="text-[#1565D8]">*</span>
                    </label>
                    <select
                      id="cust-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    >
                      {ambulanceServices.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cust-timing"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Timing Requirement <span className="text-[#1565D8]">*</span>
                    </label>
                    <select
                      id="cust-timing"
                      value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    >
                      {timingOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cust-pickup"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Pickup Location / Hospital <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="cust-pickup"
                      type="text"
                      required
                      placeholder="e.g. Somajiguda / Residence / NIMS"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cust-dest"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Destination Hospital / City <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="cust-dest"
                      type="text"
                      required
                      placeholder="e.g. Apollo Hospitals, Jubilee Hills"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>
                </div>

                {/* 5. Patient Notes */}
                <div>
                  <label
                    htmlFor="cust-notes"
                    className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                  >
                    Patient Medical Requirements &amp; Notes{" "}
                    <span className="text-[10px] font-normal text-[#536B86]">(Optional)</span>
                  </label>
                  <textarea
                    id="cust-notes"
                    rows={3}
                    placeholder="e.g. Patient requires high-flow oxygen, stretcher support, and 2 attendants will travel along."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-medium text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-4 bg-[#1565D8] hover:bg-[#0B3F9E] text-white border-[3px] border-[#0A2A5E] text-sm font-black uppercase tracking-wider rounded-[4px] shadow-[4px_4px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? "Submitting Enquiry..." : "Submit Customer Enquiry"}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                <p className="text-center text-xs text-[#536B86] font-medium">
                  Need a corporate or institutional tie-up instead?{" "}
                  <Link href="/business-enquiry" className="text-[#1565D8] font-bold underline hover:text-[#0A2A5E]">
                    Switch to Business Enquiry →
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
