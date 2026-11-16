"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  showLabel = false,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or media preference
    const savedTheme = localStorage.getItem("esi-theme") as "dark" | "light" | null;
    const initialTheme =
      savedTheme ||
      (document.documentElement.classList.contains("light") ? "light" : "dark");

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: "dark" | "light") => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    }
    try {
      localStorage.setItem("esi-theme", newTheme);
    } catch {
      // Ignore if localStorage unavailable
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    // Render placeholder to avoid layout shift before client hydration
    return (
      <button
        type="button"
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center border border-border-olive bg-surface-card/80 text-text-muted transition-colors opacity-80",
          className
        )}
        aria-label="Toggle theme"
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group relative flex items-center gap-2.5 px-3 py-2 rounded-full border border-border-olive bg-surface-card hover:border-brand-volt transition-all duration-200 text-text-primary hover:text-brand-volt shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-volt/40 min-h-[40px]",
        className
      )}
      aria-label={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
      title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isLight ? (
          <Sun className="w-4 h-4 text-amber-500 animate-in fade-in zoom-in-75 duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-brand-volt animate-in fade-in zoom-in-75 duration-200" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium tracking-wide">
          {isLight ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
