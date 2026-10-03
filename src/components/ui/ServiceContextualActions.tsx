"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AmbulanceFinder } from "@/components/ui/AmbulanceFinder";
import { AmbulanceBookingFlow } from "@/components/ui/AmbulanceBookingFlow";

interface ServiceContextualActionsProps {
  serviceName: string;
  serviceSlug: string;
}

export function ServiceContextualActions({
  serviceName,
  serviceSlug,
}: ServiceContextualActionsProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [finderOpen, setFinderOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#0A2A5E] py-16 sm:py-20 border-t-[3px] border-[#1565D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
              Ready to Coordinate
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Coordinate {serviceName}
            </h2>
            <p className="text-sm sm:text-base font-medium text-white/80 mt-2">
              Choose the response path that best matches your patient&apos;s urgency:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Immediate Need */}
            <div className="p-6 bg-white/5 border-2 border-white/20 hover:border-white rounded-[4px] flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#38A3F7]">
                    Option 01
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-2">
                  Immediate Critical Need?
                </h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed mb-6">
                  For active emergencies or rapid dispatch, connect directly with our Somajiguda duty desk.
                </p>
              </div>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Now · {siteConfig.phone.display}
              </a>
            </div>

            {/* Card 2: Planning a Transfer */}
            <div className="p-6 bg-white/5 border-2 border-white/20 hover:border-white rounded-[4px] flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#38A3F7]">
                    Option 02
                  </span>
                  <span className="material-symbols-outlined text-white/60 text-[20px]">
                    calendar_month
                  </span>
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-2">
                  Planning a Transfer?
                </h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed mb-6">
                  Provide pickup and destination to schedule this ambulance type for later today or tomorrow.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                Request Ambulance
              </button>
            </div>

            {/* Card 3: Not Sure What You Need */}
            <div className="p-6 bg-white/5 border-2 border-white/20 hover:border-white rounded-[4px] flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#38A3F7]">
                    Option 03
                  </span>
                  <span className="material-symbols-outlined text-white/60 text-[20px]">
                    help_outline
                  </span>
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-2">
                  Not Sure What You Need?
                </h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed mb-6">
                  Use our decision helper or speak to coordinators to determine the right clinical equipment.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFinderOpen(true)}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white text-[#0A2A5E] hover:bg-[#EAF2FC] text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                Find Right Ambulance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Modal ── */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0"
            onClick={() => setBookingOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl bg-white border-[3px] border-[#0A2A5E] shadow-[8px_8px_0_#0A2A5E] rounded-[4px] p-5 sm:p-7 z-10 max-h-[90vh] overflow-y-auto">
            <AmbulanceBookingFlow
              isModal
              initialServiceSlug={serviceSlug}
              onClose={() => setBookingOpen(false)}
            />
          </div>
        </div>
      )}

      {/* ── Decision Helper Modal ── */}
      {finderOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0"
            onClick={() => setFinderOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl bg-white border-[3px] border-[#0A2A5E] shadow-[8px_8px_0_#0A2A5E] rounded-[4px] p-5 sm:p-7 z-10 max-h-[90vh] overflow-y-auto">
            <AmbulanceFinder
              isModal
              onClose={() => setFinderOpen(false)}
              onRequestBooking={(slug) => {
                setFinderOpen(false);
                setBookingOpen(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
