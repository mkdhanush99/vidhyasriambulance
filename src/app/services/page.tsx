import Link from "next/link";
import type { Metadata } from "next";
import { services, ServiceData } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ambulance Services in Hyderabad",
  description:
    "Choose the ambulance service based on patient transport requirements. Emergency ALS, ICU, ventilator, patient transfer, neonatal, outstation, and specialized transport.",
  alternates: {
    canonical: `${siteConfig.seo.url}/services`,
  },
};

const categories = [
  {
    name: "EMERGENCY & CRITICAL CARE",
    description: "Urgent medical transportation, trauma dispatch, and intensive life support in transit.",
    badgeBg: "bg-coral",
  },
  {
    name: "PATIENT TRANSPORT",
    description: "Planned patient transfers, respiratory oxygen support, and specialized neonatal care journeys.",
    badgeBg: "bg-warm-yellow",
  },
  {
    name: "SPECIALIZED & PLANNED TRANSPORT",
    description: "Long-distance interstate journeys, event standby positioning, corporate workplace coverage, and mortuary transport.",
    badgeBg: "bg-lavender",
  },
] as const;

const accentBgMap: Record<string, string> = {
  coral: "bg-coral-light",
  lavender: "bg-lavender-light",
  peach: "bg-peach-light",
  aqua: "bg-clinic-mist",
  warmYellow: "bg-warm-yellow-light",
  mint: "bg-mint-light",
  softGreen: "bg-mint-light",
  purple: "bg-lavender-light",
  mist: "bg-clinic-mist",
};

const accentBorderMap: Record<string, string> = {
  coral: "border-coral",
  lavender: "border-lavender",
  peach: "border-peach",
  aqua: "border-aqua",
  warmYellow: "border-warm-yellow",
  mint: "border-mint",
  softGreen: "border-soft-green",
  purple: "border-purple-accent",
  mist: "border-clinic-mist",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-4">
            Service Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            Ambulance Services
          </h1>
          <p className="mt-3 text-base sm:text-lg font-medium text-white/85 max-w-2xl leading-relaxed">
            Choose the ambulance service based on the patient&apos;s transport requirements and the nature of the journey.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Categorized Services ── */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.name);
            return (
              <div key={cat.name} className="space-y-6">
                {/* Category Header */}
                <div className="border-b-2 border-navy/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 ${cat.badgeBg} border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-2 shadow-brutal-sm`}
                    >
                      Category
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
                      {cat.name}
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-navy/60 max-w-md">
                    {cat.description}
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catServices.map((service: ServiceData) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`group flex flex-col p-6 border-2 border-navy ${accentBgMap[service.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all duration-200`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center justify-center w-10 h-10 border-2 border-navy ${accentBorderMap[service.accent] || "border-clinic-mist"} bg-white`}
                        >
                          <span className="material-symbols-outlined text-[20px] text-navy">
                            {service.icon}
                          </span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                          {service.name}
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2 group-hover:text-care-blue transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-[13px] font-medium text-navy/65 leading-relaxed flex-1">
                        {service.shortDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {service.features.slice(0, 2).map((f) => (
                          <span
                            key={f}
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border border-navy/20 text-navy/60"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 text-navy/60 group-hover:text-care-blue transition-colors">
                        <span className="text-[11px] font-bold uppercase tracking-wide">
                          {service.cardAnchor}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Need Dispatch Assistance?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Contact our 24×7 coordination helpline to confirm the right ambulance category for your patient.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-gray-50 transition-all shadow-brutal-navy shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
