"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_LIST } from "@/data/services-data";
import { Button } from "@/components/ui/Button";

export function ServiceDetailOtherServices({ currentSlug }: { currentSlug: string }) {
  const otherServices = SERVICES_LIST.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="pt-0 pb-[100px] lg:pb-[150px] relative z-10">
      <div className="container-wrapper">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight mb-2">
              Other services
            </h2>
            <p className="text-sm text-text-muted font-light">
              Explore our full suite of digital consulting and technical capabilities.
            </p>
          </div>

          <div>
            <Button href="/service" variant="secondary" className="rounded-full px-6 py-2.5">
              Explore all services
            </Button>
          </div>
        </div>

        {/* 3 Other Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((item) => (
            <Link
              key={item.id}
              href={`/service/${item.slug}`}
              className="group block p-6 rounded-[28px] bg-surface-subtle/70 hover:bg-surface-elevated/90 border border-white/10 hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden mb-5 bg-surface-dark border border-white/5">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-4 line-clamp-2">
                {item.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {item.tags.slice(0, 2).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[0.7rem] font-mono uppercase tracking-wider text-text-muted px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
