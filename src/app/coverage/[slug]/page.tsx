import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { localities, getLocalityBySlug } from "@/data/coverage";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { NearbyAreas } from "@/components/ui/NearbyAreas";
import { ProcessReassurance } from "@/components/ui/ProcessReassurance";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { RouteMotif } from "@/components/ui/RouteMotif";

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

      {/* ── Hero Section: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/coverage"
              className="hover:text-[#0A2A5E] transition-colors"
            >
              Coverage
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">{isPrimaryCityHub ? "Hyderabad" : loc.name}</span>
          </nav>

          <div className="mb-4">
            <MetaLabel
              category={loc.zone.toUpperCase()}
              detail="24×7 LOCAL DISPATCH"
              indicator="pulse"
              indicatorColor="blue"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
            {h1Title}
          </h1>

          <p className="text-base sm:text-lg font-medium text-[#536B86] max-w-3xl leading-relaxed">
            {introText}
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#0A2A5E] transition-all shadow-sm hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call 24×7 · {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#EAF2FC] transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WhatsApp Dispatch
            </a>
          </div>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Key Corridors, Nearby Hospitals & Dispatch Visual ── */}
      <section className="w-full bg-white py-14 sm:py-18 border-b border-[#DDE7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Corridors and Hospitals (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Primary Corridors */}
              <div className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[2px] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-[#EAF2FC] text-[#1565D8] text-[10px] font-black uppercase tracking-wider border border-[#1565D8]/30 mb-3 rounded-[2px]">
                    Key Road Links
                  </span>
                  <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                    {loc.name} Transit Corridors
                  </h2>
                  <ul className="space-y-2 text-xs font-bold text-[#0A2A5E]">
                    {loc.landmarkCorridors.map((corridor) => (
                      <li key={corridor} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-[#1565D8]">
                          route
                        </span>
                        {corridor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-[#DDE7F2] mt-4">
                  <RouteMotif
                    variant="horizontal"
                    originLabel={loc.name}
                    destinationLabel="Hospital Hub"
                  />
                </div>
              </div>

              {/* Nearby Hospital Clusters */}
              <div className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[2px] shadow-sm">
                <span className="inline-block px-2.5 py-0.5 bg-[#EAF2FC] text-[#1565D8] text-[10px] font-black uppercase tracking-wider border border-[#1565D8]/30 mb-3 rounded-[2px]">
                  Nearby Medical Facilities
                </span>
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                  Key Healthcare Destinations
                </h2>
                <ul className="space-y-2 text-xs font-bold text-[#0A2A5E]">
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
                variant="corner-marked"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.coverage.supportingImage.objectPosition}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Journey Scenarios ── */}
      <section className="w-full bg-[#EAF2FC] py-16 sm:py-20 border-b border-[#DDE7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Local Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-8">
            Common Patient Transit Scenarios in {loc.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loc.scenarios.map((scen, idx) => (
              <div
                key={scen.title}
                className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#0A2A5E] text-white text-[11px] font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                      {scen.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#536B86] leading-relaxed">
                    {scen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Services for this Area ── */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Service Options
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-8">
            Available Ambulance Services in {loc.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-6 bg-white border-2 border-[#DDE7F2] hover:border-[#0A2A5E] hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-sm hover:shadow-md transition-all duration-200 rounded-[2px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-[#DDE7F2] bg-[#EAF2FC] text-[#1565D8] rounded-[2px]">
                    <span className="material-symbols-outlined text-[20px]">
                      {service.icon}
                    </span>
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] group-hover:text-[#1565D8] transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-xs font-medium text-[#536B86] leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="mt-4 pt-3 border-t border-[#DDE7F2] flex items-center justify-between text-[#536B86] group-hover:text-[#1565D8] transition-colors">
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
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-20 border-t border-[#DDE7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Caller Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-6">
            Helpful Advice for Callers in {loc.name}
          </h2>
          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm space-y-4 rounded-[2px]">
            {loc.pickupGuidance.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#1565D8] shrink-0 mt-0.5">
                  info
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#0A2A5E] leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Reassurance ── */}
      <ProcessReassurance />

      {/* ── Also Serving Nearby (Dedicated Component) ── */}
      <section className="w-full bg-[#F8FAFD] py-14 sm:py-18 border-b border-[#DDE7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <NearbyAreas currentLocality={loc} />
        </div>
      </section>

      {/* ── Local FAQs ── */}
      {loc.faqs.length > 0 && (
        <section className="w-full bg-white py-16 sm:py-20 border-b border-[#DDE7F2]">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-2 rounded-[2px]">
                  Local FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                  Frequently Asked Questions in {loc.name}
                </h2>
              </div>
              <Link
                href="/faq"
                className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors shrink-0"
              >
                All FAQs →
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {loc.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border-2 border-[#DDE7F2] p-5 shadow-sm open:border-[#0A2A5E] transition-all rounded-[2px]"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] list-none">
                    {faq.question}
                    <span className="material-symbols-outlined text-[20px] text-[#536B86] group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-[13px] font-medium text-[#536B86] leading-relaxed border-t border-[#DDE7F2] pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDE7F2] flex items-center justify-between text-xs text-[#536B86]">
              <span>Need general ambulance booking questions answered?</span>
              <Link
                href="/faq"
                className="font-extrabold uppercase text-[#1565D8] hover:text-[#0A2A5E]"
              >
                View Full FAQ →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Emergency & Planned Action Strip (Navy CTA) ── */}
      <section className="w-full bg-[#0A2A5E] py-16 border-t-2 border-[#1565D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#38A3F7] block mb-1">
              24×7 Local Dispatch Active
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
              Need An Ambulance in {loc.name}?
            </h2>
            <p className="text-sm font-medium text-white/80 mt-2 max-w-xl">
              Our Somajiguda dispatch center mobilizes the nearest emergency ALS, ICU, or patient transport unit directly to your pickup point.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1565D8] border-2 border-white text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-white hover:text-[#0A2A5E] transition-all shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <a
              href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(
                `Hello Vidhya Sri, I need ambulance support in ${loc.name}. Please confirm active vehicle availability.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#25D366] border-2 border-white text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#1EBE5D] transition-all shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Dispatch
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-white border-2 border-white text-[#0A2A5E] text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#EAF2FC] transition-all shrink-0"
            >
              Contact Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
