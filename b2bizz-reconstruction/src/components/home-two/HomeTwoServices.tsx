"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";

export function HomeTwoServices() {
  const { services } = HOME_TWO_DATA;

  return (
    <section className="pt-[100px] lg:pt-[150px] pb-0 relative z-10">
      <div className="container-wrapper">
        {/* Header with Title on Left and "Get started" on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt max-w-[620px] tracking-tight">
            {services.headline}
          </h2>
          <div>
            <Button href={services.cta.href} variant="secondary" className="rounded-full px-6 py-2.5">
              {services.cta.text}
            </Button>
          </div>
        </div>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {services.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 bg-surface-subtle/70 hover:bg-surface-elevated/90 border border-white/10 hover:border-brand-volt/40 rounded-[24px] backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Image thumbnail on left */}
              <div className="relative w-full sm:w-[170px] h-[154px] rounded-[16px] overflow-hidden shrink-0 bg-surface-dark border border-white/5">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, 170px"
                />
              </div>

              {/* Text content on right */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[0.7rem] font-mono uppercase tracking-wider text-text-muted px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
