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

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatarSrc: string;
}

export const HOME_DATA = {
  hero: {
    badge: "Emerald System Integrators",
    title: "Engineering Digital Transformation. Empowering What's Next.",
    subtitle:
      "Empowering businesses through intelligent technology, enterprise solutions and strategic consulting. We help businesses navigate complexity, streamline operations and embrace opportunities through technology, specialist expertise and business consulting.",
    primaryCta: { text: "Explore Our Solutions", href: "/service" },
    secondaryCta: { text: "Discover ESI", href: "/about" },
    capabilities: [
      "Custom Web Application Development",
      "Mobile Application Lifecycle Support",
      "Enterprise System Integration",
      "Strategic Business Consulting",
      "Specialist Resourcing & Staffing",
    ],
    stats: {
      growthRate: "+250%",
      uptime: "99.9%",
      activeClients: "250+",
      retention: "100%",
    },
  },

  marquee: {
    headline: "Trusted by forward-thinking organizations worldwide",
  },

  aboutOverview: {
    badge: "About ESI",
    title: "Building the Foundation for What's Next.",
    description:
      "Emerald System Integrators partners with businesses to simplify technological complexity, strengthen operations and pursue sustainable growth. Through technology development, specialist resourcing and business consulting, we bring together the expertise and solutions organizations need to move forward.",
    bullets: [
      "Customized web, mobile, and enterprise technology solutions",
      "Specialist resourcing across technology, tourism, translation and trading",
      "Consulting support from initial setup through operations and maintenance",
      "Customer value management focused on tangible, sustainable performance",
    ],
    cta: { text: "Discover ESI", href: "/about" },
    imageSrc: "/images/esi-engineering-team.jpg",
  },

  industries: [
    {
      id: "technology",
      title: "Technology & Software",
      category: "Web & Mobile Platforms",
      imageSrc: "/images/esi-app-development.jpg",
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industry",
      category: "Component Integration",
      imageSrc: "/images/esi-enterprise-architecture.jpg",
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      category: "Workflow Synchronization",
      imageSrc: "/images/img-snVr8e30vWzy.jpg",
    },
    {
      id: "financial-services",
      title: "Financial & Enterprise",
      category: "Systems Integration",
      imageSrc: "/images/esi-ai-automation.jpg",
    },
    {
      id: "tourism-trading",
      title: "Tourism & Trading",
      category: "Specialist Resourcing",
      imageSrc: "/images/esi-engineering-team.jpg",
    },
  ] as IndustryCard[],

  valueProps: [
    {
      id: "customer-satisfaction",
      title: "Customer Satisfaction First",
      description:
        "Standardized business processes, timely delivery, constant communication and dependable operations designed around client priorities.",
      iconSrc: "/icons/icon-FNXmFBsR2D4C.svg",
    },
    {
      id: "component-architecture",
      title: "Standardized Enterprise Architecture",
      description:
        "Component-based technology environments that unify disparate systems, reduce architectural friction, and scale seamlessly.",
      iconSrc: "/icons/icon-R1XsGA4fBWxa.svg",
    },
    {
      id: "long-term-partnerships",
      title: "Partnership for Sustainable Growth",
      description:
        "Long-term collaboration built on transparency, accountability, and continuous improvement across your technology journey.",
      iconSrc: "/icons/icon-shield-check.svg",
    },
  ] as ValuePropItem[],

  testimonial: {
    quote:
      "Timely delivery, constant communication, and high professionalism throughout the application development lifecycle. Emerald System Integrators delivered exceptional quality and standardized business processes.",
    author: "Ravi Kumar",
    role: "Quality Analyst",
    company: "Enterprise Client",
    avatarSrc: "/images/avatar-michael-brown.jpg",
    bgImageSrc: "/images/esi-enterprise-architecture.jpg",
  },

  testimonialsList: [
    {
      id: "pranwant",
      author: "Pranwant",
      role: "Blog Writer",
      quote:
        "The website structure and easy access to relevant content made our collaboration smooth and impactful. ESI delivered exactly what was needed.",
      avatarSrc: "/images/avatar-david-green.jpg",
    },
    {
      id: "amarnath",
      author: "Amarnath",
      role: "Freelancer",
      quote:
        "Outstanding team quality and flawless project execution. Their engineering capabilities and consulting expertise set them apart.",
      avatarSrc: "/images/avatar-orion-blake.jpg",
    },
    {
      id: "ravi-kumar",
      author: "Ravi Kumar",
      role: "Quality Analyst",
      quote:
        "Timely delivery, constant communication, and high professionalism throughout the development lifecycle.",
      avatarSrc: "/images/avatar-michael-brown.jpg",
    },
    {
      id: "shivani-kumari",
      author: "Shivani Kumari",
      role: "Store Owner",
      quote:
        "Exceptional commitment and dedication to our business requirements. ESI helped streamline our operations effortlessly.",
      avatarSrc: "/images/avatar-sarah-johnson.jpg",
    },
    {
      id: "khushboo-sinha",
      author: "Khushboo Sinha",
      role: "Designer",
      quote:
        "Remarkable website development experience. The team combined technical strength with great design sensitivity.",
      avatarSrc: "/images/avatar-emily-clark.jpg",
    },
  ] as TestimonialItem[],

  services: [
    {
      id: "web-apps",
      slug: "web-application-development",
      title: "Web Application Development",
      description:
        "ESI develops customized web applications designed to simplify IT complexity, streamline workflows and synchronize business operations.",
      tags: [
        "Custom Web Application Development",
        "Workflow Optimization",
        "Business Process Synchronization",
        "Scalable Application Solutions",
      ],
      iconSrc: "/icons/icon-analytics.svg",
      imageSrc: "/images/img-Gey8JdeAVmsT.png",
    },
    {
      id: "mobile-apps",
      slug: "mobile-application-development",
      title: "Mobile Application Development",
      description:
        "ESI provides mobile application development expertise across multiple platforms, supporting businesses throughout the application development lifecycle.",
      tags: [
        "Mobile Application Development",
        "Cross-Platform Development",
        "Application Lifecycle Support",
        "Business-Focused Mobile Solutions",
      ],
      iconSrc: "/icons/icon-star.svg",
      imageSrc: "/images/img-gdRM7GW5TQGv.jpg",
    },
    {
      id: "enterprise-solutions",
      slug: "enterprise-solutions",
      title: "Enterprise Solutions",
      description:
        "ESI provides enterprise technology solutions focused on system integration, standardized architecture and component-based technology environments.",
      tags: [
        "Enterprise Architecture",
        "System Integration",
        "Standardized Technology Components",
        "Business Systems Integration",
      ],
      iconSrc: "/icons/icon-shield-check.svg",
      imageSrc: "/images/case-study-eco-enterprise.jpg",
    },
    {
      id: "business-consulting",
      slug: "business-consulting",
      title: "Business Consulting",
      description:
        "ESI provides management consulting services addressing critical business challenges across strategy, operations, technology, and organizational transformation.",
      tags: [
        "Specialist Resourcing & Staffing",
        "Business Strategy & Operations",
        "Digital Transformation",
        "Advanced Analytics & Systems",
      ],
      iconSrc: "/icons/icon-arrow-up-right.svg",
      imageSrc: "/images/case-study-consulting-shift.jpg",
    },
  ] as ServiceItem[],

  caseStudies: [
    {
      id: "edgetrans",
      slug: "lead-generation-boost-for-a-b2b-logistics-company",
      category: "Web Application & Lead Generation",
      title: "Lead generation boost for a B2B logistics company",
      client: "TransEdge Logistics",
      challenge: "Low digital inquiry conversion from an outdated legacy web architecture.",
      solution:
        "Engineered an integrated web application with optimized workflow synchronization and modern customer touchpoints.",
      stat1: { value: "2.5X", label: "Qualified inquiry boost" },
      stat2: { value: "38%", label: "Bounce rate reduced" },
      imageSrc: "/images/case-study-transedge.jpg",
    },
    {
      id: "brand-edge",
      slug: "scalable-saas-platform-for-a-fintech-startup",
      category: "Custom Web Application",
      title: "Scalable platform for an innovative fintech provider",
      client: "Brand Edge Fintech",
      challenge: "Sluggish transaction velocity and component integration bottlenecks.",
      solution:
        "Architected modular microservices and standardized APIs to support high-concurrency client transactions.",
      stat1: { value: "99.99%", label: "Platform uptime" },
      stat2: { value: "3.2X", label: "Transaction capacity" },
      imageSrc: "/images/case-study-brand-edge.jpg",
    },
    {
      id: "eco-enterprise",
      slug: "enterprise-resource-integration-for-a-manufacturing-firm",
      category: "Enterprise System Integration",
      title: "Enterprise resource integration for a manufacturing firm",
      client: "Eco Enterprise",
      challenge: "Disconnected legacy software systems hindered real-time operational data access.",
      solution:
        "Integrated ERP, CRM, and supply chain tools into a standardized component-based environment.",
      stat1: { value: "70%", label: "Faster inventory sync" },
      stat2: { value: "45%", label: "Process latency cut" },
      imageSrc: "/images/case-study-eco-enterprise.jpg",
    },
    {
      id: "spendora",
      slug: "strategic-digital-shift-for-a-b2b-consulting-agency",
      category: "Business Consulting & Digital Shift",
      title: "Strategic digital shift for a professional advisory firm",
      client: "Spendora Advisory",
      challenge: "Manual consulting delivery pipelines and decentralized client reporting.",
      solution:
        "Implemented standardized technology workflows, client management tools, and analytics dashboards.",
      stat1: { value: "60%", label: "Operational efficiency" },
      stat2: { value: "40%", label: "Faster client onboarding" },
      imageSrc: "/images/case-study-consulting-shift.jpg",
    },
  ] as CaseStudyItem[],

  methodology: [
    {
      step: "01",
      title: "Understand Business Needs",
      description:
        "We analyze specific operational requirements and structural bottlenecks to design scalable solutions that evolve with your organization.",
      iconSrc: "/icons/icon-analytics.svg",
    },
    {
      step: "02",
      title: "Standardized Architecture",
      description:
        "We build component-based environments and robust integrations that bring internal and external business systems together seamlessly.",
      iconSrc: "/icons/icon-shield-check.svg",
    },
    {
      step: "03",
      title: "Deliver Sustainable Growth",
      description:
        "We support organizations throughout the solution lifecycle—from initial implementation to long-term operations, maintenance and consulting.",
      iconSrc: "/icons/icon-arrow-up-right.svg",
    },
  ] as MethodologyStep[],

  ctaBanner: {
    badge: "Ready for What's Next",
    title: "Partner with Emerald System Integrators to engineer your digital transformation.",
    primaryCtaText: "Explore Our Solutions",
    primaryCtaHref: "/service",
    actionCards: [
      {
        title: "Ready to simplify technological complexity?",
        btnText: "Get in touch",
        href: "/contact",
        iconSrc: "/icons/icon-arrow-up-right.svg",
      },
      {
        title: "Looking for specialist resourcing or consulting?",
        btnText: "Learn about ESI",
        href: "/about",
        iconSrc: "/icons/icon-star.svg",
      },
    ],
  },
};
