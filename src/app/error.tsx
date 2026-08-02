"use client";

import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";
import { SunSpinner } from "@/components/ui/sun-spinner";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error("[App error]", error);
  }, [error]);

  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,77,109,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(255,194,51,0.18),transparent_60%)]"
      />
      <SunSpinner size={120} />
      <h2 className="mt-8 font-heading text-4xl font-black text-foreground sm:text-5xl">
        That&rsquo;s a hiccup.
      </h2>
      <p className="mt-3 max-w-xl font-display text-lg text-muted-foreground sm:text-xl">
        Something didn&rsquo;t load right. Let&rsquo;s give it another sunny try.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-xs text-muted-foreground/70">
          Reference: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-base font-extrabold text-primary-foreground shadow-[0_10px_0_-4px_rgba(255,138,43,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
        >
          <RefreshCcw className="h-5 w-5" aria-hidden="true" />
          Try again
        </button>
        <a
          href="tel:+19299254152"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-4 font-display text-base font-extrabold text-foreground shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          Call us instead
        </a>
      </div>
    </div>
  );
}
