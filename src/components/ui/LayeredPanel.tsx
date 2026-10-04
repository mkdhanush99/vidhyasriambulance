import React from "react";

interface LayeredPanelProps {
  children: React.ReactNode;
  offsetColor?: "careBlue" | "mist" | "navy" | "coral";
  className?: string;
  badge?: string;
}

/**
 * LayeredPanel
 * Editorial 3-layer panel: Background surface → Secondary offset backing panel → Foreground white content
 * Adds tactile depth and spatial hierarchy without heavy 3D or layout shift.
 */
export function LayeredPanel({
  children,
  offsetColor = "careBlue",
  className = "",
  badge,
}: LayeredPanelProps) {
  const bgClass =
    offsetColor === "careBlue"
      ? "bg-[#1565D8]"
      : offsetColor === "navy"
      ? "bg-[#0A2A5E]"
      : offsetColor === "coral"
      ? "bg-[#DDE7F2]"
      : "bg-[#EAF2FC]";

  return (
    <div className={`relative ${className}`}>
      {/* Layer 1: Offset secondary panel plane */}
      <div
        className={`absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-5 sm:translate-y-5 rounded-[4px] border-[3px] border-[#0A2A5E] ${bgClass}`}
        aria-hidden="true"
      />

      {/* Layer 2: Elevated foreground content card */}
      <div className="relative bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-6 sm:p-8 lg:p-10 shadow-spatial z-10">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0A2A5E] border border-white text-white text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px] shadow-[2px_2px_0_#0A2A5E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38A3F7]" />
            {badge}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
