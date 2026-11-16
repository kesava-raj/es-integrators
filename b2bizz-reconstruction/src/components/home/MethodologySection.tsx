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
          <div className="lg:col-span-7 relative min-h-[440px] sm:min-h-[480px] flex flex-col justify-between">
            {/* Top Step Pill Tabs */}
            <div className="flex justify-center sm:justify-start lg:justify-center pb-6">
              <div className="inline-flex items-center p-1.5 rounded-full bg-[#161A18] border border-border-olive/70 gap-1">
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`px-5 py-1.5 rounded-full text-xs font-normal transition-all ${
                      activeStep === idx
                        ? "bg-[#252B23] text-brand-volt font-medium border border-border-olive"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {step.stepNum}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Ramp Wave Graphic at Bottom */}
            <div className="relative w-full h-[320px] sm:h-[360px] flex items-end">
              {/* SVG Background Slope Shape */}
              <div className="absolute inset-x-0 bottom-0 w-full h-[180px] sm:h-[220px] pointer-events-none opacity-90">
                <Image
                  src="/icons/icon-X8QKXnvD0vuQ.svg"
                  alt=""
                  fill
                  className="object-fill object-bottom"
                />
              </div>

              {/* 3 Staggered Step Cards positioned along the ramp with vertical dashed drop lines */}
              <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 items-end pb-8 sm:pb-12 px-2">
                {/* Step 1: Low-left */}
                <div
                  className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeStep === 0
                      ? "bg-[#161A18] border-brand-volt/70 shadow-[0_0_20px_rgba(243,255,201,0.15)] translate-y-[-8px]"
                      : "bg-[#0E100F]/90 border-border-olive/60 hover:border-border-olive/90"
                  }`}
                  onClick={() => setActiveStep(0)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center shrink-0">
                      <Image
                        src={steps[0].iconSrc}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-brand-volt leading-tight">
                      {steps[0].title}
                    </span>
                  </div>
                  {/* Dashed vertical connector line */}
                  <div className="hidden sm:block absolute left-1/2 top-full w-px h-10 border-l border-dashed border-border-olive/80" />
                </div>

                {/* Step 2: Mid-center */}
                <div
                  className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer sm:mb-12 ${
                    activeStep === 1
                      ? "bg-[#161A18] border-brand-volt/70 shadow-[0_0_20px_rgba(243,255,201,0.15)] translate-y-[-8px]"
                      : "bg-[#0E100F]/90 border-border-olive/60 hover:border-border-olive/90"
                  }`}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center shrink-0">
                      <Image
                        src={steps[1].iconSrc}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-brand-volt leading-tight">
                      {steps[1].title}
                    </span>
                  </div>
                  {/* Dashed vertical connector line */}
                  <div className="hidden sm:block absolute left-1/2 top-full w-px h-16 border-l border-dashed border-border-olive/80" />
                </div>

                {/* Step 3: High-right */}
                <div
                  className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer sm:mb-24 ${
                    activeStep === 2
                      ? "bg-[#161A18] border-brand-volt/70 shadow-[0_0_20px_rgba(243,255,201,0.15)] translate-y-[-8px]"
                      : "bg-[#0E100F]/90 border-border-olive/60 hover:border-border-olive/90"
                  }`}
                  onClick={() => setActiveStep(2)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center shrink-0">
                      <Image
                        src={steps[2].iconSrc}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-brand-volt leading-tight">
                      {steps[2].title}
                    </span>
                  </div>
                  {/* Dashed vertical connector line */}
                  <div className="hidden sm:block absolute left-1/2 top-full w-px h-28 border-l border-dashed border-border-olive/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
