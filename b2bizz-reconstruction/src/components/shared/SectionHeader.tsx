import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  showSparkle?: boolean;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleTag?: "h1" | "h2" | "h3";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  showSparkle = false,
  title,
  description,
  align = "center",
  className,
  titleTag = "h2",
}) => {
  const isCenter = align === "center";
  const TitleTag = titleTag;

  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div>
          <Badge showSparkle={showSparkle}>{badge}</Badge>
        </div>
      )}

      <TitleTag
        className={cn(
          titleTag === "h1" ? "text-h1" : "text-h2",
          "text-text-primary"
        )}
      >
        {title}
      </TitleTag>

      {description && (
        <p className="text-body-lead text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
