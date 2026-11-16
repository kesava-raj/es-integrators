# 06 — INTERACTION INVENTORY & COMPONENT STATE MACHINE

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Overview & Interaction Taxonomy

This document catalogs every interactive state, micro-interaction, event listener, and component state machine across the B2Bizz platform. Each interaction is defined with its **trigger event**, **input vector**, **target element**, **visual state progression**, and **exit/teardown mechanics**.

---

## 2. Global UI Interactions

### 2.1. Sticky Header & Navigation State Machine

```
[Default State: Y=0, Transparent BG, Full Padding]
       │
       ▼ Scroll Y > 50px
[Elevated State: Frosted Charcoal BG (#161A18/85), 16px Backdrop Blur, 1px Border Bottom]
       │
       ▼ Scroll Y < 50px
[Revert to Default State]
```

* **Target Element:** `<header className="fixed top-0 left-0 right-0 z-50">`
* **Trigger:** `window.onScroll` / Lenis scroll update listener.
* **Property Transitions:**
  - `backgroundColor`: `rgba(0, 0, 0, 0)` -> `rgba(14, 16, 15, 0.85)`
  - `backdropFilter`: `none` -> `blur(16px)`
  - `borderColor`: `transparent` -> `rgba(47, 49, 38, 0.6)`
  - `paddingBlock`: `16px` -> `10px`
* **Duration & Curve:** `0.3s`, `easeOut`.

---

### 2.2. "Pages" Mega Dropdown Interaction
* **Trigger:** User `mouseenter` or click on "Pages" nav item.
* **States:**
  - **Closed:** `opacity: 0`, `scale: 0.96`, `translateY: -8px`, `pointerEvents: none`.
  - **Open:** `opacity: 1`, `scale: 1.0`, `translateY: 0px`, `pointerEvents: auto`.
* **Sub-item Hover:**
  - Target: Dropdown link (e.g., "Home 2", "Changelog", "Privacy Policy").
  - Background color shifts to `rgba(255, 255, 255, 0.05)`.
  - Icon / Text shifts `+3px` rightward.
  - Duration: `0.15s` linear.
* **Exit Trigger:** Cursor leaves menu area (`mouseleave` with `150ms` debounce) or click outside.

---

### 2.3. Primary CTA Button Physics (Magnetic Scale & Glow)
* **Trigger:** User hover / pointer move over primary button ("Request a consultation", "Explore our services", "Get started").
* **States:**
  - **Resting:**
    - Background: `--color-brand-volt` (`#F3FFC9`)
    - Text: Dark Charcoal (`#0E100F`)
    - Transform: `scale(1)`
    - Shadow: `none`
  - **Hover Active:**
    - Transform: `scale(1.03)` with micro-magnetic pull toward cursor
    - Background: `--color-brand-volt-light` (`#F9FFE5`)
    - Box Shadow: `0px 0px 24px -2px rgba(243, 255, 201, 0.35)`
    - Internal Arrow SVG: Translates `+4px` horizontally (`duration: 0.2s`).
  - **Active / Pressed:**
    - Transform: `scale(0.97)`
    - Duration: `0.1s`.

---

### 2.4. Secondary Outlined CTA Buttons
* **Trigger:** User hover over secondary button ("More about us", "Contact now").
* **States:**
  - **Resting:**
    - Background: Transparent or `--color-surface-card` (`#161A18`)
    - Border: `1px solid #2F3126`
    - Text: `--color-text-secondary` (`#BBC1A7`)
  - **Hover Active:**
    - Border: `1px solid #F3FFC9`
    - Text: `--color-brand-volt` (`#F3FFC9`)
    - Background: `rgba(243, 255, 201, 0.04)`
    - Duration: `0.2s`.

---

## 3. Section Component Interactions

### 3.1. Client Logo Infinite Marquee Ticker
* **Trigger:** Page load (Infinite loop).
* **Hover Interaction:**
  - Trigger: User moves cursor over any logo or track region.
  - Action: `animation-play-state: paused`.
  - Individual Logo Hover:
    - Filter: Logo brightness shifts from `brightness(0.7)` to `brightness(1.0)`.
    - Scale: `scale(1.05)` smoothly.
* **Exit:** Cursor leaves -> `animation-play-state: running`.

---

### 3.2. Service Catalog Card Interaction
* **Target:** Service Card (`/`, `/service`, `/home-2`).
* **Visual States:**
  - **Resting:**
    - Background: `--color-surface-card` (`#161A18`)
    - Border: `1px solid #2F3126`
    - Link Text ("View detail"): `--color-text-secondary` (`#BBC1A7`)
  - **Hovered:**
    - Transform: `translateY(-6px)`
    - Border: `1px solid rgba(243, 255, 201, 0.5)`
    - Box Shadow: `0px 12px 30px -8px rgba(0, 0, 0, 0.5), 0px 0px 20px -5px rgba(243, 255, 201, 0.1)`
    - Radial Spotlight: Follows cursor coordinates within card boundary:
      ```css
      background: radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(243, 255, 201, 0.06), transparent 80%), #161A18;
      ```
    - "View detail" Arrow: Slides diagonally `+4px` up and right.
  - **Click:** Navigates seamlessly to `/service/[slug]` with smooth page transition.

---

### 3.3. Industry Showcase Tabs & Slider
* **Target:** Horizontal Industry Tab Bar (Healthcare, FinTech, SaaS, Logistics, Manufacturing).
* **Interaction Flow:**
  1. User clicks inactive tab pill.
  2. Active indicator pill slides smoothly underneath clicked tab via Motion `layoutId="activeTabIndicator"` (`duration: 0.35s`, `ease: [0.16, 1, 0.3, 1]`).
  3. Text color of clicked tab switches from `#BBC1A7` to `#0E100F` (dark text over volt pill).
  4. Previous panel exits with `opacity: 0, x: -10px` (`0.2s`).
  5. New panel enters with `opacity: 1, x: 0px` (`0.3s`).

---

### 3.4. Case Studies Carousel Drag & Navigation
* **Target:** Case studies track container.
* **Interaction Types:**
  - **Mouse Drag / Touch Swipe:**
    - Free horizontal dragging with velocity tracking.
    - Snap-to-card: On release, track snaps to closest card boundary using `snapPoints`.
  - **Left / Right Arrow Buttons:**
    - Click Left: Translates track `+1 cardWidth + gap` to previous item.
    - Click Right: Translates track `-1 cardWidth - gap` to next item.
    - Boundary state: Left arrow disabled when at first card (`opacity: 0.3, pointer-events: none`); Right arrow disabled at last card.
  - **Pagination Dots:**
    - Clicking dot `N` instantly scrolls track to item `N`.
    - Active dot expands horizontally (`8px -> 24px`).

---

### 3.5. Pricing Tier Switcher & Cards (`/home-2` & `/service/[slug]`)
* **Billing Toggle (Monthly vs Annual):**
  - Trigger: User clicks toggle button ("Save up to 30%").
  - Switch pill translates smoothly left/right (`duration: 0.25s`).
  - Numerical prices update with number flip / count-up animation:
    - Starter: `$1,500` -> `$1,050`
    - Growth: `$3,500` -> `$2,450`
    - Enterprise: `$5,500` -> `$3,850`
* **Card Focus:**
  - Recommended tier ("Growth") features continuous subtle volt border glow.

---

### 3.6. Accordion FAQ Component (`/service`)
* **Target:** Collapsible FAQ Question Card.
* **Interaction:**
  - Trigger: User clicks question header.
  - **Closed State:**
    - Icon: Plus (`+`) glyph in volt circle.
    - Answer container: `height: 0px`, `opacity: 0`, `overflow: hidden`.
  - **Open State:**
    - Icon: Rotates `45deg` into an "X" glyph (`duration: 0.3s`).
    - Answer container: Expands smoothly to `height: auto` using Motion `height: "auto"` (`duration: 0.35s`, `ease: [0.16, 1, 0.3, 1]`).
    - Border color illuminates to `#585E44`.

---

### 3.7. Contact Form Input Micro-Interactions (`/contact`)
* **Target:** Text inputs, email inputs, textareas, and dropdown selectors.
* **Focus State:**
  - Border transitions from `#2F3126` to `#F3FFC9` in `0.15s`.
  - Subtle volt glow ring: `box-shadow: 0 0 0 2px rgba(243, 255, 201, 0.2)`.
  - Label text color shifts to `#F9FFE5`.
* **Validation / Error State:**
  - Border transitions to Crimson `#EF4444`.
  - Error message fades in below input with `translateY(-4px -> 0px)`.
* **Submit Button Loading State:**
  - Button text hides; spinner icon rotates infinitely (`360deg`, `1s linear`).
  - Button disabled during submission.
* **Success Toast:**
  - Modal or toast card slides in from top right: *"Thank you! Our B2B strategy team will contact you within 24 hours."*

---

### 3.8. Global Page Transitions
* **Framework:** Next.js App Router with custom Motion `PageTransition` wrapper.
* **Page Exit:**
  - Target: Current page view.
  - `opacity: 0`, `scale: 0.99`, `duration: 0.25s`, `ease: "easeIn"`.
* **Page Enter:**
  - Target: Incoming page view.
  - `opacity: 1`, `scale: 1.0`, `translateY: 0px` from `12px`, `duration: 0.4s`, `ease: "easeOut"`.
* **Scroll Restoration:** Instant window reset to `top: 0` before enter animation triggers.
