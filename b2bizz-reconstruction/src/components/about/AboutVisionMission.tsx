"use strict";
import React from "react";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/about-data";
import { Badge } from "@/components/ui/Badge";

export function AboutVisionMission() {
  const { visionMission } = ABOUT_DATA;
  const { vision, mission } = visionMission;

  return (
    <section className="pt-0 pb-14 sm:pb-20 lg:pb-28 relative z-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Vision */}
          <div className="p-8 lg:p-9 rounded-[32px] bg-surface-card border border-border-olive hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <Badge variant="volt">
                  {vision.badge}
                </Badge>
                <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border-olive p-2 flex items-center justify-center">
                  <Image
                    src={vision.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-text-primary leading-snug mb-4">
                {vision.title}
              </h3>
              <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                {vision.description}
              </p>
            </div>

            <div className="relative h-[180px] sm:h-[200px] w-full rounded-[20px] overflow-hidden bg-surface-base border border-border-olive/50 mt-4">
              <Image
                src={vision.imageSrc}
                alt="Our Vision"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </div>

          {/* Right Card: Mission */}
          <div className="p-7 lg:p-8 rounded-[32px] bg-surface-card border border-border-olive hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <Badge variant="volt">
                  {mission.badge}
                </Badge>
                <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border-olive p-2 flex items-center justify-center">
                  <Image
                    src={mission.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-text-primary leading-snug mb-6">
                {mission.title}
              </h3>

              {/* 5 Mission Pillars Checklist */}
              <div className="space-y-2.5">
                {mission.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2.5 px-4 rounded-[14px] bg-surface-subtle border border-border-olive/60 hover:border-brand-volt/30 transition-colors"
                  >
                    <span className="text-sm font-normal text-text-primary">
                      {pillar}
                    </span>
                    <span className="text-xs font-mono text-brand-volt">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border-olive/60 mt-8">
              <p className="text-xs sm:text-sm text-text-muted font-light">
                Built on accountability, technical precision, and measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
