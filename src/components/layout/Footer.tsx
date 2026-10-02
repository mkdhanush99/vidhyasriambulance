import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

const coverageAreas = [
  "Banjara Hills",
  "Jubilee Hills",
  "Hitec City",
  "Gachibowli",
  "Somajiguda",
  "Secunderabad",
  "Kondapur",
  "Kukatpally",
  "Begumpet",
  "Mehdipatnam",
  "LB Nagar",
  "Madhapur",
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Care, moving forward.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-black uppercase text-white/60">
              Hyderabad Fleet:
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 text-warm-yellow text-[11px] font-black uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dispatch Ready 24×7
            </span>
          </div>
        </div>

        {/* ── Links Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Services */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Services
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              {services.slice(0, 6).map((service) => (
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

          {/* Coverage */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Coverage Hubs
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              {coverageAreas.slice(0, 6).map((area) => (
                <li key={area}>
                  <Link
                    href={`/coverage/${area.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
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

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow border-b border-white/15 pb-2">
              Contact & Emergency
            </span>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-white/75">
              <li className="font-bold text-white">
                Emergency: {siteConfig.phone.display}
              </li>
              <li>WhatsApp: {siteConfig.whatsapp.display}</li>
              <li>Corporate: {siteConfig.email}</li>
              <li>{siteConfig.address.full}</li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Hyderabad Central Dispatch Active · 24×7 Operational</span>
          </div>
          <span>
            © {new Date().getFullYear()} {siteConfig.companyLegalName}. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
