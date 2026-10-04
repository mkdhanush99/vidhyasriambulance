"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

interface AmbulanceFinderProps {
  onSelectService?: (serviceSlug: string) => void;
  onRequestBooking?: (serviceSlug: string) => void;
  isModal?: boolean;
  onClose?: () => void;
}

type SupportType =
  | "bls"
  | "icu"
  | "oxygen"
  | "nicu"
  | "transfer"
  | "outstation"
  | "mortuary"
  | "freezer_box"
  | "notsure";

type JourneyType = "local" | "outstation";

export function AmbulanceFinder({
  onSelectService,
  onRequestBooking,
  isModal = false,
  onClose,
}: AmbulanceFinderProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isEmergency, setIsEmergency] = useState<boolean | null>(null);
  const [supportType, setSupportType] = useState<SupportType | null>(null);
  const [journeyType, setJourneyType] = useState<JourneyType>("local");

  // Determine recommendation based on user answers
  function getRecommendation() {
    if (supportType === "notsure") {
      return null;
    }

    if (journeyType === "outstation" || supportType === "outstation") {
      return (
        services.find((s) => s.slug === "outstation-ambulance") || services[0]
      );
    }

    switch (supportType) {
      case "mortuary":
        return (
          services.find((s) => s.slug === "mortuary-ambulance") ||
          services.find((s) => s.slug === "mortuary-transportation") ||
          services[0]
        );
      case "freezer_box":
        return (
          services.find((s) => s.slug === "dead-body-freezer-box") ||
          services[0]
        );
      case "icu":
        return (
          services.find((s) => s.slug === "icu-ambulance") ||
          services.find((s) => s.slug === "ventilator-ambulance") ||
          services[0]
        );
      case "oxygen":
        return (
          services.find((s) => s.slug === "oxygen-ambulance") || services[0]
        );
      case "nicu":
        return (
          services.find((s) => s.slug === "nicu-neonatal-ambulance") || services[0]
        );
      case "transfer":
        return (
          services.find((s) => s.slug === "patient-transfer-ambulance") || services[0]
        );
      case "bls":
      default:
        return (
          services.find((s) => s.slug === "emergency-ambulance") || services[0]
        );
    }
  }

  const recommendation = getRecommendation();

  function handleReset() {
    setStep(1);
    setIsEmergency(null);
    setSupportType(null);
    setJourneyType("local");
  }

  return (
    <div className={`w-full bg-white ${isModal ? "p-0" : "border-2 border-[#DDE7F2] p-6 sm:p-8 rounded-[4px] shadow-sm"}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 pb-4 mb-6 border-b border-[#DDE7F2]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#EAF2FC] border border-[#1565D8]/20 rounded-[2px] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2A5E]">
              Decision Helper
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
            Find the Right Ambulance
          </h2>
          <p className="text-xs sm:text-[13px] font-medium text-[#536B86] mt-1">
            Answer 3 simple questions to find the appropriate vehicle setup for your patient.
          </p>
        </div>
        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close decision tool"
            className="w-9 h-9 flex items-center justify-center border-2 border-[#0A2A5E] bg-white text-[#0A2A5E] hover:bg-[#EAF2FC] active:translate-x-0.5 active:translate-y-0.5 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Progress Indicators */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= s ? "bg-[#1565D8]" : "bg-[#DDE7F2]"
              }`}
          />
        ))}
      </div>

      {/* ── QUESTION 1: Is this an emergency? ── */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1565D8]">
              Step 1 of 3
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#0A2A5E]">
              Is this an active medical emergency?
            </h3>
            <p className="text-xs text-[#536B86]">
              Immediate critical conditions require instant telephone dispatch rather than online questionnaires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsEmergency(true);
              }}
              className={`p-4 border-2 text-left rounded-[4px] transition-all flex flex-col justify-between gap-3 ${isEmergency === true
                ? "border-[#D32F2F] bg-[#FDEDEC] shadow-sm"
                : "border-[#DDE7F2] hover:border-[#D32F2F] hover:bg-[#FFF5F5]"
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D32F2F]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
                  Yes — Emergency
                </span>
                <span className="material-symbols-outlined text-[#D32F2F]">emergency</span>
              </div>
              <p className="text-[12px] text-[#536B86] leading-relaxed">
                Chest pain, breathing distress, stroke signs, accident trauma, or severe instability.
              </p>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsEmergency(false);
                setStep(2);
              }}
              className="p-4 border-2 border-[#DDE7F2] hover:border-[#1565D8] hover:bg-[#EAF2FC] text-left rounded-[4px] transition-all flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0A2A5E]">
                  No — Planned / Transfer
                </span>
                <span className="material-symbols-outlined text-[#1565D8]">schedule</span>
              </div>
              <p className="text-[12px] text-[#536B86] leading-relaxed">
                Scheduled discharge, hospital-to-hospital shift, diagnostic visit, or outstation journey.
              </p>
            </button>
          </div>

          {/* If Emergency: Immediate Direct Call CTA */}
          {isEmergency === true && (
            <div className="mt-4 p-5 bg-[#FDEDEC] border-2 border-[#D32F2F] rounded-[4px] space-y-4 anim-fade-in">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#D32F2F] text-[28px] shrink-0">
                  priority_high
                </span>
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-[#D32F2F] tracking-tight">
                    Do Not Wait — Call Dispatch Immediately
                  </h4>
                  <p className="text-xs text-[#536B86] mt-0.5 font-medium">
                    Our 24×7 Somajiguda control room deploys the nearest emergency unit right away.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={siteConfig.phone.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-[13px] font-black uppercase tracking-wider rounded-[4px] shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-[19px]">call</span>
                  Call Now · {siteConfig.phone.display}
                </a>
                <a
                  href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(
                    "🚨 URGENT EMERGENCY: I need an ambulance dispatched immediately. Please connect with me now."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-white border-2 border-[#25D366] text-[#0A2A5E] hover:bg-[#F0FDF4] text-[13px] font-black uppercase tracking-wider rounded-[4px] transition-all"
                >
                  <span className="material-symbols-outlined text-[19px] text-[#25D366]">chat</span>
                  WhatsApp
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsEmergency(false);
                  setStep(2);
                }}
                className="text-[11px] font-extrabold uppercase tracking-wider text-[#536B86] hover:text-[#0A2A5E] underline block text-center"
              >
                Or continue planned transfer helper instead →
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── QUESTION 2: What support does the patient need? ── */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1565D8]">
              Step 2 of 3
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#0A2A5E]">
              What support does the patient need?
            </h3>
            <p className="text-xs text-[#536B86]">
              Select the primary equipment or medical supervision required for safe transit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {[
              {
                id: "bls",
                label: "Basic / BLS / Stretcher",
                desc: "Stable patient requiring stretcher, basic vitals, and assistance.",
                icon: "airline_seat_flat",
              },
              {
                id: "icu",
                label: "ICU / Critical Care / Ventilator",
                desc: "Unstable patient needing transport ventilator, infusion pump, or doctor.",
                icon: "vital_signs",
              },
              {
                id: "oxygen",
                label: "Oxygen Support",
                desc: "Patient requiring continuous oxygen flow (cylinder or concentrator).",
                icon: "air",
              },
              {
                id: "nicu",
                label: "Neonatal / Infant / Pediatric",
                desc: "Specialized transport incubator setup for newborns and infants.",
                icon: "child_care",
              },
              {
                id: "transfer",
                label: "Routine Hospital Transfer / Discharge",
                desc: "Bed-to-bed non-emergency shifting from hospital to home.",
                icon: "directions_car",
              },
              {
                id: "outstation",
                label: "Long Distance / Outstation",
                desc: "Inter-city or interstate transfer across Telangana, AP, or beyond.",
                icon: "distance",
              },
              {
                id: "mortuary",
                label: "Mortuary Ambulance / Deceased Transport",
                desc: "Dignified road transportation of deceased person with family seating.",
                icon: "directions_car",
              },
              {
                id: "freezer_box",
                label: "Dead Body Freezer Box (Hire / Rent)",
                desc: "Standard or VIP glass-top preservation freezer box delivered to your home.",
                icon: "ac_unit",
              },
              {
                id: "notsure",
                label: "Not sure what is needed",
                desc: "Let our Somajiguda coordinators guide you based on hospital discharge notes.",
                icon: "help_outline",
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSupportType(item.id as SupportType);
                  if (item.id === "outstation") {
                    setJourneyType("outstation");
                    setStep(4); // Go straight to recommendation
                  } else if (item.id === "mortuary" || item.id === "freezer_box" || item.id === "notsure") {
                    setStep(4); // Go straight to recommendation
                  } else {
                    setStep(3);
                  }
                }}
                className={`p-3.5 border-2 text-left rounded-[4px] transition-all flex items-start gap-3 ${supportType === item.id
                  ? "border-[#1565D8] bg-[#EAF2FC]"
                  : "border-[#DDE7F2] hover:border-[#1565D8] hover:bg-[#F8FAFD]"
                  }`}
              >
                <span className="material-symbols-outlined text-[#1565D8] text-[22px] mt-0.5 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase text-[#0A2A5E] block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[11.5px] text-[#536B86] mt-0.5 block leading-normal">
                    {item.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* ── QUESTION 3: What type of journey? ── */}
      {step === 3 && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1565D8]">
              Step 3 of 3
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#0A2A5E]">
              What type of journey?
            </h3>
            <p className="text-xs text-[#536B86]">
              Select whether this transport is within Greater Hyderabad or traveling to another city/state.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <button
              type="button"
              onClick={() => {
                setJourneyType("local");
                setStep(4);
              }}
              className="p-4 border-2 border-[#DDE7F2] hover:border-[#1565D8] hover:bg-[#EAF2FC] text-left rounded-[4px] transition-all flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#0A2A5E]">
                  Local Transit
                </span>
                <span className="material-symbols-outlined text-[#1565D8]">location_city</span>
              </div>
              <p className="text-[12px] text-[#536B86] leading-relaxed">
                Within Hyderabad metropolitan area (e.g., Banjara Hills, Somajiguda, Secunderabad, Gachibowli, LB Nagar).
              </p>
            </button>

            <button
              type="button"
              onClick={() => {
                setJourneyType("outstation");
                setStep(4);
              }}
              className="p-4 border-2 border-[#DDE7F2] hover:border-[#1565D8] hover:bg-[#EAF2FC] text-left rounded-[4px] transition-all flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#0A2A5E]">
                  Outstation / Inter-city
                </span>
                <span className="material-symbols-outlined text-[#1565D8]">route</span>
              </div>
              <p className="text-[12px] text-[#536B86] leading-relaxed">
                Long-distance highway journey across Telangana, Andhra Pradesh, Karnataka, or interstate transfer.
              </p>
            </button>
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 4: RECOMMENDATION RESULT ── */}
      {step === 4 && (
        <div className="space-y-6 anim-fade-in">
          {recommendation ? (
            <div className="p-5 sm:p-6 bg-[#F8FAFD] border-2 border-[#0A2A5E] rounded-[4px] space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-[#DDE7F2] pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#EAF2FC] text-[#1565D8] border border-[#1565D8]/20 rounded-[2px]">
                  Recommended for you
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
                >
                  Restart Helper ↺
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-[24px] text-[#1565D8]">
                    {recommendation.icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#0A2A5E] tracking-tight">
                    {recommendation.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed mt-2">
                  {recommendation.shortDescription}
                </p>
              </div>

              {/* Key features highlights from services.ts */}
              <div className="pt-2 border-t border-[#DDE7F2]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0A2A5E] block mb-2">
                  Standard Vehicle Configuration:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#536B86]">
                  {recommendation.features.slice(0, 4).map((feat: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1565D8] shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href={siteConfig.phone.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-[13px] font-black uppercase tracking-wider rounded-[4px] shadow-sm transition-all text-center"
                >
                  <span className="material-symbols-outlined text-[19px]">call</span>
                  Call Vidhya Sri · {siteConfig.phone.display}
                </a>

                {onRequestBooking ? (
                  <button
                    type="button"
                    onClick={() => onRequestBooking(recommendation.slug)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] hover:bg-[#EAF2FC] text-[13px] font-black uppercase tracking-wider rounded-[4px] transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-[19px]">edit_note</span>
                    Request Transfer Online
                  </button>
                ) : (
                  <Link
                    href={`/services/${recommendation.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] hover:bg-[#EAF2FC] text-[13px] font-black uppercase tracking-wider rounded-[4px] transition-all text-center"
                  >
                    View Service Details →
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="p-5 sm:p-6 bg-[#EAF2FC] border-2 border-[#1565D8] rounded-[4px] space-y-4">
              <div className="flex items-center justify-between border-b border-[#DDE7F2] pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-white text-[#0A2A5E] border border-[#1565D8]/20 rounded-[2px]">
                  Specialized Assessment
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] font-bold uppercase text-[#536B86] hover:text-[#0A2A5E] transition-colors"
                >
                  Restart Helper ↺
                </button>
              </div>

              <div>
                <h3 className="text-xl font-extrabold uppercase text-[#0A2A5E] tracking-tight">
                  Not sure which ambulance you need?
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed mt-2">
                  Our Somajiguda dispatch coordinators review patient discharge summaries, required oxygen flow rates, or attending physician instructions to assign the correct ambulance category.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={siteConfig.phone.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-[13px] font-black uppercase tracking-wider rounded-[4px] shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-[19px]">call</span>
                  Talk to Vidhya Sri · {siteConfig.phone.display}
                </a>
                <a
                  href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(
                    "Hello Vidhya Sri, I am coordinating patient transport and need guidance on which ambulance configuration is appropriate for our requirements."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#25D366] text-[#0A2A5E] hover:bg-[#F0FDF4] text-[13px] font-black uppercase tracking-wider rounded-[4px] transition-all"
                >
                  <span className="material-symbols-outlined text-[19px] text-[#25D366]">chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}

          {/* Medical Disclaimer */}
          <div className="p-3 bg-[#F8FAFD] border border-[#DDE7F2] rounded-[3px] text-[11px] text-[#536B86] leading-relaxed">
            <strong className="text-[#0A2A5E]">Operational Guidance Note:</strong> This decision helper provides transport logistical recommendations based on reported requirements and does not constitute a clinical assessment or medical advice. For unstable patients or emergency life threats, please call our 24×7 dispatch helpline immediately.
          </div>
        </div>
      )}
    </div>
  );
}
