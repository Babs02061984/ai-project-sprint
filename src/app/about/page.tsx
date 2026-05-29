"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import HeroNav from "../components/HeroNav";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FullBleedPhoto from "../components/FullBleedPhoto";
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

  const tagStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
    color: "#1f1f1f",
  };

  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 pt-32 pb-12 flex flex-col gap-6">
        <p style={mono}>[About]</p>
        <h1 style={{ ...bigStyle, fontSize: "clamp(52px, 14vw, 80px)" }}>
          Behind<br />the work.
        </h1>
        <p style={tagStyle}>
          A creative director &amp; photographer with 8+ years turning complex ideas
          into beautiful, functional brands and digital experiences.
        </p>
        <div className="flex gap-8 pt-6 border-t border-[#1f1f1f]">
          {[["8+", "Years"], ["100+", "Projects"], ["4", "Countries"]].map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "36px", letterSpacing: "-0.07em", color: "#000", lineHeight: 1 }}>{n}</span>
              <span style={mono}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 pt-[160px] pb-[100px] flex-col gap-0">
        <div className="flex items-end justify-between w-full mb-6">
          <p style={mono}>[About]</p>
          <p style={mono}>[001]</p>
        </div>
        <div className="w-full border-t border-[#1f1f1f] mb-12" />

        {/* Staggered title lines — mirrors IntroSection */}
        <div className="flex items-start gap-3">
          <h1 style={bigStyle}>Behind</h1>
        </div>
        <div style={{ paddingLeft: "clamp(60px, 14.86vw, 214px)" }}>
          <h1 style={bigStyle}>the work.</h1>
        </div>

        {/* Tagline + stats row */}
        <div className="flex items-end justify-between w-full mt-16">
          <p style={{ ...tagStyle, fontSize: "18px", maxWidth: "460px", lineHeight: 1.6 }}>
            A creative director &amp; photographer with 8+ years turning
            complex ideas into beautiful, functional brands and digital
            experiences.
          </p>
          <div className="flex gap-14 items-end">
            {[
              ["8+",   "Years in\nindustry"],
              ["100+", "Projects\ndelivered"],
              ["4",    "Countries\nworked in"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col gap-2 items-end text-right">
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(44px, 4.167vw, 60px)", letterSpacing: "-0.07em", color: "#000", lineHeight: 1 }}>{n}</span>
                <span style={{ ...mono, whiteSpace: "pre-line", textAlign: "right" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Biography ────────────────────────────────────────────────────────────────
function BiographySection() {
  const headingStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "-0.06em",
    color: "#000",
  };

  const bodyStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    lineHeight: 1.6,
    letterSpacing: "-0.03em",
    color: "#1f1f1f",
  };

  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 pb-16 flex flex-col gap-8">
        <div className="w-full overflow-hidden" style={{ height: "420px" }}>
          <img
            src="/dark_Man_face.png"
            alt="Portrait"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <p style={mono}>[Biography]</p>
        <h2 style={{ ...headingStyle, fontSize: "clamp(28px, 7vw, 40px)", lineHeight: 1.1 }}>
          Born &amp; raised on<br />the south side<br />of Chicago.
        </h2>
        <p style={{ ...bodyStyle, fontSize: "14px" }}>
          I started my career in editorial photography before moving into brand
          identity and web design. Over 8 years I&apos;ve worked with founders,
          agencies, and creative teams across four countries — building brands
          that stand out and digital products that perform.
        </p>
        <p style={{ ...bodyStyle, fontSize: "14px" }}>
          My work is rooted in the belief that great design is never just
          decoration. It&apos;s a system — one that builds trust, communicates
          with clarity, and moves people to act.
        </p>
        <MagneticButton>Let&apos;s talk</MagneticButton>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 py-20 gap-16 items-start">
        {/* Portrait */}
        <div className="shrink-0 overflow-hidden" style={{ width: "436px", height: "614px" }}>
          <img
            src="/dark_Man_face.png"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-8 flex-1 pt-2">
          <div className="flex items-center justify-between">
            <p style={mono}>[Biography]</p>
            <p style={mono}>[002]</p>
          </div>
          <h2 style={{ ...headingStyle, fontSize: "clamp(32px, 3.333vw, 48px)", lineHeight: 1.1 }}>
            Born &amp; raised on<br />the south side<br />of Chicago.
          </h2>
          <p style={{ ...bodyStyle, fontSize: "16px" }}>
            I started my career in editorial photography before moving into brand
            identity and web design. Over 8 years I&apos;ve had the privilege of
            working with founders, agencies, and creative teams across four
            countries — building brands that stand out and digital products that
            perform.
          </p>
          <p style={{ ...bodyStyle, fontSize: "16px" }}>
            My work is rooted in the belief that great design is never just
            decoration. It&apos;s a system — one that builds trust, communicates
            with clarity, and moves people to act.
          </p>
          <MagneticButton>Let&apos;s talk</MagneticButton>
        </div>
      </section>
    </>
  );
}

// ── Approach Section (mirrors ServicesSection) ────────────────────────────────
const approaches = [
  {
    num: "[ 1 ]",
    title: "Discover",
    img: "/cream_on_palmtree_leef.png",
    desc: "Deep-dive into your brand, audience, and goals. Research, competitor analysis, and creative positioning.",
  },
  {
    num: "[ 2 ]",
    title: "Define",
    img: "/dashboard_screenshot.png",
    desc: "Creative brief, mood boards, and concept direction. Every decision grounded in strategy, not decoration.",
  },
  {
    num: "[ 3 ]",
    title: "Design",
    img: "/surfboard.png",
    desc: "Iterative craft with meticulous attention to detail. Motion, typography, colour — all working as one.",
  },
  {
    num: "[ 4 ]",
    title: "Deliver",
    img: "/signs_hanging_in_the_hall.png",
    desc: "Production-ready assets, hand-off, and support. Built to last, built to scale.",
  },
];

function ApproachSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      data-nav-dark
      className="w-full bg-black px-4 py-12 md:px-8 md:py-20 flex flex-col gap-8 md:gap-12"
    >
      <p style={monoWhite}>[ Approach ]</p>

      <div
        className="flex items-center justify-between w-full"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "clamp(32px, 6.667vw, 96px)",
          letterSpacing: "-0.08em",
          lineHeight: 1,
          textTransform: "uppercase",
          color: "#fff",
          whiteSpace: "nowrap",
        }}
      >
        <span>[4]</span>
        <span>Steps</span>
      </div>

      <div className="flex flex-col gap-12 w-full">
        {approaches.map(({ num, title, img, desc }, i) => {
          const isHovered = hovered === i;
          const isDimmed  = hovered !== null && !isHovered;
          return (
            <div
              key={num}
              className="flex flex-col gap-[9px] w-full cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ opacity: isDimmed ? 0.3 : 1, transition: "opacity 0.4s ease" }}
            >
              <p style={monoWhite}>{num}</p>

              {/* Divider sweep */}
              <div className="relative w-full overflow-hidden" style={{ height: "1px", background: "rgba(255,255,255,0.25)" }}>
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

              {/* Mobile */}
              <div className="md:hidden flex flex-col gap-4 pt-1">
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontStyle: "italic", fontSize: "36px", letterSpacing: "-0.04em", lineHeight: 1.1, textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap" }}>
                  {title}
                </p>
                <div className="flex flex-col gap-4">
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.04em", color: "#fff" }}>
                    {desc}
                  </p>
                  <div className="overflow-hidden" style={{ width: "151px", height: "151px" }}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div
                className="hidden md:flex md:items-start md:justify-between pt-2"
                style={{ transform: isHovered ? "translateX(10px)" : "translateX(0px)", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}
              >
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontStyle: "italic", fontSize: "36px", letterSpacing: isHovered ? "-0.02em" : "-0.04em", lineHeight: 1.1, textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap", transition: "letter-spacing 0.35s ease" }}>
                  {title}
                </p>
                <div className="flex gap-6 items-start">
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.04em", color: "#fff", width: "393px" }}>
                    {desc}
                  </p>
                  <div className="shrink-0 overflow-hidden" style={{ width: "151px", height: "151px" }}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ transform: isHovered ? "scale(1.12)" : "scale(1)", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Stats Section ─────────────────────────────────────────────────────────────
const stats = [
  { num: "8+",   label: "Years in\nthe industry" },
  { num: "100+", label: "Projects\ndelivered" },
  { num: "4",    label: "Countries\nworked in" },
  { num: "3",    label: "Award\nnominations" },
];

function StatsSection() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 py-16 flex flex-col gap-8">
        <p style={mono}>[ Numbers ]</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(52px, 14vw, 72px)", letterSpacing: "-0.07em", color: "#000", lineHeight: 1 }}>
                {num}
              </span>
              <span style={{ ...mono, whiteSpace: "pre-line" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 py-[100px] flex-col gap-16">
        <div className="flex items-center gap-8">
          <p style={mono}>[ Numbers ]</p>
          <div className="flex-1 border-t border-[#1f1f1f]" />
        </div>
        <div className="flex items-end justify-between w-full">
          {stats.map(({ num, label }, i) => (
            <div
              key={label}
              className="flex flex-col gap-3"
              style={{ alignItems: i % 2 === 0 ? "flex-start" : "flex-end" }}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(80px, 8.333vw, 120px)", letterSpacing: "-0.07em", color: "#000", lineHeight: 1 }}>
                {num}
              </span>
              <span style={{ ...mono, whiteSpace: "pre-line", textAlign: i % 2 === 0 ? "left" : "right" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
        <HeroNav />
      </header>
      <PageHero />
      <BiographySection />
      <FullBleedPhoto />
      <ApproachSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
