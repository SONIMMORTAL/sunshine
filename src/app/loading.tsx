import { SunSpinner } from "@/components/ui/sun-spinner";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-5 px-4 py-20"
    >
      <SunSpinner size={96} />
      <p className="font-display text-base font-bold text-muted-foreground">
        Warming up the sunshine…
      </p>
    </div>
  );
}
