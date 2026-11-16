import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Changelog | Emerald System Integrators (ESI)",
  description:
    "Chronological evolution of Emerald System Integrators' capabilities, service practices, technology frameworks, and release notes.",
};

const CHANGELOG_ENTRIES = [
  {
    version: "v2.5",
    date: "February 2026",
    badge: "Current Release",
    headline: "Universal Theme Switcher & Full Enterprise Route Architecture",
    description:
      "Rolled out comprehensive Light and Dark mode theming across all brand surfaces, complete Case Studies catalog with interactive filtering, and enhanced specialist consulting insights.",
    changes: [
      "Dynamic theme toggle supporting instantaneous dark/light mode transitions with localStorage persistence.",
      "Filterable Case Studies grid featuring enterprise client narratives and quantitative ROI benchmarks.",
      "Comprehensive technology and management consulting knowledge hub under /blog.",
      "Global presence routing with dedicated inquiry processing for Chennai (India) and Michigan (USA).",
    ],
    tags: ["UI Theming", "Case Studies", "Blog Hub", "Consulting Routing"],
  },
  {
    version: "v2.4",
    date: "December 2025",
    headline: "Component-Based Enterprise Integration Middleware",
    description:
      "Enhanced standardized architectural middleware connecting disparate ERP and CRM software environments with sub-second message broker synchronization.",
    changes: [
      "Modular event-driven architecture specifications for high-concurrency manufacturing systems.",
      "Standardized OpenAPI 3.1 contracts for external banking and logistics third-party integrations.",
      "Real-time inventory reconciliation webhooks eliminating batch update latency.",
    ],
    tags: ["Enterprise Architecture", "API Integration", "ERP & CRM"],
  },
  {
    version: "v2.2",
    date: "October 2025",
    headline: "Cross-Platform Mobile Lifecycle Frameworks",
    description:
      "Formalized end-to-end mobile application lifecycle support across modern platforms with offline-first SQLite synchronization and biometric security.",
    changes: [
      "Offline-first mobile data caching architecture with intelligent conflict merging.",
      "Biometric authentication bridges for rugged field service technician applications.",
      "Automated cross-device UI test suites for continuous release validation.",
    ],
    tags: ["Mobile Engineering", "Offline-First", "Lifecycle Support"],
  },
  {
    version: "v2.0",
    date: "July 2025",
    headline: "Specialist Resourcing Practice Expansion",
    description:
      "Inaugurated dedicated specialist resourcing practices spanning technology, tourism, translation, and international trading operations.",
    changes: [
      "Multidisciplinary talent deployment workflows for cross-border enterprise initiatives.",
      "Standardized business consulting frameworks supporting clients from initial setup to long-term operations.",
      "Customer Value Management (CVM) metric tracking dashboards for measurable commercial ROI.",
    ],
    tags: ["Specialist Resourcing", "Consulting", "Global Operations"],
  },
];

export default function ChangelogPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      <section className="page-header-spacing pb-16 relative z-10">
        <div className="container-wrapper max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="mb-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-brand-volt transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Capabilities Timeline
            </span>

            <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-normal leading-[1.18] text-brand-volt tracking-tight">
              Platform & Capability Changelog
            </h1>

            <p className="text-text-secondary text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Chronological updates on Emerald System Integrators&apos; service practices, technology frameworks, standardized architecture, and platform evolutions.
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-10 pt-4">
            {CHANGELOG_ENTRIES.map((entry, idx) => (
              <div
                key={entry.version}
                className="relative pl-6 sm:pl-10 border-l border-border-olive/70 space-y-6 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-card border-2 border-brand-volt group-hover:scale-125 transition-transform" />

                {/* Entry Header */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold font-display text-brand-volt">
                      {entry.version}
                    </span>
                    <span className="text-xs font-mono uppercase text-text-muted">
                      {entry.date}
                    </span>
                    {entry.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-volt text-surface-base uppercase">
                        {entry.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                    {entry.headline}
                  </h2>
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-[24px] bg-surface-card border border-border-olive shadow-xl space-y-6">
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {entry.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted font-medium">
                      Key Highlights & Additions:
                    </div>
                    <div className="space-y-2">
                      {entry.changes.map((change, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-3 text-sm text-text-primary"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0 mt-0.5" />
                          <span className="leading-snug">{change}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-surface-base text-text-muted border border-border-olive/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="section-padding relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
