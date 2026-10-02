import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { localities } from "@/data/coverage";
import { siteConfig } from "@/data/site";

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
    title: service.seo.title,
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
  coral: "bg-coral",
  lavender: "bg-lavender",
  peach: "bg-peach",
  aqua: "bg-aqua",
  warmYellow: "bg-warm-yellow",
  mint: "bg-mint",
  softGreen: "bg-soft-green",
  purple: "bg-purple-accent",
  mist: "bg-clinic-mist",
};

const accentLightBgMap: Record<string, string> = {
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
  // Highlight top relevant coverage zones
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
    name: service.name,
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
    serviceType: "Ambulance Transport Service",
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

      {/* ── Hero ── */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
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

          <div className="flex items-start gap-4 mb-6">
            <span
              className={`inline-flex items-center justify-center w-14 h-14 border-2 border-white/30 ${accentBgMap[service.accent] || "bg-clinic-mist"}`}
            >
              <span className="material-symbols-outlined text-[28px] text-navy">
                {service.icon}
              </span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            {service.name}
          </h1>
          <p className="text-base sm:text-lg font-medium text-white/80 max-w-2xl leading-relaxed">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-coral border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Dispatch {service.name}
            </a>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/10 border-2 border-white text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              WhatsApp Triage
            </a>
          </div>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10" />
      </section>

      {/* ── Practical Booking & Information Protocol ── */}
      <section className="w-full bg-white py-14 sm:py-18 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-clinic-mist border-2 border-navy shadow-brutal-sm">
              <span className="inline-block px-2.5 py-0.5 bg-warm-yellow text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                Pre-Dispatch Checklist
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                Information to Share When Requesting This Unit
              </h2>
              <ul className="space-y-2 text-xs font-semibold text-navy/75">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5">
                    check
                  </span>
                  Exact caller location, floor number, and landmark details for driver routing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5">
                    check
                  </span>
                  Current conscious state, breathing status, and known underlying medical conditions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5">
                    check
                  </span>
                  Destination hospital or clinic name (and whether admission has been pre-arranged).
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5">
                    check
                  </span>
                  Any specialized transport requirements (such as ventilator mode or infant incubator).
                </li>
              </ul>
            </div>

            <div className="p-6 bg-clinic-mist border-2 border-navy shadow-brutal-sm">
              <span className="inline-block px-2.5 py-0.5 bg-mint text-navy text-[10px] font-black uppercase tracking-wider border border-navy mb-3">
                Journey Arrangement
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-navy mb-3">
                How Transit Care is Coordinated
              </h2>
              <p className="text-xs sm:text-sm font-medium text-navy/70 leading-relaxed mb-4">
                The appropriate ambulance configuration is confirmed with our central dispatch coordinator based on clinical severity. En route, the medical escort coordinates vitals telemetry and pre-alerts the receiving emergency department to facilitate immediate bed-to-bed handover upon arrival.
              </p>
              <Link
                href="/how-it-works"
                className="text-xs font-black uppercase text-care-blue hover:text-navy transition-colors inline-flex items-center gap-1"
              >
                Learn more about our 4-step dispatch workflow →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features & Capabilities ── */}
      <section className={`w-full ${accentLightBgMap[service.accent] || "bg-clinic-mist"} py-16 sm:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-6 shadow-brutal-sm">
            Equipment & Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
            On-Board Equipment for {service.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 bg-white border-2 border-navy shadow-brutal-sm"
              >
                <span className="material-symbols-outlined text-[20px] text-care-blue mt-0.5">
                  check_circle
                </span>
                <span className="text-sm font-bold text-navy">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {service.faqs.length > 0 && (
        <section className="w-full bg-paper py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-6 shadow-brutal-sm">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
              Frequently Asked Questions About {service.name}
            </h2>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => (
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

      {/* ── Relevant Hyderabad Coverage Zones ── */}
      <section className="w-full bg-clinic-mist py-16 border-t-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy">
                Hyderabad Coverage Areas for {service.name}
              </h2>
              <p className="text-xs font-semibold text-navy/60 mt-1">
                Stationed response units ready across primary medical and residential zones.
              </p>
            </div>
            <Link
              href="/coverage"
              className="text-xs font-bold uppercase tracking-wider text-care-blue hover:text-navy transition-colors shrink-0"
            >
              Browse All Hyderabad Coverage Hubs →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {sampleCoverage.map((area) => (
              <Link
                key={area.slug}
                href={`/coverage/${area.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-navy text-xs font-extrabold uppercase text-navy hover:bg-warm-yellow transition-colors shadow-brutal-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-care-blue">
                  location_on
                </span>
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="w-full bg-paper py-16 sm:py-20 border-t-2 border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
              Related Ambulance Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group flex flex-col p-5 border-2 border-navy ${accentLightBgMap[s.accent] || "bg-clinic-mist"} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy transition-all`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[18px] text-navy">
                      {s.icon}
                    </span>
                    <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy group-hover:text-care-blue transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-[12px] font-medium text-navy/60 leading-relaxed flex-1">
                    {s.shortDescription}
                  </p>
                  <span className="mt-3 text-[10px] font-bold uppercase text-care-blue">
                    View {s.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Emergency CTA ── */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Need {service.name}?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Available 24×7 across Hyderabad. Call now for immediate dispatch.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call {siteConfig.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
