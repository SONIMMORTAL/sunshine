"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  BookOpenText,
  Sprout,
  Puzzle,
  HandHeart,
  Microscope,
  Languages,
  Music,
  Palette,
} from "lucide-react";

const PILLARS = [
  {
    title: "LEARN",
    tagline: "Curiosity sparked daily.",
    body: "Phonics, early math, science experiments, and Montessori-inspired self-directed work.",
    color: "#FFC233",
    text: "#7A4B00",
    Icon: BookOpenText,
  },
  {
    title: "GROW",
    tagline: "Confidence that lasts.",
    body: "Fine motor skills, emotional literacy, mindfulness moments, and lots of cozy reading nooks.",
    color: "#4FC76A",
    text: "#0F3F23",
    Icon: Sprout,
  },
  {
    title: "PLAY",
    tagline: "Joy is the curriculum.",
    body: "Sensory bins, outdoor play, music, building blocks, art studios and dramatic play centers.",
    color: "#E54CB1",
    text: "#4C0E36",
    Icon: Puzzle,
  },
  {
    title: "SHARE",
    tagline: "Kindness in action.",
    body: "Circle time, group projects, Spanish immersion and community celebrations like Mother's Day brunch.",
    color: "#2F6CFF",
    text: "#031A50",
    Icon: HandHeart,
  },
];

const PROGRAM_FEATURES = [
  { icon: Microscope, label: "STEM Lab" },
  { icon: Languages, label: "Spanish Immersion" },
  { icon: Music, label: "Music & Movement" },
  { icon: Palette, label: "Art Studio" },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative w-full py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-[var(--sunshine-cream)] to-transparent dark:from-slate-900/60 dark:via-slate-950/40 dark:to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-blue)] dark:text-sky-300">
            Our daily rhythm
          </p>
          <h2 className="mt-2 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white">
            The <span className="wavy-underline">Learn · Grow · Play · Share</span> cycle.
          </h2>
          <p className="mt-5 font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
            A whole-child curriculum that blends Montessori principles, STEM
            exploration, Spanish immersion, and lots of belly-laughing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ title, tagline, body, color, text, Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, type: "spring", damping: 16, stiffness: 90 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="group relative isolate flex flex-col overflow-hidden rounded-[28px] border-4 border-white p-6 shadow-[0_18px_0_-12px_rgba(31,42,68,0.18)] transition-shadow duration-300 hover:shadow-[0_28px_0_-14px_rgba(31,42,68,0.22),0_30px_60px_-30px_rgba(0,0,0,0.4)]"
              style={{ background: color }}
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl"
              />
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow"
                style={{ color }}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3
                className="mt-5 font-heading text-3xl font-black tracking-tight"
                style={{ color: text }}
              >
                {title}
              </h3>
              <p className="mt-1 font-display text-sm font-extrabold uppercase tracking-wider" style={{ color: text, opacity: 0.85 }}>
                {tagline}
              </p>
              <p className="mt-3 font-display text-base font-medium leading-relaxed" style={{ color: text }}>
                {body}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border-2 border-white bg-white shadow-xl dark:border-white/10 dark:bg-slate-900">
          <div className="grid items-center gap-5 p-5 sm:gap-6 sm:p-7 lg:grid-cols-[1.5fr_0.9fr]">
            <div>
              <p className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-magenta)] dark:text-pink-400">
                Special programs
              </p>
              <h3 className="mt-1.5 font-heading text-2xl font-black text-foreground sm:text-3xl dark:text-white">
                Tiny humans, huge curiosities.
              </h3>
              <p className="mt-2 font-display text-sm text-muted-foreground sm:text-base dark:text-slate-300">
                Beyond the basics, kids dive into hands-on enrichment with
                trained early-childhood educators in a small-group setting.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {PROGRAM_FEATURES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary/15 px-3 py-2 font-display text-sm font-bold text-foreground dark:bg-white/5 dark:text-slate-200 dark:border dark:border-white/10"
                  >
                    <Icon
                      className="h-4 w-4 text-[var(--sunshine-blue)] dark:text-sky-300"
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[40%_60%_46%_54%/52%_42%_58%_48%] bg-[var(--sunshine-yellow)]/30 blur-2xl dark:bg-yellow-300/15"
              />
              <Image
                src="/images/kid.png"
                alt="A happy child exploring hands-on enrichment activities at Sunshine's"
                width={480}
                height={480}
                sizes="(max-width: 1024px) 50vw, 320px"
                className="h-auto w-full max-w-[280px] object-contain drop-shadow-[0_18px_24px_rgba(231,138,0,0.30)] transition-transform duration-700 hover:scale-[1.03] dark:drop-shadow-[0_18px_24px_rgba(255,213,66,0.25)] sm:max-w-[320px]"
              />
              {/* Floating star spark for premium feel */}
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute right-0 top-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--sunshine-magenta)] text-white shadow-[0_10px_24px_-8px_rgba(229,76,177,0.55)] sm:right-2 sm:top-4 sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2l1.8 5.6L19 9l-4.6 3.4L16 18l-4-2.8L8 18l1.6-5.6L5 9l5.2-1.4L12 2z" />
                </svg>
              </motion.span>
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="pointer-events-none absolute -left-2 bottom-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--sunshine-blue)] text-white shadow-[0_6px_18px_-4px_rgba(47,108,255,0.55)] sm:left-0 sm:h-8 sm:w-8"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.8 5.6L19 9l-4.6 3.4L16 18l-4-2.8L8 18l1.6-5.6L5 9l5.2-1.4L12 2z" />
                </svg>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
