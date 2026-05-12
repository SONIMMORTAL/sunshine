"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

/**
 * Round, sun-shaped scroll-to-top control. Fades in after the user has
 * scrolled past 600px and is keyboard accessible with a clear focus ring.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", damping: 14, stiffness: 200 }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFE08A,#FFC233_60%,#FF8A2B)] text-[#1F2A44] shadow-[0_10px_30px_-8px_rgba(255,138,43,0.55)] ring-2 ring-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
