"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { trackConversion } from "@/lib/tracking";

// Lazy load overlay modals on demand (zero impact on initial layout bundle)
const CommandSearch = dynamic(
  () => import("@/components/ui/CommandSearch").then((m) => m.CommandSearch),
  { ssr: false }
);

const AmbulanceFinder = dynamic(
  () => import("@/components/ui/AmbulanceFinder").then((m) => m.AmbulanceFinder),
  { ssr: false }
);

const AmbulanceBookingFlow = dynamic(
  () => import("@/components/ui/AmbulanceBookingFlow").then((m) => m.AmbulanceBookingFlow),
  { ssr: false }
);

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [finderOpen, setFinderOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingServiceSlug, setBookingServiceSlug] = useState<string | undefined>();

  const handleOpenBooking = (slug?: string) => {
    setFinderOpen(false);
    setBookingServiceSlug(slug);
    setBookingOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#0A2A5E] shadow-[0_2px_10px_rgba(10,42,94,0.06)]">
        {/* Top Emergency Ticker */}
        <div className="bg-[#0A2A5E] text-white px-4 py-1 text-center text-[10.5px] sm:text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 select-none">
          <span className="w-2 h-2 rounded-full bg-[#0F8F5F] animate-pulse" />
          <span>24/7 AMBULANCE HELPLINE:</span>
          <a
            href={siteConfig.phone.href}
            onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Header Ticker Call" })}
            className="text-white font-extrabold hover:underline tracking-normal ml-1"
          >
            {siteConfig.phone.display}
          </a>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="hidden sm:inline text-white/80 font-bold">
            SOMAJIGUDA, HYDERABAD
          </span>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* LEFT GROUP: Logo + Desktop Navigation Links on a clean, single baseline */}
          <div className="flex items-center gap-6 xl:gap-8 min-w-0">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 select-none group focus:outline-none focus:ring-2 focus:ring-[#1565D8] rounded-[2px]"
            >
              <Image
                src={siteConfig.logo.horizontal.gradient}
                alt="Vidhya Sri Ambulance"
                width={200}
                height={46}
                priority
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links — docked to left next to logo */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-extrabold uppercase tracking-[.08em] text-[#0A2A5E]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-[#0A2A5E] hover:text-[#1565D8] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1565D8] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT GROUP: Search + WhatsApp + Primary Emergency Call Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Command Search Trigger (Clean, single-line desktop placement) */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-[#F8FAFD] hover:bg-[#EAF2FC] border-2 border-[#DDE7F2] hover:border-[#1565D8] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] transition-all cursor-pointer select-none"
              aria-label="Search services and coverage (Press Cmd+K)"
            >
              <span className="material-symbols-outlined text-[17px] text-[#1565D8]">
                search
              </span>
              <span>Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9.5px] font-mono font-bold bg-white border border-[#DDE7F2] text-[#536B86] rounded-[2px]">
                ⌘K
              </kbd>
            </button>

            {/* WhatsApp Quick Link */}
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp_click", { serviceCategory: "Header WhatsApp" })}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#EAF2FC] border-2 border-[#0A2A5E] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[2px_2px_0_#0A2A5E] transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Emergency Call Button */}
            <a
              href={siteConfig.phone.href}
              onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Header Primary Call" })}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#1565D8] hover:bg-[#0B3F9E] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span
                className="material-symbols-outlined text-[18px] text-white"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                call
              </span>
              <span className="hidden sm:inline">Call 24/7</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A2A5E] hover:bg-[#EAF2FC] rounded-[3px] border border-[#DDE7F2] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl block">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t-2 border-[#0A2A5E] px-4 py-4 space-y-3 shadow-lg anim-fade-in">
            <div className="flex flex-col gap-2 font-bold text-sm text-[#0A2A5E] uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 hover:bg-[#EAF2FC] rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#DDE7F2] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1565D8]">
                  search
                </span>
                Search Services &amp; Localities
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setFinderOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#EAF2FC] border-2 border-[#1565D8] text-[#1565D8] text-xs font-black uppercase tracking-wider rounded-[3px]"
              >
                <span className="material-symbols-outlined text-[18px]">
                  directions_car
                </span>
                Find Recommended Ambulance
              </button>

              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp_click", { serviceCategory: "Mobile Menu WhatsApp" })}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px]"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                WhatsApp Assistance
              </a>

              <a
                href={siteConfig.phone.href}
                onClick={() => trackConversion("ambulance_call_click", { serviceCategory: "Mobile Menu Call" })}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[2px_2px_0_#0A2A5E]"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call {siteConfig.phone.display}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Global Command / Search Palette Modal (Lazy Loaded) ── */}
      {searchOpen && (
        <CommandSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      )}

      {/* ── Global "Find My Ambulance" Recommendation Modal (Lazy Loaded) ── */}
      {finderOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
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
              onRequestBooking={(slug) => handleOpenBooking(slug)}
            />
          </div>
        </div>
      )}

      {/* ── Global "Request Ambulance Transfer" Booking Modal (Lazy Loaded) ── */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[115] flex items-center justify-center p-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
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
              initialServiceSlug={bookingServiceSlug}
              onClose={() => setBookingOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
