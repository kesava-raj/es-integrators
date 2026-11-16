"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, X, ArrowUpRight, Bell, Menu } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const ServicesSection: React.FC = () => {
  const { services } = HOME_DATA;
  const [activeIdx, setActiveIdx] = useState(0);

  // Exact preview metadata for active services
  const previewItems = [
    {
      breadcrumb: "Custom Web Application",
      title: "Customized web applications for workflow synchronization",
      status: "Production Ready",
      progress: "100%",
      dates: "Enterprise Deployment",
      imageSrc: "/images/img-Gey8JdeAVmsT.png",
    },
    {
      breadcrumb: "Mobile Application Development",
      title: "Cross-platform mobile applications for business lifecycle",
      status: "Active",
      progress: "95%",
      dates: "Multi-Platform Support",
      imageSrc: "/images/img-gdRM7GW5TQGv.jpg",
    },
    {
      breadcrumb: "Enterprise Solutions",
      title: "Component-based architecture & standardized system integration",
      status: "Operational",
      progress: "100%",
      dates: "Architecture Governance",
      imageSrc: "/images/case-study-eco-enterprise.jpg",
    },
    {
      breadcrumb: "Business Consulting",
      title: "Strategic management, staffing, operations & digital transformation",
      status: "Continuous",
      progress: "90%",
      dates: "Strategic Advisory",
      imageSrc: "/images/case-study-consulting-shift.jpg",
    },
  ];

  const currentPreview = previewItems[activeIdx] || previewItems[0];

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper space-y-10 sm:space-y-12">
        {/* Header matching Reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
              Our Services
            </span>
            <h2 className="text-h2 text-brand-volt leading-[1.25] font-normal tracking-tight">
              Integrated Solutions.
              <br />
              <span className="text-text-primary">One Technology Partner.</span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border-olive bg-surface-card text-text-primary text-sm sm:text-base font-normal hover:border-brand-volt hover:text-brand-volt transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>

        {/* 2-Column Interactive Split matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-6 space-y-3.5">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-surface-card border-brand-volt/50 p-5 sm:p-6 space-y-4 shadow-md"
                      : "bg-surface-card/60 border-border-olive/50 p-4 sm:p-5 hover:border-border-olive/80 cursor-pointer"
                  }`}
                  onClick={() => setActiveIdx(idx)}
                >
                  {/* Accordion Row Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                        <Image
                          src={service.iconSrc}
                          alt=""
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-base sm:text-[17px] font-normal text-text-primary tracking-tight">
                        {service.title}
                      </span>

                    </div>

                    <button
                      className="w-7 h-7 rounded-full bg-surface-card border border-border-olive flex items-center justify-center text-text-secondary shrink-0"
                      aria-label={isActive ? "Collapse service" : "Expand service"}
                    >
                      {isActive ? (
                        <X className="w-3.5 h-3.5 text-brand-volt" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-text-muted" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content Body */}
                  {isActive && (
                    <div className="space-y-4 pt-1 border-t border-border-olive/40">
                      <p className="text-sm text-text-secondary leading-relaxed pt-2">
                        {service.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        {/* Scope Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-full text-xs font-normal bg-surface-subtle border border-border-olive/60 text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Detail Link */}
                        <Link
                          href={`/service/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-normal text-brand-volt hover:text-brand-volt-light transition-colors whitespace-nowrap"
                        >
                          <span>View detail</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Authentic Enterprise Project Showcase Graphic matching Reference */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 bg-surface-card p-3 sm:p-5 w-full shadow-2xl">
              <div className="relative aspect-[1246/966] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/img-Gey8JdeAVmsT.png"
                  alt="Enterprise Project Showcase"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
