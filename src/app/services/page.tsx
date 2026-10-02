import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "All Ambulance Services",
  description:
    "Browse all 11 ambulance service types — ALS emergency, ICU, ventilator, neonatal, outstation, patient transfer, and more. Available 24×7 across Hyderabad.",
};

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            Our Fleet
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            Every Emergency,<br />
            <span className="text-warm-yellow">Covered.</span>
          </h1>
          <p className="mt-4 text-base font-medium text-white/75 max-w-xl">
            From critical ICU transfers to scheduled patient transport — our diversified fleet
            handles every medical mobility scenario across Hyderabad and Telangana.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* Services Grid */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col p-6 border-2 border-navy ${accentBgMap[service.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all duration-200`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 border-2 border-navy bg-white">
                    <span className="material-symbols-outlined text-[20px] text-navy">
                      {service.icon}
                    </span>
                  </span>
                </div>
                <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2 group-hover:text-care-blue transition-colors">
                  {service.name}
                </h2>
                <p className="text-[13px] font-medium text-navy/65 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white border border-navy/20 text-navy/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-navy/40 group-hover:text-care-blue transition-colors">
                  <span className="text-[11px] font-bold uppercase">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Need Help Choosing?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Call us and we&apos;ll dispatch the right ambulance type for your situation.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_white] shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call {siteConfig.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
