"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_PAGE_DATA } from "@/data/services-data";

export function ServicesFaq() {
  const { faq } = SERVICES_PAGE_DATA;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="pt-0 pb-8 sm:pb-12 lg:pb-14 relative z-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: FAQ Illustration Image */}
          <div className="lg:col-span-5 relative aspect-square w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-surface-base border border-border-olive shadow-2xl">
            <Image
              src={faq.imageSrc}
              alt="Frequently Asked Questions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <h2 className="text-[26px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight mb-8">
              {faq.headline}
            </h2>

            <div className="space-y-4">
              {faq.items.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-[20px] bg-surface-card border border-border-olive hover:border-brand-volt/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left font-normal text-base sm:text-lg text-text-primary group cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono text-brand-volt">
                          0{idx + 1}.
                        </span>
                        <span className="group-hover:text-brand-volt transition-colors">
                          {item.question}
                        </span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-surface-subtle border border-border-olive/60 flex items-center justify-center shrink-0 text-text-muted group-hover:text-brand-volt transition-colors">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 text-sm text-text-muted font-light leading-relaxed border-t border-border-olive/40 mt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
