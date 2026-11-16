"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { METRICS_DATA, MetricItem } from "@/data/metrics";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface MetricCounterProps {
  metrics?: MetricItem[];
  className?: string;
  enableScrollTrigger?: boolean;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  metrics = METRICS_DATA,
  className,
  enableScrollTrigger = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !enableScrollTrigger) {
      setCounts(metrics.map((m) => m.value));
      return;
    }

    const targets = metrics.map((m) => ({ val: 0, target: m.value }));

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        targets.forEach((obj, i) => {
          gsap.to(obj, {
            val: obj.target,
            duration: 2.0,
            ease: "power2.out",
            onUpdate: () => {
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.round(obj.val);
                return next;
              });
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [metrics, enableScrollTrigger]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6",
        className
      )}
    >
      {metrics.map((item, idx) => (
        <Card
          key={`${item.label}-${idx}`}
          variant="base"
          enableSpotlight
          className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 space-y-4"
        >
          <div className="flex items-baseline gap-0.5 sm:gap-1 flex-nowrap whitespace-nowrap">
            {item.prefix && (
              <span className="text-xl sm:text-3xl font-display font-bold text-brand-volt">
                {item.prefix}
              </span>
            )}
            <span className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-text-primary">
              {counts[idx]}
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-volt">
              {item.suffix}
            </span>
          </div>

          <div className="space-y-1 border-t border-border-olive/60 pt-4">
            <h4 className="text-sm sm:text-base font-semibold font-display text-text-primary">
              {item.label}
            </h4>
            {item.sublabel && (
              <p className="text-xs text-text-muted line-clamp-2">
                {item.sublabel}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MetricCounter;
