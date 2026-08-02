"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Calendar, PhoneCall } from "lucide-react";

/**
 * Mobile-only fixed bottom action bar. Slides up after the user has
 * scrolled past the hero, hides on scroll-down (so they can read), and
 * reappears on scroll-up. Hidden on `md` and up.
 */
export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const unsub = scrollY.on("change", (current) => {
      if (current < 480) {
        setVisible(false);
        lastY = current;
        return;
      }
      const goingUp = current < lastY;
      setVisible(goingUp);
      lastY = current;
    });
    return () => unsub();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 220 }}
          className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t-2 border-primary/20 bg-background/95 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 shadow-[0_-12px_30px_-18px_rgba(31,42,68,0.35)] backdrop-blur md:hidden"
        >
          <a
            href="tel:+19299254152"
            aria-label="Call Sunshine's Learning Laboratory at (929) 925-4152"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground/15 bg-white text-foreground shadow"
          >
            <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 font-display text-base font-extrabold text-primary-foreground shadow-[0_8px_0_-3px_rgba(255,138,43,0.6)]"
          >
            <Calendar className="h-5 w-5" aria-hidden="true" />
            Schedule a tour
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
