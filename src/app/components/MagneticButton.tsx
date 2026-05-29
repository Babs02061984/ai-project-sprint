"use client";

import { useRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import gsap from "gsap";

/**
 * Reusable pill button with two GSAP effects:
 *
 * 1. MAGNETIC — follows the cursor on mousemove, elastic snap-back on leave.
 *
 * 2. WAVE FILL — a white fill slides in from the side the cursor entered and out
 *    from the side it left.  The "inverted" black text is clipped via clip-path
 *    to exactly the fill's visible area, so the colour switch travels through
 *    each letter like a wave rather than crossfading all at once.
 */
export default function MagneticButton({
  children,
  className = "",
  style,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const btnRef       = useRef<HTMLButtonElement>(null);
  const fillRef      = useRef<HTMLSpanElement>(null);
  const invertRef    = useRef<HTMLSpanElement>(null);
  const savedRect    = useRef<DOMRect | null>(null);   // rect captured before magnetic moves it
  const waveTl       = useRef<gsap.core.Timeline | null>(null);

  /* ── entry ──────────────────────────────────────────────────────────── */
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !fillRef.current || !invertRef.current) return;

    // Snapshot rect before any magnetic transform so the center stays stable
    savedRect.current = btnRef.current.getBoundingClientRect();
    const rect      = savedRect.current;
    const fromLeft  = e.clientX - rect.left < rect.width / 2;

    waveTl.current?.kill();
    const tl = gsap.timeline();

    if (fromLeft) {
      tl.set(fillRef.current,   { x: "-101%" });
      tl.set(invertRef.current, { clipPath: "inset(0 100% 0 0%)" });
      tl.to(fillRef.current,   { x: "0%",                    duration: 0.5, ease: "power3.out" }, 0);
      tl.to(invertRef.current, { clipPath: "inset(0 0% 0 0%)", duration: 0.5, ease: "power3.out" }, 0);
    } else {
      tl.set(fillRef.current,   { x: "101%" });
      tl.set(invertRef.current, { clipPath: "inset(0 0% 0 100%)" });
      tl.to(fillRef.current,   { x: "0%",                      duration: 0.5, ease: "power3.out" }, 0);
      tl.to(invertRef.current, { clipPath: "inset(0 0% 0 0%)",  duration: 0.5, ease: "power3.out" }, 0);
    }

    waveTl.current = tl;
  };

  /* ── magnetic tracking ───────────────────────────────────────────────── */
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = savedRect.current;
    if (!rect || !btnRef.current) return;

    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;

    gsap.to(btnRef.current, {
      x: (e.clientX - cx) * 0.38,
      y: (e.clientY - cy) * 0.38,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  /* ── leave ───────────────────────────────────────────────────────────── */
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !fillRef.current || !invertRef.current) return;

    const rect      = savedRect.current ?? btnRef.current.getBoundingClientRect();
    const exitRight = e.clientX - rect.left > rect.width / 2;

    waveTl.current?.kill();
    const tl = gsap.timeline();

    if (!exitRight) {
      // exit left — fill slides out left, clip shrinks right → left
      tl.to(fillRef.current,   { x: "-101%",                   duration: 0.45, ease: "power3.in" }, 0);
      tl.to(invertRef.current, { clipPath: "inset(0 100% 0 0%)", duration: 0.45, ease: "power3.in" }, 0);
    } else {
      // exit right — fill slides out right, clip shrinks left → right
      tl.to(fillRef.current,   { x: "101%",                     duration: 0.45, ease: "power3.in" }, 0);
      tl.to(invertRef.current, { clipPath: "inset(0 0% 0 100%)", duration: 0.45, ease: "power3.in" }, 0);
    }

    waveTl.current = tl;

    // Magnetic snap-back with elastic overshoot
    gsap.to(btnRef.current, {
      x: 0, y: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    <button
      ref={btnRef}
      type={type}
      className={`relative overflow-hidden rounded-full text-sm font-medium px-4 py-3 tracking-[-0.04em] w-fit ${className}`}
      style={{
        fontFamily: "var(--font-inter)",
        backgroundColor: "#000",
        border: "1.5px solid #000",
        cursor: "pointer",
        willChange: "transform",
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* ① White fill that sweeps across */}
      <span
        ref={fillRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fff",
          borderRadius: "inherit",
          transform: "translateX(-101%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ② Default white text (visible on black bg) */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>

      {/* ③ Black text clipped to exactly the fill's area — creates the wave */}
      <span
        ref={invertRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          clipPath: "inset(0 100% 0 0%)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          fontSize: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
          fontFamily: "inherit",
        }}
      >
        {children}
      </span>
    </button>
  );
}
