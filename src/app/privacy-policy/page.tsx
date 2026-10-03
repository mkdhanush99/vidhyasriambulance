import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Vidhya Sri Ambulance Services privacy policy — how we collect, use, and protect your personal information during dispatch and transport.",
  alternates: {
    canonical: `${siteConfig.seo.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="w-full bg-[#F8FAFD] py-16 sm:py-20 border-b-[3px] border-[#0A2A5E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A5E]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm font-medium text-[#536B86]">
            Last updated: October 2024
          </p>
        </div>
        <div className="h-1.5 bg-[#1565D8] mt-8 w-full" />
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="space-y-8 text-sm font-medium text-[#536B86] leading-relaxed">
            <div className="bg-white border-2 border-[#DDE7F2] p-6 shadow-sm rounded-[2px]">
              <h2 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you contact us for ambulance services, we collect information necessary
                to dispatch and provide medical transport, including: your name, phone number,
                pickup and drop-off locations, patient condition details, and any medical
                information shared for appropriate care coordination.
              </p>
            </div>

            <div className="bg-white border-2 border-[#DDE7F2] p-6 shadow-sm rounded-[2px]">
              <h2 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used exclusively for: dispatching ambulance services,
                coordinating with hospitals, processing payments, contacting you about your
                service, and improving our operations. We do not sell or share your personal
                information with third parties for marketing purposes.
              </p>
            </div>

            <div className="bg-white border-2 border-[#DDE7F2] p-6 shadow-sm rounded-[2px]">
              <h2 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                3. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="bg-white border-2 border-[#DDE7F2] p-6 shadow-sm rounded-[2px]">
              <h2 className="text-sm font-extrabold uppercase tracking-tight text-[#0A2A5E] mb-3">
                4. Contact
              </h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#1565D8] underline font-bold">
                  {siteConfig.email}
                </a>{" "}
                or call our 24×7 coordination line at{" "}
                <a href={siteConfig.phone.href} className="text-[#1565D8] underline font-bold">
                  {siteConfig.phone.display}
                </a>.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
