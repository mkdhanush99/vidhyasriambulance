"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroSpatialStageProps {
  src: string;
  alt: string;
  badge?: string;
  caption?: string;
  captionLocation?: string;
  priority?: boolean;
  objectPosition?: string;
}

export function HeroSpatialStage({
  src,
  alt,
  badge = "HYDERABAD 24×7 ALS FLEET",
  caption = "Somajiguda Central Hub",
  captionLocation = "Greater Hyderabad",
  priority = true,
  objectPosition = "center 65%",
}: HeroSpatialStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      if (!containerRef.current) return;
      // Only track fine pointer (mouse), not touch screens to avoid scrolling interference
      if (e.pointerType !== "mouse") return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Restrained tilt: max 4.5 degrees for calm editorial stability
      setRotate({
        x: -y * 8.5,
        y: x * 8.5,
      });
    },
    [prefersReducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative w-full perspective-1200 cursor-default select-none py-4 px-2"
    >
      {/* ── 3D Stage Container ── */}
      <div
        className="relative w-full preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* ── Layer 0: Spatial Atmospheric Depth Grid (translateZ: -16px) ── */}
        <div
          className="absolute -inset-6 sm:-inset-10 pointer-events-none rounded-[12px] opacity-75 hidden sm:block"
          style={{ transform: "translateZ(-16px)" }}
          aria-hidden="true"
        >
          {/* Subtle medical coordinate lines */}
          <svg
            className="w-full h-full text-[#1565D8]/10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <pattern
                id="hero-spatial-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-spatial-grid)" />
          </svg>

          {/* Concentric radar pulse indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#1565D8]/15 anim-radar-pulse" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#1565D8]/10 anim-radar-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* ── Layer 1: Clinic Mist Offset Backing Plane (translateZ: 8px) ── */}
        <div
          className="absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-5 sm:translate-y-5 rounded-[4px] border-[3px] border-[#0A2A5E] bg-[#EAF2FC] transition-transform duration-300 ease-out"
          style={{
            transform: isHovered && !prefersReducedMotion
              ? "translateZ(12px) translate(18px, 18px)"
              : "translateZ(8px) translate(14px, 14px)",
          }}
          aria-hidden="true"
        />

        {/* ── Layer 2: Elevated Editorial White Frame (translateZ: 26px) ── */}
        <div
          className="relative bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-2.5 sm:p-3 shadow-spatial-lg transition-transform duration-300 ease-out"
          style={{
            transform: "translateZ(26px)",
          }}
        >
          {/* Main Ambulance Image Window */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden border-2 border-[#0A2A5E] rounded-[2px] bg-[#F8FAFD]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 44vw"
              style={{ objectFit: "cover", objectPosition }}
              className="transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Inset Badge */}
            {badge && (
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A2A5E] border-2 border-white text-white text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_#0A2A5E]">
                <span className="w-2 h-2 rounded-full bg-[#0F8F5F] animate-pulse" />
                {badge}
              </div>
            )}

            {/* Subtle light reflex gradient across the glass */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60"
              aria-hidden="true"
            />
          </div>

          {/* Editorial Caption Bar */}
          <div className="mt-3 pt-2 border-t-2 border-[#DDE7F2] flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-wider text-[#0A2A5E]">
            <div className="flex items-center gap-2 truncate">
              <span className="material-symbols-outlined text-[16px] text-[#1565D8]">
                emergency
              </span>
              <span className="truncate">{caption}</span>
            </div>
            {captionLocation && (
              <span className="shrink-0 text-[#1565D8] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {captionLocation}
              </span>
            )}
          </div>
        </div>

        {/* ── Layer 3: Floating Spatial Information Chips (translateZ: 46px) ── */}
        {/* Top-Right Floating Chip: 24/7 Somajiguda Hub */}
        <div
          className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[10.5px] font-black uppercase tracking-wider rounded-[3px] shadow-[4px_4px_0_#DDE7F2] transition-transform duration-300"
          style={{ transform: "translateZ(46px)" }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0F8F5F] animate-pulse" />
          <span>Somajiguda Node · 24×7 Live</span>
        </div>

        {/* Bottom-Left Floating Chip: ICU & Paramedic Crew Onboard */}
        <div
          className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#EAF2FC] border-2 border-[#0A2A5E] text-[#0A2A5E] text-[10.5px] font-black uppercase tracking-wider rounded-[3px] shadow-[4px_4px_0_#DDE7F2] transition-transform duration-300"
          style={{ transform: "translateZ(48px)" }}
        >
          <span className="material-symbols-outlined text-[16px] text-[#1565D8]">
            vital_signs
          </span>
          <span>ICU Life Support Onboard</span>
        </div>
      </div>
    </div>
  );
}
