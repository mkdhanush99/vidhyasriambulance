import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";

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
    accent: "bg-coral-light",
  },
  {
    title: "Helping Families in Difficult Moments",
    description:
      "During critical emergencies or stressful hospital transitions, our coordinators provide clear communication, honest timings, and calm support.",
    icon: "family_restroom",
    accent: "bg-warm-yellow-light",
  },
  {
    title: "Making Ambulance Access Easier",
    description:
      "Direct 24×7 phone and WhatsApp coordination allows families to quickly confirm the right ambulance category and transfer details.",
    icon: "contact_phone",
    accent: "bg-lavender-light",
  },
  {
    title: "Wide Medical Mobility Coverage",
    description:
      "From emergency road transfers across Hyderabad to planned outstation journeys across Telangana and Andhra Pradesh.",
    icon: "route",
    accent: "bg-mint-light",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Editorial Asymmetric Layout ── */}
      <section className="w-full bg-brand-gradient py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Context (7 cols) */}
            <div className="lg:col-span-7">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">About</span>
              </nav>

              <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-4">
                Hyderabad Ambulance Services
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-5">
                About Vidhya Sri Ambulance Services
              </h1>
              <p className="text-base sm:text-lg font-medium text-white/85 max-w-2xl leading-relaxed">
                Vidhya Sri Ambulance Services is a Hyderabad-based ambulance and patient transportation service focused on helping people arrange safe, comfortable, and medically appropriate journeys across healthcare facilities.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-coral border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-coral/90 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
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
                offsetColor="warmYellow"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.about.hero.objectPosition}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Brand Story Section: Image 02 (Mobile ICU Units) ── */}
      <section className="w-full bg-paper py-16 sm:py-20 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Details (7 cols) */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
                Brand Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy mb-6">
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

              {/* Navigation Links */}
              <div className="flex flex-wrap gap-3 mt-8">
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
                variant="offset"
                offsetColor="careBlue"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectPosition={siteImages.about.icuFleet.objectPosition}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              <div className="bg-clinic-mist border-2 border-navy p-4 shadow-brutal-sm space-y-2.5">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars Section with Image 03 (Patient Transport Vehicle) ── */}
      <section className="w-full bg-white py-16 sm:py-20 border-b-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
              Four commitments guiding every dispatch.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pillars Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-paper border-2 border-navy p-6 shadow-brutal-navy"
                >
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 border-2 border-navy ${pillar.accent} mb-4`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-navy">
                      {pillar.icon}
                    </span>
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] font-medium text-navy/70 leading-relaxed">
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
                variant="default"
                aspectRatio="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4]"
                objectPosition={siteImages.about.patientVehicle.objectPosition}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Verification & Operations Summary ── */}
      <section className="w-full bg-paper py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-clinic-mist border-2 border-navy p-6 sm:p-8 shadow-brutal-navy">
            <div className="max-w-3xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-care-blue block mb-2">
                Operational Integrity
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-navy mb-3">
                Transparent information, authentic service.
              </h2>
              <p className="text-sm font-medium text-navy/75 leading-relaxed">
                All vehicles displayed on this website represent active Vidhya Sri ambulance transport units in Hyderabad. We do not use simulated fleet numbers or fictional operational claims. For ambulance requirements, speak directly with our team.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.phone.href}
                  className="px-5 py-3 bg-navy border-2 border-navy text-white text-[11px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-sm"
                >
                  Call {siteConfig.phone.display}
                </a>
                <Link
                  href="/faq"
                  className="px-5 py-3 bg-white border-2 border-navy text-navy text-[11px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-sm"
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
