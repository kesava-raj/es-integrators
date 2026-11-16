"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonVariant } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export { cn };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  showArrow?: boolean;
  arrowType?: "right" | "up-right";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  showArrow = false,
  arrowType = "right",
  icon,
  children,
  className,
  ...props
}) => {
  const baseClasses = (() => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "ghost":
        return "btn-ghost";
      case "pill":
        return "btn-pill";
      default:
        return "btn-primary";
    }
  })();

  const content = (
    <>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1">
          {arrowType === "up-right" ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </span>
      )}
    </>
  );

  const mergedClasses = cn("group", baseClasses, className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={mergedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
