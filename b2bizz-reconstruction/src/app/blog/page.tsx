import React from "react";
import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Emerald System Integrators (ESI)",
  description:
    "Thought leadership and insights on enterprise technology, web application development, systems integration, and business consulting from Emerald System Integrators.",
};

export default function BlogPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Page Header with clearance */}
      <BlogHero />

      {/* 2. Interactive Filterable Grid */}
      <BlogGrid />

      {/* 3. Conversion Banner */}
      <section className="section-padding relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
