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
    headline: "Get to know B2bizz B2B consulting",
    subtitle:
      "We’re your long-term growth partners. Discover who we are and how we help B2B companies unlock their full potential.",
    cta: {
      text: "Explore our services",
      href: "/service",
    },
    sectorsLabel: "Expertise across key sectors",
    sectors: [
      "Healthcare",
      "Financial services",
      "Technology",
      "Manufacturing",
      "Logistics",
      "Retail",
    ],
    collage: [
      { src: "/images/qyFALiDAT11qq2R9yTbABUg1qo.jpg", alt: "Hero BG", width: 460, height: 415 },
      { src: "/images/lxIpRAPB2GyzWXqCsmI4Lt1Bu4.jpg", alt: "About Image 1", width: 580, height: 415 },
      { src: "/images/d512t4V6VrGb1hhvxUjbODGCXCk.jpg", alt: "About Image 2", width: 300, height: 415 },
    ],
    decorationImage: "/images/j1u7mOstGtDSOqkHWRDDUZrUo4.png",
  },

  story: {
    statement:
      "We are a strategy-first B2B consulting firm dedicated to helping businesses solve complex challenges and accelerate their growth. With a team of experienced consultants, data analysts, and industry specialists, we blend strategic insight with hands-on execution to deliver measurable results. Our approach is simple we listen, we analyze, and we act.",
    stats: [
      { value: "4X", label: "Average ROI achieved" },
      { value: "5+", label: "Countries served globally" },
      { value: "300%", label: "Increase in organic traffic" },
    ],
    ctaBanner: {
      title: "It’s time to rethink your B2B strategy",
      buttonText: "Schedule a free consultation",
      buttonHref: "/contact",
      iconSrc: "/icons/vd0WPmgaACCN9pheNqDeUiY6ZX4.svg",
    },
  },

  principles: {
    headline: "Principles that shape our strategy",
    subtitle:
      "At the heart of our consulting practice lies a set of core values that guide how we think, work, and lead.",
    items: [
      {
        id: "integrity",
        title: "Integrity first",
        description: "We operate with honesty and transparency.",
      },
      {
        id: "client-centric",
        title: "Client-Centric",
        description: "Your success is our priority.",
      },
      {
        id: "strategic-thinking",
        title: "Strategic thinking",
        description: "Every decision is backed by data and insights.",
      },
      {
        id: "collaboration",
        title: "Collaboration",
        description: "We believe in working together, not just consulting.",
      },
      {
        id: "innovation",
        title: "Innovation",
        description: "We challenge norms to find smarter solutions.",
      },
    ],
  },

  visionMission: {
    vision: {
      badge: "Our vision",
      title: "Empowering businesses through digital leadership and sustainable growth.",
      description:
        "We envision a B2B ecosystem where agile strategy and technical excellence converge to drive lasting market impact.",
      imageSrc: "/images/ssle2Ob2kE3q97SLsLFaNwznQ.jpg",
      iconSrc: "/icons/toyCuDHAxxxvNK12bvDF2trUQZU.svg",
    },
    mission: {
      badge: "Our mission",
      title: "Delivering measurable revenue impact through agile execution.",
      pillars: [
        "Global partnerships",
        "Strategic execution",
        "Digital leadership",
        "Client empowerment",
        "People-First culture",
      ],
      iconSrc: "/icons/jRbmhhgXe9FyIivdFRX2C963uI.svg",
    },
  },

  team: {
    headline: "Meet the talent behind the transformation",
    members: [
      {
        id: "john-carter",
        name: "John Carter",
        role: "Managing Director",
        avatarSrc: "/images/1b3nodcFE17MeyegY5o26I9LyYM.jpg",
        socials: [
          { platform: "X", iconSrc: "/icons/vNI25VqTEOiglaWkaLdoLwpori8.svg", href: "https://x.com" },
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
          { platform: "Instagram", iconSrc: "/icons/wsV6nF8mTUUHsqKjv3gYGulKhck.svg", href: "https://instagram.com" },
        ],
      },
      {
        id: "nina-kapoor",
        name: "Nina Kapoor",
        role: "Financial Consultant",
        avatarSrc: "/images/0p855vpPz8c7b7WQK3Dq2rc1ClY.jpg",
        socials: [
          { platform: "X", iconSrc: "/icons/vNI25VqTEOiglaWkaLdoLwpori8.svg", href: "https://x.com" },
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
          { platform: "Instagram", iconSrc: "/icons/wsV6nF8mTUUHsqKjv3gYGulKhck.svg", href: "https://instagram.com" },
        ],
      },
      {
        id: "alicia-morgan",
        name: "Alicia Morgan",
        role: "Managing Director",
        avatarSrc: "/images/ogZA5dIiG4ZzekqaoVHevvJ71c.jpg",
        socials: [
          { platform: "X", iconSrc: "/icons/vNI25VqTEOiglaWkaLdoLwpori8.svg", href: "https://x.com" },
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
          { platform: "Instagram", iconSrc: "/icons/wsV6nF8mTUUHsqKjv3gYGulKhck.svg", href: "https://instagram.com" },
        ],
      },
      {
        id: "liam-cheng",
        name: "Liam Cheng",
        role: "Lead Business Analyst",
        avatarSrc: "/images/kuEeMf5nQnQzXhIhjcw1KVHtJY.jpg",
        socials: [
          { platform: "X", iconSrc: "/icons/vNI25VqTEOiglaWkaLdoLwpori8.svg", href: "https://x.com" },
          { platform: "LinkedIn", iconSrc: "/icons/Hxh8VdM4hDeSwdX8yKTStA4ypM.svg", href: "https://linkedin.com" },
          { platform: "Instagram", iconSrc: "/icons/wsV6nF8mTUUHsqKjv3gYGulKhck.svg", href: "https://instagram.com" },
        ],
      },
    ],
  },
};
