import Link from "next/link";
import type { Metadata } from "next";
import { services, ServiceData } from "@/data/services";
import { siteConfig } from "@/data/site";
import { siteImages, getServiceImage } from "@/data/images";
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

                {/* Services Cards — Uniform, aligned layout with clear ambulance view */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((service) => {
                    const img = getServiceImage(service.slug);

                    return (
                      <div
                        key={service.slug}
                        className="flex flex-col h-full bg-white border-2 border-[#0A2A5E] rounded-[4px] p-4 sm:p-5 shadow-[4px_4px_0_#EAF2FC] hover:shadow-[4px_4px_0_#1565D8] hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {/* Image frame with clear ambulance view */}
                        <div className="mb-4">
                          <ImageFrame
                            src={img.src}
                            alt={img.alt}
                            caption={img.caption}
                            captionLocation={img.captionLocation}
                            badge={img.badge}
                            variant="default"
                            aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                            objectPosition={img.objectPosition}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>

                        {/* Category & Icon */}
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span className="inline-flex items-center justify-center w-8 h-8 border border-[#1565D8]/20 bg-[#EAF2FC] rounded-[2px]">
                            <span className="material-symbols-outlined text-[17px] text-[#1565D8]">
                              {service.icon}
                            </span>
                          </span>
                          <span className="text-[9.5px] font-black uppercase tracking-widest text-[#536B86]">
                            {service.category}
                          </span>
                        </div>

                        {/* Service Title */}
                        <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2 leading-snug">
                          {service.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed mb-4 flex-1">
                          {service.shortDescription}
                        </p>

                        {/* Action Link */}
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-between px-4 py-2.5 bg-[#F8FAFD] hover:bg-[#EAF2FC] border-2 border-[#0A2A5E] text-[#0A2A5E] text-[11px] font-extrabold uppercase tracking-wider rounded-[2px] shadow-[2px_2px_0_#0A2A5E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                        >
                          <span>{service.cardAnchor}</span>
                          <span className="material-symbols-outlined text-[15px] text-[#1565D8]">arrow_forward</span>
                        </Link>
                      </div>
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
