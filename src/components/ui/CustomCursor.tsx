"use client";

import React, { useEffect, useRef, useState } from "react";

type HoverType = "default" | "link" | "button" | "primary" | "media" | "input";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<HoverType>("default");
  const [isPressed, setIsPressed] = useState(false);
  const [contextLabel, setContextLabel] = useState<string | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(-100);
  const targetY = useRef(-100);
  const currentX = useRef(-100);
  const currentY = useRef(-100);
  const hasMoved = useRef(false);
  const isReducedMotion = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Desktop & Fine Pointer Only: Check hardware capability
    const finePointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointerMedia.matches) {
      return; // Do not activate custom pointer on touch devices / phones
    }

    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    isReducedMotion.current = reducedMotionMedia.matches;

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    reducedMotionMedia.addEventListener("change", handleReducedMotionChange);

    setMounted(true);

    // 2. Element inspection helper for hover state
    const evaluateTarget = (target: HTMLElement | null) => {
      if (!target) {
        setHoverType("default");
        setContextLabel(null);
        return;
      }

      // Input elements: type text, textarea, contenteditable
      const inputEl = target.closest(
        'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]'
      );
      if (inputEl) {
        setHoverType("input");
        setContextLabel(null);
        return;
      }

      // Contextual label attribute
      const labelEl = target.closest("[data-cursor], [data-cursor-label]");
      const rawLabel =
        labelEl?.getAttribute("data-cursor-label") || labelEl?.getAttribute("data-cursor");
      const label = rawLabel && rawLabel !== "default" && rawLabel !== "pointer" ? rawLabel : null;
      setContextLabel(label);

      // Primary CTA detection (Emergency Call, WhatsApp, major action buttons)
      const isPrimary = Boolean(
        target.closest(
          '[data-cursor-primary], a[href^="tel:"], a[href*="wa.me"], button[type="submit"], .btn-tactile'
        ) ||
        (target.closest("button, a, [role='button']") &&
          target.closest(".bg-\\[\\#1565D8\\], .bg-\\[\\#D32F2F\\], .bg-\\[\\#0A2A5E\\]"))
      );

      if (isPrimary) {
        setHoverType("primary");
        return;
      }

      // Standard buttons & interactive triggers
      const isButton = Boolean(
        target.closest('button, [role="button"], summary, input[type="submit"], input[type="button"], .cursor-pointer')
      );
      if (isButton) {
        setHoverType("button");
        return;
      }

      // Standard links
      const isLink = Boolean(target.closest("a"));
      if (isLink) {
        setHoverType("link");
        return;
      }

      // Interactive image or media container
      if (label) {
        setHoverType("media");
        return;
      }

      setHoverType("default");
    };

    // 3. Pointer events handlers
    const handlePointerMove = (e: PointerEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        currentX.current = e.clientX;
        currentY.current = e.clientY;
        document.documentElement.classList.add("has-custom-cursor");
        setVisible(true);
      } else {
        setVisible(true);
      }

      evaluateTarget(e.target as HTMLElement | null);
    };

    const handlePointerDown = () => {
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handleWindowMouseLeave = (e: MouseEvent) => {
      // If mouse left the browser viewport
      if (!e.relatedTarget) {
        setVisible(false);
      }
    };

    const handleWindowMouseEnter = () => {
      if (hasMoved.current) {
        setVisible(true);
      }
    };

    const handleWindowBlur = () => {
      setVisible(false);
      setIsPressed(false);
    };

    const handleScroll = () => {
      if (hasMoved.current) {
        const elUnderCursor = document.elementFromPoint(
          targetX.current,
          targetY.current
        ) as HTMLElement | null;
        evaluateTarget(elUnderCursor);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleWindowMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleWindowMouseEnter);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. Smooth Animation Loop via requestAnimationFrame
    const render = () => {
      if (cursorRef.current && hasMoved.current) {
        if (isReducedMotion.current) {
          // Instant 1:1 hardware tracking for reduced-motion users
          currentX.current = targetX.current;
          currentY.current = targetY.current;
        } else {
          // Subtle, ultra-responsive interpolation (factor ~0.42)
          // Reaches target within 25ms, feeling analog & fluid without lag
          const dx = targetX.current - currentX.current;
          const dy = targetY.current - currentY.current;

          if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            currentX.current += dx * 0.42;
            currentY.current += dy * 0.42;
          } else {
            currentX.current = targetX.current;
            currentY.current = targetY.current;
          }
        }

        cursorRef.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      reducedMotionMedia.removeEventListener("change", handleReducedMotionChange);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", handleWindowMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleWindowMouseEnter);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("scroll", handleScroll);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!mounted) return null;

  // Scale calculations
  let scale = 1.0;
  if (hoverType === "link") scale = 1.08;
  else if (hoverType === "button") scale = 1.15;
  else if (hoverType === "primary") scale = 1.18;
  else if (hoverType === "media") scale = 1.14;

  if (isPressed) {
    scale *= 0.92;
  }

  // Fills & visual tones according to Vidhya Sri theme
  const isPrimary = hoverType === "primary";
  const isInteractive = hoverType === "link" || hoverType === "button" || isPrimary || hoverType === "media";

  // Left facet fill
  const leftFill = isPrimary ? "#1565D8" : isInteractive ? "#0B316D" : "#0A2A5E";
  // Right facet fill (subtle lighter facet echoing brand symbol geometry)
  const rightFill = isPrimary ? "#38A3F7" : isInteractive ? "#1565D8" : "#123A7A";

  // Hide custom cursor over editable text inputs so standard I-beam takes over
  const isInputState = hoverType === "input";
  const isVisibleFinal = visible && !isInputState;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
      style={{
        opacity: isVisibleFinal ? 1 : 0,
        transition: "opacity 160ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* 
        Pointer tip is anchored at exactly (0, 0).
        Transform origin (0, 0) ensures scaling never shifts the active tip off target.
      */}
      <div
        className="relative origin-top-left"
        style={{
          transform: `scale(${scale})`,
          transition: isReducedMotion.current
            ? "none"
            : isPressed
            ? "transform 80ms cubic-bezier(0.23, 1, 0.32, 1)"
            : "transform 140ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* SVG Arrow Geometry */}
        <svg
          width="24"
          height="33"
          viewBox="0 0 24 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          style={{
            filter: isPrimary
              ? "drop-shadow(0 3px 6px rgba(21, 101, 216, 0.4)) drop-shadow(0 1px 2px rgba(6, 26, 61, 0.3))"
              : "drop-shadow(0 2px 5px rgba(6, 26, 61, 0.32))",
          }}
        >
          {/* Left Facet */}
          <path
            d="M 0.5,0.5 L 0.5,23.5 L 6,18.5 L 10.5,28.5 L 12.5,27.5 L 8.5,17 Z"
            fill={leftFill}
            style={{ transition: "fill 180ms ease" }}
          />

          {/* Right Facet */}
          <path
            d="M 0.5,0.5 L 8.5,17 L 12.5,27.5 L 14.5,26.5 L 10.2,16 L 18,16 Z"
            fill={rightFill}
            style={{ transition: "fill 180ms ease" }}
          />

          {/* Outer Protective White Stroke (1.75px) for contrast across all backgrounds */}
          <path
            d="M 0.5,0.5 L 0.5,23.5 L 6,18.5 L 10.5,28.5 L 14.5,26.5 L 10.2,16 L 18,16 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.75"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Subtle Internal Ridge Line echoing Vidhya Sri logo chevron */}
          <path
            d="M 0.5,0.5 L 8.5,17 L 12.5,27.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>

        {/* Optional Contextual Label (Compact & Rectangular) */}
        {contextLabel && (
          <div
            className="absolute left-[20px] top-[18px] select-none whitespace-nowrap anim-fade-in"
            style={{
              transition: isReducedMotion.current
                ? "none"
                : "transform 140ms ease, opacity 140ms ease",
            }}
          >
            <span className="inline-flex items-center px-2 py-0.5 bg-[#0A2A5E] text-white text-[9.5px] font-black uppercase tracking-widest border border-white rounded-[2px] shadow-[2px_2px_0_#1565D8]">
              {contextLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
