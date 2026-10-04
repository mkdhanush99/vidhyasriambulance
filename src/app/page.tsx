import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { siteImages, getServiceImage } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { HeroSpatialStage } from "@/components/ui/HeroSpatialStage";
import { SpatialServiceCard } from "@/components/ui/SpatialServiceCard";
import { ProcessReassurance } from "@/components/ui/ProcessReassurance";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { RouteMotif } from "@/components/ui/RouteMotif";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { ManifestoSection } from "@/components/ui/ManifestoSection";
import { ImageBreak } from "@/components/ui/ImageBreak";
import { FeatureServiceBlock } from "@/components/ui/FeatureServiceBlock";
import { HomeContactForm } from "@/components/home/HomeContactForm";

// ── Progressive Below-The-Fold Code-Splitting ──
const AmbulanceFinder = dynamic(
  () => import("@/components/ui/AmbulanceFinder").then((m) => m.AmbulanceFinder)
);

const SpatialHowItWorks = dynamic(
  () => import("@/components/ui/SpatialHowItWorks").then((m) => m.SpatialHowItWorks)
);

const AmbulanceBookingFlow = dynamic(
  () => import("@/components/ui/AmbulanceBookingFlow").then((m) => m.AmbulanceBookingFlow)
);

const SpatialCoverageMap = dynamic(
  () => import("@/components/ui/SpatialCoverageMap").then((m) => m.SpatialCoverageMap)
);

// ═══════════════════════════════════════════════
// 1. HERO SECTION (LIGHT PREMIUM HEALTHCARE)
// ═══════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative w-full bg-[#F8FAFD] overflow-hidden border-b-[3px] border-[#0A2A5E]">
      {/* Subtle healthcare decorative accents */}
      <div
        className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full bg-[#EAF2FC] opacity-70 pointer-events-none anim-drift hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute -left-16 -bottom-16 w-[240px] h-[240px] bg-[#EAF2FC] rounded-full opacity-60 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — Editorial Typography + CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border-2 border-[#DDE7F2] shadow-[3px_3px_0_#DDE7F2] rounded-[2px]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F8F5F] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
                24×7 Ambulance Helpline Active · Hyderabad
              </span>
            </div>

            {/* H1 Headline in Vidhya Navy */}
            <h1 className="text-[clamp(44px,7.2vw,74px)] font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[#0A2A5E]">
              Care, moving
              <br />
              when it{" "}
              <span className="inline-block bg-[#EAF2FC] text-[#1565D8] px-3 py-0.5 border-2 border-[#1565D8]/30 shadow-[4px_4px_0_#DDE7F2] -rotate-[1deg] align-middle mt-1 sm:mt-0 rounded-[2px]">
                matters.
              </span>
            </h1>

            {/* Clean dark copy */}
            <p className="text-[16px] sm:text-[17px] font-medium text-[#536B86] max-w-xl leading-[1.6]">
              Vidhya Sri Ambulance Services provides immediate emergency response and planned patient transfers across Hyderabad, equipped with critical care life support and bedside handover protocols.
            </p>

            {/* CTA Set: Care Blue Primary + WhatsApp + Services Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary CTA: Care Blue #1565D8 */}
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[14px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[5px_5px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#0A2A5E] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all min-h-[52px]"
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  call
                </span>
                Call 24×7 · {siteConfig.phone.display}
              </a>

              {/* WhatsApp: White button with green pulse dot */}
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white border-[3px] border-[#0A2A5E] text-[#0A2A5E] text-[14px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[5px_5px_0_#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#0A2A5E] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all min-h-[52px]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp
              </a>

              {/* Secondary CTA: Services */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white border-2 border-[#DDE7F2] hover:border-[#0A2A5E] text-[#0A2A5E] text-[13.5px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[4px_4px_0_#DDE7F2] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#DDE7F2] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all min-h-[52px]"
              >
                Services
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>

            {/* Quick Service Tags */}
            <div className="pt-4 border-t border-[#DDE7F2] flex flex-wrap items-center gap-2">
              {[
                { label: "EMERGENCY ALS", href: "/services/emergency-ambulance" },
                { label: "ICU ON WHEELS", href: "/services/icu-ambulance" },
                { label: "VENTILATOR", href: "/services/ventilator-ambulance" },
                { label: "OUTSTATION", href: "/services/outstation-ambulance" },
              ].map((pill) => (
                <Link
                  key={pill.label}
                  href={pill.href}
                  className="px-3 py-1 bg-white hover:bg-[#EAF2FC] hover:border-[#1565D8] border border-[#DDE7F2] text-[10.5px] font-extrabold uppercase tracking-widest text-[#0A2A5E] transition-all rounded-[2px]"
                >
                  {pill.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column — 3D Spatial Stage with Editorial Photograph (5 cols) */}
          <div className="lg:col-span-5 pr-2 pb-2">
            <HeroSpatialStage
              src={siteImages.home.hero.src}
              alt={siteImages.home.hero.alt}
              caption={siteImages.home.hero.caption}
              captionLocation={siteImages.home.hero.captionLocation}
              badge={siteImages.home.hero.badge}
              objectPosition={siteImages.home.hero.objectPosition}
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Refined Care Blue bottom runner line */}
      <div className="h-1.5 bg-[#1565D8] w-full border-crossing-strip" />
    </section>
  );
}

// ═══════════════════════════════════════════════
// 3. SERVICES SECTION (BRUTALIST NAVY + BOLD CARDS)
// ═══════════════════════════════════════════════
function ServicesGridSection() {
  const primaryServices = services.slice(0, 6);

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EAF2FC] border border-[#1565D8] rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
                02 / Emergency &amp; Transit Fleet
              </span>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,52px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.0]">
              Specialized Care Tiers
            </h2>
            <p className="text-[15.5px] font-medium text-[#536B86] max-w-xl">
              Every ambulance in our fleet is purpose-built and equipped with certified life-support systems, oxygen, and emergency medication.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#F8FAFD] hover:bg-[#EAF2FC] border-2 border-[#0A2A5E] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_#0A2A5E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0A2A5E] transition-all shrink-0 self-start md:self-end"
          >
            <span>View All 12 Services</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {primaryServices.map((service, index) => (
            <SpatialServiceCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 4. FINDER SECTION (AMBULANCE SELECTION FLOW)
// ═══════════════════════════════════════════════
function FinderSection() {
  return (
    <section className="w-full bg-[#F8FAFD] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#DDE7F2] rounded-[2px] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
            <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
              03 / Vehicle Match Assistant
            </span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,50px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.0]">
            Find the Right Vehicle
          </h2>
          <p className="text-[15.5px] font-medium text-[#536B86] mt-2">
            Select your clinical requirements, destination tier, and urgency level to view the recommended ambulance configuration.
          </p>
        </div>

        <AmbulanceFinder />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 5. HOW IT WORKS SECTION (CLINICAL STEP TIMELINE)
// ═══════════════════════════════════════════════
function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EAF2FC] border border-[#1565D8] rounded-[2px] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
            <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
              04 / Dispatch Protocol
            </span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,50px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.0]">
            How Dispatch Operates
          </h2>
          <p className="text-[15.5px] font-medium text-[#536B86] mt-2">
            From emergency intake at our Somajiguda station to bedside clinical handover at the destination hospital.
          </p>
        </div>

        <SpatialHowItWorks />

        {/* Interactive Booking Module */}
        <div className="mt-16 pt-16 border-t-2 border-[#DDE7F2]">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#1565D8]">
              Online Dispatch Request
            </span>
            <h3 className="text-2xl font-black uppercase text-[#0A2A5E] tracking-tight mt-1">
              Book or Request an Ambulance Transfer
            </h3>
          </div>
          <AmbulanceBookingFlow />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 6. COVERAGE MAP SECTION
// ═══════════════════════════════════════════════
function CoverageSection() {
  return (
    <section className="w-full bg-[#F3F7FC] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
                05 / Active Hyderabad Nodes
              </span>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,50px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.0]">
              Coverage &amp; Response Radii
            </h2>
            <p className="text-[15.5px] font-medium text-[#536B86] max-w-xl">
              Headquartered at Somajiguda with strategic deployment clusters near major hospital corridors across Hyderabad.
            </p>
          </div>

          <Link
            href="/coverage"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#EAF2FC] border-2 border-[#0A2A5E] text-[#0A2A5E] text-xs font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_#0A2A5E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0A2A5E] transition-all shrink-0 self-start md:self-end"
          >
            <span>Explore All 14 Localities</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <SpatialCoverageMap />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 7. FEATURED SERVICE BREAK (ICU FLEET)
// ═══════════════════════════════════════════════
function FeatureIcuSection() {
  const icuService = services.find((s) => s.slug === "icu-ambulance") || services[1];

  return (
    <FeatureServiceBlock
      service={icuService}
      image={siteImages.home.featuredService}
      sectionNum="06"
      layout="imageRight"
    />
  );
}

// ═══════════════════════════════════════════════
// 8. TRUST & CREDENTIALS SECTION
// ═══════════════════════════════════════════════
function TrustSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EAF2FC] border border-[#1565D8] rounded-[2px] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1565D8]" />
            <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
              07 / Operational Standards
            </span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,50px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.0]">
            Verified Standards
          </h2>
          <p className="text-[15.5px] font-medium text-[#536B86] mt-2">
            Clinical accountability, transparent billing, and round-the-clock coordinator supervision on every transfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {[
            {
              title: "Bedside-to-Bedside Protocol",
              desc: "Our paramedics do not leave patients at the entrance curb. We coordinate formal handover with receiving medical staff.",
              icon: "local_hospital",
            },
            {
              title: "Certified Medical Equipment",
              desc: "Every mobile ICU carries hospital-grade multipara monitors, dual-stage oxygen regulators, and calibrated suction machines.",
              icon: "vital_signs",
            },
            {
              title: "24×7 Somajiguda Station",
              desc: "Centrally positioned in Hyderabad to reach Yashoda, Apollo, Care, KIMS, and NIMS within optimal emergency response times.",
              icon: "schedule",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFD] border-2 border-[#0A2A5E] shadow-[4px_4px_0_#DDE7F2] p-6 sm:p-7 rounded-[4px] space-y-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] transition-all"
            >
              <div className="w-10 h-10 rounded-[3px] bg-[#EAF2FC] border-2 border-[#1565D8] flex items-center justify-center text-[#1565D8]">
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <h3 className="text-lg font-black uppercase text-[#0A2A5E] tracking-tight">
                {item.title}
              </h3>
              <p className="text-[14.5px] font-medium text-[#536B86] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 9. QUICK CONTACT & DISPATCH INTAKE
// ═══════════════════════════════════════════════
function ContactSection() {
  return (
    <section className="w-full bg-[#F3F7FC] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — 24/7 Helpline details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#DDE7F2] rounded-[2px]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#0A2A5E]">
                Immediate Dispatch
              </span>
            </div>

            <h2 className="text-[clamp(34px,5vw,56px)] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.98]">
              Speak to a Coordinator{" "}
              <span className="bg-[#EAF2FC] text-[#1565D8] px-2.5 py-0.5 inline-block -rotate-1 border border-[#1565D8]/30 shadow-[3px_3px_0_#DDE7F2] rounded-[2px]">
                in 30 Seconds.
              </span>
            </h2>

            <p className="text-[16px] font-medium text-[#536B86] leading-relaxed max-w-xl">
              For emergency cases, skip forms and call our direct dispatch line. A coordinator will assign the nearest vehicle and guide you through immediate transfer steps.
            </p>

            <div className="p-6 bg-white border-2 border-[#0A2A5E] shadow-[5px_5px_0_#0A2A5E] rounded-[4px] space-y-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#1565D8] block mb-1">
                  Primary 24×7 Line
                </span>
                <a
                  href={siteConfig.phone.href}
                  className="text-2xl sm:text-3xl font-black text-[#0A2A5E] hover:text-[#1565D8] tracking-tight block"
                >
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="pt-3 border-t border-[#DDE7F2] flex flex-wrap items-center gap-4 text-xs font-extrabold uppercase text-[#0A2A5E]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" />
                  Station: Somajiguda
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" />
                  Response: Immediate
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" />
                  Telangana &amp; Inter-State
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Fast Callback Module (Client Component Leaf) */}
          <div className="lg:col-span-6">
            <div className="bg-white border-[3px] border-[#0A2A5E] shadow-[8px_8px_0_#0A2A5E] rounded-[4px] p-6 sm:p-8">
              <div className="mb-5">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#1565D8]">
                  Non-Emergency / Planned Transfer
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0A2A5E] tracking-tight mt-1">
                  Request a Quick Callback
                </h3>
                <p className="text-xs text-[#536B86] mt-1">
                  Enter your number and transfer points. A coordinator will call to confirm vehicle availability.
                </p>
              </div>

              <HomeContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// HOME PAGE ROOT (SERVER COMPONENT)
// ═══════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicesGridSection />
      <ImageBreak
        src={siteImages.home.hero.src}
        alt="Vidhya Sri emergency ambulance operational outside hospital facility"
        category="FLEET READINESS / SOMAJIGUDA"
        detail="GREATER HYDERABAD 24×7"
        statement="Care That Moves. When Every Minute Counts."
        subtext="Staffed with trained paramedics and equipped with certified life-support systems, our fleet responds immediately across Greater Hyderabad."
      />
      <FinderSection />
      <HowItWorksSection />
      <ProcessReassurance />
      <CoverageSection />
      <FeatureIcuSection />
      <TrustSection />
      <ContactSection />
    </>
  );
}
