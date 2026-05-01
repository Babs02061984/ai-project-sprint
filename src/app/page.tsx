import HeroNav from "./components/HeroNav";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import Footer from "./components/Footer";
import FullBleedPhoto from "./components/FullBleedPhoto";

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
    <>
    {/* isolation:isolate creates a local stacking context so z-index:-1 images
        are visible (behind transparent background) and mix-blend-overlay on the
        h1 blends against them rather than escaping to the page backdrop. */}
    <section
      className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8"
      style={{ isolation: "isolate" }}
    >
      {/* Background image — mobile (z:-1 so it renders below flow content) */}
      <div
        className="md:hidden absolute inset-y-0 left-0 pointer-events-none"
        style={{
          right: "-39.47%",
          zIndex: -1,
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
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
          zIndex: -1,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      >
        <img
          src={heroImageDesktop}
          alt=""
          className="absolute inset-0 w-full h-full max-w-none object-bottom"
        />
      </div>

      {/* Blur overlay — mobile, fades in from top */}
      <div
        className="md:hidden absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
        }}
      />
      {/* Blur overlay — desktop, fades in from top */}
      <div
        className="hidden md:block absolute left-0 right-0 top-[498px] h-[349px] backdrop-blur-[10px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
        }}
      />

      {/* Gradient overlay — fades hero image into white page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
        }}
      />

      {/* Nav (z-20 internally — fine, no blend needed on nav) */}
      <HeroNav />

      {/* Desktop hero body — position:relative WITHOUT z-index so no stacking
          context is created and mix-blend-overlay on h1 sees the image backdrop */}
      <div className="hidden md:flex flex-col items-center justify-center flex-1 relative">
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

      {/* Mobile hero body — same pattern, no z-index */}
      <div className="md:hidden flex flex-col justify-end flex-1 relative pb-6 gap-8">
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
              fontSize: "clamp(60px, 25.6vw, 96px)",
              fontWeight: 500,
              letterSpacing: "-0.07em",
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
    <IntroSection />
    <AboutSection />
    <FullBleedPhoto />
    <ServicesSection />
    <SelectedWorkSection />
    <TestimonialsSection />
    <LatestNewsSection />
    <Footer />
    </>
  );
}
