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
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero: Light Premium Healthcare ── */}
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-24 relative overflow-hidden border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-6"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">How It Works</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Booking Process
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
            Getting an ambulance should be simple.
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Follow our four straightforward steps to arrange emergency transportation or scheduled patient transfers in Hyderabad.
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Steps (Clinic Mist Background Rhythm with White Cards) ── */}
      <section className="w-full bg-[#EAF2FC] py-16 sm:py-20 border-b border-[#DDE7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-xl font-extrabold shrink-0 rounded-[2px]">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm font-medium text-[#536B86] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-[#0A2A5E]">
                    {step.guidance.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-[#1565D8]">
                          check_circle
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
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#DDE7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="p-6 sm:p-8 bg-[#F8FAFD] border-2 border-[#DDE7F2] shadow-sm rounded-[2px]">
            <span className="inline-block px-3 py-1 bg-white border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
              Caller Checklist
            </span>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-4">
              Details to have ready when you call
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-[#0A2A5E]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#1565D8] shrink-0">
                  pin_drop
                </span>
                <span>Exact pickup address and prominent local landmark</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#1565D8] shrink-0">
                  local_hospital
                </span>
                <span>Destination hospital or care facility</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#1565D8] shrink-0">
                  medication
                </span>
                <span>Patient&apos;s current condition and oxygen/support needs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#1565D8] shrink-0">
                  contact_phone
                </span>
                <span>Primary attendant phone number for driver coordination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Action Strip (Navy CTA) ── */}
      <section className="w-full bg-[#0A2A5E] py-14 border-t-2 border-[#1565D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Ready to Book an Ambulance?
            </h2>
            <p className="text-sm font-medium text-white/80 mt-1">
              Contact Vidhya Sri Ambulance Services directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1565D8] border-2 border-white text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-white hover:text-[#0A2A5E] transition-all shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call 24×7 · {siteConfig.phone.display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-white text-[#0A2A5E] text-[12px] font-extrabold uppercase tracking-wider hover:bg-[#EAF2FC] transition-all shrink-0"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
