import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display-1",
        "text-h1",
        "text-h2",
        "text-h2-large",
        "text-h2-compact",
        "text-h3",
        "text-body-lead",
        "text-body",
        "text-caption",
      ],
      "text-color": [
        "text-canvas",
        "text-surface-base",
        "text-surface-card",
        "text-surface-panel",
        "text-border-olive",
        "text-border-dark",
        "text-accent-olive",
        "text-brand-volt",
        "text-brand-volt-light",
        "text-text-primary",
        "text-text-secondary",
        "text-text-muted",
        "text-text-white",
      ],
    },
  },
});

/**
 * Standard utility function to merge Tailwind classes safely with design system support
 */
export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}
