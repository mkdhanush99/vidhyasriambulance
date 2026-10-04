import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function FreezerBoxShowcase() {
  return (
    <section className="w-full bg-[#F8FAFD] py-14 sm:py-20 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
            Doorstep Hire & Rental Across Hyderabad
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-tight">
            Dead Body Freezer Box Options on Hire & Rent
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[#536B86] leading-relaxed">
            Choose between our Standard Stainless-Steel units and VIP Glass-Top Display freezer boxes.
            Delivered, installed, and collected directly at your residence or memorial venue 24×7.
          </p>
        </div>

        {/* ── Comparison Cards Grid: Standard vs VIP Glass-Top ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          {/* Option 1: Standard Stainless Steel Freezer Box */}
          <div className="flex flex-col justify-between bg-white border-2 border-[#DDE7F2] p-6 sm:p-8 rounded-[4px] shadow-sm hover:border-[#0A2A5E] transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-[#DDE7F2] pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#536B86] block">
                    Essential Home Preservation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#0A2A5E] tracking-tight mt-0.5">
                    Standard Freezer Box
                  </h3>
                </div>
                <span className="px-2.5 py-1 bg-[#EAF2FC] text-[#1565D8] border border-[#1565D8]/20 text-[10px] font-black uppercase tracking-wider rounded-[2px]">
                  On Hire / Rent
                </span>
              </div>

              <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed mb-6">
                Engineered for domestic home preservation and apartment settings. Durable, silent, and designed to fit comfortably through standard apartment doorways and elevators.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Heavy-duty grade 304 food-grade stainless-steel interior and body",
                  "Digital temperature thermostat maintaining optimal -2°C to -10°C",
                  "Whisper-quiet commercial compressor suitable for indoor residential rooms",
                  "Compact footprint easily accommodated in apartment lifts and stairwells",
                  "Operates on standard single-phase 220V domestic plug points (5A/15A)",
                  "Compatible with home inverters and portable backup generators",
                  "Pre-cooled and chemically sanitized prior to arrival",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#0A2A5E] font-bold">
                    <span className="material-symbols-outlined text-[17px] text-[#1565D8] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DDE7F2] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#536B86]">
                <span className="font-extrabold uppercase text-[#0A2A5E]">Rental Durations:</span>
                <span className="font-bold">6h · 12h · 24h · Multi-Day Hire</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={siteConfig.phone.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-[#0A2A5E] hover:bg-[#1565D8] text-white text-[12.5px] font-black uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Hire Standard Box
                </a>
                <a
                  href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(
                    "Hello Vidhya Sri, I would like to hire a Standard Dead Body Freezer Box for home delivery in Hyderabad. Please share availability and delivery timeframe."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#25D366] text-[#0A2A5E] hover:bg-[#F0FDF4] text-[12.5px] font-black uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Option 2: VIP Glass-Top Display Freezer Box (PREMIUM HIGHLIGHT) */}
          <div className="relative flex flex-col justify-between bg-white border-[3px] border-[#1565D8] p-6 sm:p-8 rounded-[4px] shadow-[0_8px_30px_rgba(21,101,216,0.12)]">
            {/* VIP Ribbon Badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-[#1565D8] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[13px]">stars</span>
              VIP Freezer Box Available
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-[#DDE7F2] pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block">
                    Public Homage & Viewing Chamber
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#0A2A5E] tracking-tight mt-0.5">
                    VIP Glass-Top Freezer Box
                  </h3>
                </div>
                <span className="px-2.5 py-1 bg-[#1565D8] text-white text-[10px] font-black uppercase tracking-wider rounded-[2px]">
                  VIP Rental
                </span>
              </div>

              <p className="text-xs sm:text-[13px] font-medium text-[#536B86] leading-relaxed mb-6">
                Premium glass-top display unit engineered for prestigious ceremonies, public homage, and dignified family viewing. Features clear toughened glass and soft internal illumination.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Heavy-gauge toughened transparent viewing glass for respectful public homage",
                  "Built-in soft internal LED illumination for crystal-clear daytime and night viewing",
                  "Premium stainless-steel interior with elegant exterior finish for ceremony halls",
                  "Dual-insulated cooling walls preventing condensation and exterior fogging",
                  "High-capacity commercial cooling system with precise micro-computer digital control",
                  "Whisper-quiet compressor operation for solemn residential and memorial environments",
                  "Full electrical safety grounding, surge protection & generator compatibility",
                  "Priority rapid delivery with white-glove setup and 24×7 technician assistance",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#0A2A5E] font-bold">
                    <span className="material-symbols-outlined text-[17px] text-[#1565D8] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DDE7F2] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#536B86]">
                <span className="font-extrabold uppercase text-[#1565D8]">VIP Rental Terms:</span>
                <span className="font-bold">Flexible 12h · 24h · Multi-Day Homage Hire</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={siteConfig.phone.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-[#1565D8] hover:bg-[#0A2A5E] text-white text-[12.5px] font-black uppercase tracking-wider rounded-[3px] shadow-[2px_2px_0_#0A2A5E] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Hire VIP Freezer Box
                </a>
                <a
                  href={`${siteConfig.whatsapp.href}?text=${encodeURIComponent(
                    "Hello Vidhya Sri, I am inquiring about hiring your VIP Glass-Top Display Dead Body Freezer Box for home/hall viewing in Hyderabad. Please share details and immediate delivery confirmation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#25D366] text-[#0A2A5E] hover:bg-[#F0FDF4] text-[12.5px] font-black uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                  WhatsApp VIP Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Visual Photo Showcase & How Rental Works ── */}
        <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-10 rounded-[4px] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Image Frame with real freezer box photo */}
            <div className="lg:col-span-5">
              <ImageFrame
                src="/images/vidhya-sri-mortuary-freezer-box.webp"
                alt="VIP and Standard Dead Body Freezer Box available on hire and rent in Hyderabad"
                caption="Dead Body Freezer Box Unit"
                captionLocation="Standard & VIP Glass-Top Models"
                badge="HYDERABAD DOORSTEP RENTAL"
                variant="corner-marked"
                aspectRatio="aspect-square"
                objectPosition="center 50%"
                priority={false}
              />
            </div>

            {/* Right: 4-Step Rental Process */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8]">
                  Transparent Coordination
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#0A2A5E] tracking-tight mt-1">
                  How Hiring & Renting Works
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#536B86] mt-1.5 leading-relaxed">
                  We understand this is a sensitive time. Our team ensures the entire process is handled with quiet dignity, precision, and respectful speed:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "01",
                    title: "Call or WhatsApp",
                    desc: "State your locality in Hyderabad/Secunderabad and whether you need Standard or VIP glass-top.",
                  },
                  {
                    step: "02",
                    title: "Prompt Doorstep Delivery",
                    desc: "Dispatched promptly from our Somajiguda control hub; reaches your address in 30 to 60 minutes.",
                  },
                  {
                    step: "03",
                    title: "Placement & Pre-Cooling",
                    desc: "Our trained technicians position the unit, connect domestic power, verify cooling, and guide your family.",
                  },
                  {
                    step: "04",
                    title: "Respectful Collection",
                    desc: "Once funeral rites are concluded, our team arrives discreetly to retrieve the equipment without delay.",
                  },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-[#F8FAFD] border border-[#DDE7F2] rounded-[3px]">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1565D8] block mb-1">
                      Step {item.step}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold uppercase text-[#0A2A5E] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] text-[#536B86] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#EAF2FC] border border-[#1565D8]/20 rounded-[3px] flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-black uppercase text-[#0A2A5E]">
                    Need a Freezer Box Right Away?
                  </h4>
                  <p className="text-[11px] text-[#536B86] font-medium">
                    Our Somajiguda control desk coordinates immediate delivery 24×7 across Greater Hyderabad.
                  </p>
                </div>
                <a
                  href={siteConfig.phone.href}
                  className="px-4 py-2.5 bg-[#1565D8] hover:bg-[#0A2A5E] text-white text-xs font-extrabold uppercase tracking-wider rounded-[2px] transition-colors shrink-0"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MortuaryAmbulanceShowcase() {
  return (
    <section className="w-full bg-[#F8FAFD] py-14 sm:py-20 border-b-[3px] border-[#0A2A5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 bg-[#EAF2FC] border border-[#1565D8]/30 text-[#1565D8] text-[10px] font-black uppercase tracking-widest mb-3 rounded-[2px]">
            Dignified Final Road Transport
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-tight">
            Mortuary Ambulance Vehicle & Transit Standards
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[#536B86] leading-relaxed">
            Specially configured, climate-regulated ambulance vans for local hospital transfers, home transit, and long-distance highway journeys across Telangana and interstate.
          </p>
        </div>

        {/* ── 3 Key Transport Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[4px] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[3px] bg-[#EAF2FC] border border-[#1565D8]/20 flex items-center justify-center text-[#1565D8] mb-4">
                <span className="material-symbols-outlined text-[22px]">ac_unit</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#0A2A5E] tracking-tight mb-2">
                Climate-Regulated Cabin
              </h3>
              <p className="text-xs sm:text-[12.5px] text-[#536B86] font-medium leading-relaxed">
                Independent rear compartment air conditioning and climate control maintain cool, sanitary conditions throughout long highway transit and summer journeys.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7F2] text-[11px] font-bold text-[#1565D8] uppercase tracking-wider">
              Sanitized & Secure
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[4px] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[3px] bg-[#EAF2FC] border border-[#1565D8]/20 flex items-center justify-center text-[#1565D8] mb-4">
                <span className="material-symbols-outlined text-[22px]">group</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#0A2A5E] tracking-tight mb-2">
                Family Escort Seating
              </h3>
              <p className="text-xs sm:text-[12.5px] text-[#536B86] font-medium leading-relaxed">
                Comfortable, dedicated passenger seating alongside the secure transport compartment allows 2 to 4 immediate family members to accompany their loved one with dignity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7F2] text-[11px] font-bold text-[#1565D8] uppercase tracking-wider">
              Accompanied Journey
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-white border-2 border-[#DDE7F2] rounded-[4px] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[3px] bg-[#EAF2FC] border border-[#1565D8]/20 flex items-center justify-center text-[#1565D8] mb-4">
                <span className="material-symbols-outlined text-[22px]">route</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#0A2A5E] tracking-tight mb-2">
                Outstation & Interstate Transit
              </h3>
              <p className="text-xs sm:text-[12.5px] text-[#536B86] font-medium leading-relaxed">
                Experienced highway drivers, valid interstate transport permits, and documentation coordination for repatriation across Telangana, AP, Karnataka, Maharashtra and beyond.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7F2] text-[11px] font-bold text-[#1565D8] uppercase tracking-wider">
              Interstate Highway Coverage
            </div>
          </div>
        </div>

        {/* ── Also Need a Freezer Box Banner ── */}
        <div className="p-6 sm:p-8 bg-white border-2 border-[#0A2A5E] rounded-[4px] shadow-[4px_4px_0_#DDE7F2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[4px] bg-[#EAF2FC] border-2 border-[#1565D8] flex items-center justify-center text-[#1565D8] shrink-0">
              <span className="material-symbols-outlined text-[26px]">ac_unit</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1565D8]">
                Complementary Service Available
              </span>
              <h3 className="text-base sm:text-xl font-extrabold uppercase text-[#0A2A5E] tracking-tight mt-0.5">
                Need a Dead Body Freezer Box at Your Destination?
              </h3>
              <p className="text-xs sm:text-[13px] text-[#536B86] font-medium mt-1 leading-relaxed max-w-xl">
                We also provide Standard and VIP glass-top dead body freezer boxes for hire and rent across Hyderabad for home preservation and public homage ceremonies.
              </p>
            </div>
          </div>

          <a
            href="/services/dead-body-freezer-box"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1565D8] hover:bg-[#0A2A5E] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors shrink-0 text-center"
          >
            <span>Explore Freezer Box Rentals</span>
            <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
