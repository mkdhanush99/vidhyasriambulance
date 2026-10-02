import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { siteConfig } from "@/data/site";
import { localities } from "@/data/coverage";
import { getServiceImage } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";

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

      {/* ── Hero (Editorial 55% Content / 45% Image Composition) ── */}
      <section className="w-full bg-brand-gradient py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: 55% content (7 cols) */}
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-white">{service.name}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {service.category} · 24×7 Available
              </div>

              {/* Exact H1 Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
                {service.h1Title}
              </h1>
              <p className="text-base sm:text-lg font-medium text-white/85 max-w-xl leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
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
                variant="featured"
                offsetColor="warmYellow"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={getServiceImage(service.slug).objectPosition}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Booking Information Checklist & Service Specifications ── */}
      <section className="w-full bg-white py-14 sm:py-18 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checklist */}
            <div className="p-6 sm:p-8 bg-clinic-mist border-2 border-navy shadow-brutal-sm">
              <span className="inline-block px-2.5 py-0.5 bg-warm-yellow text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                Pre-Booking Checklist
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                Information to Share When Booking
              </h2>
              <p className="text-xs text-navy/70 mb-4 font-medium">
                To help our dispatch coordinators arrange the right unit quickly, please share the following details:
              </p>
              <ul className="space-y-2.5 text-xs font-bold text-navy/80">
                {service.bookingChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features */}
            <div className="p-6 sm:p-8 bg-paper border-2 border-navy shadow-brutal-sm">
              <span className="inline-block px-2.5 py-0.5 bg-lavender text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                Service Capabilities
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                Key Support Features
              </h2>
              <p className="text-xs text-navy/70 mb-4 font-medium">
                Standard equipment and operational capabilities arranged for this service category:
              </p>
              <ul className="space-y-2.5 text-xs font-bold text-navy/80">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5 shrink-0">
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
      <section className="w-full bg-paper py-14 sm:py-18 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Related Services */}
          {related.length > 0 && (
            <div className="mb-14">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                    Related Services
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-navy">
                    Explore Other Medical Transport Options
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-bold uppercase text-care-blue hover:text-navy transition-colors shrink-0"
                >
                  All Services →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className={`p-5 border-2 border-navy ${accentBgMap[rel.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[18px] text-navy">
                        {rel.icon}
                      </span>
                      <h3 className="text-sm font-extrabold uppercase text-navy">
                        {rel.name}
                      </h3>
                    </div>
                    <p className="text-xs text-navy/70 line-clamp-2 font-medium">
                      {rel.shortDescription}
                    </p>
                    <span className="text-[10px] font-extrabold uppercase text-care-blue mt-3 inline-block">
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
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">
                  Service Coverage
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-navy">
                  Available Across Hyderabad Localities
                </h2>
              </div>
              <Link
                href="/coverage"
                className="text-xs font-bold uppercase text-care-blue hover:text-navy transition-colors shrink-0"
              >
                All Coverage Hubs →
              </Link>
            </div>
            <p className="text-xs text-navy/70 mb-4 font-medium">
              Vidhya Sri Ambulance provides {service.name.toLowerCase()} support across all major hubs in Greater Hyderabad:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/coverage/hyderabad"
                className="px-3 py-1.5 bg-navy text-white text-[11px] font-bold uppercase tracking-wider hover:bg-navy-dark transition-all"
              >
                Hyderabad Metropolitan Area
              </Link>
              {sampleCoverage.slice(1).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/coverage/${loc.slug}`}
                  className="px-3 py-1.5 bg-white border border-navy text-navy text-[11px] font-bold uppercase tracking-wider hover:bg-clinic-mist transition-all"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      {service.faqs.length > 0 && (
        <section className="w-full bg-white py-14 sm:py-18 border-b-2 border-navy/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
            <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
              Frequently Asked Questions About {service.name}
            </h2>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-paper border-2 border-navy p-5 shadow-brutal-sm open:shadow-brutal-navy transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-navy list-none">
                    {faq.question}
                    <span className="material-symbols-outlined text-[20px] text-navy/40 group-open:rotate-180 transition-transform shrink-0 ml-4">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm font-medium text-navy/70 leading-relaxed border-t border-navy/10 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Emergency Action Strip ── */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Book {service.name}
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Contact our 24×7 dispatch team directly by phone or WhatsApp to coordinate your journey.
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
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
