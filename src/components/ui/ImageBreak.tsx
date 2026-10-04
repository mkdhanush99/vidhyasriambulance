import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { RouteMotif } from "@/components/ui/RouteMotif";

interface ImageBreakProps {
  src: string;
  alt: string;
  category?: string;
  detail?: string;
  statement: string;
  subtext?: string;
  objectPosition?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * ImageBreak
 * Full-width photographic transition break between major sections.
 * Establishes cinematic rhythm, brand scale, and calm authority.
 */
export function ImageBreak({
  src,
  alt,
  category = "ACTIVE FLEET ON PATROL",
  detail = "GREATER HYDERABAD",
  statement,
  subtext,
  objectPosition = "center 65%",
  showCta = true,
  ctaText = "Direct Control Room",
  ctaHref = siteConfig.phone.href,
}: ImageBreakProps) {
  return (
    <section className="relative w-full overflow-hidden border-y-[3px] border-[#0A2A5E] bg-[#0A2A5E] select-none">
      {/* Background Image with Deep Editorial Gradient */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition }}
          className="opacity-45 mix-blend-luminosity filter contrast-125 brightness-95"
        />

        {/* Navy Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A3D]/95 via-[#0A2A5E]/80 to-[#061A3D]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A5E] via-transparent to-[#0A2A5E]/60" />

        {/* Foreground Content Container */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <MetaLabel
              category={category}
              detail={detail}
              theme="navy"
              indicator="pulse"
              indicatorColor="green"
            />

            <h2 className="text-[clamp(24px,4vw,44px)] font-black uppercase tracking-tight text-white leading-[1.05]">
              {statement}
            </h2>

            {subtext && (
              <p className="text-sm sm:text-base font-medium text-white/80 max-w-xl mx-auto leading-relaxed">
                {subtext}
              </p>
            )}

            <RouteMotif
              variant="horizontal"
              accentColor="sky"
              className="max-w-xs mx-auto py-1"
            />

            {showCta && (
              <div className="pt-2">
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565D8] border-2 border-white text-white text-[12px] font-black uppercase tracking-wider rounded-[3px] shadow-[4px_4px_0_#061A3D] hover:bg-[#38A3F7] hover:text-[#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  {ctaText} · {siteConfig.phone.display}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
