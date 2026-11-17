import React from "react";
import type { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies | Emerald System Integrators (ESI)",
  description:
    "Explore how Emerald System Integrators partners with businesses worldwide to simplify technological complexity, optimize operations, and achieve measurable growth.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Page Header with clearance */}
      <CaseStudiesHero />

      {/* 2. Interactive Filterable Grid */}
      <CaseStudiesGrid />

      {/* 3. Conversion Banner */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
