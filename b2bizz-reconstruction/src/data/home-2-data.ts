export interface ClientLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeaturedCaseStudy {
  badge: string;
  category: string;
  title: string;
  href: string;
  imageSrc: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export interface HomeTwoServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  href: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
}

export interface HomeTwoMetric {
  value: string;
  label: string;
  iconSrc: string;
}

export interface EndorsementItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarSrc: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
  features: string[];
}

export interface RecentArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  imageSrc: string;
  href: string;
}

export interface AwardBadge {
  title: string;
  iconSrc: string;
}

export const HOME_TWO_DATA = {
  hero: {
    headline: "Engineering Digital Transformation. Empowering What's Next.",
    subtitle:
      "Empowering businesses through intelligent technology, enterprise solutions and strategic consulting. We help businesses navigate complexity, streamline operations and embrace opportunities.",
    cta: {
      text: "Explore Our Solutions",
      href: "/service",
    },
    featuredClientsLabel: "Trusted Enterprise Partners",
    clientLogos: [
      { src: "/icons/DgD9mO1f61Ssr7eIX4DSef97S5U.svg", alt: "Client 1", width: 69, height: 22 },
      { src: "/icons/LBCUcKxNdGS0IytviptLk5dv8e4.svg", alt: "Client 2", width: 93, height: 21 },
      { src: "/icons/f9uKyL9ZyMHw2ngdN3YDtOHsuks.svg", alt: "Client 3", width: 124, height: 26 },
      { src: "/icons/iI7LXBxSt06VL0YQik2ZCLwSw4.svg", alt: "Client 4", width: 84, height: 26 },
      { src: "/icons/nCW6l1WMUMEhDShqZscu3gFrVNo.svg", alt: "Client 5", width: 108, height: 26 },
      { src: "/icons/Bm78PWCMmZmOntM9fiMogJCos.svg", alt: "Client 6", width: 83, height: 26 },
    ],
    featuredCaseStudy: {
      badge: "Featured case study",
      category: "Web Application",
      title: "Lead generation boost for a B2B logistics company",
      href: "/case-study/lead-generation-boost-for-a-b2b-logistics-company",
      imageSrc: "/images/case-study-transedge.jpg",
      metrics: [
        { value: "2.5X", label: "Qualified inquiry boost" },
        { value: "38%", label: "Bounce rate dropped" },
      ],
    },
  },

  services: {
    headline: "Integrated Solutions. One Technology Partner.",
    cta: {
      text: "Explore All Solutions",
      href: "/service",
    },
    items: [
      {
        id: "web-apps",
        title: "Web Application Development",
        description: "ESI develops customized web applications designed to simplify IT complexity, streamline workflows and synchronize business operations.",
        tags: ["Custom Web Apps", "Workflow Optimization", "Scalable Architecture"],
        imageSrc: "/images/gdRM7GW5TQGv1DnZNScYVrTUQE.jpg",
        href: "/service/web-application-development",
      },
      {
        id: "mobile-apps",
        title: "Mobile Application Development",
        description: "ESI provides mobile application development expertise across modern platforms, supporting businesses throughout the lifecycle.",
        tags: ["Cross-Platform", "Lifecycle Support", "User Experience"],
        imageSrc: "/images/1b3nodcFE17MeyegY5o26I9LyYM.jpg",
        href: "/service/mobile-application-development",
      },
      {
        id: "enterprise-solutions",
        title: "Enterprise Solutions",
        description: "ESI provides enterprise technology solutions focused on system integration, standardized architecture and component-based technology environments.",
        tags: ["System Integration", "Standardized Architecture", "Process Efficiency"],
        imageSrc: "/images/case-study-eco-enterprise.jpg",
        href: "/service/enterprise-solutions",
      },
      {
        id: "business-consulting",
        title: "Business Consulting",
        description: "ESI provides management consulting services addressing critical challenges across strategy, operations, technology, and organizational transformation.",
        tags: ["Specialist Resourcing", "Digital Transformation", "Operations Advisory"],
        imageSrc: "/images/case-study-consulting-shift.jpg",
        href: "/service/business-consulting",
      },
    ] as HomeTwoServiceItem[],
  },

  mission: {
    headline: "Our Mission & Commitment",
    statement:
      "Our mission is to enhance the business growth of our customers through creative design and development, delivering high-quality solutions that create value and provide a reliable competitive advantage for clients around the world.",
    description:
      "Customer satisfaction comes first. We believe in standardized business processes, high-quality solutions, timely delivery, constant communication and reliable operations.",
    stats: [
      { value: "100%", label: "Customer satisfaction commitment" },
      { value: "2", label: "Global presence hubs (India & USA)" },
      { value: "4", label: "Core integrated practices" },
    ],
    cta: {
      text: "Discover ESI",
      href: "/about",
    },
  },

  sectors: {
    headline: "Practices tailored to your industry",
    items: [
      {
        id: "technology",
        title: "Technology Solutions",
        description: "Custom web applications, mobile platforms, and cloud architecture built to scale.",
        imageSrc: "/images/Zi0oKIBGmUqx63MJ5ToBVKKEg8U.jpg",
        iconSrc: "/icons/iUO7kHqYzrumeUO3sPWNv5RaWU.svg",
      },
      {
        id: "manufacturing",
        title: "Manufacturing & Industry",
        description: "Standardized component-based technology environments and ERP/CRM telemetry.",
        imageSrc: "/images/3IkbFdGrInFuAe651xdHTPvblJk.jpg",
        iconSrc: "/icons/chCX7SA17OiIkCnthT0PFlL0iFU.svg",
      },
      {
        id: "logistics",
        title: "Logistics & Supply Chain",
        description: "Workflow synchronization, automated shipment tracking, and reduced operational latency.",
        imageSrc: "/images/ssle2Ob2kE3q97SLsLFaNwznQ.jpg",
        iconSrc: "/icons/cpS5vpDqkwONmm4ANafMTB2nzQ.svg",
      },
      {
        id: "resourcing",
        title: "Specialist Resourcing",
        description: "Experienced talent across technology, tourism, translation, and international trading.",
        imageSrc: "/images/H0hRoAnIkQv54FIiHMwpBrGr2bM.jpg",
        iconSrc: "/icons/Z7jaGWaQurNGquVWOst1eLetxK4.svg",
      },
    ] as SectorItem[],
  },

  metrics: [
    {
      value: "4",
      label: "Core integrated technology practices",
      iconSrc: "/icons/yxFAET3M9RHNyUQ7EAiOicUA2c.svg",
    },
    {
      value: "2",
      label: "Global presence hubs (India & USA)",
      iconSrc: "/icons/faFEiVDIGpShRVZGYWZxmizgQ.svg",
    },
    {
      value: "100%",
      label: "Customer satisfaction and quality focus",
      iconSrc: "/icons/Qmp1HQeLB3bhe86l6p6cXmKx8.svg",
    },
    {
      value: "24/7",
      label: "Lifecycle support and dependable operations",
      iconSrc: "/icons/m7HT3SunkeIWyEbDn6XVPojvTA.svg",
    },
  ] as HomeTwoMetric[],

  endorsements: {
    headline: "What our clients say about Emerald System Integrators",
    backdropImage: "/images/ou4oWL8RwosFygJ5hi7sUUHGb8Q.jpg",
    items: [
      {
        id: "pranwant",
        quote:
          "The website structure and easy access to relevant content made our collaboration smooth and impactful. ESI delivered exactly what was needed.",
        author: "Pranwant",
        role: "Blog Writer",
        avatarSrc: "/images/avatar-david-green.jpg",
      },
      {
        id: "amarnath",
        quote:
          "Outstanding team quality and flawless project execution. Their engineering capabilities and consulting expertise set them apart.",
        author: "Amarnath",
        role: "Freelancer",
        avatarSrc: "/images/avatar-orion-blake.jpg",
      },
      {
        id: "ravi-kumar",
        quote:
          "Timely delivery, constant communication, and high professionalism throughout the application development lifecycle.",
        author: "Ravi Kumar",
        role: "Quality Analyst",
        company: "Eco Enterprise",
        avatarSrc: "/images/avatar-michael-brown.jpg",
      },
      {
        id: "shivani-kumari",
        quote:
          "Exceptional commitment and dedication to our business requirements. ESI helped streamline our operations effortlessly.",
        author: "Shivani Kumari",
        role: "Store Owner",
        company: "Spendora Advisory",
        avatarSrc: "/images/avatar-sarah-johnson.jpg",
      },
    ] as EndorsementItem[],
  },

  pricing: {
    headline: "Flexible Engagement Models for Every Business Stage",
    discountBadge: "Annual Partnership Savings",
    checkIconSrc: "/icons/igWV64CbhQMJ3He1oqptt5Yntdc.svg",
    plans: [
      {
        id: "starter",
        name: "Standardized Project",
        monthlyPrice: 1500,
        yearlyPrice: 1050,
        description: "Targeted application development or specific workflow integration initiatives.",
        ctaText: "Request Scope",
        ctaHref: "/contact",
        popular: false,
        features: [
          "Requirement architecture & milestone roadmapping",
          "Custom web or mobile application development",
          "Standardized component integration",
          "Dedicated milestone delivery and quality assurance",
        ],
      },
      {
        id: "growth",
        name: "Enterprise Growth",
        monthlyPrice: 3500,
        yearlyPrice: 2450,
        description: "Full-scale technology solutions, system integration, and specialist resourcing.",
        ctaText: "Explore Partnership",
        ctaHref: "/contact",
        popular: true,
        features: [
          "End-to-end application lifecycle development",
          "Enterprise ERP & CRM systems integration",
          "Specialist resourcing & dedicated engineering team",
          "Continuous performance optimization & SLAs",
          "Priority operational support",
        ],
      },
      {
        id: "enterprise",
        name: "Strategic Advisory",
        monthlyPrice: 5500,
        yearlyPrice: 3850,
        description: "Holistic business consulting, digital transformation, and multi-region operations.",
        ctaText: "Connect with Advisors",
        ctaHref: "/contact",
        popular: false,
        features: [
          "Executive technology & management consulting",
          "Customer Value Management (CVM) frameworks",
          "Cross-border operations & staffing governance",
          "Component architecture audits & modernization",
          "24/7 dedicated enterprise response team",
        ],
      },
    ],
  },

  articles: {
    headline: "Technology & Consulting Insights",
    note: "Explore blueprints, architectural guides, and transformation strategies from ESI",
    cta: {
      text: "View all insights",
      href: "/blog",
      arrowIcon: "/icons/lF4qvKFOOsAkrC72wGno0l1d2kg.svg",
    },
    items: [
      {
        id: "peak-concurrency",
        title: "How to Scale Enterprise Web Applications for Peak Concurrency in 2026",
        category: "Web Applications",
        date: "Feb 12, 2026",
        imageSrc: "/images/img-Gey8JdeAVmsT.png",
        href: "/blog/how-to-scale-enterprise-web-applications-for-peak-concurrency",
      },
      {
        id: "erp-crm-integration",
        title: "Component-Based Architecture: Unifying Disparate ERP and CRM Systems",
        category: "Enterprise Solutions",
        date: "Jan 28, 2026",
        imageSrc: "/images/case-study-eco-enterprise.jpg",
        href: "/blog/component-based-architecture-unifying-erp-crm-systems",
      },
      {
        id: "specialist-resourcing",
        title: "The Strategic Role of Specialist Resourcing in Technology Transformation",
        category: "Business Consulting",
        date: "Jan 15, 2026",
        imageSrc: "/images/about-team.jpg",
        href: "/blog/strategic-role-specialist-resourcing-technology-transformation",
      },
    ],
  },

  cta: {
    headline: "Partner with Emerald System Integrators to engineer what's next.",
    buttonText: "Schedule a Consultation",
    buttonHref: "/contact",
    awards: [
      { title: "Standardized Processes", iconSrc: "/icons/Gx6UBmzydtzvFxaR6nNq8iTZoXs.svg" },
      { title: "Quality Delivery", iconSrc: "/icons/NTvSIOmgsP6rrvHPAQBQW9y1vA.svg" },
      { title: "Global Presence (India & USA)", iconSrc: "/icons/Gx6UBmzydtzvFxaR6nNq8iTZoXs.svg" },
      { title: "Customer Satisfaction First", iconSrc: "/icons/NTvSIOmgsP6rrvHPAQBQW9y1vA.svg" },
    ],
  },
};
