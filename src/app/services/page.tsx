"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import HeroNav from "../components/HeroNav";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import MagneticButton from "../components/MagneticButton";

// ── shared tokens ────────────────────────────────────────────────────────────
const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
  textTransform: "uppercase",
};

const monoWhite: CSSProperties = { ...mono, color: "#fff" };

// ── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    num: "[ 01 ]",
    title: "Brand\nDiscovery",
    img: "/cream_on_palmtree_leef.png",
    summary:
      "We dive deep into who you are, who you're talking to, and what makes you different. The result: a brand that's unmistakably yours — built to last and designed to grow.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo design & visual identity",
      "Brand guidelines & systems",
      "Custom mascots & illustration",
    ],
  },
  {
    num: "[ 02 ]",
    title: "Web Design\n& Dev",
    img: "/dashboard_screenshot.png",
    summary:
      "Beautiful interfaces built to perform. From landing pages to full product design systems — pixel-perfect, fast by default, and engineered for conversion.",
    deliverables: [
      "UX / UI design",
      "Next.js & React development",
      "Design systems & components",
      "Landing pages & portfolios",
    ],
  },
  {
    num: "[ 03 ]",
    title: "Marketing",
    img: "/surfboard.png",
    summary:
      "Creative that converts. We design campaigns, content, and collateral that move people — from scroll to decision. Strategy first, execution always.",
    deliverables: [
      "Campaign strategy & direction",
      "Social media content & templates",
      "Print & digital collateral",
      "Motion graphics & animation",
    ],
  },
  {
    num: "[ 04 ]",
    title: "Photography",
    img: "/signs_hanging_in_the_hall.png",
    summary:
      "Imagery with a point of view. Editorial, product, and brand photography that gives your visuals a distinct voice and stops the scroll.",
    deliverables: [
      "Editorial photography",
      "Product & still life",
      "Brand storytelling shoots",
      "Location & lifestyle",
    ],
  },
];

// ── Page Hero ─────────────────────────────────────────────────────────────────
function PageHero() {
  const bigStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    fontSize: "clamp(52px, 9.167vw, 132px)",
    letterSpacing: "-0.08em",
    lineHeight: 0.88,
    textTransform: "uppercase",
    color: "#000",
  };

  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 pt-32 pb-12 flex flex-col gap-6">
        <p style={mono}>[Services]</p>
        <h1 style={{ ...bigStyle, fontSize: "clamp(52px, 14vw, 80px)" }}>
          What<br />we offer.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            lineHeight: 1.5,
            letterSpacing: "-0.03em",
            color: "#1f1f1f",
          }}
        >
          Four focused disciplines. One creative partner who sees them as one
          connected system.
        </p>
        <div className="flex gap-8 pt-6 border-t border-[#1f1f1f]">
          {[["4", "Disciplines"], ["8+", "Years"], ["100+", "Projects"]].map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "36px",
                  letterSpacing: "-0.07em",
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                {n}
              </span>
              <span style={mono}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 pt-[160px] pb-[100px] flex-col gap-0">
        <div className="flex items-end justify-between w-full mb-6">
          <p style={mono}>[Services]</p>
          <p style={mono}>[001]</p>
        </div>
        <div className="w-full border-t border-[#1f1f1f] mb-12" />

        {/* Staggered title */}
        <div>
          <h1 style={bigStyle}>What we</h1>
        </div>
        <div style={{ paddingLeft: "clamp(60px, 14.86vw, 214px)" }}>
          <h1 style={bigStyle}>offer.</h1>
        </div>

        {/* Tagline + stats */}
        <div className="flex items-end justify-between w-full mt-16">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              lineHeight: 1.6,
              letterSpacing: "-0.03em",
              color: "#1f1f1f",
              maxWidth: "480px",
            }}
          >
            Four focused disciplines. One creative partner who sees them as one
            connected system — strategy, design, development, and content working
            together.
          </p>
          <div className="flex gap-14 items-end">
            {[
              ["4",    "Disciplines"],
              ["8+",   "Years\nexperience"],
              ["100+", "Projects\ndelivered"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col gap-2 items-end text-right">
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "clamp(44px, 4.167vw, 60px)",
                    letterSpacing: "-0.07em",
                    color: "#000",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>
                <span style={{ ...mono, whiteSpace: "pre-line", textAlign: "right" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Deliverable tag ───────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1,
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "2px",
        padding: "6px 10px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

// ── Services Detail ───────────────────────────────────────────────────────────
function ServicesDetail() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      data-nav-dark
      className="w-full bg-black px-4 py-12 md:px-8 md:py-20 flex flex-col gap-8 md:gap-12"
    >
      {/* Section label + counter */}
      <div className="flex items-center justify-between w-full">
        <p style={monoWhite}>[ Services ]</p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "clamp(32px, 6.667vw, 96px)",
            letterSpacing: "-0.08em",
            lineHeight: 1,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          [4]
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col w-full">
        {services.map(({ num, title, img, summary, deliverables }, i) => {
          const isHovered = hovered === i;
          const isDimmed  = hovered !== null && !isHovered;

          return (
            <div
              key={num}
              className="flex flex-col gap-[9px] w-full cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: isDimmed ? 0.25 : 1,
                transition: "opacity 0.4s ease",
                paddingBottom: "48px",
                marginBottom: i < services.length - 1 ? "0" : "0",
              }}
            >
              <p style={monoWhite}>{num}</p>

              {/* Divider with white sweep */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "1px", background: "rgba(255,255,255,0.2)" }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#fff",
                    transform: isHovered ? "translateX(0%)" : "translateX(-101%)",
                    transition: isHovered
                      ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
                      : "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </div>

              {/* ── MOBILE ─────────────────────────────────────── */}
              <div className="md:hidden flex flex-col gap-5 pt-3">
                <h2
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 10vw, 52px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.0,
                    textTransform: "uppercase",
                    color: "#fff",
                    whiteSpace: "pre-line",
                  }}
                >
                  {title}
                </h2>
                <div
                  className="overflow-hidden"
                  style={{ width: "100%", height: "220px" }}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.03em",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {deliverables.map((d) => (
                    <Tag key={d} label={d} />
                  ))}
                </div>
              </div>

              {/* ── DESKTOP ────────────────────────────────────── */}
              <div
                className="hidden md:flex md:items-start md:justify-between gap-12 pt-4"
                style={{
                  transform: isHovered ? "translateX(8px)" : "translateX(0px)",
                  transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Left: title + summary + tags */}
                <div className="flex flex-col gap-6 flex-1">
                  <h2
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      fontSize: "clamp(48px, 5.556vw, 80px)",
                      letterSpacing: isHovered ? "-0.02em" : "-0.04em",
                      lineHeight: 0.95,
                      textTransform: "uppercase",
                      color: "#fff",
                      whiteSpace: "pre-line",
                      transition: "letter-spacing 0.35s ease",
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "16px",
                      lineHeight: 1.6,
                      letterSpacing: "-0.03em",
                      color: "rgba(255,255,255,0.7)",
                      maxWidth: "480px",
                    }}
                  >
                    {summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {deliverables.map((d) => (
                      <Tag key={d} label={d} />
                    ))}
                  </div>
                </div>

                {/* Right: image */}
                <div
                  className="shrink-0 overflow-hidden"
                  style={{ width: "280px", height: "360px" }}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      filter: isHovered ? "brightness(1.08)" : "brightness(1)",
                      transition:
                        "transform 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.5s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
function CtaSection() {
  const bigStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    fontSize: "clamp(40px, 6.667vw, 96px)",
    letterSpacing: "-0.08em",
    lineHeight: 0.88,
    textTransform: "uppercase",
    color: "#000",
  };

  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 py-16 flex flex-col gap-8">
        <p style={mono}>[ Start a project ]</p>
        <div>
          <p style={{ ...bigStyle, fontSize: "clamp(40px, 11vw, 60px)" }}>
            Let&apos;s make
          </p>
          <p style={{ ...bigStyle, fontSize: "clamp(40px, 11vw, 60px)" }}>
            something{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              great.
            </span>
          </p>
        </div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            lineHeight: 1.5,
            letterSpacing: "-0.03em",
            color: "#1f1f1f",
          }}
        >
          Ready to start? Drop me a message and let&apos;s talk about what you
          need.
        </p>
        <MagneticButton>Let&apos;s talk</MagneticButton>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 py-[120px] items-end justify-between gap-16">
        <div className="flex flex-col gap-4">
          <p style={mono}>[ Start a project ]</p>
          <div>
            <p style={bigStyle}>Let&apos;s make</p>
            <p style={bigStyle}>
              something{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                great.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start shrink-0" style={{ maxWidth: "360px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              lineHeight: 1.6,
              letterSpacing: "-0.03em",
              color: "#1f1f1f",
            }}
          >
            Ready to start? Drop me a message and let&apos;s talk about what
            you need.
          </p>
          <MagneticButton>Let&apos;s talk</MagneticButton>
        </div>
      </section>
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
        <HeroNav />
      </header>
      <PageHero />
      <ServicesDetail />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
