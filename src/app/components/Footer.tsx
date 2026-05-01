import type { CSSProperties } from "react";

const socialStyle: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  textTransform: "uppercase",
  color: "#fff",
};

const legalStyle: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  textTransform: "uppercase",
  color: "#fff",
};

const monoSm: CSSProperties = {
  fontFamily: "var(--font-geist-mono)",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#fff",
  textTransform: "uppercase",
};

function Tagline() {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "24px",
        letterSpacing: "-0.04em",
        lineHeight: 1.1,
        textTransform: "uppercase",
        color: "#fff",
      }}
    >
      Have a{" "}
      <strong style={{ fontWeight: 900, fontStyle: "normal" }}>project</strong>
      {" "}in mind?
    </p>
  );
}

function TalkButton() {
  return (
    <button
      className="border border-white text-white rounded-full w-fit"
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
  );
}

export default function Footer() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────────────── */}
      <footer className="md:hidden bg-black pt-12 px-4 flex flex-col gap-12">
        {/* Top */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            {/* CTA */}
            <div className="flex flex-col gap-3">
              <Tagline />
              <TalkButton />
            </div>
            {/* Social links */}
            {["Facebook", "Instagram", "X.com", "Linkedin"].map((s) => (
              <p key={s} style={socialStyle}>{s}</p>
            ))}
          </div>
          <div className="w-full border-t border-white/30" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="flex gap-8 justify-center">
            <p className="underline" style={legalStyle}>Licences</p>
            <p className="underline" style={legalStyle}>Privacy policy</p>
          </div>
          <p style={{ ...monoSm, fontSize: "10px" }}>[ Coded by Claude ]</p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "91px",
              letterSpacing: "-0.06em",
              lineHeight: 0.8,
              textTransform: "capitalize",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            H.Studio
          </p>
        </div>
      </footer>

      {/* ── DESKTOP ────────────────────────────────────────────────────── */}
      <footer className="hidden md:flex bg-black pt-12 px-8 flex-col gap-[120px]">
        {/* Top: CTA — social center — social right + divider */}
        <div className="flex flex-col gap-12 w-full">
          <div className="flex items-start justify-between w-full">
            {/* Left */}
            <div className="flex flex-col gap-3 w-[298px]">
              <Tagline />
              <TalkButton />
            </div>
            {/* Center */}
            <div className="w-[298px] text-center">
              <p style={socialStyle}>Facebook</p>
              <p style={socialStyle}>Instagram</p>
            </div>
            {/* Right */}
            <div className="w-[298px] text-right">
              <p style={socialStyle}>X.com</p>
              <p style={socialStyle}>Linkedin</p>
            </div>
          </div>
          <div className="w-full border-t border-white/30" />
        </div>

        {/* Bottom: H.Studio + legal */}
        <div className="flex items-end justify-between w-full">
          {/* H.Studio clipped container */}
          <div
            className="relative overflow-hidden shrink-0"
            style={{ width: "1093px", height: "219px" }}
          >
            {/* [ Coded By Claude ] — rotated label, far left */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 0, top: "50%", transform: "translateY(-50%)", width: "15px", height: "160px" }}
            >
              <p style={{ ...monoSm, fontSize: "14px", transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
                [ Coded By Claude ]
              </p>
            </div>
            {/* Giant H.Studio */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "290px",
                letterSpacing: "-0.06em",
                lineHeight: 0.8,
                textTransform: "capitalize",
                color: "#fff",
                whiteSpace: "nowrap",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, calc(-50% + 6.5px))",
              }}
            >
              H.Studio
            </p>
          </div>

          {/* Legal links — bottom-aligned */}
          <div className="flex gap-[34px] items-center pb-8 shrink-0">
            <p className="underline" style={legalStyle}>Licences</p>
            <p className="underline" style={legalStyle}>Privacy policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
