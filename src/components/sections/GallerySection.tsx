"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { Camera } from "lucide-react";

const GALLERY_TOP = [
  {
    src: "/flyer.jpg",
    alt: "Mother's Day brunch celebration at Sunshine's Learning Laboratory",
    accent: "bg-[var(--sunshine-yellow)]",
    rotate: -2,
  },
  {
    src: "/icons.jpg",
    alt: "A bright classroom interior at Sunshine's Learning Laboratory",
    accent: "bg-[var(--sunshine-blue)]",
    rotate: 1,
  },
  {
    src: "/SS1.png",
    alt: "Kids exploring in the learning lab",
    accent: "bg-[var(--sunshine-magenta)]",
    rotate: -1,
  },
  {
    src: "/SS2.png",
    alt: "Toddlers playing during free-choice time",
    accent: "bg-[var(--sunshine-green)]",
    rotate: 2,
  },
];

const GALLERY_BOTTOM = [
  {
    src: "/SS3.png",
    alt: "Preschoolers in a Spanish immersion lesson",
    accent: "bg-[var(--sunshine-orange)]",
    rotate: 2,
  },
  {
    src: "/SS4.png",
    alt: "School-age kids during STEM lab time",
    accent: "bg-[var(--sunshine-purple)]",
    rotate: -2,
  },
  {
    src: "/SUNSHINELG.png",
    alt: "Our sunshine brand mark",
    accent: "bg-[var(--sunshine-yellow)]",
    rotate: 1,
  },
  {
    src: "/icons.jpg",
    alt: "A cozy reading corner inside the classroom",
    accent: "bg-[var(--sunshine-sky)]",
    rotate: -1,
  },
];

interface Photo {
  src: string;
  alt: string;
  accent: string;
  rotate: number;
}

function PolaroidPhoto({ src, alt, accent, rotate }: Photo) {
  return (
    <figure
      className="mx-3 inline-flex w-[260px] shrink-0 flex-col rounded-3xl bg-white p-3 shadow-xl ring-1 ring-foreground/5 transition-transform hover:scale-[1.03] sm:w-[300px]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${accent}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 60vw, 300px"
          className="object-cover mix-blend-multiply"
        />
      </div>
      <figcaption className="mt-3 px-2 pb-1 font-display text-sm font-bold text-foreground/80">
        {alt}
      </figcaption>
    </figure>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative w-full overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(91,192,248,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(255,194,51,0.18),transparent_60%)]" />

      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--sunshine-blue)]/30 bg-white px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-[var(--sunshine-blue)] shadow-sm"
        >
          <Camera className="h-4 w-4" aria-hidden="true" />
          A peek inside
        </motion.div>
        <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Every day is a little <span className="wavy-underline-pink">adventure</span>.
        </h2>
        <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl text-pretty">
          From Mother&rsquo;s Day brunches to lab experiments — here&rsquo;s what
          a week at Sunshine&rsquo;s looks like.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:48s] py-3">
        {GALLERY_TOP.map((p) => (
          <PolaroidPhoto key={`top-${p.src}-${p.alt}`} {...p} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:42s] py-3">
        {GALLERY_BOTTOM.map((p) => (
          <PolaroidPhoto key={`bot-${p.src}-${p.alt}`} {...p} />
        ))}
      </Marquee>
    </section>
  );
}
