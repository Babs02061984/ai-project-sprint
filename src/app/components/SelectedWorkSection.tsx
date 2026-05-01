import type { CSSProperties } from "react";

const img1 = "https://www.figma.com/api/mcp/asset/7be5e61c-bc3f-4a0a-a65a-6a49b323524b";
const img2 = "https://www.figma.com/api/mcp/asset/8de91792-ae5a-415e-893c-cb43a23fc645";
const img3 = "https://www.figma.com/api/mcp/asset/fdce2f8f-06c5-4042-8823-5f05d488c835";
const img4 = "https://www.figma.com/api/mcp/asset/230b4dab-9983-481d-891b-fe33a85ba5d1";

const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
  textTransform: "uppercase",
};

function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-2 py-1 rounded-full backdrop-blur-[10px] whitespace-nowrap"
      style={{
        background: "rgba(255,255,255,0.3)",
        fontFamily: "var(--font-inter)",
        fontSize: "14px",
        fontWeight: 500,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        color: "#111",
      }}
    >
      {label}
    </span>
  );
}

// Arrow icon — diagonal top-right
function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8 24L24 8M24 8H12M24 8V20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const sides: Record<string, string> = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return <div className={`shrink-0 w-4 h-4 border-[#1f1f1f] ${sides[pos]}`} />;
}

function ProjectCard({
  title,
  img,
  tags,
  height,
}: {
  title: string;
  img: string;
  tags: string[];
  height: number;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 900,
            fontSize: "36px",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "#000",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

const defaultTags = ["Social Media", "Photography"];

export default function SelectedWorkSection() {
  return (
    <section className="hidden md:block w-full bg-white px-8 py-20">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between w-full mb-[61px]">
        <div className="flex gap-[10px] items-start">
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "96px",
              letterSpacing: "-0.08em",
              lineHeight: 0.86,
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p style={{ ...mono, marginTop: "4px" }}>004</p>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ height: "110px", width: "15px" }}
        >
          <p
            style={{
              ...mono,
              transform: "rotate(-90deg)",
              whiteSpace: "nowrap",
            }}
          >
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* ── Two-column masonry grid ───────────────────────────────────── */}
      <div className="flex gap-6 items-end w-full">
        {/* Left column */}
        <div className="flex-1 flex flex-col justify-between gap-0 self-stretch">
          <ProjectCard title="Surfers paradise" img={img1} tags={defaultTags} height={744} />

          {/* CTA bracket block */}
          <div className="flex gap-3 items-stretch justify-center w-full py-6">
            <div className="flex flex-col justify-between shrink-0" style={{ width: "24px" }}>
              <Corner pos="tl" />
              <Corner pos="bl" />
            </div>
            <div className="flex-1 flex flex-col gap-[10px] py-3">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.3,
                  letterSpacing: "-0.04em",
                  color: "#1f1f1f",
                }}
              >
                Discover how my creativity transforms ideas into impactful digital
                experiences — schedule a call with me to get started.
              </p>
              <button
                className="bg-black text-white rounded-full w-fit"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  padding: "12px 16px",
                }}
              >
                Let&apos;s talk
              </button>
            </div>
            <div className="flex flex-col justify-between items-end shrink-0" style={{ width: "24px" }}>
              <Corner pos="tr" />
              <Corner pos="br" />
            </div>
          </div>

          <ProjectCard title="Cyberpunk caffe" img={img2} tags={defaultTags} height={699} />
        </div>

        {/* Right column — offset 240px from top */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard title="Agency 976" img={img3} tags={defaultTags} height={699} />
          <ProjectCard title="Minimal Playground" img={img4} tags={defaultTags} height={744} />
        </div>
      </div>
    </section>
  );
}
