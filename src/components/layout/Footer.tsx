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
    <footer className="w-full bg-navy text-white border-t-2 border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* ── Top: Logo + Statement ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
          <div className="flex flex-col gap-4">
            {/* Official reverse logo for dark background */}
            <Image
              src={siteConfig.logo.horizontal.reverse}
              alt="Vidhya Sri Ambulance"
              width={185}
              height={43}
              className="h-9 w-auto object-contain self-start"
              unoptimized
            />
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Care, moving when it matters.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 text-warm-yellow text-[11px] font-black uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24×7 Ambulance Helpline Active
            </span>
          </div>
        </div>

        {/* ── Links Grid: 5 Categories ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* 1. Services */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Services
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Coverage */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Coverage
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              {coverageAreas.slice(0, 10).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/coverage/${area.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/coverage"
                  className="text-warm-yellow hover:underline mt-1 block"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Company
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Vidhya Sri
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-white transition-colors">
                  Coverage Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Contact
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-white/75">
              <li>
                <span className="text-[10px] uppercase text-white/50 block font-bold">24×7 Phone</span>
                <a href={siteConfig.phone.href} className="text-white hover:underline font-bold">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-white/50 block font-bold">WhatsApp</span>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-white/50 block font-bold">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-white/50 block font-bold">Address</span>
                <span className="text-white/80 leading-relaxed block">
                  Somajiguda, Hyderabad, Telangana 500082
                </span>
              </li>
            </ul>
          </div>

          {/* 5. Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Legal
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund" className="hover:text-white transition-colors">
                  Cancellation & Refund
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>24×7 Medical Transportation Services · Hyderabad, Telangana</span>
          </div>
          <span>
            © {new Date().getFullYear()} {siteConfig.companyLegalName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
