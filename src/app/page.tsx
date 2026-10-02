import Link from "next/link";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";

// ═══════════════════════════════════════════════
// SECTION — HERO (EDITORIAL ASYMMETRIC COMPOSITION)
// ═══════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      {/* Subtle brand gradient overlay */}
      <div className="absolute inset-0 bg-brand-gradient opacity-90" />

      {/* Grid Pattern overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Editorial Typography + CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-warm-yellow">
                24×7 AMBULANCE & PATIENT TRANSPORT
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Care, moving<br />
              when it{" "}
              <span className="text-warm-yellow">matters.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg font-medium text-white/85 max-w-xl leading-relaxed">
              Vidhya Sri Ambulance Services provides emergency and patient transportation in Hyderabad, with dedicated vehicles for planned transfers, specialized ICU requirements, and outstation medical journeys.
            </p>

            {/* CTA Pair */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call 24×7 · {siteConfig.phone.display}
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
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-2.5">
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

          {/* Right Column — Editorial Framed Photograph (5 cols) */}
          <div className="lg:col-span-5">
            <ImageFrame
              src={siteImages.home.hero.src}
              alt={siteImages.home.hero.alt}
              caption={siteImages.home.hero.caption}
              captionLocation={siteImages.home.hero.captionLocation}
              badge={siteImages.home.hero.badge}
              variant="featured"
              offsetColor="careBlue"
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              objectPosition={siteImages.home.hero.objectPosition}
              priority={true}
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom edge editorial line */}
      <div className="relative z-10 h-2 bg-warm-yellow" />
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — INTRO WITH QUICK NAV
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
    <section className="w-full bg-white py-14 sm:py-16 border-b-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-3 py-1 bg-clinic-mist border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
            Hyderabad Ambulance Transportation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy leading-tight mb-3">
            Ambulance care for every kind of journey.
          </h2>
          <p className="text-sm sm:text-base font-medium text-navy/75 leading-relaxed">
            From urgent hospital transport to planned patient transfers, Vidhya Sri Ambulance Services helps families, caregivers and hospitals arrange suitable ambulance transportation in Hyderabad and beyond.
          </p>
        </div>

        {/* Quick Link Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {introLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2.5 p-3 bg-paper border border-navy/20 hover:border-navy hover:bg-clinic-mist hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-care-blue">
                {link.icon}
              </span>
              <span className="text-[11px] font-extrabold uppercase text-navy truncate">
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
// SECTION — HOME BRAND STORY (EDITORIAL ASYMMETRICAL MOMENT)
// ═══════════════════════════════════════════════
function BrandStorySection() {
  return (
    <section className="w-full bg-paper py-16 sm:py-20 border-b-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Large Editorial Photograph (5 cols) */}
          <div className="lg:col-span-5">
            <ImageFrame
              src={siteImages.home.brandStory.src}
              alt={siteImages.home.brandStory.alt}
              caption={siteImages.home.brandStory.caption}
              captionLocation={siteImages.home.brandStory.captionLocation}
              badge={siteImages.home.brandStory.badge}
              variant="offset"
              offsetColor="lavender"
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              objectPosition={siteImages.home.brandStory.objectPosition}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Statement + Copy + Color Blocks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
                Operational Dispatch & Fleet Base
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy leading-tight">
                An active fleet stationed for immediate Hyderabad response.
              </h2>
            </div>

            <div className="space-y-4 text-sm font-medium text-navy/75 leading-relaxed">
              <p>
                Headquartered in Somajiguda, Hyderabad, Vidhya Sri Ambulance operates a multi-vehicle fleet configured for critical emergency dispatch, routine patient transit, and specialized life support across the twin cities.
              </p>
              <p>
                Every vehicle is maintained with dedicated medical oxygen systems, secure immobilization stretchers, and direct driver communication to ensure smooth coordination between residences, clinics, and major hospitals.
              </p>
            </div>

            {/* Small colored status blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white border-2 border-navy shadow-brutal-sm">
                <span className="text-[10px] font-black uppercase tracking-wider text-care-blue block mb-1">
                  Availability
                </span>
                <p className="text-xs font-extrabold uppercase text-navy">
                  24 Hours / 7 Days Continuous Dispatch
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-navy shadow-brutal-sm">
                <span className="text-[10px] font-black uppercase tracking-wider text-care-blue block mb-1">
                  Central Base
                </span>
                <p className="text-xs font-extrabold uppercase text-navy">
                  Somajiguda, Hyderabad 500082
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-navy shadow-brutal-sm">
                <span className="text-[10px] font-black uppercase tracking-wider text-care-blue block mb-1">
                  Fleet Scope
                </span>
                <p className="text-xs font-extrabold uppercase text-navy">
                  ALS · BLS · ICU · Outstation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — SERVICES (EDITORIAL GRID WITH 1 FEATURED VISUAL)
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
  // We feature Emergency & ICU at top alongside 1 large featured image
  const featuredServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <section className="w-full bg-white py-18 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Dedicated Medical <span className="text-care-blue">Transport.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[12px] font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors self-start sm:self-auto"
          >
            Explore All 11 Services →
          </Link>
        </div>

        {/* ── EDITORIAL FEATURED BLOCK: 1 Large Image (45%) + 4 Top Cards (55%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Featured Visual Block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <ImageFrame
              src={siteImages.home.featuredService.src}
              alt={siteImages.home.featuredService.alt}
              caption={siteImages.home.featuredService.caption}
              captionLocation={siteImages.home.featuredService.captionLocation}
              badge={siteImages.home.featuredService.badge}
              variant="featured"
              offsetColor="warmYellow"
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              objectPosition={siteImages.home.featuredService.objectPosition}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="flex-1"
            />
            {/* Quick Helper Box below image */}
            <div className="mt-4 p-4 bg-clinic-mist border-2 border-navy flex items-center justify-between gap-3 shadow-brutal-sm">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-navy/60">
                  Critical Life Support
                </p>
                <p className="text-xs font-extrabold uppercase text-navy">
                  Ventilator & ICU Setup Available
                </p>
              </div>
              <Link
                href="/services/icu-ambulance"
                className="px-3 py-1.5 bg-navy text-white text-[10px] font-black uppercase tracking-wider hover:bg-care-blue transition-colors shrink-0"
              >
                View ICU Unit →
              </Link>
            </div>
          </div>

          {/* 4 Top Priority Service Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col p-5 border-2 border-navy ${accentBgMap[service.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all duration-200`}
              >
                {/* Category & Icon */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 border-2 border-navy ${accentBorderMap[service.accent] || "border-clinic-mist"} bg-white`}
                  >
                    <span className="material-symbols-outlined text-[18px] text-navy">
                      {service.icon}
                    </span>
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-navy/60 truncate">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-1.5 group-hover:text-care-blue transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] font-medium text-navy/70 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                {/* Specific Anchor Text */}
                <div className="mt-3 text-navy/60 group-hover:text-care-blue transition-colors">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide">
                    {service.cardAnchor}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Remaining Specialized Services (Typography + Accent Grid) ── */}
        <div className="border-t-2 border-navy/10 pt-8">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
              Specialized & Planned Mobility Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {remainingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col p-4 border-2 border-navy ${accentBgMap[service.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-sm transition-all duration-200`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 border-2 border-navy bg-white`}
                  >
                    <span className="material-symbols-outlined text-[16px] text-navy">
                      {service.icon}
                    </span>
                  </span>
                  <h3 className="text-xs font-extrabold uppercase tracking-tight text-navy group-hover:text-care-blue transition-colors">
                    {service.name}
                  </h3>
                </div>

                <p className="text-[11px] font-medium text-navy/65 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                <div className="mt-3 text-navy/50 group-hover:text-care-blue transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {service.cardAnchor}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION — HOW IT WORKS (STRICTLY TYPOGRAPHY + NUMBERS)
// ═══════════════════════════════════════════════
const steps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    description: "Contact Vidhya Sri Ambulance Services directly on our 24×7 helpline.",
    color: "bg-coral",
  },
  {
    step: "02",
    title: "Share the journey details",
    description: "Provide pickup address, destination medical facility and patient transport requirements.",
    color: "bg-warm-yellow",
  },
  {
    step: "03",
    title: "Confirm the ambulance",
    description: "Our coordination desk confirms vehicle type, immediate availability and dispatch route.",
    color: "bg-response-sky",
  },
  {
    step: "04",
    title: "Begin the transfer",
    description: "The vehicle is deployed for safe, respectful, and appropriately monitored transportation.",
    color: "bg-mint",
  },
];

function HowItWorksSection() {
  return (
    <section className="w-full bg-clinic-mist py-18 sm:py-22 border-y-2 border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
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
    <section className="w-full bg-coral py-14 sm:py-18 border-b-2 border-navy">
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
// HOME PAGE ROOT
// ═══════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <BrandStorySection />
      <ServicesSection />
      <HowItWorksSection />
      <EmergencyCTA />
      <CoverageSection />
    </>
  );
}
