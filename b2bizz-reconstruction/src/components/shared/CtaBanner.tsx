"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export interface CtaBannerProps {
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ className }) => {
  return (
    <div className={`space-y-4 sm:space-y-6 ${className || ""}`}>
      {/* Top Graphic Card matching Reference with Emerald Tech Atmosphere */}
      <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 min-h-[250px] sm:min-h-[280px] p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-5 shadow-2xl bg-[#080B09]">
        {/* Authentic Ambient CTA Graphic Wallpaper in ESI Dark Emerald Palette */}
        <Image
          src="/images/cta-emerald-bg.jpg"
          alt="Emerald System Integrators Ambient Backdrop"
          fill
          priority
          className="object-cover object-top opacity-85 select-none transition-transform duration-700 ease-out hover:scale-105"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.8) 65%, transparent 88%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.8) 65%, transparent 88%)",
          }}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />

        {/* Ambient Dark Scrims ensuring seamless obsidian integration and zero bottom artifacts */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080B09] via-[#080B09]/95 to-transparent pointer-events-none z-[2]" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080B09]/80 to-transparent pointer-events-none z-[2]" />
        <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-r from-[#080B09]/85 via-transparent to-[#080B09]/85 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none z-[2]" />

        {/* Subtle Top Volt Accent Edge Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-volt/40 to-transparent pointer-events-none z-[3]" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <h2 className="text-h2-compact text-brand-volt leading-[1.25] font-normal tracking-tight">
            Ready to engineer what&apos;s next
            <br />
            with Emerald System Integrators?
          </h2>

          <div className="pt-1">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-normal text-brand-volt hover:text-brand-volt-light transition-colors group"
            >
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Explore Our Solutions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Dual Action Cards matching Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <Link
          href="/contact"
          className="p-5 sm:p-6 rounded-[20px] bg-surface-card border border-border-olive/60 flex items-center justify-between group hover:border-brand-volt/50 transition-colors shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0">
              <Image
                src="/icons/icon-FNXmFBsR2D4C.svg"
                alt=""
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-normal text-brand-volt group-hover:text-brand-volt-light transition-colors">
                Ready to simplify IT complexity?
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Connect with our team
              </div>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-brand-volt group-hover:translate-x-1 transition-all shrink-0 ml-2" />
        </Link>

        {/* Card 2 */}
        <Link
          href="/about"
          className="p-5 sm:p-6 rounded-[20px] bg-surface-card border border-border-olive/60 flex items-center justify-between group hover:border-brand-volt/50 transition-colors shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0">
              <Image
                src="/icons/icon-R1XsGA4fBWxa.svg"
                alt=""
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-normal text-brand-volt group-hover:text-brand-volt-light transition-colors">
                Looking for specialist consulting?
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Discover ESI expertise
              </div>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-brand-volt group-hover:translate-x-1 transition-all shrink-0 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;
