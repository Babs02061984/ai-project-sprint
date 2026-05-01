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
      <section className="md:hidden w-full bg-white px-4 py-16 flex flex-col gap-8 overflow-hidden">
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "64px",
            letterSpacing: "-0.07em",
            lineHeight: 0.8,
            textTransform: "capitalize",
            color: "#000",
          }}
        >
          Testimonials
        </h2>

        {/* Horizontal scroll with peeking overlap */}
        <div className="-mx-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex items-center pl-4 pr-4" style={{ width: "max-content" }}>
            <div style={{ marginRight: "-10px", position: "relative", zIndex: 1 }}>
              <TestimonialCard
                logo={logoMarkoMobile}
                logoW={143}
                logoH={19}
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                name="Marko Stojković"
                rotate={-3.5}
                width={260}
              />
            </div>
            <TestimonialCard
              logo={logoSofiaMobile}
              logoW={81}
              logoH={36}
              quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
              name="Sofia Martínez"
              rotate={2}
              width={260}
            />
          </div>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section
        className="hidden md:flex w-full bg-white items-center justify-center relative overflow-hidden"
        style={{ minHeight: "850px", padding: "120px 32px" }}
      >
        {/* Marko Stojković — top left */}
        <div className="absolute" style={{ left: "7.1%", top: "142px" }}>
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
        <div className="absolute" style={{ left: "46.9%", top: "272px" }}>
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
        <div className="absolute" style={{ left: "21.2%", top: "553px" }}>
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
        <div className="absolute" style={{ left: "68.5%", top: "546px" }}>
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
            zIndex: 1,
          }}
        >
          Testimonials
        </h2>
      </section>
    </>
  );
}
