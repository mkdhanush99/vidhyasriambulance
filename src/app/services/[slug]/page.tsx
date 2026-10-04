import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { siteConfig } from "@/data/site";
import { localities } from "@/data/coverage";
import { getServiceImage } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ProcessReassurance } from "@/components/ui/ProcessReassurance";
import { ServiceContextualActions } from "@/components/ui/ServiceContextualActions";
import { ServiceMotifBadge } from "@/components/ui/ServiceMotifBadge";
import { RouteMotif } from "@/components/ui/RouteMotif";
import { ServiceMotionGraphic } from "@/components/motion/MotionGraphics";
import { MetaLabel } from "@/components/ui/MetaLabel";
import {
  FreezerBoxShowcase,
  MortuaryAmbulanceShowcase,
} from "@/components/ui/SpecializedMortuaryShowcases";

// ── Static params for SSG ──
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ── Dynamic metadata ──
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${siteConfig.seo.url}/services/${service.slug}`;

  return {
    title: { absolute: service.seo.title },
    description: service.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url,
      type: "website",
      images: [
        {
          url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${service.name} - Vidhya Sri Ambulance Hyderabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [`${siteConfig.seo.url}${siteConfig.ogImage}`],
    },
  };
}

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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedServices);
  const sampleCoverage = localities.slice(0, 6);

  // Structured Data: BreadcrumbList + Service + FAQPage
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
        name: "Services",
        item: `${siteConfig.seo.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${siteConfig.seo.url}/services/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1Title,
    description: service.description,
    provider: {
      "@type": "EmergencyService",
      name: siteConfig.companyName,
      telephone: siteConfig.phone.raw,
      url: siteConfig.seo.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    serviceType: service.name,
  };

  const faqJsonLd =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* ── Hero: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: 55% content (7 cols) */}
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
              >
                <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[#0A2A5E] transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-[#0A2A5E]">{service.name}</span>
              </nav>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <ServiceMotifBadge slug={service.slug} />
                <ServiceMotionGraphic slug={service.slug} className="w-16 h-12 inline-block opacity-90" />
                <MetaLabel
                  category={service.category}
                  detail="24×7 IMMEDIATE DISPATCH"
                  indicator="pulse"
                  indicatorColor={service.slug.includes("emergency") ? "red" : "blue"}
                />
              </div>

              {/* Exact H1 Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
                {service.h1Title}
              </h1>

              <RouteMotif
                variant="horizontal"
                originLabel="Point of Call"
                destinationLabel="Specialist Care Delivery"
                className="max-w-md my-4"
              />

              <p className="text-base sm:text-lg font-medium text-[#536B86] max-w-xl leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#0A2A5E] transition-all shadow-[3px_3px_0_#0A2A5E] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Call 24×7 · {siteConfig.phone.display}
                </a>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[13px] font-extrabold uppercase tracking-wider hover:bg-[#EAF2FC] transition-all shadow-[3px_3px_0_#0A2A5E]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: 45% Large Framed Service Image (5 cols) */}
            <div className="lg:col-span-5">
              <ImageFrame
                src={getServiceImage(service.slug).src}
                alt={getServiceImage(service.slug).alt}
                caption={getServiceImage(service.slug).caption}
                captionLocation={getServiceImage(service.slug).captionLocation}
                badge={getServiceImage(service.slug).badge}
                variant="corner-marked"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={getServiceImage(service.slug).objectPosition}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Specialized Showcase: Dead Body Freezer Box Rentals (Hire/Rent & VIP) ── */}
      {service.slug === "dead-body-freezer-box" && <FreezerBoxShowcase />}

      {/* ── Specialized Showcase: Mortuary Ambulance & Transit Standards ── */}
      {(service.slug === "mortuary-ambulance" || service.slug === "mortuary-transportation") && (
        <MortuaryAmbulanceShowcase />
      )}

      {/* ── Booking Information Checklist & Service Specifications ── */}
      <section className="w-full bg-white py-14 sm:py-18 border-b border-[#DDE7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checklist */}
            <div className="p-6 sm:p-8 bg-[#EAF2FC] border-2 border-[#DDE7F2] rounded-[2px]">
              <span className="inline-block px-2.5 py-0.5 bg-white text-[#1565D8] text-[10px] font-black uppercase tracking-wider border border-[#1565D8]/30 mb-3 rounded-[2px]">
                Pre-Booking Checklist
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                Information to Share When Booking
              </h2>
              <p className="text-xs text-[#536B86] mb-4 font-medium">
                To help our dispatch coordinators arrange the right unit quickly, please share the following details:
              </p>
              <ul className="space-y-2.5 text-xs font-bold text-[#0A2A5E]">
                {service.bookingChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1565D8] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features */}
            <div className="p-6 sm:p-8 bg-white border-2 border-[#DDE7F2] rounded-[2px] shadow-sm">
              <span className="inline-block px-2.5 py-0.5 bg-[#EAF2FC] text-[#1565D8] text-[10px] font-black uppercase tracking-wider border border-[#1565D8]/30 mb-3 rounded-[2px]">
                Service Capabilities
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                Key Support Features
              </h2>
              <p className="text-xs text-[#536B86] mb-4 font-medium">
                Standard equipment and operational capabilities arranged for this service category:
              </p>
              <ul className="space-y-2.5 text-xs font-bold text-[#0A2A5E]">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1565D8] mt-0.5 shrink-0">
                      verified
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services & Coverage Internal Links ── */}
      <section className="w-full bg-[#F8FAFD] py-14 sm:py-18 border-b border-[#DDE7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Related Services */}
          {related.length > 0 && (
            <div className="mb-14">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86]">
                    Related Services
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                    Explore Other Medical Transport Options
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors shrink-0"
                >
                  All Services →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-5 border-2 border-[#DDE7F2] bg-white hover:border-[#0A2A5E] hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[18px] text-[#1565D8] group-hover:scale-110 transition-transform">
                        {rel.icon}
                      </span>
                      <h3 className="text-sm font-extrabold uppercase text-[#0A2A5E]">
                        {rel.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#536B86] line-clamp-2 font-medium">
                      {rel.shortDescription}
                    </p>
                    <span className="text-[10px] font-extrabold uppercase text-[#1565D8] mt-3 inline-block">
                      {rel.cardAnchor}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hyderabad Coverage Links */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86]">
                  Service Coverage
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                  Available Across Hyderabad Localities
                </h2>
              </div>
              <Link
                href="/coverage"
                className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors shrink-0"
              >
                All Coverage Hubs →
              </Link>
            </div>
            <p className="text-xs text-[#536B86] mb-4 font-medium">
              Vidhya Sri Ambulance provides {service.name.toLowerCase()} support across all major hubs in Greater Hyderabad:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/coverage/hyderabad"
                className="px-3 py-1.5 bg-[#0A2A5E] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#1565D8] transition-all"
              >
                Hyderabad Metropolitan Area
              </Link>
              {sampleCoverage.slice(1).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/coverage/${loc.slug}`}
                  className="px-3 py-1.5 bg-white border border-[#DDE7F2] text-[#0A2A5E] text-[11px] font-bold uppercase tracking-wider hover:border-[#0A2A5E] hover:bg-[#EAF2FC] transition-all"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Reassurance ── */}
      <ProcessReassurance />

      {/* ── FAQ Section ── */}
      {service.faqs.length > 0 && (
        <section className="w-full bg-white py-14 sm:py-18 border-b border-[#DDE7F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-2 rounded-[2px]">
                  Questions & Answers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
                  Frequently Asked Questions About {service.name}
                </h2>
              </div>
              <Link
                href="/faq"
                className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors shrink-0"
              >
                All FAQs →
              </Link>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white border-2 border-[#DDE7F2] p-5 shadow-sm open:border-[#0A2A5E] transition-all rounded-[2px]"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] list-none">
                    {faq.question}
                    <span className="material-symbols-outlined text-[20px] text-[#536B86] group-open:rotate-180 transition-transform shrink-0 ml-4">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm font-medium text-[#536B86] leading-relaxed border-t border-[#DDE7F2] pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDE7F2] flex items-center justify-between text-xs text-[#536B86]">
              <span>Have additional operational or tariff questions?</span>
              <Link
                href="/faq"
                className="font-extrabold uppercase text-[#1565D8] hover:text-[#0A2A5E]"
              >
                Explore Full FAQ Hub →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Contextual Service CTAs (Immediate / Transfer / Decision Helper) ── */}
      <ServiceContextualActions
        serviceName={service.name}
        serviceSlug={service.slug}
      />
    </>
  );
}
