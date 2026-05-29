"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const img1d = "/hand_draws_wireframe.png";
const img2d = "/paper_Magazine_Eames.png";
const img3d = "/hands_holding_books.png";

const img1m = "/hand_draws_wireframe.png";
const img2m = "/paper_Magazine_Eames.png";
const img3m = "/hands_holding_books.png";

const bodyText: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

const placeholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function ReadMore({ hovered }: { hovered: boolean }) {
  return (
    <div className="flex gap-[10px] items-center w-fit" style={{ position: "relative", paddingBottom: "4px" }}>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "-0.04em",
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        Read more
      </span>
      {/* Arrow shifts right on hover */}
      <div
        style={{
          transform: hovered ? "translateX(5px)" : "translateX(0px)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M4 14L14 4M14 4H7M14 4V11"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Underline draws from left */}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background: "#000",
          transformOrigin: "left center",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}

function NewsCard({
  img,
  mobile = false,
  height = 469,
  cardStyle,
}: {
  img: string;
  mobile?: boolean;
  height?: number;
  cardStyle?: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 shrink-0"
      style={{
        cursor: "pointer",
        transform: hovered ? "translateY(-8px)" : "translateY(0px)",
        transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        ...cardStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          height,
          boxShadow: hovered
            ? "0 20px 48px rgba(0,0,0,0.18)"
            : "0 0px 0px rgba(0,0,0,0)",
          transition: "box-shadow 0.45s ease",
        }}
      >
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "brightness(1.06)" : "brightness(1)",
            transition:
              "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease",
          }}
        />
      </div>
      <p style={bodyText}>{placeholder}</p>
      <ReadMore hovered={hovered} />
    </div>
  );
}

export default function LatestNewsSection() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section
        className="md:hidden w-full flex flex-col gap-8 px-4 py-16"
        style={{ background: "#f3f3f3" }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "32px",
            letterSpacing: "-0.08em",
            lineHeight: 0.86,
            textTransform: "uppercase",
            color: "#000",
          }}
        >
          Keep up with my latest news &amp; achievements
        </p>

        <div className="-mx-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-4 pl-4 pr-4" style={{ width: "max-content" }}>
            {[img1m, img2m, img3m].map((img, i) => (
              <NewsCard key={i} img={img} mobile height={398} cardStyle={{ width: "300px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section
        className="hidden md:flex items-end justify-between px-8 py-[120px] w-full"
        style={{ background: "#f3f3f3" }}
      >
        {/* Rotated heading */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: "110px", height: "706px" }}
        >
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "64px",
                letterSpacing: "-0.08em",
                lineHeight: 0.86,
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              <p>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>
        </div>

        {/* Cards + dividers */}
        <div className="flex items-end gap-0 flex-1 ml-8">

          <NewsCard
            img={img1d}
            cardStyle={{ width: "353px", height: "581px", justifyContent: "flex-end" }}
          />

          <div className="self-stretch mx-8 w-px bg-black shrink-0" />

          <NewsCard
            img={img2d}
            cardStyle={{ width: "353px", paddingTop: "120px" }}
          />

          <div className="self-stretch mx-8 w-px bg-black shrink-0" />

          <NewsCard
            img={img3d}
            cardStyle={{ width: "353px", height: "581px", justifyContent: "flex-end" }}
          />

        </div>
      </section>
    </>
  );
}
