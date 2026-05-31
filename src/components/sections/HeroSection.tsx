"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PhoneCall, Sparkles, ShieldCheck, Baby, GraduationCap } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const FloatingDoodle = ({
  children,
  className,
  delay = 0,
  duration = 6,
  amplitude = 14,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -amplitude, 0],
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
    }}
    aria-hidden="true"
  >
    {children}
  </motion.div>
);

const TRUST = [
  { icon: ShieldCheck, label: "NYS Licensed" },
  { icon: Baby, label: "Ages 6 weeks – 12 years" },
  { icon: GraduationCap, label: "STEM + Montessori-inspired" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden pb-20 pt-10 sm:pt-16 lg:pt-20"
    >
      {/* Sky gradient + cream blob (lightens to cream day, deepens to night sky in dark mode) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#FFE9A5] via-[#FFF3CD] to-transparent dark:from-slate-900 dark:via-slate-950 dark:to-transparent" />
        <motion.span
          className="absolute -top-24 -left-24 h-96 w-96 bg-primary/30 animate-blob dark:bg-primary/15"
          aria-hidden="true"
        />
        <motion.span
          className="absolute top-32 -right-20 h-80 w-80 bg-secondary/40 animate-blob dark:bg-secondary/20"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />
        <motion.span
          className="absolute bottom-20 left-1/3 h-72 w-72 bg-[var(--sunshine-magenta)]/20 animate-blob dark:bg-[var(--sunshine-magenta)]/15"
          style={{ animationDelay: "-8s" }}
          aria-hidden="true"
        />
      </div>

      {/* Elegant Glass Shapes */}
      <FloatingDoodle
        className="absolute left-[8%] top-[15%] hidden sm:block"
        delay={0.2}
      >
        <GlassShape className="relative flex h-28 w-28 items-center justify-center rounded-full">
          <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[var(--sunshine-yellow)] opacity-50 blur-xl" />
        </GlassShape>
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute right-[10%] top-[20%] hidden md:block"
        delay={0.5}
        duration={7}
      >
        <GlassShape className="relative flex h-36 w-24 items-center justify-center rounded-t-full">
          <div className="absolute inset-x-0 bottom-4 m-auto h-20 w-16 rounded-full bg-[var(--sunshine-blue)] opacity-40 blur-xl" />
        </GlassShape>
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute bottom-[18%] left-[12%] hidden md:block"
        delay={0.4}
        duration={8}
      >
        <GlassShape className="relative flex h-32 w-16 -rotate-12 items-center justify-center rounded-full">
          <div className="absolute inset-0 m-auto h-20 w-10 rounded-full bg-[var(--sunshine-magenta)] opacity-40 blur-xl" />
        </GlassShape>
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute bottom-[24%] right-[14%] hidden md:block"
        delay={0.7}
        duration={6.5}
      >
        <GlassShape className="relative flex h-24 w-24 items-center justify-center rounded-2xl rotate-12">
          <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[var(--sunshine-green)] opacity-40 blur-xl" />
        </GlassShape>
      </FloatingDoodle>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white/90 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-foreground shadow-sm sm:text-sm dark:border-yellow-300/40 dark:bg-slate-900/80 dark:text-slate-100"
        >
          <Sparkles className="h-4 w-4 text-[var(--sunshine-orange)] dark:text-yellow-300" />
          Limited spots available
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 14, stiffness: 110 }}
          className="relative mb-6"
        >
          <span className="absolute inset-0 m-auto h-44 w-44 rounded-full bg-primary/30 blur-2xl sm:h-56 sm:w-56" aria-hidden="true" />
          <Image
            src="/LOGOSS.png"
            alt="Sunshine's Learning Laboratory logo — a smiling sun with ABC blocks and kids"
            width={320}
            height={320}
            priority
            className="relative h-40 w-40 object-contain drop-shadow-[0_18px_22px_rgba(255,138,43,0.35)] sm:h-52 sm:w-52 lg:h-64 lg:w-64"
          />
        </motion.div>

        <h1 className="font-heading text-5xl font-black leading-none tracking-tight text-foreground text-balance sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] dark:text-white">
          <span className="block mb-2">A happy place to</span>
          <AnimatedGradientText className="block pb-2">
            learn, grow & shine.
          </AnimatedGradientText>
        </h1>

        <p className="mt-6 max-w-2xl font-display text-lg font-medium text-muted-foreground sm:text-xl lg:text-2xl text-pretty dark:text-slate-300">
          A joyful, NYS-licensed daycare and learning lab in Jamaica, NY for
          kids{" "}
          <strong className="text-foreground dark:text-yellow-300">
            6 weeks to 12 years
          </strong>
          . Big imaginations, tiny scientists, brilliant futures.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById("contact");
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="kid-shadow inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-[var(--sunshine-yellow)] bg-[var(--sunshine-yellow)] px-8 py-4 font-display text-base font-extrabold text-slate-900 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_0_-10px_rgba(255,194,51,0.6),0_40px_60px_-25px_rgba(47,108,255,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:w-auto"
            aria-label="Schedule a tour — jump to the contact form"
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Schedule a Tour
          </button>
          <a
            href="tel:+17184046909"
            aria-label="Call Sunshine's Learning Laboratory at (718) 404-6909"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-4 font-display text-base font-bold text-foreground shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:w-auto dark:bg-slate-900 dark:text-slate-100 dark:border-white/15"
          >
            <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
            (718) 404-6909
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-3">
          {TRUST.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-3 py-1.5 font-display text-xs font-bold text-foreground shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm dark:border-white/20 dark:bg-white/10 dark:text-slate-100"
            >
              <Icon className="h-4 w-4 text-[var(--sunshine-blue)] dark:text-sky-300" aria-hidden="true" />
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function GlassShape({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`overflow-hidden border border-white/40 bg-white/60 shadow-[0_12px_40px_rgba(31,42,68,0.08)] dark:border-white/10 dark:bg-slate-800/80 dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/10" />
      {children}
    </div>
  );
}
