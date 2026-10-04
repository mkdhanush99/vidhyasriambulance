import React from "react";
import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { RouteMotif } from "@/components/ui/RouteMotif";
import { siteConfig } from "@/data/site";
import { ServiceData } from "@/data/services";
import { ImageAsset } from "@/data/images";

interface FeatureServiceBlockProps {
  service: ServiceData;
  image: ImageAsset;
  layout?: "imageLeft" | "imageRight";
  sectionNum?: string;
  badgeText?: string;
}

/**
 * FeatureServiceBlock
 * Editorial split-screen composition for featured cornerstone services (e.g. Emergency ALS, ICU on Wheels, Patient Transfer, Outstation).
 * Alternates between left/right image placements to establish visual rhythm and hierarchy.
 */
export function FeatureServiceBlock({
  service,
  image,
  layout = "imageLeft",
  sectionNum,
  badgeText = "FEATURED DISPATCH TIER",
}: FeatureServiceBlockProps) {
  const isImageLeft = layout === "imageLeft";

  return (
    <div className="relative my-10 sm:my-16 bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-6 sm:p-10 shadow-spatial overflow-hidden">
      {/* Decorative oversized section numeral watermark */}
      {sectionNum && (
        <span
          className="absolute -top-10 -right-6 text-[clamp(100px,16vw,200px)] font-black text-[#1565D8]/[0.04] pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          {sectionNum}
        </span>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Image Column (7 cols) */}
        <div className={`lg:col-span-7 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <ImageFrame
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            captionLocation={image.captionLocation}
            badge={image.badge || badgeText}
            variant="corner-marked"
            aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
            objectPosition={image.objectPosition}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        {/* Content Column (5 cols) */}
        <div className={`lg:col-span-5 flex flex-col justify-between ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MetaLabel
                category={service.category}
                detail="IMMEDIATE DISPATCH"
                indicator="pulse"
                indicatorColor={service.slug.includes("emergency") ? "red" : "blue"}
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[1.05] mb-3">
              {service.name}
            </h3>

            <p className="text-sm sm:text-base font-medium text-[#536B86] leading-relaxed mb-6">
              {service.shortDescription || service.description}
            </p>

            {/* Route motif accent */}
            <div className="mb-6">
              <RouteMotif
                variant="horizontal"
                originLabel="Call Inbound"
                destinationLabel="Bedside Handover"
              />
            </div>

            {/* Equipment / Key Feature Pills */}
            {service.features && service.features.length > 0 && (
              <div className="mb-6 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2A5E] block">
                  Key Capabilities Onboard:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.slice(0, 4).map((feat: string) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 bg-[#F8FAFD] border border-[#DDE7F2] text-[11px] font-bold text-[#0A2A5E] rounded-[2px]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#DDE7F2]">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[12px] font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_#0A2A5E] hover:bg-[#0B3F9E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Dispatch Now
            </a>

            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[12px] font-black uppercase tracking-wider rounded-[3px] shadow-[3px_3px_0_#0A2A5E] hover:bg-[#EAF2FC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Specifications &amp; Rates
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
