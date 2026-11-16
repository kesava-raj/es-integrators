export interface IndustryCard {
  id: string;
  title: string;
  imageSrc: string;
  category: string;
}

export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  iconSrc: string;
  imageSrc: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  imageSrc: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  iconSrc: string;
}

export const HOME_DATA = {
  hero: {
    badge: "B2B Consulting Agency",
    title: "Built for B2B, focused on results.",
    subtitle:
      "Empower your B2B business with result-driven consulting. From strategy to execution, we deliver measurable growth through expert digital and operational solutions.",
    primaryCta: { text: "Explore our services", href: "/service" },
    secondaryCta: { text: "More about us", href: "/about" },
    capabilities: [
      "24/7 support and optimization",
      "Customer success experts",
      "Live performance tracking",
      "Security design approach",
      "Multichannel client support",
    ],
    stats: {
      growthRate: "+250%",
      uptime: "99.9%",
      activeClients: "250+",
      retention: "100%",
    },
  },

  marquee: {
    headline: "Trusted by fast-moving B2B teams",
  },

  aboutOverview: {
    badge: "Who we are",
    title: "Informed strategy, Operational strength, and sustainable results.",
    description:
      "We specialize in empowering B2B companies with results-driven consulting solutions tailored to modern business challenges.",
    bullets: [
      "Communicate value clearly and quickly",
      "Solutions aligned with your business goals",
    ],
    cta: { text: "More about us", href: "/about" },
    imageSrc: "/images/img-drIdWgUE5zBF.jpg",
  },

  industries: [
    {
      id: "financial-services",
      title: "Financial services",
      category: "FinTech & Banking",
      imageSrc: "/images/img-H0hRoAnIkQv5.jpg",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      category: "HealthTech & Pharma",
      imageSrc: "/images/img-SiKi93XgBCO1.jpg",
    },
    {
      id: "technology",
      title: "Technology",
      category: "SaaS & Cloud Platforms",
      imageSrc: "/images/img-Zi0oKIBGmUqx.jpg",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      category: "Industry 4.0 & Supply Chain",
      imageSrc: "/images/img-3IkbFdGrInFu.jpg",
    },
    {
      id: "logistics",
      title: "Logistics & supply chain",
      category: "Freight & Operations",
      imageSrc: "/images/img-snVr8e30vWzy.jpg",
    },
  ] as IndustryCard[],

  valueProps: [
    {
      id: "expertise",
      title: "B2B expertise that matters",
      description:
        "Deep expertise in navigating B2B challenges and opportunities to deliver sustained commercial advantage.",
      iconSrc: "/icons/icon-Gx6UBmzydtzv.svg",
    },
    {
      id: "data-informed",
      title: "Data-informed, action-oriented",
      description:
        "Strategies rooted in quantitative evidence and rapid operational deployment for measurable ROI.",
      iconSrc: "/icons/icon-NTvSIOmgsP6r.svg",
    },
    {
      id: "tailored-strategies",
      title: "Tailored strategies, measurable impact",
      description:
        "Every roadmap is uniquely architected around your commercial growth objectives and operational scale.",
      iconSrc: "/icons/icon-shield-check.svg",
    },
  ] as ValuePropItem[],

  testimonial: {
    quote:
      "Working with B2bizz was a game-changer for our B2B strategy. Their team didn’t just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.",
    author: "Orion Blake",
    role: "COO",
    company: "BrandEdge Global",
    avatarSrc: "/images/avatar-orion-blake.jpg",
    bgImageSrc: "/images/img-XwCo50BibsVk.jpg",
  },

  services: [
    {
      id: "b2b-website",
      slug: "b2b-website-design-development",
      title: "B2B website design & development",
      description:
        "Conversion-focused websites built for speed, trust, and enterprise lead generation.",
      tags: ["Business website", "Corporate site", "Responsive design"],
      iconSrc: "/icons/icon-analytics.svg",
      imageSrc: "/images/img-Gey8JdeAVmsT.png",
    },
    {
      id: "custom-saas",
      slug: "custom-saas-solutions",
      title: "Custom SaaS solutions",
      description:
        "Robust, scalable SaaS platforms tailored to modern enterprise workflows and cloud scale.",
      tags: ["Cloud architecture", "Intuitive UX", "API ecosystem"],
      iconSrc: "/icons/icon-star.svg",
      imageSrc: "/images/img-gdRM7GW5TQGv.jpg",
    },
    {
      id: "crm-erp",
      slug: "crm-erp-integrations",
      title: "CRM & ERP integrations",
      description:
        "Seamless integrations connecting disconnected legacy tools into a unified data ecosystem.",
      tags: ["Workflow automation", "Unified data", "Real-time sync"],
      iconSrc: "/icons/icon-shield-check.svg",
      imageSrc: "/images/case-study-eco-enterprise.jpg",
    },
    {
      id: "digital-strategy",
      slug: "enterprise-digital-strategy",
      title: "Enterprise digital strategy",
      description:
        "Actionable transformation roadmaps aligning commercial objectives with technical capability.",
      tags: ["Digital roadmap", "Journey optimization", "Risk management"],
      iconSrc: "/icons/icon-arrow-up-right.svg",
      imageSrc: "/images/case-study-consulting-shift.jpg",
    },
    {
      id: "data-marketing",
      slug: "data-driven-marketing",
      title: "Data-driven marketing",
      description:
        "Turning quantitative analytics into high-velocity pipeline generation and multi-touch attribution.",
      tags: ["Attribution modeling", "Funnel scaling", "Conversion optimization"],
      iconSrc: "/icons/icon-analytics.svg",
      imageSrc: "/images/case-study-brand-edge.jpg",
    },
  ] as ServiceItem[],

  caseStudies: [
    {
      id: "edgetrans",
      slug: "lead-generation-boost-for-a-b2b-logistics-company",
      category: "Design & development",
      title: "Lead generation boost for a B2B logistics company",
      client: "EdgeTrans",
      challenge: "Low lead conversion from the existing legacy website.",
      solution:
        "Redesigned the digital presence with compelling narrative positioning and integrated conversion funnels.",
      stat1: { value: "2.5X", label: "B2B lead uplift" },
      stat2: { value: "38%", label: "Bounce rate dropped" },
      imageSrc: "/images/case-study-transedge.jpg",
    },
    {
      id: "brand-edge",
      slug: "scalable-saas-platform-for-a-fintech-startup",
      category: "SaaS solution",
      title: "Scalable SaaS platform for a fintech startup",
      client: "Brand Edge",
      challenge: "Delayed product iteration and sluggish market responsiveness.",
      solution:
        "Introduced agile microservices and development workflows to accelerate feature deployment velocity.",
      stat1: { value: "50%", label: "Follower base growth" },
      stat2: { value: "30%", label: "Campaign ROI achieved" },
      imageSrc: "/images/case-study-brand-edge.jpg",
    },
    {
      id: "eco-enterprise",
      slug: "enterprise-resource-integration-for-a-manufacturing-firm",
      category: "CRM & ERP integrations",
      title: "Enterprise resource integration for a manufacturing firm",
      client: "Eco Enterprise",
      challenge: "Disconnected legacy systems hindered real-time operational data access.",
      solution:
        "Integrated ERP, CRM, and supply chain tools into a unified platform for streamlined reporting.",
      stat1: { value: "25%", label: "Improved lead flow" },
      stat2: { value: "70%", label: "Bounce rate dropped" },
      imageSrc: "/images/case-study-eco-enterprise.jpg",
    },
    {
      id: "spendora",
      slug: "strategic-digital-shift-for-a-b2b-consulting-agency",
      category: "Enterprise digital strategy",
      title: "Strategic digital shift for a B2B consulting agency",
      client: "Spendora",
      challenge: "Outdated digital presence and manual client acquisition pipelines.",
      solution:
        "Implemented automated lead qualification workflows, revamped their digital brand, and launched outbound funnels.",
      stat1: { value: "40%", label: "Improved engagement" },
      stat2: { value: "60%", label: "Reduced no-shows" },
      imageSrc: "/images/case-study-consulting-shift.jpg",
    },
  ] as CaseStudyItem[],

  methodology: [
    {
      step: "Step 1",
      title: "Understand your business",
      description:
        "We dive deep into your market position, operational bottlenecks, and commercial goals to identify high-leverage growth vectors.",
      iconSrc: "/icons/icon-analytics.svg",
    },
    {
      step: "Step 2",
      title: "Build the right strategy",
      description:
        "We architect a tailored, data-backed execution roadmap combining technology, go-to-market motions, and resource allocation.",
      iconSrc: "/icons/icon-shield-check.svg",
    },
    {
      step: "Step 3",
      title: "Execute & deliver results",
      description:
        "We deploy cross-functional teams to build, launch, and optimize your systems, ensuring sustainable pipeline velocity and measurable ROI.",
      iconSrc: "/icons/icon-arrow-up-right.svg",
    },
  ] as MethodologyStep[],

  ctaBanner: {
    badge: "Ready to scale",
    title: "Is your B2B business ready for the next level?",
    primaryCtaText: "Book a free call",
    primaryCtaHref: "/contact",
    actionCards: [
      {
        title: "Time to level up your B2B game?",
        btnText: "Contact now",
        href: "/contact",
        iconSrc: "/icons/icon-arrow-up-right.svg",
      },
      {
        title: "Need expert help to scale fast?",
        btnText: "Contact our experts",
        href: "/about#team",
        iconSrc: "/icons/icon-star.svg",
      },
    ],
  },
};
