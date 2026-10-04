import { CookiePreferencesButton } from "@/components/ui/CookiePreferencesButton";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

const coverageAreas = [
  { name: "Hyderabad Central", slug: "hyderabad" },
  { name: "Somajiguda", slug: "somajiguda" },
  { name: "Banjara Hills", slug: "banjara-hills" },
  { name: "Jubilee Hills", slug: "jubilee-hills" },
  { name: "Punjagutta", slug: "punjagutta" },
  { name: "Begumpet", slug: "begumpet" },
  { name: "Secunderabad", slug: "secunderabad" },
  { name: "Madhapur", slug: "madhapur" },
  { name: "Hitech City", slug: "hitech-city" },
  { name: "Gachibowli", slug: "gachibowli" },
  { name: "Kondapur", slug: "kondapur" },
  { name: "Kukatpally", slug: "kukatpally" },
  { name: "Mehdipatnam", slug: "mehdipatnam" },
  { name: "LB Nagar", slug: "lb-nagar" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0A2A5E] text-white border-t-[4px] border-[#1565D8] pt-16 pb-12 sm:pt-24 sm:pb-16 relative overflow-hidden">
      {/* Background subtle geometric watermark */}
      <div
        className="absolute top-0 right-0 pointer-events-none select-none text-[clamp(140px,25vw,320px)] font-black text-white/[0.02] leading-none z-0"
        aria-hidden="true"
      >
        VSA
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* ── Signature Visual Closing Statement (§13) ── */}
        <div className="pb-16 border-b-[3px] border-[#1565D8]/40">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 border border-white/20 text-[#38A3F7] text-[10px] font-black uppercase tracking-[0.2em] rounded-[2px] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                24×7 HYDERABAD CONTROL ROOM ACTIVE
              </div>

              {/* Official reverse logo for dark background */}
              <div className="mb-6">
                <Image
                  src={siteConfig.logo.horizontal.reverse}
                  alt="Vidhya Sri Ambulance"
                  width={210}
                  height={50}
                  className="h-[46px] w-auto object-contain"
                  unoptimized
                />
              </div>

              {/* Strong Typographic Closing Statement */}
              <h2 className="text-[clamp(40px,6.5vw,76px)] font-black uppercase tracking-tight text-white leading-[0.92]">
                CARE
                <br />
                MOVING
                <br />
                <span className="text-[#38A3F7]">FORWARD.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/80 font-medium max-w-xl leading-relaxed">
                Emergency Advanced Life Support, Mobile ICU, and scheduled medical transit across Somajiguda, Hyderabad, and Interstate corridors.
              </p>
            </div>

            {/* Signature Primary CTA Box */}
            <div className="p-6 sm:p-8 border-[3px] border-white shadow-[6px_6px_0_#1565D8] bg-[#061A3D] min-w-[300px] max-w-[380px] flex flex-col justify-between">
              <div>
                <div className="text-[10.5px] font-extrabold tracking-[.18em] uppercase text-[#38A3F7] flex items-center gap-2">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#38A3F7] inline-block animate-pulse" />
                  Direct Control Room
                </div>
                <a
                  href={siteConfig.phone.href}
                  className="block mt-3 text-[24px] sm:text-[28px] font-black tracking-tight text-white hover:text-[#38A3F7] transition-colors leading-none"
                >
                  {siteConfig.phone.display}
                </a>
                <p className="text-xs text-white/70 mt-2 font-medium">
                  Continuous 24-hour immediate ambulance dispatch and coordinate assistance.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/20 flex flex-col gap-2.5">
                <a
                  href={siteConfig.phone.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#1565D8] text-white border-2 border-white text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_white] hover:bg-[#38A3F7] hover:text-[#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call Ambulance Now
                </a>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white text-[#0A2A5E] border-2 border-white text-xs font-black uppercase tracking-wider rounded-[3px] hover:bg-[#EAF2FC] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Links Grid: 5 Categories ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 py-12">
          {/* 1. Services */}
          <div>
            <div className="inline-block text-[11px] font-black uppercase tracking-[.16em] text-[#0A2A5E] bg-[#EAF2FC] px-2.5 py-1 mb-4">
              Services
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px] font-bold text-white">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#38A3F7] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Coverage */}
          <div>
            <div className="inline-block text-[11px] font-black uppercase tracking-[.16em] text-[#0A2A5E] bg-[#EAF2FC] px-2.5 py-1 mb-4">
              Coverage
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px] font-bold text-white">
              {coverageAreas.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/coverage/${area.slug}`}
                    className="hover:text-[#38A3F7] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/coverage"
                  className="text-[#38A3F7] hover:underline mt-1 block font-extrabold"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <div className="inline-block text-[11px] font-black uppercase tracking-[.16em] text-[#0A2A5E] bg-[#EAF2FC] px-2.5 py-1 mb-4">
              Company
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px] font-bold text-white">
              <li>
                <Link href="/about" className="hover:text-[#38A3F7] transition-colors">
                  About Vidhya Sri
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#38A3F7] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#38A3F7] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/customer-enquiry" className="text-[#38A3F7] hover:underline font-extrabold">
                  🚑 Customer Enquiry
                </Link>
              </li>
              <li>
                <Link href="/business-enquiry" className="text-[#38A3F7] hover:underline font-extrabold">
                  🏢 Business Tie-Ups
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#38A3F7] transition-colors">
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <div className="inline-block text-[11px] font-black uppercase tracking-[.16em] text-[#0A2A5E] bg-[#EAF2FC] px-2.5 py-1 mb-4">
              Contact
            </div>
            <ul className="flex flex-col gap-3 text-[14px] font-bold text-white">
              <li>
                <span className="text-[10px] uppercase text-[#38A3F7] block font-black tracking-wider">
                  24×7 Phone
                </span>
                <a href={siteConfig.phone.href} className="hover:text-[#38A3F7] font-extrabold">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-[#38A3F7] block font-black tracking-wider">
                  WhatsApp
                </span>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38A3F7]"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-[#38A3F7] block font-black tracking-wider">
                  Control Room
                </span>
                <span className="text-white/90 text-xs font-semibold leading-relaxed block">
                  Somajiguda, Hyderabad, Telangana 500082
                </span>
              </li>
            </ul>
          </div>

          {/* 5. Legal */}
          <div>
            <div className="inline-block text-[11px] font-black uppercase tracking-[.16em] text-[#0A2A5E] bg-[#EAF2FC] px-2.5 py-1 mb-4">
              Legal
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px] font-bold text-white">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#38A3F7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#38A3F7] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund" className="hover:text-[#38A3F7] transition-colors">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <CookiePreferencesButton />
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-6 border-t-[3px] border-[#1565D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38A3F7] inline-block" />
            <span>Somajiguda, Hyderabad, Telangana 500082 · 24×7 Ambulance Network</span>
          </div>
          <span>
            © {new Date().getFullYear()} {siteConfig.companyLegalName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
