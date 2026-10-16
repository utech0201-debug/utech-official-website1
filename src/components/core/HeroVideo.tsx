"use client";
import { useEffect, useState } from "react";

// Plays /videos/hero.mp4 (and optional hero.webm) behind the hero text.
// Skipped for people who prefer reduced motion and on small phones, to save data.
export default function HeroVideo() {
  const [show, setShow] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 761px)").matches;
    setShow(!calm && wide);
  }, []);

  if (!show || failed) return null;
  return (
    <video
      className="herovideo"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero.jpg"
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      <source src="/videos/hero.webm" type="video/webm" onError={() => undefined} />
      <source src="/videos/hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
    </video>
  );
}
