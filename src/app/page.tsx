import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

// ═══════════════════════════════════════════════
// SECTION — HERO
// ═══════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-brand-gradient opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-white">
              Dispatch Active · Hyderabad
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
            Care, Moving<br />
            When It{" "}
            <span className="text-warm-yellow">Matters.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-white/80 max-w-xl leading-relaxed">
            24×7 emergency ambulance and advanced patient transportation across
            Hyderabad and Telangana. ICU ambulance, ventilator support, neonatal
            transport, and bed-to-bed clinical continuity.
          </p>

          {/* CTA pair */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.3)]"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/10 border-2 border-white text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge — editorial line */}
      <div className="relative z-10 h-2 bg-warm-yellow" />
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — SERVICES GRID
// ═══════════════════════════════════════════════
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

function ServicesSection() {
  return (
    <section className="w-full bg-paper py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Our Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Every Emergency,{" "}
              <span className="text-brand-gradient">Covered.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[12px] font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors self-start sm:self-auto"
          >
            View All Services →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group flex flex-col p-6 border-2 border-navy ${accentBgMap[service.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all duration-200`}
            >
              {/* Icon + Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 border-2 border-navy ${accentBorderMap[service.accent] || "border-clinic-mist"} bg-white`}
                >
                  <span className="material-symbols-outlined text-[20px] text-navy">
                    {service.icon}
                  </span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                  {service.slug
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2 group-hover:text-care-blue transition-colors">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-[13px] font-medium text-navy/65 leading-relaxed flex-1">
                {service.shortDescription}
              </p>

              {/* Arrow */}
              <div className="mt-4 text-navy/40 group-hover:text-care-blue transition-colors">
                <span className="text-[11px] font-bold uppercase">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — HOW IT WORKS
// ═══════════════════════════════════════════════
const steps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    description:
      "Reach us instantly through our emergency hotline or WhatsApp — we pick up within seconds.",
    color: "bg-coral",
  },
  {
    step: "02",
    title: "Share Location",
    description:
      "Drop a pin or describe your location. Our dispatch system locates the nearest available fleet unit.",
    color: "bg-warm-yellow",
  },
  {
    step: "03",
    title: "Ambulance En Route",
    description:
      "A fully-equipped ambulance with trained crew is dispatched immediately to your coordinates.",
    color: "bg-response-sky",
  },
  {
    step: "04",
    title: "Care In Transit",
    description:
      "Continuous clinical monitoring during transport with live hospital coordination for seamless handoff.",
    color: "bg-mint",
  },
];

function HowItWorksSection() {
  return (
    <section className="w-full bg-clinic-mist py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
            From Call to Care
            <br />
            In{" "}
            <span className="text-brand-gradient">Four Steps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col bg-white border-2 border-navy p-6 shadow-brutal-navy hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy-lg transition-all duration-200"
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 ${step.color} border-2 border-navy text-navy text-lg font-extrabold mb-4`}
              >
                {step.step}
              </span>
              <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] font-medium text-navy/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — TRUST / STATS
// ═══════════════════════════════════════════════
const stats = [
  { value: "24×7", label: "Emergency Availability", icon: "schedule" },
  { value: "11+", label: "Ambulance Types", icon: "local_shipping" },
  { value: "All India", label: "Outstation Coverage", icon: "map" },
  { value: "ICU Grade", label: "Equipment Standard", icon: "health_and_safety" },
];

function StatsSection() {
  return (
    <section className="w-full bg-navy py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-2 py-6 px-4 border border-white/15"
            >
              <span className="material-symbols-outlined text-[28px] text-warm-yellow mb-1">
                {stat.icon}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — EMERGENCY CTA BANNER
// ═══════════════════════════════════════════════
function EmergencyCTA() {
  return (
    <section className="w-full bg-coral py-16 sm:py-20 border-y-2 border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
            Need An Ambulance{" "}
            <span className="underline decoration-navy decoration-4 underline-offset-4">
              Right Now?
            </span>
          </h2>
          <p className="mt-3 text-base font-semibold text-navy/80">
            Don&apos;t wait. Our fleet is standing by across Hyderabad.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_white]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call {siteConfig.phone.display}
          </a>
          <a
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-white border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-gray-50 transition-all shadow-brutal-navy hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — COVERAGE STRIP
// ═══════════════════════════════════════════════
const areas = [
  "Banjara Hills",
  "Jubilee Hills",
  "Hitec City",
  "Gachibowli",
  "Secunderabad",
  "Kondapur",
  "Kukatpally",
  "Begumpet",
  "Mehdipatnam",
  "LB Nagar",
  "Madhapur",
  "Ameerpet",
];

function CoverageStrip() {
  return (
    <section className="w-full bg-paper py-16 sm:py-20 border-b-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Across Greater{" "}
              <span className="text-brand-gradient">Hyderabad.</span>
            </h2>
          </div>
          <Link
            href="/coverage"
            className="text-[12px] font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors"
          >
            View Coverage Map →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <Link
              key={area}
              href={`/coverage/${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2.5 bg-white border-2 border-navy text-navy text-[11px] font-bold uppercase tracking-wider hover:bg-clinic-mist hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-sm transition-all"
            >
              {area}
            </Link>
          ))}
          <Link
            href="/coverage"
            className="px-4 py-2.5 bg-care-blue border-2 border-navy text-white text-[11px] font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-brutal-sm"
          >
            + View All Areas
          </Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <EmergencyCTA />
      <CoverageStrip />
    </>
  );
}
