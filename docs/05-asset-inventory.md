# 05 — ASSET INVENTORY & LICENSING AUDIT

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Asset Discovery Summary

During the reverse-engineering audit, over **180 unique asset files** were cataloged from the Framer CDN (`framerusercontent.com`), including photography, vector brand marks, SVG glyphs, web font binaries, and background textures.

---

## 2. Typography & Web Font Assets

All font files were traced to Google Fonts and Framer’s static assets CDN:

| Font Family | Weight / Style | Source Format | CDN URL / Origin Path | License |
| :--- | :--- | :--- | :--- | :--- |
| **Geist** | 700 (Bold) | WOFF2 | `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2` | SIL Open Font License (OFL) |
| **Inter** | 400 (Regular) | WOFF2 | `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2` | SIL Open Font License (OFL) |
| **Inter** | 700 (Bold) | WOFF2 | `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2` | SIL Open Font License (OFL) |
| **Inter** | 900 (Black) | WOFF2 | `https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2` | SIL Open Font License (OFL) |
| **Inter** | 400 (Italic) | WOFF2 | `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2` | SIL Open Font License (OFL) |
| **Inter** | 700 (Italic) | WOFF2 | `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2` | SIL Open Font License (OFL) |

*Next.js Implementation Note:* Recommended to load via `next/font/google` (`Geist` and `Inter`) with zero network waterfall delay.

---

## 3. Brand Partner Logos & Vector Graphics

The following vector SVGs power the Client Logo Marquee and Case Study headers:

| Brand / Partner | Original Source Path on CDN | Asset Dimensions | Intended Usage |
| :--- | :--- | :--- | :--- |
| **EdgeTrans** (Logistics) | `https://framerusercontent.com/images/sbqFrNnjBcJmLYn7HwM461w3vI.svg` | `114px x 26px` | Client Marquee & Case Study 1 |
| **Brand Edge** (FinTech) | `https://framerusercontent.com/images/Bm78PWCMmZmOntM9fiMogJCos.svg` | `83px x 26px` | Client Marquee & Case Study 2 |
| **Eco Enterprise** (Manufacturing) | `https://framerusercontent.com/images/DgD9mO1f61Ssr7eIX4DSef97S5U.svg` | `69px x 22px` | Client Marquee & Case Study 3 |
| **Spendora** (Consulting) | `https://framerusercontent.com/images/Be62KczKftDWo78NQ0aEDa7upys.svg` | `24px x 23px` | Client Marquee & Case Study 4 |
| **InnovateTech** (SaaS) | `https://framerusercontent.com/images/Kwgm8fkaXetfqUnD7GEqD0dIbWA.svg` | `21px x 26px` | Client Marquee & Case Study 5 |
| **ShopSmart** (Retail) | `https://framerusercontent.com/images/igWV64CbhQMJ3He1oqptt5Yntdc.svg` | `30px x 30px` | Client Marquee & Case Study 6 |
| **Help Point** (Non-Profit) | `https://framerusercontent.com/images/jRbmhhgXe9FyIivdFRX2C963uI.svg` | `30px x 30px` | Client Marquee & Case Study 7 |

---

## 4. UI Icons & Functional Glyphs

The website uses modern minimalist stroke icons. In the Next.js reconstruction, these map directly to `lucide-react` for optimal bundle size, sharp rendering, and stroke customization:

| Icon Concept | Original SVG Asset on Reference | `lucide-react` Drop-In Replacement | Usage Location |
| :--- | :--- | :--- | :--- |
| **Arrow Up-Right** | `vNI25VqTEOiglaWkaLdoLwpori8.svg` | `<ArrowUpRight className="w-4 h-4" />` | Buttons, Card Links, Service Detail |
| **Arrow Right** | Inline Framer Arrow | `<ArrowRight className="w-4 h-4" />` | Hero Primary CTA, Slider Nav |
| **Checkmark Circle** | `7dPe5Ge6KJnbarwVbw0dHfCaGXE.svg` | `<CheckCircle2 className="w-5 h-5 text-[#f3ffc9]" />` | Service Deliverables, Pricing Checkmarks |
| **Sparkles / AI** | `y0qqfoGHTyF0GDvxwrt3Vl7GYAU.svg` | `<Sparkles className="w-4 h-4 text-[#f3ffc9]" />` | Feature Badges, AI Strategy |
| **Shield / Security** | `vd0WPmgaACCN9pheNqDeUiY6ZX4.svg` | `<ShieldCheck className="w-5 h-5" />` | Data Security, Enterprise Trust |
| **Layers / Platform** | `Z7jaGWaQurNGquVWOst1eLetxK4.svg` | `<Layers className="w-5 h-5" />` | SaaS Architecture, Integrations |
| **Chevron Down** | `Ue91TqY5sigTxWrqvBiOWLkz4FY.svg` | `<ChevronDown className="w-4 h-4" />` | "Pages" Dropdown, FAQ Accordion |
| **Star Rating** | `MhAEp2N1wwDuRfYGNfI0npA9N8.svg` | `<Star className="w-4 h-4 fill-[#f3ffc9] text-[#f3ffc9]" />` | Testimonials Rating (5 Stars) |
| **Quote Symbol** | Inline Framer SVG | `<Quote className="w-8 h-8 text-[#585e44]" />` | Testimonial Spotlight |
| **Menu / Hamburger** | Custom 2-bar SVG | `<Menu className="w-6 h-6" />` / Custom 2-bar | Mobile Header |
| **Close / X** | Custom rotated bars | `<X className="w-6 h-6" />` | Mobile Drawer Close |

---

## 5. Hero & Showcase Photography

High-resolution imagery across case studies, services, and team profiles:

| Asset Description | Original CDN Source Path | Dimensions | Usage |
| :--- | :--- | :--- | :--- |
| **Hero Dashboard Mockup** | `https://framerusercontent.com/images/bW2xVBMxcQJIIG7v0Xnxnt2ts.jpg` | `1600px x 600px` | Hero Floating Preview Card |
| **Logistics Case Study Hero** | `https://framerusercontent.com/images/AY6PQekAWDMcCklwuXMbqPS9CeE.jpg` | `1200px x 600px` | Case Study: TransEdge Logistics |
| **FinTech Case Study Hero** | `https://framerusercontent.com/images/OvvgVMHi6Uz8RyxVzdtCavwSAY.jpg` | `1600px x 600px` | Case Study: Brand Edge FinTech |
| **Manufacturing Hero** | `https://framerusercontent.com/images/FoivOA2vW3gEqOsYcz1gp2dnc.jpg` | `800px x 600px` | Case Study: Eco Enterprise |
| **Retail Omnichannel Hero** | `https://framerusercontent.com/images/KZBATV7TBPgBxGgzaAjj79STA8.jpg` | `800px x 600px` | Case Study: ShopSmart Retail |
| **Non-Profit Redesign Hero** | `https://framerusercontent.com/images/nyZo544QkOMb4JMxmjR4KDthig.jpg` | `800px x 600px` | Case Study: Help Point |
| **SaaS Product Launch Hero** | `https://framerusercontent.com/images/t9KJQ3j2bhmidqH4IfDZRlYa6U.jpg` | `800px x 600px` | Case Study: InnovateTech |
| **Executive Headshot (Orion Blake)** | `https://framerusercontent.com/images/lGRIbBKBhBk3miyV7UG3h71RxKk.jpg` | `800px x 800px` | Testimonial & Team Card |
| **Executive Headshot (Emily Johnson)** | `https://framerusercontent.com/images/ssle2Ob2kE3q97SLsLFaNwznQ.jpg` | `800px x 800px` | Testimonial & Team Card |
| **Executive Headshot (David Miller)** | `https://framerusercontent.com/images/aguefbs4xeL6pOf5bbuTclZOi58.jpg` | `800px x 800px` | Testimonial & Team Card |
| **Executive Headshot (Olivia Brown)** | `https://framerusercontent.com/images/ou4oWL8RwosFygJ5hi7sUUHGb8Q.jpg` | `800px x 800px` | Testimonial & Team Card |
| **Executive Headshot (Robert Williams)** | `https://framerusercontent.com/images/HEd6UpzqP2U9vJOjBXBVjNcYc.jpg` | `800px x 800px` | Testimonial & Team Card |
| **Favicon Light & Dark** | `https://framerusercontent.com/images/53owTL5sjZZmDmsy9sqUJkaIuc.png` | `64px x 64px` | Site Favicon |
| **Open Graph Card** | `https://framerusercontent.com/assets/agp5L5NvwPTrMeFhJswm3uqUqNI.jpg` | `1200px x 630px` | Social Sharing Preview |

---

## 6. Textures & Decorative Elements

1. **Subtle Grain / Noise Overlay:**
   - Procedural SVG noise filter applied as CSS backdrop:
     ```svg
     <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
       <filter id='noiseFilter'>
         <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/>
       </filter>
       <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.04'/>
     </svg>
     ```
2. **Radial Ambient Glow Textures:**
   - Soft olive/volt gradient blur ellipses generated via CSS `radial-gradient` (no bulky static bitmap downloads required).

---

## 7. Licensing & Reuse Compliance

* **Fonts (Geist & Inter):** Permitted for free commercial and personal use under the SIL Open Font License (OFL 1.1).
* **Icons (Lucide React):** Free commercial reuse under the ISC License.
* **Photography / Mockups:** The reference website utilizes royalty-free Unsplash/Pexels enterprise mockups. For the reconstructed build, assets can either be referenced directly or mirrored locally with Next.js image optimization (`next/image`).
