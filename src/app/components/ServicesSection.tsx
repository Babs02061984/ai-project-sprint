"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const imgs = [
  "/cream_on_palmtree_leef.png",
  "/dashboard_screenshot.png",
  "/surfboard.png",
  "/signs_hanging_in_the_hall.png",
];

const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#ffffff",
  textTransform: "uppercase",
};

export type SanityService = {
  _id: string;
  title: string;
  description?: string;
  order?: number;
};

export default function ServicesSection({ services }: { services: SanityService[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section data-nav-dark className="w-full bg-black px-4 py-12 md:px-8 md:py-20 flex flex-col gap-8 md:gap-12">
      {/* Section label */}
      <p style={mono}>[ Services ]</p>

      {/* Counter + heading */}
      <div
        className="flex items-center justify-between w-full"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "clamp(32px, 6.667vw, 96px)",
          letterSpacing: "-0.08em",
          lineHeight: 1,
          textTransform: "uppercase",
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        <span>[{services.length}]</span>
        <span>Deliverables</span>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-12 w-full">
        {services.map(({ title, description }, i) => {
          const isHovered = hovered === i;
          const isDimmed = hovered !== null && !isHovered;
          const img = imgs[i % imgs.length];
          const num = `[ ${String(i + 1).padStart(2, "0")} ]`;

          return (
            <div
              key={title}
              className="flex flex-col gap-[9px] w-full cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: isDimmed ? 0.3 : 1,
                transition: "opacity 0.4s ease",
              }}
            >
              {/* Number */}
              <p style={mono}>{num}</p>

              {/* Divider — white sweep from left on hover */}
              <div className="relative w-full overflow-hidden" style={{ height: "1px", background: "rgba(255,255,255,0.25)" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#ffffff",
                    transform: isHovered ? "translateX(0%)" : "translateX(-101%)",
                    transition: isHovered
                      ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                      : "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </div>

              {/* ── MOBILE ─────────────────────────────────────────────── */}
              <div className="md:hidden flex flex-col gap-4 pt-1">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "36px",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {title}
                </p>
                <div className="flex flex-col gap-4">
                  {description && (
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: 1.5,
                        letterSpacing: "-0.03em",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {description}
                    </p>
                  )}
                  <div className="overflow-hidden" style={{ width: "151px", height: "151px" }}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* ── DESKTOP ────────────────────────────────────────────── */}
              <div
                className="hidden md:flex md:items-start md:justify-between pt-2"
                style={{
                  transform: isHovered ? "translateX(10px)" : "translateX(0px)",
                  transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "36px",
                    letterSpacing: isHovered ? "-0.02em" : "-0.04em",
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    transition: "letter-spacing 0.35s ease",
                  }}
                >
                  {title}
                </p>

                <div className="flex gap-6 items-start">
                  {description && (
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: 1.5,
                        letterSpacing: "-0.03em",
                        color: "rgba(255,255,255,0.75)",
                        width: "393px",
                      }}
                    >
                      {description}
                    </p>
                  )}
                  <div
                    className="shrink-0 overflow-hidden"
                    style={{ width: "151px", height: "151px" }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        transform: isHovered ? "scale(1.12)" : "scale(1)",
                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
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
