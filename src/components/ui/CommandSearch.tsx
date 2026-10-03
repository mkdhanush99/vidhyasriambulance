"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { localities } from "@/data/coverage";

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandSearch({ isOpen, onClose }: CommandSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Close on Escape or click outside
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Global Cmd+K / Ctrl+K shortcut listener
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open search (handled by parent state if wired, or custom event)
          const searchBtn = document.getElementById("search-trigger-btn");
          if (searchBtn) searchBtn.click();
        }
      }
    }
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [isOpen, onClose]);

  // Filtered results
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default: top popular services & top central localities
      const topServices = services.slice(0, 4).map((s) => ({
        type: "Service" as const,
        title: s.name,
        subtitle: s.shortDescription,
        href: `/services/${s.slug}`,
        icon: s.icon,
      }));
      const topLocalities = localities.slice(0, 4).map((l) => ({
        type: "Coverage Area" as const,
        title: l.name,
        subtitle: l.zone,
        href: `/coverage/${l.slug}`,
        icon: "location_on",
      }));
      return [...topServices, ...topLocalities];
    }

    const matchedServices = services
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q) ||
          s.features.some((f) => f.toLowerCase().includes(q))
      )
      .map((s) => ({
        type: "Service" as const,
        title: s.name,
        subtitle: s.shortDescription,
        href: `/services/${s.slug}`,
        icon: s.icon,
      }));

    const matchedLocalities = localities
      .filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.zone.toLowerCase().includes(q) ||
          l.landmarkCorridors.some((c) => c.toLowerCase().includes(q))
      )
      .map((l) => ({
        type: "Coverage Area" as const,
        title: l.name,
        subtitle: `${l.zone} · Hyderabad`,
        href: `/coverage/${l.slug}`,
        icon: "location_on",
      }));

    return [...matchedServices, ...matchedLocalities].slice(0, 8);
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Keyboard navigation within search results
  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredResults.length - 1
      );
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      e.preventDefault();
      window.location.href = filteredResults[selectedIndex].href;
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Search services and locations"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-white border-[3px] border-[#0A2A5E] shadow-[8px_8px_0_#0A2A5E] rounded-[4px] overflow-hidden z-10 anim-modal-in">
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b-2 border-[#DDE7F2] bg-[#F8FAFD]">
          <span className="material-symbols-outlined text-[22px] text-[#1565D8] mr-3 shrink-0">
            search
          </span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search ambulances, ICU, Banjara Hills, Outstation..."
            className="w-full bg-transparent text-sm sm:text-base text-[#0A2A5E] font-medium outline-none placeholder:text-[#536B86]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs font-bold text-[#536B86] hover:text-[#0A2A5E] px-2 py-1"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase text-[#536B86] bg-white border border-[#DDE7F2] rounded-[3px]">
              ESC
            </kbd>
          )}
        </div>

        {/* Results list */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filteredResults.length > 0 ? (
            <ul className="space-y-1">
              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <li key={`${item.type}-${item.href}`}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-3 rounded-[3px] transition-all ${
                        isSelected
                          ? "bg-[#1565D8] text-white"
                          : "hover:bg-[#EAF2FC] text-[#0A2A5E]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`material-symbols-outlined text-[20px] ${
                            isSelected ? "text-white" : "text-[#1565D8]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <div>
                          <span
                            className={`text-xs sm:text-[13px] font-extrabold uppercase block leading-tight ${
                              isSelected ? "text-white" : "text-[#0A2A5E]"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`text-[11px] block mt-0.5 line-clamp-1 ${
                              isSelected ? "text-white/80" : "text-[#536B86]"
                            }`}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-[2px] shrink-0 ml-2 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[#EAF2FC] text-[#1565D8] border border-[#1565D8]/20"
                        }`}
                      >
                        {item.type}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-8 text-center text-xs text-[#536B86]">
              No services or coverage areas found for &ldquo;{query}&rdquo;.
              <div className="mt-2 text-[11px] font-bold text-[#1565D8]">
                Try &ldquo;ICU&rdquo;, &ldquo;Oxygen&rdquo;, &ldquo;Banjara Hills&rdquo;, or &ldquo;Outstation&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-[#F8FAFD] border-t border-[#DDE7F2] flex items-center justify-between text-[11px] text-[#536B86]">
          <span>Navigate with ↑ / ↓, select with Enter</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#0A2A5E] font-bold hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
