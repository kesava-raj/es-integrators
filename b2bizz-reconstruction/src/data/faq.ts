export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does B2bizz structure client consulting engagements?",
    answer:
      "We operate through dedicated, sprint-based partnerships. After an intensive discovery audit, we establish clear OKRs, architect technical and operational roadmaps, and embed seasoned strategists directly alongside your leadership team for hands-on execution.",
  },
  {
    id: "faq-2",
    question: "What typical timelines can we expect before seeing measurable ROI?",
    answer:
      "Most enterprise clients observe leading indicator improvements—such as conversion funnel efficiency and pipeline velocity—within the first 6 to 8 weeks. Comprehensive compounding revenue uplift is typically realized within 90 to 180 days.",
  },
  {
    id: "faq-3",
    question: "Do you integrate with our existing CRM, ERP, and MarTech stacks?",
    answer:
      "Yes. Our engineering practice specializes in seamless API integrations with platforms such as Salesforce, HubSpot, SAP, NetSuite, and modern headless architectures without disrupting ongoing business operations.",
  },
  {
    id: "faq-4",
    question: "Can we transition from a Starter plan to an Enterprise tier mid-project?",
    answer:
      "Absolutely. Our consulting tiers are modular and designed to scale flexibly as your pipeline demands increase and new multi-region operational requirements emerge.",
  },
  {
    id: "faq-5",
    question: "What security and data privacy standards do you adhere to?",
    answer:
      "Security is treated as a first-class citizen. All solutions and data workflows comply with GDPR, CCPA, and SOC2 best practices, featuring end-to-end data encryption and least-privilege role-based access controls.",
  },
];
