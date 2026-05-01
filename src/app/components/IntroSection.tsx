import type { CSSProperties } from "react";

// ─── shared style tokens ───────────────────────────────────────────────────
const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "13px",
  fontWeight: 400,
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  color: "#1f1f1f",
  lineHeight: 1.1,
};

// Desktop staggered layout: vw units derived from 1440px Figma canvas
const bigLight: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  fontSize: "clamp(40px, 6.667vw, 96px)",
  letterSpacing: "-0.08em",
  lineHeight: 0.84,
  textTransform: "uppercase",
  color: "#000",
  whiteSpace: "nowrap",
};

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      {/* ── MOBILE layout (hidden on md+) ─────────────────────────────── */}
      <div className="md:hidden flex flex-col items-center text-center px-6 py-20 gap-6">

        <span style={mono}>[ 8+ years in industry ]</span>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "16px",
            color: "#1f1f1f",
          }}
        >
          Hi,
        </p>

        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 900,
            fontSize: "clamp(36px, 11vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#000",
          }}
        >
          A Creative Director&nbsp;/ Photographer Born&nbsp;&amp;&nbsp;Raised
          on the South Side of Chicago.
        </h2>

        <span style={mono}>[ creative freelancer ]</span>

      </div>

      {/* ── DESKTOP layout (hidden below md) ──────────────────────────── */}
      <div className="hidden md:block px-8 py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* Label + rule */}
          <div className="flex flex-col gap-3 items-end w-full">
            <p style={mono}>[ 8+ years in industry ]</p>
            <div className="w-full border-t border-[#1f1f1f]" />
          </div>

          {/* Staggered editorial lines */}
          <div className="flex flex-col gap-2 w-full">

            {/* Line 1 */}
            <div className="flex items-start gap-3">
              <p style={bigLight}>A creative director&nbsp;&nbsp;&nbsp;/</p>
              <span style={{ ...mono, marginTop: "0.5em" }}>001</span>
            </div>

            {/* Line 2 — indented */}
            <div style={{ paddingLeft: "clamp(60px, 14.86vw, 214px)" }}>
              <p style={bigLight}>Photographer</p>
            </div>

            {/* Line 3 — further indented, Playfair italic & */}
            <div style={{ paddingLeft: "clamp(120px, 42.36vw, 610px)" }}>
              <p style={bigLight}>
                Born{" "}
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  &amp;
                </span>
                {" "}raised
              </p>
            </div>

            {/* Line 4 — full left */}
            <div>
              <p style={bigLight}>On the south side</p>
            </div>

            {/* Line 5 — indented + floating label */}
            <div
              className="relative"
              style={{ paddingLeft: "clamp(120px, 42.08vw, 606px)" }}
            >
              <p style={bigLight}>Of chicago.</p>
              <span
                className="absolute top-[0.3em]"
                style={{
                  ...mono,
                  left: "clamp(200px, 74.93vw, 1079px)",
                  whiteSpace: "nowrap",
                }}
              >
                [ creative freelancer ]
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
