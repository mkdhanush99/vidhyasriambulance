"use client";

import { siteConfig } from "@/data/site";

/**
 * Sticky bottom CTA bar for mobile devices — always visible.
 * Shows emergency call + WhatsApp buttons.
 */
export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t-2 border-navy bg-white pb-safe">
      {/* Call Button */}
      <a
        href={siteConfig.phone.href}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-care-blue border-r border-navy text-white text-[12px] font-extrabold uppercase tracking-wider active:bg-blue-800 transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">call</span>
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href={siteConfig.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-mint text-navy text-[12px] font-extrabold uppercase tracking-wider active:bg-emerald-200 transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
        WhatsApp
      </a>
    </div>
  );
}
