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
    <section id="curriculum" className="relative w-full py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-[var(--sunshine-cream)] to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-blue)]">
            Our daily rhythm
          </p>
          <h2 className="mt-2 font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            The <span className="wavy-underline">Learn · Grow · Play · Share</span> cycle.
          </h2>
          <p className="mt-5 font-display text-lg text-muted-foreground sm:text-xl text-pretty">
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
              className="group relative isolate flex flex-col overflow-hidden rounded-[28px] border-4 border-white p-6 shadow-[0_18px_0_-12px_rgba(31,42,68,0.18)] transition-transform hover:-translate-y-1"
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

        <div className="mt-16 overflow-hidden rounded-[36px] border-4 border-white bg-white shadow-2xl">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-magenta)]">
                Special programs
              </p>
              <h3 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
                Tiny humans, huge curiosities.
              </h3>
              <p className="mt-3 font-display text-base text-muted-foreground sm:text-lg">
                Beyond the basics, kids dive into hands-on enrichment with
                trained early-childhood educators in a small-group setting.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {PROGRAM_FEATURES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary/15 px-4 py-3 font-display font-bold text-foreground"
                  >
                    <Icon className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ring-4 ring-[var(--sunshine-yellow)]/40">
              <Image
                src="/images/stem_children.png"
                alt="Children doing a hands-on STEM activity together"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
