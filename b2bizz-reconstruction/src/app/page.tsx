import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ValuePropSection } from "@/components/home/ValuePropSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { HOME_DATA } from "@/data/home-data";

export default function B2bizzHomepage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Hero Section with Bottom-Aligned Headline and Capabilities Ticker */}
      <HeroSection />

      {/* 2. Client Logo Marquee with authentic 150px breathing padding */}
      <section className="py-[100px] lg:py-[150px] relative z-10">
        <LogoMarquee headline={HOME_DATA.marquee.headline} />
      </section>

      {/* 3. About / Informed Strategy Overview */}
      <AboutSection />

      {/* 4. Accelerating Growth Across Diverse Industries Slider */}
      <IndustriesSection />

      {/* 5. What Makes Us The Right Partner with Integrated Testimonial Banner */}
      <ValuePropSection />

      {/* 6. Expert Services Interactive Accordion and Live Project Preview */}
      <ServicesSection />

      {/* 7. Proven Performance & Key Impact Metrics with 3D Constellation Globe */}
      <MetricsSection />

      {/* 8. Featured Case Studies Interactive Showcase */}
      <CaseStudiesSection />

      {/* 9. Methodology & Strategic 3-Step Execution Pipeline with Ramp Wave */}
      <MethodologySection />

      {/* 10. Conversion Banner (Pre-footer CTA) */}
      <section className="section-padding relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
