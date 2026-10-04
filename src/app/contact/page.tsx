import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { ContactFlowGraphic } from "@/components/motion/MotionGraphics";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vidhya Sri Ambulance Services in Somajiguda, Hyderabad. 24×7 emergency phone line, WhatsApp booking, and address details.",
  alternates: {
    canonical: `${siteConfig.seo.url}/contact`,
  },
};

const contactMethods = [
  {
    label: "Emergency & Booking Helpline",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
    icon: "call",
    iconColor: "text-[#1565D8]",
    tagBg: "bg-[#EAF2FC] text-[#1565D8]",
    description: "24×7 emergency ambulance dispatch & inquiries across Hyderabad",
  },
  {
    label: "WhatsApp Coordination",
    value: siteConfig.whatsapp.display,
    href: siteConfig.whatsapp.href,
    icon: "chat",
    iconColor: "text-[#25D366]",
    tagBg: "bg-[#EAF2FC] text-[#1565D8]",
    description: "Share live location pin, patient details, and transfer requirements",
  },
  {
    label: "Official Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
    iconColor: "text-[#1565D8]",
    tagBg: "bg-[#EAF2FC] text-[#1565D8]",
    description: "Official correspondence, billing, and organizational queries",
  },
];

export default function ContactPage() {
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
            <span className="text-[#0A2A5E]">Contact</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            24×7 Contact Information
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
            Contact Vidhya Sri Ambulance Services
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Emergency ambulance requests, scheduled patient transfers, and outstation journey coordination across Hyderabad.
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── Dual Enquiry Pathways: Customer vs Business ── */}
      <section className="w-full bg-white pt-12 pb-6 border-b-2 border-[#DDE7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block mb-1">
              Select Your Enquiry Type
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A2A5E]">
              Online Enquiry &amp; Dispatch Forms
            </h2>
            <p className="text-xs sm:text-sm text-[#536B86] mt-2 font-medium">
              Choose the dedicated enquiry pathway that matches your requirement for priority response and automated confirmation receipts.
            </p>
            <div className="flex justify-center my-4">
              <ContactFlowGraphic />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 1. Customer / Patient Card */}
            <div className="p-6 sm:p-8 bg-[#F8FAFD] border-2 border-[#1565D8] shadow-[6px_6px_0_#0A2A5E] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#EAF2FC] border border-[#1565D8]/40 text-[#1565D8] text-[10px] font-black uppercase tracking-wider mb-4 rounded-[2px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1565D8]" />
                  Patients &amp; Families
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A2A5E] mb-2">
                  Customer Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#536B86] leading-relaxed mb-6 font-medium">
                  For individual emergency ambulance booking, ICU ventilator patient transfer, dialysis appointments, and hospital discharge transport across Hyderabad.
                </p>
                <ul className="text-xs text-[#0A2A5E] font-bold space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#1565D8]">check</span>
                    Emergency BLS &amp; Cardiac ICU Ventilator Fleet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#1565D8]">check</span>
                    Instant Confirmation Email to Customer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#1565D8]">check</span>
                    Somajiguda 24×7 Central Dispatch
                  </li>
                </ul>
              </div>

              <Link
                href="/customer-enquiry"
                className="w-full py-3.5 bg-[#1565D8] hover:bg-[#0B3F9E] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider text-center rounded-[3px] shadow-[3px_3px_0_#0A2A5E] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Go to Customer Enquiry Form
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* 2. Business / Corporate Card */}
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#0A2A5E] shadow-[6px_6px_0_#1565D8] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0A2A5E] text-white text-[10px] font-black uppercase tracking-wider mb-4 rounded-[2px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38A3F7]" />
                  Hospitals &amp; Corporates
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A2A5E] mb-2">
                  Business Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#536B86] leading-relaxed mb-6 font-medium">
                  For hospital patient transfer contracts, IT park on-site standby units, event medical standby, industrial coverage, and corporate employee healthcare SLAs.
                </p>
                <ul className="text-xs text-[#0A2A5E] font-bold space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#0A2A5E]">check</span>
                    Dedicated Fleet Allocation &amp; SLA Response Guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#0A2A5E]">check</span>
                    Formal Onboarding Roadmap &amp; Billing Agreements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#0A2A5E]">check</span>
                    Direct Institutional Key Account Manager
                  </li>
                </ul>
              </div>

              <Link
                href="/business-enquiry"
                className="w-full py-3.5 bg-[#0A2A5E] hover:bg-[#1565D8] text-white border-2 border-[#0A2A5E] text-xs font-black uppercase tracking-wider text-center rounded-[3px] shadow-[3px_3px_0_#1565D8] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Go to Business Enquiry Form
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Methods (White Dominant Cards) ── */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="border-b-2 border-[#DDE7F2] pb-3 mb-8">
            <h2 className="text-lg font-black uppercase tracking-wider text-[#0A2A5E]">
              Direct Contact Lines &amp; Office Coordinates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col p-6 bg-white border-2 border-[#DDE7F2] hover:border-[#0A2A5E] shadow-sm hover:shadow-md hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
              >
                <span className={`material-symbols-outlined text-[28px] ${m.iconColor} mb-3 group-hover:scale-110 transition-transform`}>
                  {m.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86] mb-1">
                  {m.label}
                </span>
                <span className="text-base font-extrabold text-[#0A2A5E] break-all">{m.value}</span>
                <span className="text-[12px] font-medium text-[#536B86] mt-2">
                  {m.description}
                </span>
              </a>
            ))}
          </div>

          {/* ── Verified Address & Location Card ── */}
          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Address Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[28px] text-[#1565D8] mt-1 shrink-0">
                    location_on
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86] block mb-1">
                      Primary Business Address
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0A2A5E] leading-snug">
                      H.No: 6-3-662/5 & 6/4,<br />
                      Arun Residency,<br />
                      Jafar Ali Bagh,<br />
                      Circle 17,<br />
                      Somajiguda, Hyderabad,<br />
                      Telangana 500082, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[28px] text-[#1565D8] mt-1 shrink-0">
                    language
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86] block mb-1">
                      Website
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0A2A5E]">
                      <a
                        href={siteConfig.seo.url}
                        className="hover:underline text-[#1565D8]"
                      >
                        vidhyasriambulance.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[28px] text-[#1565D8] mt-1 shrink-0">
                    schedule
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86] block mb-1">
                      Operational Hours
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0A2A5E]">
                      {siteConfig.hours}
                    </p>
                    <p className="text-xs text-[#536B86] mt-1 font-medium">
                      24×7 phone dispatch operates continuously 365 days a year.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Action Box */}
              <div className="p-6 bg-[#EAF2FC] border border-[#DDE7F2] flex flex-col justify-between h-full rounded-[2px]">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-white text-[#1565D8] text-[10px] font-black uppercase tracking-wider border border-[#1565D8]/30 mb-3 rounded-[2px]">
                    Map Navigation
                  </span>
                  <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-2">
                    Verified Google Maps Location
                  </h2>
                  <p className="text-xs font-medium text-[#536B86] leading-relaxed mb-6">
                    Locate Vidhya Sri Ambulance Services on Google Maps for direct routing to our Somajiguda address.
                  </p>
                </div>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1565D8] border-2 border-[#0A2A5E] text-white text-[12px] font-extrabold uppercase tracking-wider hover:bg-[#0A2A5E] transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
