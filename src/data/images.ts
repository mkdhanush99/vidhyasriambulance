/**
 * Centralized Image Data Model for Vidhya Sri Ambulance Services.
 *
 * All image paths, dimensions, natural descriptive alt text, caption strips,
 * and asset classification (REAL_CLIENT_ASSET vs TEMPORARY_ASSET) are defined here.
 *
 * Real client photographs supplied by Vidhya Sri Ambulance are prioritized across all views.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  captionLocation?: string;
  badge?: string;
  aspectRatio: string;
  objectPosition: string;
  assetType: "REAL_CLIENT_ASSET" | "TEMPORARY_ASSET";
}

export const siteImages = {
  // ── HOME PAGE ──
  home: {
    hero: {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri patient ambulance positioned at a healthcare facility entrance in Hyderabad",
      caption: "Ambulance Stationed at Healthcare Entrance",
      captionLocation: "Hyderabad · 24×7",
      badge: "VERIFIED FLEET",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    featuredService: {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Lineup of Vidhya Sri Force Traveller Mobile ICU ambulances equipped for critical care",
      caption: "Mobile ICU On Wheels Fleet",
      captionLocation: "Hyderabad Operational Base",
      badge: "ICU READY",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    brandStory: {
      src: "/images/vidhya-sri-fleet-lineup-hyderabad.webp",
      alt: "Vidhya Sri ambulance fleet including Force Travellers and Maruti Eeco vehicles parked in Hyderabad",
      caption: "Ambulance Fleet & Dispatch Base",
      captionLocation: "Hyderabad Operational Base",
      badge: "OPERATIONAL FLEET",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,
  },

  // ── ABOUT PAGE ──
  about: {
    hero: {
      src: "/images/vidhya-sri-fleet-lineup-hyderabad.webp",
      alt: "Vidhya Sri multi-vehicle ambulance fleet parked ready for service in Hyderabad",
      caption: "Ambulance Readiness & Dispatch Unit",
      captionLocation: "Hyderabad",
      badge: "ESTABLISHED SERVICE",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    icuFleet: {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Close-up perspective of Vidhya Sri Mobile ICU ambulance vehicles",
      caption: "Force Traveller Mobile ICU Units",
      captionLocation: "Advanced Life Support",
      badge: "MOBILE ICU",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    patientVehicle: {
      src: "/images/vidhya-sri-patient-transfer-ambulance.webp",
      alt: "Vidhya Sri patient transfer ambulance vehicle on duty in Telangana",
      caption: "Patient Transfer & Non-Emergency Ambulance",
      captionLocation: "Telangana Route",
      badge: "SCHEDULED TRANSFERS",
      aspectRatio: "aspect-[3/4] sm:aspect-[4/3]",
      objectPosition: "center 70%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,
  },

  // ── SERVICES OVERVIEW ──
  servicesOverview: {
    emergencyFeatured: {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Emergency ambulance ready at hospital entrance in Hyderabad",
      caption: "Emergency Ambulance Unit",
      captionLocation: "Hospital Transit",
      badge: "24×7 EMERGENCY",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    icuSecondary: {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Vidhya Sri Mobile ICU ambulance fleet",
      caption: "Mobile ICU On Wheels",
      captionLocation: "Critical Care",
      badge: "ICU ON WHEELS",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    transferSupporting: {
      src: "/images/vidhya-sri-patient-transfer-ambulance.webp",
      alt: "Patient transfer ambulance vehicle",
      caption: "Patient Transport Vehicle",
      captionLocation: "Scheduled Care",
      badge: "PLANNED TRANSIT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 70%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,
  },

  // ── INDIVIDUAL SERVICE HEROES ──
  services: {
    "emergency-ambulance": {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri emergency ambulance vehicle arriving outside a hospital entrance in Hyderabad",
      caption: "Emergency Medical Transport",
      captionLocation: "Hospital Transfer · Hyderabad",
      badge: "URGENT DISPATCH",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "icu-ambulance": {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Force Traveller Mobile ICU ambulance fleet equipped for intensive life support transit",
      caption: "Mobile ICU On Wheels Support",
      captionLocation: "Advanced Critical Care · Hyderabad",
      badge: "INTENSIVE CARE",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "ventilator-ambulance": {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Advanced critical care ambulance prepared for invasive respiratory ventilator support in Hyderabad",
      caption: "Ventilator Transport Vehicle",
      captionLocation: "Continuous Respiratory Care",
      badge: "VENTILATOR READY",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "bls-ambulance": {
      src: "/images/vidhya-sri-patient-transfer-ambulance.webp",
      alt: "Vidhya Sri Basic Life Support ambulance vehicle for stable patient transport",
      caption: "Basic Life Support Ambulance",
      captionLocation: "Routine & Non-Critical Care",
      badge: "BASIC LIFE SUPPORT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 70%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "patient-transfer-ambulance": {
      src: "/images/vidhya-sri-patient-transfer-ambulance.webp",
      alt: "Vidhya Sri patient transfer vehicle for hospital discharge, clinic visits, and scheduled journeys",
      caption: "Patient Transfer Ambulance",
      captionLocation: "Scheduled Medical Journeys",
      badge: "PATIENT TRANSFER",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 70%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "oxygen-ambulance": {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri ambulance equipped with dedicated medical oxygen administration support",
      caption: "Medical Oxygen Transport",
      captionLocation: "Continuous Oxygen Support",
      badge: "OXYGEN SUPPORT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "nicu-neonatal-ambulance": {
      src: "/images/vidhya-sri-icu-ambulance-fleet.webp",
      alt: "Specialized mobile care ambulance prepared for gentle neonatal and pediatric patient transfer",
      caption: "Neonatal Transport Ambulance",
      captionLocation: "Dedicated Pediatric Transfer",
      badge: "NEONATAL CARE",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "outstation-ambulance": {
      src: "/images/vidhya-sri-fleet-lineup-hyderabad.webp",
      alt: "Vidhya Sri ambulance fleet equipped for outstation intercity medical journeys from Hyderabad",
      caption: "Outstation Long-Distance Transport",
      captionLocation: "Telangana & Interstate Transit",
      badge: "OUTSTATION ROUTE",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "event-standby-ambulance": {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri ambulance stationed for event standby medical coverage in Hyderabad",
      caption: "Event Standby Ambulance",
      captionLocation: "Corporate & Public Gatherings",
      badge: "EVENT STANDBY",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "corporate-ambulance": {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri ambulance stationed for corporate campus and industrial workplace medical standby",
      caption: "Corporate Medical Coverage",
      captionLocation: "Workplace & Industrial Standby",
      badge: "CORPORATE HEALTH",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "mortuary-ambulance": {
      src: "/images/vidhya-sri-mortuary-van.webp",
      alt: "Dignified mortuary ambulance van vehicle for deceased transportation across Hyderabad and interstate routes",
      caption: "Mortuary Transport Ambulance",
      captionLocation: "Hyderabad & Interstate Transit",
      badge: "DIGNIFIED TRANSPORT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 50%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "dead-body-freezer-box": {
      src: "/images/vidhya-sri-mortuary-freezer-box.webp",
      alt: "Dead body freezer box with VIP glass top display available for hire and rent in Hyderabad",
      caption: "Dead Body Freezer Box (Standard & VIP)",
      captionLocation: "Doorstep Delivery & Rental Across Hyderabad",
      badge: "VIP FREEZER BOX ON RENT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 50%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,

    "mortuary-transportation": {
      src: "/images/vidhya-sri-mortuary-van.webp",
      alt: "Dignified mortuary ambulance transport vehicle in Hyderabad",
      caption: "Mortuary Transport Ambulance",
      captionLocation: "Hyderabad & Interstate Transit",
      badge: "DIGNIFIED TRANSPORT",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 50%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,
  } as Record<string, ImageAsset>,

  // ── COVERAGE / LOCATION PAGES ──
  coverage: {
    supportingImage: {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri ambulance in Hyderabad ready for local area dispatch",
      caption: "Hyderabad Area Ambulance Dispatch",
      captionLocation: "Greater Hyderabad",
      badge: "LOCAL DISPATCH",
      aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
      objectPosition: "center 65%",
      assetType: "REAL_CLIENT_ASSET",
    } as ImageAsset,
  },
};

/**
 * Helper to get service hero image safely
 */
export function getServiceImage(slug: string): ImageAsset {
  return (
    siteImages.services[slug] || {
      src: "/images/vidhya-sri-ambulance-hyderabad-hospital.webp",
      alt: "Vidhya Sri Ambulance in Hyderabad",
      caption: "Ambulance Transportation",
      captionLocation: "Hyderabad",
      aspectRatio: "aspect-[16/11]",
      objectPosition: "center",
      assetType: "REAL_CLIENT_ASSET",
    }
  );
}
