"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "step-1",
      stepNum: "01",
      title: "Understand Business Needs",
      iconSrc: "/icons/icon-W1lcf4BgY3X9.svg",
      description: "We analyze specific operational requirements and structural bottlenecks to design scalable solutions that evolve with your organization.",
    },
    {
      id: "step-2",
      stepNum: "02",
      title: "Standardized Architecture",
      iconSrc: "/icons/icon-ZfEE2pKPHkOF.svg",
      description: "We build component-based environments and robust integrations that bring internal and external business systems together seamlessly.",
    },
    {
      id: "step-3",
      stepNum: "03",
      title: "Deliver Sustainable Growth",
      iconSrc: "/icons/icon-1ClaDdRxEtRT.svg",
      description: "We support organizations throughout the solution lifecycle—from initial implementation to long-term operations, maintenance and consulting.",
    },
  ];

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, CTA Button */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
              Our Methodology
            </span>
            <h2 className="text-h2-large text-brand-volt leading-[1.2] font-normal tracking-tight">
              Our approach
              <br />
              to sustainable
              <br />
              business growth
            </h2>

            <p className="text-body text-text-secondary text-sm sm:text-base leading-relaxed max-w-md">
              Our standardized 3-phase methodology ensures your business simplifies technological complexity, implements scalable solutions, and achieves tangible performance.
            </p>

            <div className="pt-2">
              <Link
                href="/service"
                className="btn-primary"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>


          {/* Right Column: Interactive Staggered Pipeline with Ramp & Step Tabs */}
          <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[480px] flex flex-col justify-between">
            {/* Top Step Pill Tabs */}
            <div className="flex justify-center sm:justify-start lg:justify-center pb-6">
              <div className="inline-flex items-center p-1.5 rounded-full bg-surface-card border border-border-olive gap-1">
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`px-4 sm:px-5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                      activeStep === idx
                        ? "bg-brand-volt text-surface-base font-semibold border border-brand-volt shadow-sm"
                        : "text-text-secondary hover:text-brand-volt hover:bg-surface-subtle"
                    }`}
                  >
                    {step.stepNum}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Step Narrative Note */}
            <div className="mb-4 text-center sm:text-left px-2">
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface-subtle/80 border border-border-olive/50 p-3 sm:p-4 rounded-2xl backdrop-blur-sm">
                <span className="font-semibold text-brand-volt mr-2">Phase {steps[activeStep].stepNum}:</span>
                {steps[activeStep].description}
              </p>
            </div>

            {/* Visual Ramp Wave Graphic at Bottom */}
            <div className="relative w-full min-h-[260px] sm:min-h-[320px] flex items-end">
              {/* SVG Background Slope Shape (Hidden on small mobile to avoid cramped overlap) */}
              <div className="hidden sm:block absolute inset-x-0 bottom-0 w-full h-[180px] sm:h-[220px] pointer-events-none opacity-80">
                <Image
                  src="/icons/icon-X8QKXnvD0vuQ.svg"
                  alt=""
                  fill
                  className="object-fill object-bottom"
                />
              </div>

              {/* 3 Staggered Step Cards positioned along the ramp */}
              <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-end pb-4 sm:pb-12 px-1">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const staggerClasses = [
                    "", // Step 1
                    "sm:mb-10", // Step 2
                    "sm:mb-20", // Step 3
                  ];

                  return (
                    <div
                      key={step.id}
                      className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${staggerClasses[idx]} ${
                        isActive
                          ? "bg-surface-card border-brand-volt shadow-[0_0_20px_var(--token-overlay-glow)] sm:-translate-y-2"
                          : "bg-surface-subtle/90 border-border-olive hover:border-border-olive/90"
                      }`}
                      onClick={() => setActiveStep(idx)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-base border border-border-olive/60 flex items-center justify-center shrink-0">
                          <Image
                            src={step.iconSrc}
                            alt=""
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-brand-volt leading-tight">
                          {step.title}
                        </span>
                      </div>
                      {/* Dashed vertical connector line on desktop */}
                      <div className="hidden sm:block absolute left-1/2 top-full w-px h-8 border-l border-dashed border-border-olive/80" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
