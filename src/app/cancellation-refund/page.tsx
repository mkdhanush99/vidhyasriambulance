import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "Cancellation and refund guidelines for Vidhya Sri Ambulance — policies for emergency response, scheduled transfers, and refund processing.",
  alternates: {
    canonical: `${siteConfig.seo.url}/cancellation-refund`,
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Vidhya Sri Ambulance",
    description:
      "Cancellation and refund guidelines for Vidhya Sri Ambulance — policies for emergency response, scheduled transfers, and refund processing.",
    url: `${siteConfig.seo.url}/cancellation-refund`,
    images: [
      {
        url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Vidhya Sri Ambulance Cancellation & Refund Policy",
      },
    ],
  },
};

export default function CancellationRefundPage() {
  return (
    <>
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-20 border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#536B86] mb-4"
          >
            <Link href="/" className="hover:text-[#0A2A5E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0A2A5E]">Cancellation & Refund</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-3 text-sm font-medium text-[#536B86]">
            Transparent operational standards for emergency dispatches and scheduled transfers
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] mt-8 w-full" />
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8 text-sm font-medium text-[#536B86] leading-relaxed">
          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
              1. Emergency Ambulance Cancellation
            </h2>
            <p>
              Due to the critical nature of emergency ambulance operations, vehicles and clinical crews are deployed instantly upon phone call verification. If an emergency dispatch is cancelled while the vehicle is en route prior to scene arrival, no penalty applies if cancelled within 5 minutes of dispatch. If cancelled after the crew has arrived on scene or after significant transit, a nominal base mobilization charge may apply to offset operational readiness costs.
            </p>
          </div>

          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
              2. Pre-Scheduled Patient Transfers (Dialysis, Chemo, Post-Op)
            </h2>
            <p>
              For non-emergency scheduled transfers:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm font-semibold text-[#0A2A5E]">
              <li>
                <strong>Cancellations made 2 or more hours prior to scheduled pickup:</strong> 100% full refund with zero cancellation fee.
              </li>
              <li>
                <strong>Cancellations made less than 2 hours prior to scheduled pickup:</strong> Eligible for free rescheduling within 48 hours or a partial refund after deducting vehicle allocation costs.
              </li>
              <li>
                <strong>No-shows or cancellations upon driver arrival:</strong> Base mobilization fee is retained.
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
              3. Outstation & Interstate Bookings
            </h2>
            <p>
              Long-distance and interstate outstation ambulances require advance route clearance, dual-driver assignment, and full medical equipment configuration. Cancellations initiated at least 6 hours before scheduled departure receive a full refund minus any regulatory permit fees incurred.
            </p>
          </div>

          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
              4. Refund Processing Timeline
            </h2>
            <p>
              Approved refunds are credited directly back to the original payment source (UPI, net banking, debit/credit card) within <strong>3 to 5 business days</strong>. An official digital refund transaction receipt will be shared via WhatsApp or email.
            </p>
          </div>

          <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 shadow-sm rounded-[2px]">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
              5. How to Initiate a Cancellation or Refund Request
            </h2>
            <p>
              To request a cancellation or review a billing discrepancy, contact our 24×7 helpdesk immediately:
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold">
              <a
                href={siteConfig.phone.href}
                className="px-5 py-2.5 bg-[#1565D8] text-white border-2 border-[#0A2A5E] hover:bg-[#0A2A5E] transition-colors rounded-[2px] shadow-sm"
              >
                Call {siteConfig.phone.display}
              </a>
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-[#0A2A5E] border-2 border-[#0A2A5E] hover:bg-[#EAF2FC] transition-colors rounded-[2px]"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
