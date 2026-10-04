import React from "react";

interface MetaLabelProps {
  category?: string;
  detail?: string;
  badge?: string;
  indicator?: "pulse" | "dot" | "none";
  indicatorColor?: "blue" | "green" | "red";
  theme?: "light" | "navy" | "mist";
  className?: string;
}

/**
 * MetaLabel
 * Micro-label system for technical editorial metadata:
 * Examples: `24×7 / HYDERABAD`, `EMERGENCY / DIRECT CALL`, `01 / AMBULANCE SERVICES`
 */
export function MetaLabel({
  category,
  detail,
  badge,
  indicator = "dot",
  indicatorColor = "blue",
  theme = "mist",
  className = "",
}: MetaLabelProps) {
  const themeClasses =
    theme === "navy"
      ? "bg-[#061A3D] border-[#1565D8]/40 text-[#38A3F7]"
      : theme === "light"
      ? "bg-white border-[#DDE7F2] text-[#0A2A5E]"
      : "bg-[#EAF2FC] border-[#1565D8]/25 text-[#1565D8]";

  const dotColorClass =
    indicatorColor === "green"
      ? "bg-[#25D366]"
      : indicatorColor === "red"
      ? "bg-[#D32F2F]"
      : "bg-[#1565D8]";

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 border text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.16em] rounded-[2px] select-none ${themeClasses} ${className}`}
    >
      {indicator === "pulse" && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass} animate-pulse`} />
      )}
      {indicator === "dot" && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`} />
      )}

      {badge && <span className="font-extrabold">{badge}</span>}

      {category && (
        <span className={theme === "navy" ? "text-white" : "text-[#0A2A5E]"}>
          {category}
        </span>
      )}

      {category && detail && (
        <span className="opacity-40 font-normal">/</span>
      )}

      {detail && (
        <span className={theme === "navy" ? "text-[#38A3F7]" : "text-[#1565D8]"}>
          {detail}
        </span>
      )}
    </div>
  );
}
