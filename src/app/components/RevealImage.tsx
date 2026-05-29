"use client";

import { useRef, useEffect } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps an image with a black overlay that shrinks away left-to-right
 * as the element enters the viewport, revealing the image beneath.
 */
export default function RevealImage({
  src,
  alt = "",
  containerClassName = "",
  containerStyle,
  imgClassName = "",
}: {
  src: string;
  alt?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  imgClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 1.2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${containerClassName}`}
      style={containerStyle}
    >
      <img src={src} alt={alt} className={imgClassName} />

      {/* Black curtain — scaleX 1→0 with origin on the right so the image
          is revealed left-to-right as you scroll down */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          transformOrigin: "right center",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
