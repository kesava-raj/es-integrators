"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { FAQ_DATA, FaqItem } from "@/data/faq";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export interface AccordionFaqProps {
  items?: FaqItem[];
  className?: string;
  allowMultiple?: boolean;
}

export const AccordionFaq: React.FC<AccordionFaqProps> = ({
  items = FAQ_DATA,
  className,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-4 max-w-3xl mx-auto", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <Card
            key={item.id}
            variant="base"
            className={cn(
              "transition-all duration-200 p-5 sm:p-6",
              isOpen ? "border-accent-olive bg-[#161a18]" : "hover:border-[#585e44]/60"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left gap-4 group"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold font-display text-text-primary group-hover:text-brand-volt transition-colors">
                {item.question}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                  isOpen
                    ? "bg-brand-volt border-brand-volt text-surface-base"
                    : "border-border-olive bg-surface-base text-text-secondary group-hover:border-brand-volt group-hover:text-brand-volt"
                )}
              >
                <Plus
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-border-olive/50 mt-4">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
};

export default AccordionFaq;
