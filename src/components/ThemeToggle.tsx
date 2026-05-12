"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  /**
   * "icon" → 40×40 round button (default, fits in the header).
   * "pill" → wider pill with text label, ideal for the mobile drawer.
   */
  variant?: "icon" | "pill";
}

/**
 * Sun ↔ moon theme toggle. Renders a static Sun on the server (so the
 * button is always visible — no invisible empty state during hydration)
 * and swaps to the resolved icon on mount. Click cycles `light ↔ dark`.
 */
export function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) setMounted(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  const baseShape =
    variant === "pill"
      ? "h-11 w-full rounded-full px-4 gap-2 justify-start text-left"
      : "h-10 w-10 rounded-full justify-center";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className={cn(
        "relative inline-flex items-center border-2 bg-white text-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
        "border-slate-200 hover:border-primary/40",
        "dark:bg-slate-900 dark:border-white/15 dark:hover:border-yellow-300/60 dark:text-slate-100",
        baseShape,
        className,
      )}
      // Avoid hydration warnings since the icon (and aria-label) depend on resolvedTheme.
      suppressHydrationWarning
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {mounted ? (
            <motion.span
              key={isDark ? "moon" : "sun"}
              initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="absolute inline-flex"
              aria-hidden="true"
            >
              {isDark ? (
                <Moon className="h-5 w-5 text-[var(--sunshine-sky)]" />
              ) : (
                <Sun className="h-5 w-5 text-[var(--sunshine-orange)]" />
              )}
            </motion.span>
          ) : (
            // Pre-mount fallback so the control is never invisible.
            <Sun
              className="h-5 w-5 text-[var(--sunshine-orange)] dark:text-yellow-300"
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </span>
      {variant === "pill" && (
        <span className="font-display text-sm font-bold">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}
