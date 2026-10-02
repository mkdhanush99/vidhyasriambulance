# Vidhya Sri Ambulance — Image Asset Tracking & Production Inventory

This document tracks all visual assets across the Vidhya Sri Ambulance Services website.
Client-supplied real photographs are prioritized and in active production use.
Future client photos (e.g. dedicated cockpit/interior equipment, team crew portraits) will replace temporary/fleet-level mappings.

---

## 1. Active Client Photography Assets (In Production)

| File Name | Source / Original | Primary Placements | Resolution | Status |
| :--- | :--- | :--- | :--- | :--- |
| `vidhya-sri-ambulance-hyderabad-hospital.webp` | Client photo 3 (`media_1790961864574.jpg`) | Home Hero, Emergency Ambulance Service Hero, Hospital Transfer, Location Pages | 1024×1024 | **REAL_CLIENT_ASSET (Active)** |
| `vidhya-sri-icu-ambulance-fleet.webp` | Client photo 5 (`media_1790961864599.jpg`) | Home Featured Service, ICU Service Hero, Services Overview, Ventilator, NICU | 1021×1024 | **REAL_CLIENT_ASSET (Active)** |
| `vidhya-sri-patient-transfer-ambulance.webp` | Client photo 2 (`media_1790961864561.jpg`) | Patient Transfer Hero, BLS Ambulance Hero, About Page vehicle detail | 768×1024 | **REAL_CLIENT_ASSET (Active)** |
| `vidhya-sri-mortuary-freezer-box.webp` | Client photo 4 (`media_1790961864586.jpg`) | Mortuary Transportation Service Hero | 1024×1024 | **REAL_CLIENT_ASSET (Active)** |
| `vidhya-sri-fleet-lineup-hyderabad.webp` | Client photo 1 (`media_1790961864552.jpg`) | Home Brand Story, About Page Hero, Outstation Ambulance Hero | 1021×1024 | **REAL_CLIENT_ASSET (Active)** |

---

## 2. Page-by-Page Placement Matrix

### Home Page (`/`)
- **Hero Image (Tier 1)**: `vidhya-sri-ambulance-hyderabad-hospital.webp`
  - *Treatment*: `ImageFrame` variant `featured` with `careBlue` geometric offset layer, navy border, and caption strip: `"Ambulance Stationed at Healthcare Entrance · Hyderabad"`.
  - *Layout*: Desktop asymmetric (Left 55% headline + CTAs + quick pills; Right 45% framed editorial photo).
- **Featured Service Visual (Tier 2)**: `vidhya-sri-icu-ambulance-fleet.webp`
  - *Treatment*: `ImageFrame` variant `featured` with `warmYellow` offset layer occupying 45% of the featured section.
  - *Layout*: Editorial grid pairing one prominent fleet visual with non-visual typography cards.
- **Brand Story (Tier 2)**: `vidhya-sri-fleet-lineup-hyderabad.webp`
  - *Treatment*: `ImageFrame` variant `offset` with `lavender` backplate.
  - *Layout*: Asymmetrical layout beside brand philosophy and credentials.
- **How It Works**: Strictly zero stock photos. Typography, brutal numbers, and structured connectors.
- **Hyderabad Coverage**: Interactive geographic grid with map-first focus.

### About Page (`/about`)
- **Hero Image 01 (Tier 1)**: `vidhya-sri-fleet-lineup-hyderabad.webp` — Full multi-vehicle fleet lineup at Hyderabad dispatch base.
- **Fleet Detail Image 02 (Tier 2)**: `vidhya-sri-icu-ambulance-fleet.webp` — Close-up Force Traveller Mobile ICU units.
- **Vehicle Detail Image 03 (Tier 3)**: `vidhya-sri-patient-transfer-ambulance.webp` — Patient transfer vehicle on road.

### Services Overview (`/services`)
- **Featured Visual**: `vidhya-sri-ambulance-hyderabad-hospital.webp` (Emergency Ambulance block).
- **Secondary Fleet Visual**: `vidhya-sri-icu-ambulance-fleet.webp` (ICU Ambulance block).
- **Remaining Service Cards**: Typography + badge + icon (avoiding repetitive stock photo grid).

### Service Detail Template (`/services/[slug]`)
Every service gets exactly ONE high-impact hero image integrated into an editorial 55% content / 45% image layout:
1. `emergency-ambulance`: `vidhya-sri-ambulance-hyderabad-hospital.webp` (Hospital entrance dispatch)
2. `icu-ambulance`: `vidhya-sri-icu-ambulance-fleet.webp` (Mobile ICU on wheels fleet)
3. `ventilator-ambulance`: `vidhya-sri-icu-ambulance-fleet.webp` (Advanced life support fleet)
4. `bls-ambulance`: `vidhya-sri-patient-transfer-ambulance.webp` (Routine patient transfer vehicle)
5. `patient-transfer-ambulance`: `vidhya-sri-patient-transfer-ambulance.webp` (Scheduled transfer vehicle)
6. `oxygen-ambulance`: `vidhya-sri-ambulance-hyderabad-hospital.webp` (Healthcare transfer vehicle)
7. `nicu-neonatal-ambulance`: `vidhya-sri-icu-ambulance-fleet.webp` (Specialized mobile unit)
8. `outstation-ambulance`: `vidhya-sri-fleet-lineup-hyderabad.webp` (Intercity fleet lineup)
9. `event-standby-ambulance`: `vidhya-sri-ambulance-hyderabad-hospital.webp` (On-duty vehicle)
10. `corporate-ambulance`: `vidhya-sri-ambulance-hyderabad-hospital.webp` (On-duty vehicle)
11. `mortuary-transportation`: `vidhya-sri-mortuary-freezer-box.webp` (Stainless steel gold mortuary freezer box unit)

### Location Pages (`/coverage/[slug]`)
- One reusable neutral supporting visual (`vidhya-sri-ambulance-hyderabad-hospital.webp`) positioned alongside coverage map and response boundaries.
- No fabricated city landmarks or fake locality photos.

### FAQ & Legal Pages (`/faq`, `/privacy-policy`, `/terms`)
- Strictly 0 images as per design specification. Clean typography and structured cards.

---

## 3. Future Client Photography Wishlist (To Be Supplied by Client)

When the client provides dedicated photography, the following temporary mappings will be updated:

| Asset Description | Target Page | Target Service | Recommended Shot Details | Priority |
| :--- | :--- | :--- | :--- | :--- |
| ICU Cabin Interior | `/services/icu-ambulance` | ICU Ambulance | Wide interior showing real monitor brackets, stretcher mount, defibrillator | High |
| Ventilator Equipment Close-Up | `/services/ventilator-ambulance` | Ventilator Ambulance | Close-up of mounted transport ventilator with natural lighting | Medium |
| Oxygen Manifold & Flowmeters | `/services/oxygen-ambulance` | Oxygen Ambulance | Dual cylinder manifold, humidifier bottles, and pipeline delivery port | Medium |
| Driver / EMT Team in Uniform | `/about` | About Us | Professional group or coordination portrait of Vidhya Sri team at Somajiguda | High |
| Outstation Highway Travel | `/services/outstation-ambulance` | Outstation | Side-profile commercial shot of Vidhya Sri ambulance on ORR / highway | Medium |
