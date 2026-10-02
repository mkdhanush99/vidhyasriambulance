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
  aspectRatio?: string; // e.g. "aspect-[16/10]", "aspect-[4/3]", "aspect-square"
  variant?: ImageFrameVariant;
  offsetColor?: OffsetColor;
  caption?: string;
  captionLocation?: string;
  badge?: string;
  priority?: boolean;
  objectPosition?: string; // e.g. "center", "70% center", "top"
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

const offsetColorClasses: Record<OffsetColor, string> = {
  warmYellow: "bg-warm-yellow",
  careBlue: "bg-care-blue",
  lavender: "bg-lavender",
  coral: "bg-coral",
  mint: "bg-mint",
  navy: "bg-navy",
};

export function ImageFrame({
  src,
  alt,
  width = 1200,
  height = 800,
  aspectRatio = "aspect-[16/10]",
  variant = "default",
  offsetColor = "warmYellow",
  caption,
  captionLocation,
  badge,
  priority = false,
  objectPosition = "center",
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
}: ImageFrameProps) {
  const offsetClass = offsetColorClasses[offsetColor];

  // VARIANT: FULLBLEED
  if (variant === "fullbleed") {
    return (
      <div className={`relative w-full overflow-hidden border-y-2 border-navy ${className}`}>
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
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-navy/90 border border-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest">
            {badge && <span className="w-2 h-2 rounded-full bg-warm-yellow" />}
            {caption}
          </div>
        )}
      </div>
    );
  }

  // VARIANT: DARK
  if (variant === "dark") {
    return (
      <div className={`relative ${className}`}>
        {/* Geometric offset layer */}
        <div className={`absolute -inset-1 sm:-inset-2 ${offsetClass} border-2 border-navy`} />

        {/* Outer frame */}
        <div className="relative bg-navy-dark border-2 border-navy p-2 sm:p-3 shadow-brutal-navy">
          <div className={`relative w-full overflow-hidden border border-white/20 ${aspectRatio}`}>
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
              <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 bg-warm-yellow border border-navy text-navy text-[9px] font-black uppercase tracking-wider">
                {badge}
              </div>
            )}
          </div>

          {(caption || captionLocation) && (
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-white/80">
              <span>{caption}</span>
              {captionLocation && (
                <span className="text-response-sky">{captionLocation}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // VARIANT: OFFSET (Editorial colored geometric backplate)
  if (variant === "offset") {
    return (
      <div className={`relative ${className}`}>
        {/* Geometric offset backplate */}
        <div
          className={`absolute translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 inset-0 ${offsetClass} border-2 border-navy`}
          aria-hidden="true"
        />

        {/* Main image card */}
        <div className="relative bg-white border-2 border-navy p-2 sm:p-2.5 shadow-none">
          <div className={`relative w-full overflow-hidden border border-navy/20 ${aspectRatio}`}>
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
              <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-white border border-navy text-navy text-[9px] font-black uppercase tracking-wider shadow-brutal-sm">
                {badge}
              </div>
            )}
          </div>

          {(caption || captionLocation) && (
            <div className="mt-2 pt-1.5 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-navy/70">
              <span className="truncate">{caption}</span>
              {captionLocation && (
                <span className="shrink-0 text-care-blue">{captionLocation}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // VARIANT: FEATURED (Large hero / major section editorial block)
  if (variant === "featured") {
    return (
      <div className={`relative ${className}`}>
        {/* Double offset geometric layer */}
        <div
          className={`absolute translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 inset-0 ${offsetClass} border-2 border-navy`}
          aria-hidden="true"
        />

        {/* Main white frame with navy border */}
        <div className="relative bg-white border-2 border-navy p-2.5 sm:p-3 shadow-none">
          <div className={`relative w-full overflow-hidden border-2 border-navy/25 ${aspectRatio}`}>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              style={{ objectFit: "cover", objectPosition }}
              className={`transition-transform duration-700 hover:scale-[1.02] ${imageClassName}`}
            />

            {badge && (
              <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest shadow-brutal-sm">
                {badge}
              </div>
            )}
          </div>

          {/* Caption strip */}
          {(caption || captionLocation) && (
            <div className="mt-2.5 pt-2 border-t-2 border-navy/10 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-care-blue" />
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-navy">
                  {caption}
                </span>
              </div>
              {captionLocation && (
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                  {captionLocation}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // VARIANT: CAPTION (Emphasis on caption strip)
  if (variant === "caption") {
    return (
      <div className={`relative bg-white border-2 border-navy p-2 shadow-brutal-navy ${className}`}>
        <div className={`relative w-full overflow-hidden border border-navy/15 ${aspectRatio}`}>
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
            <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-white border border-navy text-navy text-[9px] font-black uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>
        <div className="mt-2 px-1 py-1.5 bg-paper border border-navy/15 flex items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-navy truncate">
            {caption || alt}
          </span>
          {captionLocation && (
            <span className="text-[9px] font-black uppercase tracking-widest text-care-blue shrink-0">
              {captionLocation}
            </span>
          )}
        </div>
      </div>
    );
  }

  // VARIANT: MOBILE (Optimized for small screens)
  if (variant === "mobile") {
    return (
      <div className={`relative bg-white border-2 border-navy p-1.5 shadow-brutal-sm ${className}`}>
        <div className={`relative w-full overflow-hidden border border-navy/15 ${aspectRatio}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            style={{ objectFit: "cover", objectPosition }}
            className={imageClassName}
          />
        </div>
        {caption && (
          <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-navy/70 text-center">
            {caption}
          </p>
        )}
      </div>
    );
  }

  // VARIANT: DEFAULT
  return (
    <div className={`relative bg-white border-2 border-navy p-2 shadow-brutal-navy ${className}`}>
      <div className={`relative w-full overflow-hidden border border-navy/20 ${aspectRatio}`}>
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
          <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 bg-warm-yellow border border-navy text-navy text-[9px] font-black uppercase tracking-wider">
            {badge}
          </div>
        )}
      </div>
      {caption && (
        <div className="mt-2 pt-1.5 border-t border-navy/10 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-navy/60">
          <span>{caption}</span>
          {captionLocation && (
            <span className="text-care-blue">{captionLocation}</span>
          )}
        </div>
      )}
    </div>
  );
}
