import Link from "next/link";
import type { Metadata } from "next";
import { services, ServiceData } from "@/data/services";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { AmbulanceFinder } from "@/components/ui/AmbulanceFinder";
import { ProcessReassurance } from "@/components/ui/ProcessReassurance";

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
    badgeBg: "bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8]",
  },
  {
    name: "PATIENT TRANSPORT",
    description: "Planned patient transfers, respiratory oxygen support, and specialized neonatal care journeys.",
    badgeBg: "bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8]",
  },
  {
    name: "SPECIALIZED & PLANNED TRANSPORT",
    description: "Long-distance interstate journeys, event standby positioning, corporate workplace coverage, and mortuary transport.",
    badgeBg: "bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8]",
  },
] as const;

// Services that receive an editorial visual feature on the overview page
const visualServiceSlugs: Record<string, { image: typeof siteImages.servicesOverview.emergencyFeatured; offsetColor: "warmYellow" | "careBlue" | "coral" | "mint" }> = {
  "emergency-ambulance": {
    image: siteImages.servicesOverview.emergencyFeatured,
    offsetColor: "careBlue",
  },
  "icu-ambulance": {
    image: siteImages.servicesOverview.icuSecondary,
    offsetColor: "careBlue",
  },
  "patient-transfer-ambulance": {
    image: siteImages.servicesOverview.transferSupporting,
    offsetColor: "warmYellow",
  },
  "mortuary-transportation": {
    image: {
      src: siteImages.services["mortuary-transportation"].src,
      alt: siteImages.services["mortuary-transportation"].alt,
      caption: siteImages.services["mortuary-transportation"].caption,
      captionLocation: siteImages.services["mortuary-transportation"].captionLocation,
      badge: siteImages.services["mortuary-transportation"].badge,
      aspectRatio: "aspect-[16/10]",
      objectPosition: "center",
      assetType: "REAL_CLIENT_ASSET",
    },
    offsetColor: "mint",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">Services</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Service Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
            Ambulance Services
          </h1>
          <p className="mt-3 text-base sm:text-lg font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Choose the ambulance service based on the patient&apos;s transport requirements and the nature of the journey.
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Decision Helper: Find the Right Ambulance ── */}
      <section id="finder" className="w-full bg-[#F8FAFD] py-12 sm:py-16 border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-10">
          <AmbulanceFinder />
        </div>
      </section>

      {/* ── Categorized Services (White Dominant Surfaces) ── */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.name);
            return (
              <div key={cat.name} className="space-y-8">
                {/* Category Header */}
                <div className="border-b-2 border-[#DDE7F2] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 ${cat.badgeBg} text-[10px] font-black uppercase tracking-widest mb-2 rounded-[2px]`}
                    >
                      Category
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                      {cat.name}
                    </h2>
                  </div>
                  <p className="text-sm font-medium text-[#536B86] max-w-md">
                    {cat.description}
                  </p>
                </div>

                {/* Services Cards — Controlled Editorial Density */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((service) => {
                    const visualConfig = visualServiceSlugs[service.slug];

                    // Visual featured card (where selected)
                    if (visualConfig) {
                      return (
                        <div
                          key={service.slug}
                          className="flex flex-col bg-white border-2 border-[#DDE7F2] rounded-[4px] p-5 shadow-[4px_4px_0_#EAF2FC, 4px_4px_0_2px_#DDE7F2]"
                        >
                          {/* Image frame */}
                          <div className="mb-4">
                            <ImageFrame
                              src={visualConfig.image.src}
                              alt={visualConfig.image.alt}
                              caption={visualConfig.image.caption}
                              captionLocation={visualConfig.image.captionLocation}
                              badge={visualConfig.image.badge}
                              variant="default"
                              aspectRatio="aspect-[16/10]"
                              objectPosition={visualConfig.image.objectPosition}
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 border border-[#1565D8]/20 bg-[#EAF2FC] rounded-[2px]">
                              <span className="material-symbols-outlined text-[16px] text-[#1565D8]">
                                {service.icon}
                              </span>
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#536B86]">
                              {service.category}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2">
                            {service.name}
                          </h3>

                          <p className="text-xs font-medium text-[#536B86] leading-relaxed mb-4 flex-1">
                            {service.shortDescription}
                          </p>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center justify-between px-4 py-2.5 bg-[#F8FAFD] hover:bg-[#EAF2FC] border border-[#DDE7F2] text-[#0A2A5E] text-[11px] font-extrabold uppercase tracking-wider rounded-[2px] transition-colors"
                          >
                            <span>{service.cardAnchor}</span>
                            <span className="material-symbols-outlined text-[14px] text-[#1565D8]">arrow_forward</span>
                          </Link>
                        </div>
                      );
                    }

                    // Non-visual clean card
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex flex-col p-6 bg-[#F8FAFD] border-2 border-[#DDE7F2] rounded-[4px] shadow-[4px_4px_0_#EAF2FC, 4px_4px_0_2px_#DDE7F2] hover:border-[#1565D8] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#1565D8] transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 border border-[#1565D8]/20 bg-[#EAF2FC] rounded-[2px]">
                            <span className="material-symbols-outlined text-[20px] text-[#1565D8]">
                              {service.icon}
                            </span>
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86]">
                            {service.category}
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2 group-hover:text-[#1565D8] transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-[13px] font-medium text-[#536B86] leading-relaxed flex-1">
                          {service.shortDescription}
                        </p>

                        <div className="mt-4 text-[#1565D8] flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wide">
                            {service.cardAnchor}
                          </span>
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Operational Process Reassurance ── */}
      <ProcessReassurance />

      {/* ── Direct Dispatch CTA (Navy CTA) ── */}
      <section className="w-full bg-[#0A2A5E] text-white py-16 sm:py-20 border-t-2 border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-[#38A3F7] text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
              Need Assistance Selecting?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              Speak with our dispatch team.
            </h2>
            <p className="mt-2 text-sm text-white/80 max-w-xl">
              If you are unsure whether Basic Life Support, ICU, or Oxygen transport is required, our coordinators will help assess the journey.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#1565D8] border-[3px] border-white text-white text-[13px] font-black uppercase tracking-wider hover:bg-[#0B3F9E] transition-all shrink-0 shadow-[4px_4px_0_#061A3D] rounded-[4px]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call 24×7 · {siteConfig.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
