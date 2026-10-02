/**
 * Services data — single source of truth for all ambulance service types.
 * One data model → one template. Do NOT create separate layouts per service.
 */

export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  accent: string;       // Tailwind color class for card accent
  accentHex: string;    // Hex value for dynamic usage
  icon: string;         // Material Symbols icon name
  features: string[];
  relatedServices: string[]; // slugs
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
}

export const services: ServiceData[] = [
  {
    slug: "emergency-ambulance",
    name: "Emergency Ambulance (ALS)",
    shortDescription:
      "Advanced Life Support for acute trauma, cardiac arrests, and respiratory crises.",
    description:
      "Our emergency ALS fleet functions as a mobile trauma centre configured for road transit. Equipped with clinical oxygen banks, defibrillators, and real-time hospital telemetry linkage. Staffed with dual ACLS paramedics.",
    accent: "coral",
    accentHex: "#FF7468",
    icon: "emergency",
    features: [
      "Advanced airway management",
      "Cardiac monitoring & defibrillation",
      "High-flow oxygen therapy",
      "Spinal immobilization",
      "IV access & medication administration",
    ],
    relatedServices: ["icu-ambulance", "ventilator-ambulance"],
    faqs: [
      {
        question: "What is an ALS ambulance?",
        answer:
          "An Advanced Life Support ambulance is equipped with advanced medical equipment and staffed by trained paramedics who can provide critical care interventions during transport.",
      },
      {
        question: "How quickly can you reach me?",
        answer:
          "Our target response time across Hyderabad is under 15 minutes, depending on location and traffic conditions. Call us immediately for the fastest dispatch.",
      },
    ],
    seo: {
      title: "Emergency Ambulance Service (ALS) | Vidhya Sri Ambulance Hyderabad",
      description:
        "24×7 Advanced Life Support (ALS) emergency ambulance service in Hyderabad. Cardiac monitoring, defibrillation, advanced airway management. Call now.",
    },
  },
  {
    slug: "icu-ambulance",
    name: "ICU Ambulance",
    shortDescription:
      "Hospital ICU on wheels for critically ill patients requiring continuous monitoring.",
    description:
      "Mobile Intensive Care Unit with continuous invasive monitoring, multi-channel infusion pumps, and critical care physician escort for safe inter-facility transfers.",
    accent: "lavender",
    accentHex: "#DCCBFF",
    icon: "monitor_heart",
    features: [
      "Invasive arterial pressure monitoring",
      "Multi-channel infusion pumps",
      "Critical care physician escort",
      "Continuous vitals telemetry",
      "Ventilator support",
    ],
    relatedServices: ["emergency-ambulance", "ventilator-ambulance"],
    faqs: [
      {
        question: "When is an ICU ambulance needed?",
        answer:
          "ICU ambulances are needed for critically ill patients requiring continuous monitoring and life support during inter-hospital or facility transfers.",
      },
    ],
    seo: {
      title: "ICU Ambulance Service | Vidhya Sri Ambulance Hyderabad",
      description:
        "Mobile ICU ambulance with critical care physician escort, invasive monitoring, and ventilator support for safe inter-facility transfers in Hyderabad.",
    },
  },
  {
    slug: "ventilator-ambulance",
    name: "Ventilator Ambulance",
    shortDescription:
      "Dedicated ventilator support with pneumatic backups and continuous oxygen.",
    description:
      "Specialized transport ventilation ambulance with non-invasive and invasive ventilator support, pneumatic backups, and independent high-volume oxygen supplies for respiratory patients.",
    accent: "peach",
    accentHex: "#FFC48A",
    icon: "pulmonology",
    features: [
      "Transport ventilator support",
      "Non-invasive & invasive modes",
      "Pneumatic backup systems",
      "High-volume oxygen supply",
      "Trained respiratory technician",
    ],
    relatedServices: ["icu-ambulance", "emergency-ambulance"],
    faqs: [
      {
        question: "What conditions require a ventilator ambulance?",
        answer:
          "Patients on mechanical ventilation, those with severe respiratory distress, COPD exacerbations, or post-surgical patients who require ventilator support during transport.",
      },
    ],
    seo: {
      title: "Ventilator Ambulance Service | Vidhya Sri Ambulance Hyderabad",
      description:
        "Ventilator-equipped ambulance service in Hyderabad with transport ventilators, pneumatic backups, and respiratory technician escort. Available 24×7.",
    },
  },
  {
    slug: "bls-ambulance",
    name: "Basic Life Support (BLS)",
    shortDescription:
      "Stabilized non-critical emergency transfers with oxygen and basic monitoring.",
    description:
      "Basic Life Support ambulance for stabilized, non-critical emergency transfers including fracture mobility, low-flow oxygen administration, and EMT escort.",
    accent: "aqua",
    accentHex: "#B9E7ED",
    icon: "local_hospital",
    features: [
      "Oxygen therapy",
      "Basic monitoring",
      "Fracture stabilization",
      "EMT escort",
      "Stretcher & wheelchair",
    ],
    relatedServices: ["patient-transfer-ambulance", "oxygen-ambulance"],
    faqs: [
      {
        question: "What is the difference between ALS and BLS?",
        answer:
          "BLS (Basic Life Support) provides essential medical care and transport, while ALS (Advanced Life Support) includes advanced interventions like cardiac monitoring, intubation, and IV medication.",
      },
    ],
    seo: {
      title: "Basic Life Support Ambulance (BLS) | Vidhya Sri Ambulance Hyderabad",
      description:
        "Basic Life Support ambulance service in Hyderabad for non-critical transfers with oxygen therapy, fracture stabilization, and EMT escort. Call 24×7.",
    },
  },
  {
    slug: "patient-transfer-ambulance",
    name: "Patient Transfer Ambulance",
    shortDescription:
      "Pre-scheduled comfort transit for dialysis, chemotherapy, and post-operative care.",
    description:
      "Pre-scheduled recurring comfort transit for chemotherapy routines, dialysis sessions, post-operative returns, and mobility-assisted patients requiring safe, comfortable transport.",
    accent: "warmYellow",
    accentHex: "#F4D46A",
    icon: "transfer_within_a_station",
    features: [
      "Wheelchair-accessible",
      "Reclining stretcher",
      "Comfortable ride suspension",
      "Scheduled booking",
      "Return trip coordination",
    ],
    relatedServices: ["bls-ambulance", "outstation-ambulance"],
    faqs: [
      {
        question: "Can I book a recurring transfer?",
        answer:
          "Yes, we offer scheduled recurring transfers for patients needing regular hospital visits such as dialysis, chemotherapy, or physiotherapy sessions.",
      },
    ],
    seo: {
      title: "Patient Transfer Ambulance | Vidhya Sri Ambulance Hyderabad",
      description:
        "Scheduled patient transfer ambulance in Hyderabad for dialysis, chemotherapy, and post-operative transport. Comfortable, wheelchair-accessible. Book now.",
    },
  },
  {
    slug: "oxygen-ambulance",
    name: "Oxygen Ambulance",
    shortDescription:
      "Dedicated oxygen supply ambulance for patients requiring continuous O2 therapy.",
    description:
      "Ambulance equipped with high-flow and low-flow oxygen systems for patients requiring continuous oxygen therapy during transport.",
    accent: "mint",
    accentHex: "#BFE8D5",
    icon: "air",
    features: [
      "High-flow oxygen delivery",
      "Low-flow continuous O2",
      "Pulse oximetry monitoring",
      "Trained oxygen technician",
      "Backup oxygen cylinders",
    ],
    relatedServices: ["bls-ambulance", "ventilator-ambulance"],
    faqs: [
      {
        question: "What oxygen delivery systems are available?",
        answer:
          "Our oxygen ambulances carry both high-flow and low-flow delivery systems including nasal cannulas, face masks, and non-rebreather masks with continuous pulse oximetry monitoring.",
      },
    ],
    seo: {
      title: "Oxygen Ambulance Service | Vidhya Sri Ambulance Hyderabad",
      description:
        "Oxygen-equipped ambulance service in Hyderabad with high-flow and low-flow O2 therapy, pulse oximetry, and backup cylinders. Available 24×7.",
    },
  },
  {
    slug: "nicu-neonatal-ambulance",
    name: "NICU / Neonatal Ambulance",
    shortDescription:
      "Thermoregulated neonatal transport with specialized infant respiratory support.",
    description:
      "Specialized neonatal transport with thermoregulated incubators, micro-infusion units, infant respiratory support, and neonatal nurse escorts.",
    accent: "softGreen",
    accentHex: "#B9D9C6",
    icon: "child_care",
    features: [
      "Transport incubator",
      "Infant ventilator",
      "Micro-infusion pumps",
      "Neonatal nurse escort",
      "Temperature regulation",
    ],
    relatedServices: ["icu-ambulance", "ventilator-ambulance"],
    faqs: [
      {
        question: "Is a specialized nurse included?",
        answer:
          "Yes, all NICU transports include a qualified neonatal nurse escort trained in newborn stabilization and emergency care.",
      },
    ],
    seo: {
      title: "NICU Neonatal Ambulance | Vidhya Sri Ambulance Hyderabad",
      description:
        "Neonatal ambulance service in Hyderabad with transport incubators, infant ventilators, and neonatal nurse escort for safe NICU transfers.",
    },
  },
  {
    slug: "outstation-ambulance",
    name: "Outstation Ambulance",
    shortDescription:
      "Long-distance medical transfers across Telangana, AP, Karnataka, and Maharashtra.",
    description:
      "Long-distance medical transfers with dual drivers, non-stop monitoring, and all-India permits for interstate medical transport.",
    accent: "coral",
    accentHex: "#FF7468",
    icon: "route",
    features: [
      "All-India road permits",
      "Dual-driver relay system",
      "Non-stop vitals monitoring",
      "Long-distance fuel capacity",
      "Interstate coordination",
    ],
    relatedServices: ["icu-ambulance", "patient-transfer-ambulance"],
    faqs: [
      {
        question: "Which states do you cover?",
        answer:
          "We provide interstate ambulance transport across Telangana, Andhra Pradesh, Karnataka, Maharashtra, Tamil Nadu, and other Indian states with proper permits.",
      },
    ],
    seo: {
      title: "Outstation Ambulance Service | Vidhya Sri Ambulance Hyderabad",
      description:
        "Long-distance outstation ambulance service from Hyderabad with all-India permits, dual drivers, and continuous monitoring. Interstate medical transport.",
    },
  },
  {
    slug: "event-standby-ambulance",
    name: "Event Standby Ambulance",
    shortDescription:
      "Dedicated ambulance stationing for corporate events, sports, and conventions.",
    description:
      "On-site ambulance standby services for tech parks, industrial facilities, sports events, conventions, and film productions with dedicated EMT team.",
    accent: "purple",
    accentHex: "#B9A4E8",
    icon: "stadium",
    features: [
      "On-site EMT team",
      "First-aid station setup",
      "Emergency evacuation plan",
      "Event medical coordination",
      "Flexible duration booking",
    ],
    relatedServices: ["corporate-ambulance", "bls-ambulance"],
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking event standby ambulances at least 48 hours in advance, though we can accommodate urgent requests subject to fleet availability.",
      },
    ],
    seo: {
      title: "Event Standby Ambulance | Vidhya Sri Ambulance Hyderabad",
      description:
        "Event medical standby ambulance in Hyderabad for corporate events, sports, conventions, and film productions. On-site EMT team. Book now.",
    },
  },
  {
    slug: "corporate-ambulance",
    name: "Corporate Ambulance",
    shortDescription:
      "Dedicated ambulance services for tech parks, factories, and corporate campuses.",
    description:
      "Corporate ambulance tie-up services with dedicated ambulance stationing at tech parks, industrial facilities, and corporate campuses with customized SLA agreements.",
    accent: "lavender",
    accentHex: "#DCCBFF",
    icon: "corporate_fare",
    features: [
      "Dedicated fleet assignment",
      "SLA-based response times",
      "On-campus medical room setup",
      "Employee health screening support",
      "24×7 emergency hotline",
    ],
    relatedServices: ["event-standby-ambulance", "bls-ambulance"],
    faqs: [
      {
        question: "Do you offer annual contracts?",
        answer:
          "Yes, we provide flexible contract options including annual, semi-annual, and event-based arrangements tailored to your organization's needs.",
      },
    ],
    seo: {
      title: "Corporate Ambulance Service | Vidhya Sri Ambulance Hyderabad",
      description:
        "Corporate ambulance services for tech parks and campuses in Hyderabad. Dedicated fleet, SLA-based response, 24×7 emergency hotline.",
    },
  },
  {
    slug: "mortuary-transportation",
    name: "Mortuary Transportation",
    shortDescription:
      "Dignified, temperature-regulated deceased transfer for city and nationwide transit.",
    description:
      "Dignified and respectful temperature-regulated deceased transfer with integrated refrigeration for city-wide and nationwide transit.",
    accent: "mist",
    accentHex: "#EAF2FC",
    icon: "church",
    features: [
      "Temperature-regulated chamber",
      "Dignified handling protocols",
      "City-wide and interstate",
      "Documentation assistance",
      "24×7 availability",
    ],
    relatedServices: [],
    faqs: [
      {
        question: "Do you help with documentation?",
        answer:
          "Yes, our team assists with necessary documentation and coordination with hospitals and authorities for smooth processing.",
      },
    ],
    seo: {
      title: "Mortuary Transportation | Vidhya Sri Ambulance Hyderabad",
      description:
        "Dignified mortuary transportation service in Hyderabad with temperature-regulated chambers for city-wide and interstate deceased transfer. Available 24×7.",
    },
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);

export const getRelatedServices = (slugs: string[]): ServiceData[] =>
  services.filter((s) => slugs.includes(s.slug));
