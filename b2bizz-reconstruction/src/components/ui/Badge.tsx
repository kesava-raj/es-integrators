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
        return "bg-[#2f3126]/60 border-[#2f3126] text-[#f3ffc9]";
      case "olive":
        return "bg-[#585e44]/30 border-[#585e44] text-[#f9ffe5]";
      case "neutral":
        return "bg-white/[0.05] border-white/10 text-white";
      default:
        return "bg-[#2f3126]/60 border-[#2f3126] text-[#f3ffc9]";
    }
  })();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variantStyles,
        className
      )}
      {...props}
    >
      {showSparkle && <Sparkles className="w-3.5 h-3.5 text-[#f3ffc9]" />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
