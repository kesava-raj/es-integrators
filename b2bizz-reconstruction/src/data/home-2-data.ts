export interface ClientLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeaturedCaseStudy {
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
    headline: "Delivering insight driven strategy for B2B success",
    subtitle:
      "We take the guesswork out of business growth with tailored consulting, strategic planning, and results-backed execution.",
    cta: {
      text: "Explore our services",
      href: "/service",
    },
    featuredClientsLabel: "Featured B2B clients",
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
      category: "Web design",
      title: "Website redesign for a non-profit",
      href: "/case-study/website-redesign-for-a-non-profit",
      imageSrc: "/images/H0hRoAnIkQv54FIiHMwpBrGr2bM.jpg",
      metrics: [
        { value: "55%", label: "Digital donations rise" },
        { value: "60%", label: "Increase in website traffic" },
      ],
    },
  },

  services: {
    headline: "Smart solutions for scaling B2B operations",
    cta: {
      text: "Get started",
      href: "/contact",
    },
    items: [
      {
        id: "web-design",
        title: "B2B website design & development",
        description: "Conversion-focused websites are built for speed, trust, and lead generation.",
        tags: ["Business website", "Corporate site", "Responsive design"],
        imageSrc: "/images/gdRM7GW5TQGv1DnZNScYVrTUQE.jpg",
        href: "/service/b2b-website-design-development",
      },
      {
        id: "custom-saas",
        title: "Custom SaaS solutions",
        description: "Robust SaaS platforms tailored for growth, scalability, and performance.",
        tags: ["SaaS development", "Cloud platform", "MVP"],
        imageSrc: "/images/8kma30ImR7rLIvZAXGsqbVM48.jpg",
        href: "/service/custom-saas-solutions",
      },
      {
        id: "crm-erp",
        title: "CRM & ERP integrations",
        description: "Streamline operations with seamless business system integrations.",
        tags: ["Automation", "Business tools", "KPIs"],
        imageSrc: "/images/WZgpMe3nzQNLHEKKxkNAVTLsJ6k.jpg",
        href: "/service/crm-erp-integrations",
      },
      {
        id: "enterprise-strategy",
        title: "Enterprise digital strategy",
        description: "Enabling smarter decision-making through digital strategy.",
        tags: ["Digital transformation", "B2B marketing", "KPIs"],
        imageSrc: "/images/drIdWgUE5zBF1yAbgCfVAuoJTAs.jpg",
        href: "/service/enterprise-digital-strategy",
      },
    ],
  },

  mission: {
    headline: "Smarter decisions. Stronger outcomes. Lasting Value.",
    paragraph1:
      "We begin by immersing ourselves in your business to gain a deep understanding of your industry, operations, challenges, and growth goals.",
    paragraph2:
      "We serve as your trusted partner at every stage of your business evolution, growth, and long-term success.",
    pillars: [
      "Industry expertise",
      "Scalable growth",
      "Custom strategies",
      "Data driven decisions",
    ],
    note: "Understand the principles guiding our every strategy",
    cta: {
      text: "More about us",
      href: "/about",
      arrowIcon: "/icons/lF4qvKFOOsAkrC72wGno0l1d2kg.svg",
    },
  },

  sectors: {
    headline: "Serving businesses across every sector",
    items: [
      {
        id: "manufacturing",
        title: "Manufacturing",
        description:
          "We empower manufacturing companies to embrace digital transformation with efficiency and foresight. Whether you're automating processes, enhancing supply chains, or deploying smart factory solutions, we provide strategic direction.",
        imageSrc: "/images/piT16WDn5IlyZFuOSxtCdNCE.jpg",
        iconSrc: "/icons/6yH7AnJjW9VNMkEbhNrbO6N39hk.svg",
      },
      {
        id: "supply-chain",
        title: "Supply chain",
        description:
          "We help logistics and supply chain organizations streamline operations and embrace digital innovation with confidence. Whether you're optimizing last-mile delivery, integrating smart tracking systems, and improving overall efficiency.",
        imageSrc: "/images/HEd6UpzqP2U9vJOjBXBVjNcYc.jpg",
        iconSrc: "/icons/cpS5vpDqkwONmm4ANafMTB2nzQ.svg",
      },
      {
        id: "healthcare",
        title: "Healthcare",
        description:
          "We help healthcare organizations and MedTech companies navigate the digital landscape with precision and care. Whether you're modernizing operations or launching a new digital product, we bring strategic clarity and technical excellence to every stage.",
        imageSrc: "/images/Zi0oKIBGmUqx63MJ5ToBVKKEg8U.jpg",
        iconSrc: "/icons/NV847LCkUaJJk6CofKhgfVVsADQ.svg",
      },
      {
        id: "financial-services",
        title: "Financial services",
        description:
          "We help financial institutions adapt to evolving digital demands with agility and security. Whether you're optimizing customer experiences, ensuring regulatory compliance, or launching fintech innovations for long term business growth.",
        imageSrc: "/images/3IkbFdGrInFuAe651xdHTPvblJk.jpg",
        iconSrc: "/icons/iUO7kHqYzrumeUO3sPWNv5RaWU.svg",
      },
      {
        id: "technology",
        title: "Technology",
        description:
          "We support technology-driven companies in scaling innovation with clarity and precision. Whether you're building breakthrough software or expanding your digital infrastructure, we align business goals with tech strategy to accelerate performance.",
        imageSrc: "/images/aguefbs4xeL6pOf5bbuTclZOi58.jpg",
        iconSrc: "/icons/l7FQKHXNpkYXl9e5DuusZ9kKmE.svg",
      },
    ],
  },

  metrics: {
    items: [
      {
        value: "4X",
        label: "Average digital strategy projects",
        iconSrc: "/icons/t7vSP4Rj677djkzHVCu0R74joPo.svg",
      },
      {
        value: "5",
        label: "Countries served with B2B services",
        iconSrc: "/icons/qMEVpmaIU6Kr2y1FzyGpFt2dlk.svg",
      },
      {
        value: "100%",
        label: "Increase in traffic for B2B clients",
        iconSrc: "/icons/uGYuKXVYsIAASWuJFsb4S9EZxa4.svg",
      },
      {
        value: "20+",
        label: "Global reach across industries",
        iconSrc: "/icons/7dPe5Ge6KJnbarwVbw0dHfCaGXE.svg",
      },
    ],
    tagline: "We deliver real growth, long-term impact, and measurable success for B2B businesses.",
  },

  endorsements: {
    headline: "Trusted by B2B leaders worldwide",
    backdropImage: "/images/ou4oWL8RwosFygJ5hi7sUUHGb8Q.jpg",
    items: [
      {
        id: "testimonial-1",
        quote:
          "Their professionalism, speed, and communication made a huge difference. We finally have a partner who understands our business.",
        author: "Priya M",
        role: "CEO",
        avatarSrc: "/images/d4bOSjZzklRnk0Y8ssGiLJlIO0.jpg",
      },
      {
        id: "testimonial-2",
        quote:
          "The team brought clarity to a complex integration challenge and delivered beyond expectations.",
        author: "Sonia K",
        role: "Head of Product",
        avatarSrc: "/images/GEa5AaG3m0spY7fftLUtH9VOzI.jpg",
      },
      {
        id: "testimonial-3",
        quote:
          "The team brought clarity to a complex integration challenge and delivered beyond expectations.",
        author: "Mark D",
        role: "Head of Operations",
        company: "B2B Logistics Company",
        avatarSrc: "/images/N8xp5eiZVkdKgKCiK4a5rkQI.jpg",
      },
      {
        id: "testimonial-4",
        quote:
          "We saw a 3.5x increase in qualified leads in just 6 months. They don’t just deliver solutions they deliver results.",
        author: "Daniel R",
        role: "Director of Marketing",
        avatarSrc: "/images/eGjNeYGnzh6PxwjZw2sLNTa0No.jpg",
      },
    ],
  },

  pricing: {
    headline: "The right consulting plan for your business",
    discountBadge: "Save up to 30%",
    checkIconSrc: "/icons/igWV64CbhQMJ3He1oqptt5Yntdc.svg",
    plans: [
      {
        id: "starter",
        name: "Starter",
        monthlyPrice: 1500,
        yearlyPrice: 1050,
        description: "Perfect for early-stage teams or small B2B companies.",
        ctaText: "Get started",
        ctaHref: "/contact",
        popular: false,
        features: [
          "Strategy sessions (2x/month)",
          "Competitive landscape analysis",
          "Ideal customer profile (ICP) development",
          "1 sales funnel review or optimization",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        monthlyPrice: 3500,
        yearlyPrice: 2450,
        description: "Designed for scaling B2B teams focused on lead generation.",
        ctaText: "Start growing",
        ctaHref: "/contact",
        popular: true,
        features: [
          "Weekly consulting sessions",
          "GTM & sales process alignment",
          "CRM optimization and reporting",
          "Lead generation roadmap",
          "Priority support",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        monthlyPrice: 5500,
        yearlyPrice: 3850,
        description: "Consulting for mature B2B operations or multi-region teams.",
        ctaText: "Get started",
        ctaHref: "/contact",
        popular: false,
        features: [
          "Dedicated strategy consultant",
          "Quarterly growth audits & roadmap",
          "Team training and onboarding",
          "Full-stack MarTech evaluation",
          "On-call support and quarterly workshops",
        ],
      },
    ],
  },

  articles: {
    headline: "Recent articles",
    note: "Read every blog and stay ahead in the B2B space",
    cta: {
      text: "Explore all blogs",
      href: "/blog",
      arrowIcon: "/icons/lF4qvKFOOsAkrC72wGno0l1d2kg.svg",
    },
    items: [
      {
        id: "sales-funnel",
        title: "How to scale your B2B sales funnel in 2026",
        category: "Team Collaboration",
        date: "Jan 21, 2026",
        imageSrc: "/images/xfRqUBEwWre3EugH67J0zW90I.jpg",
        href: "/blog/how-to-scale-your-b2b-sales-funnel-in-2026",
      },
      {
        id: "market-research",
        title: "The power of market research in B2B strategy",
        category: "Productivity",
        date: "Jan 19, 2026",
        imageSrc: "/images/Vqnnf2c8TUMDaPweZTzLwKmHec.jpg",
        href: "/blog/the-power-of-market-research-in-b2b-strategy",
      },
      {
        id: "right-crm",
        title: "Choosing the right CRM for your B2B sales team",
        category: "Data & Analytics",
        date: "Jan 16, 2026",
        imageSrc: "/images/RjA8XHOIA8k7J1fnQYlwcM8FJE.jpg",
        href: "/blog/choosing-the-right-crm-for-your-b2b-sales-team",
      },
    ],
  },

  cta: {
    headline: "Want to join a growing list of forward-thinking companies?",
    buttonText: "Schedule a consultation",
    buttonHref: "/contact",
    awards: [
      { title: "Clutch global award", iconSrc: "/icons/Gx6UBmzydtzvFxaR6nNq8iTZoXs.svg" },
      { title: "Forbes business awards", iconSrc: "/icons/NTvSIOmgsP6rrvHPAQBQW9y1vA.svg" },
      { title: "CXO global awards", iconSrc: "/icons/Gx6UBmzydtzvFxaR6nNq8iTZoXs.svg" },
      { title: "Fastest B2B service provider", iconSrc: "/icons/NTvSIOmgsP6rrvHPAQBQW9y1vA.svg" },
    ],
  },
};
