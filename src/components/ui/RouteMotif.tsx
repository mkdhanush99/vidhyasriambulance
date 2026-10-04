import React from "react";

interface RouteMotifProps {
  variant?: "horizontal" | "vertical" | "connector" | "corner" | "inline";
  originLabel?: string;
  destinationLabel?: string;
  className?: string;
  accentColor?: "careBlue" | "sky" | "navy";
}

/**
 * RouteMotif
 * Reusable visual motif: CARE → MOVEMENT → DESTINATION
 * Thin Vidhya-blue route line connecting headings, sections, or card waypoints.
 */
export function RouteMotif({
  variant = "horizontal",
  originLabel,
  destinationLabel,
  className = "",
  accentColor = "careBlue",
}: RouteMotifProps) {
  const strokeColor =
    accentColor === "sky"
      ? "#38A3F7"
      : accentColor === "navy"
      ? "#0A2A5E"
      : "#1565D8";

  // 1. INLINE: Beside headings or metadata
  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-2 align-middle ${className}`} aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: strokeColor }} />
        <span className="w-8 sm:w-12 h-[2px]" style={{ backgroundColor: strokeColor }} />
        <span className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: strokeColor }} />
      </span>
    );
  }

  // 2. CONNECTOR: Links a title to a card or action
  if (variant === "connector") {
    return (
      <div className={`flex items-center gap-2 select-none pointer-events-none ${className}`} aria-hidden="true">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: strokeColor }} />
        <span className="flex-1 h-[2px] border-t-2 border-dashed" style={{ borderColor: strokeColor }} />
        <span className="material-symbols-outlined text-[14px]" style={{ color: strokeColor }}>
          arrow_forward
        </span>
      </div>
    );
  }

  // 3. VERTICAL: Connecting sections or timeline steps
  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center select-none pointer-events-none ${className}`} aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: strokeColor }} />
        <span className="w-[2px] flex-1 min-h-[48px]" style={{ backgroundColor: strokeColor }} />
        <span className="w-2.5 h-2.5 border-2" style={{ borderColor: strokeColor }} />
      </div>
    );
  }

  // 4. CORNER: L-shaped framing accent
  if (variant === "corner") {
    return (
      <svg
        className={`w-8 h-8 pointer-events-none select-none ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 2H30V32" stroke={strokeColor} strokeWidth="2.5" />
        <circle cx="2" cy="2" r="2.5" fill={strokeColor} />
      </svg>
    );
  }

  // 5. HORIZONTAL (Default): Section divider or waypoint bar
  return (
    <div
      className={`w-full flex items-center gap-3 select-none pointer-events-none py-2 ${className}`}
      aria-hidden="true"
    >
      {originLabel && (
        <span className="text-[9.5px] font-black uppercase tracking-widest text-[#0A2A5E]">
          {originLabel}
        </span>
      )}
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: strokeColor }} />
      <span className="flex-1 h-[2px] relative" style={{ backgroundColor: `${strokeColor}33` }}>
        <span
          className="absolute left-0 top-0 bottom-0 w-1/3"
          style={{ backgroundColor: strokeColor }}
        />
      </span>
      <span className="w-2 h-2 rotate-45 border-2 shrink-0" style={{ borderColor: strokeColor }} />
      {destinationLabel && (
        <span className="text-[9.5px] font-black uppercase tracking-widest text-[#1565D8]">
          {destinationLabel}
        </span>
      )}
    </div>
  );
}
