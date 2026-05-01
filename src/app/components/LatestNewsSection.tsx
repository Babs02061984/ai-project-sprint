import type { CSSProperties } from "react";

// Desktop images
const img1d = "https://www.figma.com/api/mcp/asset/b2e65603-94e9-4d5e-88b8-60bf804e93d1";
const img2d = "https://www.figma.com/api/mcp/asset/bd16eb38-f25f-4c52-90f5-ab8012bb28e7";
const img3d = "https://www.figma.com/api/mcp/asset/79b0c0a1-f572-473c-896f-e56a6073631c";

// Mobile images
const img1m = "https://www.figma.com/api/mcp/asset/574f9f35-e041-40d5-8d38-b1f86692a9e2";
const img2m = "https://www.figma.com/api/mcp/asset/6f9f9423-4d16-46fa-84af-e2891c279ada";
const img3m = "https://www.figma.com/api/mcp/asset/624f525e-efac-4a20-be07-5b00ba93aa9b";

const bodyText: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

function SmallArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 14L14 4M14 4H7M14 4V11"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReadMore() {
  return (
    <div className="flex gap-[10px] items-center border-b border-black pb-1 w-fit">
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
      <SmallArrow />
    </div>
  );
}

const placeholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LatestNewsSection() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <section className="md:hidden w-full flex flex-col gap-8 px-4 py-16" style={{ background: "#f3f3f3" }}>
        {/* Heading */}
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

        {/* Horizontal scroll — 3 cards */}
        <div className="-mx-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-4 pl-4 pr-4" style={{ width: "max-content" }}>
            {[img1m, img2m, img3m].map((img, i) => (
              <div key={i} className="flex flex-col gap-4 shrink-0" style={{ width: "300px" }}>
                <div className="relative overflow-hidden" style={{ height: "398px" }}>
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p style={bodyText}>{placeholder}</p>
                <ReadMore />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <section
        className="hidden md:flex items-end justify-between px-8 py-[120px] w-full"
        style={{ background: "#f3f3f3" }}
      >
        {/* Rotated heading — 110px wide column, 706px tall */}
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

          {/* Card 1 */}
          <div className="flex flex-col gap-4 shrink-0" style={{ width: "353px", height: "581px", justifyContent: "flex-end" }}>
            <div className="relative overflow-hidden" style={{ height: "469px" }}>
              <img src={img1d} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p style={bodyText}>{placeholder}</p>
            <ReadMore />
          </div>

          {/* Divider */}
          <div className="self-stretch mx-8 w-px bg-black shrink-0" />

          {/* Card 2 — offset 120px from top */}
          <div className="flex flex-col gap-4 shrink-0 pt-[120px]" style={{ width: "353px" }}>
            <div className="relative overflow-hidden" style={{ height: "469px" }}>
              <img src={img2d} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p style={bodyText}>{placeholder}</p>
            <ReadMore />
          </div>

          {/* Divider */}
          <div className="self-stretch mx-8 w-px bg-black shrink-0" />

          {/* Card 3 */}
          <div className="flex flex-col gap-4 shrink-0" style={{ width: "353px", height: "581px", justifyContent: "flex-end" }}>
            <div className="relative overflow-hidden" style={{ height: "469px" }}>
              <img src={img3d} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p style={bodyText}>{placeholder}</p>
            <ReadMore />
          </div>

        </div>
      </section>
    </>
  );
}
