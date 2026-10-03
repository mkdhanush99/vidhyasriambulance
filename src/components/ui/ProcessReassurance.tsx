"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function ProcessReassurance() {
  const steps = [
    {
      num: "01",
      title: "Contact Vidhya Sri",
      desc: "Reach our Somajiguda control room via direct phone call or WhatsApp with patient state and location.",
      icon: "call",
    },
    {
      num: "02",
      title: "Understand Requirement",
      desc: "Duty coordinator evaluates vehicle equipment needs, required oxygen flow, or clinical doctor escort.",
      icon: "checklist",
    },
    {
      num: "03",
      title: "Vehicle Coordinated",
      desc: "The nearest stationed ambulance unit is assigned with verified route logistics and clinical readiness.",
      icon: "verified_user",
    },
    {
      num: "04",
      title: "Direct Confirmation",
      desc: "You receive driver contact details, vehicle assignment, and ongoing status coordination until arrival.",
      icon: "task_alt",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFD] py-14 sm:py-18 border-y-2 border-[#DDE7F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#DDE7F2] text-[#1565D8] text-[10px] font-black uppercase tracking-widest rounded-[2px] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
              Clear Operational Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
              What happens after you contact Vidhya Sri?
            </h2>
            <p className="text-xs sm:text-sm text-[#536B86] font-medium mt-1 max-w-2xl">
              Transparent, step-by-step coordination from initial call to safe hospital or bedside arrival.
            </p>
          </div>

          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#1565D8] hover:text-[#0A2A5E] tracking-wider transition-colors shrink-0"
          >
            24×7 Somajiguda Helpline →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-5 bg-white border-2 border-[#DDE7F2] hover:border-[#0A2A5E] transition-all rounded-[4px] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#1565D8] tracking-tight">
                    {st.num}
                  </span>
                  <span className="material-symbols-outlined text-[#0A2A5E] text-[22px]">
                    {st.icon}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold uppercase text-[#0A2A5E] mb-1.5">
                  {st.title}
                </h3>
                <p className="text-xs text-[#536B86] leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDE7F2] flex items-center gap-1.5 text-[10px] font-bold text-[#536B86] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F8F5F]" />
                Standard Coordination
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
