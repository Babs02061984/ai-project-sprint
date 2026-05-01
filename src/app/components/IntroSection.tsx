// Font sizes and indents use vw units derived from the 1440px Figma canvas
// so the layout scales fluidly on all desktop widths.
// 96px / 1440px = 6.667vw · indents converted proportionally.

const interLight: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
};

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
  textTransform: "uppercase" as const,
};

const bigText: React.CSSProperties = {
  ...interLight,
  fontSize: "clamp(40px, 6.667vw, 96px)",
  letterSpacing: "-0.08em",
  lineHeight: 0.84,
  textTransform: "uppercase" as const,
  color: "#000",
  whiteSpace: "nowrap",
};

export default function IntroSection() {
  return (
    <section className="w-full px-8 py-[120px]">
      <div className="flex flex-col gap-6 w-full">

        {/* Label + rule */}
        <div className="flex flex-col gap-3 items-end w-full">
          <p style={monoLabel}>[ 8+ years in industry ]</p>
          <div className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* Staggered editorial text */}
        <div className="flex flex-col gap-2 w-full">

          {/* Line 1 — "A creative director   /" + counter */}
          <div className="flex items-start gap-3 w-full">
            <p style={bigText}>A creative director&nbsp;&nbsp;&nbsp;/</p>
            <span style={{ ...monoLabel, marginTop: "0.5em" }}>001</span>
          </div>

          {/* Line 2 — "Photographer" indented ~14.86vw */}
          <div style={{ paddingLeft: "clamp(60px, 14.86vw, 214px)" }}>
            <p style={bigText}>Photographer</p>
          </div>

          {/* Line 3 — "Born & raised" indented ~42.36vw */}
          <div style={{ paddingLeft: "clamp(120px, 42.36vw, 610px)" }}>
            <p style={bigText}>
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

          {/* Line 4 — "On the south side" full left */}
          <div>
            <p style={bigText}>On the south side</p>
          </div>

          {/* Line 5 — "Of chicago." indented ~42.08vw + floating label */}
          <div className="relative" style={{ paddingLeft: "clamp(120px, 42.08vw, 606px)" }}>
            <p style={bigText}>Of chicago.</p>
            <span
              className="absolute top-[0.3em]"
              style={{
                ...monoLabel,
                left: "clamp(200px, 74.93vw, 1079px)",
                whiteSpace: "nowrap",
              }}
            >
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
