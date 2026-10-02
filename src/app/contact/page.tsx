import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vidhya Sri Ambulance for emergency dispatch, bookings, corporate tie-ups, and inquiries. Available 24×7.",
};

const contactMethods = [
  {
    label: "Emergency Hotline",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
    icon: "call",
    accent: "bg-coral",
    description: "24×7 emergency dispatch — immediate response",
  },
  {
    label: "WhatsApp Booking",
    value: siteConfig.whatsapp.display,
    href: siteConfig.whatsapp.href,
    icon: "chat",
    accent: "bg-mint",
    description: "Non-emergency bookings, inquiries, and follow-ups",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
    accent: "bg-lavender",
    description: "Corporate partnerships and formal inquiries",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            Get In <span className="text-warm-yellow">Touch.</span>
          </h1>
          <p className="mt-4 text-base font-medium text-white/75 max-w-xl">
            Emergency or inquiry — we&apos;re here around the clock.
          </p>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* Contact Methods */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex flex-col p-6 ${m.accent} border-2 border-navy shadow-brutal-navy hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-navy-lg transition-all`}
              >
                <span className="material-symbols-outlined text-[28px] text-navy mb-3">
                  {m.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/60 mb-1">
                  {m.label}
                </span>
                <span className="text-base font-extrabold text-navy">{m.value}</span>
                <span className="text-[12px] font-medium text-navy/60 mt-2">
                  {m.description}
                </span>
              </a>
            ))}
          </div>

          {/* Address */}
          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-navy">
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-[28px] text-care-blue mt-1">
                location_on
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/60 block mb-1">
                  Office Address
                </span>
                <p className="text-base font-bold text-navy">{siteConfig.address.full}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[28px] text-care-blue mt-1">
                schedule
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/60 block mb-1">
                  Operating Hours
                </span>
                <p className="text-base font-bold text-navy">{siteConfig.hours}</p>
                <p className="text-[12px] font-medium text-navy/60 mt-1">
                  Emergency dispatch operates 24×7, 365 days a year — including holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
