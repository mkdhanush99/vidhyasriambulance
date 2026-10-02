import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { localities, getLocalityBySlug } from "@/data/coverage";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";

// ── Static params for SSG ──
export async function generateStaticParams() {
  return localities.map((loc) => ({ slug: loc.slug }));
}

// ── Dynamic metadata ──
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocalityBySlug(slug);
  if (!loc) return {};

  const pageTitle =
    slug === "hyderabad"
      ? "Ambulance Service in Hyderabad | Vidhya Sri Ambulance"
      : `Ambulance Service in ${loc.name}, Hyderabad | Vidhya Sri Ambulance`;

  const pageDescription =
    slug === "hyderabad"
      ? "Vidhya Sri Ambulance Services provides 24×7 emergency ambulance and planned patient transportation across Greater Hyderabad. Call 9951648174."
      : `24×7 ambulance and patient transportation in ${loc.name}, Hyderabad. Emergency ALS, ICU, and scheduled hospital transfers by Vidhya Sri Ambulance. Call 9951648174.`;

  const url = `${siteConfig.seo.url}/coverage/${loc.slug}`;

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "website",
      images: [
        {
          url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `Vidhya Sri Ambulance Service in ${loc.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteConfig.seo.url}${siteConfig.ogImage}`],
    },
  };
}

export default async function LocalityCoveragePage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocalityBySlug(slug);
  if (!loc) notFound();

  const isPrimaryCityHub = slug === "hyderabad";

  const h1Title = isPrimaryCityHub
    ? "Ambulance Service in Hyderabad"
    : `Ambulance Service in ${loc.name}, Hyderabad`;

  const introText = isPrimaryCityHub
    ? "Vidhya Sri Ambulance Services provides ambulance and patient transportation across Hyderabad, including emergency transport, planned patient transfers and specialized ambulance requirements."
    : `Vidhya Sri Ambulance Services provides ambulance and patient transportation support in and around ${loc.name}, subject to availability and journey requirements. ${loc.intro}`;

  // Matched services for this locality
  const matchedServices = services.filter((s) =>
    loc.recommendedServices.includes(s.slug)
  );

  // Structured Data: BreadcrumbList + LocalBusiness / EmergencyService
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.seo.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Coverage",
        item: `${siteConfig.seo.url}/coverage`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isPrimaryCityHub ? "Hyderabad" : loc.name,
        item: `${siteConfig.seo.url}/coverage/${loc.slug}`,
      },
    ],
  };

  const emergencyServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: `Vidhya Sri Ambulance Service - ${isPrimaryCityHub ? "Hyderabad" : loc.name}`,
    image: `${siteConfig.seo.url}${siteConfig.logo.stacked.gradient}`,
    "@id": `${siteConfig.seo.url}/coverage/${loc.slug}#service`,
    url: `${siteConfig.seo.url}/coverage/${loc.slug}`,
    telephone: siteConfig.phone.raw,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4156,
      longitude: 78.4357,
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqJsonLd =
    loc.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loc.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emergencyServiceJsonLd),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* ── Hero Section ── */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/coverage"
              className="hover:text-white transition-colors"
            >
              Coverage
            </Link>
            <span>/</span>
            <span className="text-white">{isPrimaryCityHub ? "Hyderabad" : loc.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {loc.zone} · 24×7 Local Dispatch
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            {h1Title}
          </h1>

          <p className="text-base sm:text-lg font-medium text-white/85 max-w-3xl leading-relaxed">
            {introText}
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
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
              WhatsApp Dispatch
            </a>
          </div>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Key Corridors, Nearby Hospitals & Dispatch Visual ── */}
      <section className="w-full bg-paper py-14 sm:py-18 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Corridors and Hospitals (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Primary Corridors */}
              <div className="p-6 bg-white border-2 border-navy shadow-brutal-sm">
                <span className="inline-block px-2.5 py-0.5 bg-warm-yellow text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                  Key Road Links
                </span>
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                  {loc.name} Transit Corridors
                </h2>
                <ul className="space-y-2 text-xs font-bold text-navy/70">
                  {loc.landmarkCorridors.map((corridor) => (
                    <li key={corridor} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-care-blue">
                        route
                      </span>
                      {corridor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Hospital Clusters */}
              <div className="p-6 bg-white border-2 border-navy shadow-brutal-sm">
                <span className="inline-block px-2.5 py-0.5 bg-lavender text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                  Nearby Medical Facilities
                </span>
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                  Key Healthcare Destinations
                </h2>
                <ul className="space-y-2 text-xs font-bold text-navy/70">
                  {loc.nearbyHospitalClusters.map((hosp) => (
                    <li key={hosp} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-emerald-600">
                        local_hospital
                      </span>
                      {hosp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Central Dispatch Supporting Image (5 cols) */}
            <div className="lg:col-span-5">
              <ImageFrame
                src={siteImages.coverage.supportingImage.src}
                alt={siteImages.coverage.supportingImage.alt}
                caption={siteImages.coverage.supportingImage.caption}
                captionLocation={`Central Dispatch · Serving ${loc.name}`}
                badge="LOCAL DISPATCH"
                variant="offset"
                offsetColor="careBlue"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.coverage.supportingImage.objectPosition}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Journey Scenarios ── */}
      <section className="w-full bg-clinic-mist py-16 sm:py-20 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
            Local Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
            Common Patient Transit Scenarios in {loc.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loc.scenarios.map((scen, idx) => (
              <div
                key={scen.title}
                className="p-6 bg-white border-2 border-navy shadow-brutal-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-extrabold uppercase tracking-tight text-navy">
                      {scen.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-navy/70 leading-relaxed">
                    {scen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Services for this Area ── */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
            Service Options
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
            Available Ambulance Services in {loc.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-6 bg-white border-2 border-navy hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 border-2 border-navy bg-clinic-mist text-navy">
                    <span className="material-symbols-outlined text-[20px]">
                      {service.icon}
                    </span>
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy group-hover:text-care-blue transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-xs font-medium text-navy/65 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-navy/50 group-hover:text-care-blue transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    {service.cardAnchor}
                  </span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pickup Guidance & Preparation ── */}
      <section className="w-full bg-clinic-mist py-16 sm:py-20 border-t-2 border-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-mint border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
            Caller Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-6">
            Helpful Advice for Callers in {loc.name}
          </h2>
          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-navy space-y-4">
            {loc.pickupGuidance.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-care-blue shrink-0 mt-0.5">
                  info
                </span>
                <p className="text-xs sm:text-sm font-semibold text-navy/80 leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local FAQs ── */}
      {loc.faqs.length > 0 && (
        <section className="w-full bg-paper py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
              Local FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
              Frequently Asked Questions in {loc.name}
            </h2>

            <div className="flex flex-col gap-4">
              {loc.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border-2 border-navy p-5 shadow-brutal-sm open:shadow-brutal-navy transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-navy list-none">
                    {faq.question}
                    <span className="material-symbols-outlined text-[20px] text-navy/40 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-[13px] font-medium text-navy/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Nearby Coverage Hubs & Navigation ── */}
      <section className="w-full bg-clinic-mist py-14 border-t-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy">
              Related Coverage Areas & Links
            </h2>
            <div className="flex items-center gap-3">
              <Link
                href="/coverage"
                className="text-xs font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors"
              >
                Coverage Hub →
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors"
              >
                Contact Page →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {loc.nearbyLocalities.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/coverage/${nearby.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-navy text-xs font-extrabold uppercase text-navy hover:bg-warm-yellow transition-colors shadow-brutal-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-care-blue">
                  near_me
                </span>
                {nearby.name}
              </Link>
            ))}
            {!isPrimaryCityHub && (
              <Link
                href="/coverage/hyderabad"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs font-extrabold uppercase border-2 border-navy hover:bg-navy-dark transition-colors shadow-brutal-sm"
              >
                Hyderabad Central Hub
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Need An Ambulance in {loc.name}?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Contact our 24×7 dispatch team for emergency or planned patient transportation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-white border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-navy shrink-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
