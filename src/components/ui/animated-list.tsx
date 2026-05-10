"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 350, damping: 40 },
  };
  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedList({ className, children, delay = 1500 }: AnimatedListProps) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % childrenArray.length);
    }, delay);
    return () => clearInterval(timer);
  }, [childrenArray.length, delay]);

  const itemsToShow = useMemo(
    () => childrenArray.slice(0, index + 1).reverse(),
    [index, childrenArray],
  );

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>{item}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}
