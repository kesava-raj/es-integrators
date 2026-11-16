"use strict";

import React from "react";
import { CaseStudy } from "@/data/case-studies-data";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function CaseStudyDetailChallenge({ study }: { study: CaseStudy }) {
  const { challenge, solution } = study;

  return (
    <section className="py-16 lg:py-24 relative z-10">
      <div className="container-wrapper space-y-16">
        {/* Challenge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-brand-volt leading-snug tracking-tight mt-3">
              {challenge.heading}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed">
              {challenge.description}
            </p>
            <div className="space-y-3 pt-2">
              {challenge.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-border-olive text-sm sm:text-base text-text-primary"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-olive/50" />

        {/* Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-volt" />
              The Solution & Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-brand-volt leading-snug tracking-tight mt-3">
              {solution.heading}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed">
              {solution.description}
            </p>
            <div className="space-y-3 pt-2">
              {solution.architecturePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-border-olive text-sm sm:text-base text-text-primary"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-volt shrink-0 mt-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyDetailChallenge;
