import type { CSSProperties } from "react";

const aboutImage =
  "https://www.figma.com/api/mcp/asset/b3dff2a5-7e8e-47ef-b6ac-1a8271b9d42f";

const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const bodyText: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  lineHeight: 1.3,
  letterSpacing: "-0.035em",
  color: "#1f1f1f",
};

// L-shaped corner bracket rendered with two border sides
function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const shared = "shrink-0 w-3 h-3 border-[#1f1f1f]";
  const sides: Record<string, string> = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return <div className={`${shared} ${sides[pos]}`} />;
}

// Reusable bracketed text block
function BracketedText() {
  return (
    <div className="flex items-stretch gap-3 w-full">
      <div className="flex flex-col justify-between shrink-0">
        <Corner pos="tl" />
        <Corner pos="bl" />
      </div>
      <p className="flex-1 py-3" style={bodyText}>
        Placeholder paragraph one. This is where you introduce yourself —
        your background, your passion for your craft, and what drives you
        creatively. Two to three sentences work best here.{" "}
        Placeholder paragraph two. Here you can describe your technical
        approach, how you collaborate with clients, or what sets your work
        apart from others in your field.
      </p>
      <div className="flex flex-col justify-between items-end shrink-0">
        <Corner pos="tr" />
        <Corner pos="br" />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <>
      {/* ── MOBILE layout ─────────────────────────────────────────────── */}
      <section className="md:hidden w-full bg-white px-6 pt-10 pb-0">
        <div className="flex flex-col gap-4">

          <p style={mono}>002</p>
          <p style={mono}>[ About ]</p>
          <BracketedText />

          {/* Full-width portrait, flush to section bottom */}
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={aboutImage}
              alt="Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </section>

      {/* ── DESKTOP layout ────────────────────────────────────────────── */}
      <section className="hidden md:flex w-full bg-white px-8 py-20 items-start justify-between">

        {/* Left: section label */}
        <p style={mono}>[ About ]</p>

        {/* Right: text block + counter/image, bottom-aligned */}
        <div className="flex flex-1 gap-8 items-end ml-8">

          <BracketedText />

          {/* Counter + portrait */}
          <div className="flex gap-6 items-start shrink-0">
            <p style={mono}>002</p>
            <div
              className="overflow-hidden shrink-0"
              style={{ width: "436px", height: "614px" }}
            >
              <img
                src={aboutImage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
