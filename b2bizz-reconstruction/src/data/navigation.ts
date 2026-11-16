export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavigationData {
  logo: {
    text: string;
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
    navColumnTitle: string;
    navLinks: NavItem[];
    contactColumnTitle: string;
    email: string;
    phone: string;
    address: string;
    legalLinks: NavItem[];
    copyright: string;
  };
}

export const NAVIGATION_DATA: NavigationData = {
  logo: {
    text: "B2bizz",
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
      label: "Home 2",
      href: "/home-2",
      description: "Alternative GTM and SaaS landing variant",
      badge: "Variant",
    },
    {
      label: "All Services",
      href: "/service",
      description: "Explore our 5 core enterprise consulting services",
    },
    {
      label: "Case Studies",
      href: "/case-study",
      description: "Real-world B2B revenue and lead generation transformations",
    },
    {
      label: "Blog Articles",
      href: "/blog",
      description: "Actionable thought leadership and sales funnel guides",
    },
    {
      label: "Changelog",
      href: "/changelog",
      description: "Platform updates, service evolutions, and release notes",
      badge: "v2.4",
    },
    {
      label: "Privacy Policy",
      href: "/legal-pages/privacy-policy",
      description: "Data governance, privacy standards, and compliance",
    },
  ],
  headerCta: {
    label: "Request a consultation",
    href: "/contact",
  },
  footer: {
    description:
      "Empower your B2B business with result-driven consulting. From strategy to execution, we deliver measurable growth through expert digital and operational solutions.",
    navColumnTitle: "Pages links",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Home 2", href: "/home-2" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/service" },
      { label: "Case Study", href: "/case-study" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Changelog", href: "/changelog" },
    ],
    contactColumnTitle: "Contact on",
    email: "info@b2bizz.com",
    phone: "+1 (800) 456-7890",
    address: "100 Montgomery St, Suite 1500, San Francisco, CA 94104",
    legalLinks: [
      { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
    ],
    copyright: `© ${new Date().getFullYear()} B2bizz Consulting. All rights reserved.`,
  },
};
