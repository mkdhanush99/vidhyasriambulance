import Link from "next/link";
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow">
              24×7 AMBULANCE & PATIENT TRANSPORT
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
            Care, moving<br />
            when it{" "}
            <span className="text-warm-yellow">matters.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg font-medium text-white/85 max-w-2xl leading-relaxed">
            Vidhya Sri Ambulance Services provides emergency and patient transportation in Hyderabad, with support for planned transfers, specialized ambulance requirements and outstation journeys.
          </p>

          {/* CTA Pair */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call 24×7
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

          {/* Hero Supporting Labels */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3">
            {[
              { label: "EMERGENCY AMBULANCE", href: "/services/emergency-ambulance" },
              { label: "ICU AMBULANCE", href: "/services/icu-ambulance" },
              { label: "PATIENT TRANSFER", href: "/services/patient-transfer-ambulance" },
              { label: "OUTSTATION", href: "/services/outstation-ambulance" },
            ].map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/25 text-[10px] font-black uppercase tracking-widest text-white/90 transition-all"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge editorial line */}
      <div className="relative z-10 h-2 bg-warm-yellow" />
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — INTRO
// ═══════════════════════════════════════════════
function IntroSection() {
  const introLinks = [
    { name: "Emergency Ambulance", href: "/services/emergency-ambulance", icon: "emergency" },
    { name: "ICU Ambulance", href: "/services/icu-ambulance", icon: "monitor_heart" },
    { name: "Ventilator Ambulance", href: "/services/ventilator-ambulance", icon: "pulmonology" },
    { name: "BLS Ambulance", href: "/services/bls-ambulance", icon: "local_hospital" },
    { name: "Patient Transfer Ambulance", href: "/services/patient-transfer-ambulance", icon: "transfer_within_a_station" },
    { name: "Oxygen Ambulance", href: "/services/oxygen-ambulance", icon: "air" },
    { name: "NICU / Neonatal Ambulance", href: "/services/nicu-neonatal-ambulance", icon: "child_care" },
    { name: "Outstation Ambulance", href: "/services/outstation-ambulance", icon: "route" },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-block px-3 py-1 bg-clinic-mist border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
            Hyderabad Ambulance Transportation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy leading-tight mb-4">
            Ambulance care for every kind of journey.
          </h2>
          <p className="text-base font-medium text-navy/75 leading-relaxed">
            From urgent hospital transport to planned patient transfers, Vidhya Sri Ambulance Services helps families, caregivers and hospitals arrange suitable ambulance transportation in Hyderabad and beyond.
          </p>
        </div>

        {/* Quick Link Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {introLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2.5 p-3.5 bg-paper border border-navy/20 hover:border-navy hover:bg-clinic-mist hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-care-blue">
                {link.icon}
              </span>
              <span className="text-[11px] font-extrabold uppercase text-navy">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
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
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Dedicated Medical <span className="text-brand-gradient">Transport.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[12px] font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors self-start sm:self-auto"
          >
            Explore All 11 Services →
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
              {/* Category & Icon */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 border-2 border-navy ${accentBorderMap[service.accent] || "border-clinic-mist"} bg-white`}
                >
                  <span className="material-symbols-outlined text-[20px] text-navy">
                    {service.icon}
                  </span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                  {service.category}
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

              {/* Specific Anchor Text */}
              <div className="mt-4 text-navy/60 group-hover:text-care-blue transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {service.cardAnchor}
                </span>
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
    description: "Contact Vidhya Sri Ambulance Services directly.",
    color: "bg-coral",
  },
  {
    step: "02",
    title: "Share the journey details",
    description: "Provide pickup location, destination and the type of transport required.",
    color: "bg-warm-yellow",
  },
  {
    step: "03",
    title: "Confirm the ambulance",
    description: "Our team confirms availability and the appropriate service for the journey.",
    color: "bg-response-sky",
  },
  {
    step: "04",
    title: "Begin the transfer",
    description: "The ambulance is arranged for the requested patient transportation.",
    color: "bg-mint",
  },
];

function HowItWorksSection() {
  return (
    <section className="w-full bg-clinic-mist py-20 sm:py-24 border-y-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
            Getting an ambulance should be simple.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col bg-white border-2 border-navy p-6 shadow-brutal-navy hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 ${step.color} border-2 border-navy text-navy text-lg font-extrabold mb-4`}
              >
                {step.step}
              </span>
              <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] font-medium text-navy/65 leading-relaxed">
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
// SECTION — EMERGENCY CTA BANNER
// ═══════════════════════════════════════════════
function EmergencyCTA() {
  return (
    <section className="w-full bg-coral py-16 sm:py-20 border-b-2 border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
            Need An Ambulance{" "}
            <span className="underline decoration-navy decoration-4 underline-offset-4">
              Right Now?
            </span>
          </h2>
          <p className="mt-3 text-base font-semibold text-navy/80">
            For urgent ambulance requirements in Hyderabad, contact our 24×7 dispatch team.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call 24×7 · {siteConfig.phone.display}
          </a>
          <a
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-white border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-gray-50 transition-all shadow-brutal-navy hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — HYDERABAD COVERAGE
// ═══════════════════════════════════════════════
const coverageLocalities = [
  { name: "Hyderabad", slug: "hyderabad" },
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

function CoverageSection() {
  return (
    <section className="w-full bg-paper py-16 sm:py-20 border-b-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Coverage Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Ambulance service across Hyderabad.
            </h2>
            <p className="mt-2 text-sm font-medium text-navy/70 leading-relaxed">
              Vidhya Sri Ambulance Services serves customers across Hyderabad and nearby areas. The website provides dedicated pages for key local search areas.
            </p>
          </div>
          <Link
            href="/coverage"
            className="text-[12px] font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors shrink-0"
          >
            View Coverage Hub →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {coverageLocalities.map((loc) => (
            <Link
              key={loc.slug}
              href={`/coverage/${loc.slug}`}
              className="px-4 py-2.5 bg-white border-2 border-navy text-navy text-[11px] font-bold uppercase tracking-wider hover:bg-clinic-mist hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-sm transition-all"
            >
              {loc.name}
            </Link>
          ))}
          <Link
            href="/coverage"
            className="px-4 py-2.5 bg-care-blue border-2 border-navy text-white text-[11px] font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-brutal-sm"
          >
            + All Greater Hyderabad Areas
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
      <IntroSection />
      <ServicesSection />
      <HowItWorksSection />
      <EmergencyCTA />
      <CoverageSection />
    </>
  );
}
