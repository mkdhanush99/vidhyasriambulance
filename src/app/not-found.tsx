import Link from "next/link";
import { siteConfig } from "@/data/site";
import { RouteMotif } from "@/components/ui/RouteMotif";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Visual Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF2FC] border border-[#1565D8]/20 text-[#1565D8] text-xs font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#1565D8] animate-pulse" />
          Error 404 • Destination Not Found
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A2A5E] tracking-tight font-display">
            Looking for Emergency Ambulance Help?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The page or route you requested is unavailable, but our 24/7 medical dispatch team is standing by across Greater Hyderabad.
          </p>
        </div>

        <RouteMotif variant="horizontal" originLabel="DISPATCH HUB" destinationLabel="DIRECT CARE" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={siteConfig.phone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1565D8] text-white font-bold text-base shadow-lg shadow-[#1565D8]/20 hover:bg-[#0B3F9E] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">phone_in_talk</span>
            <span>Emergency Call: {siteConfig.phone.display}</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-200 text-[#0A2A5E] font-bold text-base hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">home</span>
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Quick Nav Links */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-500">
          <Link href="/services" className="hover:text-[#1565D8] transition-colors">
            Ambulance Services
          </Link>
          <span>•</span>
          <Link href="/coverage" className="hover:text-[#1565D8] transition-colors">
            Coverage Localities
          </Link>
          <span>•</span>
          <Link href="/how-it-works" className="hover:text-[#1565D8] transition-colors">
            How Dispatch Works
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-[#1565D8] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
