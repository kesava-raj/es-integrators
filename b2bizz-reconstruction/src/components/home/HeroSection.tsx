"use client";

import React from "react";
import Link from "next/link";
import { Headphones, Users, Activity, ShieldCheck, MessageSquare } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";
import AnimatedGradient from "@/components/ui/animated-gradient";

export const HeroSection: React.FC = () => {
  const { hero } = HOME_DATA;
  const capabilityIcons = [Headphones, Users, Activity, ShieldCheck, MessageSquare];

  return (
    <section className="section-padding-hero relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Main Hero Card Container matching Reference layout */}
        <div className="relative rounded-[28px] sm:rounded-[32px] border border-border-olive/60 bg-surface-base overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          {/* Dynamic WebGL2 Animated Gradient in ESI Emerald & Background Tones */}
          <AnimatedGradient
            config={{
              preset: "custom",
              color1: "#043D2A",
              color2: "#10B981",
              color3: "#0E100F",
              rotation: -35,
              proportion: 38,
              scale: 0.28,
              speed: 15,
              distortion: 15,
              swirl: 55,
              swirlIterations: 6,
              softness: 85,
              shape: "Edge",
              shapeSize: 32,
            }}
            noise={{ opacity: 0.12, scale: 1.2 }}
            style={{ zIndex: 0 }}
            className="opacity-85"
          />

          {/* Authentic Ambient Diagonal Volt/Olive Light Beam from Bottom-Right */}
          <div className="absolute inset-0 pointer-events-none opacity-60 hero-ambient-glow z-[1]" />

          {/* Subtle Secondary Ambient Glow at Top */}
          <div className="glow-ambient-volt top-0 right-1/4 opacity-30 pointer-events-none z-[1]" />

          {/* Soft contrast gradient mask ensuring text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent pointer-events-none z-[2]" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-base/80 via-surface-base/30 to-transparent pointer-events-none z-[2]" />

          {/* Hero Content Block */}
          <div className="relative z-10 space-y-6 max-w-4xl pt-28 sm:pt-32">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-volt animate-pulse" />
              {hero.badge}
            </span>

            <h1 className="text-display-1 text-brand-volt leading-[1.15] font-normal tracking-tight">
              Engineering Digital Transformation.
              <br />
              <span className="text-text-primary">Empowering What&apos;s Next.</span>
            </h1>

            <p className="text-body text-text-secondary text-base sm:text-lg lg:text-xl font-light max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Dual CTAs: Primary + Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={hero.primaryCta.href}
                className="btn-primary"
              >
                {hero.primaryCta.text}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border-olive hover:border-brand-volt text-text-primary hover:text-brand-volt bg-surface-card/60 backdrop-blur-sm text-[15px] font-medium transition-all duration-200"
              >
                {hero.secondaryCta.text}
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Capabilities Ticker directly underneath the Hero Card */}
        <div className="relative overflow-hidden py-6 sm:py-8 border-b border-border-olive/30 mask-gradient-x">
          <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
            {[...hero.capabilities, ...hero.capabilities, ...hero.capabilities].map((label, idx) => {
              const Icon = capabilityIcons[idx % capabilityIcons.length];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary font-medium tracking-wide shrink-0"
                >
                  <Icon className="w-4 h-4 text-brand-volt shrink-0" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

