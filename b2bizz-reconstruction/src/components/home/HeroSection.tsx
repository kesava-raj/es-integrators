"use client";

import React from "react";
import Link from "next/link";
import { Headphones, Users, Activity, ShieldCheck, MessageSquare } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const HeroSection: React.FC = () => {
  const { hero } = HOME_DATA;

  const capabilityItems = [
    { label: "24/7 support and optimization", icon: Headphones },
    { label: "Customer success experts", icon: Users },
    { label: "Live performance tracking", icon: Activity },
    { label: "Security design approach", icon: ShieldCheck },
    { label: "Multichannel client support", icon: MessageSquare },
  ];

  return (
    <section className="section-padding-hero relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Main Hero Card Container matching Reference layout */}
        <div className="relative rounded-[28px] sm:rounded-[32px] border border-border-olive/60 bg-[#0E100F] overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          {/* Authentic Ambient Diagonal Volt/Olive Light Beam from Bottom-Right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle 800px at 100% 100%, rgba(243, 255, 201, 0.22) 0%, rgba(88, 94, 68, 0.18) 30%, rgba(14, 16, 15, 0.8) 65%, transparent 100%)",
            }}
          />

          {/* Subtle Secondary Ambient Glow at Top */}
          <div className="glow-ambient-volt top-0 right-1/4 opacity-40" />

          {/* Bottom Row: H1 Headline on Left, Explore CTA Button on Right */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-24">
            <h1 className="text-display-1 text-brand-volt max-w-3xl leading-[1.2] font-normal tracking-tight">
              Built for B2B,
              <br />
              focused on results.
            </h1>

            <div className="shrink-0 pb-1">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-brand-volt text-canvas font-medium text-[15px] sm:text-base hover:bg-brand-volt-light transition-all duration-300 hover:scale-[1.02] shadow-[0_0_24px_-4px_rgba(243,255,201,0.35)]"
              >
                {hero.primaryCta.text}
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Capabilities Ticker directly underneath the Hero Card */}
        <div className="relative overflow-hidden py-6 sm:py-8 border-b border-border-olive/30 mask-gradient-x">
          <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
            {[...capabilityItems, ...capabilityItems, ...capabilityItems].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary font-medium tracking-wide shrink-0"
                >
                  <Icon className="w-4 h-4 text-brand-volt shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
