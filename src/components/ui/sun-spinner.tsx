import { cn } from "@/lib/utils";

interface SunSpinnerProps {
  className?: string;
  size?: number;
}

/**
 * A friendly spinning sun spinner — pure SVG + CSS animation.
 */
export function SunSpinner({ className, size = 96 }: SunSpinnerProps) {
  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-label="Loading"
      role="status"
    >
      <span className="animate-sun-rays absolute inset-0 inline-block">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x="48"
              y="2"
              width="4"
              height="14"
              rx="2"
              fill="#FFC233"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </span>
      <span className="animate-bounce-soft absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFE08A,#FFB703_70%)] shadow-[inset_-6px_-8px_0_rgba(255,138,43,0.35)]" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
