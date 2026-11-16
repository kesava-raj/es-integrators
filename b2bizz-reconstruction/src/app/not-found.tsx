import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-canvas text-text-primary bg-noise min-h-[75vh] flex items-center justify-center py-24 relative overflow-hidden">
      <div className="container-wrapper max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            404 — Page Not Found
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal text-brand-volt tracking-tight leading-tight">
            Lost in Navigation?
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for has moved, been updated, or does not exist. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="/" variant="primary" showArrow>
            Return to Homepage
          </Button>

          <Link
            href="/service"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border-olive hover:border-brand-volt text-text-primary hover:text-brand-volt bg-surface-card text-sm font-medium transition-colors"
          >
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
