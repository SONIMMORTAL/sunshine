"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Beaker, Heart, Lightbulb } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Beaker,
    title: "Mini Scientists",
    body: "Hands-on experiments, sensory bins, and STEM tinker time every single day.",
    color: "var(--sunshine-blue)",
    bg: "bg-[var(--sunshine-blue)]/10",
  },
  {
    icon: Heart,
    title: "Warm & Caring",
    body: "Tiny class sizes mean every child gets a hug, a high-five and tons of attention.",
    color: "var(--sunshine-magenta)",
    bg: "bg-[var(--sunshine-magenta)]/10",
  },
  {
    icon: Lightbulb,
    title: "Big Ideas",
    body: "Montessori-inspired play that nurtures curiosity, language, and confidence.",
    color: "var(--sunshine-orange)",
    bg: "bg-[var(--sunshine-orange)]/10",
  },
];

export function MascotIntroSection() {
  return (
    <section id="mascot" className="relative w-full overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-12 left-1/4 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-52 w-52 rounded-full bg-[var(--sunshine-blue)]/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 16, stiffness: 90 }}
          className="relative mx-auto w-full max-w-md"
        >
          <span className="absolute -inset-6 rounded-[36%_64%_46%_54%/52%_42%_58%_48%] bg-primary/30 blur-2xl" aria-hidden="true" />
          <motion.div
            className="relative overflow-hidden rounded-[36px] border-4 border-white bg-white shadow-2xl kid-shadow"
            animate={{ rotate: [-1.6, 1.6, -1.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/new_mascot.jpg"
              alt="Our smiling sun mascot wearing safety goggles in the lab"
              width={720}
              height={720}
              sizes="(max-width: 640px) 90vw, 460px"
              className="h-auto w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 rotate-6 rounded-3xl border-4 border-white bg-[var(--sunshine-yellow)] px-5 py-3 font-display text-lg font-extrabold text-foreground shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            Hi, I&rsquo;m Sunny!
          </motion.div>
        </motion.div>

        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-orange)]">
            Meet our mascot
          </p>
          <h2 className="mt-2 font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Say hello to{" "}
            <span className="wavy-underline-pink">Sunny</span>, our resident
            mini-scientist.
          </h2>
          <p className="mt-5 max-w-xl font-display text-lg text-muted-foreground sm:text-xl text-pretty">
            Sunny leads experiments, dance parties and story time. Every day at
            Sunshine&rsquo;s, kids learn to ask big questions, build big ideas,
            and share big feelings.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-1">
            {HIGHLIGHTS.map(({ icon: Icon, title, body, color, bg }) => (
              <li
                key={title}
                className={`flex items-start gap-4 rounded-3xl border-2 border-white p-5 shadow-sm ${bg}`}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-foreground shadow"
                  style={{ color }}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 font-display text-base text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
