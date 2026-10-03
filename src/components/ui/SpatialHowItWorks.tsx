"use client";

import React, { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Call or WhatsApp",
    desc: "Reach our 24×7 Somajiguda dispatch helpline directly with one tap.",
    icon: "call",
    subtext: "Instant human answer · No IVR delays",
  },
  {
    num: "02",
    title: "Share Details",
    desc: "Provide pickup location, destination hospital, and patient medical requirements.",
    icon: "share_location",
    subtext: "GPS live pin or prominent landmark",
  },
  {
    num: "03",
    title: "Unit Allocation",
    desc: "The nearest equipped ambulance (ALS / ICU / BLS) is mobilized immediately.",
    icon: "ambulance",
    subtext: "Driver & paramedic contact shared",
  },
  {
    num: "04",
    title: "Safe Transit",
    desc: "Continuous clinical monitoring with formal hospital bedside handover.",
    icon: "medical_services",
    subtext: "Zero-delay emergency triage",
  },
];

export function SpatialHowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* ── Dimensional Route Line (Desktop Connecting Flow) ── */}
      <div className="hidden lg:block relative w-full mb-8" aria-hidden="true">
        <div className="h-1 w-full bg-[#DDE7F2] rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-[#1565D8] to-transparent anim-border-cross-h" />
        </div>
        <div className="flex justify-between -mt-3.5 px-6">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                activeStep === idx
                  ? "bg-[#1565D8] border-[#0A2A5E] scale-125 shadow-spatial"
                  : "bg-white border-[#1565D8]"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activeStep === idx ? "bg-white" : "bg-[#1565D8]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Spatial Step Cards (4 Grid) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            onMouseEnter={() => setActiveStep(idx)}
            onMouseLeave={() => setActiveStep(null)}
            className={`group relative bg-white border-2 rounded-[4px] p-6 shadow-sm transition-all duration-300 ease-out preserve-3d flex flex-col justify-between ${
              activeStep === idx
                ? "border-[#0A2A5E] -translate-y-2 shadow-spatial-hover"
                : "border-[#DDE7F2] hover:border-[#0A2A5E] hover:-translate-y-1"
            }`}
          >
            <div>
              {/* Step Number + Icon in 3D Elevation */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 bg-[#EAF2FC] border border-[#1565D8]/25 text-[#1565D8] font-black text-sm rounded-[3px] group-hover:bg-[#1565D8] group-hover:text-white transition-colors">
                  {step.num}
                </span>

                <span
                  className="material-symbols-outlined text-[24px] text-[#1565D8] group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] font-medium text-[#536B86] leading-relaxed mb-4">
                {step.desc}
              </p>
            </div>

            {/* Subtext Footnote */}
            <div className="pt-3 border-t border-[#DDE7F2] flex items-center gap-1.5 text-[10.5px] font-bold text-[#1565D8]">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              <span className="truncate">{step.subtext}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
