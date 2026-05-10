"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Sparkles } from "lucide-react";

const STATS = [
  { value: 12, suffix: "", label: "Kids per class" },
  { value: 6, suffix: "w+", label: "From 6 weeks old" },
  { value: 4, suffix: "★", label: "NYS licensed program" },
  { value: 100, suffix: "%", label: "Whole-child focus" },
];

const MOMENTS = [
  {
    src: "/images/mascot-with-kids-1.png",
    alt: "Sunny the mascot reading with a small group of kids",
    label: "Story circle",
    badge: "Daily",
    color: "var(--sunshine-orange)",
  },
  {
    src: "/images/mascot-with-kids-2.png",
    alt: "Mascot doing a science experiment with kids",
    label: "Mini lab time",
    badge: "STEM",
    color: "var(--sunshine-blue)",
  },
  {
    src: "/images/mascot-with-kids-3.png",
    alt: "Mascot dancing with kids in a bright classroom",
    label: "Dance party!",
    badge: "Fri",
    color: "var(--sunshine-magenta)",
  },
];

export function MomentsSection() {
  return (
    <section
      id="moments"
      className="relative w-full overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-orange)]">
            Moments we love
          </p>
          <h2 className="mt-2 font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Big <span className="wavy-underline">imaginations</span>, even bigger smiles.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOMENTS.map((m, i) => (
            <motion.figure
              key={m.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group relative overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-[0_30px_60px_-30px_rgba(31,42,68,0.4)]"
            >
              <div
                className={`relative aspect-[4/5] w-full ${i === 2 ? "hidden lg:block" : ""}`}
                style={{ background: m.color }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-foreground shadow"
                  style={{ color: m.color }}
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {m.badge}
                </span>
              </div>
              {/* keep 3rd visible on mobile via small card */}
              {i === 2 && (
                <div
                  className="relative aspect-[4/5] w-full lg:hidden"
                  style={{ background: m.color }}
                >
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-foreground shadow">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {m.badge}
                  </span>
                </div>
              )}
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-heading text-xl font-extrabold text-foreground">
                  {m.label}
                </span>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: m.color }} aria-hidden="true" />
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 rounded-[32px] border-4 border-white bg-white/80 p-6 shadow-xl backdrop-blur sm:grid-cols-4 sm:p-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl font-black text-foreground sm:text-5xl">
                <NumberTicker value={s.value} />
                <span className="text-[var(--sunshine-orange)]">{s.suffix}</span>
              </p>
              <p className="mt-1 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
