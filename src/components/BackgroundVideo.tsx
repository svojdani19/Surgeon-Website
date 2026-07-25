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
