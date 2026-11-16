import React from "react";
import type { Metadata } from "next";
import { HomeTwoHero } from "@/components/home-two/HomeTwoHero";
import { HomeTwoServices } from "@/components/home-two/HomeTwoServices";
import { HomeTwoMission } from "@/components/home-two/HomeTwoMission";
import { HomeTwoSectors } from "@/components/home-two/HomeTwoSectors";
import { HomeTwoMetrics } from "@/components/home-two/HomeTwoMetrics";
import { HomeTwoEndorsements } from "@/components/home-two/HomeTwoEndorsements";
import { HomeTwoPricing } from "@/components/home-two/HomeTwoPricing";
import { HomeTwoArticles } from "@/components/home-two/HomeTwoArticles";
import { HomeTwoCta } from "@/components/home-two/HomeTwoCta";

export const metadata: Metadata = {
  title: "B2bizz - B2B Consulting Agency for Digital Growth",
  description:
    "We take the guesswork out of business growth with tailored consulting, strategic planning, and results-backed execution.",
};

export default function HomeTwoPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Hero Section with Delivering Insight Driven Strategy and Featured Non-Profit Case Study */}
      <HomeTwoHero />

      {/* 2. Smart Solutions Quick-Grid (2x2 with Thumbs and Scope Tags) */}
      <HomeTwoServices />

      {/* 3. Smarter Decisions Core Mission Statement & Principles */}
      <HomeTwoMission />

      {/* 4. Serving Businesses Across Every Sector Interactive Carousel */}
      <HomeTwoSectors />

      {/* 5. Key Metrics Counter Row with Benchmark Numbers */}
      <HomeTwoMetrics />

      {/* 6. Trusted By B2B Leaders Worldwide Endorsements Cards */}
      <HomeTwoEndorsements />

      {/* 7. The Right Consulting Plan For Your Business Dynamic Pricing Tiers */}
      <HomeTwoPricing />

      {/* 8. Recent Articles Thought Leadership Grid */}
      <HomeTwoArticles />

      {/* 9. Want to Join A Growing List of Forward-Thinking Companies Pre-Footer CTA & Awards */}
      <HomeTwoCta />
    </div>
  );
}
