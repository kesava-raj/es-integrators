"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CardVariant } from "@/lib/design-system";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = "base",
  children,
  className,
  enableSpotlight = false,
  onMouseMove,
  ...props
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (enableSpotlight && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    if (onMouseMove) onMouseMove(e);
  };

  const variantClass = (() => {
    switch (variant) {
      case "base":
        return "card-base";
      case "glass":
        return "card-glass";
      case "interactive":
        return "card-base card-interactive";
      case "master":
        return "card-master";
      default:
        return "card-base";
    }
  })();

  return (
    <div
      ref={cardRef}
      className={cn(variantClass, className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(243, 255, 201, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
