"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle2,
  Globe,
  Building2,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { NAVIGATION_DATA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(NAVIGATION_DATA.footer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer className="bg-canvas border-t border-border-olive/70 text-text-secondary relative overflow-hidden transition-colors mt-auto">
      {/* Top subtle emerald laser glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-brand-volt/30 to-transparent pointer-events-none" />

      <div className="container-wrapper pt-10 sm:pt-14 pb-6 sm:pb-8 space-y-10 sm:space-y-12">
        {/* Main 4-Column Enterprise Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Brand Identity, Mission & Intelligence Dispatch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href={NAVIGATION_DATA.logo.href}
              className="inline-flex items-center gap-3 group"
              aria-label="Emerald System Integrators Home"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-surface-card border border-border-olive group-hover:border-brand-volt group-hover:shadow-[0_0_15px_rgba(4,120,87,0.2)] transition-all shrink-0">
                <Image
                  src={NAVIGATION_DATA.logo.iconPath}
                  alt="Emerald System Integrators Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-tight text-text-primary group-hover:text-brand-volt transition-colors leading-none">
                  {NAVIGATION_DATA.logo.text}
                </span>
                <span className="text-xs text-text-muted font-medium tracking-wide mt-1">
                  {NAVIGATION_DATA.logo.subtext}
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md">
              {NAVIGATION_DATA.footer.description}
            </p>

            {/* Global Presence Active Delivery Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-border-olive text-xs text-text-primary font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-volt opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-volt"></span>
                </span>
                <span>India Delivery Center</span>
                <span className="text-text-muted text-[11px]">(Chennai)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-border-olive text-xs text-text-primary font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-volt opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-volt"></span>
                </span>
                <span>USA Advisory Hub</span>
                <span className="text-text-muted text-[11px]">(Michigan)</span>
              </div>
            </div>

            {/* Intelligence Dispatch Newsletter */}
            <div className="space-y-3 pt-3 border-t border-border-olive/50">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  ESI Technology & Strategic Dispatch
                </span>
                <p className="text-xs text-text-muted">
                  Quarterly architectures, case studies, and enterprise digital strategy.
                </p>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2.5 text-sm text-brand-volt bg-brand-volt/10 border border-brand-volt/30 p-3 rounded-2xl">
                  <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                  <span className="font-medium text-text-primary">
                    Thank you! You are subscribed to ESI strategic dispatch.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2 max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email address"
                    required
                    className="flex-1 bg-surface-card border border-border-olive rounded-xl sm:rounded-full px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors min-h-[44px]"
                  />
                  <Button variant="primary" type="submit" showArrow className="shrink-0 min-h-[44px]">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Solutions & Practices (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-volt"></span>
              {NAVIGATION_DATA.footer.solutionsTitle}
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_DATA.footer.solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-sm text-text-secondary hover:text-brand-volt transition-colors py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-volt transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Capabilities (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-volt"></span>
              {NAVIGATION_DATA.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_DATA.footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-sm text-text-secondary hover:text-brand-volt transition-colors py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-volt transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Hubs & Direct Engagement (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-volt"></span>
              {NAVIGATION_DATA.footer.contactColumnTitle}
            </h4>

            {/* Direct Email Card with Click-to-Mail and Copy Button */}
            <div className="p-3.5 rounded-2xl bg-surface-card border border-border-olive space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                Direct Inquiries & RFPs
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${NAVIGATION_DATA.footer.email}`}
                  className="text-xs sm:text-sm font-semibold text-text-primary hover:text-brand-volt transition-colors truncate"
                  title="Send email to ESI"
                >
                  {NAVIGATION_DATA.footer.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-surface-subtle text-text-muted hover:text-brand-volt transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-brand-volt" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Hub Locations */}
            <div className="space-y-3 pt-1">
              {NAVIGATION_DATA.footer.hubs.map((hub) => (
                <div
                  key={hub.city}
                  className="p-3 rounded-xl bg-surface-subtle/70 border border-border-olive/60 space-y-0.5"
                >
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-volt shrink-0" />
                    <span className="text-xs font-semibold text-text-primary">
                      {hub.city}, {hub.region}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-muted pl-5 leading-snug">
                    {hub.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Response SLA Note */}
            <div className="flex items-center gap-2 text-xs text-text-muted pt-1">
              <ShieldCheck className="w-4 h-4 text-brand-volt shrink-0" />
              <span>{NAVIGATION_DATA.footer.sla}</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Trust & Copyright Bar */}
        <div className="border-t border-border-olive/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
            <span>{NAVIGATION_DATA.footer.copyright}</span>
            <span className="hidden sm:inline-block text-border-olive">•</span>
            <span className="text-text-muted font-normal">
              Empowering Enterprise Systems Worldwide
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {NAVIGATION_DATA.footer.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-volt transition-colors font-medium text-text-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card border border-border-olive text-[11px] text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-volt"></span>
              <span>Enterprise Delivery Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
