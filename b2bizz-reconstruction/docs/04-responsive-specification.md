# 04 — RESPONSIVE SPECIFICATION & BREAKPOINT BEHAVIOR

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Breakpoint Architecture & Media Query Matrix

Framer’s underlying breakpoint architecture for B2Bizz utilizes three core operational ranges, which we map directly into Tailwind CSS responsive design classes to ensure pixel-perfect rendering across the five requested audit resolutions:

```css
/* Core Framer Breakpoint Rules Identified */
@media (min-width: 1200px) { ... }                         /* Desktop Tier */
@media (min-width: 810px) and (max-width: 1199.98px) { ... } /* Tablet / Laptop Tier */
@media (max-width: 809.98px) { ... }                         /* Mobile Tier */
```

### Comprehensive Target Breakpoint Table

| Device Tier | Viewport Width | Target Behavior & Layout Structural Changes | Tailwind Class Equivalents |
| :--- | :--- | :--- | :--- |
| **Desktop** | `1440px+` | Max outer container `1460px` with `px-8`; 3-column service grid; 4-column metrics; full horizontal navbar with dropdowns. | `2xl:`, `xl:` |
| **Laptop** | `1280px` | Standard container `1200px` with `px-6`; 3-column service grid; horizontal header preserved; font display scales to `56px`. | `lg:` (`1024px` – `1280px`) |
| **Tablet** | `768px` – `810px` | Container collapses to `810px` max-width; 2-column service/case study grids; 2-column metric cards; hamburger menu button activates; desktop navbar links hide. | `md:` (`768px` – `1023px`) |
| **Mobile** | `390px` | Single-column vertical stack across all sections; mobile slide-down drawer; touch-swipeable carousels; bottom sticky action bar; padding `px-4`. | `sm:`, default |
| **Small Mobile** | `375px` | Micro-optimizations: base body font scales from `16px` to `14px`; headline clamps to `32px`; dual buttons stack vertically with `w-full`. | `< 390px` |

---

## 2. Section-by-Section Responsive Adaptations

### 2.1. Global Navigation Bar

* **Desktop (1440px) & Laptop (1280px):**
  - Layout: `flex justify-between items-center`.
  - Max container: `1460px` with `padding: 10px 30px`.
  - Structure: Left Logo -> Center Menu Links (`Home`, `About`, `Services`, `Case Study`, `Blog`, `Contact`, `Pages` dropdown) -> Right CTA Button ("Request a consultation").
  - Fixed / sticky positioning with smooth background blur on scroll.
* **Tablet (768px – 810px):**
  - Desktop nav links and dropdown are hidden (`hidden-1nnrg0u`).
  - Hamburger icon (`40px x 40px` touch target) appears on right.
  - Primary CTA button hides or shrinks to compact pill ("Consultation").
  - Clicking hamburger triggers a floating or slide-down navigation panel (`top: 78px`, `left: 0`, `right: 0`, `bg-[#161a18]/95 backdrop-blur-2xl`).
* **Mobile (390px & 375px):**
  - Header padding reduces to `12px 16px`.
  - Logo height adjusts to `22px`.
  - Hamburger button size: `36px x 36px`.
  - Drawer menu occupies full viewport width with vertical stack navigation items and a full-width bottom CTA button.

---

### 2.2. Hero Section

* **Desktop (1440px):**
  - Two-column asymmetrical layout or centered display with prominent hero preview card (`1200px` content container).
  - Headline: Display 1 (`68px`), tracking `-0.03em`.
  - CTAs: Horizontal inline button group (`gap-4`).
  - Hero Dashboard Card: Full scale (`1200px` wide, `rounded-[30px]`), showing multi-column SaaS analytics dashboard.
* **Laptop (1280px):**
  - Headline scales to `56px`.
  - Container width `1024px` – `1140px`.
* **Tablet (768px):**
  - Headline scales to `44px`.
  - Sub-description width expands to `100%`.
  - Dual CTAs remain inline or wrap softly.
  - Hero Dashboard Card drops complex sidebar and displays simplified 2-column analytics view.
* **Mobile (390px & 375px):**
  - Headline clamps to `34px` – `36px` (`line-height: 1.15`).
  - Subtitle: `15px` (`line-height: 1.5`).
  - CTAs stack vertically: Primary button `w-full`, Secondary button `w-full`.
  - Hero Dashboard Card switches to single mobile-card view (`rounded-[20px]`, metrics stacked).

---

### 2.3. Partner Logos Infinite Ticker (Marquee)

* **Desktop & Laptop (1280px – 1440px):**
  - 7+ partner logos displayed concurrently.
  - Mask gradient width: `80px` on left, `80px` on right.
  - Marquee track speed: `35s` per cycle.
* **Tablet (768px):**
  - 4 – 5 logos visible in viewport.
  - Mask gradient width: `40px`.
* **Mobile (390px & 375px):**
  - 2 – 3 logos visible in viewport.
  - Track speed adjusted to `25s` to maintain appropriate relative velocity.
  - Logo dimensions scaled down to `max-h-[22px]`.

---

### 2.4. Key Metrics & Impact Section

* **Desktop (1440px):**
  - 4-column horizontal grid (`grid-cols-4`, `gap-6`).
  - Number size: `48px` – `56px` bold Geist display.
* **Laptop (1280px):**
  - 4-column grid maintained with tighter padding.
* **Tablet (768px):**
  - Collapses into a 2x2 grid (`grid-cols-2`, `gap-4`).
  - Number size: `40px`.
* **Mobile (390px & 375px):**
  - 2-column compact grid or 1-column stack.
  - Number size: `32px`.
  - Metric label font size: `13px`.

---

### 2.5. Services Catalog Section

* **Desktop (1440px) & Laptop (1280px):**
  - 3-column / asymmetrical card grid (`grid-cols-3` or 2 large top cards + 3 lower cards).
  - Card padding: `32px` (`p-8`).
  - Tags inline with bullet dividers.
* **Tablet (768px):**
  - Collapses into a balanced 2-column grid (`grid-cols-2`, `gap-6`).
  - Card padding: `24px` (`p-6`).
* **Mobile (390px & 375px):**
  - 1-column vertical stack (`grid-cols-1`, `gap-4`).
  - Card padding: `20px` (`p-5`).
  - "View detail" link expands to full card touch area.

---

### 2.6. Industry Expertise Showcase (Tabs / Matrix)

* **Desktop & Laptop:**
  - Horizontal tab bar with 5 industry pills (Healthcare, Financial Services, Technology, Manufacturing, Supply Chain).
  - Selected tab reveals expansive 2-column panel (Left: Industry narrative & key challenges; Right: Solution architecture diagram & metric highlight).
* **Tablet (768px):**
  - Horizontally scrollable tab bar with hidden scrollbars.
  - Content panel stacks vertically (narrative on top, metric card below).
* **Mobile (390px & 375px):**
  - Swipeable tab pills (`overflow-x-auto`, `scroll-snap-type: x mandatory`).
  - Vertical stack panel with full-width cards.

---

### 2.7. Featured Case Studies Carousel

* **Desktop (1440px):**
  - Multi-card view showing 2 active case studies simultaneously + preview edge of 3rd card.
  - Large thumbnail visual (`800x600`), floating metric badges (`+2.5X`, `38% drop`).
* **Laptop (1280px):**
  - 2 full cards visible.
* **Tablet (768px):**
  - 1 full card + 20% peek of next card (`w-[85vw]`).
  - Drag navigation enabled.
* **Mobile (390px & 375px):**
  - 1 full card centered (`w-[90vw]`).
  - Floating metric badges reposition inside the card bottom bar to prevent overlapping on small screens.

---

### 2.8. Pricing & Consulting Plans (`/home-2` & `/service/[slug]`)

* **Desktop (1440px) & Laptop (1280px):**
  - 3-column pricing comparison grid (`grid-cols-3`, `gap-8`).
  - Center card (Growth Tier `$3,500/mo`) elevated with electric volt border glow and "Most Popular" pill badge.
* **Tablet (768px):**
  - 3 cards stack or swipe; or 1-column stack with Growth Tier highlighted.
* **Mobile (390px & 375px):**
  - 1-column vertical stack (`w-full`, `gap-6`).
  - Tier selector toggle buttons (Starter | Growth | Enterprise) allowing user to flip between single plans without endless scrolling.

---

### 2.9. Pre-Footer Call-to-Action Banner

* **Desktop (1440px):**
  - Contained card (`1200px`) with curved corners (`rounded-[30px]`).
  - 2-column flex layout (Left: Headline & microcopy; Right: Dual CTA buttons).
* **Tablet (768px):**
  - Card padding `40px 32px`.
  - Buttons align left under the text.
* **Mobile (390px & 375px):**
  - Card padding `28px 20px` (`rounded-[20px]`).
  - Text centered; buttons stack full-width (`w-full`).

---

### 2.10. Global Footer

* **Desktop (1440px):**
  - 4-column grid layout: Brand & Newsletter (Col 1 & 2), Navigation Links (Col 3), Contact & Address (Col 4).
  - Bottom legal bar with Privacy Policy and Copyright in single horizontal flex row.
* **Tablet (768px):**
  - 2x2 grid: Newsletter on top, links and contact info below.
* **Mobile (390px & 375px):**
  - 1-column vertical stack (`gap-8`).
  - Newsletter input and button stack.
  - Link groups organized into clean accordion or stacked columns.
  - Copyright and legal links centered.
