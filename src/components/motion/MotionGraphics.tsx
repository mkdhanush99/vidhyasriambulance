import React from "react";

interface MotionGraphicProps {
  className?: string;
  accentColor?: string;
}

/**
 * 1. FORWARD ROUTE GRAPHIC
 * A thin Care Blue route line traveling progressively from origin waypoint to destination.
 * Used in: How It Works, Patient Transfer, Outstation, Location pages.
 */
export function ForwardRouteGraphic({
  className = "w-full h-16",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 400 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes drawRoute {
          0% { stroke-dashoffset: 400; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes pulseWaypoint {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .route-path-anim {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawRoute 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .waypoint-anim {
          animation: pulseWaypoint 2.4s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .route-path-anim { stroke-dashoffset: 0; animation: none; }
          .waypoint-anim { animation: none; }
        }
      `}</style>
      {/* Background guide track */}
      <path
        d="M 20 32 C 120 12, 240 52, 380 32"
        stroke="#EAF2FC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Animated active care line */}
      <path
        d="M 20 32 C 120 12, 240 52, 380 32"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        className="route-path-anim"
      />
      {/* Origin Waypoint */}
      <circle cx="20" cy="32" r="5" fill="#0A2A5E" />
      <circle cx="20" cy="32" r="2" fill="#FFFFFF" />

      {/* Destination Settle Waypoint */}
      <g transform="translate(380, 32)">
        <circle cx="0" cy="0" r="8" fill={`${accentColor}22`} className="waypoint-anim" />
        <circle cx="0" cy="0" r="5" fill={accentColor} />
        <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/**
 * 2. AMBULANCE MOVEMENT GRAPHIC
 * Subtle vehicle settling into frame, route appears, gentle forward motion and smooth stop.
 */
export function AmbulanceMovementGraphic({
  className = "w-32 h-20",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes ambulanceEnter {
          0% { transform: translateX(-16px); opacity: 0; }
          40% { transform: translateX(4px); opacity: 1; }
          100% { transform: translateX(0px); opacity: 1; }
        }
        @keyframes subtleBeacon {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .amb-body {
          animation: ambulanceEnter 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .amb-beacon {
          animation: subtleBeacon 1.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .amb-body { transform: none; opacity: 1; animation: none; }
          .amb-beacon { animation: none; opacity: 0.9; }
        }
      `}</style>
      {/* Ground road line */}
      <line x1="10" y1="72" x2="150" y2="72" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 4" />
      <g className="amb-body">
        {/* Ambulance Body */}
        <rect x="25" y="28" width="85" height="40" rx="6" fill="#FFFFFF" stroke="#0A2A5E" strokeWidth="2.5" />
        {/* Cab angle */}
        <path d="M 110 40 L 130 50 L 130 68 L 110 68 Z" fill="#FFFFFF" stroke="#0A2A5E" strokeWidth="2.5" />
        {/* Windshield */}
        <path d="M 112 43 L 126 51 L 112 51 Z" fill="#EAF2FC" stroke="#0A2A5E" strokeWidth="1.5" />
        {/* Care Blue Fleet Stripe */}
        <rect x="25" y="46" width="90" height="7" fill={accentColor} />
        {/* Medical Cross Motif on Body */}
        <path d="M 52 36 V 44 M 48 40 H 56" stroke="#D32F2F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Rooftop Beacon */}
        <rect x="68" y="23" width="14" height="5" rx="2" fill="#D32F2F" className="amb-beacon" />
        {/* Wheels */}
        <circle cx="48" cy="68" r="9" fill="#0A2A5E" />
        <circle cx="48" cy="68" r="4" fill="#FFFFFF" />
        <circle cx="108" cy="68" r="9" fill="#0A2A5E" />
        <circle cx="108" cy="68" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/**
 * 3. MEDICAL CROSS GRAPHIC
 * Subtle perimeter line and shape reveal without alarming flashes.
 */
export function MedicalCrossGraphic({
  className = "w-16 h-16",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes crossReveal {
          0% { stroke-dashoffset: 160; opacity: 0.2; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .cross-stroke {
          stroke-dasharray: 160;
          stroke-dashoffset: 160;
          animation: crossReveal 1.6s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .cross-stroke { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>
      <circle cx="40" cy="40" r="34" stroke="#EAF2FC" strokeWidth="3" />
      <path
        d="M 33 22 H 47 V 33 H 58 V 47 H 47 V 58 H 33 V 47 H 22 V 33 H 33 Z"
        fill={`${accentColor}10`}
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
        className="cross-stroke"
      />
    </svg>
  );
}

/**
 * 4. OXYGEN AIRFLOW GRAPHIC
 * Gentle laminar airflow lines conveying smooth oxygen delivery.
 */
export function OxygenFlowGraphic({
  className = "w-24 h-16",
  accentColor = "#38A3F7",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes airflowWave {
          0% { stroke-dashoffset: 80; opacity: 0.2; }
          50% { opacity: 0.9; }
          100% { stroke-dashoffset: -80; opacity: 0.2; }
        }
        .flow-line-1 {
          stroke-dasharray: 40 20;
          animation: airflowWave 3s linear infinite;
        }
        .flow-line-2 {
          stroke-dasharray: 30 15;
          animation: airflowWave 2.4s linear infinite 0.4s;
        }
        .flow-line-3 {
          stroke-dasharray: 35 25;
          animation: airflowWave 3.4s linear infinite 0.8s;
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-line-1, .flow-line-2, .flow-line-3 { animation: none; stroke-dashoffset: 0; opacity: 0.8; }
        }
      `}</style>
      <path d="M 15 22 C 45 14, 75 30, 105 22" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" className="flow-line-1" />
      <path d="M 20 35 C 50 27, 80 43, 110 35" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" className="flow-line-2" />
      <path d="M 15 48 C 45 40, 75 56, 105 48" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" className="flow-line-3" />
    </svg>
  );
}

/**
 * 5. ICU MONITOR & PATH GRAPHIC
 * Subtle medical pulse line along a transport trajectory (without making fake clinical claims).
 */
export function ICUMonitorGraphic({
  className = "w-28 h-16",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 140 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes icuPulse {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .icu-path {
          stroke-dasharray: 180;
          animation: icuPulse 2.6s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .icu-path { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
      <rect x="8" y="10" width="124" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Rhythm line */}
      <path
        d="M 18 35 H 45 L 52 20 L 58 48 L 65 28 L 72 38 L 78 35 H 122"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icu-path"
      />
    </svg>
  );
}

/**
 * 6. NICU PROTECTED TRANSPORT GRAPHIC
 * Gentle protective concentric shield visual conveying compassionate neonatal care.
 */
export function NICUTransportGraphic({
  className = "w-20 h-20",
  accentColor = "#FFC48A",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes gentleEnclosure {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.08); opacity: 0.9; }
        }
        .nicu-shield {
          animation: gentleEnclosure 3s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .nicu-shield { animation: none; opacity: 0.8; }
        }
      `}</style>
      <circle cx="40" cy="40" r="32" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="2" />
      <circle cx="40" cy="40" r="24" stroke={accentColor} strokeWidth="2.5" strokeDasharray="4 3" className="nicu-shield" />
      {/* Heart / Care center */}
      <path
        d="M 40 46 C 40 46, 32 40, 32 35 C 32 32, 34.5 30, 37.5 30 C 39 30, 40 31, 40 31 C 40 31, 41 30, 42.5 30 C 45.5 30, 48 32, 48 35 C 48 40, 40 46, 40 46 Z"
        fill="#FF7468"
      />
    </svg>
  );
}

/**
 * 7. OUTSTATION LONG-DISTANCE CORRIDOR GRAPHIC
 * Expands conceptually from Hyderabad hub outward across regional boundaries.
 */
export function OutstationRouteGraphic({
  className = "w-full h-16",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 320 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes intercityExpand {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        .outstation-line {
          stroke-dasharray: 300;
          animation: intercityExpand 2.8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .outstation-line { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
      <path d="M 24 32 H 296" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M 24 32 H 296"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="outstation-line"
      />
      {/* Hub (Hyderabad) */}
      <circle cx="24" cy="32" r="6" fill="#0A2A5E" />
      <circle cx="24" cy="32" r="2.5" fill="#FFFFFF" />
      {/* Corridors Intersections */}
      <circle cx="114" cy="32" r="4" fill="#38A3F7" />
      <circle cx="204" cy="32" r="4" fill="#38A3F7" />
      {/* Destination Arrow */}
      <polygon points="292,26 304,32 292,38" fill={accentColor} />
    </svg>
  );
}

/**
 * 8. MORTUARY DIGNIFIED TRANSPORT GRAPHIC
 * Solemn, dignified, calm transport route line without alarming imagery.
 */
export function MortuaryDignifiedGraphic({
  className = "w-24 h-16",
  accentColor = "#0A2A5E",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes peacefulDignity {
          0% { opacity: 0.4; }
          50% { opacity: 0.9; }
          100% { opacity: 0.4; }
        }
        .solemn-path {
          animation: peacefulDignity 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .solemn-path { animation: none; opacity: 0.7; }
        }
      `}</style>
      <rect x="12" y="16" width="96" height="28" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="20" y1="30" x2="100" y2="30" stroke={accentColor} strokeWidth="2" strokeDasharray="4 4" className="solemn-path" />
      <circle cx="28" cy="30" r="3" fill={accentColor} />
      <circle cx="92" cy="30" r="3" fill={accentColor} />
    </svg>
  );
}

/**
 * 9. CORPORATE COVERAGE GRAPHIC
 * Modern building campus outline with safety coverage umbrella loop.
 */
export function CorporateCoverageGraphic({
  className = "w-24 h-20",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes perimeterScan {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .corp-perimeter {
          stroke-dasharray: 120;
          animation: perimeterScan 3s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .corp-perimeter { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
      {/* Office Tower Silhouette */}
      <rect x="25" y="24" width="26" height="46" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
      <rect x="55" y="14" width="22" height="56" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Windows */}
      <line x1="32" y1="32" x2="44" y2="32" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="32" y1="42" x2="44" y2="42" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="62" y1="24" x2="70" y2="24" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="62" y1="36" x2="70" y2="36" stroke="#CBD5E1" strokeWidth="2" />
      {/* Standby Coverage Shield */}
      <path
        d="M 12 70 C 12 36, 88 36, 88 70"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        className="corp-perimeter"
      />
    </svg>
  );
}

/**
 * 10. EVENT STANDBY GRAPHIC
 * Venue outline + standby ambulance positioning perimeter.
 */
export function EventStandbyGraphic({
  className = "w-24 h-20",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes arenaRadar {
          0% { transform: rotate(0deg); opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { transform: rotate(360deg); opacity: 0.3; }
        }
        .event-radar {
          animation: arenaRadar 8s linear infinite;
          transform-origin: 50px 42px;
        }
        @media (prefers-reduced-motion: reduce) {
          .event-radar { animation: none; opacity: 0.5; }
        }
      `}</style>
      {/* Stadium/Arena Perimeter */}
      <ellipse cx="50" cy="42" rx="38" ry="24" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
      <ellipse cx="50" cy="42" rx="26" ry="15" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* Radar Sweep Line */}
      <line x1="50" y1="42" x2="86" y2="38" stroke={accentColor} strokeWidth="1.5" className="event-radar" />
      {/* Ambulance Staging Marker */}
      <circle cx="16" cy="42" r="5" fill="#D32F2F" />
      <circle cx="16" cy="42" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 11. CONTACT & DISPATCH FLOW GRAPHIC
 * Phone call → triage coordination → confirmed ambulance dispatch.
 */
export function ContactFlowGraphic({
  className = "w-full max-w-sm h-16",
  accentColor = "#1565D8",
}: MotionGraphicProps) {
  return (
    <svg
      viewBox="0 0 300 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes flowStep {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .flow-conn {
          stroke-dasharray: 80;
          animation: flowStep 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-conn { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
      {/* Step 1: Call */}
      <circle cx="30" cy="25" r="18" fill="#EAF2FC" stroke="#1565D8" strokeWidth="2" />
      <path d="M 24 21 C 24 26, 28 30, 33 30" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" />

      {/* Connection 1 */}
      <line x1="52" y1="25" x2="128" y2="25" stroke={accentColor} strokeWidth="2" strokeDasharray="4 3" className="flow-conn" />

      {/* Step 2: Triage */}
      <circle cx="150" cy="25" r="18" fill="#F8FAFC" stroke="#0A2A5E" strokeWidth="2" />
      <path d="M 144 25 H 156 M 150 19 V 31" stroke="#0A2A5E" strokeWidth="2" strokeLinecap="round" />

      {/* Connection 2 */}
      <line x1="172" y1="25" x2="248" y2="25" stroke={accentColor} strokeWidth="2" strokeDasharray="4 3" className="flow-conn" />

      {/* Step 3: En Route */}
      <circle cx="270" cy="25" r="18" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
      <polyline points="263,25 268,30 277,21" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * ServiceMotionGraphic
 * Automatically resolves and renders the specific motion graphic for any service slug.
 */
export function ServiceMotionGraphic({
  slug,
  className = "w-20 h-16",
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case "emergency-ambulance":
    case "bls-ambulance":
      return <AmbulanceMovementGraphic className={className} />;
    case "icu-ambulance":
    case "ventilator-ambulance":
      return <ICUMonitorGraphic className={className} />;
    case "oxygen-ambulance":
      return <OxygenFlowGraphic className={className} />;
    case "nicu-neonatal-ambulance":
      return <NICUTransportGraphic className={className} />;
    case "outstation-ambulance":
    case "patient-transfer-ambulance":
      return <ForwardRouteGraphic className={className} />;
    case "mortuary-ambulance":
    case "dead-body-freezer-box":
      return <MortuaryDignifiedGraphic className={className} />;
    case "corporate-ambulance":
      return <CorporateCoverageGraphic className={className} />;
    case "event-standby-ambulance":
      return <EventStandbyGraphic className={className} />;
    default:
      return <MedicalCrossGraphic className={className} />;
  }
}
