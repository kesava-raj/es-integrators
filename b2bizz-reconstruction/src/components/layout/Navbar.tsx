"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0e100f]/85 backdrop-blur-xl border-b border-[#2f3126]/60 py-3 shadow-2xl"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wrapper flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href={NAVIGATION_DATA.logo.href}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-surface-card border border-border-olive group-hover:border-brand-volt transition-colors">
              <Image
                src={NAVIGATION_DATA.logo.iconPath}
                alt="B2bizz Logo Mark"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-text-primary group-hover:text-brand-volt transition-colors">
              {NAVIGATION_DATA.logo.text}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md border border-border-olive/80 rounded-full px-4 py-1.5">
            {NAVIGATION_DATA.mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive
                      ? "text-brand-volt bg-border-olive/50"
                      : "text-text-secondary hover:text-brand-volt hover:bg-white/[0.03]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Pages Mega Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                  isDropdownOpen
                    ? "text-brand-volt bg-border-olive/50"
                    : "text-text-secondary hover:text-brand-volt hover:bg-white/[0.03]"
                )}
                aria-expanded={isDropdownOpen}
              >
                <span>Pages</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu Overlay */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-3 w-80 p-2.5 rounded-2xl bg-[#161a18]/95 backdrop-blur-2xl border border-border-olive shadow-2xl z-50"
                  >
                    <div className="space-y-1">
                      {NAVIGATION_DATA.dropdownLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start justify-between p-2.5 rounded-xl transition-all duration-150 hover:bg-white/[0.05] group"
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-text-primary group-hover:text-brand-volt transition-colors">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-border-olive text-brand-volt">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-text-muted line-clamp-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-volt transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Header Action Button - Hidden on mobile, shown on sm+ */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={NAVIGATION_DATA.headerCta.href}
              variant="primary"
              showArrow
              className="text-sm"
            >
              {NAVIGATION_DATA.headerCta.label}
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button (Min 44x44 touch target) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-surface-card border border-border-olive text-text-secondary hover:text-brand-volt hover:border-brand-volt transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-[62px] sm:top-[74px] left-0 right-0 z-40 bg-[#0e100f]/98 backdrop-blur-2xl border-b border-border-olive overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="container-wrapper py-6 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-brand-volt px-3 py-1 font-semibold">
                  Main Navigation
                </div>
                {NAVIGATION_DATA.mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 rounded-xl text-base font-medium text-text-primary hover:text-brand-volt hover:bg-white/[0.04] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-1 border-t border-border-olive/60 pt-4">
                <div className="text-xs font-mono uppercase text-brand-volt px-3 py-1 font-semibold">
                  Pages & Sub-routes
                </div>
                {NAVIGATION_DATA.dropdownLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-brand-volt hover:bg-white/[0.04] transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-border-olive text-brand-volt">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  href={NAVIGATION_DATA.headerCta.href}
                  variant="primary"
                  showArrow
                  className="w-full justify-center"
                >
                  {NAVIGATION_DATA.headerCta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
