import type { CSSProperties } from "react";

// Desktop logo assets
const logoLukas = "https://www.figma.com/api/mcp/asset/2fbe03da-8a68-46a3-809b-4314c807bf0e";
const logoMarko = "https://www.figma.com/api/mcp/asset/9d7a9f0c-bad6-4da6-a184-9f7e6f4757aa";
const logoSarah = "https://www.figma.com/api/mcp/asset/87c1c0f1-1181-45e5-ba7e-4e12654f84c2";
const logoSofia = "https://www.figma.com/api/mcp/asset/855f66af-4727-4554-9a21-ea25a336ecee";

// Mobile logo assets
const logoMarkoMobile = "https://www.figma.com/api/mcp/asset/8480107c-bf53-4597-9bf0-817914389661";
const logoSofiaMobile = "https://www.figma.com/api/mcp/asset/bdcdd24d-e706-4ce6-9420-55fa82b3e3f8";

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  name,
  rotate,
  width = 353,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  rotate: number;
  width?: number;
}) {
  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        width,
        background: "#f1f1f1",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        flexShrink: 0,
      }}
    >
      <img
        src={logo}
        alt=""
        style={{ width: logoW, height: logoH, objectFit: "contain", display: "block" }}
      />
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: 1.3,
          letterSpacing: "-0.04em",
          color: "#1f1f1f",
        }}
      >
        {quote}
      </p>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 900,
          fontSize: "16px",
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          color: "#000",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden w-full bg-white pt-16 pb-10" style={{ position: "relative" }}>
        {/* Heading — lineHeight 1 prevents glyph clipping; z-index 1 sits behind cards */}
        <div className="px-4" style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "clamp(52px, 16vw, 64px)",
              letterSpacing: "-0.07em",
              lineHeight: 1,
              textTransform: "capitalize",
              color: "#000",
            }}
          >
            Testimonials
          </h2>
        </div>

        {/* Slider — negative margin pulls it up to slightly overlap heading bottom;
            z-index 2 ensures cards sit in front of the heading text.
            No rotation on mobile — keeps cards fully readable in the slider. */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "-8px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            className="flex"
            style={{ gap: "12px", paddingLeft: "16px", paddingRight: "16px", paddingTop: "16px", paddingBottom: "16px" }}
          >
            <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <TestimonialCard
                logo={logoMarkoMobile}
                logoW={143}
                logoH={19}
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                name="Marko Stojković"
                rotate={0}
                width={300}
              />
            </div>
            <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <TestimonialCard
                logo={logoLukas}
                logoW={138}
                logoH={19}
                quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
                name="Lukas Weber"
                rotate={0}
                width={300}
              />
            </div>
            <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <TestimonialCard
                logo={logoSarah}
                logoW={109}
                logoH={31}
                quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
                name="Sarah Jenkins"
                rotate={0}
                width={300}
              />
            </div>
            <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <TestimonialCard
                logo={logoSofiaMobile}
                logoW={81}
                logoH={36}
                quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
                name="Sofia Martínez"
                rotate={0}
                width={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section
        className="hidden md:flex w-full bg-white items-center justify-center relative overflow-hidden"
        style={{ minHeight: "850px", padding: "120px 32px" }}
      >
        {/* Marko Stojković — top left */}
        <div className="absolute" style={{ left: "7.1%", top: "142px", zIndex: 2 }}>
          <TestimonialCard
            logo={logoMarko}
            logoW={143}
            logoH={19}
            quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
            name="Marko Stojković"
            rotate={-6.85}
          />
        </div>

        {/* Lukas Weber — top right */}
        <div className="absolute" style={{ left: "46.9%", top: "272px", zIndex: 2 }}>
          <TestimonialCard
            logo={logoLukas}
            logoW={138}
            logoH={19}
            quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
            name="Lukas Weber"
            rotate={2.9}
          />
        </div>

        {/* Sarah Jenkins — bottom left */}
        <div className="absolute" style={{ left: "21.2%", top: "553px", zIndex: 2 }}>
          <TestimonialCard
            logo={logoSarah}
            logoW={109}
            logoH={31}
            quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
            name="Sarah Jenkins"
            rotate={2.23}
          />
        </div>

        {/* Sofia Martínez — bottom right */}
        <div className="absolute" style={{ left: "68.5%", top: "546px", zIndex: 2 }}>
          <TestimonialCard
            logo={logoSofia}
            logoW={81}
            logoH={36}
            quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
            name="Sofia Martínez"
            rotate={-4.15}
          />
        </div>

        {/* Heading — centered, above cards */}
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "198px",
            letterSpacing: "-0.07em",
            lineHeight: 1.1,
            textTransform: "capitalize",
            color: "#000",
            textAlign: "center",
            position: "relative",
          }}
        >
          Testimonials
        </h2>
      </section>
    </>
  );
}
