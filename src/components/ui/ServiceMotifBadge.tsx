import React from "react";

interface ServiceMotifBadgeProps {
  slug: string;
  className?: string;
}

/**
 * ServiceMotifBadge
 * Service-specific visual variation adhering to Section 14:
 * Renders tailored technical SVG clinical transport motifs for each service tier:
 * - Emergency: Forward rapid route + ambulance silhouette
 * - ICU: Continuous ECG cardiac rhythm waveform
 * - Ventilator: Delicate dual-phase respiratory airflow wave
 * - BLS: Baseline transport cross & stabilization
 * - Oxygen: Continuous medical O2 cylinder & delivery stream
 * - NICU: Protected neonatal incubator shield
 * - Patient Transfer: Waypoint origin → destination route
 * - Outstation: Highway route kilometer marker
 * - Event Standby: Venue perimeter medical readiness
 * - Corporate: Workplace health facility coverage
 * - Mortuary: Dignified, respectful calm route
 */
export function ServiceMotifBadge({ slug, className = "" }: ServiceMotifBadgeProps) {
  // Emergency ALS
  if (slug === "emergency-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M8 20H22L27 15H32V25H8V20Z" fill="#1565D8" fillOpacity="0.2" stroke="#1565D8" strokeWidth="1.8" />
        <circle cx="14" cy="27" r="3" fill="#0A2A5E" />
        <circle cx="27" cy="27" r="3" fill="#0A2A5E" />
        <path d="M6 13L16 13" stroke="#D32F2F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 8L11 18" stroke="#D32F2F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Mobile ICU
  if (slug === "icu-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M6 21H14L17 11L21 29L25 17L28 21H34" stroke="#1565D8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="29" r="2" fill="#D32F2F" />
      </svg>
    );
  }

  // Ventilator Ambulance
  if (slug === "ventilator-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M8 16C14 16 14 24 20 24C26 24 26 16 32 16" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24C14 24 14 32 20 32C26 32 26 24 32 24" stroke="#38A3F7" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="10" r="3" fill="#1565D8" />
      </svg>
    );
  }

  // Basic Life Support (BLS)
  if (slug === "bls-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#0A2A5E" strokeWidth="2" />
        <path d="M16 8H24V16H32V24H24V32H16V24H8V16H16V8Z" fill="#1565D8" fillOpacity="0.25" stroke="#1565D8" strokeWidth="2" />
      </svg>
    );
  }

  // Patient Transfer
  if (slug === "patient-transfer-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <circle cx="12" cy="20" r="4" fill="#0A2A5E" />
        <path d="M16 20H28" stroke="#1565D8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M25 15L30 20L25 25" stroke="#1565D8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Oxygen Ambulance
  if (slug === "oxygen-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <rect x="14" y="14" width="12" height="18" rx="4" fill="#1565D8" fillOpacity="0.2" stroke="#1565D8" strokeWidth="2" />
        <rect x="18" y="8" width="4" height="6" fill="#0A2A5E" />
        <circle cx="20" cy="22" r="3" fill="#38A3F7" />
      </svg>
    );
  }

  // NICU / Neonatal Ambulance
  if (slug === "nicu-neonatal-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M20 7L31 12V21C31 28 26 33 20 35C14 33 9 28 9 21V12L20 7Z" fill="#1565D8" fillOpacity="0.15" stroke="#1565D8" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="#38A3F7" />
      </svg>
    );
  }

  // Outstation Long-Distance
  if (slug === "outstation-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M10 32L17 8H23L30 32" stroke="#0A2A5E" strokeWidth="2" />
        <path d="M20 12V16M20 22V26" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Event Standby
  if (slug === "event-standby-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <circle cx="20" cy="20" r="11" stroke="#1565D8" strokeWidth="1.8" strokeDasharray="4 3" />
        <rect x="17" y="13" width="6" height="14" fill="#D32F2F" />
        <rect x="13" y="17" width="14" height="6" fill="#D32F2F" />
      </svg>
    );
  }

  // Corporate Standby
  if (slug === "corporate-ambulance") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
        <path d="M10 32V14H24V32" stroke="#0A2A5E" strokeWidth="2" />
        <path d="M24 20H32V32" stroke="#1565D8" strokeWidth="2" />
        <rect x="14" y="18" width="3" height="3" fill="#1565D8" />
        <rect x="14" y="24" width="3" height="3" fill="#1565D8" />
      </svg>
    );
  }

  // Mortuary Transportation
  if (slug === "mortuary-transportation") {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#0A2A5E" strokeWidth="2" />
        <rect x="10" y="16" width="20" height="12" rx="2" fill="#0A2A5E" fillOpacity="0.15" stroke="#0A2A5E" strokeWidth="2" />
        <path d="M10 20H30" stroke="#1565D8" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="2.5" fill="#1565D8" />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="3" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
      <circle cx="20" cy="20" r="6" fill="#1565D8" />
    </svg>
  );
}
