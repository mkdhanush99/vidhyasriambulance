/**
 * Single source of truth for all site-wide contact and business data.
 * Do NOT hard-code phone numbers, WhatsApp links, or addresses in components.
 * Import from this file instead.
 *
 * CONTENT RULE: All values are PLACEHOLDERS until verified by the client.
 * Do not ship unverified fleet numbers, response times, certifications, etc.
 */

export const siteConfig = {
  companyName: "Vidhya Sri Ambulance Services",
  brandName: "Vidhya Sri Ambulance",
  companyLegalName: "Vidhya Sri Ambulance Services",
  tagline: "Care, Moving When It Matters.",
  description:
    "Vidhya Sri Ambulance Services provides 24×7 emergency and patient transportation in Hyderabad, with support for planned transfers, specialized ambulance requirements, and outstation journeys.",

  // ── Contact (Verified Business Information) ──
  phone: {
    display: "+91 99516 48174",
    href: "tel:+919951648174",
    raw: "+919951648174",
  },
  whatsapp: {
    display: "+91 99516 48174",
    href: "https://wa.me/919951648174",
    raw: "+919951648174",
  },
  email: "vidhyasriambulanceservices@gmail.com",

  // ── Verified Primary Business Address ──
  address: {
    street:
      "H.No: 6-3-662/5 & 6/4, Arun Residency, Jafar Ali Bagh, Circle 17, Somajiguda",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500082",
    country: "India",
    full: "H.No: 6-3-662/5 & 6/4, Arun Residency, Jafar Ali Bagh, Circle 17, Somajiguda, Hyderabad, Telangana 500082, India",
  },

  // ── Verified Google Maps Listing Destination ──
  googleMapsUrl:
    "https://maps.google.com/?q=Vidhya+Sri+Ambulance+Services,+Somajiguda,+Hyderabad,+Telangana+500082",

  // ── Hours ──
  hours: "24 Hours / 7 Days",

  // ── Social Links (Only verified channels; placeholders set to null) ──
  socialLinks: {
    handle: "@vidhyasriambulance",
    facebook: null as string | null,
    instagram: null as string | null,
    twitter: null as string | null,
    youtube: null as string | null,
  },

  // ── Brand Assets (production paths under /brand/) ──
  logo: {
    horizontal: {
      gradient: "/brand/svg/logo/logo-horizontal-gradient.svg",
      navy: "/brand/svg/logo/logo-horizontal-navy.svg",
      black: "/brand/svg/logo/logo-horizontal-black.svg",
      white: "/brand/svg/logo/logo-horizontal-white.svg",
      reverse: "/brand/svg/logo/logo-horizontal-reverse.svg",
    },
    stacked: {
      gradient: "/brand/svg/logo/logo-stacked-gradient.svg",
      navy: "/brand/svg/logo/logo-stacked-navy.svg",
      black: "/brand/svg/logo/logo-stacked-black.svg",
      white: "/brand/svg/logo/logo-stacked-white.svg",
      reverse: "/brand/svg/logo/logo-stacked-reverse.svg",
    },
    symbol: {
      gradient: "/brand/svg/symbol/symbol-gradient.svg",
      navy: "/brand/svg/symbol/symbol-navy.svg",
      black: "/brand/svg/symbol/symbol-black.svg",
      white: "/brand/svg/symbol/symbol-white.svg",
      reverse: "/brand/svg/symbol/symbol-reverse.svg",
    },
  },
  favicon: {
    svg: "/brand/icons/favicon.svg",
    ico: "/brand/icons/favicon.ico",
    png16: "/brand/icons/favicon-16x16.png",
    png32: "/brand/icons/favicon-32x32.png",
    png48: "/brand/icons/favicon-48x48.png",
    appleTouchIcon: "/brand/icons/apple-touch-icon-180.png",
    icon192: "/brand/icons/icon-192.png",
    icon512: "/brand/icons/icon-512.png",
    iconMaskable512: "/brand/icons/icon-maskable-512.png",
    manifest: "/brand/icons/site.webmanifest",
  },
  ogImage: "/brand/social/og-image-1200x630.png",

  // ── Brand Colors ──
  colors: {
    navy: "#0A2A5E",
    careBlue: "#1565D8",
    responseSky: "#38A3F7",
    clinicMist: "#EAF2FC",
    gradientFrom: "#0B3F9E",
    gradientTo: "#38A3F7",
    gradientAngle: "35deg",
    // Editorial accent palette
    coral: "#FF7468",
    peach: "#FFC48A",
    warmYellow: "#F4D46A",
    lavender: "#DCCBFF",
    purple: "#B9A4E8",
    mint: "#BFE8D5",
    aqua: "#B9E7ED",
    softGreen: "#B9D9C6",
  },

  // ── SEO Defaults ──
  seo: {
    siteName: "Vidhya Sri Ambulance",
    defaultTitle:
      "Emergency Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
    defaultDescription:
      "Vidhya Sri Ambulance Services provides 24×7 emergency and patient transportation in Hyderabad, with support for planned transfers, specialized ambulance requirements and outstation journeys.",
    url: "https://vidhyasriambulance.com",
    locale: "en_IN",
  },
} as const;

export type SiteConfig = typeof siteConfig;
