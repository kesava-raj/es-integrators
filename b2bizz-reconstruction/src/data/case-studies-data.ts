export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  duration: string;
  location: string;
  imageSrc: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  overview: string;
  challenge: {
    heading: string;
    description: string;
    points: string[];
  };
  solution: {
    heading: string;
    description: string;
    architecturePoints: string[];
  };
  results: {
    heading: string;
    description: string;
    metrics: { value: string; label: string; detail: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarSrc: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "transedge-logistics",
    slug: "lead-generation-boost-for-a-b2b-logistics-company",
    title: "Lead Generation Boost for a B2B Logistics Company",
    client: "TransEdge Logistics",
    category: "Web Application Development",
    industry: "Logistics & Supply Chain",
    duration: "10 Weeks",
    location: "Michigan, USA",
    imageSrc: "/images/case-study-transedge.jpg",
    stat1: { value: "2.5X", label: "Qualified inquiry boost" },
    stat2: { value: "38%", label: "Bounce rate reduced" },
    overview:
      "TransEdge Logistics required a modern, conversion-driven web application to replace legacy software systems and streamline lead capture for freight shipping contracts.",
    challenge: {
      heading: "Disconnected touchpoints and high drop-off across complex freight quoting.",
      description:
        "Prospective enterprise clients experienced friction trying to obtain freight transit estimates. Legacy monolithic web tools caused sluggish page loads and poor mobile responsiveness, leading to high abandonment rates.",
      points: [
        "Sluggish page response exceeding 4.2 seconds on legacy servers",
        "Fragmented inquiry forms causing 60%+ drop-off before submission",
        "Absence of real-time shipment routing previews for commercial shippers",
      ],
    },
    solution: {
      heading: "Component-based web application with automated workflow synchronization.",
      description:
        "Emerald System Integrators engineered a modern responsive web application. We implemented real-time routing calculators, automated CRM synchronization, and intuitive inquiry funnels designed for freight brokers.",
      architecturePoints: [
        "Modern responsive application architecture with sub-second page rendering",
        "Automated CRM webhook integration synchronizing inquiries into sales dispatch",
        "Modular quote estimation widget with real-time route calculations",
      ],
    },
    results: {
      heading: "Measurable commercial uplift and streamlined sales operations.",
      description:
        "Within four months of deployment, TransEdge experienced a sustained 2.5X surge in verified commercial inquiries alongside dramatic operational time savings.",
      metrics: [
        { value: "2.5X", label: "Inquiry Growth", detail: "Qualified commercial leads" },
        { value: "38%", label: "Bounce Rate", detail: "Reduction in drop-offs" },
        { value: "1.2s", label: "Load Speed", detail: "Global average time-to-interactive" },
      ],
    },
    testimonial: {
      quote:
        "The website structure and easy access to relevant content made our collaboration smooth and impactful. ESI delivered exactly what was needed.",
      author: "Pranwant",
      role: "Blog Writer",
      company: "TransEdge Logistics",
      avatarSrc: "/images/avatar-david-green.jpg",
    },
  },
  {
    id: "brand-edge-fintech",
    slug: "scalable-saas-platform-for-a-fintech-startup",
    title: "Scalable Platform for an Innovative FinTech Provider",
    client: "Brand Edge Fintech",
    category: "Web Application Development",
    industry: "Financial Services & Banking",
    duration: "14 Weeks",
    location: "Global Presence",
    imageSrc: "/images/case-study-brand-edge.jpg",
    stat1: { value: "99.99%", label: "System uptime" },
    stat2: { value: "3.2X", label: "Transaction capacity" },
    overview:
      "Brand Edge needed to scale its financial transaction gateway to handle surging institutional volumes without latency spikes or operational instability.",
    challenge: {
      heading: "System bottlenecks during peak reconciliation periods.",
      description:
        "Sluggish transaction velocity and component integration bottlenecks risked compliance penalties and client dissatisfaction during end-of-quarter audits.",
      points: [
        "Monolithic database locks during high-concurrency payment runs",
        "Lack of standardized API interfaces across third-party banking networks",
        "Manual error resolution cycles requiring engineering intervention",
      ],
    },
    solution: {
      heading: "Modular microservices architecture with automated failover.",
      description:
        "ESI re-architected the application into standardized microservices with asynchronous transaction queues, robust audit telemetry, and standardized API gateways.",
      architecturePoints: [
        "Distributed transaction processing with fault-tolerant circuit breakers",
        "Standardized OpenAPI interface specifications for enterprise banking partners",
        "Real-time operational dashboard for telemetry and ledger balancing",
      ],
    },
    results: {
      heading: "Flawless reliability and 3.2X throughput expansion.",
      description:
        "The platform successfully handled peak quarterly volumes with zero downtime and sub-100ms response times across all payment endpoints.",
      metrics: [
        { value: "99.99%", label: "Uptime", detail: "Zero unplanned outages" },
        { value: "3.2X", label: "Capacity", detail: "Expanded transaction ceiling" },
        { value: "-75%", label: "Latency", detail: "Cut average execution time" },
      ],
    },
    testimonial: {
      quote:
        "Outstanding team quality and flawless project execution. Their engineering capabilities and consulting expertise set them apart.",
      author: "Amarnath",
      role: "Freelancer",
      company: "Brand Edge Fintech",
      avatarSrc: "/images/avatar-orion-blake.jpg",
    },
  },
  {
    id: "eco-enterprise",
    slug: "enterprise-resource-integration-for-a-manufacturing-firm",
    title: "Enterprise Resource Integration for a Manufacturing Firm",
    client: "Eco Enterprise",
    category: "Enterprise Solutions",
    industry: "Manufacturing & Industry 4.0",
    duration: "12 Weeks",
    location: "Chennai, Tamil Nadu, India",
    imageSrc: "/images/case-study-eco-enterprise.jpg",
    stat1: { value: "70%", label: "Faster inventory sync" },
    stat2: { value: "45%", label: "Process latency cut" },
    overview:
      "Eco Enterprise operated five manufacturing facilities with siloed inventory and ERP software. ESI unified these disparate systems into a single standardized architecture.",
    challenge: {
      heading: "Fragmented factory data delaying inventory allocation and dispatch.",
      description:
        "Legacy software created blind spots across shop floors. Production schedules frequently fell out of alignment with order intake and warehouse inventories.",
      points: [
        "Multiple disconnected databases with divergent schema formats",
        "Up to 24-hour delays in material availability reporting",
        "High manual reconciliation labor leading to operational errors",
      ],
    },
    solution: {
      heading: "Standardized component-based technology environment.",
      description:
        "ESI deployed an enterprise integration layer that connects factory ERPs, procurement workflows, and distribution hubs in real time.",
      architecturePoints: [
        "Real-time message bus synchronizing inventory updates in seconds",
        "Standardized data schema unifying reporting across all 5 facilities",
        "Automated reconciliation workflows flagging supply anomalies",
      ],
    },
    results: {
      heading: "Rapid material synchronization and 45% process acceleration.",
      description:
        "Shop floor teams gained live visibility into raw material supplies, slashing turnaround times and ensuring on-time delivery across customer accounts.",
      metrics: [
        { value: "70%", label: "Sync Speed", detail: "Faster warehouse inventory updates" },
        { value: "45%", label: "Latency Cut", detail: "End-to-end order processing acceleration" },
        { value: "100%", label: "Data Integrity", detail: "Eliminated manual entry discrepancies" },
      ],
    },
    testimonial: {
      quote:
        "Timely delivery, constant communication, and high professionalism throughout the development lifecycle.",
      author: "Ravi Kumar",
      role: "Quality Analyst",
      company: "Eco Enterprise",
      avatarSrc: "/images/avatar-michael-brown.jpg",
    },
  },
  {
    id: "spendora-advisory",
    slug: "strategic-digital-shift-for-a-b2b-consulting-agency",
    title: "Strategic Digital Shift for an Advisory Firm",
    client: "Spendora Advisory",
    category: "Business Consulting",
    industry: "Management Consulting",
    duration: "8 Weeks",
    location: "Michigan, USA",
    imageSrc: "/images/case-study-consulting-shift.jpg",
    stat1: { value: "60%", label: "Operational efficiency" },
    stat2: { value: "40%", label: "Faster client onboarding" },
    overview:
      "Spendora Advisory partnered with ESI to transform its manual consulting workflows into a streamlined digital service platform with unified client portals.",
    challenge: {
      heading: "Manual client onboarding and decentralized deliverables management.",
      description:
        "Managing enterprise client engagements across spreadsheets and email chains hindered consultant productivity and slowed project turnaround times.",
      points: [
        "Prolonged client onboarding cycles lasting over 3 weeks",
        "Decentralized project assets leading to version control confusion",
        "Lack of centralized KPI analytics for enterprise advisory clients",
      ],
    },
    solution: {
      heading: "Integrated digital advisory portal and automated onboarding.",
      description:
        "ESI designed and implemented a secure client portal featuring standardized onboarding questionnaires, automated deliverable tracking, and live KPI dashboards.",
      architecturePoints: [
        "Self-service digital onboarding workflows with document e-sign integration",
        "Secure role-based client dashboard for milestone and deliverable review",
        "Automated progress reporting and consultant time tracking",
      ],
    },
    results: {
      heading: "60% operational efficiency gain and accelerated client value.",
      description:
        "Spendora consultants reduced administrative overhead by over 15 hours per week, allowing them to focus directly on strategic advisory and client growth.",
      metrics: [
        { value: "60%", label: "Efficiency", detail: "Admin task reduction across staff" },
        { value: "40%", label: "Onboarding", detail: "Faster time-to-first-deliverable" },
        { value: "98%", label: "Client CSAT", detail: "Reported portal satisfaction" },
      ],
    },
    testimonial: {
      quote:
        "Exceptional commitment and dedication to our business requirements. ESI helped streamline our operations effortlessly.",
      author: "Shivani Kumari",
      role: "Store Owner",
      company: "Spendora Advisory",
      avatarSrc: "/images/avatar-sarah-johnson.jpg",
    },
  },
  {
    id: "omnisync-mobile",
    slug: "cross-platform-mobile-suite-for-field-operations",
    title: "Cross-Platform Mobile Suite for Field Operations",
    client: "Omnisync Operations",
    category: "Mobile Application Development",
    industry: "Field Services & Logistics",
    duration: "16 Weeks",
    location: "Chennai, India",
    imageSrc: "/images/img-gdRM7GW5TQGv.jpg",
    stat1: { value: "85%", label: "Field productivity gain" },
    stat2: { value: "4.9/5", label: "Store user rating" },
    overview:
      "Omnisync required a high-performance cross-platform mobile application to empower 2,000+ field service technicians with offline capabilities and real-time syncing.",
    challenge: {
      heading: "Spotty network connectivity in remote facilities causing data loss.",
      description:
        "Field technicians operated in areas with unreliable connectivity. Traditional web forms caused lost inspection records and delayed customer sign-offs.",
      points: [
        "Inability to log inspection reports offline in basement facilities",
        "High sync conflict rates when reconnecting to central databases",
        "Cluttered mobile user interface slowing down on-site evaluations",
      ],
    },
    solution: {
      heading: "Resilient offline-first mobile architecture with conflict resolution.",
      description:
        "ESI engineered a native-speed cross-platform mobile application with SQLite local storage, background synchronization, and biometric authentication.",
      architecturePoints: [
        "Offline-first local cache ensuring zero data loss during network drops",
        "Intelligent background synchronization queue with automatic conflict merging",
        "Ergonomic one-thumb mobile UI tailored for rugged field environments",
      ],
    },
    results: {
      heading: "85% productivity gain and zero lost inspection reports.",
      description:
        "Field technicians completed audits 35 minutes faster on average, with 100% of inspection data successfully synchronized to headquarters.",
      metrics: [
        { value: "85%", label: "Productivity", detail: "Faster daily report completion" },
        { value: "0", label: "Data Loss", detail: "Zero reports dropped offline" },
        { value: "4.9/5", label: "App Rating", detail: "Internal technician feedback" },
      ],
    },
    testimonial: {
      quote:
        "Remarkable development experience. The team combined technical strength with great design sensitivity.",
      author: "Khushboo Sinha",
      role: "Designer",
      company: "Omnisync Operations",
      avatarSrc: "/images/avatar-emily-clark.jpg",
    },
  },
  {
    id: "help-point-global",
    slug: "supply-chain-workflow-synchronization",
    title: "Supply Chain Workflow Synchronization for Trading",
    client: "Help Point Global",
    category: "Enterprise Solutions",
    industry: "Tourism & Trading",
    duration: "11 Weeks",
    location: "Global Hubs",
    imageSrc: "/images/img-Gey8JdeAVmsT.png",
    stat1: { value: "30%", label: "Operating cost reduction" },
    stat2: { value: "100%", label: "Auditable compliance" },
    overview:
      "Help Point Global required a unified workflow synchronization platform connecting multi-currency commercial trading operations across Asia and the Americas.",
    challenge: {
      heading: "Complex regulatory compliance across international cross-border trade.",
      description:
        "Divergent tariff schedules and manual documentation workflows caused cross-border shipment delays and increased operating overhead.",
      points: [
        "Manual trade compliance reviews consuming over 48 hours per shipment",
        "Discrepancies across international currency conversions and tariffs",
        "Lack of an auditable digital trail for trade finance partners",
      ],
    },
    solution: {
      heading: "Automated workflow synchronization and compliance engine.",
      description:
        "ESI integrated multi-jurisdiction customs databases, automated currency conversion feeds, and centralized trade document generation into an enterprise portal.",
      architecturePoints: [
        "Automated customs classification engine reducing manual audits",
        "Real-time currency hedging rates integrated into invoice workflows",
        "Immutable audit logs providing complete compliance transparency",
      ],
    },
    results: {
      heading: "30% cost reduction and guaranteed regulatory compliance.",
      description:
        "Trade documentation turnaround dropped from 48 hours to under 30 minutes, accelerating shipment velocity across international trade lanes.",
      metrics: [
        { value: "30%", label: "Cost Cut", detail: "Reduced operational overhead" },
        { value: "96%", label: "Time Saved", detail: "From 48 hours to 30 minutes" },
        { value: "100%", label: "Compliance", detail: "Auditable trade records" },
      ],
    },
    testimonial: {
      quote:
        "Timely delivery, constant communication, and high professionalism throughout the application development lifecycle.",
      author: "Ravi Kumar",
      role: "Quality Analyst",
      company: "Help Point Global",
      avatarSrc: "/images/avatar-michael-brown.jpg",
    },
  },
];

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Web Application Development",
  "Mobile Application Development",
  "Enterprise Solutions",
  "Business Consulting",
];
