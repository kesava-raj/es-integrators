# 01 — PAGE & ROUTE INVENTORY

**Project:** B2Bizz Reverse-Engineering & Reconstruction  
**Reference Target:** [https://b2bizz-wbs.framer.website/](https://b2bizz-wbs.framer.website/)  
**Audit Date:** 2026-11-15  
**Auditor:** Senior Frontend Reverse Engineer & Web Animation Specialist  

---

## 1. Executive Summary & Sitemap Architecture

A comprehensive crawl and audit of `https://b2bizz-wbs.framer.website/` revealed **21 distinct public routes**, categorized into primary landing pages, service catalog & detail pages, case study portfolio & detail pages, thought leadership blog articles, company/legal pages, and utility pages.

```
b2bizz-wbs.framer.website/
├── / (Home — Main Dark Volt)
├── /home-2 (Home 2 — Alternative GTM Variant)
├── /about (Company Story, Leadership, Values)
├── /service (Services Index)
│   ├── /service/b2b-website-design-development
│   ├── /service/custom-saas-solutions
│   ├── /service/crm-erp-integrations
│   ├── /service/enterprise-digital-strategy
│   └── /service/data-driven-marketing
├── /case-study (Case Studies Index)
│   ├── /case-study/lead-generation-boost-for-a-b2b-logistics-company
│   ├── /case-study/scalable-saas-platform-for-a-fintech-startup
│   ├── /case-study/enterprise-resource-integration-for-a-manufacturing-firm
│   ├── /case-study/strategic-digital-shift-for-a-b2b-consulting-agency
│   ├── /case-study/saas-product-launch
│   ├── /case-study/digital-transformation-for-retail
│   └── /case-study/website-redesign-for-a-non-profit
├── /blog (Blog & Insights Index)
│   ├── /blog/how-to-scale-your-b2b-sales-funnel-in-2026
│   ├── /blog/the-power-of-market-research-in-b2b-strategy
│   ├── /blog/choosing-the-right-crm-for-your-b2b-sales-team
│   ├── /blog/how-to-use-analytics-to-make-smarter-decisions
│   ├── /blog/10-must-have-features-in-a-saas-platform
│   ├── /blog/best-practices-for-keeping-your-data-secure
│   └── /blog/smart-automation-in-modern-manufacturing
├── /contact (Lead Capture & Office Locations)
├── /changelog (Product/Service Release Notes & Versions)
├── /legal-pages/privacy-policy (Legal Compliance & Data Practices)
└── /404 (Custom Error Route)
```

---

## 2. Core Routes Deep Dive

### 2.1. Homepage (`/`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Meta Description:** Empower your B2B business with result-driven consulting. From strategy to execution, we deliver measurable growth through expert digital and operational solutions.
* **Layout Classification:** Single-column dark stacked canvas with container constraints (`max-w-[1460px]` wrapper, inner content `1200px`).
* **Sections in Order:**
  1. **Global Header / Sticky Navbar**: Floating frosted bar, logo ("B2bizz"), navigation links, Pages dropdown, primary pill CTA "Request a consultation".
  2. **Hero Section**:
     - Headline (H1): *"Built for B2B, focused on results."*
     - Subtitle: *"Empower your B2B business with result-driven consulting. From strategy to execution, we deliver measurable growth through expert digital and operational solutions."*
     - CTAs: Primary "Explore our services" (`/service`) + Secondary "More about us" (`/about`).
     - Hero Visual Card: Interactive dashboard preview card displaying live growth metrics (+250%, 99.9% uptime).
  3. **Client Logo Marquee (Ticker)**: Infinite horizontal loop with 7+ enterprise partner logos.
  4. **Key Metrics / Impact Bar**:
     - Headline (H2): *"Informed strategy, Operational strength, and sustainable results."*
     - Stat Counters: `4X` Pipeline Expansion, `5+` Enterprise Tier, `100%` Retention Rate, `20+` Global Deployments.
  5. **Industry Solutions Showcase**:
     - Headline (H2): *"Accelerating B2B growth across diverse industries"*
     - 5 interactive industry cards: Logistics, FinTech, Manufacturing, SaaS, Retail.
  6. **Value Proposition / Competitive Moat**:
     - Headline (H2): *"What makes us the right partner"*
     - 3-column feature cards with subtle border illumination.
  7. **Services Catalog Section**:
     - Headline (H2): *"Expert services that move your business forward"*
     - 5 comprehensive service cards with inline tags and "View detail" links.
  8. **Featured Case Studies Showcase**:
     - Headline (H2): *"Proven performance, Measurable results"*
     - Featured cards:
       - TransEdge Logistics (+2.5X B2B lead uplift, 38% bounce drop)
       - Brand Edge Fintech (+50% follower growth, 30% campaign ROI)
       - Eco Enterprise (+25% lead flow, 70% bounce drop)
       - Spendora Advisory (+40% engagement, 60% reduced no-shows)
  9. **Methodology & Execution Framework**:
     - Headline (H2): *"Our method for strategic B2B growth"*
     - 4-phase structured pipeline: Discovery -> Strategy -> Implementation -> Optimization.
  10. **Testimonials Slider**:
      - Headline (H2): Client quote *"Working with B2bizz was a game-changer for our B2B strategy..."*
      - Client profile: Orion Blake, COO.
  11. **Conversion Banner (Pre-footer CTA)**:
      - Headline (H2): *"Is your B2B business ready for the next level?"*
      - Micro-copy (H3): *"Time to level up your B2B game?"* / *"Need expert help to scale fast?"*
      - Buttons: "Book a free call" & "Contact now" (`/contact`).
  12. **Global Footer**: Multi-column links, newsletter subscription form, copyright, legal disclaimer.

---

### 2.2. Alternative Homepage (`/home-2`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth (Variant 2)
* **Strategic Intent:** Growth & product-led variant focusing on SaaS MVPs and consulting pricing tiers.
* **Sections in Order:**
  1. **Navbar** (Consistent global component).
  2. **Hero Section (Variant)**:
     - Headline (H1): *"Delivering insight driven strategy for B2B success"*
     - Hero Visual Card: Featured non-profit website redesign showcase card.
     - CTAs: "Explore our services" & "Get started".
  3. **Services Quick-Grid**:
     - Headline (H2): *"Smart solutions for scaling B2B operations"*
     - 4 categorized service blocks with icon accents.
  4. **Core Mission Statement**:
     - Headline (H2): *"Smarter decisions. Stronger outcomes. Lasting Value."*
  5. **Sector Matrix Tabs / Cards**:
     - Headline (H2): *"Serving businesses across every sector"*
     - Tabs: Healthcare, Financial Services, Technology, Manufacturing, Supply Chain.
  6. **Social Proof & Client Endorsements**:
     - Headline (H2): *"Trusted by B2B leaders worldwide"*
  7. **Consulting Plans & Pricing Tiers**:
     - Headline (H2): *"The right consulting plan for your business"*
     - Starter: `$1,500/month` (2x strategy sessions, ICP development, funnel review).
     - Growth: `$3,500/month` (Weekly consulting, GTM alignment, CRM reporting, priority support).
     - Enterprise: `$5,500/month` (Dedicated strategist, quarterly audits, MarTech evaluation).
  8. **Recent Insights Grid**:
     - Headline (H2): *"Recent articles"*
     - 3 latest curated blog articles.
  9. **Pre-Footer CTA Banner & Footer**:
     - Headline (H2): *"Want to join a growing list of forward-thinking companies?"*

---

### 2.3. About Page (`/about`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Headline (H1):** *"Get to know B2bizz B2B consulting"*
* **Sections in Order:**
  1. **Hero & Mission Overview**:
     - Paragraph (H2): *"We are a strategy-first B2B consulting firm dedicated to helping businesses solve complex challenges and accelerate their growth..."*
  2. **Foundational Principles**:
     - Headline (H2): *"Principles that shape our strategy"*
     - Principle cards: Integrity, Speed, Data-Driven Rigor, Long-term Partnership.
  3. **Vision & Mission Dual Split**:
     - Left block: *"Our vision"* (Next-generation B2B agility).
     - Right block: *"Our mission"* (Measurable revenue impact through technical excellence).
  4. **Executive Leadership & Team Grid**:
     - Headline (H2): *"Meet the talent behind the transformation"*
     - Member cards: Headshot, Name, Role (e.g. Orion Blake - COO, Emily Johnson - CEO, David Miller - CPO, Robert Williams - CDO), LinkedIn/X icons.
  5. **Company Growth Metrics**:
     - `4X` Revenue velocity, `5+` Global hubs, `300%` Average client ROI.
  6. **Call To Action**: *"It’s time to rethink your B2B strategy"* -> `/contact`.

---

### 2.4. Services Index (`/service`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Headline (H1):** *"Our services"*
* **Sections in Order:**
  1. **Catalog Overview**: Complete list of the 5 core enterprise services with scope tags, summaries, and "View detail" links.
  2. **Performance Metrics Strip**: `4X` Pipeline uplift, `5` Star satisfaction, `100%` Deliverable completion, `20+` Enterprise engagements.
  3. **Client Testimonial Spotlight**: Full-width quote card with client avatar.
  4. **Frequently Asked Questions (Accordion)**:
     - Headline (H2): *"Frequently asked questions"*
     - 5 collapsible questions covering engagement models, sprint durations, tech stack integrations, and ROI tracking.
  5. **Pre-footer CTA & Global Footer**.

---

### 2.5. Individual Service Detail Pages (`/service/[slug]`)
All 5 individual service routes follow a high-converting, systematic layout architecture:

| Slug | H2 Headline | Subtitle / Focus | Key Deliverables Listed | Testimonial Quote Author |
| :--- | :--- | :--- | :--- | :--- |
| `/service/b2b-website-design-development` | *B2B website design & development* | Conversion-focused websites built for speed, trust, and lead generation | Clear value messaging, smart UX, high credibility, headless CMS | Orion Blake, COO |
| `/service/custom-saas-solutions` | *Custom SaaS solutions* | Scalable, secure SaaS platforms that grow with user demand | Cloud-ready infra, intuitive UI/UX, API integrations, modular scaling | David Miller, Product Officer |
| `/service/crm-erp-integrations` | *CRM & ERP integrations* | Seamless CRM/ERP integration delivering unified data & single source truth | Custom workflows, API architecture, real-time reporting, sync optimization | Olivia Brown, Head of IT Ops |
| `/service/enterprise-digital-strategy` | *Enterprise digital strategy* | Defining actionable digital roadmaps that drive enterprise transformation | Business-tech alignment, journey optimization, risk management | Robert Williams, Digital Officer |
| `/service/data-driven-marketing` | *Data-Driven marketing* | Turning analytics into marketing decisions that drive measurable growth | Conversion rate optimization, multi-channel attribution, real-time dashboards | Emily Johnson, CEO |

**Shared Sub-Sections on Service Detail Pages:**
1. **Hero Breadcrumb & Badge**: Service category tag + Primary Heading.
2. **Core Capabilities & Approach**: 4-point bullet checklist with custom SVG tick marks.
3. **Engagement & Consulting Pricing Matrix**: 3-tier card table (Starter $1,500, Growth $3,500, Enterprise $5,500).
4. **Client Endorsement Card**: Dedicated testimonial quote from a Fortune-tier client.
5. **Cross-Sell Navigation ("Other services")**: 3 dynamic recommendation cards linking to sister services.
6. **Pre-Footer Consultation CTA**: "Is your B2B business ready for the next level?"

---

### 2.6. Case Study Index (`/case-study`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Headline (H1):** *"Our case studies"*
* **Sections in Order:**
  1. **Portfolio Grid**: 7 comprehensive case study cards displaying category badge (Web Design, SaaS Solution, Enterprise Strategy, Retail), client name, thumbnail, key metric badge (+2.5X, 60%, 20,000 users), and hover zoom effects.
  2. **Client Recognition Banner**: Clutch Global Award, Forbes Business Awards, CXO Global Awards badges.
  3. **Pre-footer CTA & Footer**.

---

### 2.7. Individual Case Study Detail Pages (`/case-study/[slug]`)
Every case study detail page implements an empirical problem-solving narrative structure:

1. **Header Metadata**: Client Name, Industry, Region, Project Duration, Budget.
2. **Project Executive Overview**: Strategic objectives and high-level scope.
3. **Phase 1: "The challenge"**: Outdated architecture, friction points, legacy systems, operational silos.
4. **Phase 2: "Our approach"**: Discovery, stakeholder alignment, wireframing, agile development sprints.
5. **Phase 3: "The solution"**: Cloud deployment, integration pipelines, conversion UI redesign.
6. **Phase 4: "Measurable results" (KPI Grid)**:
   - 4 large numerical metric callouts (e.g. `2.5X` B2B lead uplift, `38%` bounce rate drop, `4.3X` marketing ROI, `22/mo` booked slots).
7. **Client Testimonial**: Direct quote from client executive (e.g., Logan Meyer, CMO of TransEdge).
8. **Related Case Studies Carousel / Grid**: 2 sister case studies for continuous user journey.
9. **Conversion CTA**: "Schedule a consultation" (`/contact`).

---

### 2.8. Blog Index (`/blog`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Headline (H1):** *"Our blogs"*
* **Sections in Order:**
  1. **Featured Headline Article**: Large hero card for top post.
  2. **Categorized Article Grid**: 6 responsive article cards with publication date, category pill (Strategy, Analytics, CRM, Security, SaaS), reading time estimate, thumbnail image, title, and synopsis.
  3. **Newsletter Subscription Bar**: Inline email capture input with "Subscribe" CTA.

---

### 2.9. Individual Blog Article Detail Pages (`/blog/[slug]`)
* **Structure:**
  1. **Article Header**: Category pill, Publication date (e.g., `Jan 2, 2026`), Title (H1), Estimated read time.
  2. **Hero Image Banner**: Full-width high-resolution responsive visual.
  3. **Article Body**: Clean typography reading column (`max-w-[800px]`), structured H2 subheadings, bullet lists, pull quotes, highlighted callouts.
  4. **Author Bio Card**: Author photo, credentials, role.
  5. **Recent Articles Carousel**: 3 recommended articles.

---

### 2.10. Contact Page (`/contact`)
* **Title:** B2bizz - B2B Consulting Agency for Digital Growth
* **Headline (H1):** *"Get in touch"* / *"Request a consultation"*
* **Sections in Order:**
  1. **Two-Column Contact Canvas**:
     - **Left Column**: Value proposition, office addresses (e.g. New York, London), direct contact email, support phone, response time guarantee ("Within 24 hours").
     - **Right Column (Interactive Form)**:
       - Full Name (Text input)
       - Work Email (Email input)
       - Company Name (Text input)
       - Service Needed (Dropdown selector: Web Design, SaaS, CRM/ERP, Strategy, Marketing)
       - Budget Range (Radio pills: <$10k, $10k-$25k, $25k-$50k, $50k+)
       - Project Details (Textarea)
       - Submit Button ("Send inquiry")
  2. **Location Map / Visual Graphic**: Stylized dark-mode vector map.
  3. **Global Footer**.

---

### 2.11. Changelog (`/changelog`)
* **Title:** Changelog - B2bizz
* **Headline (H1):** *"Changelog"*
* **Structure:**
  - Vertical timeline layout with milestone dots connected by a subtle lime-tinted line (`#2f3126`).
  - Version releases (e.g. `v2.4.0`, `v2.3.0`, `v2.2.0`, `v1.0.0`) with release dates, version pills, change tags (`New`, `Improvement`, `Fix`), and bulleted changelog entries.

---

### 2.12. Privacy Policy (`/legal-pages/privacy-policy`)
* **Title:** Privacy policy - B2bizz
* **Headline (H1):** *"Privacy policy"*
* **Sections in Order:**
  - Last updated timestamp: `January 1, 2026`
  - Reading column layout (`max-w-4xl`)
  - 9 structured H2 subsections:
    1. Information we collect
    2. How we use your information
    3. Sharing your information
    4. Cookies & tracking technologies
    5. Data security
    6. Your rights
    7. Third-party links
    8. Changes to this policy
    9. Contact us

---

## 3. Global Navigation & CTA Matrix

### 3.1. Main Navigation Header
* **Brand Logo**: Links to `/`
* **Nav Links**:
  - `Home` -> `/`
  - `About` -> `/about`
  - `Services` -> `/service`
  - `Case Study` -> `/case-study`
  - `Blog` -> `/blog`
  - `Contact` -> `/contact`
  - **`Pages` (Dropdown Menu)**:
    - `Home 2` -> `/home-2`
    - `All Services` -> `/service`
    - `All Case Studies` -> `/case-study`
    - `Blog Articles` -> `/blog`
    - `Changelog` -> `/changelog`
    - `Privacy Policy` -> `/legal-pages/privacy-policy`
* **Primary Header Button**: "Request a consultation" -> `/contact`

### 3.2. Primary CTA Map
| Button Text | Location | Visual Style | Destination |
| :--- | :--- | :--- | :--- |
| **Request a consultation** | Navbar (Sticky) | Pill, Electric Volt (`#f3ffc9`) on Black | `/contact` |
| **Explore our services** | Hero (Home & Home-2) | Solid Electric Volt, Dark Text | `/service` |
| **More about us** | Hero Secondary | Dark Surface (`#161a18`), Border (`#2f3126`) | `/about` |
| **Get started** | Service Detail & Pricing | Solid Electric Volt | `/contact` |
| **View detail** | Service Cards Grid | Inline Text Link + Arrow SVG | `/service/[slug]` |
| **See all case studies** | Case Studies Section | Pill Outline Button | `/case-study` |
| **Book a free call** | Pre-Footer CTA Banner | Solid Electric Volt, Scale on Hover | `/contact` |
| **Contact now** | Pre-Footer Secondary CTA | Translucent Glass Border | `/contact` |
| **Subscribe** | Footer Newsletter | Rounded-lg Electric Volt Button | API Form Action |
