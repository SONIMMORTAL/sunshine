"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Baby, Blocks, Backpack, BookOpen, Bus, Check, Clock4 } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

const PROGRAMS = [
  {
    name: "Infants",
    age: "6 weeks – 18 months",
    weekly: "$335",
    color: "var(--sunshine-magenta)",
    bg: "bg-[var(--sunshine-magenta)]/10",
    Icon: Baby,
    perks: [
      "Tiny ratios & cuddles",
      "Sensory & tummy time",
      "Daily diaper & meal log",
    ],
  },
  {
    name: "Toddlers",
    age: "18 months – 3 years",
    weekly: "$310",
    color: "var(--sunshine-orange)",
    bg: "bg-[var(--sunshine-orange)]/10",
    Icon: Blocks,
    perks: [
      "Potty training support",
      "Language explosion play",
      "Music & movement",
    ],
  },
  {
    name: "Preschool",
    age: "3 – 5 years",
    weekly: "$284 - $300",
    color: "var(--sunshine-blue)",
    bg: "bg-[var(--sunshine-blue)]/10",
    Icon: BookOpen,
    featured: true,
    perks: [
      "Phonics, math & STEM",
      "Mini lab experiments",
      "Autism spectrum trained staff",
    ],
  },

  {
    name: "School-Age",
    age: "5 – 12 years",
    weekly: "$256",
    color: "var(--sunshine-purple)",
    bg: "bg-[var(--sunshine-purple)]/10",
    Icon: Bus,
    perks: [
      "Homework help",
      "STEM clubs & robotics",
      "Before & after school care",
    ],
  },
];

const HOURS = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
];

export function InvestmentSection() {
  return (
    <section id="tuition" className="relative w-full py-24 sm:py-32">
      <div id="programs" className="absolute -top-24" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-green)] dark:text-emerald-300">
            Tuition & programs
          </p>
          <h2 className="mt-2 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white">
            Friendly pricing for{" "}
            <span className="wavy-underline-blue">every age</span>.
          </h2>
          <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
            Weekly tuition includes meals, snacks, supplies, and all enrichment
            programs. No hidden fees, ever.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: p.featured ? -8 : -4 }}
              className={`relative flex flex-col overflow-hidden rounded-[28px] border-4 p-6 transition-shadow duration-300 ${
                p.featured
                  ? "border-[var(--sunshine-yellow)] bg-white shadow-[0_30px_0_-20px_rgba(255,194,51,0.6),0_30px_60px_-30px_rgba(31,42,68,0.4)] hover:shadow-[0_40px_0_-22px_rgba(255,194,51,0.7),0_40px_80px_-30px_rgba(31,42,68,0.45)] lg:-translate-y-2 lg:scale-[1.04] dark:bg-yellow-500/10 dark:border-yellow-400/40 dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]"
                  : "border-white bg-white shadow-xl hover:shadow-2xl dark:bg-slate-900 dark:border-white/10 dark:hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-4 rounded-full bg-[var(--sunshine-yellow)] px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-foreground shadow dark:text-slate-900">
                  Most popular
                </span>
              )}
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.bg} dark:ring-1 dark:ring-white/10`}
                style={{ color: p.color }}
              >
                <p.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-2xl font-black text-foreground dark:text-white">
                {p.name}
              </h3>
              <p className="mt-1 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground dark:text-slate-400">
                {p.age}
              </p>
              <p className="mt-5 font-heading text-4xl font-black text-foreground dark:text-yellow-300">
                {p.weekly}
                <span className="ml-1 font-display text-base font-bold text-muted-foreground dark:text-slate-400">
                  /wk
                </span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground dark:text-slate-200">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 font-display">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 dark:!text-yellow-300"
                      style={{ color: p.color }}
                      aria-hidden="true"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-white p-1 shadow-2xl dark:border-white/10 dark:bg-slate-900">
            <ShineBorder shineColor={["#FFC233", "#2F6CFF", "#E54CB1"]} className="z-0" />
            <div className="relative z-10 rounded-[28px] bg-white p-6 sm:p-8 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sunshine-yellow)] text-foreground shadow dark:text-slate-900">
                  <Clock4 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-black text-foreground sm:text-3xl dark:text-white">
                  Operating hours
                </h3>
              </div>
              <ul className="mt-6 divide-y divide-foreground/10 dark:divide-white/10">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3 font-display text-foreground dark:text-slate-200"
                  >
                    <span className="font-bold dark:text-slate-300">{h.day}</span>
                    <span className="dark:text-yellow-300">{h.time}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
