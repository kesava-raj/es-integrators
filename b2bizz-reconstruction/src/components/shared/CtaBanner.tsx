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
      {/* Top Graphic Card matching Reference */}
      <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 min-h-[250px] sm:min-h-[280px] p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-5 shadow-2xl bg-[#0E100F]">
        {/* Authentic Ambient CTA Graphic Wallpaper */}
        <Image
          src="/images/cta-bg.jpg"
          alt="CTA Ambient Backdrop"
          fill
          className="object-cover opacity-85"
          sizes="100vw"
        />

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <h2 className="text-h2-compact text-brand-volt leading-[1.25] font-normal tracking-tight">
            Is your B2B business
            <br />
            ready for the next level?
          </h2>

          <div className="pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-normal text-brand-volt hover:text-brand-volt-light transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>Book a free call</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Dual Action Cards matching Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <Link
          href="/contact"
          className="p-5 sm:p-6 rounded-[20px] bg-[#161A18] border border-border-olive/60 flex items-center justify-between group hover:border-brand-volt/50 transition-colors"
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
                Time to level up your B2B game?
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Contact now
              </div>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-brand-volt group-hover:translate-x-1 transition-all shrink-0 ml-2" />
        </Link>

        {/* Card 2 */}
        <Link
          href="/contact"
          className="p-5 sm:p-6 rounded-[20px] bg-[#161A18] border border-border-olive/60 flex items-center justify-between group hover:border-brand-volt/50 transition-colors"
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
                Need expert help to scale fast?
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Contact our experts
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
