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
    <footer className="w-full bg-[#0A2A5E] text-white border-t-[4px] border-[#1565D8] pt-16 pb-12 sm:pt-20 sm:pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Top Statement & Contact Callout ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b-[3px] border-[#1565D8]">
          <div className="max-w-2xl">
            {/* Official reverse logo for dark background */}
            <Image
              src={siteConfig.logo.horizontal.reverse}
              alt="Vidhya Sri Ambulance"
              width={195}
              height={46}
              className="h-[46px] w-auto object-contain self-start"
              unoptimized
            />
            <h2 className="text-[clamp(34px,5.5vw,60px)] font-extrabold uppercase tracking-tight text-white mt-5 leading-[0.95]">
              Care, moving <span className="text-[#38A3F7]">forward.</span>
            </h2>
          </div>

          {/* Contact Box */}
          <div className="p-5 sm:p-6 border-[3px] border-white shadow-[6px_6px_0_#1565D8] bg-[#0A2A5E] min-w-[280px] max-w-[340px]">
            <div className="text-[10.5px] font-extrabold tracking-[.16em] uppercase text-[#38A3F7] flex items-center gap-2">
              <span className="w-[9px] h-[9px] rounded-full bg-[#38A3F7] inline-block animate-pulse" />
              Dispatch ready 24×7
            </div>
            <a
              href={siteConfig.phone.href}
              className="block mt-2.5 text-[22px] sm:text-[24px] font-black tracking-tight text-white hover:text-[#38A3F7] transition-colors"
            >
              {siteConfig.phone.display}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block mt-1 text-[13px] font-semibold text-white/90 hover:text-[#38A3F7] transition-colors break-all"
            >
              {siteConfig.email}
            </a>
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
