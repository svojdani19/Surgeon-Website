"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping background video (Pexels-licensed footage).
 * - eager: loads immediately (hero); otherwise lazy-loads via
 *   IntersectionObserver so below-the-fold sections cost nothing up front.
 * - Fades in once playable so the overlay/text never wait on it.
 * - Hidden for prefers-reduced-motion users.
 */
export default function BackgroundVideo({
  src,
  eager = false,
}: {
  src: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(eager);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  // canplay can fire BEFORE hydration when the video is cached/fast (the
  // eager hero path), so the onCanPlay prop alone would never flip `ready`
  // and the video would stay invisible. Check readyState directly, retry
  // play() for browsers that block pre-hydration autoplay, and poll briefly
  // as a backstop.
  useEffect(() => {
    if (!visible) return;
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.readyState >= 3) setReady(true);
      if (el.paused) el.play().catch(() => {});
    };
    check();
    const t = setInterval(check, 500);
    const stop = setTimeout(() => clearInterval(t), 8000);
    return () => {
      clearInterval(t);
      clearTimeout(stop);
    };
  }, [visible]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      src={visible ? src : undefined}
      onCanPlay={() => setReady(true)}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:hidden ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
