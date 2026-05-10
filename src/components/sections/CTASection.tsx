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
      className="relative isolate w-full overflow-hidden py-24 sm:py-32"
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

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 14, stiffness: 90 }}
          className="relative w-full max-w-5xl rounded-[36px] border-[6px] border-white/80 bg-white/20 p-2 shadow-2xl backdrop-blur"
        >
          <Image
            src="/CTABANNER.png"
            alt="Sunshine's Learning Laboratory — NYS Licensed, Ages 6 weeks to 12 years, (718) 404-6909"
            width={1600}
            height={600}
            sizes="(max-width: 1024px) 95vw, 1100px"
            className="block w-full rounded-[28px] object-cover"
            priority={false}
          />
        </motion.div>

        <h2 className="mt-12 max-w-3xl font-heading text-4xl font-black leading-tight text-[#1F2A44] sm:text-5xl lg:text-6xl text-balance">
          Your child&rsquo;s next big adventure{" "}
          <span className="wavy-underline">starts here</span>.
        </h2>
        <p className="mt-4 max-w-2xl font-display text-lg font-medium text-[#1F2A44]/85 sm:text-xl text-pretty">
          Spots are limited! Book a tour, meet the teachers, and watch your kid
          fall in love with learning.
        </p>

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
            href="tel:7184046909"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-5 font-display text-lg font-extrabold text-[#1F2A44] shadow-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)]" aria-hidden="true" />
            (718) 404-6909
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href="https://maps.google.com/?q=159-14+134th+Avenue,+1st+Floor,+Jamaica,+NY+11434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 border-white/40 bg-white/30 px-5 py-4 font-display text-base font-bold text-[#1F2A44] backdrop-blur transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            159-14 134th Ave, Jamaica, NY 11434
          </a>
          <a
            href="mailto:hello@sunshineslearninglab.com"
            className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 border-white/40 bg-white/30 px-5 py-4 font-display text-base font-bold text-[#1F2A44] backdrop-blur transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            hello@sunshineslearninglab.com
          </a>
        </div>
      </div>
    </section>
  );
}
