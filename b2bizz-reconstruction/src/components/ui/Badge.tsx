import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  showSparkle?: boolean;
  children: React.ReactNode;
  variant?: "volt" | "olive" | "neutral";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  showSparkle = false,
  children,
  variant = "volt",
  className,
  ...props
}) => {
  const variantStyles = (() => {
    switch (variant) {
      case "volt":
        return "bg-brand-volt/10 border-brand-volt/25 text-brand-volt";
      case "olive":
        return "bg-accent-olive/15 border-accent-olive/30 text-brand-volt";
      case "neutral":
        return "bg-surface-subtle border-border-olive text-text-secondary";
      default:
        return "bg-brand-volt/10 border-brand-volt/25 text-brand-volt";
    }
  })();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-sm",
        variantStyles,
        className
      )}
      {...props}
    >
      {showSparkle && <Sparkles className="w-3.5 h-3.5 text-brand-volt" />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
