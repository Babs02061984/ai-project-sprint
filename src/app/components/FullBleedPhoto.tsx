"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photo = "/guy_with_kamera.png";

export default function FullBleedPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef       = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        // Start: blurry + very slightly scaled up so blurred edges
        // are hidden by the overflow-hidden container
        { filter: "blur(24px)", scale: 1.06 },
        {
          filter: "blur(0px)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            // blur begins the moment the section enters the viewport
            start: "top bottom",
            // fully clear once the section's centre hits the viewport centre (~50% scrolled)
            end: "center center",
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      data-nav-dark
      className="w-full aspect-[3/4] md:aspect-auto md:h-[900px] overflow-hidden"
    >
      <img
        ref={imgRef}
        src={photo}
        alt=""
        className="w-full h-full object-cover object-[center_20%] md:object-center"
        style={{ willChange: "filter, transform" }}
      />
    </div>
  );
}
