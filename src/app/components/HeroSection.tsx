"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

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

export default function HeroSection({
  desktopSrc,
  mobileSrc,
}: {
  desktopSrc: string;
  mobileSrc: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  // Desktop text refs
  const dHelloRef   = useRef<HTMLParagraphElement>(null);
  const dHarveyRef  = useRef<HTMLSpanElement>(null);
  const dSpecterRef = useRef<HTMLSpanElement>(null);

  // Mobile text refs
  const mHelloRef   = useRef<HTMLParagraphElement>(null);
  const mHarveyRef  = useRef<HTMLSpanElement>(null);
  const mSpecterRef = useRef<HTMLSpanElement>(null);

  // Background image refs
  const dImgRef = useRef<HTMLImageElement>(null);
  const mImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      };

      // "Hello I'm" + Harvey exit left together
      gsap.to([dHelloRef.current, dHarveyRef.current], {
        x: "-110vw", ease: "none", scrollTrigger: trigger,
      });
      gsap.to([mHelloRef.current, mHarveyRef.current], {
        x: "-110vw", ease: "none", scrollTrigger: trigger,
      });

      // Specter exits right
      gsap.to(dSpecterRef.current, {
        x: "110vw", ease: "none", scrollTrigger: trigger,
      });
      gsap.to(mSpecterRef.current, {
        x: "110vw", ease: "none", scrollTrigger: trigger,
      });

      // Background zoom
      gsap.to([dImgRef.current, mImgRef.current], {
        scale: 1.25, ease: "none", scrollTrigger: trigger,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8"
      style={{ isolation: "isolate" }}
    >
      {/* Background image — mobile */}
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
          ref={mImgRef}
          src={mobileSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
          style={{ willChange: "transform", transformOrigin: "center center" }}
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
          ref={dImgRef}
          src={desktopSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full max-w-none object-bottom"
          style={{ willChange: "transform", transformOrigin: "center center" }}
        />
      </div>

      {/* Blur overlay — mobile */}
      <div
        className="md:hidden absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Blur overlay — desktop */}
      <div
        className="hidden md:block absolute left-0 right-0 top-[498px] h-[349px] backdrop-blur-[10px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%)",
        }}
      />

      {/* Desktop hero body */}
      <div className="hidden md:flex flex-col items-center justify-center flex-1 relative">
        <div className="w-full" style={{ paddingBottom: "15px" }}>
          <div className="px-[18px]" style={{ marginBottom: "-15px" }}>
            <p
              ref={dHelloRef}
              className="text-white uppercase mix-blend-overlay text-sm leading-[1.1]"
              style={{ fontFamily: "var(--font-geist-mono)", willChange: "transform" }}
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
            }}
          >
            {/* Harvey takes trailing spaces so they exit left with it */}
            <span ref={dHarveyRef} style={{ display: "inline-block", willChange: "transform" }}>
              Harvey&nbsp;&nbsp;&nbsp;
            </span>
            <span ref={dSpecterRef} style={{ display: "inline-block", willChange: "transform" }}>
              Specter
            </span>
          </h1>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-[17px] w-[294px]">
            {description}
            <MagneticButton>Let&apos;s talk</MagneticButton>
          </div>
        </div>
      </div>

      {/* Mobile hero body */}
      <div className="md:hidden flex flex-col justify-end flex-1 relative pb-6 gap-8">
        <div className="flex flex-col items-center">
          <p
            ref={mHelloRef}
            className="text-white uppercase mix-blend-overlay text-sm leading-[1.1] text-center"
            style={{ fontFamily: "var(--font-geist-mono)", willChange: "transform" }}
          >
            [ Hello I&apos;m ]
          </p>
          <h1
            className="text-center text-white capitalize mix-blend-overlay w-full whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(60px, 25.6vw, 96px)",
              fontWeight: 500,
              letterSpacing: "-0.07em",
              lineHeight: 0.8,
            }}
          >
            <span ref={mHarveyRef} style={{ display: "inline-block", willChange: "transform" }}>
              Harvey&nbsp;&nbsp;&nbsp;
            </span>
            <span ref={mSpecterRef} style={{ display: "inline-block", willChange: "transform" }}>
              Specter
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-[17px] w-[293px]">
          {description}
          <MagneticButton>Let&apos;s talk</MagneticButton>
        </div>
      </div>
    </section>
  );
}
