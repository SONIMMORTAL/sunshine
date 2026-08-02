"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tuition", href: "#tuition" },
  { label: "FAQ", href: "#faq" },

];

/**
 * Sticky top header. Adds backdrop-blur on scroll, hides on scroll-down
 * past the hero (mobile only), and reappears when the user scrolls back
 * up. Includes a dark/light theme toggle and primary call-to-action.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const goingDown = y > lastY.current && y > 200;
      const goingUp = y < lastY.current;
      if (goingDown) setHidden(true);
      else if (goingUp) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on hash change so navigation feels right.
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[transform,background-color,box-shadow] duration-300",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(31,42,68,0.18)] dark:bg-slate-950/85 dark:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)]"
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
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl dark:text-white">
              Sunshine&rsquo;s
            </span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[11px] dark:text-slate-400">
              Learning Laboratory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3 py-2 font-display text-sm font-bold text-foreground/80 transition-colors duration-200 hover:bg-primary/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100 dark:bg-yellow-300"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <a
            href="tel:+19299254152"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/40 bg-white px-4 py-2 font-display text-sm font-bold text-secondary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40 dark:bg-slate-900 dark:text-slate-100 dark:border-white/15"
          >
            <PhoneCall className="h-4 w-4 text-secondary" aria-hidden="true" />
            (929) 925-4152
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-extrabold text-primary-foreground shadow-[0_8px_0_-2px_rgba(255,138,43,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            Schedule a Tour
          </a>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow ring-2 ring-primary/30 lg:hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 dark:bg-slate-900 dark:text-slate-100 dark:ring-yellow-300/30"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden mx-3 mb-3 overflow-hidden rounded-3xl border-2 border-primary/20 bg-white shadow-xl dark:bg-slate-900 dark:border-white/10"
        >
          <nav className="flex flex-col gap-1 p-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-display text-base font-bold text-foreground hover:bg-primary/15 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-1 pb-1 pt-2">
              <ThemeToggle variant="pill" />
              <a
                href="tel:+19299254152"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary/40 bg-white px-4 py-3 font-display font-bold text-secondary-foreground dark:bg-slate-900 dark:text-slate-100 dark:border-white/10"
              >
                <PhoneCall className="h-4 w-4 text-secondary" aria-hidden="true" />
                (929) 925-4152
              </a>
              <a
                href="#contact"
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
