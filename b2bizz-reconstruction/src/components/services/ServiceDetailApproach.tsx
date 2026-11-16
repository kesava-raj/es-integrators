"use strict";
import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services-data";

export function ServiceDetailApproach({ service }: { service: ServiceItem }) {
  return (
    <section className="py-14 sm:py-20 lg:py-28 relative z-10">
      <div className="container-wrapper">
        {/* Section Heading & Subtitle */}
        <div className="max-w-[880px] mb-12">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-normal leading-[1.22] text-brand-volt tracking-tight mb-6">
            {service.approachHeading}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {service.approachText}
          </p>
        </div>

        {/* Dual Split: Approach Image & Deliverables Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photography */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-[28px] overflow-hidden bg-surface-base border border-border-olive shadow-2xl">
            <Image
              src={service.approachImageSrc}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: 4 Deliverables Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-normal text-text-primary mb-6">
              Key Deliverables & Scope
            </h3>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[20px] bg-surface-card border border-border-olive hover:border-brand-volt/40 flex items-center justify-between gap-4 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-brand-volt/10 border border-brand-volt/30 flex items-center justify-center shrink-0 text-brand-volt">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-normal text-text-primary">
                    {item}
                  </span>
                </div>

                <span className="text-xs font-mono text-brand-volt shrink-0">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
