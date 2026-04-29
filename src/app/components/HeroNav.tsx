"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between py-6">
        <span
          className="font-semibold text-base capitalize tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          H.Studio
        </span>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex gap-14 font-semibold text-base capitalize tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:opacity-60 transition-opacity">
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:block bg-black text-white text-sm font-medium px-4 py-3 rounded-full tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Let&apos;s talk
        </button>

        {/* Mobile hamburger / close */}
        <button
          className="md:hidden flex flex-col justify-center gap-[6px] w-6 h-6"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <>
              <span className="block h-[1.5px] w-full bg-black rotate-45 translate-y-[3.75px]" />
              <span className="block h-[1.5px] w-full bg-black -rotate-45 -translate-y-[3.75px]" />
            </>
          ) : (
            <>
              <span className="block h-[1.5px] w-full bg-black" />
              <span className="block h-[1.5px] w-full bg-black" />
              <span className="block h-[1.5px] w-full bg-black" />
            </>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-10 bg-white flex flex-col px-6 pt-24 pb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-4xl font-semibold capitalize tracking-[-0.04em] text-black hover:opacity-60 transition-opacity"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button className="bg-black text-white text-sm font-medium px-4 py-3 rounded-full tracking-[-0.04em]">
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
