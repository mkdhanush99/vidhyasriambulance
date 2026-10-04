import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { RouteMotif } from "@/components/ui/RouteMotif";

interface ManifestoSectionProps {
  className?: string;
}

/**
 * ManifestoSection
 * Strong editorial brand statement moment:
 * “Care does not stop at the hospital door.”
 * Expansive whitespace, calm typographic authority, V-shaped brand motif, and route visual language.
 */
export function ManifestoSection({ className = "" }: ManifestoSectionProps) {
  return (
    <section className={`w-full bg-[#F3F7FC] py-20 sm:py-28 lg:py-32 relative overflow-hidden border-b-[3px] border-[#0A2A5E] ${className}`}>
      {/* Background subtle geometric V watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.035]"
        aria-hidden="true"
      >
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
          <polygon points="50,90 10,15 90,15" stroke="#0A2A5E" strokeWidth="6" />
        </svg>
      </div>

      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <MetaLabel
            category="VIDHYA SRI MANIFESTO"
            detail="SOMAJIGUDA CENTRAL HUB"
            indicator="dot"
            indicatorColor="blue"
          />

          <RouteMotif
            variant="horizontal"
            originLabel="Point of Need"
            destinationLabel="Specialist Care Handover"
            className="max-w-md mx-auto"
          />

          {/* Typographic Visual Structure */}
          <div className="space-y-2">
            <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.25em] text-[#1565D8] block">
              OUR CLINICAL FOUNDATION
            </span>
            <h2 className="text-[clamp(32px,5vw,58px)] font-black uppercase tracking-tight text-[#0A2A5E] leading-[0.98]">
              Care Does Not Stop
              <br />
              <span className="text-[#1565D8]">At The Hospital Door.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Every minute between incident, home, and ICU demands uncompromising medical continuity.
            From Somajiguda across Greater Hyderabad, our fleet is staffed, calibrated, and rolling 24 hours a day.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A2A5E] border-2 border-[#0A2A5E] text-white text-[12.5px] font-black uppercase tracking-wider rounded-[3px] shadow-[4px_4px_0_#1565D8] hover:bg-[#1565D8] hover:border-[#1565D8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span className="material-symbols-outlined text-[17px]">call</span>
              24×7 Emergency Dispatch: {siteConfig.phone.display}
            </a>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[12.5px] font-black uppercase tracking-wider rounded-[3px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#EAF2FC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Our Operational Standards
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
