"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/services-data";
import { Button } from "@/components/ui/Button";

export function ServiceDetailHero({ service }: { service: ServiceItem }) {
  return (
    <section className="page-header-spacing pb-0 relative z-10">
      <div className="container-wrapper">
        {/* Breadcrumb & Header */}
        <div className="max-w-[820px] mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
            <Link href="/service" className="hover:text-brand-volt transition-colors">
              Services
            </Link>
            <span className="text-border-olive">/</span>
            <span className="text-brand-volt">{service.title}</span>
          </div>

          <h1 className="text-[26px] sm:text-[38px] lg:text-[52px] font-normal leading-[1.18] text-brand-volt tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed mb-8 max-w-[640px]">
            {service.subtitle}
          </p>

          <div>
            <Button href="/contact" variant="primary" className="rounded-full px-8 py-3.5">
              Request Consultation
            </Button>
          </div>
        </div>

        {/* Hero Featured Photography */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-surface-base border border-border-olive shadow-2xl">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
