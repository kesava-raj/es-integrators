import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { HomeTwoEndorsements } from "@/components/home-two/HomeTwoEndorsements";
import { AboutTeam } from "@/components/about/AboutTeam";
import { HomeTwoCta } from "@/components/home-two/HomeTwoCta";

export const metadata: Metadata = {
  title: "About Us | Emerald System Integrators (ESI)",
  description:
    "Emerald System Integrators is a technology and consulting partner helping businesses become ready for the present and future through technology, specialist resourcing, and consulting.",
};


export default function AboutPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Hero with Headline, Subtitle, CTA and 3-Photo Collage */}
      <AboutHero />

      {/* 2. Core Story Statement, 3 Impact Stats, and Consultation Callout */}
      <AboutStory />

      {/* 3. Principles That Shape Our Strategy (5 Core Values) */}
      <AboutPrinciples />

      {/* 4. Vision & Mission Dual Split Architecture */}
      <AboutVisionMission />

      {/* 5. Trusted By Fast-Moving B2B Teams Marquee Ticker */}
      <section className="py-[30px] lg:py-[40px] relative z-10">
        <LogoMarquee headline="Trusted by Fast-Moving B2B Teams" />
      </section>

      {/* 6. Client Endorsements Testimonials */}
      <HomeTwoEndorsements />

      {/* 7. Executive Leadership Team Grid */}
      <AboutTeam />

      {/* 8. Conversion Banner (Pre-footer CTA & Awards) */}
      <HomeTwoCta />
    </div>
  );
}
