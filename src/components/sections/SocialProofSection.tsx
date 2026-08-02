"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Star, Send, MessageSquarePlus, X, CheckCircle2 } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

/* ------------------------------------------------------------------ */
/*  Static seed testimonials                                           */
/* ------------------------------------------------------------------ */
const SEED_TESTIMONIALS = [
  {
    name: "Sarah J.",
    relation: "Mom of Olivia (4)",
    body: "The Spanish immersion is incredible — Olivia comes home humming songs in Spanish! The teachers feel like family.",
    bg: "bg-[var(--sunshine-yellow)]/40",
    rotate: -2,
    stars: 5,
  },
  {
    name: "Michael C.",
    relation: "Dad of Lucas (2)",
    body: "Absolute peace of mind. The safety and warmth at Sunshine's is unmatched, and Lucas loves the STEM lab days.",
    bg: "bg-[var(--sunshine-sky)]/40",
    rotate: 2,
    stars: 5,
  },
  {
    name: "Elena R.",
    relation: "Mom of Mia (3)",
    body: "Small classes mean my daughter gets so much individualized attention. Mrs. Lisa is a treasure.",
    bg: "bg-[var(--sunshine-magenta)]/30",
    rotate: -1,
    stars: 5,
  },
  {
    name: "Jordan P.",
    relation: "Dad of twins (5)",
    body: "The Mother's Day brunch had us in tears. This place truly celebrates families, not just kids.",
    bg: "bg-[var(--sunshine-green)]/30",
    rotate: 1,
    stars: 5,
  },
  {
    name: "Tanya W.",
    relation: "Mom of Jayden (1)",
    body: "I was so nervous leaving my baby for the first time, but the staff made the transition seamless. Jayden lights up every morning at drop-off now.",
    bg: "bg-[var(--sunshine-orange)]/30",
    rotate: -1.5,
    stars: 5,
  },
  {
    name: "David L.",
    relation: "Dad of Ava (3)",
    body: "Ava's vocabulary has exploded since she started here. The curriculum is genuinely impressive — way beyond what I expected from a daycare.",
    bg: "bg-[var(--sunshine-sky)]/30",
    rotate: 1.5,
    stars: 5,
  },
  {
    name: "Keisha M.",
    relation: "Mom of Isaiah (6)",
    body: "The after-school program has been a lifesaver for our family. Isaiah gets his homework done, makes friends, and actually looks forward to going every day.",
    bg: "bg-[var(--sunshine-yellow)]/30",
    rotate: -2.5,
    stars: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Colors & rotations cycled for user-submitted reviews               */
/* ------------------------------------------------------------------ */
const USER_BG_POOL = [
  "bg-[var(--sunshine-yellow)]/30",
  "bg-[var(--sunshine-sky)]/30",
  "bg-[var(--sunshine-magenta)]/30",
  "bg-[var(--sunshine-green)]/30",
  "bg-[var(--sunshine-orange)]/30",
];
const USER_ROTATE_POOL = [-2, 1.5, -1, 2, -1.5, 1, -2.5];

interface UserReview {
  name: string;
  relation: string;
  body: string;
  stars: number;
  ts: number;
}

const LS_KEY = "sunshine_reviews";

function loadUserReviews(): UserReview[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as UserReview[]) : [];
  } catch {
    return [];
  }
}

function saveUserReviews(reviews: UserReview[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(reviews));
  } catch {
    /* quota exceeded — silent */
  }
}

/* ------------------------------------------------------------------ */
/*  Interactive star-rating picker                                     */
/* ------------------------------------------------------------------ */
function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= (hovered || value);
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={n === value}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(n)}
            className="group/star rounded-full p-0.5 transition-transform hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sunshine-orange)]/60"
          >
            <Star
              className={`h-7 w-7 transition-colors duration-150 ${
                filled
                  ? "fill-[var(--sunshine-orange)] text-[var(--sunshine-orange)] dark:fill-yellow-300 dark:text-yellow-300"
                  : "fill-transparent text-foreground/25 dark:text-white/25"
              }`}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Review form                                                        */
/* ------------------------------------------------------------------ */
function ReviewForm({
  onSubmit,
  onClose,
}: {
  onSubmit: (r: UserReview) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [body, setBody] = useState("");
  const [stars, setStars] = useState(5);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback(() => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please share your name.";
    if (!body.trim()) next.body = "Please write a short review.";
    if (stars === 0) next.stars = "Please select a rating.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, body, stars]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const review: UserReview = {
      name: name.trim(),
      relation: relation.trim(),
      body: body.trim(),
      stars,
      ts: Date.now(),
    };
    onSubmit(review);
    setSubmitted(true);
  };

  /* ---- success state ---- */
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sunshine-green)]/30">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </span>
        <h4 className="font-heading text-xl font-extrabold text-foreground dark:text-white">
          Thank you! 🎉
        </h4>
        <p className="max-w-xs font-display text-sm text-muted-foreground dark:text-slate-300">
          Your review has been added. We truly appreciate your kind words!
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 rounded-full bg-[var(--sunshine-yellow)] px-6 py-2.5 font-display text-sm font-extrabold text-foreground shadow transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--sunshine-yellow)]/40 dark:text-slate-900"
        >
          Done
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex items-start justify-between">
        <h4 className="font-heading text-xl font-extrabold text-foreground dark:text-white">
          Leave a review
        </h4>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close review form"
          className="rounded-full p-1.5 text-foreground/50 transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Stars */}
      <div>
        <label className="mb-1.5 block font-display text-xs font-extrabold uppercase tracking-wider text-foreground/70 dark:text-slate-300">
          Your rating
        </label>
        <StarRating value={stars} onChange={setStars} />
        {errors.stars && (
          <p className="mt-1 font-display text-xs font-bold text-red-500">{errors.stars}</p>
        )}
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="review-name"
          className="mb-1.5 block font-display text-xs font-extrabold uppercase tracking-wider text-foreground/70 dark:text-slate-300"
        >
          Your name <span className="text-red-400">*</span>
        </label>
        <input
          id="review-name"
          type="text"
          placeholder="e.g. Sarah J."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border-2 border-foreground/10 bg-white px-4 py-3 font-display text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-[var(--sunshine-blue)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-white/30 dark:focus:border-sky-400"
        />
        {errors.name && (
          <p className="mt-1 font-display text-xs font-bold text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Relation (optional) */}
      <div>
        <label
          htmlFor="review-relation"
          className="mb-1.5 block font-display text-xs font-extrabold uppercase tracking-wider text-foreground/70 dark:text-slate-300"
        >
          Relation <span className="text-foreground/40 dark:text-white/30">(optional)</span>
        </label>
        <input
          id="review-relation"
          type="text"
          placeholder="e.g. Mom of Olivia (4)"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          className="w-full rounded-2xl border-2 border-foreground/10 bg-white px-4 py-3 font-display text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-[var(--sunshine-blue)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-white/30 dark:focus:border-sky-400"
        />
      </div>

      {/* Review body */}
      <div>
        <label
          htmlFor="review-body"
          className="mb-1.5 block font-display text-xs font-extrabold uppercase tracking-wider text-foreground/70 dark:text-slate-300"
        >
          Your review <span className="text-red-400">*</span>
        </label>
        <textarea
          id="review-body"
          rows={3}
          placeholder="Tell us about your experience…"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full resize-none rounded-2xl border-2 border-foreground/10 bg-white px-4 py-3 font-display text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-[var(--sunshine-blue)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-white/30 dark:focus:border-sky-400"
        />
        {errors.body && (
          <p className="mt-1 font-display text-xs font-bold text-red-500">{errors.body}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--sunshine-orange)] to-[var(--sunshine-magenta)] px-6 py-3.5 font-display text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--sunshine-magenta)]/40"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Submit review
      </button>
    </form>
  );
}

/* ================================================================== */
/*  Main section                                                       */
/* ================================================================== */
export function SocialProofSection() {
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);
  const [formOpen, setFormOpen] = useState(false);

  /* hydrate from localStorage on mount */
  useEffect(() => {
    setUserReviews(loadUserReviews());
  }, []);

  const handleNewReview = (r: UserReview) => {
    const updated = [r, ...userReviews];
    setUserReviews(updated);
    saveUserReviews(updated);
  };

  /* merge seed + user reviews into renderable cards */
  const allCards = [
    ...userReviews.map((r, i) => ({
      name: r.name,
      relation: r.relation,
      body: r.body,
      stars: r.stars,
      bg: USER_BG_POOL[i % USER_BG_POOL.length],
      rotate: USER_ROTATE_POOL[i % USER_ROTATE_POOL.length],
      isUser: true,
    })),
    ...SEED_TESTIMONIALS.map((t) => ({ ...t, isUser: false })),
  ];

  return (
    <section id="testimonials" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,194,51,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(253,224,71,0.10),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-foreground shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
            <Heart className="h-4 w-4 text-[var(--sunshine-magenta)] dark:text-pink-400" aria-hidden="true" fill="currentColor" />
            Loved by parents
          </div>
          <h2 className="mt-4 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white">
            Hear it from the{" "}
            <span className="wavy-underline-pink">grown-ups</span>.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <AvatarCircles
              avatarUrls={[
                { imageUrl: "https://i.pravatar.cc/150?img=1", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=23", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=5", profileUrl: "#" },
                { imageUrl: "https://i.pravatar.cc/150?img=12", profileUrl: "#" },
              ]}
              numPeople={14 + userReviews.length}
            />
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--sunshine-orange)] text-[var(--sunshine-orange)] dark:fill-yellow-300 dark:text-yellow-300" aria-hidden="true" />
              ))}
              <span className="ml-2 font-display text-sm font-bold text-foreground dark:text-slate-200">
                5.0 from our community
              </span>
            </div>
          </div>
        </div>

        {/* ---- "Leave a Review" toggle + form ---- */}
        <div className="mx-auto mt-10 max-w-lg">
          <AnimatePresence mode="wait">
            {formOpen ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ type: "spring", damping: 20, stiffness: 120 }}
                className="rounded-[28px] border-4 border-white bg-white/90 p-6 shadow-2xl backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-slate-900/95"
              >
                <ReviewForm
                  onSubmit={handleNewReview}
                  onClose={() => setFormOpen(false)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <button
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[var(--sunshine-magenta)]/30 bg-white px-7 py-3.5 font-display text-sm font-extrabold text-foreground shadow-md transition-all hover:-translate-y-0.5 hover:border-[var(--sunshine-magenta)]/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--sunshine-magenta)]/30 dark:border-pink-400/30 dark:bg-slate-900 dark:text-white dark:hover:border-pink-400/60"
                >
                  <MessageSquarePlus className="h-5 w-5 text-[var(--sunshine-magenta)] transition-transform group-hover:scale-110 dark:text-pink-400" aria-hidden="true" />
                  Leave a Review
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ---- Review cards ---- */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allCards.map((t, i) => (
            <motion.figure
              key={t.isUser ? `user-${t.name}-${i}` : t.name}
              initial={{ opacity: 0, y: 30, rotate: t.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, type: "spring", damping: 14, stiffness: 90 }}
              whileHover={{ y: -4, rotate: 0 }}
              className={`group relative flex flex-col rounded-[28px] border-4 border-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-white/10 ${t.bg}`}
            >
              {/* Badge for user-submitted reviews */}
              {t.isUser && (
                <span className="absolute -top-2.5 right-4 z-10 rounded-full bg-gradient-to-r from-[var(--sunshine-orange)] to-[var(--sunshine-magenta)] px-3 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                  New
                </span>
              )}

              {/* Decorative quote mark */}
              <svg
                aria-hidden="true"
                viewBox="0 0 56 40"
                className="pointer-events-none absolute right-3 top-2 h-10 w-14 text-foreground/15 dark:text-white/15"
                fill="currentColor"
              >
                <path d="M14 0C6.3 0 0 6.3 0 14v8c0 9.9 8.1 18 18 18v-8c-5.5 0-10-4.5-10-10h6c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4H14zm28 0c-7.7 0-14 6.3-14 14v8c0 9.9 8.1 18 18 18v-8c-5.5 0-10-4.5-10-10h6c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4h0z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-4 border-white dark:border-white/10"
                style={{ background: "inherit" }}
              />

              {/* Star rating */}
              <div className="mb-2 flex items-center gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className={`h-3.5 w-3.5 ${
                      si < t.stars
                        ? "fill-[var(--sunshine-orange)] text-[var(--sunshine-orange)] dark:fill-yellow-300 dark:text-yellow-300"
                        : "fill-transparent text-foreground/20 dark:text-white/20"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="relative font-display text-base text-foreground/90 dark:text-slate-100">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading text-base font-extrabold text-foreground shadow dark:bg-slate-900 dark:text-white"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-heading text-base font-extrabold text-foreground dark:text-white">
                    {t.name}
                  </span>
                  {t.relation && (
                    <span className="font-display text-sm text-foreground/70 dark:text-slate-300">
                      {t.relation}
                    </span>
                  )}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
