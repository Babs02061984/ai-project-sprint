"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

// Desktop logo assets
const logoLukas = "/Frame.svg";
const logoMarko = "/Frame_2.svg";
const logoSarah = "/Frame_3.svg";
const logoSofia = "/Frame_4.svg";

// Mobile logo assets
const logoMarkoMobile = "/Frame_2.svg";
const logoSofiaMobile = "/Frame_4.svg";

// Mouse parallax depth per card: [Marko, Lukas, Sarah, Sofia]
// Higher = closer to viewer = moves more
const DEPTHS = [0.038, 0.022, 0.048, 0.028];

// Ambient float: [yOffset px, duration s, delay s] per card
const FLOATS: [number, number, number][] = [
  [14, 3.4, 0.0],
  [10, 2.9, 1.2],
  [18, 3.8, 0.6],
  [12, 2.6, 2.0],
];

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  name,
  rotate,
  width = 353,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  rotate: number;
  width?: number | string;
}) {
  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        width,
        background: "#f1f1f1",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <img
        src={logo}
        alt=""
        style={{ width: logoW, height: logoH, objectFit: "contain", display: "block" }}
      />
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: 1.3,
          letterSpacing: "-0.04em",
          color: "#1f1f1f",
        }}
      >
        {quote}
      </p>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 900,
          fontSize: "16px",
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          color: "#000",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </p>
    </div>
  );
}

const mobileCards = [
  {
    logo: logoMarkoMobile,
    logoW: 143,
    logoH: 19,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
  },
  {
    logo: logoLukas,
    logoW: 138,
    logoH: 19,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
  },
  {
    logo: logoSarah,
    logoW: 109,
    logoH: 31,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
  },
  {
    logo: logoSofiaMobile,
    logoW: 81,
    logoH: 36,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
  },
];

const CARD_GAP = 12;

function MobileSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82;
    const index = Math.round(el.scrollLeft / (cardWidth + CARD_GAP));
    setCurrent(Math.min(Math.max(index, 0), mobileCards.length - 1));
  };

  const scrollToCard = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82;
    el.scrollTo({ left: (cardWidth + CARD_GAP) * index, behavior: "smooth" });
    setCurrent(index);
  };

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          // @ts-ignore
          WebkitOverflowScrolling: "touch",
          paddingLeft: 16,
          paddingRight: 16,
          gap: CARD_GAP,
          msOverflowStyle: "none",
        }}
      >
        {mobileCards.map((card, i) => (
          <div
            key={i}
            style={{ scrollSnapAlign: "start", flexShrink: 0, width: "82vw" }}
          >
            <TestimonialCard {...card} rotate={0} width="100%" />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0 32px" }}>
        {mobileCards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === current ? "#000" : "#ccc",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Outer wrappers: receive mouse-parallax x/y
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  // Inner wrappers: receive ambient float y
  const floatRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  const quickXs = useRef<ReturnType<typeof gsap.quickTo>[]>([]);
  const quickYs = useRef<ReturnType<typeof gsap.quickTo>[]>([]);

  // Set up GSAP quickTo for mouse parallax + kick off ambient floats
  useEffect(() => {
    parallaxRefs.current.forEach((el, i) => {
      if (!el) return;
      quickXs.current[i] = gsap.quickTo(el, "x", { duration: 0.9, ease: "power2.out" });
      quickYs.current[i] = gsap.quickTo(el, "y", { duration: 0.9, ease: "power2.out" });
    });

    const floatTweens = floatRefs.current.map((el, i) => {
      if (!el) return null;
      const [yOffset, duration, delay] = FLOATS[i];
      return gsap.to(el, {
        y: yOffset,
        duration,
        delay,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => {
      floatTweens.forEach((t) => t?.kill());
    };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    DEPTHS.forEach((depth, i) => {
      quickXs.current[i]?.(dx * depth);
      quickYs.current[i]?.(dy * depth);
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    quickXs.current.forEach((fn) => fn?.(0));
    quickYs.current.forEach((fn) => fn?.(0));
  }, []);

  const setParallaxRef = (i: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[i] = el;
  };
  const setFloatRef = (i: number) => (el: HTMLDivElement | null) => {
    floatRefs.current[i] = el;
  };

  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden w-full bg-white" style={{ paddingTop: 64 }}>
        <div style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 8 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "clamp(52px, 16vw, 64px)",
              letterSpacing: "-0.07em",
              lineHeight: 1,
              textTransform: "capitalize",
              color: "#000",
            }}
          >
            Testimonials
          </h2>
        </div>
        <MobileSlider />
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="hidden md:flex w-full bg-white items-center justify-center relative"
        style={{ minHeight: "940px", padding: "100px 32px" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Marko — top left */}
        <div
          ref={setParallaxRef(0)}
          className="absolute"
          style={{ left: "7.1%", top: "130px", zIndex: 2 }}
        >
          <div ref={setFloatRef(0)}>
            <TestimonialCard
              logo={logoMarko}
              logoW={143}
              logoH={19}
              quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
              name="Marko Stojković"
              rotate={-6.85}
            />
          </div>
        </div>

        {/* Lukas — center right */}
        <div
          ref={setParallaxRef(1)}
          className="absolute"
          style={{ left: "47%", top: "255px", zIndex: 2 }}
        >
          <div ref={setFloatRef(1)}>
            <TestimonialCard
              logo={logoLukas}
              logoW={138}
              logoH={19}
              quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
              name="Lukas Weber"
              rotate={2.9}
            />
          </div>
        </div>

        {/* Sarah — bottom left */}
        <div
          ref={setParallaxRef(2)}
          className="absolute"
          style={{ left: "21%", top: "540px", zIndex: 2 }}
        >
          <div ref={setFloatRef(2)}>
            <TestimonialCard
              logo={logoSarah}
              logoW={109}
              logoH={31}
              quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
              name="Sarah Jenkins"
              rotate={2.23}
            />
          </div>
        </div>

        {/* Sofia — bottom right */}
        <div
          ref={setParallaxRef(3)}
          className="absolute"
          style={{ left: "68.5%", top: "530px", zIndex: 2 }}
        >
          <div ref={setFloatRef(3)}>
            <TestimonialCard
              logo={logoSofia}
              logoW={81}
              logoH={36}
              quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
              name="Sofia Martínez"
              rotate={-4.15}
            />
          </div>
        </div>

        {/* Heading — behind cards */}
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontSize: "clamp(120px, 13.75vw, 198px)",
            letterSpacing: "-0.07em",
            lineHeight: 1,
            textTransform: "capitalize",
            color: "#000",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Testimonials
        </h2>
      </section>
    </>
  );
}
