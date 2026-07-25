"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";
import { GoogleStars } from "./MedicalIllustrations";

const VISIBLE = 3;
const INTERVAL_MS = 7000;

/**
 * Auto-rotating testimonial carousel. Cycles through the review pool in
 * groups, pauses on hover, and respects prefers-reduced-motion.
 */
export default function TestimonialCarousel() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setStart((s) => (s + VISIBLE) % testimonials.length);
        setFading(false);
      }, 400);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused]);

  const visible = Array.from(
    { length: Math.min(VISIBLE, testimonials.length) },
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  const pages = Math.ceil(testimonials.length / VISIBLE);
  const activePage = Math.floor(start / VISIBLE) % pages;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`grid gap-5 text-left transition-opacity duration-500 sm:grid-cols-3 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
        aria-live="polite"
      >
        {visible.map((t) => (
          <figure
            key={t.quote}
            className="flex flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <GoogleStars />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-800">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs text-brand-500">
              <span className="font-semibold text-brand-700">{t.name}</span> ·{" "}
              {t.procedure}
              <br />
              {t.source}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2">
        {Array.from({ length: pages }, (_, p) => (
          <button
            key={p}
            aria-label={`Show reviews page ${p + 1}`}
            onClick={() => {
              setStart((p * VISIBLE) % testimonials.length);
              setPaused(true);
            }}
            className={`h-2.5 w-2.5 rounded-full transition ${
              p === activePage ? "bg-brand-600" : "bg-brand-200 hover:bg-brand-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
