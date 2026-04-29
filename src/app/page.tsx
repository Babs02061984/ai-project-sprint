import HeroNav from "./components/HeroNav";

const heroImageDesktop = "https://www.figma.com/api/mcp/asset/7dac913b-2a4e-4beb-9e27-9ae3fa099203";
const heroImageMobile = "https://www.figma.com/api/mcp/asset/d04a103c-7b27-4c31-96c2-e3bdb6eaf074";

const description = (
  <p
    className="text-[#1f1f1f] text-sm uppercase leading-[1.1] tracking-[-0.04em]"
    style={{ fontFamily: "var(--font-inter)" }}
  >
    <strong className="font-bold italic">H.Studio is a </strong>
    <span className="italic font-normal">full-service</span>
    <strong className="font-bold italic">
      {" "}creative studio creating beautiful digital experiences and products.
      We are an{" "}
    </strong>
    <span className="italic font-normal">award winning</span>
    <strong className="font-bold italic">
      {" "}design and art group specializing in branding, web design and
      engineering.
    </strong>
  </p>
);

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8">

      {/* Background image — mobile */}
      <div
        className="md:hidden absolute inset-y-0 left-0 pointer-events-none"
        style={{ right: "-39.47%" }}
      >
        <img
          src={heroImageMobile}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Background image — desktop */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          left: "-34.79%",
          right: "-34.79%",
          top: "calc(50% + 88.84px)",
          transform: "translateY(-50%)",
          aspectRatio: "2291 / 1346",
        }}
      >
        <img
          src={heroImageDesktop}
          alt=""
          className="absolute inset-0 w-full h-full max-w-none object-bottom"
        />
      </div>

      {/* Backdrop blur strip — mobile (bottom) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]" />
      {/* Backdrop blur strip — desktop (mid-section) */}
      <div className="hidden md:block absolute left-0 right-0 top-[498px] h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]" />

      <HeroNav />

      {/* Desktop hero body */}
      <div className="hidden md:flex flex-col items-center justify-center flex-1 relative z-10">
        <div className="w-full" style={{ paddingBottom: "15px" }}>
          <div className="px-[18px]" style={{ marginBottom: "-15px" }}>
            <p
              className="text-white uppercase mix-blend-overlay text-sm leading-[1.1]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ Hello I&apos;m ]
            </p>
          </div>
          <h1
            className="text-center text-white capitalize mix-blend-overlay w-full whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(80px, 13.75vw, 198px)",
              fontWeight: 500,
              letterSpacing: "-0.07em",
              lineHeight: 1.1,
              marginBottom: "-15px",
            }}
          >
            Harvey&nbsp;&nbsp;&nbsp;Specter
          </h1>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-[17px] w-[294px]">
            {description}
            <button
              className="bg-black text-white text-sm font-medium px-4 py-3 rounded-full tracking-[-0.04em] w-fit"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile hero body */}
      <div className="md:hidden flex flex-col justify-between flex-1 relative z-10 pb-6">
        <div className="flex flex-col items-center">
          <p
            className="text-white uppercase mix-blend-overlay text-sm leading-[1.1] text-center"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ Hello I&apos;m ]
          </p>
          <h1
            className="text-center text-white capitalize mix-blend-overlay w-full whitespace-pre-wrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "96px",
              fontWeight: 500,
              letterSpacing: "-6.72px",
              lineHeight: 0.8,
            }}
          >
            {`Harvey   Specter`}
          </h1>
        </div>
        <div className="flex flex-col gap-[17px] w-[293px]">
          {description}
          <button
            className="bg-black text-white text-sm font-medium px-4 py-3 rounded-full tracking-[-0.04em] w-fit"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let&apos;s talk
          </button>
        </div>
      </div>

    </section>
  );
}
