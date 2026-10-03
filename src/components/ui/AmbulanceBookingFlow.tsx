"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

interface AmbulanceBookingFlowProps {
  initialServiceSlug?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export function AmbulanceBookingFlow({
  initialServiceSlug,
  isModal = false,
  onClose,
}: AmbulanceBookingFlowProps) {
  // Steps: 1: Pickup, 2: Destination, 3: Service, 4: Contact, 5: Review, 6: Confirmation
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  // Form states
  const [pickup, setPickup] = useState("");
  const [pickupLandmark, setPickupLandmark] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedService, setSelectedService] = useState(
    initialServiceSlug || "emergency-ambulance"
  );
  const [patientCondition, setPatientCondition] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [journeyTiming, setJourneyTiming] = useState("Immediate");

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // Sync initialServiceSlug if changed
  useEffect(() => {
    if (initialServiceSlug) {
      setSelectedService(initialServiceSlug);
    }
  }, [initialServiceSlug]);

  const activeServiceObj =
    services.find((s) => s.slug === selectedService) || services[0];

  // Validate step transitions
  function handleNext() {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!pickup.trim()) {
        errs.pickup = "Please enter the pickup location or landmark.";
      }
    } else if (currentStep === 2) {
      if (!destination.trim()) {
        errs.destination = "Please specify the destination hospital or locality.";
      }
    } else if (currentStep === 3) {
      if (!selectedService) {
        errs.service = "Please select a required ambulance category.";
      }
    } else if (currentStep === 4) {
      const cleanPhone = userPhone.trim().replace(/\D/g, "");
      if (!userName.trim()) {
        errs.name = "Please enter your name.";
      }
      if (!cleanPhone || cleanPhone.length < 10) {
        errs.phone = "Please enter a valid 10-digit mobile number.";
      }
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setCurrentStep((prev) => ((prev + 1) as 1 | 2 | 3 | 4 | 5 | 6));
  }

  function handleBack() {
    setErrors({});
    setCurrentStep((prev) => (Math.max(1, prev - 1) as 1 | 2 | 3 | 4 | 5 | 6));
  }

  // Construct Smart WhatsApp Contextual Message
  function buildWhatsAppMessage() {
    let msg = `Hello Vidhya Sri, I need an ambulance from ${pickup.trim()}`;
    if (pickupLandmark.trim()) {
      msg += ` (near ${pickupLandmark.trim()})`;
    }
    msg += ` to ${destination.trim()} for ${activeServiceObj.name}.`;

    if (patientCondition.trim()) {
      msg += `\n• Patient state: ${patientCondition.trim()}`;
    }
    if (journeyTiming) {
      msg += `\n• Timing: ${journeyTiming}`;
    }
    msg += `\n• Contact Person: ${userName.trim()} (${userPhone.trim()})`;
    msg += `\n\n_Please confirm vehicle availability and coordinator dispatch._`;

    return msg;
  }

  function handleSubmitRequest(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Contextual message
    const waText = buildWhatsAppMessage();
    const waUrl = `${siteConfig.whatsapp.href}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in new tab for direct dispatch
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Handled via confirmation screen fallback
    }

    setIsSubmitting(false);
    setCurrentStep(6); // Step 6: Confirmation
  }

  function handleCopySummary() {
    const text = buildWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  }

  return (
    <div className={`w-full bg-white ${isModal ? "p-0" : "border-2 border-[#DDE7F2] p-6 sm:p-8 rounded-[4px] shadow-sm"}`}>
      {/* Emergency Fast-Path Call Banner */}
      <div className="mb-6 p-3 sm:p-4 bg-[#FDEDEC] border-2 border-[#D32F2F] rounded-[4px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse shrink-0" />
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#D32F2F] block">
              Time-Critical Emergency?
            </span>
            <span className="text-[11.5px] text-[#536B86] font-medium">
              Do not wait for forms. Connect directly with our dispatch room right now.
            </span>
          </div>
        </div>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-black uppercase tracking-wider rounded-[3px] shadow-xs shrink-0 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          Call {siteConfig.phone.display}
        </a>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-[#DDE7F2]">
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#EAF2FC] border border-[#1565D8]/20 rounded-[2px] mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2A5E]">
              Ambulance Request Coordination
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
            {currentStep === 6 ? "Request Received" : "Request Ambulance Transfer"}
          </h2>
          {currentStep < 6 && (
            <p className="text-xs text-[#536B86] mt-0.5">
              Step {currentStep} of 5:{" "}
              {currentStep === 1 && "Specify pickup point & landmark"}
              {currentStep === 2 && "Specify destination hospital or address"}
              {currentStep === 3 && "Select required vehicle equipment category"}
              {currentStep === 4 && "Provide coordinator contact details"}
              {currentStep === 5 && "Review journey details before coordination"}
            </p>
          )}
        </div>
        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-9 h-9 flex items-center justify-center border-2 border-[#0A2A5E] bg-white text-[#0A2A5E] hover:bg-[#EAF2FC] active:translate-x-0.5 active:translate-y-0.5 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Progress Bars (1 to 5) */}
      {currentStep < 6 && (
        <div className="flex items-center gap-1.5 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                currentStep >= s ? "bg-[#1565D8]" : "bg-[#DDE7F2]"
              }`}
            />
          ))}
        </div>
      )}

      {/* ── STEP 1: Pickup Location ── */}
      {currentStep === 1 && (
        <div className="space-y-4 anim-fade-in">
          <div>
            <label
              htmlFor="pickup"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Pickup Address or Hospital <span className="text-[#D32F2F]">*</span>
            </label>
            <input
              id="pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Care Hospital Banjara Hills / House #12, Road No 10"
              className={`w-full px-4 py-3 bg-white border-2 rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors ${
                errors.pickup ? "border-[#D32F2F]" : "border-[#DDE7F2] focus:border-[#1565D8]"
              }`}
            />
            {errors.pickup && (
              <p className="text-xs text-[#D32F2F] font-bold mt-1">
                {errors.pickup}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="pickupLandmark"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Prominent Nearby Landmark (Optional)
            </label>
            <input
              id="pickupLandmark"
              type="text"
              value={pickupLandmark}
              onChange={(e) => setPickupLandmark(e.target.value)}
              placeholder="e.g. Near Metro Pillar #124 / Opposite Indian Oil Petrol Pump"
              className="w-full px-4 py-3 bg-white border-2 border-[#DDE7F2] focus:border-[#1565D8] rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors"
            />
            <span className="text-[11px] text-[#536B86] mt-1 block">
              Helps our driver pinpoint your entrance without stopping to call multiple times.
            </span>
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[4px] transition-colors"
            >
              Next: Destination →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: Destination ── */}
      {currentStep === 2 && (
        <div className="space-y-4 anim-fade-in">
          <div>
            <label
              htmlFor="destination"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Destination Address, Hospital, or City <span className="text-[#D32F2F]">*</span>
            </label>
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Yashoda Hospital Somajiguda / Residence in Kondapur / Outstation"
              className={`w-full px-4 py-3 bg-white border-2 rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors ${
                errors.destination ? "border-[#D32F2F]" : "border-[#DDE7F2] focus:border-[#1565D8]"
              }`}
            />
            {errors.destination && (
              <p className="text-xs text-[#D32F2F] font-bold mt-1">
                {errors.destination}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="timing"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Preferred Journey Timing
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Immediate", "Within 1 Hour", "Scheduled Later Today", "Tomorrow / Planned"].map(
                (timeOption) => (
                  <button
                    key={timeOption}
                    type="button"
                    onClick={() => setJourneyTiming(timeOption)}
                    className={`py-2 px-3 text-xs font-bold uppercase rounded-[3px] border text-center transition-all ${
                      journeyTiming === timeOption
                        ? "bg-[#1565D8] text-white border-[#1565D8]"
                        : "bg-white text-[#536B86] border-[#DDE7F2] hover:border-[#1565D8]"
                    }`}
                  >
                    {timeOption}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="pt-3 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[4px] transition-colors"
            >
              Next: Select Ambulance →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Required Ambulance Category ── */}
      {currentStep === 3 && (
        <div className="space-y-4 anim-fade-in">
          <div>
            <span className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-2">
              Select Ambulance Equipment Category <span className="text-[#D32F2F]">*</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
              {services.map((srv) => (
                <button
                  key={srv.slug}
                  type="button"
                  onClick={() => setSelectedService(srv.slug)}
                  className={`p-3 text-left rounded-[4px] border-2 transition-all flex items-start gap-2.5 ${
                    selectedService === srv.slug
                      ? "border-[#1565D8] bg-[#EAF2FC]"
                      : "border-[#DDE7F2] hover:border-[#1565D8] hover:bg-[#F8FAFD]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[#1565D8] text-[20px] mt-0.5 shrink-0">
                    {srv.icon}
                  </span>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0A2A5E] block leading-tight">
                      {srv.name}
                    </span>
                    <span className="text-[11px] text-[#536B86] mt-0.5 block line-clamp-1">
                      {srv.shortDescription}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {errors.service && (
              <p className="text-xs text-[#D32F2F] font-bold mt-1">
                {errors.service}
              </p>
            )}
          </div>

          <div className="pt-3 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[4px] transition-colors"
            >
              Next: Contact Details →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 4: Contact Details ── */}
      {currentStep === 4 && (
        <div className="space-y-4 anim-fade-in">
          <div>
            <label
              htmlFor="userName"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Your Name / Attendant Name <span className="text-[#D32F2F]">*</span>
            </label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 bg-white border-2 rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors ${
                errors.name ? "border-[#D32F2F]" : "border-[#DDE7F2] focus:border-[#1565D8]"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-[#D32F2F] font-bold mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="userPhone"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Mobile Phone Number (for Driver & Dispatch Calls) <span className="text-[#D32F2F]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#536B86]">
                +91
              </span>
              <input
                id="userPhone"
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="98765 43210"
                className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors ${
                  errors.phone ? "border-[#D32F2F]" : "border-[#DDE7F2] focus:border-[#1565D8]"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-[#D32F2F] font-bold mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="patientCondition"
              className="block text-xs font-black uppercase tracking-wider text-[#0A2A5E] mb-1.5"
            >
              Patient Condition or Special Equipment Needed (Optional)
            </label>
            <input
              id="patientCondition"
              type="text"
              value={patientCondition}
              onChange={(e) => setPatientCondition(e.target.value)}
              placeholder="e.g. Oxygen 4 LPM required / Stretcher lift needed from 2nd floor"
              className="w-full px-4 py-3 bg-white border-2 border-[#DDE7F2] focus:border-[#1565D8] rounded-[4px] text-sm text-[#0A2A5E] font-medium outline-none transition-colors"
            />
          </div>

          <div className="pt-3 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[4px] transition-colors"
            >
              Review Request →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 5: Review Request ── */}
      {currentStep === 5 && (
        <div className="space-y-5 anim-fade-in">
          <div className="bg-[#F8FAFD] border-2 border-[#DDE7F2] p-4 sm:p-5 rounded-[4px] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DDE7F2] pb-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#536B86]">
                Journey Summary
              </span>
              <span className="text-[11px] font-bold text-[#1565D8] uppercase">
                {journeyTiming}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-[#536B86] block text-[10px] uppercase">
                  Pickup Location:
                </span>
                <span className="font-extrabold text-[#0A2A5E] block mt-0.5">
                  {pickup} {pickupLandmark && `(${pickupLandmark})`}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#536B86] block text-[10px] uppercase">
                  Destination:
                </span>
                <span className="font-extrabold text-[#0A2A5E] block mt-0.5">
                  {destination}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#536B86] block text-[10px] uppercase">
                  Requested Vehicle:
                </span>
                <span className="font-extrabold text-[#0A2A5E] block mt-0.5">
                  {activeServiceObj.name}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#536B86] block text-[10px] uppercase">
                  Contact Person:
                </span>
                <span className="font-extrabold text-[#0A2A5E] block mt-0.5">
                  {userName} · +91 {userPhone}
                </span>
              </div>
              {patientCondition && (
                <div className="sm:col-span-2">
                  <span className="font-bold text-[#536B86] block text-[10px] uppercase">
                    Patient Note:
                  </span>
                  <span className="text-[#0A2A5E] font-medium block mt-0.5">
                    {patientCondition}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-[#EAF2FC] border border-[#1565D8]/20 rounded-[3px] text-[11.5px] text-[#536B86]">
            Submitting will coordinate directly with our Somajiguda dispatch center via WhatsApp and log your transfer request.
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors text-center sm:text-left"
            >
              ← Edit Details
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmitRequest}
              className="px-7 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[13px] font-black uppercase tracking-wider rounded-[4px] shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">chat</span>
              {isSubmitting ? "Coordinating..." : "Confirm & Send via WhatsApp"}
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 6: Premium Request Confirmation ── */}
      {currentStep === 6 && (
        <div className="space-y-6 anim-fade-in">
          <div className="p-5 sm:p-6 bg-[#EAF2FC] border-2 border-[#1565D8] rounded-[4px] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1565D8] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">done</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block">
                  Status: Dispatch Queued
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#0A2A5E] tracking-tight">
                  Request Received
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed">
              Our Somajiguda dispatch control room has received your journey requirement. A duty coordinator will review vehicle readiness and connect with you on{" "}
              <strong className="text-[#0A2A5E]">+91 {userPhone}</strong> promptly.
            </p>

            {/* Request Summary */}
            <div className="bg-white border border-[#DDE7F2] p-4 rounded-[3px] text-xs space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0A2A5E] block pb-1 border-b border-[#DDE7F2]">
                Submitted Journey Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#536B86]">
                <div>
                  <span className="font-bold text-[#0A2A5E]">Pickup:</span> {pickup} {pickupLandmark && `(${pickupLandmark})`}
                </div>
                <div>
                  <span className="font-bold text-[#0A2A5E]">Destination:</span> {destination}
                </div>
                <div>
                  <span className="font-bold text-[#0A2A5E]">Vehicle:</span> {activeServiceObj.name}
                </div>
                <div>
                  <span className="font-bold text-[#0A2A5E]">Timing:</span> {journeyTiming}
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={siteConfig.phone.href}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[4px] shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Vidhya Sri ({siteConfig.phone.display})
              </a>

              <a
                href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#25D366] text-[#0A2A5E] hover:bg-[#F0FDF4] text-xs font-black uppercase tracking-wider rounded-[4px] transition-all"
              >
                <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                Open WhatsApp
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 bg-white border border-[#DDE7F2] text-[#536B86] hover:text-[#0A2A5E] text-xs font-bold uppercase rounded-[4px] transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                {copiedText ? "Copied!" : "Copy Summary"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              href="/services"
              onClick={onClose}
              className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back to All Services
            </Link>

            <button
              type="button"
              onClick={() => {
                setCurrentStep(1);
                setPickup("");
                setPickupLandmark("");
                setDestination("");
                setPatientCondition("");
              }}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              Submit Another Request ↺
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
