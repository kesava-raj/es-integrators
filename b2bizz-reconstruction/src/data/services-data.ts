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
    id: "b2b-website-design-development",
    slug: "b2b-website-design-development",
    title: "B2B website design & development",
    subtitle: "Conversion-focused websites are built for speed, trust, and lead generation.",
    tags: ["Business website", "Corporate site", "Responsive design"],
    imageSrc: "/images/gdRM7GW5TQGv1DnZNScYVrTUQE.jpg",
    approachHeading: "Website design isn’t just about looks it’s about building trust and driving results.",
    approachText:
      "In the B2B world, your website is often the first and most critical touchpoint. If it’s slow, outdated, or unclear, you risk losing valuable prospects before the conversation even begins. We build high-performing, conversion-driven websites that communicate your value, engage decision-makers, and turn visitors into pipeline.",
    approachImageSrc: "/images/SiKi93XgBCO1jd5YYRhnqoQ2PI.jpg",
    deliverables: [
      "Clear value messaging & UX architecture",
      "Conversion-focused design & micro-interactions",
      "High credibility signals & social proof integration",
      "Headless CMS implementation & performance optimization",
    ],
    testimonial: {
      quote:
        "Working with B2bizz was a game-changer for our B2B strategy. Their team didn’t just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.",
      author: "Orion Blake",
      role: "COO, TransEdge Logistics",
      avatarSrc: "/images/pfX9Sn5qRme6iCFMisneY4YIt7I.jpg",
    },
  },
  {
    id: "custom-saas-solutions",
    slug: "custom-saas-solutions",
    title: "Custom SaaS solutions",
    subtitle: "Robust SaaS platforms tailored for growth, scalability, and performance.",
    tags: ["SaaS development", "Cloud platform", "MVP"],
    imageSrc: "/images/8kma30ImR7rLIvZAXGsqbVM48.jpg",
    approachHeading: "Software built for scalability, performance, and real user adoption.",
    approachText:
      "Off-the-shelf software rarely fits complex business models. We build tailored SaaS platforms that align with your operational needs, scale effortlessly with user demand, and provide unmatched reliability.",
    approachImageSrc: "/images/SiKi93XgBCO1jd5YYRhnqoQ2PI.jpg",
    deliverables: [
      "Cloud-native microservices architecture",
      "Intuitive enterprise UI/UX design systems",
      "Secure RESTful & GraphQL API integrations",
      "Automated CI/CD pipelines & zero-downtime scaling",
    ],
    testimonial: {
      quote:
        "The team brought clarity to a complex integration challenge and delivered beyond expectations. Our platform now supports 10x the traffic with zero latency spikes.",
      author: "David Miller",
      role: "Head of Product, FinEdge Systems",
      avatarSrc: "/images/GEa5AaG3m0spY7fftLUtH9VOzI.jpg",
    },
  },
  {
    id: "crm-erp-integrations",
    slug: "crm-erp-integrations",
    title: "CRM & ERP integrations",
    subtitle: "Streamline operations with seamless business system integrations.",
    tags: ["Automation", "Business tools", "KPIs"],
    imageSrc: "/images/WZgpMe3nzQNLHEKKxkNAVTLsJ6k.jpg",
    approachHeading: "Connecting fragmented tools into a unified, single source of truth.",
    approachText:
      "Siloed systems slow down decision-making and introduce costly friction. We design robust integrations across your CRM, ERP, and internal databases, ensuring real-time synchronization and automation across your entire revenue pipeline.",
    approachImageSrc: "/images/SiKi93XgBCO1jd5YYRhnqoQ2PI.jpg",
    deliverables: [
      "Custom bidirectional API workflows",
      "Enterprise data hygiene & deduplication",
      "Real-time pipeline & ERP synchronization",
      "Automated reporting and executive telemetry",
    ],
    testimonial: {
      quote:
        "We finally have automated data sync across our Salesforce and SAP systems. It eliminated hours of manual work and gave our executives unified visibility.",
      author: "Olivia Brown",
      role: "Head of IT Operations, GlobalLogix",
      avatarSrc: "/images/d4bOSjZzklRnk0Y8ssGiLJlIO0.jpg",
    },
  },
  {
    id: "enterprise-digital-strategy",
    slug: "enterprise-digital-strategy",
    title: "Enterprise digital strategy",
    subtitle: "Enabling smarter decision-making through digital strategy.",
    tags: ["Digital transformation", "B2B marketing", "KPIs"],
    imageSrc: "/images/drIdWgUE5zBF1yAbgCfVAuoJTAs.jpg",
    approachHeading: "Actionable transformation roadmaps that align business and technology.",
    approachText:
      "Digital transformation succeeds when strategy and execution are deeply intertwined. We work directly with executive leadership to evaluate legacy systems, identify high-ROI opportunities, and build actionable roadmaps that modernize operations.",
    approachImageSrc: "/images/SiKi93XgBCO1jd5YYRhnqoQ2PI.jpg",
    deliverables: [
      "Business-technology alignment audits",
      "Customer journey & funnel optimization",
      "Risk mitigation & compliance roadmaps",
      "Tech stack evaluation & ROI assessment",
    ],
    testimonial: {
      quote:
        "Their strategic roadmap gave us the confidence to sunset our legacy systems and transition to modern cloud architecture without business disruption.",
      author: "Robert Williams",
      role: "Chief Digital Officer, Enterprise Core",
      avatarSrc: "/images/eGjNeYGnzh6PxwjZw2sLNTa0No.jpg",
    },
  },
  {
    id: "data-driven-marketing",
    slug: "data-driven-marketing",
    title: "Data-Driven marketing",
    subtitle: "Turning analytics into marketing decisions that drive measurable growth.",
    tags: ["B2B acquisition", "Funnel optimization", "Attribution"],
    imageSrc: "/images/lGRIbBKBhBk3miyV7UG3h71RxKk.jpg",
    approachHeading: "Maximizing acquisition efficiency with rigorous performance analytics.",
    approachText:
      "Guesswork in marketing burns budget. We analyze your customer acquisition funnel from top to bottom, deploying data-backed attribution models, conversion rate experiments, and tailored campaigns that predictably generate pipeline.",
    approachImageSrc: "/images/SiKi93XgBCO1jd5YYRhnqoQ2PI.jpg",
    deliverables: [
      "Conversion rate optimization (CRO) audits",
      "Multi-channel revenue attribution models",
      "Real-time pipeline analytics dashboards",
      "ICP targeting & personalized ABM campaigns",
    ],
    testimonial: {
      quote:
        "We saw a 3.5x increase in qualified leads in just 6 months. They don’t just deliver recommendations — they deliver measurable revenue results.",
      author: "Emily Johnson",
      role: "CEO, NexaGrowth",
      avatarSrc: "/images/N8xp5eiZVkdKgKCiK4a5rkQI.jpg",
    },
  },
];

export const SERVICES_PAGE_DATA = {
  hero: {
    headline: "Our services",
    subtitle:
      "Crafted digital solutions that drive results. Explore our full suite of services designed to elevate your brand and grow your business.",
  },
  metrics: [
    {
      value: "4X",
      label: "Average ROI on digital strategy projects",
      iconSrc: "/icons/yxFAET3M9RHNyUQ7EAiOicUA2c.svg",
    },
    {
      value: "5",
      label: "Countries served with B2B services",
      iconSrc: "/icons/faFEiVDIGpShRVZGYWZxmizgQ.svg",
    },
    {
      value: "100%",
      label: "Project success rate across all engagements",
      iconSrc: "/icons/Qmp1HQeLB3bhe86l6p6cXmKx8.svg",
    },
    {
      value: "20+",
      label: "Successful B2B projects delivered",
      iconSrc: "/icons/m7HT3SunkeIWyEbDn6XVPojvTA.svg",
    },
  ],
  testimonial: {
    quote:
      "Working with B2bizz was a game-changer for our B2B strategy. Their team didn’t just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.",
    author: "Orion Blake",
    role: "COO",
    company: "TransEdge Logistics",
    avatarSrc: "/images/pfX9Sn5qRme6iCFMisneY4YIt7I.jpg",
    backdropSrc: "/images/XwCo50BibsVkSjbmawMbcrbww.jpg",
  },
  faq: {
    headline: "Frequently asked questions",
    imageSrc: "/images/g6qy1PW2Ru5mqtOiE8nYKDXaNA.jpg",
    items: [
      {
        question: "What types of B2B companies do you work with?",
        answer:
          "We partner with mid-market and enterprise B2B organizations across logistics, fintech, manufacturing, healthcare, and SaaS seeking to modernize operations, scale pipelines, and optimize systems.",
      },
      {
        question: "What services do you provide?",
        answer:
          "We offer end-to-end B2B solutions including high-converting website design, custom SaaS platforms, CRM/ERP integration architecture, enterprise digital strategy roadmapping, and data-driven marketing.",
      },
      {
        question: "How long does a typical project engagement take?",
        answer:
          "Engagements vary based on scope. Focused strategic audits typically take 2-4 weeks, while full enterprise builds and integrations range from 6 to 12 weeks with phased sprint milestones.",
      },
      {
        question: "How do you measure project success?",
        answer:
          "We establish quantitative baseline KPIs before work begins — measuring pipeline expansion, conversion rate uplifts, system throughput, and tangible ROI with transparent live dashboards.",
      },
      {
        question: "Can you integrate with our existing enterprise tech stack?",
        answer:
          "Yes. Our team specializes in connecting existing CRMs (Salesforce, HubSpot), ERPs (SAP, NetSuite), headless CMS platforms, and custom backend APIs into a unified data architecture.",
      },
    ],
  },
};
