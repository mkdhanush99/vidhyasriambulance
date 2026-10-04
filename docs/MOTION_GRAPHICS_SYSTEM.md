# Motion Graphics System & Visual Grammar — Vidhya Sri Ambulance

## 1. Design Philosophy: Care, Movement, Patient Transport
In emergency and healthcare services, motion graphics must never be chaotic, alarming, or gratuitous. Flashing red emergency lights or jittery animations induce anxiety in patients and families during distress.

The Vidhya Sri Motion Graphics System adheres to three core design rules:
1. **Calm Assurance**: Motion conveys precision, steadiness, and dignified care.
2. **Forward Movement**: Subtle horizontal and curved route trajectories symbolize patient transit and safe arrival.
3. **Pure Vector Performance**: Built entirely with lightweight SVG, CSS `@keyframes` (`transform`, `opacity`, `stroke-dashoffset`), zero heavy WebGL dependencies, and automatic static fallback for `prefers-reduced-motion`.

---

## 2. Component Inventory (`src/components/motion/MotionGraphics.tsx`)

| Component | Visual Grammar | Applied Location | Motion Behavior |
| :--- | :--- | :--- | :--- |
| **`ForwardRouteGraphic`** | Thin Care Blue route line with pulsing waypoint settle | How It Works, Patient Transfer, Outstation | Progressively draws route from origin to destination without looping aggressively. |
| **`AmbulanceMovementGraphic`** | 2.5D SVG ambulance profile with fleet stripe and calm beacon | Emergency Ambulance, BLS Ambulance | Vehicle smoothly enters and settles into frame, road line guides path, then rests. |
| **`MedicalCrossGraphic`** | Geometric medical cross with subtle perimeter line reveal | Core Services & Heritage | Clean perimeter stroke animation; no flashing red alarms. |
| **`OxygenFlowGraphic`** | 3 gentle laminar airflow curves | Oxygen Ambulance | Staggered undulating curves conveying continuous medical oxygen support. |
| **`ICUMonitorGraphic`** | Subtle rhythmic pulse along a transit path inside framed chassis | ICU Ambulance, Ventilator Ambulance | Steady monitoring line along a travel axis (no false clinical diagnostic claims). |
| **`NICUTransportGraphic`** | Gentle concentric protective shield around central care heart | NICU Neonatal Ambulance | Pulsing soft orange/coral warmth conveying infant protection. |
| **`OutstationRouteGraphic`** | Conceptual highway corridor expanding outward from Hyderabad | Outstation Ambulance | Care line connects Hyderabad hub to intercity destinations. |
| **`MortuaryDignifiedGraphic`** | Solemn, dignified, calm transport route line | Mortuary Ambulance, Freezer Box | Restrained dashed line with soft opacity breathing; no frightening or gothic elements. |
| **`CorporateCoverageGraphic`** | Minimalist corporate tower silhouette with protective coverage loop | Corporate Ambulance | Sweeping dashed perimeter line encircling campus structures. |
| **`EventStandbyGraphic`** | Venue/stadium arena ellipse with gentle perimeter sweep and staging dot | Event Standby Ambulance | Slow radar-like sweep (8s cycle) showing ready perimeter staging. |
| **`ContactFlowGraphic`** | 3 interconnected steps (Call -> Triage -> En Route) | Contact Us Page & Dispatch Pathways | Progressive step-connector line linking user inquiry to ambulance dispatch. |
| **`ServiceMotionGraphic`** | Dynamic dispatcher component | Dynamic service detail pages (`/services/[slug]`) | Resolves the exact branded graphic matching the service slug. |

---

## 3. Accessibility & Performance Guardrails

- **Zero CPU Cost Outside Viewport**: SVGs use CSS transforms and vector paths that natively pause or idle when not visible.
- **`prefers-reduced-motion: reduce` Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .route-path-anim, .amb-body, .cross-stroke, .flow-conn {
      animation: none !important;
      stroke-dashoffset: 0 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  ```
- **Fallback Integrity**: In environments without CSS animation support, all SVGs render as crisp, legible vector icons.
