import React from "react";

interface SectionNumberProps {
  number: string;
  label?: string;
  position?: "left" | "right" | "background";
  className?: string;
}

/**
 * SectionNumber
 * Oversized, very low contrast background numeral for major sections.
 * Visual anchor that establishes editorial hierarchy without competing with primary content.
 */
export function SectionNumber({
  number,
  label,
  position = "right",
  className = "",
}: SectionNumberProps) {
  if (position === "background") {
    return (
      <div
        className={`pointer-events-none select-none absolute z-0 overflow-hidden leading-none font-extrabold text-[#0A2A5E]/[0.035] tracking-tighter ${className}`}
        aria-hidden="true"
      >
        <span className="text-[clamp(120px,22vw,300px)]">{number}</span>
      </div>
    );
  }

  const alignClass = position === "left" ? "left-0 -translate-x-1/4" : "right-0 translate-x-1/4";

  return (
    <div
      className={`pointer-events-none select-none absolute top-0 ${alignClass} z-0 overflow-hidden leading-none font-black text-[#1565D8]/[0.045] tracking-tighter ${className}`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <span className="text-[clamp(110px,20vw,260px)] leading-none">{number}</span>
        {label && (
          <span className="text-[12px] sm:text-[14px] font-black uppercase tracking-[0.3em] text-[#0A2A5E]/[0.08] -mt-4">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
