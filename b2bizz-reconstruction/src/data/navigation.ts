export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
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
    navColumnTitle: string;
    navLinks: NavItem[];
    contactColumnTitle: string;
    email: string;
    phone: string;
    address: string;
    locations: { city: string; country: string; label: string }[];
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
      label: "Alternative View",
      href: "/home-2",
      description: "Executive solutions and enterprise consulting landing variant",
      badge: "Variant",
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
      label: "Changelog",
      href: "/changelog",
      description: "Service evolutions, platform capabilities, and updates",
      badge: "v2.5",
    },
    {
      label: "Privacy Policy",
      href: "/legal-pages/privacy-policy",
      description: "Data governance, compliance, and privacy commitments",
    },
  ],
  headerCta: {
    label: "Explore Our Solutions",
    href: "/service",
  },
  footer: {
    description:
      "Emerald System Integrators helps businesses move forward through technology solutions, enterprise expertise and strategic consulting.",
    navColumnTitle: "Navigation",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/service" },
      { label: "Case Studies", href: "/case-study" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Changelog", href: "/changelog" },
    ],
    contactColumnTitle: "Get in Touch",
    email: "admin@es-integrators.com",
    phone: "+1 (800) 456-7890",
    address: "Chennai, Tamil Nadu, India • Michigan, USA",
    locations: [
      { city: "Chennai", country: "India", label: "Chennai, Tamil Nadu, India" },
      { city: "Michigan", country: "USA", label: "Michigan, USA" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
    ],
    copyright: "© Emerald System Integrators. All Rights Reserved.",
  },
};

