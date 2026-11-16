export interface PartnerLogo {
  name: string;
  category: string;
  logoSrc: string;
  width: number;
  height: number;
}

export const PARTNERS_DATA: PartnerLogo[] = [
  {
    name: "EdgeTrans",
    category: "B2B Logistics",
    logoSrc: "/icons/logo-edgetrans.svg",
    width: 114,
    height: 26,
  },
  {
    name: "Brand Edge",
    category: "FinTech Platform",
    logoSrc: "/icons/logo-brand-edge.svg",
    width: 83,
    height: 26,
  },
  {
    name: "Eco Enterprise",
    category: "Manufacturing",
    logoSrc: "/icons/logo-eco-enterprise.svg",
    width: 69,
    height: 22,
  },
  {
    name: "Spendora",
    category: "Advisory Agency",
    logoSrc: "/icons/logo-spendora.svg",
    width: 80,
    height: 23,
  },
  {
    name: "InnovateTech",
    category: "SaaS Workflow",
    logoSrc: "/icons/logo-innovatetech.svg",
    width: 75,
    height: 26,
  },
  {
    name: "ShopSmart",
    category: "Omnichannel Retail",
    logoSrc: "/icons/logo-shopsmart.svg",
    width: 85,
    height: 30,
  },
  {
    name: "Help Point",
    category: "Non-Profit",
    logoSrc: "/icons/logo-help-point.svg",
    width: 90,
    height: 30,
  },
];
