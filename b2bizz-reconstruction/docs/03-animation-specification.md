# 03 — ANIMATION SPECIFICATION & INTERACTION PHYSICS

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Animation Architecture Overview

The animation philosophy of **B2Bizz** is characterized by high-precision, low-friction micro-interactions with snappy response curves and cinematic section entrances. 

To achieve exact parity with the Framer reference, the reconstructed Next.js platform will use:
1. **Lenis**: Global virtual smooth scrolling (`lerp: 0.1`, `smoothWheel: true`).
2. **GSAP & ScrollTrigger**: High-performance numerical counters, parallax media shifts, and synchronized scroll reveals.
3. **Motion (Framer Motion)**: Component-level enter/exit transitions, tabs layout animations (`layoutId`), mobile drawer toggles, and hover states.

---

## 2. Core Animation Parameters & Physics Profiles

| Physics Profile | Duration | Easing Function / Curve | Semantic Application |
| :--- | :--- | :--- | :--- |
| **Smooth Reveal** | `0.8s` | `cubic-bezier(0.16, 1, 0.3, 1)` (`power3.out`) | Section title & card scroll entrance |
| **Quick Snappy** | `0.45s` | `cubic-bezier(0.44, 0, 0.56, 1)` | Service card hover, border transitions |
| **Micro Hover** | `0.15s` – `0.2s` | `easeOut` | Button scale, color shift, icon translation |
| **Float Oscillation** | `4.0s` | `easeInOut` (`sine.inOut`) | Hero visual dashboard card floating |
| **Linear Marquee** | `30s` – `40s` | `linear` | Infinite ticker / partner logo carousel |
| **Modal / Drawer** | `0.35s` | `[0.32, 0.72, 0, 1]` | Mobile navigation menu slide-down |

---

## 3. Section-by-Section Animation Breakdown

### 3.1. Global Header & Sticky Navigation
* **Initial State:** Fixed at top, transparent background, `translateY(0)`.
* **Scroll Behavior:**
  - When scroll offset `y > 50px`: Smooth background interpolation from `transparent` to `rgba(14, 16, 15, 0.85)` with `backdrop-filter: blur(16px)`. Border bottom transitions from `transparent` to `1px solid rgba(47, 49, 38, 0.6)`.
  - Padding shrinks from `py-4` (`16px`) to `py-2.5` (`10px`).
* **Hover Interaction (Nav Links):**
  - Text color interpolates from `--color-text-secondary` (`#BBC1A7`) to `--color-brand-volt` (`#F3FFC9`) in `0.15s`.
  - Bottom indicator line expands from center `width: 0% -> 100%` (`0.25s`).
* **Dropdown Menu ("Pages"):**
  - Initial: `opacity: 0`, `scale: 0.95`, `translateY(-8px)`, `pointer-events: none`.
  - Active: `opacity: 1`, `scale: 1`, `translateY(0)`, `pointer-events: auto` in `0.25s` with `cubic-bezier(0.16, 1, 0.3, 1)`.

---

### 3.2. Hero Section Entrance
* **Trigger:** Window load / component mount.
* **Choreographed Timeline (GSAP / Motion):**
  1. **Badge Pill (`t = 0.0s`):**
     - Initial: `opacity: 0`, `scale: 0.9`, `y: 15px`.
     - Target: `opacity: 1`, `scale: 1.0`, `y: 0px` (Duration: `0.5s`, ease: `power2.out`).
  2. **Main Headline (`t = 0.15s`):**
     - Staggered word/line reveal.
     - Initial: `opacity: 0`, `y: 35px`, `filter: blur(6px)`.
     - Target: `opacity: 1`, `y: 0px`, `filter: blur(0px)` (Duration: `0.8s`, ease: `power3.out`).
  3. **Sub-description (`t = 0.30s`):**
     - Initial: `opacity: 0`, `y: 20px`.
     - Target: `opacity: 1`, `y: 0px` (Duration: `0.6s`, ease: `power2.out`).
  4. **Dual CTAs (`t = 0.45s`):**
     - Initial: `opacity: 0`, `y: 15px`.
     - Target: `opacity: 1`, `y: 0px` (Duration: `0.5s`, ease: `power2.out`, stagger: `0.1s`).
  5. **Hero Dashboard Visual Card (`t = 0.5s`):**
     - Initial: `opacity: 0`, `scale: 0.94`, `y: 40px`.
     - Target: `opacity: 1`, `scale: 1.0`, `y: 0px` (Duration: `1.0s`, ease: `power3.out`).
     - **Continuous Idle Animation:** Seamless vertical sine float oscillation: `y: -8px` to `+8px`, duration `4.0s`, `repeat: -1`, `yoyo: true`, ease: `sine.inOut`.

---

### 3.3. Partner Logos Infinite Ticker (Marquee)
* **Animation Type:** CSS Hardware-Accelerated Continuous Infinite Translate (`transform: translateX()`).
* **Initial State:** Cloned track with minimum 200% width.
* **Duration:** `35s` linear.
* **Keyframes:**
  ```css
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  ```
* **Hover State:** `animation-play-state: paused` on user cursor enter; logo opacity shifts from `0.6` to `1.0` with `transition: opacity 0.2s`.
* **Edge Gradients:** Fixed left and right mask gradients (`width: 80px`) prevent harsh clipping at viewport boundaries.

---

### 3.4. Metric Counters & Statistics Section
* **Trigger:** GSAP `ScrollTrigger` when section top hits `80%` viewport height (`start: "top 80%"`).
* **Execution:**
  - Numerical value animates from `0` to target (e.g., `0` -> `4X`, `0` -> `100%`, `0` -> `20+`).
  - Duration: `2.0s`.
  - Easing: `power2.out`.
  - Counter increments smoothly via GSAP `snap` / Math interpolation.
* **Card Entrance:** Subtle upward drift `y: 30px -> 0px` with stagger `0.1s` across 4 stat cards.

---

### 3.5. Industry Carousel / Tabs
* **Interaction:** Clicking an industry tab (Healthcare, FinTech, SaaS, Logistics, Manufacturing).
* **Active Indicator:** Smooth sliding pill background using Motion `layoutId="activeIndustryTab"`.
* **Card Content Swap:**
  - Exit tab: `opacity: 0`, `x: -15px`, `duration: 0.2s`.
  - Enter tab: `opacity: 1`, `x: 0px`, `duration: 0.35s`, ease `power2.out`.

---

### 3.6. Interactive Service Cards
* **Scroll Reveal:** Staggered fade and slide-up as each row enters viewport (`stagger: 0.12s`, `duration: 0.7s`).
* **Hover Interaction:**
  - Card translation: `translateY(-6px)`.
  - Border illumination: Border transitions from `--color-brand-olive-dark` (`#2F3126`) to high-contrast `--color-brand-volt` (`#F3FFC9`) in `0.3s`.
  - Radial spotlight effect: A subtle `radial-gradient` follows mouse position inside the card bounding box.
  - Arrow Icon: Slides `+4px` diagonally or to the right on hover.

---

### 3.7. Featured Case Studies Carousel
* **Slider Physics:**
  - Drag / Touch swipe enabled with inertia (`drag="x"`, `dragConstraints`).
  - Elastic boundary resistance (`dragElastic: 0.1`).
  - Snap-to-card physics aligning active card to container padding.
* **Pagination Dots:** Active dot stretches from `w-2` (`8px`) to `w-6` (`24px`) with `transition: width 0.3s ease`.
* **Image Hover:** Case study thumbnail image scales smoothly `scale: 1.0 -> 1.05` inside an `overflow: hidden` container (`duration: 0.5s`, ease: `cubic-bezier(0.16, 1, 0.3, 1)`).

---

### 3.8. Methodology & 4-Step Process Section
* **Step Progression Line:**
  - Vertical/horizontal connecting line fills with volt color (`#F3FFC9`) dynamically as user scrolls down the section (`ScrollTrigger scrub: 0.5`).
* **Step Activation:** As each step indicator is reached, the step number badge glows and content opacity shifts from `0.4` to `1.0`.

---

### 3.9. Testimonials Slider
* **Auto-advance:** Plays every `6000ms`.
* **Pause on Interaction:** Pauses when hovered or dragged.
* **Transition Effect:** Cross-fade combined with `x: 20px -> 0px` slide over `0.6s`.
* **Arrow Controls:** Interactive circular buttons with hover scale `1.1` and volt stroke highlight.

---

### 3.10. Call To Action (Pre-Footer) Banner
* **Scroll Reveal:** Card expands slightly into place `scale: 0.98 -> 1.0`, `opacity: 0 -> 1`.
* **Background Gradient Animation:** Slow moving ambient radial light in background (rotation / drift over 15s).
* **CTA Button Hover:**
  - Scale: `scale: 1.03`.
  - Shadow: `box-shadow: 0 0 25px rgba(243, 255, 201, 0.3)`.
  - Arrow icon inside button translates `x: +4px`.

---

### 3.11. Accordion FAQ (Services Page)
* **Toggle Interaction:**
  - Height expand/collapse using Motion `AnimatePresence` and `height: "auto"`.
  - Plus/minus icon rotates `45deg` smoothly into an "X" or minus state (`duration: 0.3s`).
  - Content opacity fades in `0.25s`.
