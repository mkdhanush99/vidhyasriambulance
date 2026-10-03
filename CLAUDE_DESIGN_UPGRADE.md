# Vidhya Sri Ambulance — Visual Upgrade Handoff

Format for every change: **CURRENT → TARGET → WHY**.
Scope: visual only. Brand, IA, copy, logo and blue/white identity stay fixed. No fleet counts, certifications, response-time guarantees or partnerships are to be invented.
Reference implementation: `Vidhya Sri Home.dc.html`. Source reviewed: `globals.css`, `page.tsx`, `Header.tsx`, `Footer.tsx`, `MobileCTA.tsx`, `services.ts`, `site.ts`. Service/location templates were not read in detail; sections 4–5 apply the same system and must be checked against those templates.

---

## 1. Overall visual diagnosis

| # | Finding | Current | Target | Why |
|---|---|---|---|---|
| 1 | Pale accents | Accents are pastel (coral `#FF7468`, mint `#BFE8D5`, lavender `#DCCBFF`) and cards use `*-light` tints (`#FFEBE9`, `#F4EFFF`, `#EFFBF5`) | Saturated UI accents (§10); no `-light` tints as card fills | Cards read as one beige-ish field; no hierarchy |
| 2 | Hero is one blue slab | `bg-brand-gradient` full bleed + text-only left column, nothing on the right | Two-column hero: copy + framed image, with 2 floating colour shapes | Needs an object and a focal point |
| 3 | Thin borders | `border` (1px) at white/15 in stats and footer; `border-navy/15` in header | Structural borders 3px solid navy; dividers 3px | Weight and structure |
| 4 | Thin icons | Material Symbols Outlined, FILL 0, wght 400, 20px in 40px box | Same family, FILL 1, wght 700, 32px in 56px box | Keeps the system; fixes weight |
| 5 | Identical service cards | 11 cards, same size, same pastel tint, same 40px icon | Feature (span 2) + standard cards, each with a distinct saturated fill | Hierarchy, rhythm |
| 6 | Soft/timid shadows | Mixed: 2px, 4px, 5px, 7px offsets; some `rgba(0,0,0,.3)` | One hard-offset language: 8px (rest) → 12px (hover), colour-backed + 3px navy outline | Consistency |
| 7 | Weak CTA hierarchy | Header Call and WhatsApp similar weight; hero WhatsApp is ghost | Call = Care Blue/Coral primary; WhatsApp = Mint; Services = Yellow; distinct colours | Action clear in 1 glance |
| 8 | Section monotony | Services, How it works, Coverage all light with tinted cards | Alternating: blue → white → paper → blue → mint → navy → white → blue → navy | Visual moments |
| 9 | Gradient text used on 3 headings | `.text-brand-gradient` on every H2 accent | Solid colour accent words (Care Blue on light, Yellow on dark) | Gradient clipped text is low-contrast and repeated |
| 10 | Eyebrow labels small chips | `10px` yellow/coral/lavender chip | Marker system: 14px square + bordered bold label with number (`01 / SERVICES`) | Editorial identity |

---

## 2. Exact visual changes (global)

| Item | CURRENT | TARGET | WHY |
|---|---|---|---|
| Structural border | 2px navy (cards), 1px (stats/footer) | **3px** solid `#0A2A5E` | Heavier frame language |
| Hard shadow | `4px/5px/7px` navy, various | `8px 8px 0 <accent>` **plus** `8px 8px 0 3px #0A2A5E` (outline layer); hover `12px` | Two-layer offset reads as printed block |
| Radius | 0 on most, pills none | **4px** on buttons/cards; 0 on icon boxes; 50% only on decorative circles | "Slightly rectangular, slightly rounded" |
| Section dividers | `border-navy/10` | 3px solid navy between light sections | Hard editorial breaks |
| Backgrounds | `paper #FBFBF9`, `clinic-mist` | Keep paper + mist; add mint dotted ground (`#EFFBF5` + 2px `#9FE0C5` dots, 26px grid) for How It Works | Texture without imagery |
| Hero bottom edge | 8px yellow bar | Keep (`#F5D84A`, 8px) | Preserve |
| Decorative shapes | None | 1–2 per section max: circle, rotated square, ring pair | Depth; no extra ornament |
| Gradient | Used on hero overlay + 3 text spans | Hero + one feature section only; never on text | Avoid rainbow/gradient fatigue |

---

## 3. Homepage section-by-section

### 3.1 Header
- CURRENT: 80px, white/90 blur, 2px `navy/15` border, nav `navy/70` 12px/700, WhatsApp mint `border-2`, Call `care-blue`, symbol-only logo on mobile → TARGET: 78px, solid white, **3px** navy bottom border, nav `#0A2A5E` 12px/800 with 3px yellow underline on hover, logo 44px high, Call + WhatsApp as buttons per §7 → WHY: clearer navigation, primary action dominant.
- Mobile menu button: 40px → **44px**, 3px border, 4px hard shadow.

### 3.2 Hero
- CURRENT: gradient overlay at 90%, left-aligned text, "Dispatch Active" glass pill, coral Call, ghost WhatsApp → TARGET: `linear-gradient(35deg,#0A2A5E 0%,#0B3F9E 45%,#1565D8 100%)`; 2-col (min 420px each); eyebrow = white bordered badge with `4px 4px 0 #F5D84A`; H1 `clamp(46px,7.4vw,76px)`/800/lh .95/tracking −0.025em; "matters." = navy text on `#F5D84A` block, 3px navy border, `6px 6px 0 navy`, rotate −1.5° → WHY: differentiates one word, gives memorability.
- Floating shapes: `#38A3F7` circle 520px at 45% opacity (top-right, slow drift); `#FF6B5F` 240px square rotated 18° with 3px navy border (bottom-left).
- CTA set: Call (Coral) / WhatsApp (Mint) / View services (Yellow). Gap 14px.
- Right column: image frame per §12.
- Keep copy as is. Remove nothing from the brief; the glass pill (`backdrop-blur`) is replaced because blur reads as generic SaaS.

### 3.3 Brand statement (new rhythm slot, white)
- CURRENT: absent on home → TARGET: white section, 96px vertical padding; left framed portrait image with lavender `#CBB5FF` offset block (26px) and yellow circle 92px; right: label `01 / OUR STORY`, H2 "CARE DOES NOT STOP AT THE HOSPITAL DOOR." with last phrase on Care Blue block (white text, rotate 1°), one navy button with yellow offset → WHY: gives the brand line a graphic moment; one oversized shape + one accent only.

### 3.4 Services grid (`paper`)
- CURRENT: `bg-paper`, 3-up uniform grid, `*-light` fills, `Learn More →` in 40% navy → TARGET: `auto-fit minmax(270px,1fr)`, gap 26/22px; Emergency spans 2 columns (≥900px); see §8 → WHY: hierarchy.
- Borders top and bottom: 3px navy.
- "View all services" becomes white bordered button (not text link).

### 3.5 Feature service (blue) — new
- Section bg `linear-gradient(35deg,#0B3F9E,#1565D8 70%,#38A3F7)`; purple `#9F82DE` circle 200px (left). Left: label, H2 "A hospital ICU, on wheels." (accent yellow), copy, 4 check rows (26px mint box, 2px navy border, check icon 18px), yellow CTA. Right: framed image with coral `#FF6B5F` offset layer (20px) → WHY: breaks the white run before How It Works; reuses ICU content from `services.ts`.

### 3.6 How it works (mint)
- CURRENT: `clinic-mist`, centered header, identical white cards, 48px number tile → TARGET: left-aligned header; 4 cards, 3px border, 8px colour shadow (coral, yellow, sky, mint rotating), number **72px/800**, 48px square icon tile, 3px navy rule, title 19px/800 uppercase; vertical offsets 0 / 34 / 8 / 42px (desktop only) → WHY: structure plus rhythm. Connector arrows: add 30px `arrow_forward` between cards on ≥1024px (not implemented in the reference file; build in production).

### 3.7 Coverage (navy)
- CURRENT: `paper` section with white pill tags → TARGET: `#0A2A5E` ground, two concentric 3px rings `#38A3F7` @60% at bottom-right (map-inspired, not radar); area tags: fill rotates `#F5D84A,#FF6B5F,#9FE0C5,#8DD8E5,#CBB5FF,#FFB36B`, 3px **white** border, `5px 5px 0 #061A3D` + 3px white outline, `location_on` icon 19px, rotate ±1.5° → WHY: editorial location tags; avoids dashboard look.

### 3.8 Trust
- CURRENT: navy band, 4 outlined 1px boxes, centred → TARGET: white section, 4 solid cards (Yellow / Care Blue / Lavender / Mint), value 34–44px/800, label 11px/800 tracking .14em, icon 40px filled → WHY: replace outline-only boxes with colour weight. Content unchanged ("24×7", "11+", "All India", "ICU Grade" — verify these claims with client before launch).

### 3.9 Emergency CTA / Contact
- CURRENT: coral band with underlined text and two buttons → TARGET: Care Blue `#1565D8` section; H2 `clamp(42px,6.4vw,68px)`/800 white with yellow "right now?"; Call (Coral, 18×28px padding, 15px type) + WhatsApp (Mint); right: white form card, 3px border, `14px 14px 0 #F5D84A` + 3px outline, inputs 3px border, `#EAF2FC` fill, focus = white + `4px 4px 0 #38A3F7` → WHY: strongest action area. Form is visual only until wired.

### 3.10 Footer — see §6.

---

## 4. Service-page changes (`/services` and `/services/[slug]`)

*Apply on the shared service template; do not create per-service layouts (per `services.ts` rule).*

| Element | CURRENT | TARGET | WHY |
|---|---|---|---|
| Service accent | `accent` / `accentHex` use pastel hexes (e.g. `#DCCBFF`) | Update `accentHex` to saturated values in §10 | One data source drives all pages |
| Page hero | (verify in template) | Colour-block hero in the service accent, 3px navy bottom border, 56px icon tile (filled), H1 800 uppercase 44–58px, framed image right | Each service feels owned |
| Feature list | Plain list | Rows with 26px mint/accent check tile, 14.5px/700 | Scannable |
| Related services | Small cards | Standard card (§8), max 2–3 | Consistent |
| FAQ | (verify) | 3px bordered rows, `+` 32px square toggle, open row gets accent fill | Matches card system |
| Sticky CTA | Mobile bar only | Add inline Call (Coral) + WhatsApp (Mint) pair under H1 | Action above fold |
| Accent rotation | See §10 table | Emergency Care Blue; ICU Lavender; Ventilator Coral; BLS Mint; Patient Transfer Yellow; Oxygen Aqua; NICU Lavender; Outstation Peach; Event Coral; Corporate Mint; Mortuary Navy | Per brief |

Mortuary page: keep navy but use restrained treatment — no coral/yellow shapes in the hero; navy + white + Sky only. WHY: tone.

---

## 5. Location-page changes (`/coverage` and `/coverage/[slug]`)

| Element | CURRENT | TARGET | WHY |
|---|---|---|---|
| Index page | (verify) | Navy hero with ring motif (§3.7); area grid of tags grouped by zone, colour rotating | Reuses home language |
| Area tag | White 2px pill | 3px bordered rectangle, 4px radius, accent fill, `location_on` | Editorial tag |
| Location page hero | (verify) | Care Blue hero, area name H1 800 uppercase, label `COVERAGE / <AREA>`, framed image/map placeholder with Yellow offset | Consistency |
| Nearby areas | Text links | Row of rotated tags (±1.5°) | Navigation + graphic |
| Services-in-area | (verify) | Standard service cards, 3 max, then link to all | Avoid wall of cards |
| Map | None | Placeholder frame (stripes + mono caption) until real map asset supplied | No invented geography |

---

## 6. Header / footer changes

**Header** — see §3.1.

**Footer**
- CURRENT: `bg-navy`, 36px reverse logo, 3xl/4xl "Care, moving forward." (900), 1px `white/15` dividers, `warm-yellow` column labels with underline, links `white/75` 12px → TARGET: top 8px `#F5D84A` border; logo 46px; statement `clamp(38px,6vw,64px)`/800, "forward." in yellow; contact block = 3px white border with `6px 6px 0 #FF6B5F` containing pulsing mint dot, phone 22px/800, email; column labels = filled colour chips (Yellow, Mint, Lavender, 11px/800, navy text); links 14px/700 **full white**, hover yellow; dividers 3px `#1565D8`; legal line 12px white (not 60%) → WHY: contrast (white/60 and white/75 fall below 4.5:1 target on some screens) and substance.
- Do not add a newsletter block unless the client confirms a newsletter exists.

---

## 7. Button specifications

| Variant | Fill | Text | Border | Shadow (rest → hover) | Use |
|---|---|---|---|---|---|
| Call (primary, header) | `#1565D8` | white | 2px `#0A2A5E` | `4px 4px 0 navy` → `2px 2px 0`, translate(2,2) | Header |
| Call (hero/contact) | `#FF6B5F` | `#0A2A5E` | 3px navy | `6–7px` → `3–4px`, translate(3,3) | Primary action on blue |
| WhatsApp | `#9FE0C5` | `#0A2A5E` | 2–3px navy | same as Call | Secondary, always distinct |
| View services | `#F5D84A` | navy | 3px navy | `6px` | Tertiary on blue |
| Navy | `#0A2A5E` | white | 3px navy | `6px 6px 0 #F5D84A` | Content CTAs on white |
| White outline | `#fff` | navy | 3px navy | `5px 5px 0 navy` | "View all" |

- Size: header 11×18px padding, 12–12.5px/800; hero 17×26px, 14px/800; contact 18×28px, 15px/800. Min height 44px everywhere.
- Radius 4px. Tracking `.08em`, uppercase. Icon 19–24px filled, wght 700, gap 8–10px; trailing `arrow_forward` on navigation CTAs.
- Active: translate(6,6), shadow 0. Focus: 2px `#38A3F7` outline, 2px offset (existing).
- CURRENT → TARGET: soft colour hovers (`hover:bg-coral/90`, `bg-blue-700`) → positional hover (translate + shadow shrink) → WHY: tactile, non-SaaS.
- WhatsApp status dot: 9px, `#0F8F5F`, pulse 1.6s.

---

## 8. Card specifications

**Standard service card**
- Padding 24px; min-height 230px; border 3px navy; radius 4px; shadow `8px 8px 0 <backing>` + `8px 8px 0 3px navy`; hover translate(−3,−3) with 12px shadow, 180ms.
- Structure: icon tile top-left, index number (`01`–`11`, 11px/800) top-right; title bottom block; description 13.5px/500, lh 1.5; "Details →" 11.5px/800 uppercase.
- Title 19px/800 uppercase, lh 1.1, tracking −0.01em.

**Feature card (Emergency)**: spans 2 cols ≥900px, min-height 250px, title 26px, icon tile 68px/icon 38px, fill Care Blue, white text, Yellow backing.

**Small/utility card** (related services, trust): same border/shadow, padding 20px, title 16px.

| Service | Fill | Text | Backing | Icon tile |
|---|---|---|---|---|
| Emergency | `#1565D8` | white | `#F5D84A` | white / navy icon |
| ICU | `#CBB5FF` | navy | navy | navy / white icon |
| Ventilator | `#FF6B5F` | navy | navy | navy / white |
| BLS | `#9FE0C5` | navy | `#1565D8` | navy / white |
| Patient Transfer | `#F5D84A` | navy | `#1565D8` | navy / white |
| Oxygen | `#8DD8E5` | navy | navy | navy / white |
| NICU | `#CBB5FF` | navy | `#F5D84A` | navy / white |
| Outstation | `#FFB36B` | navy | navy | navy / white |
| Event | `#FF6B5F` | navy | `#F5D84A` | navy / white |
| Corporate | `#9FE0C5` | navy | `#9F82DE` | navy / white |
| Mortuary | `#0A2A5E` | white | `#38A3F7` | white / navy |

Two adjacent same-colour cards (ICU/NICU, Ventilator/Event, BLS/Corporate) differ by backing colour and sit far apart in grid order.

**Step card**: 3px border, 4px radius, padding 22px, backing rotates coral/yellow/sky/mint. **Stat card**: padding 26px, backing navy or accent.

---

## 9. Icon specifications

- CURRENT: Material Symbols Outlined, `FILL 0, wght 400`, 17–28px, loaded with a single static axis (`24,400,0,0`) → TARGET: same family, `FILL 1, wght 700, opsz 24`; load axes `opsz,wght,FILL,GRAD@24,100..700,0..1,0` → WHY: one family, heavier; stays consistent with existing `services.ts` icon names.
- Sizes: nav/button 19–24px; card 32px (feature 38px); step 26px; stats 40px; check 18px.
- Containers: **square**, 0 radius, 3px navy border; 56px (standard), 68px (feature), 48px (step), 26px (check).
- Container fill: white with navy glyph on dark/blue cards; navy with white glyph on light cards.
- Mapping (existing names): Emergency `emergency`, ICU `monitor_heart`, Ventilator `pulmonology`, BLS `local_hospital`, Patient Transfer `transfer_within_a_station`, Oxygen `air`, NICU `child_care`, Outstation `route`, Event `stadium`, Corporate `corporate_fare`, Mortuary `church`.
- Risk: the Material set has no dedicated "ventilator", "event" or "mortuary" glyphs. If these read poorly at 32px, commission a custom set at 24px grid, **2.5px stroke, square caps, mitred joins**, with occasional filled shapes.
- Do not mix outline-only icons with filled ones in the same row.

---

## 10. Colour specifications

**Fixed brand (logo + core)**: Navy `#0A2A5E`, Care Blue `#1565D8`, Response Sky `#38A3F7`, White `#FFFFFF`, Clinic Mist `#EAF2FC`, gradient `#0B3F9E → #38A3F7` (35deg). Also keep `navy-dark #061A3D`, `paper #FBFBF9`.

**UI accents (CURRENT → TARGET)**

| Token | CURRENT | TARGET |
|---|---|---|
| coral | `#FF7468` | `#FF6B5F` |
| peach | `#FFC48A` | `#FFB36B` |
| warm-yellow | `#F4D46A` | `#F5D84A` |
| lavender | `#DCCBFF` | `#CBB5FF` |
| purple-accent | `#B9A4E8` | `#9F82DE` |
| mint | `#BFE8D5` | `#9FE0C5` |
| aqua | `#B9E7ED` | `#8DD8E5` |
| soft-green | `#B9D9C6` | retire; use mint |
| *-light tints | `#FFEBE9`, `#F4EFFF`, `#EFFBF5` etc. | Not used as card fills. `#EFFBF5` allowed only as the How-it-works ground |

Add: `status-green #0F8F5F` (WhatsApp dot).

**Rules**
- Navy text on all accent fills (contrast ≥ 7:1 on each). White text only on navy, Care Blue, Sky-dark.
- Yellow as text only on dark/blue grounds; never on white.
- Max 3 accents visible per viewport. No gradients between accents.
- Sky `#38A3F7` with white text is **not** allowed (≈2.7:1); use navy text on Sky.
- Replace `white/60`, `white/75`, `navy/50`, `navy/65` text with full-strength navy or white for body and labels.

**Section sequence (grounds)**: Hero gradient → White → Paper → Blue gradient → Mint dots → Navy → White → Care Blue → Navy.

---

## 11. Typography specifications

Manrope only. Load weights 400–800 (900 is not loaded; current code uses `font-black` which synthesises — replace with 800).

| Role | CURRENT | TARGET |
|---|---|---|
| Hero H1 | `text-7xl` 800, lh .95 | `clamp(46px,7.4vw,76px)`, 800, lh .95, −0.025em, uppercase |
| Section H2 | `text-4xl` (36px) | `clamp(38px,5.6vw,58px)`, 800, lh .98, −0.025em |
| Contact H2 | 36px | `clamp(42px,6.4vw,68px)`, 800, lh .95 |
| Card title | 16px/800 | 19px/800 (feature 26px), lh 1.1 |
| Step number | 18px in tile | 72px/800, lh .8, −0.05em |
| Stat value | 30–36px | 34–44px/800, −0.03em |
| Body | 16–18px/500 | 16.5px/500, lh 1.55–1.6, full-opacity colour |
| Card body | 13px/500 @65% | 13.5px/500, lh 1.5, full-opacity |
| Button | 13px/800 | 12–15px/800, tracking .08em, uppercase |
| Section label | 10px/900 chip | 11px/800, tracking .18em, uppercase, 2px border, 5×10px padding, preceded by 14px square marker |
| Metadata | 10px/700 @50% | 10.5–11px/800, tracking .14em |
| Nav | 12px/700 | 12px/800, tracking .09em |

Minimum text size 10.5px; body ≥ 13.5px.

---

## 12. Image treatment and placement

- Frame (hero): white outer 12px padding → 3px navy border → inner 3px navy keyline → offset `14px 14px 0 #F5D84A` + 3px navy outline. Caption strip below (11px/800 uppercase) and corner label (navy bg, white text, top-left, 10.5px/800).
- Frame (editorial): 10px white padding, 3px navy border, offset colour block 20–26px behind (lavender, coral), frame translated −8 to −14px so the block shows on 2 sides.
- Aspect ratios: hero 4:3; brand portrait 5:6; ICU interior 4:3.
- One decorative circle (92–120px) overlapping a frame corner, 3px navy border, max one per image.
- Placement: Hero (right), Brand story (left), ICU feature (right), plus one hero image per service page and a map/area image per location page. Large and few; no galleries.
- Photography direction: natural light, real vehicle/crew, high contrast, no stock-hospital clichés, no staged smiles. Supply real Vidhya Sri photos; current repo contains no photography, so placeholders are striped (`#CFE0F7/#E3EEFB`, 14px bands) with mono captions.
- Always provide `alt` text; use `next/image` with explicit sizes; hero image `priority`.

---

## 13. Mobile specifications (360–390px)

| Item | CURRENT | TARGET | WHY |
|---|---|---|---|
| Container padding | 16px | 20px | Room for offset shadows |
| Sections | 80–96px vertical | 72–96px | Rhythm |
| Hero H1 | `text-4xl` | ~46px (clamp floor), lh .95 | Large but controlled |
| Hero layout | Single col | Copy first, image frame second, full width minus 14px right gutter for offset | Frame stays visible |
| Hero buttons | Wrap | Stack full width, 3 buttons, 14px gap, ≥52px high | Clear hierarchy |
| Header | Symbol logo + Call | Full logo hidden <640 if it overflows; keep symbol (36px), "CALL 24×7" button, 44px menu | Space |
| Sticky bar | `py-3.5`, 1px divider | 15px padding, 13px/800, Call `#1565D8` / WhatsApp `#9FE0C5`, **3px** navy top and centre divider, 21px icons, safe-area padding | Stronger action |
| Body bottom padding | none | ≥58px (+ safe-area) so footer is not hidden | No overlap |
| Grids | 1 col | `minmax(min(100%,270px),1fr)`; right padding 8px for shadows | No overflow |
| Feature card | n/a | Does not span; same size as others | Fit |
| Step offsets | n/a | None on mobile (0) | Order clarity |
| Hit targets | 40px menu | ≥44px all | Accessibility |
| Decorative shapes | Many | Keep ≤2 per section; clip with `overflow:hidden` | No horizontal scroll |

QA widths: 1440, 1280, 1024, 768, 390, 360.

---

## 14. Motion recommendations

| Element | CURRENT | TARGET | WHY |
|---|---|---|---|
| Section reveal | None | Fade + translateY 22px→0, 700ms, `cubic-bezier(.2,.7,.2,1)`, once, 120ms stagger in grids | Editorial entrance |
| Image frame | None | Mask reveal: clip-path inset(0 0 100% 0)→inset(0) 800ms; inner image scale 1.08→1 | Crop transition |
| Offset layers | Static | Offset block slides from 0 to its final 14–26px after frame lands (300ms delay) | Layer movement |
| Cards hover | translate(−2,−2) + shadow | translate(−3,−3), shadow 8→12px, 180ms | Consistency |
| Buttons | colour fade | translate(+3,+3), shadow shrinks, 150ms; active translate(6,6) | Press feedback |
| Arrows | colour | translateX(4px) on parent hover, 150ms | Direction cue |
| Decorative shapes | None | Slow drift ±8px, 7s ease-in-out, 1–2 shapes only | Life, subtle |
| Status dot | `animate-pulse` | Pulse opacity 1→.35, 1.6s | Keep |
| Reduced motion | Handled in `globals.css` | Keep; also disable drift and reveal | Accessibility |

Do not add parallax, marquee, or looping hero animation.

---

## Open items for client / team

1. Provide real photography (hero, crew, ICU interior, area map).
2. Verify the claims "24×7", "11+ ambulance types", "All India", "ICU grade", and the "under 15 minutes" copy in `services.ts` FAQ before launch.
3. Confirm phone, WhatsApp and address are real (currently flagged placeholders in `site.ts`).
4. Review icons for Ventilator, Event and Mortuary at 32px; commission custom set if weak.
5. Service and location templates were not inspected line-by-line; confirm sections 4–5 against them.
6. Wire the contact form and decide on a form backend.
