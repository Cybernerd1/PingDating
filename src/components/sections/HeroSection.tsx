"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, MessageCircle, Heart, Compass } from "lucide-react";
import { RevealText, RevealImage, ScrollFade, InteractiveButton } from "@/components/motion/MotionPrimitives";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-12 right-0 -z-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#EADCFD]/45 via-[#D6EFEC]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] -z-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#F6E3D3]/40 via-[#DCE6F8]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Editorial Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Oversized Editorial Typography & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Status Pill */}
            <ScrollFade delay={0.1} direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#121016]/8 shadow-xs text-xs font-medium text-[#6F6A78]">
                <span className="w-2 h-2 rounded-full bg-[#9B3CF2] animate-ping" />
                <span className="font-semibold text-[#121016]">Ping Beta</span>
                <span>—</span>
                <span>Private release launching soon</span>
              </div>
            </ScrollFade>

            {/* Main Headline */}
            <div className="space-y-1">
              <RevealText as="h1" delay={0.2} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-[#121016]">
                Somewhere between
              </RevealText>
              <RevealText as="h1" delay={0.35} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-[#9B3CF2] italic">
                a glance and a hello.
              </RevealText>
            </div>

            {/* Supporting Copy */}
            <ScrollFade delay={0.5} direction="up">
              <p className="text-lg sm:text-xl text-[#6F6A78] max-w-xl font-normal leading-relaxed">
                Meet <strong className="text-[#121016] font-semibold">Ping</strong>. A new way to discover people and start conversations worth having. No endless swiping loops—just genuine curiosity and quiet chemistry.
              </p>
            </ScrollFade>

            {/* Call to Actions */}
            <ScrollFade delay={0.65} direction="up">
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#early-access">
                  <InteractiveButton
                    variant="primary"
                    className="px-8 py-4 text-base font-semibold gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>Get early access</span>
                    <ArrowRight className="w-4 h-4" />
                  </InteractiveButton>
                </a>

                <a href="#simulator">
                  <InteractiveButton
                    variant="glass"
                    className="px-7 py-4 text-base font-medium gap-2 text-[#121016] hover:bg-white transition-all"
                  >
                    <Compass className="w-4 h-4 text-[#9B3CF2]" />
                    <span>Explore Ping</span>
                  </InteractiveButton>
                </a>
              </div>
            </ScrollFade>

            {/* Campaign Credo / Micro Editorial note */}
            <ScrollFade delay={0.8} direction="up">
              <div className="pt-4 flex items-center gap-6 text-xs text-[#8E8996] border-t border-[#121016]/8 max-w-md">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9B3CF2]" />
                  <span>Curated Discovery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#FF5C68]" />
                  <span>Mutual Intent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#3CCB7F]" />
                  <span>Contextual Chat</span>
                </div>
              </div>
            </ScrollFade>
          </div>

          {/* Right Column: Art-Directed Photographic Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <RevealImage delay={0.3} className="relative z-10">
              {/* Primary art portrait */}
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#F3EFE8]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Editorial portrait for Ping"
                  fill
                  priority
                  className="object-cover object-center filter saturate-[1.03] contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle tag on image */}
                <div className="absolute bottom-5 left-5 text-white z-20">
                  <div className="text-[11px] uppercase tracking-widest text-[#EADCFD] font-mono">
                    Candidate 01 • Berlin
                  </div>
                  <div className="font-serif text-xl font-medium">
                    Maya, 25 <span className="font-sans text-xs font-normal opacity-85">Architect</span>
                  </div>
                </div>
              </div>
            </RevealImage>

            {/* Overlapping Authentic Ping UI Detail: Floating Micro Pill */}
            <ScrollFade delay={0.6} direction="left" className="absolute -bottom-6 -left-6 sm:-left-10 z-20">
              <div className="glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[280px]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9B3CF2] to-[#7A22D6] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#FAF8F5]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#121016]">
                    <span>Ping Sent</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3CCB7F]" />
                  </div>
                  <p className="text-[12px] text-[#6F6A78] leading-tight mt-0.5 font-normal">
                    &ldquo;Loved your note on brutalist architecture&rdquo;
                  </p>
                </div>
              </div>
            </ScrollFade>

            {/* Secondary Overlapping Accent Card: Curiosity Indicator */}
            <ScrollFade delay={0.75} direction="right" className="absolute -top-6 -right-4 sm:-right-8 z-20">
              <div className="glass-panel px-3.5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 border border-white/90">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5C68] animate-pulse" />
                <span className="text-xs font-medium text-[#121016]">
                  A new possibility
                </span>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
}

