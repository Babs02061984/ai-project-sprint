import type { CSSProperties } from "react";

const img1 = "/cream_on_palmtree_leef.png";
const img2 = "/dashboard_screenshot.png";
const img3 = "/surfboard.png";
const img4 = "/signs_hanging_in_the_hall.png";

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

const mobileDesc =
  "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.";

const desktopDesc =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

export default function ServicesSection() {
  return (
    <section data-nav-dark className="w-full bg-black px-4 py-12 md:px-8 md:py-20 flex flex-col gap-8 md:gap-12">
      {/* Section label */}
      <p style={mono}>[ Services ]</p>

      {/* Counter + heading */}
      <div
        className="flex items-center justify-between w-full"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "clamp(32px, 6.667vw, 96px)",
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

            {/* ── MOBILE: title → desc → image stacked ─────────────────── */}
            <div className="md:hidden flex flex-col gap-4 pt-1">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "36px",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </p>
              <div className="flex flex-col gap-4">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.04em",
                    color: "#ffffff",
                  }}
                >
                  {mobileDesc}
                </p>
                <div
                  className="overflow-hidden"
                  style={{ width: "151px", height: "151px" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* ── DESKTOP: title left, desc + image right ───────────────── */}
            <div className="hidden md:flex md:items-start md:justify-between pt-2">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "36px",
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
                    width: "393px",
                  }}
                >
                  {desktopDesc}
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
