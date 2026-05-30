"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Train, Bus, Car, Clock4, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const FULL_ADDRESS = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;
const MAP_QUERY = encodeURIComponent(FULL_ADDRESS);
/**
 * Embedded Google Maps iframe. Using the no-API-key embed URL is fine for
 * a single static address; if Google starts requiring an API key for the
 * embed in your region, swap this for the official Maps Embed API.
 *
 * TODO (owner): replace with a Maps Embed API URL once you have a key.
 */
const MAP_SRC = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=15&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const NEARBY = [
  { icon: Train, label: "JFK AirTrain — Sutphin Blvd", note: "~10 min walk" },
  { icon: Bus, label: "Q40, Q41, Q9 buses", note: "1 block away" },
  { icon: Car, label: "Free street parking", note: "Drop-off friendly" },
];

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
          className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="relative overflow-hidden rounded-[32px] p-[3px] shadow-[0_30px_60px_-30px_rgba(31,42,68,0.4)] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-[32px] bg-[conic-gradient(from_140deg,#FFC233,#FF8A2B,#E54CB1,#5BC0F8,#FFC233)] opacity-90"
            />
            <div className="relative overflow-hidden rounded-[29px] bg-white p-1 dark:bg-slate-900">
              <div className="overflow-hidden rounded-[26px] ring-2 ring-white/60 dark:ring-white/10">
              <iframe
                title={`Map showing ${siteConfig.name}`}
                src={MAP_SRC}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[360px] w-full sm:h-[420px] dark:[color-scheme:dark]"
                allowFullScreen
              />
            </div>
            </div>
          </div>

          <div className="rounded-[32px] border-4 border-white bg-white p-6 shadow-xl sm:p-8 dark:border-white/10 dark:bg-slate-900">
            <h3 className="flex items-center gap-3 font-heading text-2xl font-black text-foreground sm:text-3xl dark:text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sunshine-yellow)] text-foreground shadow dark:text-slate-900">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              Visit us
            </h3>

            <address className="mt-5 not-italic font-display text-base font-bold text-foreground dark:text-slate-100">
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality},{" "}
              {siteConfig.address.addressRegion}{" "}
              {siteConfig.address.postalCode}
            </address>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--sunshine-blue)] px-5 py-3 font-display text-sm font-extrabold text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--sunshine-blue)]/40 dark:bg-sky-400 dark:text-slate-900"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
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
                Monday – Friday · 7:00 AM – 6:30 PM
              </p>
              <p className="mt-1 font-display text-sm text-muted-foreground dark:text-slate-400">
                Closed weekends and major holidays.
              </p>
            </div>

            <ul className="mt-6 grid gap-2">
              {NEARBY.map(({ icon: Icon, label, note }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 ring-1 ring-foreground/5 dark:bg-slate-950 dark:ring-white/10"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--sunshine-sky)]/30 text-[var(--sunshine-blue)] dark:bg-sky-400/15 dark:text-sky-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-1 flex-col leading-tight">
                    <span className="font-display text-sm font-extrabold text-foreground dark:text-slate-100">
                      {label}
                    </span>
                    <span className="font-display text-xs text-muted-foreground dark:text-slate-400">
                      {note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
