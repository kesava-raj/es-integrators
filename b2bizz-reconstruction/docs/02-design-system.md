# 02 — DESIGN SYSTEM & SPECIFICATION

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Design Philosophy & Aesthetic Blueprint

The **B2Bizz** aesthetic is an uncompromising, modern **Cyber-Dark Luxury & Electric Volt/Lime** design system crafted specifically for high-ticket enterprise B2B consulting. Rather than relying on generic corporate blues, the palette leverages deep OLED blacks, tactical charcoal-olive cards, and high-contrast electric lime accents (`#F3FFC9` / `#F9FFE5`). 

All visual elements feature fine micro-borders (`#2F3126` and `rgba(255, 255, 255, 0.05)`), subtle glassmorphism backdrops, and Swiss-inspired geometric typography using **Geist** and **Inter**.

---

## 2. Color Palette & Exact CSS Token Mapping

All tokens were extracted directly from the runtime CSS stylesheet and DOM root variables:

```css
:root {
  /* Brand Primary Accents */
  --color-brand-volt: #F3FFC9;          /* Signature Electric Volt Lime */
  --color-brand-volt-light: #F9FFE5;    /* High-contrast Volt Tint / Highlight */
  --color-brand-olive: #585E44;         /* Mid-tone Olive Accent */
  --color-brand-olive-dark: #2F3126;    /* Deep Olive Border Tone */

  /* Dark Canvas & Background Surfaces */
  --color-bg-base: #000000;            /* True OLED Canvas Black */
  --color-surface-base: #0E100F;        /* Dark Charcoal Base Surface */
  --color-surface-card: #161A18;        /* Primary Card & Container Background */
  --color-surface-card-translucent: rgba(22, 26, 24, 0.8);
  --color-surface-card-glass: rgba(22, 26, 24, 0.6);
  --color-surface-subtle: #101011;      /* Secondary Dark Panel */
  --color-surface-border: #2B2B2C;      /* Secondary Border Tone */

  /* Typography Colors */
  --color-text-primary: #F9FFE5;        /* Crisp Off-White Volt Headings */
  --color-text-secondary: #BBC1A7;      /* Secondary Muted Lime-Gray Body */
  --color-text-muted: #606266;          /* Tertiary Neutral Gray */
  --color-text-pure-white: #FFFFFF;     /* Contrast White Elements */

  /* Micro-Highlight Overlays */
  --color-overlay-white-subtle: rgba(255, 255, 255, 0.03);
  --color-overlay-white-glow: rgba(255, 255, 255, 0.08);
}
```

### Complete Token Table

| Framer Internal Token | CSS Variable Value | Semantic Purpose | Tailwind CSS Mapping |
| :--- | :--- | :--- | :--- |
| `--token-e26cb5bb-4788-4822-b78d-8e8fc7f741b8` | `#000000` | Canvas Background | `bg-black` |
| `--token-141e28a4-e057-43e4-ac74-60c0588933fd` | `#0E100F` | Section Alt Surface | `bg-[#0e100f]` |
| `--token-f494e65c-542e-4800-8321-8cc382678431` | `#161A18` | Card Background | `bg-[#161a18]` |
| `--token-863fbcb2-d9f2-4fa2-8f77-54cc9892095e` | `rgba(22, 26, 24, 0.8)` | Frosted Card Surface | `bg-[#161a18]/80` |
| `--token-60e80955-6a00-4025-b930-d753d40d1742` | `#2F3126` | Card & Panel Border | `border-[#2f3126]` |
| `--token-26137229-a485-4aeb-b73e-17c9e7d87ad5` | `#585E44` | Olive Accent / Divider | `border-[#585e44]` |
| `--token-ec927806-e487-479f-a6c9-295366bd19ec` | `#F3FFC9` | Primary Brand Accent | `bg-[#f3ffc9]`, `text-[#f3ffc9]` |
| `--token-17679c08-f6a5-4cf0-b4e5-3c4fcb8b7a9b` | `#F9FFE5` | Headline Primary Text | `text-[#f9ffe5]` |
| `--token-0b26d712-cbcf-4ace-a7c0-88344a26d4c7` | `#BBC1A7` | Body Text Default | `text-[#bbc1a7]` |
| `--token-9c1f1ed3-535d-4ea9-8434-459ee012b648` | `#FFFFFF` | Contrast Highlights | `text-white` |
| `--token-41fed3d9-2675-4595-a795-ca0ac034b3f1` | `rgba(255, 255, 255, 0.03)` | Subtle Light Wash | `bg-white/[0.03]` |
| `--token-67d981e7-2754-44dc-bd50-7adae26c5928` | `#606266` | Neutral Dark Accent | `text-[#606266]` |

---

## 3. Typography Hierarchy & Specifications

The typography system relies on two fonts:
1. **Geist**: For bold modern display headlines, uppercase badges, and numerical metrics.
2. **Inter**: For clean, legible body copy, navigation links, and paragraph text.

### Font Configurations
* **Geist Display (WOFF2):**
  - Weights: `700` (Bold)
  - Features: Optical kerning, tight tracking (`-0.02em` to `-0.03em`)
* **Inter UI (WOFF2):**
  - Weights: `400` (Regular), `700` (Bold), `900` (Black), `Italic`
  - Features: OpenType features enabled: `"cv09" on, "cv03" on, "cv04" on, "cv11" on`

### Typographic Scale

| Level | Desktop Size / Line-Height | Mobile Size / Line-Height | Weight | Tracking | Target Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | `68px` / `1.1em` (`74.8px`) | `36px` / `1.15em` (`41.4px`) | 700 (Geist) | `-0.03em` | Hero main headlines |
| **Headline 1** | `48px` / `1.15em` (`55.2px`) | `28px` / `1.2em` (`33.6px`) | 700 (Geist) | `-0.025em` | Page main titles (About, Services) |
| **Headline 2** | `36px` / `1.2em` (`43.2px`) | `24px` / `1.25em` (`30px`) | 700 (Geist) | `-0.02em` | Section headers |
| **Headline 3** | `22px` / `1.3em` (`28.6px`) | `18px` / `1.3em` (`23.4px`) | 700 (Geist) | `-0.01em` | Service card titles, pricing numbers |
| **Headline 4** | `18px` / `1.4em` (`25.2px`) | `16px` / `1.4em` (`22.4px`) | 600 (Inter) | `0em` | Sub-card headings, feature pills |
| **Lead Body** | `18px` / `1.5em` (`27px`) | `15px` / `1.5em` (`22.5px`) | 400 (Inter) | `0em` | Hero descriptions, pull quotes |
| **Standard Body** | `16px` / `1.5em` (`24px`) | `14px` / `1.5em` (`21px`) | 400 (Inter) | `0em` | General paragraphs, card copy |
| **Caption / Meta** | `13px` / `1.4em` (`18.2px`) | `12px` / `1.4em` (`16.8px`) | 500 (Inter) | `0.02em` | Dates, badges, categories |

---

## 4. Spacing, Layout & Container Specifications

### Container Dimensions
* **Maximum Viewport Outer Wrapper:** `1460px` with `padding-inline: 30px` (Desktop)
* **Standard Content Grid Max-Width:** `1200px` (Desktop)
* **Laptop Viewport Max-Width:** `1024px` / `960px`
* **Tablet Viewport Constraint:** `810px` with `padding-inline: 24px`
* **Mobile Viewport Constraint:** `390px` / `375px` with `padding-inline: 16px`
* **Long-form Reading Column (Legal/Blog):** `800px` centered

### Vertical Spacing Cadence
* **Section Padding (Desktop):** `py-24` to `py-32` (`96px` – `128px`)
* **Section Padding (Tablet):** `py-16` to `py-20` (`64px` – `80px`)
* **Section Padding (Mobile):** `py-12` (`48px`)
* **Element Gap Hierarchy:**
  - Standard Card Grid Gap: `gap-6` to `gap-8` (`24px` – `32px`)
  - Sub-element Gap: `gap-4` (`16px`)
  - Inline Pill/Tag Gap: `gap-2` to `gap-3` (`8px` – `12px`)

---

## 5. Border Radius & Structural Geometry

* **Pill Badges & Buttons:** `rounded-full` (`9999px`) — Used for all primary/secondary CTA buttons and status pills.
* **Hero Media & Master Cards:** `rounded-[30px]` (`30px`) — Premium soft curves on large showcase cards.
* **Standard Cards & Feature Containers:** `rounded-[20px]` (`20px`) — Service cards, case study previews, testimonial blocks.
* **Inputs, Dropdowns & Small Panels:** `rounded-[10px]` (`10px`) — Form controls, search inputs, tags.

---

## 6. Elevation, Glassmorphism & Shadow Profiles

* **Subtle Glass Card:**
  ```css
  background: rgba(22, 26, 24, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid #2F3126;
  box-shadow: 0px 2px 4px 0px rgba(5, 8, 12, 0.1);
  ```
* **Elevated Floating Card (Navbar / Modal):**
  ```css
  background: rgba(14, 16, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(243, 255, 201, 0.15);
  box-shadow: 0px 10px 26px -4.5px rgba(0, 0, 0, 0.4);
  ```
* **Hover Accent Glow (Service / CTA Card):**
  ```css
  border-color: rgba(243, 255, 201, 0.4);
  box-shadow: 0px 0px 30px -5px rgba(243, 255, 201, 0.12);
  ```

---

## 7. Gradients & Textures

1. **Horizontal Fade Gradients (for Logo Marquee & Sliders):**
   - Left Edge Mask: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)`
   - Right Edge Mask: `linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)`
2. **Hero Radial Ambient Glow:**
   - Center Spotlight: `radial-gradient(circle at 50% 20%, rgba(88, 94, 68, 0.25) 0%, rgba(0, 0, 0, 0) 70%)`
3. **Card Noise Texture:**
   - Subtle procedural SVG noise pattern at 4% opacity over dark charcoal surfaces to give tactile depth.
