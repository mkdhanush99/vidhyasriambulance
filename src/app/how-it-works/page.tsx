import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From call to care in four steps. Learn how Vidhya Sri Ambulance dispatch works — call, locate, dispatch, transport.",
};

const steps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    description:
      "Reach us via our 24×7 emergency hotline or WhatsApp. Our dispatch team picks up within seconds, verifies your location, and assesses the situation.",
    details: [
      "24×7 bilingual dispatch (Telugu / Hindi / English)",
      "Emergency assessment protocol",
      "GPS-based caller location assistance",
    ],
    accent: "bg-coral",
    lightBg: "bg-coral-light",
  },
  {
    step: "02",
    title: "Location & Assessment",
    description:
      "Share your location via WhatsApp pin, Google Maps link, or verbal description. Our dispatcher assesses the medical situation and selects the right ambulance type.",
    details: [
      "ALS vs BLS vs ICU — right unit for the situation",
      "Nearest fleet unit identification",
      "Hospital pre-alert notification",
    ],
    accent: "bg-warm-yellow",
    lightBg: "bg-warm-yellow-light",
  },
  {
    step: "03",
    title: "Ambulance En Route",
    description:
      "A fully-equipped ambulance with trained crew is dispatched immediately. You receive real-time ETA updates.",
    details: [
      "ACLS/BLS certified paramedic crew",
      "Pre-departure equipment validation",
      "Real-time ETA communication",
    ],
    accent: "bg-response-sky",
    lightBg: "bg-clinic-mist",
  },
  {
    step: "04",
    title: "Care In Transit",
    description:
      "From the moment our crew arrives, the patient is under clinical care. Continuous monitoring during transport with live hospital coordination for seamless handoff.",
    details: [
      "Continuous vitals monitoring",
      "IV access and medication as needed",
      "Hospital ER pre-registration",
      "Bed-to-bed clinical handoff",
    ],
    accent: "bg-mint",
    lightBg: "bg-mint-light",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            From Call To Care
            <br />
            <span className="text-warm-yellow">In Four Steps.</span>
          </h1>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* Steps */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className={`${step.lightBg} border-2 border-navy p-6 sm:p-8 shadow-brutal-navy`}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span
                  className={`inline-flex items-center justify-center w-14 h-14 ${step.accent} border-2 border-navy text-navy text-xl font-extrabold shrink-0`}
                >
                  {step.step}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-navy mb-3">
                    {step.title}
                  </h2>
                  <p className="text-sm font-medium text-navy/70 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-care-blue mt-0.5">
                          check_circle
                        </span>
                        <span className="text-[13px] font-semibold text-navy/65">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Need An Ambulance Now?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Don&apos;t wait. Our fleet is standing by across Hyderabad.
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
