"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { HeroSpatialStage } from "@/components/ui/HeroSpatialStage";
import { SpatialServiceCard } from "@/components/ui/SpatialServiceCard";
import { SpatialHowItWorks } from "@/components/ui/SpatialHowItWorks";
import { SpatialCoverageMap } from "@/components/ui/SpatialCoverageMap";
import { AmbulanceFinder } from "@/components/ui/AmbulanceFinder";
import { AmbulanceBookingFlow } from "@/components/ui/AmbulanceBookingFlow";
import { ProcessReassurance } from "@/components/ui/ProcessReassurance";

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
// 2. BRAND STATEMENT SECTION (VERY PALE BLUE)
// ═══════════════════════════════════════════════
function BrandStatementSection() {
  return (
    <section className="w-full bg-[#F3F7FC] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Framed Image with Pale Blue offset */}
          <div className="lg:col-span-5 relative pr-4 pb-4">
            <ImageFrame
              src={siteImages.home.brandStory.src}
              alt={siteImages.home.brandStory.alt}
              caption={siteImages.home.brandStory.caption}
              captionLocation={siteImages.home.brandStory.captionLocation}
              badge={siteImages.home.brandStory.badge}
              variant="offset"
              offsetColor="lavender"
              aspectRatio="aspect-[5/6] sm:aspect-[4/3] lg:aspect-[5/6]"
              objectPosition={siteImages.home.brandStory.objectPosition}
              decorativeCircle={true}
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          {/* Right Column — Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#1565D8] border border-[#0A2A5E] inline-block" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-[#DDE7F2] bg-white text-[#0A2A5E] rounded-[2px]">
                01 / Our Story
              </span>
            </div>

            <h2 className="text-[clamp(34px,5.2vw,56px)] font-extrabold uppercase tracking-tight leading-[0.98] text-[#0A2A5E]">
              Care does not stop{" "}
              <span className="bg-[#EAF2FC] text-[#1565D8] px-2.5 py-0.5 inline-block rotate-1 border border-[#1565D8]/30 shadow-[3px_3px_0_#DDE7F2] rounded-[2px]">
                at the hospital door.
              </span>
            </h2>

            <p className="text-[16.5px] font-medium text-[#536B86] leading-[1.6] max-w-xl">
              Vidhya Sri is healthcare mobility — monitored, staffed and coordinated from the first call to the final handover. Headquartered in Somajiguda, Hyderabad, our team stands ready 24 hours a day, 365 days a year.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A2A5E] border-[3px] border-[#0A2A5E] text-white text-[13px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[5px_5px_0_#1565D8] hover:bg-[#1565D8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#1565D8] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all"
              >
                About Vidhya Sri
                <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 3. SERVICES SECTION (WHITE DOMINANT WITH PALE BACKING)
// ═══════════════════════════════════════════════

function ServicesGridSection() {
  return (
    <section
      id="services"
      className="w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-3 h-3 bg-[#1565D8] border border-[#0A2A5E] inline-block" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-[#DDE7F2] bg-[#EAF2FC] text-[#0A2A5E] rounded-[2px]">
                02 / Services
              </span>
            </div>
            <h2 className="text-[clamp(34px,5.2vw,56px)] font-extrabold uppercase tracking-tight leading-[0.98] text-[#0A2A5E]">
              Every emergency,
              <br />
              <span className="text-[#1565D8]">covered.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border-[3px] border-[#0A2A5E] text-[#0A2A5E] text-[12.5px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[4px_4px_0_#DDE7F2] hover:border-[#1565D8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#DDE7F2] transition-all self-start sm:self-auto"
          >
            All 11 Services
            <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
          </Link>
        </div>

        {/* 11 Services Grid: 3D Spatial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, idx) => (
            <SpatialServiceCard key={service.slug} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 3B. FIND THE RIGHT AMBULANCE (DECISION HELPER)
// ═══════════════════════════════════════════════
function FinderSection() {
  return (
    <section id="finder" className="w-full bg-[#F8FAFD] py-16 sm:py-20 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-10">
        <AmbulanceFinder />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 4. HOW IT WORKS SECTION (CLINIC MIST, §3.6)
// ═══════════════════════════════════════════════

function HowItWorksSection() {
  return (
    <section className="w-full bg-[#EAF2FC] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Left-aligned header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-3 h-3 bg-[#1565D8] border border-[#0A2A5E] inline-block" />
            <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-[#DDE7F2] bg-white text-[#0A2A5E] rounded-[2px]">
              03 / Dispatch Process
            </span>
          </div>
          <h2 className="text-[clamp(34px,5.2vw,56px)] font-extrabold uppercase tracking-tight leading-[0.98] text-[#0A2A5E]">
            Four steps to <span className="text-[#1565D8]">dispatch.</span>
          </h2>
        </div>

        {/* Spatial 3D connected step progression */}
        <SpatialHowItWorks />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 5. COVERAGE SECTION (WHITE DOMINANT, §3.7)
// ═══════════════════════════════════════════════
const coverageAreas = [
  { name: "Somajiguda", slug: "somajiguda", rot: "-1deg" },
  { name: "Banjara Hills", slug: "banjara-hills", rot: "1.2deg" },
  { name: "Jubilee Hills", slug: "jubilee-hills", rot: "-0.8deg" },
  { name: "Punjagutta", slug: "punjagutta", rot: "1deg" },
  { name: "Begumpet", slug: "begumpet", rot: "-1.5deg" },
  { name: "Secunderabad", slug: "secunderabad", rot: "0.5deg" },
  { name: "Madhapur", slug: "madhapur", rot: "-1deg" },
  { name: "Hitech City", slug: "hitech-city", rot: "1.4deg" },
  { name: "Gachibowli", slug: "gachibowli", rot: "-1.2deg" },
  { name: "Kondapur", slug: "kondapur", rot: "0.8deg" },
  { name: "Kukatpally", slug: "kukatpally", rot: "-1.1deg" },
  { name: "Mehdipatnam", slug: "mehdipatnam", rot: "1deg" },
  { name: "LB Nagar", slug: "lb-nagar", rot: "-0.5deg" },
  { name: "Hyderabad Central", slug: "hyderabad", rot: "1.2deg" },
];

function CoverageSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E] overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-3 h-3 bg-[#1565D8] border border-[#0A2A5E] inline-block" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-[#DDE7F2] bg-[#EAF2FC] text-[#0A2A5E] rounded-[2px]">
                04 / Hyderabad Coverage
              </span>
            </div>
            <h2 className="text-[clamp(34px,5.2vw,56px)] font-extrabold uppercase tracking-tight leading-[0.98] text-[#0A2A5E]">
              Across greater
              <br />
              <span className="text-[#1565D8]">Hyderabad.</span>
            </h2>
          </div>

          <Link
            href="/coverage"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[12.5px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] transition-all self-start sm:self-auto"
          >
            Coverage Hub
            <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
          </Link>
        </div>

        {/* 3D Spatial Coverage Radar Stage */}
        <div className="mb-10">
          <SpatialCoverageMap />
        </div>

        {/* Clean white healthcare area tags */}
        <div className="flex flex-wrap gap-3.5 sm:gap-4 pt-2">
          {coverageAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/coverage/${area.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#0A2A5E] text-[12.5px] font-black uppercase tracking-[.06em] rounded-[4px] border-2 border-[#DDE7F2] shadow-[3px_3px_0_#EAF2FC] hover:border-[#1565D8] hover:bg-[#EAF2FC] hover:shadow-[3px_3px_0_#1565D8] transition-all hover:rotate-0 hover:-translate-y-0.5"
              style={{
                transform: `rotate(${area.rot})`,
              }}
            >
              <span
                className="material-symbols-outlined text-[19px] leading-none text-[#1565D8]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                location_on
              </span>
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 6. FEATURE SERVICE: ICU ON WHEELS (CARE BLUE FEATURE SECTION, §3.5)
// ═══════════════════════════════════════════════
function FeatureIcuSection() {
  const icuChecks = [
    "Continuous multipara invasive & non-invasive vitals",
    "In-transit dual-channel infusion pump capability",
    "Advanced emergency transport ventilator with PEEP",
    "Certified emergency clinical escort on board",
  ];

  return (
    <section className="relative w-full bg-feature-gradient py-20 lg:py-24 border-b-[3px] border-[#0A2A5E] overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -left-20 top-10 w-[300px] h-[300px] rounded-full bg-[#38A3F7] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#38A3F7] border border-white inline-block" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-white/30 bg-white/10 text-white rounded-[2px]">
                05 / Critical Care Transport
              </span>
            </div>

            <h2 className="text-[clamp(34px,5.2vw,56px)] font-extrabold uppercase tracking-tight leading-[0.98] text-white">
              A hospital ICU,
              <br />
              <span className="text-[#38A3F7]">on wheels.</span>
            </h2>

            <p className="text-[16.5px] font-medium text-white/95 leading-[1.6] max-w-xl">
              Equipped for critically unstable patients who cannot tolerate a standard transfer. Dedicated telemetry, ventilator integration and physician escort for hospital-to-hospital transitions.
            </p>

            <ul className="space-y-3 pt-1">
              {icuChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14.5px] font-bold text-white"
                >
                  <span className="w-[26px] h-[26px] bg-white/15 border border-white/40 flex items-center justify-center shrink-0 rounded-[2px]">
                    <span
                      className="material-symbols-outlined text-[18px] text-[#38A3F7]"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                    >
                      check
                    </span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-white border-[3px] border-[#0A2A5E] text-[#0A2A5E] text-[13.5px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[5px_5px_0_#0A2A5E] hover:bg-[#EAF2FC] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#0A2A5E] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all"
              >
                Book ICU Ambulance
                <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right: Framed Real ICU Vehicle Image */}
          <div className="lg:col-span-5 pr-4 pb-4">
            <ImageFrame
              src={siteImages.home.featuredService.src}
              alt={siteImages.home.featuredService.alt}
              caption={siteImages.home.featuredService.caption}
              captionLocation={siteImages.home.featuredService.captionLocation}
              badge={siteImages.home.featuredService.badge}
              variant="offset"
              offsetColor="careBlue"
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              objectPosition={siteImages.home.featuredService.objectPosition}
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 7. TRUST SECTION (WHITE DOMINANT, §3.8)
// ═══════════════════════════════════════════════
const trustStats = [
  {
    icon: "schedule",
    value: "24×7",
    label: "Always Operational",
  },
  {
    icon: "airport_shuttle",
    value: "11+",
    label: "Ambulance Types",
  },
  {
    icon: "map",
    value: "All India",
    label: "Interstate Transit",
  },
  {
    icon: "monitor_heart",
    value: "ICU Grade",
    label: "Monitoring Equipment",
  },
];

function TrustSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="inline-flex items-center gap-2.5 mb-10">
          <span className="w-3 h-3 bg-[#1565D8] border border-[#0A2A5E] inline-block" />
          <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-[#DDE7F2] bg-[#EAF2FC] text-[#0A2A5E] rounded-[2px]">
            06 / Why Vidhya Sri
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pr-2">
          {trustStats.map((st) => (
            <div
              key={st.label}
              className="p-7 bg-[#F8FAFD] text-[#0A2A5E] border-[3px] border-[#0A2A5E] rounded-[4px] transition-transform hover:-translate-y-1"
              style={{
                boxShadow: "6px 6px 0 #EAF2FC, 6px 6px 0 2px #0A2A5E",
              }}
            >
              <span
                className="material-symbols-outlined text-[40px] text-[#1565D8]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                {st.icon}
              </span>
              <div className="mt-4 text-[clamp(32px,3.8vw,42px)] font-black uppercase tracking-[-0.03em] leading-none text-[#0A2A5E]">
                {st.value}
              </div>
              <div className="mt-2 text-[11.5px] font-black uppercase tracking-[.14em] text-[#536B86]">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// 8. CONTACT / EMERGENCY CTA SECTION (NAVY CTA, §3.9)
// ═══════════════════════════════════════════════
function ContactSection() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRoute, setFormRoute] = useState("");
  const [formHoneypot, setFormHoneypot] = useState("");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const phone = formPhone.trim();
    if (!phone) return;

    setFormState("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formName,
          phone: formPhone,
          email: formEmail,
          route: formRoute,
          service: "Urgent Callback / Transfer",
          honeypot: formHoneypot,
        }),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  function handleReset() {
    setFormState("idle");
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setFormRoute("");
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0A2A5E] py-20 lg:py-24 border-b-[3px] border-[#0A2A5E] overflow-hidden"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Headline & Direct Helpline CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#38A3F7] border border-white inline-block" />
              <span className="text-[11px] font-black uppercase tracking-[.18em] px-2.5 py-1 border border-white/30 bg-white/10 text-white rounded-[2px]">
                07 / Immediate Response
              </span>
            </div>

            <h2 className="text-[clamp(38px,5.8vw,66px)] font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Need an ambulance
              <br />
              <span className="text-[#38A3F7]">right now?</span>
            </h2>

            <p className="text-[16.5px] font-medium text-white/90 leading-[1.55] max-w-xl">
              Call our Somajiguda dispatch controller directly for an immediate unit, or send your location on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Call: Care Blue */}
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1565D8] border-[3px] border-white text-white text-[15px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[6px_6px_0_#061A3D] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#061A3D] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  call
                </span>
                Call 24×7 · {siteConfig.phone.display}
              </a>

              {/* WhatsApp: WhatsApp Green */}
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] border-[3px] border-white text-white text-[15px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[6px_6px_0_#061A3D] hover:bg-[#1EBE5D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#061A3D] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  chat
                </span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-5 pr-3 pb-3">
            <div
              className="bg-white border-[3px] border-white rounded-[4px] p-7 text-[#0A2A5E]"
              style={{
                boxShadow: "10px 10px 0 #1565D8",
              }}
            >
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.16em] mb-4 text-[#0A2A5E]">
                <span className="w-2.5 h-2.5 bg-[#1565D8] inline-block" />
                Book an Ambulance
              </div>

              {formState === "success" && (
                <div className="py-6 text-center bg-[#EAF2FC] border-2 border-[#1565D8] p-5 rounded-[4px] space-y-3">
                  <span
                    className="material-symbols-outlined text-4xl text-[#1565D8] inline-block"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                  >
                    check_circle
                  </span>
                  <p className="text-base font-extrabold uppercase text-[#0A2A5E]">
                    Your enquiry has been received.
                  </p>
                  <p className="text-xs text-[#536B86] font-medium leading-relaxed">
                    Our Somajiguda dispatch coordinators are reviewing your details. For emergency life threats, connect immediately:
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={siteConfig.phone.href}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1565D8] hover:bg-[#0B3F9E] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase rounded-[3px] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      Call Now · {siteConfig.phone.display}
                    </a>
                    <a
                      href={siteConfig.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black uppercase rounded-[3px] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      WhatsApp Dispatch
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[11px] font-bold text-[#536B86] hover:text-[#0A2A5E] uppercase tracking-wider underline pt-2 block mx-auto"
                  >
                    Send another enquiry
                  </button>
                </div>
              )}

              {formState === "error" && (
                <div className="py-6 text-center bg-[#FDEDEC] border-2 border-[#D32F2F] p-5 rounded-[4px] space-y-3">
                  <span
                    className="material-symbols-outlined text-4xl text-[#D32F2F] inline-block"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                  >
                    error
                  </span>
                  <p className="text-sm font-extrabold uppercase text-[#D32F2F]">
                    Something went wrong while sending your enquiry. Please try again or call us directly.
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={siteConfig.phone.href}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-black uppercase rounded-[3px] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      Call {siteConfig.phone.display}
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] hover:bg-[#EAF2FC] text-xs font-black uppercase rounded-[3px] transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {(formState === "idle" || formState === "loading") && (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  {/* Honeypot for Bot Prevention */}
                  <input
                    type="text"
                    name="address_secondary"
                    value={formHoneypot}
                    onChange={(e) => setFormHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <label
                      htmlFor="home-name"
                      className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="home-name"
                      type="text"
                      placeholder="Patient / caller"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-phone"
                      className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
                    >
                      Phone <span className="text-[#1565D8]">*</span>
                    </label>
                    <input
                      id="home-phone"
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-email"
                      className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
                    >
                      Email <span className="text-[10px] font-normal text-[#536B86]">(Optional for confirmation)</span>
                    </label>
                    <input
                      id="home-email"
                      type="email"
                      placeholder="email@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-route"
                      className="block text-[11px] font-black uppercase tracking-[.12em] text-[#0A2A5E] mb-1"
                    >
                      Pickup & Destination
                    </label>
                    <input
                      id="home-route"
                      type="text"
                      placeholder="e.g. Somajiguda → Yashoda Hospital"
                      value={formRoute}
                      onChange={(e) => setFormRoute(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] text-[#0A2A5E] font-bold text-[14px] placeholder:text-[#536B86]/60 focus:outline-none focus:bg-white focus:border-[#1565D8] focus:shadow-[2px_2px_0_#1565D8] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[13px] font-black uppercase tracking-[.08em] rounded-[4px] shadow-[4px_4px_0_#0A2A5E] hover:bg-[#0B3F9E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0A2A5E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer mt-2 disabled:opacity-60"
                  >
                    {formState === "loading" ? "Sending Request..." : "Request Callback"}
                    <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
                  </button>
                </form>
              )}
            </div>
          </div>
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
      <BrandStatementSection />
      <ServicesGridSection />
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
