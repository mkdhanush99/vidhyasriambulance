import Link from "next/link";
import type { Metadata } from "next";
import { services, ServiceData } from "@/data/services";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";

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

// Services that receive an editorial visual feature on the overview page
const visualServiceSlugs: Record<string, { image: typeof siteImages.servicesOverview.emergencyFeatured; offsetColor: "warmYellow" | "careBlue" | "coral" | "mint" }> = {
  "emergency-ambulance": {
    image: siteImages.servicesOverview.emergencyFeatured,
    offsetColor: "coral",
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

      {/* ── Categorized Services (Editorial Mixed Grid) ── */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.name);
            return (
              <div key={cat.name} className="space-y-8">
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
                  <p className="text-sm font-medium text-navy/70 max-w-md">
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
                          className="flex flex-col bg-white border-2 border-navy p-5 shadow-brutal-navy"
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
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 border-2 border-navy ${accentBorderMap[service.accent] || "border-clinic-mist"} bg-white`}
                            >
                              <span className="material-symbols-outlined text-[16px] text-navy">
                                {service.icon}
                              </span>
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-navy/50">
                              {service.category}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2">
                            {service.name}
                          </h3>

                          <p className="text-xs font-medium text-navy/70 leading-relaxed mb-4 flex-1">
                            {service.shortDescription}
                          </p>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center justify-between px-4 py-2.5 bg-paper hover:bg-clinic-mist border-2 border-navy text-navy text-[11px] font-extrabold uppercase tracking-wider transition-colors"
                          >
                            <span>{service.cardAnchor}</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </Link>
                        </div>
                      );
                    }

                    // Non-visual typography + colour + icon card
                    return (
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
                            {service.category}
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2 group-hover:text-care-blue transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-[13px] font-medium text-navy/65 leading-relaxed flex-1">
                          {service.shortDescription}
                        </p>

                        <div className="mt-4 text-navy/60 group-hover:text-care-blue transition-colors">
                          <span className="text-[11px] font-bold uppercase tracking-wide">
                            {service.cardAnchor}
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

      {/* ── Direct Dispatch CTA ── */}
      <section className="w-full bg-navy text-white py-16 sm:py-20 border-t-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-3">
              Need Assistance Selecting?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              Speak with our dispatch team.
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-xl">
              If you are unsure whether Basic Life Support, ICU, or Oxygen transport is required, our coordinators will help assess the journey.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 px-6 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shrink-0 shadow-brutal-sm"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call 24×7 · {siteConfig.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
