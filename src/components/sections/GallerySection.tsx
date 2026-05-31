"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { Camera } from "lucide-react";

const GALLERY_TOP = [
  {
    src: "/motherday1.jpeg",
    alt: "Mother's Day brunch — table set with treats, balloons & gift bags",
    caption: "Mother's Day brunch '26",
    accent: "bg-[var(--sunshine-magenta)]",
    rotate: -3,
    photo: true,
    momTag: true,
  },
  {
    src: "/motherday2.jpeg",
    alt: "Moms celebrating Mother's Day at Sunshine's",
    caption: "Mom & me morning",
    accent: "bg-[var(--sunshine-orange)]",
    rotate: 2,
    photo: true,
    momTag: true,
  },
  {
    src: "/motherday3.png",
    alt: "Mother's Day celebration",
    caption: "Mother's Day love",
    accent: "bg-[var(--sunshine-yellow)]",
    rotate: -1,
    photo: true,
    momTag: true,
  },
  {
    src: "/mothersday6.png",
    alt: "Mother's Day celebration",
    caption: "Celebrating Moms",
    accent: "bg-[var(--sunshine-magenta)]",
    rotate: 1,
    photo: true,
    momTag: true,
  },
  {
    src: "/mothersday4.png",
    alt: "Mother's Day celebration",
    caption: "Moms at Sunshine's",
    accent: "bg-[var(--sunshine-green)]",
    rotate: -2,
    photo: true,
    momTag: true,
  },
  {
    src: "/storycircle2.png",
    alt: "Children gathered for story circle time",
    caption: "Story circle magic",
    accent: "bg-[var(--sunshine-yellow)]",
    rotate: -2,
    photo: true,
    momTag: false,
  },
  {
    src: "/gallery1.png",
    alt: "A bright classroom interior at Sunshine's Learning Laboratory",
    caption: "Creative play",
    accent: "bg-[var(--sunshine-blue)]",
    rotate: 1,
    photo: true,
    momTag: false,
  },
  {
    src: "/Gallery3.png",
    alt: "Students engaging in an activity",
    caption: "Learning together",
    accent: "bg-[var(--sunshine-green)]",
    rotate: -1,
    photo: true,
    momTag: false,
  },
];

const GALLERY_BOTTOM = [
  {
    src: "/labtime2.png",
    alt: "Kids exploring in the learning lab",
    caption: "Lab day discoveries",
    accent: "bg-[var(--sunshine-magenta)]",
    rotate: -1,
    photo: true,
    momTag: false,
  },
  {
    src: "/labtime3.png",
    alt: "Toddlers playing during free-choice time",
    caption: "Science fun!",
    accent: "bg-[var(--sunshine-green)]",
    rotate: 2,
    photo: true,
    momTag: false,
  },
  {
    src: "/danceparty_real.png",
    alt: "Preschoolers in a dance party",
    caption: "Dance party!",
    accent: "bg-[var(--sunshine-orange)]",
    rotate: 2,
    photo: true,
    momTag: false,
  },
  {
    src: "/gallery5.png",
    alt: "School-age kids during STEM lab time",
    caption: "STEM lab time",
    accent: "bg-[var(--sunshine-purple)]",
    rotate: -2,
    photo: true,
    momTag: false,
  },
];

interface Photo {
  src: string;
  alt: string;
  caption: string;
  accent: string;
  rotate: number;
  photo: boolean;
  momTag: boolean;
}

function PolaroidPhoto({ src, alt, caption, accent, rotate, photo, momTag }: Photo) {
  return (
    <figure
      className="group mx-3 inline-flex w-[260px] shrink-0 flex-col rounded-3xl bg-white p-3 shadow-xl ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:!scale-[1.05] hover:!rotate-0 hover:shadow-2xl sm:w-[300px] dark:bg-slate-900 dark:ring-white/10"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${photo ? "bg-slate-100 dark:bg-slate-800" : accent}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 60vw, 300px"
          className={photo ? "object-cover" : "object-cover mix-blend-multiply"}
        />
        {momTag && (
          <span
            aria-hidden="true"
            className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[var(--sunshine-magenta)] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-white shadow"
          >
            ♥ Mom
          </span>
        )}
      </div>
      <figcaption className="mt-3 px-2 pb-1 font-display text-sm font-bold text-foreground/80 dark:text-slate-200">
        {caption}
      </figcaption>
    </figure>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(91,192,248,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(255,194,51,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.10),transparent_60%)]" />

      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--sunshine-blue)]/30 bg-white px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-[var(--sunshine-blue)] shadow-sm dark:border-sky-300/30 dark:bg-slate-900 dark:text-sky-300"
        >
          <Camera className="h-4 w-4" aria-hidden="true" />
          A peek inside
        </motion.div>
        <h2 className="mt-4 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white">
          Every day is a little <span className="wavy-underline-pink">adventure</span>.
        </h2>
        <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
          From Mother&rsquo;s Day brunches to lab experiments — here&rsquo;s what
          a week at Sunshine&rsquo;s looks like.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:60s] py-3">
        {GALLERY_TOP.map((p) => (
          <PolaroidPhoto key={`top-${p.src}-${p.alt}`} {...p} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:55s] py-3">
        {GALLERY_BOTTOM.map((p) => (
          <PolaroidPhoto key={`bot-${p.src}-${p.alt}`} {...p} />
        ))}
      </Marquee>
    </section>
  );
}
