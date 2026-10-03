"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { CommandSearch } from "@/components/ui/CommandSearch";
import { AmbulanceFinder } from "@/components/ui/AmbulanceFinder";
import { AmbulanceBookingFlow } from "@/components/ui/AmbulanceBookingFlow";

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

  function handleOpenBooking(slug?: string) {
    setBookingServiceSlug(slug);
    setFinderOpen(false);
    setBookingOpen(true);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-[3px] border-[#0A2A5E]">
        <div className="h-[78px] w-full px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0" aria-label="Vidhya Sri Ambulance Home">
            <Image
              src={siteConfig.logo.horizontal.gradient}
              alt="Vidhya Sri Ambulance"
              width={190}
              height={44}
              className="h-[36px] sm:h-[44px] w-auto max-w-[155px] xs:max-w-[180px] sm:max-w-none object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-extrabold uppercase tracking-[.09em] text-[#0A2A5E] py-1 border-b-[3px] border-transparent hover:border-[#1565D8] transition-all"
              >
                {link.label}
              </Link>
            ))}

            {/* Decision Helper button */}
            <button
              type="button"
              onClick={() => setFinderOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[11px] font-black uppercase tracking-wider rounded-[3px] hover:bg-[#1565D8] hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">help</span>
              Find Ambulance
            </button>

            {/* Search Trigger */}
            <button
              id="search-trigger-btn"
              type="button"
              onClick={() => setSearchOpen(true)}
              data-cursor="search"
              aria-label="Search services and locations"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[#536B86] hover:text-[#0A2A5E] border border-[#DDE7F2] hover:border-[#0A2A5E] rounded-[3px] bg-[#F8FAFD] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">search</span>
              <kbd className="text-[10px] font-black uppercase tracking-wider text-[#536B86] bg-white px-1.5 py-0.5 border border-[#DDE7F2] rounded-[2px]">
                ⌘K
              </kbd>
            </button>
          </nav>

          {/* ── Right: CTAs ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="lg:hidden w-[40px] h-[40px] flex items-center justify-center border-2 border-[#DDE7F2] bg-[#F8FAFD] text-[#0A2A5E] rounded-[4px] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[11.5px] font-extrabold uppercase tracking-wider rounded-[4px] shadow-[3px_3px_0_#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0A2A5E] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
            >
              <span className="w-[8px] h-[8px] rounded-full bg-[#25D366] animate-pulse" />
              WhatsApp
            </a>

            {/* Call CTA */}
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[11.5px] sm:text-[12.5px] font-extrabold uppercase tracking-wider rounded-[4px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
            >
              <span
                className="material-symbols-outlined text-[18px] leading-none"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                call
              </span>
              <span className="hidden sm:inline">CALL 24×7 · {siteConfig.phone.display}</span>
              <span className="sm:hidden">CALL 24×7</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-[40px] h-[40px] flex items-center justify-center border-[3px] border-[#0A2A5E] bg-white text-[#0A2A5E] shadow-[3px_3px_0_#0A2A5E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#0A2A5E] transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mobile Navigation Drawer ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t-[3px] border-[#0A2A5E] shadow-[0_8px_0_#0A2A5E]">
            <nav className="flex flex-col px-5 py-4 gap-1">
              {/* Find Ambulance quick action in mobile menu */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setFinderOpen(true);
                }}
                className="py-3 px-3 text-[13px] font-black uppercase tracking-wider text-[#1565D8] bg-[#EAF2FC] border border-[#1565D8]/20 flex items-center justify-between rounded-[3px] mb-2"
              >
                <span>Find Right Ambulance</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 text-[13px] font-black uppercase tracking-wider text-[#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-1 transition-all border-b border-[#DDE7F2] last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── Global Command / Search Modal ── */}
      <CommandSearch
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* ── Global "Find the Right Ambulance" Modal ── */}
      {finderOpen && (
        <div
          className="fixed inset-0 z-[115] flex items-center justify-center p-4 bg-[#0A2A5E]/75 backdrop-blur-xs anim-fade-in"
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

      {/* ── Global "Request Ambulance Transfer" Booking Modal ── */}
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
