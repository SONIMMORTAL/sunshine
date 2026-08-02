"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { MapPin, Clock4, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  const headingId = useId();
  return (
    <section
      id="location"
      aria-labelledby={headingId}
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(255,194,51,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(253,224,71,0.10),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-magenta)] dark:text-pink-400">
            Find us
          </p>
          <h2
            id={headingId}
            className="mt-2 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white"
          >
            Right in the heart of{" "}
            <span className="wavy-underline-blue">Jamaica, NY</span>.
          </h2>
          <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
            Easy to reach by train, bus, or car. Drop-off and pickup are a
            breeze.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 90 }}
          className="mt-12 mx-auto max-w-xl"
        >
          <div className="rounded-[32px] border-4 border-white bg-white p-6 shadow-xl sm:p-8 dark:border-white/10 dark:bg-slate-900">
            <h3 className="flex items-center gap-3 font-heading text-2xl font-black text-foreground sm:text-3xl dark:text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sunshine-yellow)] text-foreground shadow dark:text-slate-900">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              Visit us
            </h3>

            <address className="mt-5 not-italic font-display text-base font-bold text-foreground dark:text-slate-100">
              Jamaica Queens, 11434
            </address>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-5 py-3 font-display text-sm font-extrabold text-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              >
                <Phone className="h-4 w-4 text-[var(--sunshine-blue)] dark:text-sky-300" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>

            <div className="mt-7 rounded-2xl bg-primary/15 p-4 dark:bg-yellow-500/10">
              <p className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wider text-foreground dark:text-yellow-200">
                <Clock4 className="h-4 w-4 text-[var(--sunshine-orange)] dark:text-yellow-300" aria-hidden="true" />
                Hours
              </p>
              <p className="mt-2 font-display text-base font-bold text-foreground dark:text-slate-100">
                Monday – Friday · 8:00 AM – 6:00 PM
              </p>
              <p className="mt-1 font-display text-sm text-muted-foreground dark:text-slate-400">
                Closed weekends and major holidays.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
