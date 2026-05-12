"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ConfettiBurstProps {
  count?: number;
  className?: string;
  colors?: string[];
  trigger?: number;
}

interface Piece {
  id: string;
  color: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
  r: number;
  s: number;
}

/**
 * Lightweight CSS/motion-based confetti — no external deps.
 * Pieces are generated only on the client (post-mount) so server/client HTML
 * stays identical and React doesn't throw a hydration mismatch.
 */
export function ConfettiBurst({
  count = 28,
  className = "",
  colors = ["#FFC233", "#FF8A2B", "#E54CB1", "#2F6CFF", "#4FC76A", "#FF4D6D", "#8B5CF6"],
  trigger = 0,
}: ConfettiBurstProps) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setPieces(
        Array.from({ length: count }).map((_, i) => ({
          id: `${trigger}-${i}`,
          color: colors[i % colors.length],
          delay: Math.random() * 0.2,
          duration: 1.6 + Math.random(),
          x: (Math.random() - 0.5) * 240,
          y: 240 + Math.random() * 160,
          r: Math.random() * 720 - 360,
          s: 0.6 + Math.random() * 1.2,
        })),
      );
    });
    return () => {
      cancelled = true;
    };
  }, [count, colors, trigger]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: -40, rotate: 0, opacity: 0, scale: p.s }}
          animate={{ x: p.x, y: p.y, rotate: p.r, opacity: [0, 1, 1, 0], scale: p.s }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
          className="absolute left-1/2 top-1/3 inline-block h-2.5 w-2.5 rounded-[3px]"
          style={{ background: p.color }}
        />
      ))}
    </div>
  );
}
