"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

// ─── Hamburger → X ───────────────────────────────────────────────────────────
function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  const topRef = useRef<HTMLSpanElement>(null);
  const midRef = useRef<HTMLSpanElement>(null);
  const botRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Line centres in a h-6 (24px) button with gap-[6px]:
    // top=4.5px, mid=12px, bot=19.5px → delta to centre = ±7.5px
    if (open) {
      gsap.to(midRef.current, { opacity: 0, duration: 0.15 });
      gsap.to(topRef.current, { y: 7.5,  rotate:  45, duration: 0.35, ease: "power2.inOut" });
      gsap.to(botRef.current, { y: -7.5, rotate: -45, duration: 0.35, ease: "power2.inOut" });
    } else {
      gsap.to(midRef.current, { opacity: 1, duration: 0.2, delay: 0.15 });
      gsap.to(topRef.current, { y: 0, rotate: 0, duration: 0.35, ease: "power2.inOut" });
      gsap.to(botRef.current, { y: 0, rotate: 0, duration: 0.35, ease: "power2.inOut" });
    }
  }, [open]);

  const barStyle: React.CSSProperties = {
    backgroundColor: "currentColor",
    transition: "background-color 0.35s ease",
  };

  return (
    <button
      className="md:hidden flex flex-col justify-center gap-[6px] w-6 h-6"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span ref={topRef} className="block h-[1.5px] w-full" style={{ ...barStyle, willChange: "transform" }} />
      <span ref={midRef} className="block h-[1.5px] w-full" style={barStyle} />
      <span ref={botRef} className="block h-[1.5px] w-full" style={{ ...barStyle, willChange: "transform" }} />
    </button>
  );
}

// ─── Desktop nav link ─────────────────────────────────────────────────────────
// Bold ghost span reserves the wider bold width at all times so neighbours
// never shift when the active weight switches from 600 → 700.
// Underline grows from the centre outward with an elastic spring.
function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const lineRef = useRef<HTMLSpanElement>(null);

  // Spring in when active, quick retract when deactivated
  useEffect(() => {
    if (!lineRef.current) return;
    if (active) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.6, ease: "elastic.out(1, 0.45)" }
      );
    } else {
      gsap.to(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [active]);

  const onEnter = () => {
    if (active) return;
    gsap.killTweensOf(lineRef.current);
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.5, ease: "elastic.out(1, 0.45)" }
    );
  };

  const onLeave = () => {
    if (active) return;
    gsap.killTweensOf(lineRef.current);
    gsap.to(lineRef.current, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <a
      href="#"
      className="relative inline-block pb-[4px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={(e) => { e.preventDefault(); onClick(); }}
    >
      {/* Invisible bold copy — always reserves the bold text width */}
      <span
        aria-hidden="true"
        style={{ fontWeight: 700, visibility: "hidden", display: "block", whiteSpace: "nowrap" }}
      >
        {label}
      </span>

      {/* Visible text — sits over the ghost, switches weight on active */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap",
          fontWeight: active ? 700 : 600,
          fontFamily: "var(--font-inter)",
          letterSpacing: "-0.04em",
          fontSize: "inherit",
        }}
      >
        {label}
      </span>

      {/* Elastic underline */}
      <span
        ref={lineRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.5px",
          background: "currentColor",
          display: "block",
          transform: "scaleX(0)",
          transformOrigin: "center",
        }}
      />
    </a>
  );
}

// ─── Main nav ─────────────────────────────────────────────────────────────────
export default function HeroNav() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOverDark, setIsOverDark] = useState(false);

  const navRef       = useRef<HTMLElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const linkItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const menuCtaRef   = useRef<HTMLDivElement>(null);
  const tlRef        = useRef<gsap.core.Timeline | null>(null);

  // Initialise overlay as invisible (prevents SSR flash)
  useEffect(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0, display: "none" });
  }, []);

  // Watch dark sections — flip white bg when nav zone overlaps one
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const navH = nav.getBoundingClientRect().height || 72;
    const bottomMargin = -(window.innerHeight - navH);

    const active = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? active.add(e.target) : active.delete(e.target)));
        setIsOverDark(active.size > 0);
      },
      { rootMargin: `0px 0px ${bottomMargin}px 0px`, threshold: 0 }
    );

    document.querySelectorAll("[data-nav-dark]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Open / close animation
  useEffect(() => {
    tlRef.current?.kill();

    if (menuOpen) {
      const tl = gsap.timeline();
      tl.set(overlayRef.current, { display: "flex" });
      tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
      tl.fromTo(
        linkItemsRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: "power3.out" },
        "-=0.15"
      );
      tl.fromTo(
        menuCtaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      );
      tlRef.current = tl;
    } else {
      const tl = gsap.timeline({
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });
      tl.to(linkItemsRef.current.filter(Boolean), {
        y: -20, opacity: 0, duration: 0.2, stagger: 0.04, ease: "power2.in",
      });
      tl.to(overlayRef.current, { autoAlpha: 0, duration: 0.25, ease: "power2.in" }, "-=0.05");
      tlRef.current = tl;
    }
  }, [menuOpen]);

  // When mobile menu is open the overlay underneath is white — keep text dark
  const textColor = isOverDark && !menuOpen ? "#fff" : "#000";

  return (
    <>
      <nav
        ref={navRef}
        className="flex items-center justify-between py-6"
        style={{
          backgroundColor: "transparent",
          color: textColor,
          transition: "color 0.35s ease",
        }}
      >
        {/* Logo */}
        <span
          className="font-semibold text-base capitalize tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          H.Studio
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-14 text-base capitalize">
          {navLinks.map((link) => (
            <NavLink
              key={link}
              label={link}
              active={activeLink === link}
              onClick={() => setActiveLink(link)}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <MagneticButton className="hidden md:block">Let&apos;s talk</MagneticButton>

        {/* Mobile hamburger */}
        <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
      </nav>

      {/* Mobile overlay — z-40 keeps it below the sticky header (z-50) so hamburger stays clickable */}
      <div
        ref={overlayRef}
        className="md:hidden fixed inset-0 z-40 bg-white flex-col px-6 pt-24 pb-10"
        style={{ fontFamily: "var(--font-inter)", display: "none" }}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link}
              ref={(el) => { linkItemsRef.current[i] = el; }}
            >
              <a
                href="#"
                className="text-4xl font-semibold capitalize tracking-[-0.04em] text-black"
                onClick={() => { setActiveLink(link); setMenuOpen(false); }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div ref={menuCtaRef} className="mt-auto">
          <MagneticButton>Let&apos;s talk</MagneticButton>
        </div>
      </div>
    </>
  );
}
