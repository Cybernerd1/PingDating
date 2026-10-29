"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

export function ConnectionMomentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const lineBeamRef = useRef<HTMLDivElement>(null);
  const messageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline pinned for a short, elegant scroll passage
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.8,
        },
      });

      // 1. Portraits converge smoothly from gentle distance
      tl.fromTo(
        leftCardRef.current,
        { x: -30, opacity: 0.7 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0
      );

      tl.fromTo(
        rightCardRef.current,
        { x: 30, opacity: 0.7 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0
      );

      // 2. Radiant connection beam pulses smoothly across the gap
      tl.fromTo(
        lineBeamRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "power2.inOut" },
        0.3
      );

      // 3. Editorial conversation fragment reveals into place
      tl.fromTo(
        messageCardRef.current,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
        0.6
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="connection"
      ref={containerRef}
      className="py-28 md:py-44 bg-[#121016] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background ambient glow stops */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-radial from-[#9B3CF2]/20 via-[#FF5C68]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <ScrollFade delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#EADCFD] font-mono">
              The Primary Cinematic Scene
            </span>
          </ScrollFade>

          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] mt-3">
            One little moment can change everything.
          </RevealText>

          <ScrollFade delay={0.35}>
            <p className="mt-5 text-base sm:text-lg text-[#8E8996] max-w-xl mx-auto font-normal leading-relaxed">
              Two lives existing in parallel until an intentional spark brings them together. A quiet glance becomes a shared morning.
            </p>
          </ScrollFade>
        </div>

        {/* Dual Portrait Kinetic Composition */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative">
            {/* Left Portrait: Julian */}
            <div
              ref={leftCardRef}
              className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border border-white/10 bg-[#1e1b24] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85"
                alt="Julian"
                fill
                className="object-cover object-center filter saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-[11px] font-mono tracking-wider text-[#D6EFEC] uppercase">
                  Echoes of Sound
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">Julian, 27</h3>
                <p className="text-xs text-[#8E8996] mt-0.5">&ldquo;Sunday morning listening sessions&rdquo;</p>
              </div>
            </div>

            {/* Right Portrait: Maya */}
            <div
              ref={rightCardRef}
              className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border border-white/10 bg-[#1e1b24] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
                alt="Maya"
                fill
                className="object-cover object-center filter saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-[11px] font-mono tracking-wider text-[#F6E3D3] uppercase">
                  Quiet Architecture
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">Maya, 25</h3>
                <p className="text-xs text-[#8E8996] mt-0.5">&ldquo;Searching for the city&apos;s quietest corners&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Central Horizontal Connection Beam */}
          <div
            ref={lineBeamRef}
            className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-[#9B3CF2] via-[#EADCFD] to-[#FF5C68] -translate-y-1/2 z-20 origin-center shadow-[0_0_15px_#9B3CF2]"
          />

          {/* Floated Message Fragment */}
          <div
            ref={messageCardRef}
            className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mt-8 md:mt-0 z-30 flex justify-center"
          >
            <div className="glass-panel-dark px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-[#9B3CF2]/40 backdrop-blur-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B3CF2] animate-ping" />
              <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                &ldquo;Are you free this Sunday?&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Minimal closing cadence */}
        <div className="text-center mt-20 text-xs font-mono text-[#8E8996] tracking-widest uppercase">
          Ping 0.1 • Mutual interest opens the door
        </div>
      </div>
    </section>
  );
}

