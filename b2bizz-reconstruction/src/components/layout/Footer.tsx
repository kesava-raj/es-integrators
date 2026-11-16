"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { NAVIGATION_DATA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-canvas border-t border-border-olive/70 text-text-secondary relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-volt/20 to-transparent" />

      <div className="container-wrapper section-padding space-y-16">
        {/* Top Grid: Newsletter + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Newsletter Subscription (5 cols on lg, full width on md) */}
          <div className="md:col-span-2 lg:col-span-5 space-y-6">
            <Link
              href={NAVIGATION_DATA.logo.href}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-surface-card border border-border-olive group-hover:border-brand-volt transition-colors shrink-0">
                <Image
                  src={NAVIGATION_DATA.logo.iconPath}
                  alt="Emerald System Integrators Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-tight text-text-primary group-hover:text-brand-volt transition-colors leading-none">
                  {NAVIGATION_DATA.logo.text}
                </span>
                <span className="text-xs text-text-muted font-light tracking-wide mt-1">
                  {NAVIGATION_DATA.logo.subtext}
                </span>
              </div>
            </Link>

            <p className="text-body text-text-secondary max-w-sm">
              {NAVIGATION_DATA.footer.description}
            </p>

            {/* Newsletter Input Form */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
                Subscribe to Technology & Consulting Insights
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-brand-volt bg-border-olive/40 border border-border-olive p-3 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-volt shrink-0" />
                  <span>Thank you! You are subscribed to ESI insights.</span>
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
                    placeholder="Enter your enterprise email"
                    required
                    className="flex-1 bg-surface-card border border-border-olive rounded-full px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors min-h-[44px]"
                  />
                  <Button variant="primary" type="submit" showArrow>
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols on lg, 1 col on md) */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold font-display tracking-wide uppercase text-text-primary">
              {NAVIGATION_DATA.footer.navColumnTitle}
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_DATA.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-volt transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address Information (4 cols on lg, 1 col on md) */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold font-display tracking-wide uppercase text-text-primary">
              {NAVIGATION_DATA.footer.contactColumnTitle}
            </h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <a
                href={`mailto:${NAVIGATION_DATA.footer.email}`}
                className="flex items-center gap-3 hover:text-brand-volt transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-surface-card border border-border-olive flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-brand-volt" />
                </div>
                <span>{NAVIGATION_DATA.footer.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-card border border-border-olive flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-volt" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-text-primary">India Presence:</p>
                  <p className="text-text-muted text-xs">Chennai, Tamil Nadu, India</p>
                  <p className="font-medium text-text-primary pt-1">USA Presence:</p>
                  <p className="text-text-muted text-xs">Michigan, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-border-olive/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>{NAVIGATION_DATA.footer.copyright}</div>
          <div className="flex items-center gap-6">
            {NAVIGATION_DATA.footer.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-volt transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-text-muted">
              Emerald System Integrators (ESI)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
