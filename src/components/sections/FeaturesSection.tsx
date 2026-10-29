"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Compass, ShieldCheck, HeartHandshake } from "lucide-react";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Oversized Typographic Statement */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <ScrollFade delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#9B3CF2] font-semibold">
              Intentional Product Design
            </span>
          </ScrollFade>

          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#121016] mt-3">
            Made for the moment after hello.
          </RevealText>

          <ScrollFade delay={0.35}>
            <p className="mt-4 text-base sm:text-lg text-[#6F6A78] max-w-xl font-normal leading-relaxed">
              Every interaction is engineered to eliminate awkward silences, decision paralysis, and dead-end conversations.
            </p>
          </ScrollFade>
        </div>

        {/* Varied Editorial Grid: Asymmetrical, Non-Uniform Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Tile 1: Oversized Photographic Feature with Discover statement (7 cols) */}
          <div className="md:col-span-7 rounded-[32px] overflow-hidden bg-[#F3EFE8] border border-[#121016]/8 relative flex flex-col justify-between p-8 sm:p-12 min-h-[440px] shadow-sm group">
            <div className="relative z-10 max-w-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5]/90 text-[#121016] backdrop-blur-md mb-4 shadow-xs">
                <Compass className="w-3.5 h-3.5 text-[#9B3CF2]" />
                Discover
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#121016] leading-tight">
                Find people who catch your attention.
              </h3>
              <p className="text-sm sm:text-base text-[#6F6A78] mt-3 leading-relaxed">
                Rich aesthetic profiles highlighting passion projects, creative interests, and personal taste. See who people actually are before you say a word.
              </p>
            </div>

            {/* Subtle background image slice */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                alt="Portrait detail"
                fill
                className="object-cover object-center filter grayscale"
              />
            </div>

            <div className="relative z-10 pt-6 flex items-center gap-4 text-xs font-mono tracking-wider text-[#121016]">
              <span className="w-6 h-[1px] bg-[#9B3CF2]" />
              <span>01 / CURATED PROFILES</span>
            </div>
          </div>

          {/* Tile 2: Cropped Profile UI Detail & Connect statement (5 cols) */}
          <div className="md:col-span-5 rounded-[32px] bg-gradient-to-br from-[#EADCFD]/50 to-[#D6EFEC]/40 border border-[#121016]/8 p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#7A22D6] shadow-xs mb-4">
                <HeartHandshake className="w-3.5 h-3.5 text-[#9B3CF2]" />
                Connect
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121016]">
                Let mutual interest open the door.
              </h3>
              <p className="text-sm text-[#6F6A78] mt-2 leading-relaxed">
                No unsolicited messages. Ping requires mutual resonance, protecting your attention and ensuring every reach-out is genuinely welcomed.
              </p>
            </div>

            {/* Cropped Authentic UI Detail */}
            <div className="mt-6 bg-white p-4 rounded-2xl shadow-md border border-[#121016]/6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#121016] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3CCB7F]" />
                  Verified Identity
                </span>
                <span className="text-[10px] text-[#8E8996] font-mono">100% human</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EADCFD] text-[#7A22D6]">
                  Curated Match
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#D6EFEC] text-[#2E9E6A]">
                  Zero Spam
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F6E3D3] text-[#E0911B]">
                  Quiet Pace
                </span>
              </div>
            </div>

            <div className="pt-4 text-xs font-mono tracking-wider text-[#121016] flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#9B3CF2]" />
              <span>02 / RECIPROCAL DISCOVERY</span>
            </div>
          </div>

          {/* Tile 3: Typographic Statement Callout (5 cols) */}
          <div className="md:col-span-5 rounded-[32px] bg-[#121016] text-[#FAF8F5] p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#EADCFD]">
                Philosophy
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl font-normal italic leading-snug text-white">
                &ldquo;Dating apps rewarded rapid thumb flicks. We built Ping to reward paying attention.&rdquo;
              </blockquote>
            </div>

            <div className="pt-8 flex items-center justify-between text-xs text-[#8E8996] border-t border-white/10">
              <span>Ping Studio Note</span>
              <span className="text-white font-mono">v1.0 Ready</span>
            </div>
          </div>

          {/* Tile 4: Compact Chat Interface Preview & Converse statement (7 cols) */}
          <div className="md:col-span-7 rounded-[32px] bg-[#FAF8F5] border border-[#121016]/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="max-w-md mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EADCFD] text-[#7A22D6] mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-[#9B3CF2]" />
                Converse
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121016]">
                Turn a little curiosity into a real conversation.
              </h3>
              <p className="text-sm text-[#6F6A78] mt-2 leading-relaxed">
                Smart icebreakers rooted in shared interests. Skip &ldquo;hey, what&apos;s up&rdquo; and dive straight into what actually excites you both.
              </p>
            </div>

            {/* Compact Chat Interface Graphic */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#121016]/8 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-[#121016]/6 pb-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#9B3CF2] text-white flex items-center justify-center font-bold text-[10px]">
                    P
                  </div>
                  <span className="font-semibold text-[#121016]">Curated Opener Prompt</span>
                </div>
                <span className="text-[10px] text-[#3CCB7F] font-semibold">Ready to send</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#121016]/6 text-xs text-[#2A2630] italic font-serif">
                &ldquo;If you had 24 hours in Lisbon with no phone, where are you wandering first?&rdquo;
              </div>
            </div>

            <div className="pt-6 text-xs font-mono tracking-wider text-[#121016] flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#9B3CF2]" />
              <span>03 / SPARK DIALOGUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

