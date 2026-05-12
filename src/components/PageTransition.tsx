"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Subtle fade-up that re-animates whenever the route changes. Respects
 * `prefers-reduced-motion` via the global CSS rule (transitions are
 * neutralized to 0.01ms when the user opts out).
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
