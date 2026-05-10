"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [display, setDisplay] = useState<string>(
    formatNumber(direction === "down" ? value : 0, decimalPlaces),
  );

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(
      () => motionValue.set(direction === "down" ? 0 : value),
      delay * 1000,
    );
    return () => clearTimeout(timeout);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(formatNumber(latest, decimalPlaces));
    });
    return () => unsubscribe();
  }, [springValue, decimalPlaces]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)}>
      {display}
    </span>
  );
}

function formatNumber(num: number, decimalPlaces: number) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(num.toFixed(decimalPlaces)));
}
