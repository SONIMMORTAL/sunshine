import Link from "next/link";
import { ArrowLeft, Sun } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,194,51,0.25),transparent_60%),radial-gradient(circle_at_bottom,rgba(91,192,248,0.15),transparent_60%)]"
      />
      <span
        aria-hidden="true"
        className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFE08A,#FFC233_55%,#FF8A2B)] shadow-[0_24px_60px_-20px_rgba(255,138,43,0.55)] sm:h-40 sm:w-40"
      >
        <Sun className="h-16 w-16 text-white drop-shadow sm:h-20 sm:w-20" />
      </span>
      <h1 className="mt-8 font-heading text-5xl font-black text-foreground sm:text-6xl lg:text-7xl">
        Oops, this sun didn&rsquo;t rise.
      </h1>
      <p className="mt-4 max-w-xl font-display text-lg text-muted-foreground sm:text-xl">
        The page you&rsquo;re looking for is off playing somewhere else. Let&rsquo;s
        head back to the bright side.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-base font-extrabold text-primary-foreground shadow-[0_10px_0_-4px_rgba(255,138,43,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Back to home
        </Link>
        <a
          href="tel:+19299254152"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-4 font-display text-base font-extrabold text-foreground shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          Call (929) 925-4152
        </a>
      </div>
    </div>
  );
}
