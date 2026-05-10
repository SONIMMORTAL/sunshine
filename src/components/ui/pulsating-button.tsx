"use client";

import React, { forwardRef, type ComponentPropsWithoutRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps extends ComponentPropsWithoutRef<"button"> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = forwardRef<HTMLButtonElement, PulsatingButtonProps>(
  ({ className, children, pulseColor = "rgba(255, 194, 51, 0.55)", duration = "1.6s", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:outline-none active:translate-y-0",
          "animate-pulsate",
          className,
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--pulse-duration": duration,
          } as CSSProperties
        }
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton";
