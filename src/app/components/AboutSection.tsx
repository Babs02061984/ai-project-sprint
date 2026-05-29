import type { CSSProperties } from "react";
import MagneticButton from "./MagneticButton";
import RevealImage from "./RevealImage";
import ParallaxLeft from "./ParallaxLeft";

const aboutImage = "/dark_Man_face.png";

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
      <div className="flex-1 py-3 flex flex-col gap-4">
        <p style={{ ...bodyText, fontStyle: "italic" }}>
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <MagneticButton>Let&apos;s talk</MagneticButton>
      </div>
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
      <section className="md:hidden w-full bg-white px-6 pt-10 pb-0 overflow-x-hidden">
        <div className="flex flex-col gap-4">

          <p style={mono}>002</p>
          <p style={mono}>[ About ]</p>
          <ParallaxLeft distance={30}>
            <BracketedText />
          </ParallaxLeft>

          {/* Full-width portrait, flush to section bottom */}
          <RevealImage
            src={aboutImage}
            alt="Portrait"
            containerClassName="w-full aspect-[3/4] overflow-hidden"
            imgClassName="w-full h-full object-cover object-top"
          />

        </div>
      </section>

      {/* ── DESKTOP layout ────────────────────────────────────────────── */}
      <section className="hidden md:flex w-full bg-white px-8 py-20 items-start justify-between overflow-x-hidden">

        {/* Left: section label */}
        <p style={mono}>[ About ]</p>

        {/* Right: text block + counter/image, bottom-aligned */}
        <div className="flex flex-1 gap-8 items-end ml-8 justify-between">

          <ParallaxLeft distance={50} className="w-[294px] shrink-0">
            <BracketedText />
          </ParallaxLeft>

          {/* Counter + portrait */}
          <div className="flex gap-6 items-start shrink-0">
            <p style={mono}>002</p>
            <RevealImage
              src={aboutImage}
              alt="Portrait"
              containerClassName="overflow-hidden shrink-0"
              containerStyle={{ width: "436px", height: "614px" }}
              imgClassName="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}
