"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PhoneCall, Sparkles, ShieldCheck, Baby, GraduationCap } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { PulsatingButton } from "@/components/ui/pulsating-button";

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
      {/* Sky gradient + cream blob */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#FFE9A5] via-[#FFF3CD] to-transparent" />
        <motion.span
          className="absolute -top-24 -left-24 h-96 w-96 bg-primary/30 animate-blob"
          aria-hidden="true"
        />
        <motion.span
          className="absolute top-32 -right-20 h-80 w-80 bg-secondary/40 animate-blob"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />
        <motion.span
          className="absolute bottom-20 left-1/3 h-72 w-72 bg-[var(--sunshine-magenta)]/20 animate-blob"
          style={{ animationDelay: "-8s" }}
          aria-hidden="true"
        />
      </div>

      {/* Floating doodles */}
      <FloatingDoodle
        className="absolute left-[6%] top-[18%] hidden sm:block"
        delay={0.2}
      >
        <SunDoodle />
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute right-[8%] top-[22%] hidden md:block"
        delay={0.5}
        duration={7}
      >
        <CloudDoodle />
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute left-[10%] bottom-[14%] hidden md:block"
        delay={0.4}
        duration={8}
      >
        <BlockDoodle letter="A" color="#2F6CFF" />
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute right-[12%] bottom-[20%] hidden md:block"
        delay={0.7}
        duration={6.5}
      >
        <BlockDoodle letter="B" color="#E54CB1" />
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute left-[40%] top-[8%] hidden lg:block"
        delay={0.9}
        duration={9}
      >
        <StarDoodle />
      </FloatingDoodle>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white/90 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-foreground shadow-sm sm:text-sm"
        >
          <Sparkles className="h-4 w-4 text-[var(--sunshine-orange)]" />
          Now Enrolling for Fall — Limited Spots
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

        <h1 className="font-heading text-4xl font-extrabold leading-[1.02] text-foreground text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">A happy place to</span>
          <AnimatedGradientText className="block text-5xl font-black sm:text-7xl lg:text-8xl">
            learn, grow & shine.
          </AnimatedGradientText>
        </h1>

        <p className="mt-6 max-w-2xl font-display text-lg font-medium text-muted-foreground sm:text-xl lg:text-2xl text-pretty">
          A joyful, NYS-licensed daycare and learning lab in Jamaica, NY for
          kids <strong className="text-foreground">6 weeks to 12 years</strong>.
          Big imaginations, tiny scientists, brilliant futures.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <PulsatingButton className="w-full max-w-xs px-8 py-4 text-base sm:w-auto">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Schedule a Tour
          </PulsatingButton>
          <a
            href="tel:7184046909"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-4 font-display text-base font-bold text-foreground shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:w-auto"
          >
            <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
            (718) 404-6909
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          {TRUST.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-4 py-2 font-display font-bold text-foreground shadow-sm backdrop-blur"
            >
              <Icon className="h-4 w-4 text-[var(--sunshine-blue)]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SunDoodle() {
  return (
    <svg width="84" height="84" viewBox="0 0 100 100" aria-hidden="true">
      <g className="animate-spin-slow" style={{ transformOrigin: "50% 50%" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="48"
            y="4"
            width="4"
            height="12"
            rx="2"
            fill="#FF8A2B"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="22" fill="#FFC233" />
      <circle cx="44" cy="46" r="2.4" fill="#1F2A44" />
      <circle cx="56" cy="46" r="2.4" fill="#1F2A44" />
      <path d="M42 56 Q50 62 58 56" stroke="#1F2A44" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CloudDoodle() {
  return (
    <svg width="120" height="76" viewBox="0 0 120 76" aria-hidden="true">
      <g fill="#FFFFFF" stroke="#5BC0F8" strokeWidth="3">
        <ellipse cx="34" cy="48" rx="22" ry="18" />
        <ellipse cx="62" cy="40" rx="26" ry="22" />
        <ellipse cx="92" cy="50" rx="20" ry="16" />
      </g>
    </svg>
  );
}

function BlockDoodle({ letter, color }: { letter: string; color: string }) {
  return (
    <svg width="62" height="62" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="6" y="6" width="88" height="88" rx="18" fill={color} />
      <rect x="6" y="6" width="88" height="88" rx="18" fill="none" stroke="#1F2A44" strokeOpacity="0.18" strokeWidth="3" />
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="Fredoka, sans-serif"
        fontWeight="800"
        fontSize="54"
        fill="#FFFFFF"
      >
        {letter}
      </text>
    </svg>
  );
}

function StarDoodle() {
  return (
    <svg width="60" height="60" viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 6 L60 38 L94 38 L66 58 L76 90 L50 70 L24 90 L34 58 L6 38 L40 38 Z"
        fill="#E54CB1"
        stroke="#1F2A44"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
    </svg>
  );
}
