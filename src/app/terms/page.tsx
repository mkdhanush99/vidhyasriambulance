import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Vidhya Sri Ambulance — medical transport agreements, dispatch scope, patient handoff, and service policies.",
  alternates: {
    canonical: `${siteConfig.seo.url}/terms`,
  },
  openGraph: {
    title: "Terms of Service | Vidhya Sri Ambulance",
    description:
      "Terms of service for Vidhya Sri Ambulance — medical transport agreements, dispatch scope, patient handoff, and service policies.",
    url: `${siteConfig.seo.url}/terms`,
    images: [
      {
        url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Vidhya Sri Ambulance Terms of Service",
      },
    ],
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="w-full bg-navy py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm font-medium text-white/60">
            Effective Date: October 2024 · Governs all emergency dispatch and medical transport services
          </p>
        </div>
        <div className="h-2 bg-warm-yellow mt-8" />
      </section>

      <section className="w-full bg-paper py-12 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8 text-sm font-medium text-navy/75 leading-relaxed">
          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              1. Nature of Emergency Medical Transport
            </h2>
            <p>
              Vidhya Sri Ambulance provides professional medical road transportation, emergency patient stabilization, and inter-facility clinical transfers across Hyderabad, Telangana, and interstate routes. Our ambulances operate under certified paramedic protocols and adhere to clinical transit standards. Ambulance dispatch is coordinated in real-time based on situational triage and vehicle availability.
            </p>
          </div>

          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              2. Dispatch & Response Time Scope
            </h2>
            <p>
              While our operational model is optimized for minimal dispatch response times, actual arrival times are subject to prevailing traffic conditions, weather events, road blockages, accurate caller landmark descriptions, and uncontrollable external factors. Vidhya Sri Ambulance does not guarantee specific minute-by-minute transit times but guarantees immediate mobilization of the assigned unit upon confirmation.
            </p>
          </div>

          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              3. Clinical Information & Handover Responsibility
            </h2>
            <p>
              The caller, attending relative, or referring hospital must provide accurate and complete clinical status (including infectious conditions, current ventilator settings, continuous infusion requirements, and bed availability at the destination hospital). The receiving medical institution retains ultimate responsibility for patient admission and ongoing medical care following formal handover.
            </p>
          </div>

          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              4. Payment & Billing Policies
            </h2>
            <p>
              Emergency transport charges are calculated based on vehicle tier (ALS, BLS, ICU, Neonatal, Outstation), distance traveled, medical equipment utilization, and on-board clinical personnel. Payments can be settled via UPI, credit/debit cards, cash, or authorized corporate billing agreements. Transparent receipts are provided for all transactions.
            </p>
          </div>

          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              Our personnel exercise professional clinical diligence in accordance with established emergency medical care guidelines. Vidhya Sri Ambulance is not liable for outcomes resulting from undisclosed pre-existing patient conditions, delays caused by force majeure or incorrect caller address information, or medical complications arising beyond the standard of transit care.
            </p>
          </div>

          <div className="bg-white border-2 border-navy p-6 sm:p-8 shadow-brutal-sm">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-navy mb-3">
              6. Contact for Legal Notices
            </h2>
            <p>
              For formal inquiries regarding our terms, please contact dispatch management at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-care-blue font-bold underline">
                {siteConfig.email}
              </a>{" "}
              or via telephone at {siteConfig.phone.display}.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
