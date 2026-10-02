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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-navy/15">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* Desktop: horizontal gradient logo */}
          <Image
            src={siteConfig.logo.horizontal.gradient}
            alt="Vidhya Sri Ambulance"
            width={185}
            height={43}
            className="h-9 sm:h-10 w-auto object-contain hidden sm:block"
            priority
            unoptimized // SVG — no optimization needed
          />
          {/* Mobile: symbol only (compact) */}
          <Image
            src={siteConfig.logo.symbol.gradient}
            alt="Vidhya Sri Ambulance"
            width={48}
            height={43}
            className="h-9 w-auto object-contain sm:hidden"
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-bold uppercase tracking-wider text-navy/70 hover:text-navy transition-colors py-1"
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-mint border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-emerald-200 transition-all shadow-[2px_2px_0px_#0A2A5E] hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            WhatsApp ↗
          </a>

          {/* Call CTA */}
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-care-blue border-2 border-navy text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-brutal-navy hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="material-symbols-outlined text-[17px]">call</span>
            <span className="hidden sm:inline">CALL 24×7 · {siteConfig.phone.display}</span>
            <span className="sm:hidden">CALL 24×7</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-navy text-navy"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-navy/15 shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-[13px] font-bold uppercase tracking-wider text-navy hover:bg-clinic-mist transition-colors border-b border-navy/10 last:border-b-0"
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
