import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about booking an ambulance in Hyderabad, patient transfers, outstation journeys, and coordination details.",
  alternates: {
    canonical: `${siteConfig.seo.url}/faq`,
  },
};

const generalFaqs = [
  {
    question: "How do I book an ambulance in Hyderabad?",
    answer:
      "To book an ambulance with Vidhya Sri Ambulance Services, call our 24×7 helpline directly at 9951648174 or send a message via WhatsApp. Our coordination team verifies your pickup address, patient transport needs, and destination to arrange the appropriate ambulance.",
  },
  {
    question: "What details should I share when booking?",
    answer:
      "Please provide the exact pickup location with a nearby landmark, destination hospital or address, the patient's current mobility status, and any medical support requirements (such as oxygen support or intensive care monitoring) advised by the treating team.",
  },
  {
    question: "Can I request an ambulance for hospital transfer?",
    answer:
      "Yes. We arrange patient transfers between hospitals, diagnostic centers, and residential addresses across Hyderabad. This includes planned transfers for dialysis, chemotherapy, and routine post-surgery hospital discharge.",
  },
  {
    question: "Do you provide outstation ambulance services?",
    answer:
      "Yes. Vidhya Sri Ambulance Services arranges outstation patient transportation from Hyderabad to destinations across Telangana, Andhra Pradesh, and neighboring states, subject to vehicle availability and medical suitability for road travel.",
  },
  {
    question: "Can I contact Vidhya Sri through WhatsApp?",
    answer:
      "Yes. You can contact Vidhya Sri Ambulance Services via WhatsApp at 9951648174 to share your live location pin, medical summaries, and coordinate scheduled journey timings.",
  },
  {
    question: "Which ambulance type is appropriate for my journey?",
    answer:
      "The choice of ambulance depends on the patient's clinical requirements as assessed by the treating medical team. For general mobility, a Patient Transfer or BLS unit may suffice; for continuous monitoring or breathing assistance, an ICU or Ventilator ambulance is recommended. When in doubt, consult the patient's doctors and speak with our coordination team.",
  },
];

export default function FAQPage() {
  const serviceFaqs = services
    .filter((s) => s.faqs.length > 0)
    .flatMap((s) =>
      s.faqs.map((faq) => ({
        ...faq,
        serviceName: s.name,
        serviceSlug: s.slug,
      }))
    );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...generalFaqs, ...serviceFaqs].map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
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
            <span className="text-[#0A2A5E]">FAQ</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Help & Answers
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-[0.95] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#536B86] max-w-2xl leading-relaxed">
            Helpful information on booking ambulances in Hyderabad, patient transfer details, and outstation medical travel.
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] relative z-10 mt-12 w-full" />
      </section>

      {/* ── General FAQs ── */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            General Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-8">
            Booking & Service Questions
          </h2>

          <div className="space-y-4 mb-16">
            {generalFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-5 shadow-[4px_4px_0_#DDE7F2] open:bg-[#F8FAFD] open:shadow-[6px_6px_0_#DDE7F2] transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer text-[15px] font-extrabold uppercase tracking-tight text-[#0A2A5E] list-none gap-4">
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-[2px] bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] flex items-center justify-center shrink-0 group-open:rotate-45 group-open:bg-[#0A2A5E] group-open:text-white transition-all duration-200">
                    <span className="material-symbols-outlined text-[20px] leading-none" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>
                      add
                    </span>
                  </span>
                </summary>
                <p className="mt-3.5 text-sm font-medium text-[#536B86] leading-relaxed border-t-2 border-[#DDE7F2] pt-3.5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* ── Service Specific FAQs ── */}
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10.5px] font-black uppercase tracking-widest mb-4 rounded-[2px]">
            Service Specific
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-8">
            Questions by Ambulance Type
          </h2>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border-[3px] border-[#0A2A5E] rounded-[4px] p-5 shadow-[4px_4px_0_#DDE7F2] open:bg-[#F8FAFD] open:shadow-[6px_6px_0_#DDE7F2] transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer text-[15px] font-extrabold uppercase tracking-tight text-[#0A2A5E] list-none gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block mb-1">
                      {faq.serviceName}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="w-8 h-8 rounded-[2px] bg-white border-2 border-[#0A2A5E] text-[#0A2A5E] flex items-center justify-center shrink-0 group-open:rotate-45 group-open:bg-[#0A2A5E] group-open:text-white transition-all duration-200">
                    <span className="material-symbols-outlined text-[20px] leading-none" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>
                      add
                    </span>
                  </span>
                </summary>
                <div className="mt-3.5 border-t-2 border-[#0A2A5E]/15 pt-3.5">
                  <p className="text-sm font-medium text-[#0A2A5E]/85 leading-relaxed">
                    {faq.answer}
                  </p>
                  <Link
                    href={`/services/${faq.serviceSlug}`}
                    className="inline-block mt-3 text-xs font-black uppercase tracking-wider text-[#1565D8] hover:text-[#0A2A5E] transition-colors"
                  >
                    View {faq.serviceName} Page →
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Have Additional Questions?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Contact our 24×7 dispatch team directly to discuss your patient transfer requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-navy border-2 border-navy text-white text-[13px] font-extrabold uppercase tracking-wider hover:bg-navy-dark transition-all shadow-brutal-white shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-white border-2 border-navy text-navy text-[13px] font-extrabold uppercase tracking-wider hover:bg-clinic-mist transition-all shadow-brutal-navy shrink-0"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
