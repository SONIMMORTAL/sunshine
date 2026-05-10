import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AnimatedGradientText({
  children,
  className,
  colors = ["#FFC233", "#FF8A2B", "#E54CB1", "#2F6CFF", "#4FC76A", "#FFC233"],
  speed = 8,
}: AnimatedGradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent animate-gradient bg-[length:300%_100%]",
        className,
      )}
      style={{
        backgroundImage: gradient,
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
