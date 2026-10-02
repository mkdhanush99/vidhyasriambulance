import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

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
      {/* ── Hero ── */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6">
            About Vidhya Sri Ambulance Services
          </h1>
          <p className="text-base sm:text-lg font-medium text-white/85 max-w-3xl leading-relaxed">
            Vidhya Sri Ambulance Services is a Hyderabad-based ambulance and patient transportation service focused on helping people arrange safe and appropriate journeys to, from and between healthcare facilities.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Brand Story Section ── */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
                Brand Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-6">
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

            {/* Brand Card */}
            <div className="bg-clinic-mist border-2 border-navy p-8 shadow-brutal-navy">
              <Image
                src={siteConfig.logo.stacked.gradient}
                alt="Vidhya Sri Ambulance Logo"
                width={206}
                height={155}
                className="w-36 h-auto mx-auto mb-6"
                unoptimized
              />
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[22px] text-care-blue">
                    location_on
                  </span>
                  <div>
                    <span className="text-[9px] font-black uppercase text-navy/50 tracking-wider">
                      Location
                    </span>
                    <p className="text-xs font-bold text-navy">
                      Somajiguda, Hyderabad, Telangana 500082
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[22px] text-care-blue">
                    schedule
                  </span>
                  <div>
                    <span className="text-[9px] font-black uppercase text-navy/50 tracking-wider">
                      Operating Hours
                    </span>
                    <p className="text-xs font-bold text-navy">
                      24 Hours / 7 Days Dispatch
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[22px] text-care-blue">
                    call
                  </span>
                  <div>
                    <span className="text-[9px] font-black uppercase text-navy/50 tracking-wider">
                      Helpline
                    </span>
                    <p className="text-xs font-bold text-navy">
                      {siteConfig.phone.display}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="w-full bg-white py-16 sm:py-20 border-y-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              How We Support Patients and Families
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`p-6 ${p.accent} border-2 border-navy shadow-brutal-sm`}
              >
                <span className="material-symbols-outlined text-[28px] text-navy mb-3 block">
                  {p.icon}
                </span>
                <h3 className="text-base font-extrabold uppercase tracking-tight text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-xs font-medium text-navy/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-coral py-14 border-b-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Speak With Our Dispatch Team
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Have questions or need to arrange patient transportation in Hyderabad?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-navy shrink-0"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
