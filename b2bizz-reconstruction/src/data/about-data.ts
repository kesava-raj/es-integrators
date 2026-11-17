export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarSrc: string;
  socials: {
    platform: string;
    iconSrc: string;
    href: string;
  }[];
}

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  hero: {
    badge: "About Us",
    headline: "About Emerald System Integrators",
    subtitle:
      "A technology and consulting partner helping businesses become ready for the present and future through intelligent development, specialist resourcing and strategic consulting.",
    cta: {
      text: "Explore Our Solutions",
      href: "/service",
    },
    sectorsLabel: "Key Capabilities & Practices",
    sectors: [
      "Technology Solutions",
      "Specialist Resourcing",
      "Enterprise Systems",
      "Business Consulting",
      "Customer Value",
      "Process Optimization",
    ],
    collage: [
      { src: "/images/esi-engineering-team.jpg", alt: "Technology Engineering Team", width: 580, height: 415 },
      { src: "/images/esi-enterprise-architecture.jpg", alt: "Enterprise Architecture", width: 580, height: 415 },
      { src: "/images/esi-app-development.jpg", alt: "Application Engineering", width: 580, height: 415 },
    ],
    decorationImage: "/images/j1u7mOstGtDSOqkHWRDDUZrUo4.png",
  },

  story: {
    badge: "Our Story",
    statement:
      "Emerald System Integrators is a technology and consulting partner helping businesses become ready for the present and future. The company brings together technology development, specialist resourcing and consulting expertise to support organizations across different stages of their business journey. From custom applications and enterprise technology solutions to operational and strategic consulting, ESI focuses on delivering solutions that create meaningful business value.",
    stats: [
      { value: "100%", label: "Customer satisfaction commitment" },
      { value: "2", label: "Global hubs (India & USA)" },
      { value: "4", label: "Core integrated practices" },
    ],
    ctaBanner: {
      title: "Prepare your organization for what’s next",
      buttonText: "Connect with our team",
      buttonHref: "/contact",
      iconSrc: "/icons/vd0WPmgaACCN9pheNqDeUiY6ZX4.svg",
    },
  },

  principles: {
    headline: "Our Commitment & Core Principles",
    subtitle:
      "Customer satisfaction comes first. We believe in standardized business processes, high-quality solutions, timely delivery, constant communication and reliable operations.",
    items: [
      {
        id: "customer-satisfaction",
        title: "Customer Satisfaction First",
        description: "Standardized business processes and dedicated focus on client outcomes.",
      },
      {
        id: "high-quality",
        title: "High-Quality Solutions",
        description: "Robust architecture, clean code, and resilient enterprise delivery.",
      },
      {
        id: "timely-delivery",
        title: "Timely Delivery & Constant Communication",
        description: "Transparent milestones, proactive updates, and accountable project management.",
      },
      {
        id: "long-term-partnerships",
        title: "Long-Term Partnerships",
        description: "Collaboration built on transparency, accountability, and continuous improvement.",
      },
      {
        id: "sustainable-growth",
        title: "Sustainable Business Growth",
        description: "Creating tangible, lasting competitive advantage for clients around the world.",
      },
    ],
  },

  visionMission: {
    vision: {
      badge: "Our Vision",
      title: "To become a trusted technology and consulting partner for businesses worldwide.",
      description:
        "Delivering innovative solutions, building lasting relationships, and supporting sustainable business growth across industries and geographies.",
      imageSrc: "/images/esi-enterprise-architecture.jpg",
      iconSrc: "/icons/toyCuDHAxxxvNK12bvDF2trUQZU.svg",
    },
    mission: {
      badge: "Our Mission",
      title: "Enhancing business growth through creative design and development.",
      description:
        "Delivering high-quality solutions that create value and provide a reliable competitive advantage for clients around the world.",
      pillars: [
        "Creative design & development",
        "High-quality delivery standards",
        "Reliable competitive advantage",
        "Customer value management",
        "Standardized operational processes",
      ],
      iconSrc: "/icons/jRbmhhgXe9FyIivdFRX2C963uI.svg",
    },
  },

  team: {
    headline: "Leadership and Specialist Expertise",
    members: [
      {
        id: "leadership-1",
        name: "Technology Leadership",
        role: "Enterprise Solutions & Architecture",
        avatarSrc: "/images/1b3nodcFE17MeyegY5o26I9LyYM.jpg",
        socials: [
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
        ],
      },
      {
        id: "leadership-2",
        name: "Consulting Practice",
        role: "Management & Strategy Consulting",
        avatarSrc: "/images/0p855vpPz8c7b7WQK3Dq2rc1ClY.jpg",
        socials: [
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
        ],
      },
      {
        id: "leadership-3",
        name: "Specialist Resourcing",
        role: "Talent & Global Operations",
        avatarSrc: "/images/ogZA5dIiG4ZzekqaoVHevvJ71c.jpg",
        socials: [
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
        ],
      },
      {
        id: "leadership-4",
        name: "Quality Assurance",
        role: "Delivery & Process Governance",
        avatarSrc: "/images/kuEeMf5nQnQzXhIhjcw1KVHtJY.jpg",
        socials: [
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
        ],
      },
    ],
  },
};
