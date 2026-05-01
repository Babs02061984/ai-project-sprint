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

export default function AboutSection() {
  return (
    // Desktop-only section (mobile will get its own layout later)
    <section className="hidden md:flex w-full bg-white px-8 py-20 items-start justify-between">

      {/* ── Left: section label ──────────────────────────────────────── */}
      <p style={mono}>[ About ]</p>

      {/* ── Right: text block + counter/image ───────────────────────── */}
      {/* items-end aligns text box bottom with image bottom */}
      <div className="flex flex-1 gap-8 items-end ml-8">

        {/* Text block with corner brackets */}
        <div className="flex flex-1 items-stretch gap-3">

          {/* Left bracket column */}
          <div className="flex flex-col justify-between shrink-0">
            <Corner pos="tl" />
            <Corner pos="bl" />
          </div>

          {/* Body copy */}
          <p
            className="flex-1 py-3 text-[14px] leading-[1.3] tracking-[-0.035em] text-[#1f1f1f]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Placeholder paragraph one. This is where you introduce yourself —
            your background, your passion for your craft, and what drives you
            creatively. Two to three sentences work best here.{" "}
            Placeholder paragraph two. Here you can describe your technical
            approach, how you collaborate with clients, or what sets your work
            apart from others in your field.
          </p>

          {/* Right bracket column */}
          <div className="flex flex-col justify-between items-end shrink-0">
            <Corner pos="tr" />
            <Corner pos="br" />
          </div>

        </div>

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
  );
}
