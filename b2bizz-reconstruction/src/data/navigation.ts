export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface HubLocation {
  city: string;
  region: string;
  role: string;
  status: string;
}

export interface NavigationData {
  logo: {
    text: string;
    subtext: string;
    href: string;
    iconPath: string;
  };
  mainLinks: NavItem[];
  dropdownLinks: NavItem[];
  headerCta: {
    label: string;
    href: string;
  };
  footer: {
    description: string;
    solutionsTitle: string;
    solutionsLinks: NavItem[];
    companyTitle: string;
    companyLinks: NavItem[];
    navColumnTitle: string;
    navLinks: NavItem[];
    contactColumnTitle: string;
    email: string;
    hubs: HubLocation[];
    sla: string;
    legalLinks: NavItem[];
    copyright: string;
  };
}

export const NAVIGATION_DATA: NavigationData = {
  logo: {
    text: "ESI",
    subtext: "Emerald System Integrators",
    href: "/",
    iconPath: "/icons/logo-b2bizz.png",
  },
  mainLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Case Study", href: "/case-study" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  dropdownLinks: [
    {
      label: "Solutions Overview",
      href: "/service",
      description: "Web apps, mobile solutions, enterprise architecture & consulting",
    },
    {
      label: "Case Studies",
      href: "/case-study",
      description: "Real-world enterprise system integration and transformation results",
    },
    {
      label: "Insights & Blog",
      href: "/blog",
      description: "Thought leadership on technology development and digital strategy",
    },
    {
      label: "About Emerald",
      href: "/about",
      description: "Our mission, specialized practices, and engineering philosophy",
    },
    {
      label: "Contact & Inquiries",
      href: "/contact",
      description: "Direct partnership consultation and enterprise RFP submission",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
      description: "Data governance, compliance, and privacy commitments",
    },
  ],
  headerCta: {
    label: "Explore Our Solutions",
    href: "/service",
  },
  footer: {
    description:
      "Emerald System Integrators (ESI) delivers enterprise-grade software engineering, robust systems architecture, and transformative strategic consulting for organizations worldwide.",
    solutionsTitle: "Solutions & Practices",
    solutionsLinks: [
      { label: "Web Application Development", href: "/service/web-application-development" },
      { label: "Mobile Application Development", href: "/service/mobile-application-development" },
      { label: "Enterprise Solutions", href: "/service/enterprise-solutions" },
      { label: "Business Consulting", href: "/service/business-consulting" },
      { label: "All Solutions Overview", href: "/service" },
    ],
    companyTitle: "Company & Insights",
    companyLinks: [
      { label: "About ESI", href: "/about" },
      { label: "Client Case Studies", href: "/case-study" },
      { label: "Insights & Articles", href: "/blog" },
      { label: "Our Story & Values", href: "/about#story" },
      { label: "Executive Leadership", href: "/about#team" },
      { label: "Get in Touch", href: "/contact" },
    ],
    navColumnTitle: "Navigation",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/service" },
      { label: "Case Studies", href: "/case-study" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    contactColumnTitle: "Global Delivery Hubs",
    email: "admin@es-integrators.com",
    hubs: [
      {
        city: "Chennai",
        region: "Tamil Nadu, India",
        role: "Core Engineering & Systems Integration",
        status: "Active Delivery Center",
      },
      {
        city: "Michigan",
        region: "USA",
        role: "Strategic Client Advisory & Regional Operations",
        status: "North American Hub",
      },
    ],
    sla: "Inquiries reviewed within 24 business hours",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    copyright: "© 2026 Emerald System Integrators (ESI). All Rights Reserved.",
  },
};
