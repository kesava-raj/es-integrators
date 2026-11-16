"use client";

import React from "react";
import Link from "next/link";
import { Headphones, Users, Activity, ShieldCheck, MessageSquare } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const HeroSection: React.FC = () => {
  const { hero } = HOME_DATA;

  const capabilityIcons = [Headphones, Users, Activity, ShieldCheck, MessageSquare];

  return (
    <section className="section-padding-hero relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Main Hero Card Container matching Reference layout */}
        <div className="relative rounded-[28px] sm:rounded-[32px] border border-border-olive/60 bg-surface-base overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          {/* Authentic Ambient Diagonal Volt/Olive Light Beam from Bottom-Right */}
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                "radial-gradient(circle 800px at 100% 100%, rgba(243, 255, 201, 0.22) 0%, rgba(88, 94, 68, 0.18) 30%, transparent 70%)",
            }}
          />

          {/* Subtle Secondary Ambient Glow at Top */}
          <div className="glow-ambient-volt top-0 right-1/4 opacity-40 pointer-events-none" />

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

