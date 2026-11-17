"use client";

import React from "react";
import Image from "next/image";
import { PARTNERS_DATA, PartnerLogo } from "@/data/partners";
import { cn } from "@/lib/utils";

export interface LogoMarqueeProps {
  headline?: string;
  className?: string;
  speedSeconds?: number;
  partners?: PartnerLogo[];
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  headline = "Accelerating growth for forward-thinking enterprise leaders",
  className,
  speedSeconds = 35,
  partners = PARTNERS_DATA,
}) => {
  // Duplicate array to enable seamless infinite looping
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <div className={cn("w-full space-y-8 overflow-hidden py-8", className)}>
      {headline && (
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
            {headline}
          </p>
        </div>
      )}

      {/* Marquee Track Container with Edge Gradient Mask */}
      <div className="relative w-full mask-gradient-x overflow-hidden">
        <div
          className="flex items-center gap-12 sm:gap-16 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{
            animation: `marquee ${speedSeconds}s linear infinite`,
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-pointer px-4"
              title={`${partner.name} (${partner.category})`}
            >
              <div className="relative h-7 flex items-center">
                <Image
                  src={partner.logoSrc}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-7 w-auto object-contain brightness-0 dark:brightness-100 opacity-60 hover:opacity-100 dark:opacity-75 dark:hover:opacity-100 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
