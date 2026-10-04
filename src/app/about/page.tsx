import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { RouteMotif } from "@/components/ui/RouteMotif";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { LayeredPanel } from "@/components/ui/LayeredPanel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vidhya Sri Ambulance Services is a Hyderabad-based ambulance and patient transportation service focused on safe and appropriate healthcare journeys.",
};

const pillars = [
  {
    title: "Moving Patients With Dignity",
    description:
      "Every transfer is handled with patience, empathy, and professional attention to the patient's physical comfort and emotional reassurance.",
    icon: "volunteer_activism",
  },
  {
    title: "Helping Families in Difficult Moments",
    description:
      "During critical emergencies or stressful hospital transitions, our coordinators provide clear communication, honest timings, and calm support.",
    icon: "family_restroom",
  },
  {
    title: "Making Ambulance Access Easier",
    description:
      "Direct 24×7 phone and WhatsApp coordination allows families to quickly confirm the right ambulance category and transfer details.",
    icon: "contact_phone",
  },
  {
    title: "Wide Medical Mobility Coverage",
    description:
      "From emergency road transfers across Hyderabad to planned outstation journeys across Telangana and Andhra Pradesh.",
    icon: "route",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Context (7 cols) */}
            <div className="lg:col-span-7">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
              >
                <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#0A2A5E]">About</span>
              </nav>

              <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
                Hyderabad Ambulance Services
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-5">
                About Vidhya Sri Ambulance Services
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#536B86] max-w-2xl leading-relaxed">
                Vidhya Sri Ambulance Services is a Hyderabad-based ambulance and patient transportation service focused on helping people arrange safe, comfortable, and medically appropriate journeys across healthcare facilities.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[12px] font-black uppercase tracking-wider hover:bg-[#0B3F9E] transition-all shadow-[4px_4px_0_#0A2A5E]"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Direct Helpline: {siteConfig.phone.display}
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image 01 (Fleet Lineup) (5 cols) */}
            <div className="lg:col-span-5">
              <ImageFrame
                src={siteImages.about.hero.src}
                alt={siteImages.about.hero.alt}
                caption={siteImages.about.hero.caption}
                captionLocation={siteImages.about.hero.captionLocation}
                badge={siteImages.about.hero.badge}
                variant="featured"
                offsetColor="careBlue"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.about.hero.objectPosition}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Brand Story Section ── */}
      <section className="w-full bg-white py-16 sm:py-20 border-b-[3px] border-[#0A2A5E] relative overflow-hidden">
        <SectionNumber number="04" label="ABOUT VIDHYA SRI" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Details (7 cols) */}
            <div className="lg:col-span-7">
              <MetaLabel
                category="SECTION 04"
                detail="BRAND PHILOSOPHY"
                indicator="dot"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mt-3 mb-6">
                Care held safely, and moving forward.
              </h2>
              <div className="space-y-4 text-sm font-medium text-navy/75 leading-relaxed">
                <p>
                  The Vidhya Sri identity is built around a simple idea: care held safely and moving forward. The V-shaped mark cradles a medical cross, representing protection, care and movement.
                </p>
                <p>
                  We connect this brand idea directly to real healthcare mobility: moving patients with dignity, helping families during difficult moments, and making ambulance access straightforward and responsive.
                </p>
                <p>
                  Whether navigating emergency hospital admissions in Somajiguda, arranging scheduled patient transfers for therapy sessions across Cyberabad, or planning long-distance interstate transport, our focus remains on supportive, reliable patient care.
                </p>
              </div>

              {/* Route Motif */}
              <div className="my-6 max-w-md">
                <RouteMotif
                  variant="horizontal"
                  originLabel="Compassionate Care"
                  destinationLabel="Safe Arrival"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/services"
                  className="px-4 py-2.5 bg-care-blue border-2 border-navy text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-brutal-sm"
                >
                  Explore Services →
                </Link>
                <Link
                  href="/coverage"
                  className="px-4 py-2.5 bg-white border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-sm"
                >
                  Hyderabad Coverage →
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-4 py-2.5 bg-paper border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-warm-yellow transition-all shadow-brutal-sm"
                >
                  How It Works →
                </Link>
              </div>
            </div>

            {/* Image 02: Framed Mobile ICU Fleet with Location Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <ImageFrame
                src={siteImages.about.icuFleet.src}
                alt={siteImages.about.icuFleet.alt}
                caption={siteImages.about.icuFleet.caption}
                captionLocation={siteImages.about.icuFleet.captionLocation}
                badge={siteImages.about.icuFleet.badge}
                variant="corner-marked"
                offsetColor="careBlue"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.about.icuFleet.objectPosition}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              <LayeredPanel offsetColor="careBlue">
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-care-blue">
                      location_on
                    </span>
                    <div>
                      <span className="text-[9px] font-black uppercase text-navy/50 tracking-wider block">
                        Dispatch Base
                      </span>
                      <p className="text-xs font-bold text-navy">
                        Somajiguda, Hyderabad 500082
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-navy/10">
                    <span className="material-symbols-outlined text-[18px] text-care-blue">
                      schedule
                    </span>
                    <div>
                      <span className="text-[9px] font-black uppercase text-navy/50 tracking-wider block">
                        Readiness
                      </span>
                      <p className="text-xs font-bold text-navy">
                        24 Hours / 7 Days Continuous Operations
                      </p>
                    </div>
                  </div>
                </div>
              </LayeredPanel>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars Section with Image 03 (Patient Transport Vehicle) ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-20 border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <MetaLabel
              category="CORE VALUES"
              detail="OPERATIONAL STANDARDS"
              indicator="pulse"
              indicatorColor="blue"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mt-3">
              Four commitments guiding every dispatch.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pillars Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white border-2 border-[#DDE7F2] p-6 rounded-[4px] shadow-[4px_4px_0_#EAF2FC, 4px_4px_0_2px_#DDE7F2] hover:border-[#1565D8] transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-[#1565D8]/20 bg-[#EAF2FC] rounded-[2px] mb-4">
                    <span className="material-symbols-outlined text-[20px] text-[#1565D8]">
                      {pillar.icon}
                    </span>
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] font-medium text-[#536B86] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image 03: Patient Transfer Ambulance Vehicle (4 cols) */}
            <div className="lg:col-span-4">
              <ImageFrame
                src={siteImages.about.patientVehicle.src}
                alt={siteImages.about.patientVehicle.alt}
                caption={siteImages.about.patientVehicle.caption}
                captionLocation={siteImages.about.patientVehicle.captionLocation}
                badge={siteImages.about.patientVehicle.badge}
                variant="corner-marked"
                aspectRatio="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4]"
                objectPosition={siteImages.about.patientVehicle.objectPosition}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Verification & Operations Summary ── */}
      <section className="w-full bg-[#F3F7FC] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 rounded-[4px] shadow-[6px_6px_0_#EAF2FC, 6px_6px_0_2px_#DDE7F2]">
            <div className="max-w-3xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block mb-2">
                Operational Integrity
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                Transparent information, authentic service.
              </h2>
              <p className="text-sm font-medium text-[#536B86] leading-relaxed">
                All vehicles displayed on this website represent active Vidhya Sri ambulance transport units in Hyderabad. We do not use simulated fleet numbers or fictional operational claims. For ambulance requirements, speak directly with our team.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.phone.href}
                  className="px-5 py-3 bg-[#1565D8] border-[3px] border-[#0A2A5E] text-white text-[11px] font-extrabold uppercase tracking-wider hover:bg-[#0B3F9E] transition-all shadow-[4px_4px_0_#0A2A5E]"
                >
                  Call {siteConfig.phone.display}
                </a>
                <Link
                  href="/faq"
                  className="px-5 py-3 bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] text-[11px] font-extrabold uppercase tracking-wider hover:bg-[#EAF2FC] transition-all shadow-[4px_4px_0_#DDE7F2]"
                >
                  Read Common Questions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
