import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { localities } from "@/data/coverage";

export const metadata: Metadata = {
  title: "Ambulance Coverage Areas Across Hyderabad & Telangana",
  description:
    "24×7 ambulance coverage across Greater Hyderabad, Secunderabad, Cyberabad, and outstation interstate routes. Find your nearest ambulance dispatch node.",
  alternates: {
    canonical: `${siteConfig.seo.url}/coverage`,
  },
  openGraph: {
    title: "Ambulance Coverage Areas Across Hyderabad | Vidhya Sri Ambulance",
    description:
      "24×7 ambulance coverage across Greater Hyderabad, Secunderabad, Cyberabad, and outstation interstate routes. Find your nearest ambulance dispatch node.",
    url: `${siteConfig.seo.url}/coverage`,
    images: [
      {
        url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Ambulance Coverage Areas Across Hyderabad - Vidhya Sri Ambulance",
      },
    ],
  },
};

const localitySlugMap = new Map(localities.map((l) => [l.name.toLowerCase(), l.slug]));

const zones = [
  {
    name: "Central Hyderabad",
    areas: [
      { name: "Banjara Hills", slug: "banjara-hills" },
      { name: "Jubilee Hills", slug: "jubilee-hills" },
      { name: "Somajiguda", slug: "somajiguda" },
      { name: "Punjagutta", slug: "punjagutta" },
      { name: "Begumpet", slug: "begumpet" },
      { name: "Ameerpet" },
      { name: "Nampally" },
      { name: "Abids" },
      { name: "Koti" },
      { name: "Himayat Nagar" },
      { name: "Basheerbagh" },
    ],
  },
  {
    name: "West Hyderabad (Cyberabad)",
    areas: [
      { name: "Hitec City", slug: "hitech-city" },
      { name: "Gachibowli", slug: "gachibowli" },
      { name: "Kondapur", slug: "kondapur" },
      { name: "Madhapur", slug: "madhapur" },
      { name: "Kukatpally", slug: "kukatpally" },
      { name: "Miyapur" },
      { name: "Chandanagar" },
      { name: "Manikonda" },
      { name: "Nallagandla" },
      { name: "Raidurgam" },
    ],
  },
  {
    name: "Secunderabad & North",
    areas: [
      { name: "Secunderabad", slug: "secunderabad" },
      { name: "Begumpet", slug: "begumpet" },
      { name: "Alwal" },
      { name: "Malkajgiri" },
      { name: "Tarnaka" },
      { name: "Bowenpally" },
      { name: "Trimulgherry" },
      { name: "Kompally" },
      { name: "Medchal" },
      { name: "Shamirpet" },
      { name: "Bolaram" },
    ],
  },
  {
    name: "East Hyderabad",
    areas: [
      { name: "LB Nagar", slug: "lb-nagar" },
      { name: "Uppal" },
      { name: "Dilsukhnagar" },
      { name: "Nagole" },
      { name: "Habsiguda" },
      { name: "Nacharam" },
      { name: "Malakpet" },
      { name: "Chaitanyapuri" },
      { name: "Kothapet" },
      { name: "Ramanthapur" },
    ],
  },
  {
    name: "South Hyderabad",
    areas: [
      { name: "Mehdipatnam", slug: "mehdipatnam" },
      { name: "Attapur" },
      { name: "Rajendranagar" },
      { name: "Shamshabad" },
      { name: "Chandrayangutta" },
      { name: "Falaknuma" },
      { name: "Srisailam Highway" },
      { name: "Narsingi" },
      { name: "Gandipet" },
      { name: "Kokapet" },
    ],
  },
  {
    name: "Outstation & Interstate Routes",
    areas: [
      { name: "Warangal" },
      { name: "Karimnagar" },
      { name: "Nizamabad" },
      { name: "Khammam" },
      { name: "Nalgonda" },
      { name: "Vijayawada" },
      { name: "Tirupati" },
      { name: "Bangalore" },
      { name: "Mumbai" },
      { name: "Chennai" },
    ],
  },
];

export default function CoveragePage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Coverage</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            Coverage Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            Across Greater
            <br />
            <span className="text-warm-yellow">Hyderabad.</span>
          </h1>
          <p className="mt-4 text-base font-medium text-white/75 max-w-xl">
            Our fleet covers all major metropolitan zones, suburban healthcare belts, and interstate highways with rapid triage and dispatch.
          </p>

          <div className="mt-6">
            <Link
              href="/coverage/hyderabad"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-yellow text-navy font-black text-xs uppercase tracking-wider border-2 border-navy shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <span className="material-symbols-outlined text-[18px]">location_city</span>
              View Greater Hyderabad Metropolitan Overview →
            </Link>
          </div>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* Zone Grid */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="bg-white border-2 border-navy p-6 shadow-brutal-sm flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-4 pb-3 border-b-2 border-navy/10 flex items-center justify-between">
                    <span>
                      <span className="material-symbols-outlined text-[16px] text-care-blue mr-2 align-middle">
                        location_on
                      </span>
                      {zone.name}
                    </span>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {zone.areas.map((area) => {
                      const slug = area.slug || localitySlugMap.get(area.name.toLowerCase());
                      return slug ? (
                        <Link
                          key={area.name}
                          href={`/coverage/${slug}`}
                          className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 bg-clinic-mist border border-navy/30 text-navy hover:bg-care-blue hover:text-white hover:border-navy transition-all"
                        >
                          {area.name} →
                        </Link>
                      ) : (
                        <span
                          key={area.name}
                          className="text-[11px] font-semibold tracking-wider px-2.5 py-1.5 bg-paper border border-navy/10 text-navy/60"
                        >
                          {area.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Not Seeing Your Specific Area?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Call us immediately — our dispatch coordinators can route the closest available unit to your location.
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
