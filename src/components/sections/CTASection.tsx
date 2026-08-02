"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin, PhoneCall, Mail, Sparkles } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { ConfettiBurst } from "@/components/ui/confetti";

export function CTASection() {
  const [burst, setBurst] = useState(0);

  return (
    <section
      id="visit"
      className="relative isolate w-full overflow-hidden py-24 sm:py-28"
    >
      {/* Sunburst background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE08A_0%,_#FFC233_35%,_#FF8A2B_75%,_#E54CB1_120%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0deg 6deg, transparent 6deg 18deg)",
          }}
        />
      </div>

      {/* Corner icon — Sunny sits in the bottom-left, headline overlays him */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: 60, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", damping: 18, stiffness: 80 }}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-10 z-0 w-[80vw] max-w-[760px] sm:-bottom-24 sm:-left-16 lg:-bottom-32 lg:-left-24 lg:max-w-[860px]"
      >
        <Image
          src="/images/footer.png"
          alt=""
          width={1280}
          height={1280}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 860px"
          className="h-auto w-full rotate-[-4deg] object-contain drop-shadow-[0_36px_55px_rgba(155,55,0,0.4)]"
          priority={false}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/30 px-5 py-2 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#1F2A44] backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Limited spots available
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl font-heading text-5xl font-black leading-[0.95] tracking-tight text-[#1F2A44] sm:text-6xl lg:text-[5.5rem] text-balance drop-shadow-[0_2px_0_rgba(255,255,255,0.45)]"
        >
          Your child&rsquo;s next{" "}
          <span className="relative inline-block">
            <span className="relative z-10">big adventure</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-white/70 sm:bottom-2 sm:h-4"
            />
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="wavy-underline">starts here</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl font-display text-lg font-semibold text-[#1F2A44]/90 sm:text-xl text-pretty"
        >
          Spots are limited! Book a tour, meet the teachers, and watch your kid
          fall in love with learning.
        </motion.p>

        <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <ConfettiBurst trigger={burst} className={burst === 0 ? "hidden" : ""} />
            <PulsatingButton
              onClick={() => setBurst((n) => n + 1)}
              className="px-9 py-5 text-lg"
              pulseColor="rgba(255,255,255,0.55)"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Schedule a Tour
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </PulsatingButton>
          </div>
          <a
            href="tel:+19299254152"
            aria-label="Call Sunshine's Learning Laboratory at (929) 925-4152"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-5 font-display text-lg font-extrabold text-[#1F2A44] shadow-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
            (929) 925-4152
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href="#location"
            className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 border-white/40 bg-white/30 px-5 py-4 font-display text-base font-bold text-[#1F2A44] backdrop-blur transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Jamaica Queens, 11434
          </a>
          <a
            href="mailto:sunshineslearninglaboratoryinc@gmail.com"
            className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 border-white/40 bg-white/30 px-5 py-4 font-display text-base font-bold text-[#1F2A44] backdrop-blur transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            sunshineslearninglaboratoryinc@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
