import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Getting an ambulance should be simple. Follow our 4-step process to request emergency or scheduled ambulance transportation in Hyderabad.",
  alternates: {
    canonical: `${siteConfig.seo.url}/how-it-works`,
  },
};

const steps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    description: "Contact Vidhya Sri Ambulance Services directly.",
    guidance: [
      "Call 9951648174 for emergency requirements",
      "Message via WhatsApp with live location if messaging is preferred",
      "Our dispatch team is available 24 hours a day, 7 days a week",
    ],
    accent: "bg-coral",
    lightBg: "bg-coral-light",
  },
  {
    step: "02",
    title: "Share the journey details",
    description: "Provide pickup location, destination and the type of transport required.",
    guidance: [
      "Share pickup address or nearest prominent landmark",
      "Specify destination hospital, clinic, or residence",
      "Explain patient condition (e.g. bed-bound, needing oxygen, or ICU support)",
    ],
    accent: "bg-warm-yellow",
    lightBg: "bg-warm-yellow-light",
  },
  {
    step: "03",
    title: "Confirm the ambulance",
    description: "Our team confirms availability and the appropriate service for the journey.",
    guidance: [
      "Coordinator confirms vehicle suitability for the journey",
      "Route planning and expected coordination details are communicated",
      "Driver and coordinator contact information is shared",
    ],
    accent: "bg-response-sky",
    lightBg: "bg-clinic-mist",
  },
  {
    step: "04",
    title: "Begin the transfer",
    description: "The ambulance is arranged for the requested patient transportation.",
    guidance: [
      "The ambulance is arranged for the requested patient transportation",
      "Crew assists with patient boarding and stabilization",
      "Safe, monitored road transit to destination",
    ],
    accent: "bg-mint",
    lightBg: "bg-mint-light",
  },
];

export default function HowItWorksPage() {
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
            <span className="text-white">How It Works</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-warm-yellow text-[10px] font-black uppercase tracking-widest mb-4">
            Booking Process
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            Getting an ambulance should be simple.
          </h1>
          <p className="text-base sm:text-lg font-medium text-white/85 max-w-2xl leading-relaxed">
            Follow our four straightforward steps to arrange emergency transportation or scheduled patient transfers in Hyderabad.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow relative z-10 mt-12" />
      </section>

      {/* ── Steps ── */}
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
                  <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-navy mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm font-semibold text-navy/70 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-xs font-medium text-navy/80">
                    {step.guidance.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-care-blue">
                          check
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Caller Preparation Checklist ── */}
      <section className="w-full bg-white py-16 sm:py-20 border-y-2 border-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="p-6 sm:p-8 bg-paper border-2 border-navy shadow-brutal-sm">
            <span className="inline-block px-3 py-1 bg-warm-yellow border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
              Caller Checklist
            </span>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy mb-4">
              Details to have ready when you call
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-navy/80">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-care-blue shrink-0">
                  pin_drop
                </span>
                <span>Exact pickup address and prominent local landmark</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-care-blue shrink-0">
                  local_hospital
                </span>
                <span>Destination hospital or care facility</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-care-blue shrink-0">
                  medication
                </span>
                <span>Patient&apos;s current condition and oxygen/support needs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-care-blue shrink-0">
                  contact_phone
                </span>
                <span>Primary attendant phone number for driver coordination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-coral py-14 border-b-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Ready to Book an Ambulance?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Contact Vidhya Sri Ambulance Services directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call 24×7 · {siteConfig.phone.display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-navy text-navy text-[12px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-navy shrink-0"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
