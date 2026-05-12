"use client";

import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

const TESTIMONIALS = [
  {
    name: "Sarah J.",
    relation: "Mom of Olivia (4)",
    body: "The Spanish immersion is incredible — Olivia comes home humming songs in Spanish! The teachers feel like family.",
    bg: "bg-[var(--sunshine-yellow)]/40",
    rotate: -2,
  },
  {
    name: "Michael C.",
    relation: "Dad of Lucas (2)",
    body: "Absolute peace of mind. The safety and warmth at Sunshine's is unmatched, and Lucas loves the STEM lab days.",
    bg: "bg-[var(--sunshine-sky)]/40",
    rotate: 2,
  },
  {
    name: "Elena R.",
    relation: "Mom of Mia (3)",
    body: "Small classes mean my daughter gets so much individualized attention. Mrs. Lisa is a treasure.",
    bg: "bg-[var(--sunshine-magenta)]/30",
    rotate: -1,
  },
  {
    name: "Jordan P.",
    relation: "Dad of twins (5)",
    body: "The Mother's Day brunch had us in tears. This place truly celebrates families, not just kids.",
    bg: "bg-[var(--sunshine-green)]/30",
    rotate: 1,
  },
];

export function SocialProofSection() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,194,51,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(253,224,71,0.10),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-foreground shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
            <Heart className="h-4 w-4 text-[var(--sunshine-magenta)] dark:text-pink-400" aria-hidden="true" fill="currentColor" />
            Loved by parents
          </div>
          <h2 className="mt-4 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white">
            Hear it from the{" "}
            <span className="wavy-underline-pink">grown-ups</span>.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <AvatarCircles
              avatarUrls={[
                { imageUrl: "https://i.pravatar.cc/150?img=1", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=23", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=5", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=12", profileUrl: "#" },
              ]}
              numPeople={8}
            />
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--sunshine-orange)] text-[var(--sunshine-orange)] dark:fill-yellow-300 dark:text-yellow-300" aria-hidden="true" />
              ))}
              <span className="ml-2 font-display text-sm font-bold text-foreground dark:text-slate-200">
                5.0 from our community
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30, rotate: t.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, type: "spring", damping: 14, stiffness: 90 }}
              whileHover={{ y: -4, rotate: 0 }}
              className={`group relative flex flex-col rounded-[28px] border-4 border-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-white/10 ${t.bg}`}
            >
              {/* Newspaper-style decorative quote mark */}
              <svg
                aria-hidden="true"
                viewBox="0 0 56 40"
                className="pointer-events-none absolute right-3 top-2 h-10 w-14 text-foreground/15 dark:text-white/15"
                fill="currentColor"
              >
                <path d="M14 0C6.3 0 0 6.3 0 14v8c0 9.9 8.1 18 18 18v-8c-5.5 0-10-4.5-10-10h6c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4H14zm28 0c-7.7 0-14 6.3-14 14v8c0 9.9 8.1 18 18 18v-8c-5.5 0-10-4.5-10-10h6c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4h0z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-4 border-white dark:border-white/10"
                style={{ background: "inherit" }}
              />
              <blockquote className="relative font-display text-base text-foreground/90 dark:text-slate-100">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading text-base font-extrabold text-foreground shadow dark:bg-slate-900 dark:text-white"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-heading text-base font-extrabold text-foreground dark:text-white">
                    {t.name}
                  </span>
                  <span className="font-display text-sm text-foreground/70 dark:text-slate-300">
                    {t.relation}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
