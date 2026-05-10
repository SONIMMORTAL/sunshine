"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tuition", href: "#tuition" },
  { label: "Visit", href: "#visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(31,42,68,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full p-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          aria-label="Sunshine's Learning Laboratory — home"
        >
          <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-primary/30 transition-transform group-hover:rotate-6">
            <Image
              src="/LOGOSS.png"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
              Sunshine&rsquo;s
            </span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[11px]">
              Learning Laboratory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 font-display text-sm font-bold text-foreground/80 transition-colors hover:bg-primary/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="tel:7184046909"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/40 bg-white px-4 py-2 font-display text-sm font-bold text-secondary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40"
          >
            <PhoneCall className="h-4 w-4 text-secondary" aria-hidden="true" />
            (718) 404-6909
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-extrabold text-primary-foreground shadow-[0_8px_0_-2px_rgba(255,138,43,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            Schedule a Tour
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow ring-2 ring-primary/30 lg:hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden mx-3 mb-3 overflow-hidden rounded-3xl border-2 border-primary/20 bg-white shadow-xl"
        >
          <nav className="flex flex-col gap-1 p-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-display text-base font-bold text-foreground hover:bg-primary/15"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-1 pb-1 pt-2">
              <a
                href="tel:7184046909"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary/40 bg-white px-4 py-3 font-display font-bold text-secondary-foreground"
              >
                <PhoneCall className="h-4 w-4 text-secondary" aria-hidden="true" />
                (718) 404-6909
              </a>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-display font-extrabold text-primary-foreground shadow-md"
              >
                Schedule a Tour
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
