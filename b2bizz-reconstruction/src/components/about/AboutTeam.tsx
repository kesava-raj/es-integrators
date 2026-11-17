"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about-data";

export function AboutTeam() {
  const { team } = ABOUT_DATA;

  return (
    <section className="pt-0 pb-0 relative z-10">
      <div className="container-wrapper">
        {/* Section Heading */}
        <div className="max-w-[700px] mb-12">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight">
            {team.headline}
          </h2>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-[28px] overflow-hidden bg-surface-card border border-border-olive hover:border-brand-volt/40 p-5 backdrop-blur-md transition-all duration-300 shadow-xl"
            >
              {/* Member Headshot */}
              <div className="relative aspect-square w-full rounded-[20px] overflow-hidden mb-5 bg-surface-subtle border border-border-olive">
                <Image
                  src={member.avatarSrc}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              </div>

              {/* Info: Name & Role */}
              <div className="flex items-end justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-snug">
                    {member.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  {member.socials.map((social, sIdx) => (
                    <Link
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-surface-subtle border border-border-olive hover:bg-brand-volt hover:text-white transition-colors flex items-center justify-center p-1.5"
                    >
                      <Image
                        src={social.iconSrc}
                        alt={social.platform}
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 object-contain dark:invert opacity-80 hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
