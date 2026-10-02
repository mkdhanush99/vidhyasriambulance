import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about Vidhya Sri Ambulance services, response times, coverage, pricing, and booking.",
};

const generalFaqs = [
  {
    question: "How do I book an ambulance?",
    answer:
      "You can call our 24×7 emergency hotline or send a WhatsApp message. For non-emergency transfers, you can also book via WhatsApp with your preferred date and time.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover all of Greater Hyderabad and surrounding districts. For outstation transfers, we provide all-India coverage with proper interstate permits.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept cashless claims from select insurance providers. Please contact our billing team for insurance-related queries and pre-authorization.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, UPI (GPay, PhonePe, Paytm), debit/credit cards, and bank transfers. Corporate clients can be invoiced on credit terms.",
  },
  {
    question: "Are your ambulances equipped for COVID patients?",
    answer:
      "Yes, all our ambulances can be configured for infectious disease transport with proper isolation protocols, negative pressure capability, and PPE-equipped crew.",
  },
  {
    question: "Do you provide ambulance for events?",
    answer:
      "Yes, we offer event standby ambulance services for corporate events, sports venues, conventions, industrial sites, and film productions.",
  },
  {
    question: "What is the difference between ALS and BLS?",
    answer:
      "ALS (Advanced Life Support) ambulances are equipped with advanced medical equipment like cardiac monitors, defibrillators, and ventilators, staffed by paramedics who can administer medications. BLS (Basic Life Support) provides essential emergency care with oxygen therapy and basic monitoring.",
  },
  {
    question: "Can I get a recurring booking for hospital visits?",
    answer:
      "Yes, our Patient Transfer Ambulance service offers scheduled recurring bookings for dialysis, chemotherapy, physiotherapy, and other regular hospital visits.",
  },
];

export default function FAQPage() {
  // Collect service-specific FAQs
  const serviceFaqs = services
    .filter((s) => s.faqs.length > 0)
    .flatMap((s) =>
      s.faqs.map((faq) => ({
        ...faq,
        serviceName: s.name,
      }))
    );

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-brand-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/25 text-white text-[10px] font-black uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            Frequently <span className="text-warm-yellow">Asked.</span>
          </h1>
        </div>
        <div className="h-2 bg-warm-yellow mt-12" />
      </section>

      {/* General FAQs */}
      <section className="w-full bg-paper py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-coral border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-6 shadow-brutal-sm">
            General
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
            General Questions
          </h2>

          <div className="flex flex-col gap-3">
            {generalFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border-2 border-navy p-5 shadow-brutal-sm open:shadow-brutal-navy transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-navy list-none">
                  {faq.question}
                  <span className="material-symbols-outlined text-[20px] text-navy/40 group-open:rotate-180 transition-transform shrink-0 ml-4">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-[13px] font-medium text-navy/70 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific FAQs */}
      <section className="w-full bg-clinic-mist py-16 sm:py-20 border-t-2 border-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="inline-block px-3 py-1 bg-lavender border-2 border-navy text-navy text-[10px] font-black uppercase tracking-widest mb-6 shadow-brutal-sm">
            Service-Specific
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy mb-8">
            By Service Type
          </h2>

          <div className="flex flex-col gap-3">
            {serviceFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border-2 border-navy p-5 shadow-brutal-sm open:shadow-brutal-navy transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer text-sm font-extrabold uppercase tracking-tight text-navy list-none">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-care-blue uppercase tracking-widest">
                      {faq.serviceName}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-navy/40 group-open:rotate-180 transition-transform shrink-0 ml-4">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-[13px] font-medium text-navy/70 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-coral py-14 border-y-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              Still Have Questions?
            </h2>
            <p className="text-sm font-semibold text-navy/70 mt-1">
              Call or WhatsApp us — we&apos;re happy to help.
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
