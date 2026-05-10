"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
  /** color of the meteor head (the streak inherits it via currentColor) */
  color?: string;
}

export function Meteors({ number = 20, className, color = "#FFC233" }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<CSSProperties>>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: -5 + "px",
      left: `${Math.floor(Math.random() * 100)}vw`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 4)}s`,
      "--angle": "215deg",
      color,
    }));
    setMeteorStyles(styles as CSSProperties[]);
  }, [number, color]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor absolute h-0.5 w-0.5 rounded-full",
            "shadow-[0_0_0_1px_currentColor]",
            "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-[linear-gradient(90deg,currentColor,transparent)] before:content-['']",
          )}
          style={{ ...style, background: "currentColor" }}
        />
      ))}
    </div>
  );
}
