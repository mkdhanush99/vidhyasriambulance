import React from "react";
import Image from "next/image";

export type ImageFrameVariant =
  | "default"
  | "featured"
  | "offset"
  | "dark"
  | "caption"
  | "fullbleed"
  | "mobile";

export type OffsetColor =
  | "warmYellow"
  | "careBlue"
  | "lavender"
  | "coral"
  | "mint"
  | "navy";

interface ImageFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  variant?: ImageFrameVariant;
  offsetColor?: OffsetColor;
  caption?: string;
  captionLocation?: string;
  badge?: string;
  priority?: boolean;
  objectPosition?: string;
  decorativeCircle?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

const offsetHexMap: Record<OffsetColor, string> = {
  warmYellow: "#EAF2FC", // Clinic Mist
  careBlue: "#1565D8",   // Care Blue
  lavender: "#F3F7FC",   // Very Pale Blue
  coral: "#DDE7F2",      // Soft Border Neutral
  mint: "#EAF2FC",       // Clinic Mist
  navy: "#0A2A5E",       // Vidhya Navy
};

export function ImageFrame({
  src,
  alt,
  aspectRatio = "aspect-[4/3] sm:aspect-[16/11]",
  variant = "default",
  offsetColor = "warmYellow",
  caption,
  captionLocation,
  badge,
  priority = false,
  objectPosition = "center 65%",
  decorativeCircle = false,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw",
}: ImageFrameProps) {
  const hex = offsetHexMap[offsetColor];

  // 1. VARIANT: FEATURED (Hero & major landmark editorial frame with 3D depth)
  if (variant === "featured") {
    return (
      <div className={`group relative perspective-1000 ${className}`}>
        <div className="relative preserve-3d transition-transform duration-300 ease-out">
          {/* Offset background block with 3D depth */}
          <div
            className="absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4 rounded-[4px] border-[3px] border-[#0A2A5E] transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:translate-y-5"
            style={{ backgroundColor: hex, transform: "translateZ(-8px)" }}
            aria-hidden="true"
          />

          {/* Foreground white frame */}
          <div
            className="relative bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-2.5 sm:p-3 shadow-spatial transition-all duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-spatial-lg"
            style={{ transform: "translateZ(14px)" }}
          >
            <div className={`relative w-full overflow-hidden border-2 border-[#0A2A5E] ${aspectRatio} rounded-[2px]`}>
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                style={{ objectFit: "cover", objectPosition }}
                className={`transition-transform duration-700 group-hover:scale-[1.02] ${imageClassName}`}
              />

              {badge && (
                <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-[#0A2A5E] border-2 border-white text-white text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_#0A2A5E]">
                  {badge}
                </div>
              )}
            </div>

            {(caption || captionLocation) && (
              <div className="mt-2.5 pt-2 border-t-2 border-[#DDE7F2] flex items-center justify-between gap-2 text-[11px] font-black uppercase tracking-wider text-[#0A2A5E]">
                <span className="truncate">{caption}</span>
                {captionLocation && (
                  <span className="shrink-0 text-[#1565D8]">{captionLocation}</span>
                )}
              </div>
            )}
          </div>

          {/* Optional decorative circle with hover rotation */}
          {decorativeCircle && (
            <div
              className="absolute -right-5 -bottom-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#EAF2FC] border-[3px] border-[#0A2A5E] flex items-center justify-center pointer-events-none z-20 shadow-[3px_3px_0_#0A2A5E] transition-transform duration-300 group-hover:rotate-45"
              style={{ transform: "translateZ(24px)" }}
              aria-hidden="true"
            >
              <span
                className="material-symbols-outlined text-[36px] sm:text-[44px] text-[#1565D8]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                add
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. VARIANT: OFFSET (Editorial offset with 3D depth)
  if (variant === "offset") {
    return (
      <div className={`group relative perspective-1000 ${className}`}>
        <div className="relative preserve-3d transition-transform duration-300 ease-out">
          {/* Color offset block showing on 2 sides */}
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-[4px] border-[3px] border-[#0A2A5E] transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
            style={{ backgroundColor: hex, transform: "translateZ(-8px)" }}
            aria-hidden="true"
          />

          {/* White frame */}
          <div
            className="relative bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-2 sm:p-2.5 shadow-spatial transition-all duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-spatial-lg"
            style={{ transform: "translateZ(12px)" }}
          >
            <div className={`relative w-full overflow-hidden border-2 border-[#0A2A5E] ${aspectRatio} rounded-[2px]`}>
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                style={{ objectFit: "cover", objectPosition }}
                className={`transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName}`}
              />
              {badge && (
                <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 bg-[#0A2A5E] border border-white text-white text-[9.5px] font-black uppercase tracking-wider">
                  {badge}
                </div>
              )}
            </div>

            {(caption || captionLocation) && (
              <div className="mt-2 pt-1.5 flex items-center justify-between gap-2 text-[10.5px] font-black uppercase tracking-wider text-[#0A2A5E]">
                <span className="truncate">{caption}</span>
                {captionLocation && (
                  <span className="shrink-0 text-[#1565D8]">{captionLocation}</span>
                )}
              </div>
            )}
          </div>

          {decorativeCircle && (
            <div
              className="absolute -right-4 -bottom-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EAF2FC] border-[3px] border-[#0A2A5E] flex items-center justify-center pointer-events-none z-20 shadow-[2px_2px_0_#0A2A5E] transition-transform duration-300 group-hover:rotate-45"
              style={{ transform: "translateZ(20px)" }}
              aria-hidden="true"
            >
              <span
                className="material-symbols-outlined text-[32px] text-[#1565D8]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                add
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. VARIANT: DARK (Navy / Dark background frame)
  if (variant === "dark") {
    return (
      <div className={`group relative perspective-1000 ${className}`}>
        <div className="relative preserve-3d transition-transform duration-300 ease-out">
          <div
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 border-[3px] border-[#0A2A5E] rounded-[4px] transition-transform duration-200 group-hover:translate-x-3.5 group-hover:translate-y-3.5"
            style={{ backgroundColor: hex, transform: "translateZ(-6px)" }}
            aria-hidden="true"
          />
          <div
            className="relative bg-[#061A3D] border-[3px] border-[#0A2A5E] rounded-[4px] p-2.5 shadow-spatial transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ transform: "translateZ(10px)" }}
          >
            <div className={`relative w-full overflow-hidden border-2 border-white/20 ${aspectRatio} rounded-[2px]`}>
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                style={{ objectFit: "cover", objectPosition }}
                className={`transition-transform duration-500 ${imageClassName}`}
              />
              {badge && (
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-[#EAF2FC] border border-[#1565D8] text-[#1565D8] text-[9px] font-black uppercase tracking-wider">
                  {badge}
                </div>
              )}
            </div>

            {(caption || captionLocation) && (
              <div className="mt-2 pt-1.5 border-t border-white/15 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-white/90">
                <span>{caption}</span>
                {captionLocation && (
                  <span className="text-[#38A3F7]">{captionLocation}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 4. VARIANT: FULLBLEED
  if (variant === "fullbleed") {
    return (
      <div className={`relative w-full overflow-hidden border-y-[3px] border-[#0A2A5E] ${className}`}>
        <div className={`relative w-full ${aspectRatio}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition }}
            className={`transition-transform duration-500 ${imageClassName}`}
          />
        </div>
        {caption && (
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A2A5E] border-2 border-white text-white text-[10.5px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A2A5E]">
            {badge && <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" />}
            {caption}
          </div>
        )}
      </div>
    );
  }

  // 5. DEFAULT VARIANT
  return (
    <div className={`group relative perspective-1000 ${className}`}>
      <div
        className="relative bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-2 shadow-spatial transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-spatial-hover"
      >
        <div className={`relative w-full overflow-hidden border-2 border-[#0A2A5E] ${aspectRatio} rounded-[2px]`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            style={{ objectFit: "cover", objectPosition }}
            className={`transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName}`}
          />
          {badge && (
            <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-[#0A2A5E] border border-white text-white text-[9.5px] font-black uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>

        {(caption || captionLocation) && (
          <div className="mt-2 pt-1.5 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-wider text-[#0A2A5E]">
            <span className="truncate">{caption}</span>
            {captionLocation && (
              <span className="shrink-0 text-[#1565D8]">{captionLocation}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
