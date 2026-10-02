/**
 * Services data — single source of truth for all ambulance service types.
 * One data model → one template. Do NOT create separate layouts per service.
 *
 * All claims are factual and restrained in accordance with project guidelines.
 */

export interface ServiceData {
  slug: string;
  name: string;
  h1Title: string;
  category: "EMERGENCY & CRITICAL CARE" | "PATIENT TRANSPORT" | "SPECIALIZED & PLANNED TRANSPORT";
  shortDescription: string;
  description: string;
  cardAnchor: string;
  accent: string;       // Tailwind color class for card accent
  accentHex: string;    // Hex value for dynamic usage
  icon: string;         // Material Symbols icon name
  features: string[];
  bookingChecklist: string[];
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
    name: "Emergency Ambulance",
    h1Title: "Emergency Ambulance Service in Hyderabad",
    category: "EMERGENCY & CRITICAL CARE",
    shortDescription:
      "24×7 urgent medical transport across Hyderabad for trauma, cardiac crises, and critical health emergencies.",
    description:
      "When urgent medical transport is required, an ambulance provides a purpose-built way to move a patient to a hospital or other healthcare facility. Vidhya Sri Ambulance Services provides emergency ambulance support in Hyderabad and surrounding areas.",
    cardAnchor: "Explore Emergency Ambulance →",
    accent: "coral",
    accentHex: "#FF7468",
    icon: "emergency",
    features: [
      "Immediate 24×7 dispatch coordination",
      "Stretcher and patient immobilization setup",
      "Oxygen administration capability",
      "Cardiac vitals monitoring",
      "Emergency hospital transit across Hyderabad",
    ],
    bookingChecklist: [
      "Exact pickup address and prominent nearby landmark",
      "Current patient condition and conscious state",
      "Destination hospital or preferred medical center",
      "Caller direct contact number for driver coordination",
    ],
    relatedServices: [
      "icu-ambulance",
      "ventilator-ambulance",
      "bls-ambulance",
      "oxygen-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "How do I book an emergency ambulance in Hyderabad?",
        answer:
          "For an urgent ambulance requirement, call Vidhya Sri Ambulance directly at 9951648174. You can also reach our dispatch team via WhatsApp with your pickup location.",
      },
      {
        question: "When should an emergency ambulance be requested?",
        answer:
          "Emergency ambulance transport is appropriate for situations including road accidents, sudden severe chest pain, breathing difficulty, loss of consciousness, or urgent transfer between emergency departments.",
      },
    ],
    seo: {
      title: "Emergency Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Emergency ambulance service in Hyderabad by Vidhya Sri Ambulance Services. 24×7 dispatch support for acute medical and trauma transfers. Call 9951648174.",
    },
  },
  {
    slug: "icu-ambulance",
    name: "ICU Ambulance",
    h1Title: "ICU Ambulance Service in Hyderabad",
    category: "EMERGENCY & CRITICAL CARE",
    shortDescription:
      "Intensive care transport for critically ill patients requiring continuous clinical oversight during inter-facility transit.",
    description:
      "An ICU ambulance is intended for patients who require a higher level of support during transportation than a standard patient-transfer vehicle. Vidhya Sri Ambulance Services coordinates ICU ambulance transfers across Hyderabad healthcare institutions.",
    cardAnchor: "View ICU Ambulance Services →",
    accent: "lavender",
    accentHex: "#DCCBFF",
    icon: "monitor_heart",
    features: [
      "Continuous multipara vitals monitoring",
      "In-transit infusion pump capability",
      "Specialized intensive care stretcher setup",
      "Dedicated medical escort coordination",
      "Bed-to-bed clinical handoff protocol",
    ],
    bookingChecklist: [
      "Current patient condition as advised by the treating team",
      "Pickup hospital, ward/bed number, and attending contact",
      "Receiving hospital and confirmed bed acceptance",
      "Whether ongoing oxygen, ventilator, or monitoring support is required",
    ],
    relatedServices: [
      "emergency-ambulance",
      "ventilator-ambulance",
      "oxygen-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "What information is needed before booking an ICU ambulance?",
        answer:
          "Please share the patient's current medical summary from the treating team, pickup hospital ward, destination receiving hospital, and required in-transit clinical support.",
      },
      {
        question: "Can an ICU ambulance travel outside Hyderabad?",
        answer:
          "Yes, Vidhya Sri coordinates both intra-city inter-hospital ICU transfers and long-distance outstation ICU journeys across Telangana and Andhra Pradesh, subject to medical stability and advance planning.",
      },
    ],
    seo: {
      title: "ICU Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "ICU ambulance service in Hyderabad for critical patient transfers requiring continuous medical supervision and monitoring. Available 24×7. Call 9951648174.",
    },
  },
  {
    slug: "ventilator-ambulance",
    name: "Ventilator Ambulance",
    h1Title: "Ventilator Ambulance Service in Hyderabad",
    category: "EMERGENCY & CRITICAL CARE",
    shortDescription:
      "Dedicated transport for respiratory patients requiring continuous mechanical ventilatory support during transit.",
    description:
      "Ventilator-supported transport may be required for patients who depend on ventilatory support during transfer. Vidhya Sri Ambulance Services arranges ventilator-equipped ambulances with appropriate clinical coordination across Hyderabad.",
    cardAnchor: "See Ventilator Ambulance Options →",
    accent: "peach",
    accentHex: "#FFC48A",
    icon: "pulmonology",
    features: [
      "Transport mechanical ventilator compatibility",
      "High-capacity medical oxygen supply",
      "Airway management & suction equipment",
      "Respiratory technician or clinical escort support",
      "Coordinated transit between ICUs",
    ],
    bookingChecklist: [
      "Pickup hospital and receiving hospital destination",
      "Whether the patient is already on ventilator support (invasive or non-invasive)",
      "Hospital and treating medical team transfer instructions",
      "Confirmed receiving ICU bed and team readiness",
    ],
    relatedServices: [
      "icu-ambulance",
      "emergency-ambulance",
      "oxygen-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "Who needs a ventilator ambulance?",
        answer:
          "Patients requiring continuous mechanical respiratory assistance, tracheostomy ventilation, or advanced airway management during inter-facility transit require a ventilator-equipped ambulance.",
      },
      {
        question: "Can family members accompany the patient in a ventilator ambulance?",
        answer:
          "Typically one attendant is permitted, subject to the space needed for clinical equipment and the attending medical escort.",
      },
    ],
    seo: {
      title: "Ventilator Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Ventilator ambulance service in Hyderabad for patients requiring continuous ventilatory support during transit. 24×7 dispatch coordination. Call 9951648174.",
    },
  },
  {
    slug: "bls-ambulance",
    name: "BLS Ambulance",
    h1Title: "BLS Ambulance Service in Hyderabad",
    category: "EMERGENCY & CRITICAL CARE",
    shortDescription:
      "Basic Life Support medical transport for stable patients needing oxygen, monitoring, and assistance during travel.",
    description:
      "Basic Life Support ambulance services are generally used for patients who need ambulance transportation with basic medical support during the journey. Vidhya Sri Ambulance Services provides BLS transfers throughout Hyderabad.",
    cardAnchor: "Explore BLS Ambulance →",
    accent: "aqua",
    accentHex: "#B9E7ED",
    icon: "local_hospital",
    features: [
      "Standard ambulance stretcher & wheelchair",
      "Oxygen administration setup",
      "First aid and splinting supplies",
      "Trained emergency transport crew",
      "City and regional transfer coverage",
    ],
    bookingChecklist: [
      "Pickup address, floor level, and elevator availability",
      "Destination hospital, clinic, or residence",
      "Whether the patient requires low-flow oxygen during travel",
      "Preferred pickup time for scheduled transfers",
    ],
    relatedServices: [
      "emergency-ambulance",
      "patient-transfer-ambulance",
      "oxygen-ambulance",
      "outstation-ambulance",
    ],
    faqs: [
      {
        question: "What is a BLS ambulance?",
        answer:
          "A Basic Life Support ambulance is designed for stable patients who do not require advanced cardiac or ventilator intervention but benefit from stretcher transport, oxygen support, and basic monitoring.",
      },
      {
        question: "Can I book a BLS ambulance for hospital discharge?",
        answer:
          "Yes, BLS ambulances are commonly utilized for safe hospital discharges when patients cannot sit upright or need continuous oxygen on the way home.",
      },
    ],
    seo: {
      title: "BLS Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Basic Life Support (BLS) ambulance service in Hyderabad for non-critical patient transfers, hospital discharges, and monitored travel. Call 9951648174.",
    },
  },
  {
    slug: "patient-transfer-ambulance",
    name: "Patient Transfer Ambulance",
    h1Title: "Patient Transfer Ambulance Service in Hyderabad",
    category: "PATIENT TRANSPORT",
    shortDescription:
      "Scheduled, comfort-focused transport for hospital discharges, dialysis, chemotherapy, and clinic appointments.",
    description:
      "For non-emergency medical journeys including hospital-to-hospital transfers, hospital discharges, planned diagnostic appointments, and mobility-limited patients, Vidhya Sri Ambulance Services provides dependable patient transfer services across Hyderabad.",
    cardAnchor: "Explore Patient Transfer Ambulance →",
    accent: "warmYellow",
    accentHex: "#F4D46A",
    icon: "transfer_within_a_station",
    features: [
      "Pre-scheduled booking options",
      "Reclining stretcher with safety straps",
      "Wheelchair-assisted boarding",
      "Door-to-door escort assistance",
      "Round-trip coordination for therapy sessions",
    ],
    bookingChecklist: [
      "Scheduled hospital discharge or appointment time",
      "Pickup ward/room or residential address",
      "Patient mobility status (bed-bound, wheelchair, ambulatory)",
      "Whether a return trip should be reserved",
    ],
    relatedServices: [
      "bls-ambulance",
      "oxygen-ambulance",
      "outstation-ambulance",
    ],
    faqs: [
      {
        question: "Can I schedule recurring patient transfers for dialysis?",
        answer:
          "Yes, we arrange planned recurring transfers for dialysis, chemotherapy, radiotherapy, and physiotherapy sessions according to your weekly schedule.",
      },
      {
        question: "How far in advance should I book a patient transfer?",
        answer:
          "While same-day requests are accommodated subject to vehicle availability, booking a few hours or a day in advance ensures preferred scheduling.",
      },
    ],
    seo: {
      title: "Patient Transfer Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Patient transfer ambulance service in Hyderabad for hospital discharge, clinic visits, dialysis, and inter-hospital patient transport. Call 9951648174.",
    },
  },
  {
    slug: "oxygen-ambulance",
    name: "Oxygen Ambulance",
    h1Title: "Oxygen Ambulance Service in Hyderabad",
    category: "PATIENT TRANSPORT",
    shortDescription:
      "Transport equipped with dedicated medical oxygen cylinders for patients requiring continuous respiratory therapy.",
    description:
      "Some patients require uninterrupted oxygen support during transport. Vidhya Sri Ambulance Services provides oxygen-equipped ambulances in Hyderabad, ensuring continuous oxygenation throughout the journey.",
    cardAnchor: "View Oxygen Ambulance Services →",
    accent: "mint",
    accentHex: "#BFE8D5",
    icon: "air",
    features: [
      "Continuous medical-grade oxygen supply",
      "Nasal cannula and face mask compatibility",
      "Pulse oximeter for SpO2 monitoring",
      "Backup oxygen cylinder capacity",
      "Trained support personnel",
    ],
    bookingChecklist: [
      "Current oxygen requirement in litres per minute (LPM)",
      "Prescribed delivery method (nasal prongs, simple mask, or NRBM)",
      "Pickup location and destination healthcare center",
      "Treating doctor instructions regarding in-transit flow rates",
    ],
    relatedServices: [
      "icu-ambulance",
      "ventilator-ambulance",
      "bls-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "What oxygen information should I give when booking?",
        answer:
          "Please inform our coordinator of the patient's current oxygen flow rate (litres per minute) and delivery mechanism as advised by your healthcare team.",
      },
      {
        question: "Are oxygen ambulances suitable for home-to-hospital transit?",
        answer:
          "Yes, our oxygen ambulances are frequently arranged to transport patients from residences to hospitals or diagnostic centers requiring continuous supplemental oxygen.",
      },
    ],
    seo: {
      title: "Oxygen Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Oxygen-equipped ambulance service in Hyderabad for patients requiring continuous oxygen therapy during transit. 24×7 booking support. Call 9951648174.",
    },
  },
  {
    slug: "nicu-neonatal-ambulance",
    name: "NICU / Neonatal Ambulance",
    h1Title: "NICU / Neonatal Ambulance Service in Hyderabad",
    category: "PATIENT TRANSPORT",
    shortDescription:
      "Specialized, temperature-regulated ambulance arrangements for newborns and infants requiring coordinated hospital transfer.",
    description:
      "Transport for newborns and infants can require specialized arrangements and coordination with the treating healthcare team. Vidhya Sri Ambulance Services helps arrange neonatal ambulance support in Hyderabad with appropriate medical coordination.",
    cardAnchor: "See NICU / Neonatal Transport →",
    accent: "softGreen",
    accentHex: "#B9D9C6",
    icon: "child_care",
    features: [
      "Transport incubator accommodation",
      "Specialized infant thermal regulation",
      "Neonatal respiratory support readiness",
      "Coordination with pediatric medical escorts",
      "Careful vibration-dampened transport protocol",
    ],
    bookingChecklist: [
      "Baby's age, gestational weight, and clinical status",
      "Current hospital neonatal unit and attending doctor details",
      "Destination hospital NICU confirmation and bed availability",
      "Medical support required as advised by the treating neonatal team",
    ],
    relatedServices: [
      "icu-ambulance",
      "ventilator-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "What is required to book a neonatal transfer?",
        answer:
          "Arranging a neonatal transfer requires coordination between the referring doctor and the receiving NICU team to ensure appropriate specialized equipment and escort arrangements.",
      },
      {
        question: "Can parents travel in the neonatal ambulance?",
        answer:
          "Typically one parent or designated guardian can accompany the infant, subject to safety and medical team space requirements.",
      },
    ],
    seo: {
      title: "NICU Neonatal Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "NICU and neonatal ambulance services in Hyderabad for safe infant transfers between maternity hospitals and specialized pediatric centers. Call 9951648174.",
    },
  },
  {
    slug: "outstation-ambulance",
    name: "Outstation Ambulance",
    h1Title: "Outstation Ambulance Service from Hyderabad",
    category: "SPECIALIZED & PLANNED TRANSPORT",
    shortDescription:
      "Long-distance and interstate patient transportation from Hyderabad across Telangana, Andhra Pradesh, and nearby states.",
    description:
      "Vidhya Sri Ambulance Services arranges outstation patient transportation from Hyderabad for journeys within Telangana, Andhra Pradesh and other destinations, subject to availability and the requirements of the journey.",
    cardAnchor: "Explore Outstation Ambulance →",
    accent: "coral",
    accentHex: "#FF7468",
    icon: "route",
    features: [
      "Interstate road transport permits",
      "Dual-driver arrangement for long highway routes",
      "Continuous patient comfort and vitals monitoring",
      "High-capacity fuel and oxygen supplies",
      "Coordination across Telangana, AP, and neighboring states",
    ],
    bookingChecklist: [
      "Pickup city/location and final destination address",
      "Patient medical stability and doctor clearance for road travel",
      "Expected journey date and preferred departure time",
      "Accompanying family members and luggage volume",
    ],
    relatedServices: [
      "icu-ambulance",
      "ventilator-ambulance",
      "patient-transfer-ambulance",
      "mortuary-transportation",
    ],
    faqs: [
      {
        question: "Which states can an outstation ambulance travel to?",
        answer:
          "We arrange outstation transport from Hyderabad across all districts of Telangana and Andhra Pradesh, as well as routes to Karnataka, Maharashtra, and other destinations upon advance review.",
      },
      {
        question: "How is an outstation transfer planned?",
        answer:
          "Contact our coordinators with the pickup address, destination town, patient medical condition, and preferred timing. We verify vehicle suitability, oxygen requirements, and route logistics before confirming the journey.",
      },
    ],
    seo: {
      title: "Outstation Ambulance Service from Hyderabad | Vidhya Sri Ambulance",
      description:
        "Outstation ambulance service from Hyderabad across Telangana, Andhra Pradesh, and interstate destinations. 24×7 long-distance medical transfers. Call 9951648174.",
    },
  },
  {
    slug: "event-standby-ambulance",
    name: "Event Standby Ambulance",
    h1Title: "Event Standby Ambulance Service in Hyderabad",
    category: "SPECIALIZED & PLANNED TRANSPORT",
    shortDescription:
      "On-site ambulance stationing for sporting tournaments, conferences, exhibitions, productions, and public gatherings.",
    description:
      "Event organizers can contact Vidhya Sri Ambulance Services to discuss standby ambulance requirements, location, duration, and expected attendance for public and private events in Hyderabad.",
    cardAnchor: "View Event Standby Options →",
    accent: "purple",
    accentHex: "#B9A4E8",
    icon: "stadium",
    features: [
      "On-site stationary ambulance positioning",
      "First aid and emergency evacuation readiness",
      "Trained medical crew during event hours",
      "Flexible hourly, single-day, or multi-day booking",
      "Coordination with nearby hospital emergency rooms",
    ],
    bookingChecklist: [
      "Venue location, staging access, and parking space",
      "Event dates, daily start time, and total hours",
      "Estimated crowd size and type of event (sports, corporate, festival)",
      "On-site safety coordinator contact information",
    ],
    relatedServices: [
      "corporate-ambulance",
      "bls-ambulance",
      "emergency-ambulance",
    ],
    faqs: [
      {
        question: "What types of events require an on-site ambulance?",
        answer:
          "Conferences, sports tournaments, corporate conventions, exhibitions, marathons, film sets, and large public or private gatherings often require a dedicated standby ambulance.",
      },
      {
        question: "How do event organizers book standby ambulance coverage?",
        answer:
          "Contact Vidhya Sri Ambulance Services with your event venue, dates, operating hours, and crowd estimates to arrange on-site ambulance stationing.",
      },
    ],
    seo: {
      title: "Event Standby Ambulance Service in Hyderabad | Vidhya Sri Ambulance",
      description:
        "On-site event standby ambulance service in Hyderabad for sports events, corporate conferences, exhibitions, and public gatherings. Book at 9951648174.",
    },
  },
  {
    slug: "corporate-ambulance",
    name: "Corporate Ambulance",
    h1Title: "Corporate Ambulance Services in Hyderabad",
    category: "SPECIALIZED & PLANNED TRANSPORT",
    shortDescription:
      "Workplace medical transportation and ambulance arrangements for IT parks, industrial plants, and business campuses.",
    description:
      "Organizations can discuss workplace and campus medical transport support with Vidhya Sri Ambulance Services for tech parks, industrial facilities, and corporate office parks in Hyderabad.",
    cardAnchor: "Discuss Corporate Ambulance →",
    accent: "lavender",
    accentHex: "#DCCBFF",
    icon: "corporate_fare",
    features: [
      "Campus standby or priority emergency callout arrangements",
      "Industrial safety and workplace medical compliance support",
      "Direct dispatch phone coordination for facility managers",
      "Emergency transfer to designated company-affiliated hospitals",
      "Flexible contract and operational terms",
    ],
    bookingChecklist: [
      "Corporate campus or industrial facility address",
      "Total workforce and operational shift pattern",
      "Type of arrangement required (on-site standby or priority on-call)",
      "HR, EHS, or facility administration contact details",
    ],
    relatedServices: [
      "event-standby-ambulance",
      "bls-ambulance",
      "emergency-ambulance",
    ],
    faqs: [
      {
        question: "How can companies partner with Vidhya Sri Ambulance?",
        answer:
          "Corporate teams can contact our administration to establish priority on-call emergency ambulance arrangements or dedicated on-site standby for manufacturing facilities and tech campuses.",
      },
      {
        question: "Can corporate tie-ups cover employee family emergencies?",
        answer:
          "Yes, corporate arrangements can include dedicated hotline assistance for employee healthcare transfers and emergency hospital transport across Hyderabad.",
      },
    ],
    seo: {
      title: "Corporate Ambulance Services in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Corporate ambulance tie-up services in Hyderabad for tech parks, business centers, and manufacturing sites. Dedicated workplace emergency coordination. Call 9951648174.",
    },
  },
  {
    slug: "mortuary-transportation",
    name: "Mortuary / Dead Body Transportation",
    h1Title: "Mortuary / Dead Body Transportation in Hyderabad",
    category: "SPECIALIZED & PLANNED TRANSPORT",
    shortDescription:
      "Dignified deceased patient transportation across Hyderabad, Telangana, and interstate journeys with respectful care.",
    description:
      "Vidhya Sri Ambulance Services provides dignified mortuary and deceased patient transportation in Hyderabad, assisting families with respectful transfer between hospitals, residences, and outstation destinations.",
    cardAnchor: "View Mortuary Transportation →",
    accent: "mist",
    accentHex: "#EAF2FC",
    icon: "church",
    features: [
      "Dignified and respectful handling protocols",
      "Freezer box availability for preservation",
      "Local Hyderabad and long-distance outstation transport",
      "Assistance with hospital release and documentation formalities",
      "24×7 compassionate family coordination",
    ],
    bookingChecklist: [
      "Pickup location (hospital mortuary, ICU, or home residence)",
      "Destination address (crematorium, residence, or ancestral town)",
      "Whether freezer box support is required for transit or home preservation",
      "Availability of hospital death summary / legal documentation",
    ],
    relatedServices: [
      "outstation-ambulance",
      "patient-transfer-ambulance",
    ],
    faqs: [
      {
        question: "Do you provide freezer box services for deceased transport?",
        answer:
          "Yes, we provide mortuary vehicles equipped with mobile cooling units and can arrange freezer box support for home preservation or long-distance outstation journeys.",
      },
      {
        question: "Can deceased transportation be arranged to another state?",
        answer:
          "Yes, we arrange interstate mortuary transfers with appropriate vehicle permits and documentation guidance across neighboring states.",
      },
    ],
    seo: {
      title: "Mortuary / Dead Body Transportation in Hyderabad | Vidhya Sri Ambulance",
      description:
        "Dignified mortuary and dead body transportation in Hyderabad by Vidhya Sri Ambulance Services. Freezer box support, local and interstate transfers. Call 9951648174.",
    },
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);

export const getRelatedServices = (slugs: string[]): ServiceData[] =>
  services.filter((s) => slugs.includes(s.slug));
