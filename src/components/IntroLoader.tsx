"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SunSpinner } from "@/components/ui/sun-spinner";
import { X } from "lucide-react";

const STORAGE_KEY = "sunshine-intro-seen";

interface IntroLoaderProps {
  videoSrc?: string;
  /** safety net so the loader never blocks the page forever */
  maxDurationMs?: number;
}

export function IntroLoader({
  videoSrc = "/introvideo.mp4",
  maxDurationMs = 6500,
}: IntroLoaderProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Decide synchronously after mount whether to show. We defer the
  // setState calls into a microtask so the effect body itself stays free
  // of synchronous state updates (React 19 preferred pattern).
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    const decide = () => {
      if (cancelled) return;
      try {
        const seen = window.sessionStorage.getItem(STORAGE_KEY);
        const prefersReduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (!seen && !prefersReduce) {
          setShouldRender(true);
          setVisible(true);
        }
      } catch {
        setShouldRender(true);
        setVisible(true);
      }
    };
    queueMicrotask(decide);
    return () => {
      cancelled = true;
    };
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore quota/privacy errors
    }
    setVisible(false);
  }, []);

  // Hard cap on how long the loader sticks around.
  useEffect(() => {
    if (!shouldRender) return;
    const timer = window.setTimeout(dismiss, maxDurationMs);
    return () => window.clearTimeout(timer);
  }, [shouldRender, maxDurationMs, dismiss]);

  // Allow ESC to skip.
  useEffect(() => {
    if (!shouldRender) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shouldRender, dismiss]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence
      onExitComplete={() => setShouldRender(false)}
    >
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_#FFE08A_0%,_#FFC233_45%,_#FF8A2B_100%)] text-primary-foreground"
          aria-modal="true"
          role="dialog"
          aria-label="Welcome to Sunshine's Learning Laboratory"
        >
          {/* video */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onEnded={dismiss}
            onError={dismiss}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* sun spinner while video buffers */}
          {!videoReady && (
            <div className="relative z-10 flex flex-col items-center gap-6">
              <SunSpinner size={120} />
              <p className="font-heading text-2xl font-bold drop-shadow-sm">
                Warming up the sunshine…
              </p>
            </div>
          )}

          {/* skip button */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-bold text-[#1F2A44] shadow-lg backdrop-blur-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
            aria-label="Skip intro"
          >
            Skip intro
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
