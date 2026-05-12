"use client";

import { motion } from "motion/react";
import { ShieldCheck, HeartPulse, UserCheck, FileBadge2, Sandwich, Sparkles } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "NYS Licensed", color: "var(--sunshine-blue)" },
  { icon: Sandwich, label: "CACFP-eligible meals", color: "var(--sunshine-green)" },
  { icon: HeartPulse, label: "CPR + First Aid", color: "var(--sunshine-red)" },
  { icon: UserCheck, label: "Background-checked staff", color: "var(--sunshine-magenta)" },
  { icon: FileBadge2, label: "Insured & inspected", color: "var(--sunshine-orange)" },
];

/**
 * Compact "trust strip" displayed under the hero. Reinforces the credentials
 * parents look for at a glance.
 */
export function TrustBadges() {
  return (
    <section
      aria-label="Trust and credentials"
      className="relative w-full border-y border-foreground/5 bg-white/70 py-6 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/60"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-widest text-muted-foreground dark:text-slate-300">
          <Sparkles className="h-4 w-4 text-[var(--sunshine-orange)] dark:text-yellow-300" aria-hidden="true" />
          Trusted by
          <Sparkles className="h-4 w-4 text-[var(--sunshine-orange)] dark:text-yellow-300" aria-hidden="true" />
        </span>
        {BADGES.map(({ icon: Icon, label, color }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-3 py-1.5 font-display text-xs font-bold text-foreground shadow-sm sm:text-sm dark:border-white/15 dark:bg-white/10 dark:text-slate-100"
          >
            <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
            {label}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
