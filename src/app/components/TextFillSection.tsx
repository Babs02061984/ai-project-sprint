"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = ["Beautiful", "Digital", "Experiences"];

// Padding must be identical on both layers so the text stacks perfectly.
const PY = "clamp(5rem, 10vw, 10rem)";
const PX = "clamp(1rem, 2.222vw, 2rem)"; // matches site's px-4 md:px-8 intent

export default function TextFillSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const filledRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        filledRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const shared: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
    fontSize: "clamp(52px, 9.5vw, 136px)",
    letterSpacing: "-0.06em",
    lineHeight: 0.92,
    textTransform: "uppercase",
    margin: 0,
  };

  const sectionPadding: React.CSSProperties = {
    paddingTop: PY,
    paddingBottom: PY,
    paddingLeft: PX,
    paddingRight: PX,
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
      style={sectionPadding}
    >
      {/* Ghost/outline layer — always visible, sets the section height */}
      <div aria-hidden="true">
        {lines.map((line) => (
          <p
            key={line}
            style={{
              ...shared,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.18)",
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Filled layer — clip-path is scrubbed left→right by scroll */}
      <div
        ref={filledRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          ...sectionPadding,
          clipPath: "inset(0 100% 0 0)",
          pointerEvents: "none",
        }}
      >
        {lines.map((line) => (
          <p key={line} style={{ ...shared, color: "#fff" }}>
            {line}
          </p>
        ))}
      </div>

      {/* Screen-reader accessible copy */}
      <p className="sr-only">{lines.join(" ")}</p>
    </section>
  );
}
