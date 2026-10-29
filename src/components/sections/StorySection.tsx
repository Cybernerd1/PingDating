"use client";

import React from "react";
import Image from "next/image";
import { RevealText, RevealImage, ScrollFade } from "@/components/motion/MotionPrimitives";

export function StorySection() {
  const storyBeats = [
    {
      step: "01",
      title: "Someone catches your attention.",
      description:
        "Not a checklist. Not an algorithm trying to maximize screen time. Just a genuine expression, an unscripted moment, and a feeling that stays with you.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
      caption: "Julian • Audio producer & vinyl collector",
      tag: "The Glance",
      layout: "standard",
    },
    {
      step: "02",
      title: "You notice the little things.",
      description:
        "The worn paperback in their bag, the playlist they put on repeat on Sunday mornings, the quiet way they describe what they love. Depth over speed.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
      caption: "Elena • Ceramicist & amateur pasta maker",
      tag: "The Nuance",
      layout: "reversed",
    },
    {
      step: "03",
      title: "And suddenly, you're curious.",
      description:
        "Curiosity is where connection begins. With Ping, reaching out isn't a high-pressure gamble; it's a light tap on the shoulder. One little Ping.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=85",
      caption: "Maya • Urban architect & night runner",
      tag: "The Spark",
      layout: "standard",
    },
  ];

  return (
    <section id="story" className="py-24 md:py-36 bg-[#F3EFE8]/60 relative border-y border-[#121016]/5">
      {/* Decorative vertical editorial line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#121016]/5 hidden lg:block -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <ScrollFade delay={0.1}>
            <div className="text-xs uppercase tracking-widest text-[#9B3CF2] font-semibold mb-3">
              Editorial Narrative
            </div>
          </ScrollFade>

          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016]">
            Sometimes, it&apos;s just a glance.
          </RevealText>

          <ScrollFade delay={0.35}>
            <p className="mt-4 text-lg text-[#6F6A78] max-w-xl font-normal leading-relaxed">
              Modern dating turned people into cards to flick away. Ping restores the tactile, thoughtful cadence of falling in love with a moment.
            </p>
          </ScrollFade>
        </div>

        {/* Narrative Beats: Distinct Visual Compositions */}
        <div className="space-y-24 md:space-y-36">
          {storyBeats.map((beat) => {
            const isReversed = beat.layout === "reversed";
            return (
              <div
                key={beat.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual side */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <RevealImage delay={0.2}>
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-[28px] overflow-hidden shadow-xl border-2 border-white/60 bg-[#FAF8F5] group">
                      <Image
                        src={beat.image}
                        alt={beat.caption}
                        fill
                        className="object-cover object-center filter saturate-[1.02] contrast-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

                      {/* Image badge & caption */}
                      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white z-10">
                        <span className="font-serif text-sm tracking-wide font-medium">
                          {beat.caption}
                        </span>
                        <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md uppercase text-white/90">
                          {beat.tag}
                        </span>
                      </div>
                    </div>
                  </RevealImage>
                </div>

                {/* Narrative text side */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <ScrollFade delay={0.2} direction="down">
                    <span className="font-serif text-3xl font-light text-[#9B3CF2]/60">
                      {beat.step}
                    </span>
                  </ScrollFade>

                  <RevealText as="h3" delay={0.3} className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#121016]">
                    {beat.title}
                  </RevealText>

                  <ScrollFade delay={0.4} direction="up">
                    <p className="text-base sm:text-lg text-[#6F6A78] leading-relaxed">
                      {beat.description}
                    </p>
                  </ScrollFade>

                  <ScrollFade delay={0.5} direction="up">
                    <div className="pt-2 flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[#121016]">
                      <span className="w-8 h-[1px] bg-[#9B3CF2]" />
                      <span>The Ping Philosophy</span>
                    </div>
                  </ScrollFade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

