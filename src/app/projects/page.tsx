"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import HeroNav from "../components/HeroNav";
import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ── shared tokens ─────────────────────────────────────────────────────────────
const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
  textTransform: "uppercase",
};

// ── Projects data ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "Minimal Playground",
    category: "Brand Identity",
    year: "2024",
    img: "/minimal playground.png",
    desc: "A visual identity built around negative space and typographic restraint. Bold without ever being loud.",
    colSpan: 2,
    aspect: "16/9",
  },
  {
    id: "02",
    title: "Cyberpunk Café",
    category: "Web Design",
    year: "2024",
    img: "/cyberpunk caffee.png",
    desc: "Immersive web experience for a neon-soaked coffee brand. Dark mode by design.",
    colSpan: 1,
    aspect: "3/4",
  },
  {
    id: "03",
    title: "Agency 967",
    category: "Digital Campaign",
    year: "2023",
    img: "/agency 967.png",
    desc: "Full-funnel campaign direction for an independent creative agency. Strategy meets storytelling.",
    colSpan: 1,
    aspect: "3/4",
  },
  {
    id: "04",
    title: "Dashboard",
    category: "Product Design",
    year: "2024",
    img: "/dashboard_screenshot.png",
    desc: "Data-dense UI designed for clarity. Information architecture that respects the user's time.",
    colSpan: 2,
    aspect: "16/9",
  },
  {
    id: "05",
    title: "Paper Magazine",
    category: "Editorial Design",
    year: "2023",
    img: "/paper_Magazine_Eames.png",
    desc: "Art direction and layout for an independent arts publication. Every spread a world of its own.",
    colSpan: 1,
    aspect: "3/4",
  },
  {
    id: "06",
    title: "Through the Lens",
    category: "Photography",
    year: "2023",
    img: "/guy_with_kamera.png",
    desc: "Editorial portrait series exploring identity, craft, and the act of seeing.",
    colSpan: 1,
    aspect: "3/4",
  },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card relative overflow-hidden cursor-pointer"
      style={{
        gridColumn: `span ${project.colSpan}`,
        aspectRatio: project.aspect,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1.01)",
          transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Persistent dark base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.55s ease",
          pointerEvents: "none",
        }}
      />

      {/* Number badge */}
      <span
        style={{
          ...mono,
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "rgba(255,255,255,0.7)",
          zIndex: 2,
        }}
      >
        [{project.id}]
      </span>

      {/* Arrow circle */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-30deg)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
          zIndex: 2,
        }}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 13L13 3M13 3H5M13 3V11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "clamp(16px,2.5vw,28px)",
          transform: hovered ? "translateY(0px)" : "translateY(10px)",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 2,
        }}
      >
        {/* Category + year — slides up first */}
        <p
          style={{
            ...mono,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "8px",
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            opacity: hovered ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.04s, opacity 0.4s ease 0.04s",
          }}
        >
          {project.category} — {project.year}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.5vw, 34px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#fff",
            textTransform: "uppercase",
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            opacity: hovered ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.0s, opacity 0.4s ease 0.0s",
          }}
        >
          {project.title}
        </h3>

        {/* Description — slight delay */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "420px",
            marginTop: "8px",
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            opacity: hovered ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.08s, opacity 0.4s ease 0.08s",
          }}
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
}

// ── Page Hero ─────────────────────────────────────────────────────────────────
function PageHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-tag",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".hero-line",
        { y: 60, opacity: 0, skewY: 2 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.25,
        }
      );
      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.7 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

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
    <div ref={heroRef}>
      {/* ── MOBILE ──────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-4 pt-32 pb-12 flex flex-col gap-6">
        <p className="hero-tag" style={mono}>[Projects]</p>
        <div className="overflow-hidden">
          <h1 className="hero-line" style={{ ...bigStyle, fontSize: "clamp(52px,14vw,80px)" }}>
            Selected
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line" style={{ ...bigStyle, fontSize: "clamp(52px,14vw,80px)" }}>
            work.
          </h1>
        </div>
        <p
          className="hero-sub"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            lineHeight: 1.5,
            letterSpacing: "-0.03em",
            color: "#1f1f1f",
          }}
        >
          Six projects across branding, web, photography, and product design.
        </p>
      </section>

      {/* ── DESKTOP ─────────────────────────────────────────────────── */}
      <section className="hidden md:flex bg-white px-8 pt-[160px] pb-[100px] flex-col gap-0">
        <div className="flex items-end justify-between w-full mb-6">
          <p className="hero-tag" style={mono}>[Projects]</p>
          <p className="hero-tag" style={mono}>[001]</p>
        </div>
        <div className="w-full border-t border-[#1f1f1f] mb-12" />

        <div className="overflow-hidden">
          <h1 className="hero-line" style={bigStyle}>Selected</h1>
        </div>
        <div style={{ paddingLeft: "clamp(60px, 14.86vw, 214px)" }} className="overflow-hidden">
          <h1 className="hero-line" style={bigStyle}>work.</h1>
        </div>

        <div className="flex items-end justify-between w-full mt-16">
          <p
            className="hero-sub"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              lineHeight: 1.6,
              letterSpacing: "-0.03em",
              color: "#1f1f1f",
              maxWidth: "480px",
            }}
          >
            Six projects across brand identity, web design, product design,
            and editorial photography — each one built with intention.
          </p>
          <div className="flex gap-14 items-end hero-sub">
            {[["6", "Projects"], ["4", "Disciplines"], ["2024", "Latest"]].map(([n, l]) => (
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
                <span style={mono}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Gallery Section ───────────────────────────────────────────────────────────
function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Filter bar fade in
      gsap.fromTo(
        ".gallery-header",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-header",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 pb-24 md:px-8 md:pb-32">
      {/* Header */}
      <div className="gallery-header flex items-center justify-between mb-8">
        <p style={mono}>[Selected Work]</p>
        <p style={mono}>[{projects.length} Projects]</p>
      </div>
      <div className="gallery-header w-full border-t border-[#1f1f1f] mb-8 md:mb-10" />

      {/* Mobile: single column */}
      <div className="flex flex-col gap-3 md:hidden">
        {projects.map((p) => (
          <div key={p.id} className="project-card relative overflow-hidden cursor-pointer" style={{ aspectRatio: "4/3" }}>
            <MobileCard project={p} />
          </div>
        ))}
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

// simple mobile card (no hover overlay complexity)
function MobileCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
        }}
      />
      <span
        style={{
          ...mono,
          position: "absolute",
          top: "16px",
          left: "16px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        [{project.id}]
      </span>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
        <p style={{ ...mono, color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>
          {project.category} — {project.year}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "22px",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          {project.title}
        </h3>
      </div>
    </>
  );
}

// ── Contact Section ───────────────────────────────────────────────────────────
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-label",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ".contact-label", start: "top 88%" },
        }
      );

      gsap.fromTo(
        ".contact-line",
        { y: 70, opacity: 0, skewY: 2 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-line", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-field",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: { trigger: ".contact-field", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bigStyle: CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    fontSize: "clamp(40px, 6.667vw, 96px)",
    letterSpacing: "-0.08em",
    lineHeight: 0.88,
    textTransform: "uppercase",
    color: "#000",
  };

  const inputBase = (name: string): CSSProperties => ({
    fontFamily: "var(--font-inter)",
    fontSize: "16px",
    letterSpacing: "-0.02em",
    color: "#000",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focused === name ? "#000" : "#ccc"}`,
    outline: "none",
    width: "100%",
    padding: "14px 0 12px",
    transition: "border-color 0.3s ease",
    borderRadius: 0,
  });

  const labelStyle: CSSProperties = { ...mono, marginBottom: "4px", display: "block" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      ref={sectionRef}
      data-nav-dark
      className="bg-black px-4 py-20 md:px-8 md:py-[140px]"
    >
      {/* ── MOBILE ──────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-12">
        <div>
          <p className="contact-label" style={{ ...mono, color: "#fff", marginBottom: "24px" }}>
            [Contact]
          </p>
          <div className="overflow-hidden">
            <p
              className="contact-line"
              style={{ ...bigStyle, fontSize: "clamp(40px,11vw,60px)", color: "#fff" }}
            >
              Got a project
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              className="contact-line"
              style={{ ...bigStyle, fontSize: "clamp(40px,11vw,60px)", color: "#fff" }}
            >
              in{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                mind?
              </span>
            </p>
          </div>
        </div>

        {sent ? (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Message sent — I&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {[
              { name: "name",    label: "Your name",     type: "text",     placeholder: "Jane Smith" },
              { name: "email",   label: "Email address", type: "email",    placeholder: "jane@studio.co" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="contact-field flex flex-col">
                <label style={{ ...labelStyle, color: "rgba(255,255,255,0.5)" }}>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={{ ...inputBase(name), color: "#fff", borderBottomColor: focused === name ? "#fff" : "rgba(255,255,255,0.2)", caretColor: "#fff" }}
                  onFocus={() => setFocused(name)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            ))}
            <div className="contact-field flex flex-col">
              <label style={{ ...labelStyle, color: "rgba(255,255,255,0.5)" }}>Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                style={{ ...inputBase("msg"), color: "#fff", borderBottomColor: focused === "msg" ? "#fff" : "rgba(255,255,255,0.2)", resize: "none", caretColor: "#fff" }}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className="contact-field">
              <MagneticButton type="submit">Send message</MagneticButton>
            </div>
          </form>
        )}
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────────── */}
      <div className="hidden md:flex gap-20 items-start">
        {/* Left: heading */}
        <div className="flex-1">
          <div className="flex items-end justify-between mb-8">
            <p className="contact-label" style={{ ...mono, color: "rgba(255,255,255,0.5)" }}>
              [Contact]
            </p>
            <p className="contact-label" style={{ ...mono, color: "rgba(255,255,255,0.3)" }}>
              [003]
            </p>
          </div>
          <div className="w-full border-t border-[rgba(255,255,255,0.15)] mb-12" />

          <div className="overflow-hidden">
            <p className="contact-line" style={{ ...bigStyle, color: "#fff" }}>
              Got a project
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="contact-line" style={{ ...bigStyle, color: "#fff" }}>
              in{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                mind?
              </span>
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              lineHeight: 1.6,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "380px",
              marginTop: "36px",
            }}
          >
            Whether it&apos;s a new brand, a web build, or something you&apos;re
            still figuring out — let&apos;s talk it through.
          </p>

          <div className="flex flex-col gap-2 mt-12">
            {[
              ["Email",     "info@frischmuthdesign.com"],
              ["Based in",  "Berlin, DE"],
              ["Available", "Q3 2025"],
            ].map(([label, val]) => (
              <div key={label} className="flex gap-8 items-baseline border-t border-[rgba(255,255,255,0.1)] pt-4 pb-4">
                <span style={{ ...mono, color: "rgba(255,255,255,0.4)", width: "90px", flexShrink: 0 }}>
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    letterSpacing: "-0.02em",
                    color: "#fff",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="flex-1 pt-[72px]">
          {sent ? (
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "22px",
                lineHeight: 1.4,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              Message sent — I&apos;ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {[
                { name: "name",    label: "Your name",     type: "text",  placeholder: "Jane Smith" },
                { name: "email",   label: "Email address", type: "email", placeholder: "jane@studio.co" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="contact-field flex flex-col">
                  <label style={{ ...labelStyle, color: "rgba(255,255,255,0.45)" }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                      ...inputBase(name),
                      color: "#fff",
                      borderBottomColor: focused === name ? "#fff" : "rgba(255,255,255,0.2)",
                      caretColor: "#fff",
                    }}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}
              <div className="contact-field flex flex-col">
                <label style={{ ...labelStyle, color: "rgba(255,255,255,0.45)" }}>Project brief</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, timeline, and goals..."
                  style={{
                    ...inputBase("msg"),
                    color: "#fff",
                    borderBottomColor: focused === "msg" ? "#fff" : "rgba(255,255,255,0.2)",
                    resize: "none",
                    caretColor: "#fff",
                  }}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className="contact-field">
                <MagneticButton type="submit">Send message</MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
        <HeroNav />
      </header>
      <PageHero />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}
