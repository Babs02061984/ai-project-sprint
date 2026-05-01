import type { CSSProperties } from "react";

const img1 = "https://www.figma.com/api/mcp/asset/38bd3fd4-8821-4013-a009-d85a7ffd774e";
const img2 = "https://www.figma.com/api/mcp/asset/9d4a635f-9800-4ba8-93a6-299d43a8092b";
const img3 = "https://www.figma.com/api/mcp/asset/80060a01-f829-4012-8fbb-6b4e1ec55ef0";
const img4 = "https://www.figma.com/api/mcp/asset/fff1d099-ae83-482c-80b2-b4a6438b777f";

const mono: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#ffffff",
  textTransform: "uppercase",
};

const services = [
  { num: "[ 1 ]", title: "Brand Discovery", img: img1 },
  { num: "[ 2 ]", title: "Web Design & Dev", img: img2 },
  { num: "[ 3 ]", title: "Marketing", img: img3 },
  { num: "[ 4 ]", title: "Photography", img: img4 },
];

const placeholderDesc =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

export default function ServicesSection() {
  return (
    <section className="w-full bg-black px-6 py-16 md:px-8 md:py-20 flex flex-col gap-12">
      {/* Section label */}
      <p style={mono}>[ Services ]</p>

      {/* Counter + heading */}
      <div
        className="flex items-center justify-between w-full"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "clamp(48px, 6.667vw, 96px)",
          letterSpacing: "-0.08em",
          lineHeight: 1,
          textTransform: "uppercase",
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-12 w-full">
        {services.map(({ num, title, img }) => (
          <div key={num} className="flex flex-col gap-[9px] w-full">
            {/* Number */}
            <p style={mono}>{num}</p>

            {/* Divider */}
            <div className="w-full border-t border-white" />

            {/* Title + description + thumbnail */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between pt-2 gap-4 md:gap-0">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </p>

              <div className="flex gap-6 items-start">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.04em",
                    color: "#ffffff",
                    maxWidth: "393px",
                  }}
                >
                  {placeholderDesc}
                </p>
                <div
                  className="shrink-0 overflow-hidden"
                  style={{ width: "151px", height: "151px" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
