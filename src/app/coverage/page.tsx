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

      {/* ── Hero: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">Coverage</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Coverage Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95]">
            Across Greater
            <br />
            <span className="text-[#1565D8]">Hyderabad.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#536B86] max-w-xl leading-relaxed">
            Our fleet covers all major metropolitan zones, suburban healthcare belts, and interstate highways with rapid triage and dispatch.
          </p>

          <div className="mt-6">
            <Link
              href="/coverage/hyderabad"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1565D8] text-white font-black text-xs uppercase tracking-wider border-2 border-[#0A2A5E] shadow-sm hover:bg-[#0A2A5E] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">location_city</span>
              View Greater Hyderabad Metropolitan Overview →
            </Link>
          </div>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Zone Grid (White Dominant Surfaces) ── */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="bg-white border-2 border-[#DDE7F2] p-6 shadow-sm rounded-[2px] flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-4 pb-3 border-b border-[#DDE7F2] flex items-center justify-between">
                    <span>
                      <span className="material-symbols-outlined text-[16px] text-[#1565D8] mr-2 align-middle">
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
                          className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 bg-[#EAF2FC] border border-[#DDE7F2] text-[#0A2A5E] hover:bg-[#1565D8] hover:text-white hover:border-[#1565D8] transition-all rounded-[2px]"
                        >
                          {area.name} →
                        </Link>
                      ) : (
                        <span
                          key={area.name}
                          className="text-[11px] font-semibold tracking-wider px-2.5 py-1.5 bg-[#F8FAFD] border border-[#DDE7F2] text-[#536B86] rounded-[2px]"
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

      {/* ── Emergency CTA (Navy CTA) ── */}
      <section className="w-full bg-[#0A2A5E] py-14 border-t-2 border-[#1565D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Not Seeing Your Specific Area?
            </h2>
            <p className="text-sm font-medium text-white/80 mt-1">
              Call us immediately — our dispatch coordinators can route the closest available unit to your location.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1565D8] border-2 border-white text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-white hover:text-[#0A2A5E] transition-all shadow-sm shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call {siteConfig.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
