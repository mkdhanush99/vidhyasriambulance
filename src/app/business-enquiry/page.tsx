"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const partnershipCategories = [
  "Hospital Patient Transfer Tie-Up (Annual / Monthly Contract)",
  "Corporate & IT Park On-Site Standby Ambulance",
  "Event Medical Standby (Sports, Marathons, Expos, Shoots)",
  "Industrial Plant & Construction Emergency Coverage",
  "Diagnostic & Dialysis Center Scheduled Fleet",
  "Mortuary Freezer Box & Inter-State Repatriation Contract",
  "Other Institutional Partnership",
];

const fleetScopeOptions = [
  "Dedicated 24×7 Advanced Life Support (ALS) Unit",
  "Dedicated 24×7 Basic Life Support (BLS) Unit",
  "On-Call Priority SLA Fleet Guarantee (15-min response)",
  "Temporary Multi-Vehicle Event Standby (1-7 Days)",
  "Custom Fleet Contract / Tenders",
];

export default function BusinessEnquiryPage() {
  const [orgName, setOrgName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(partnershipCategories[0]);
  const [location, setLocation] = useState("");
  const [fleetScope, setFleetScope] = useState(fleetScopeOptions[0]);
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number for corporate dispatch.");
      setFormState("error");
      return;
    }

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Please enter a valid official work email address.");
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
          enquiryType: "business",
          organization: orgName.trim(),
          contactPerson: contactPerson.trim(),
          designation: designation.trim(),
          phone: cleanPhone,
          email: cleanEmail,
          category,
          location: location.trim(),
          estimatedVolume: fleetScope,
          notes: notes.trim(),
          honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmittedEmail(cleanEmail);
      setFormState("success");
    } catch (err: unknown) {
      console.error("Business enquiry submit error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your enquiry. Please try again or call our B2B desk directly."
      );
      setFormState("error");
    }
  }

  function handleReset() {
    setOrgName("");
    setContactPerson("");
    setDesignation("");
    setEmail("");
    setPhone("");
    setLocation("");
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
            <span className="text-[#0A2A5E]">Business Enquiry</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A2A5E] text-white text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
            <span className="w-2 h-2 rounded-full bg-[#38A3F7] animate-pulse" />
            Corporate, Hospital &amp; Institutional Tie-Ups
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-3">
            Business &amp; Hospital Ambulance Tie-Ups
          </h1>
          <p className="text-sm sm:text-base font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Partner with Vidhya Sri Ambulance Services for hospital inter-facility transfer SLAs, IT park on-site standby units, event medical standby, and industrial plant coverage across Hyderabad and Telangana.
          </p>

          {/* Institutional Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-[#DDE7F2]">
            <div className="p-3 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="text-base sm:text-lg font-black text-[#0A2A5E] block leading-none">15+ Years</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B86] mt-1 block">Institutional Reliability</span>
            </div>
            <div className="p-3 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="text-base sm:text-lg font-black text-[#0A2A5E] block leading-none">24×7 Somajiguda</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B86] mt-1 block">Dedicated Control Room</span>
            </div>
            <div className="p-3 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="text-base sm:text-lg font-black text-[#0A2A5E] block leading-none">ALS &amp; BLS</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B86] mt-1 block">ICU Ventilator Fleet</span>
            </div>
            <div className="p-3 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="text-base sm:text-lg font-black text-[#0A2A5E] block leading-none">SLA Guaranteed</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B86] mt-1 block">Rapid Response Times</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FFFFFF] border-2 border-[#0A2A5E] shadow-[8px_8px_0_#DDE7F2] p-6 sm:p-10">
            {formState === "success" ? (
              <div className="py-8 text-center bg-[#EAF2FC] border-2 border-[#0A2A5E] p-6 sm:p-8 space-y-4 rounded-[4px]">
                <span
                  className="material-symbols-outlined text-5xl text-[#0A2A5E] inline-block"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  domain_verification
                </span>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A2A5E]">
                  Partnership Enquiry Received
                </h2>
                <p className="text-sm text-[#536B86] font-medium leading-relaxed max-w-lg mx-auto">
                  Thank you for submitting your institutional tie-up requirements for <strong className="text-[#0A2A5E]">{orgName}</strong>. Our partnerships desk at Somajiguda is reviewing your facility location and fleet scope.
                </p>

                <div className="p-3 bg-white border border-[#0A2A5E]/20 max-w-md mx-auto text-xs text-[#0A2A5E] font-medium rounded-[2px]">
                  ✉️ A formal acknowledgement and onboarding roadmap has been dispatched to <strong>{submittedEmail}</strong>.
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href="tel:+919951648174"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A2A5E] hover:bg-[#1565D8] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    Direct Corporate Line · +91 99516 48174
                  </a>
                  <a
                    href={siteConfig.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp Corporate Desk
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-extrabold text-[#536B86] hover:text-[#0A2A5E] uppercase tracking-wider underline pt-4 block mx-auto cursor-pointer"
                >
                  Submit another business tie-up enquiry
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
                    Institutional &amp; Tie-Up Details
                  </h2>
                  <p className="text-xs text-[#536B86] mt-1 font-medium">
                    Provide your organization details and fleet requirements. Our corporate team will reach out with customized SLA terms and fleet proposals.
                  </p>
                </div>

                {formState === "error" && (
                  <div className="p-4 bg-[#FDEDEC] border-2 border-[#D32F2F] text-xs font-bold text-[#D32F2F] rounded-[3px]">
                    ⚠️ {errorMessage || "Failed to submit enquiry. Please call our corporate desk directly."}
                  </div>
                )}

                {/* 1. Organization & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="biz-org"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Organization / Hospital / Entity <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-org"
                      type="text"
                      required
                      placeholder="e.g. Care Hospital / Tech Mahindra Campus"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="biz-category"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Partnership Category <span className="text-[#1565D8]">*</span>
                    </label>
                    <select
                      id="biz-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    >
                      {partnershipCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. Contact Person & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="biz-person"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Contact Person Full Name <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-person"
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma / Priya Sen"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="biz-desig"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Designation / Role <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-desig"
                      type="text"
                      required
                      placeholder="e.g. Medical Superintendent / HR Facility Head"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Official Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="biz-email"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Official Work Email <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-email"
                      type="email"
                      required
                      placeholder="e.g. partnerships@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="biz-phone"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Direct Contact Phone <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9848012345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Facility Location & Fleet Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="biz-location"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Facility / Campus Location <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="biz-location"
                      type="text"
                      required
                      placeholder="e.g. Gachibowli, Hyderabad"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="biz-scope"
                      className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                    >
                      Fleet Scope / SLA Requirement <span className="text-[#1565D8]">*</span>
                    </label>
                    <select
                      id="biz-scope"
                      value={fleetScope}
                      onChange={(e) => setFleetScope(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-bold text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    >
                      {fleetScopeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Special Notes / Equipment / RFP */}
                <div>
                  <label
                    htmlFor="biz-notes"
                    className="block text-[11px] font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
                  >
                    Contract Scope, Paramedic Staffing or Special Equipment Details{" "}
                    <span className="text-[10px] font-normal text-[#536B86]">(Optional)</span>
                  </label>
                  <textarea
                    id="biz-notes"
                    rows={3}
                    placeholder="e.g. 24x7 EMT required, monthly billing structure, 1-year contract duration, defibrillator and ventilator needed."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] font-medium text-sm rounded-[3px] focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-4 bg-[#0A2A5E] hover:bg-[#1565D8] text-white border-[3px] border-[#0A2A5E] text-sm font-black uppercase tracking-wider rounded-[4px] shadow-[4px_4px_0_#1565D8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? "Submitting Partnership Enquiry..." : "Submit Business Tie-Up Enquiry"}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                <p className="text-center text-xs text-[#536B86] font-medium">
                  Looking for individual patient emergency ambulance?{" "}
                  <Link href="/customer-enquiry" className="text-[#1565D8] font-bold underline hover:text-[#0A2A5E]">
                    Switch to Customer Enquiry →
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
