import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Vidhya Sri Ambulance",
  description:
    "Learn about Vidhya Sri Ambulance — our mission, values, and commitment to 24×7 medical transportation excellence across Hyderabad and Telangana.",
};

const values = [
  {
    title: "Clinical Continuity",
    description:
      "Every transport maintains bed-to-bed clinical oversight — from scene assessment through hospital handoff.",
    icon: "health_and_safety",
    accent: "bg-coral-light",
  },
  {
    title: "Response Velocity",
    description:
      "Our dispatch model optimizes for the shortest possible response time across the Greater Hyderabad network.",
    icon: "speed",
    accent: "bg-warm-yellow-light",
  },
  {
    title: "Dignity In Crisis",
    description:
      "Every patient — regardless of condition or service type — receives compassionate, respectful care.",
    icon: "volunteer_activism",
    accent: "bg-lavender-light",
  },
  {
    title: "Equipment Readiness",
    description:
      "Every unit undergoes daily equipment audits and monthly calibration protocols to ensure on-scene reliability.",
    icon: "build",
    accent: "bg-mint-light",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            Care, <span className="text-warm-yellow">Moving Forward.</span>
          </h1>
          <p className="text-base sm:text-lg font-medium text-white/80 max-w-2xl leading-relaxed">
            Vidhya Sri Ambulance was established with a singular focus: to deliver
            hospital-grade medical transportation when every second counts.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* Mission */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-6">
                Bridge The Gap Between Emergency And Hospital
              </h2>
              <div className="space-y-4 text-sm font-medium text-navy/70 leading-relaxed">
                <p>
                  In Hyderabad, the gap between an emergency call and hospital-grade
                  care has traditionally been filled by basic transport vehicles.
                  Vidhya Sri Ambulance was built to close that gap entirely.
                </p>
                <p>
                  We operate a diversified fleet covering every medical transport scenario —
                  from advanced life-support emergencies requiring cardiac monitoring and
                  defibrillation, to pre-scheduled patient transfers for dialysis and
                  chemotherapy routines.
                </p>
                <p>
                  Our operational philosophy is simple: the moment a patient enters one of our
                  vehicles, they are under clinical care, not merely in transit.
                </p>
              </div>
            </div>
            <div className="bg-clinic-mist border-2 border-navy p-8 shadow-brutal-navy">
              <Image
                src={siteConfig.logo.stacked.gradient}
                alt="Vidhya Sri Ambulance"
                width={206}
                height={155}
                className="w-32 h-auto mx-auto mb-6"
                unoptimized
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[24px] text-care-blue">
                    location_city
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase text-navy/50">Based In</span>
                    <p className="text-sm font-bold text-navy">Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[24px] text-care-blue">
                    schedule
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase text-navy/50">Availability</span>
                    <p className="text-sm font-bold text-navy">24×7 Emergency Dispatch</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white border border-navy/15">
                  <span className="material-symbols-outlined text-[24px] text-care-blue">
                    local_shipping
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase text-navy/50">Fleet</span>
                    <p className="text-sm font-bold text-navy">11 Service Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-clinic-mist py-16 sm:py-20 border-y-2 border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-4 shadow-brutal-sm">
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-10">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className={`p-6 ${v.accent} border-2 border-navy shadow-brutal-sm`}
              >
                <span className="material-symbols-outlined text-[28px] text-navy mb-3 block">
                  {v.icon}
                </span>
                <h3 className="text-sm font-extrabold uppercase tracking-tight text-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-[13px] font-medium text-navy/65 leading-relaxed">
                  {v.description}
                </p>
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
              Partner With Us
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Corporate tie-ups, hospital partnerships, and event standby services available.
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
