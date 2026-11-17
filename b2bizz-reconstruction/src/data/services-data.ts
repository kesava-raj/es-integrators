export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  imageSrc: string;
  approachHeading: string;
  approachText: string;
  approachImageSrc: string;
  deliverables: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatarSrc: string;
  };
}

export interface ServiceMetric {
  value: string;
  label: string;
  iconSrc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    subtitle:
      "Customized web applications designed to simplify IT complexity, streamline workflows and synchronize business operations.",
    tags: [
      "Custom Web Applications",
      "Workflow Optimization",
      "Process Synchronization",
      "Scalable Solutions",
    ],
    imageSrc: "/images/esi-app-development.jpg",
    approachHeading: "Customized applications that evolve alongside organizational needs.",
    approachText:
      "ESI develops customized web applications designed to simplify IT complexity, streamline workflows and synchronize business operations. The company focuses on understanding specific business requirements and developing scalable applications that evolve alongside organizational needs.",
    approachImageSrc: "/images/esi-enterprise-architecture.jpg",
    deliverables: [
      "Custom Web Application Development",
      "Workflow Optimization & Automation",
      "Business Process Synchronization",
      "Scalable Cloud-Ready Application Solutions",
    ],
    testimonial: {
      quote:
        "The website structure and easy access to relevant content made our collaboration smooth and impactful. ESI delivered exactly what was needed.",
      author: "Pranwant",
      role: "Blog Writer",
      avatarSrc: "/images/avatar-david-green.jpg",
    },
  },
  {
    id: "mobile-application-development",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    subtitle:
      "Mobile application development expertise across multiple platforms, supporting businesses throughout the application lifecycle.",
    tags: [
      "Mobile Engineering",
      "Cross-Platform Development",
      "Lifecycle Support",
      "User Experience",
    ],
    imageSrc: "/images/esi-app-development.jpg",
    approachHeading: "Business-focused mobile solutions with end-to-end lifecycle support.",
    approachText:
      "ESI provides mobile application development expertise across modern platforms, supporting businesses throughout the entire application lifecycle. The company focuses on developing mobile solutions that address business requirements and improve user experiences.",
    approachImageSrc: "/images/esi-engineering-team.jpg",
    deliverables: [
      "Native & Cross-Platform Mobile Applications",
      "Application Lifecycle Support & Maintenance",
      "Business-Focused Mobile Architecture",
      "High-Performance User Experience Design",
    ],
    testimonial: {
      quote:
        "Remarkable development experience. The team combined technical strength with great design sensitivity and operational reliability.",
      author: "Khushboo Sinha",
      role: "Designer",
      avatarSrc: "/images/avatar-emily-clark.jpg",
    },
  },
  {
    id: "enterprise-solutions",
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    subtitle:
      "Enterprise technology solutions focused on system integration, standardized architecture and component-based technology environments.",
    tags: [
      "Enterprise Architecture",
      "System Integration",
      "Standardized Components",
      "Operational Efficiency",
    ],
    imageSrc: "/images/esi-enterprise-architecture.jpg",
    approachHeading: "Unifying internal and external business systems to eliminate operational friction.",
    approachText:
      "ESI provides enterprise technology solutions focused on system integration, standardized architecture and component-based technology environments. Its approach emphasizes bringing internal and external business systems together to reduce complexity and improve operational efficiency.",
    approachImageSrc: "/images/esi-ai-automation.jpg",
    deliverables: [
      "Enterprise Architecture & Standards",
      "Business Systems & API Integration",
      "Standardized Component Environments",
      "Operational Complexity Reduction",
    ],
    testimonial: {
      quote:
        "Timely delivery, constant communication, and high professionalism throughout the development lifecycle.",
      author: "Ravi Kumar",
      role: "Quality Analyst",
      avatarSrc: "/images/avatar-michael-brown.jpg",
    },
  },
  {
    id: "business-consulting",
    slug: "business-consulting",
    title: "Business Consulting",
    subtitle:
      "Management consulting services addressing critical business challenges across operations, staffing, and digital transformation.",
    tags: [
      "Specialist Resourcing",
      "Business Strategy",
      "Digital Transformation",
      "Advanced Analytics",
    ],
    imageSrc: "/images/esi-engineering-team.jpg",
    approachHeading: "Combining functional expertise with a broader global perspective.",
    approachText:
      "ESI provides management consulting services addressing critical business challenges and opportunities. Our consulting expertise covers staffing, business strategy, marketing, operations, digital transformation, and advanced analytics to help organizations achieve tangible results.",
    approachImageSrc: "/images/esi-enterprise-architecture.jpg",
    deliverables: [
      "Specialist Resourcing Across Key Functions",
      "Business Strategy & Operational Optimization",
      "Digital Transformation Roadmaps",
      "Advanced Analytics & Customer Value Management",
    ],
    testimonial: {
      quote:
        "Outstanding team quality and flawless project execution. Their engineering capabilities and consulting expertise set them apart.",
      author: "Amarnath",
      role: "Freelancer",
      avatarSrc: "/images/avatar-orion-blake.jpg",
    },
  },
];

export const SERVICES_PAGE_DATA = {
  hero: {
    badge: "Our Solutions",
    headline: "Integrated Solutions. One Technology Partner.",
    subtitle:
      "Emerald System Integrators helps businesses prepare for present and future challenges through technology, specialist resourcing, and strategic consulting.",
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
  ],
  testimonial: {
    quote:
      "Timely delivery, constant communication, and high professionalism throughout the application development lifecycle. Emerald System Integrators delivered exceptional quality and standardized business processes.",
    author: "Ravi Kumar",
    role: "Quality Analyst",
    company: "Enterprise Client",
    avatarSrc: "/images/avatar-michael-brown.jpg",
    backdropSrc: "/images/XwCo50BibsVkSjbmawMbcrbww.jpg",
  },
  faq: {
    headline: "Frequently Asked Questions",
    imageSrc: "/images/g6qy1PW2Ru5mqtOiE8nYKDXaNA.jpg",
    items: [
      {
        question: "What technology solutions does Emerald System Integrators provide?",
        answer:
          "ESI provides custom web application development, mobile application development across modern platforms, and enterprise solutions focused on system integration and standardized architecture.",
      },
      {
        question: "What is ESI's specialist resourcing model?",
        answer:
          "We offer specialist resourcing and staffing across technology, tourism, translation, and trading, delivering experienced talent aligned with project and organizational requirements.",
      },
      {
        question: "How does ESI approach consulting engagements?",
        answer:
          "ESI supports businesses from initial setup through operations and maintenance. Our consulting covers staffing, business strategy, operations, technology transformation, and customer value management.",
      },
      {
        question: "Where are ESI's offices located?",
        answer:
          "Emerald System Integrators maintains global presence with offices in Chennai, Tamil Nadu, India, and Michigan, USA, serving clients internationally.",
      },
      {
        question: "How do we get started with Emerald System Integrators?",
        answer:
          "You can reach out via our contact page or email admin@es-integrators.com to schedule an initial consultation with our technology and consulting specialists.",
      },
    ],
  },
};
