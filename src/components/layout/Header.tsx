"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-[3px] border-[#0A2A5E]">
      <div className="h-[78px] w-full px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* Desktop & Tablet: horizontal logo */}
          <Image
            src={siteConfig.logo.horizontal.gradient}
            alt="Vidhya Sri Ambulance"
            width={190}
            height={44}
            className="h-[44px] w-auto object-contain hidden sm:block"
            priority
            unoptimized
          />
          {/* Mobile: compact symbol */}
          <Image
            src={siteConfig.logo.symbol.gradient}
            alt="Vidhya Sri Ambulance"
            width={48}
            height={44}
            className="h-[40px] w-auto object-contain sm:hidden"
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-extrabold uppercase tracking-[.09em] text-[#0A2A5E] py-1 border-b-[3px] border-transparent hover:border-[#1565D8] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: CTAs ── */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* WhatsApp CTA */}
          <a
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[12px] font-extrabold uppercase tracking-wider rounded-[4px] shadow-[3px_3px_0_#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0A2A5E] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            <span className="w-[9px] h-[9px] rounded-full bg-[#25D366] animate-pulse" />
            WhatsApp
          </a>

          {/* Call CTA */}
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[12px] sm:text-[12.5px] font-extrabold uppercase tracking-wider rounded-[4px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            <span
              className="material-symbols-outlined text-[19px] leading-none"
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
            className="lg:hidden w-[44px] h-[44px] flex items-center justify-center border-[3px] border-[#0A2A5E] bg-white text-[#0A2A5E] shadow-[4px_4px_0_#0A2A5E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#0A2A5E] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className="material-symbols-outlined text-[24px]"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[13px] font-black uppercase tracking-wider text-[#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-1 transition-all border-b-2 border-[#0A2A5E]/10 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
