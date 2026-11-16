export interface MetricItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

export const METRICS_DATA: MetricItem[] = [
  {
    value: 4,
    suffix: "X",
    label: "Pipeline Growth",
    sublabel: "Average B2B lead generation expansion",
  },
  {
    value: 5,
    suffix: "+",
    label: "Global Enterprise Hubs",
    sublabel: "Active across North America & Europe",
  },
  {
    value: 100,
    suffix: "%",
    label: "On-Time Delivery",
    sublabel: "Disciplined sprint velocity & execution",
  },
  {
    value: 20,
    suffix: "+",
    label: "Enterprise Deployments",
    sublabel: "Mission-critical infrastructure scaled",
  },
];
