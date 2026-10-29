"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, User, Heart, MessageCircle, ArrowUpRight, Sparkles, Check, CheckCircle2 } from "lucide-react";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

type TabKey = "discover" | "profile" | "matches" | "chat";

interface TabItem {
  id: TabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
}

const TABS: TabItem[] = [
  {
    id: "discover",
    label: "Discover",
    icon: Compass,
    tagline: "Curated profiles without sensory overload.",
    description: "Full-bleed photography, authentic prompts, and interest chips. Focus on one person at a time.",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    tagline: "A genuine portfolio of your life & taste.",
    description: "Showcase your real passions: from current reads and indie vinyl to weekend projects and travel routes.",
  },
  {
    id: "matches",
    label: "Matches",
    icon: Heart,
    tagline: "Intentional connections that never expire in silence.",
    description: "A calm, clutter-free gallery of reciprocal likes. Clear visibility into who wants to talk.",
  },
  {
    id: "chat",
    label: "Chat",
    icon: MessageCircle,
    tagline: "High-context conversation threads.",
    description: "Integrated conversation starters, rich typography, and zero spam notifications.",
  },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("discover");

  return (
    <section id="showcase" className="py-24 md:py-36 bg-[#F3EFE8]/70 relative border-t border-[#121016]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollFade delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#9B3CF2] font-semibold">
              Product Architecture
            </span>
          </ScrollFade>

          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016] mt-2">
            A closer look at Ping.
          </RevealText>

          <ScrollFade delay={0.35}>
            <p className="mt-4 text-base sm:text-lg text-[#6F6A78] leading-relaxed">
              Explore the four core surfaces of the Ping app. Designed for clarity, warmth, and genuine human connection.
            </p>
          </ScrollFade>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Product Showcase Tabs">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#121016] text-[#FAF8F5] shadow-md scale-100"
                    : "bg-white/80 text-[#6F6A78] hover:bg-white hover:text-[#121016] border border-[#121016]/6"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#EADCFD]" : "text-[#8E8996]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stationary Preview Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#121016]/8 shadow-xl">
          {/* Left Column: Tab details and interactive demo CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B3CF2]">
                Surface 0{TABS.findIndex((t) => t.id === activeTab) + 1}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#121016] mt-2">
                {TABS.find((t) => t.id === activeTab)?.tagline}
              </h3>
              <p className="text-base text-[#6F6A78] mt-3 leading-relaxed">
                {TABS.find((t) => t.id === activeTab)?.description}
              </p>
            </div>

            <div className="pt-2 space-y-3 border-t border-[#121016]/8 text-xs text-[#121016]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3CCB7F]" />
                <span>Engineered with React Native & Express backend</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3CCB7F]" />
                <span>Tactile micro-animations and holographic accents</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3CCB7F]" />
                <span>Strict privacy controls & zero dark patterns</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase px-5 py-3 rounded-full bg-[#EADCFD] text-[#7A22D6] hover:bg-[#9B3CF2] hover:text-white transition-all shadow-xs"
              >
                <span>Try the interactive demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live React-Rendered Product Preview (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[420px] rounded-3xl bg-[#FAF8F5] border-2 border-[#121016]/10 p-5 shadow-inner">
              {/* TAB 1: DISCOVER PREVIEW */}
              {activeTab === "discover" && (
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                      alt="Discover Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <div className="font-serif text-lg font-bold">Maya Lin, 25</div>
                      <div className="text-[11px] text-[#EADCFD]">Berlin • Urban Architect</div>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-[#121016]/6 space-y-2">
                    <div className="text-xs font-semibold text-[#121016]">Favorite weekend ritual</div>
                    <p className="text-xs text-[#6F6A78]">Drinking single-origin cortados while sketching Bauhaus facades.</p>
                    <div className="flex gap-1.5 pt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EADCFD] text-[#7A22D6] font-semibold">
                        Architecture
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D6EFEC] text-[#2E9E6A] font-semibold">
                        Film 35mm
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROFILE PREVIEW */}
              {activeTab === "profile" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#121016]/6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#9B3CF2]">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85"
                        alt="Profile avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-serif font-bold text-base text-[#121016]">
                        Julian Vance, 27
                        <CheckCircle2 className="w-4 h-4 text-[#3CCB7F]" />
                      </div>
                      <div className="text-xs text-[#6F6A78]">Sound Designer & Musician</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-[#121016]/6 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#9B3CF2]">Currently Playing</div>
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#121016]/5 text-xs text-[#121016] flex items-center justify-between">
                      <span>Jon Hopkins — Singularity</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#9B3CF2]" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#9B3CF2] pt-1">Passions</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F1EEF8] font-semibold text-[#121016]">Modular Synths</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F1EEF8] font-semibold text-[#121016]">Vinyl Hunting</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F1EEF8] font-semibold text-[#121016]">Cold Brew</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MATCHES PREVIEW */}
              {activeTab === "matches" && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#121016] px-1 flex items-center justify-between">
                    <span>Recent Pings</span>
                    <span className="text-[10px] text-[#3CCB7F] font-semibold">3 Mutual</span>
                  </div>

                  {[
                    { name: "Maya Lin", note: "Liked your sound design prompt", time: "2h ago", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
                    { name: "Elena Ross", note: "Wants to share a pasta recipe", time: "Yesterday", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" },
                    { name: "Clara S.", note: "Sent you a Ping!", time: "2d ago", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#121016]/6 shadow-xs">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#9B3CF2]/30">
                        <Image src={m.img} alt={m.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#121016]">{m.name}</span>
                          <span className="text-[10px] text-[#8E8996]">{m.time}</span>
                        </div>
                        <p className="text-[11px] text-[#6F6A78] truncate">{m.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: CHAT PREVIEW */}
              {activeTab === "chat" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-xl border border-[#121016]/6">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3CCB7F]" />
                    <span className="text-xs font-bold text-[#121016]">Thread with Maya</span>
                  </div>

                  <div className="space-y-2 p-3 bg-white rounded-2xl border border-[#121016]/6 min-h-[170px] flex flex-col justify-end">
                    <div className="self-start max-w-[85%] bg-[#F1EEF8] p-2.5 rounded-xl rounded-bl-xs text-xs text-[#121016]">
                      &ldquo;The Neue Nationalgalerie glass pavilion is magical in the late afternoon.&rdquo;
                    </div>
                    <div className="self-end max-w-[85%] bg-[#9B3CF2] text-white p-2.5 rounded-xl rounded-br-xs text-xs">
                      &ldquo;Let&apos;s go this Saturday! We can grab coffee first.&rdquo;
                    </div>
                    <div className="self-start text-[10px] text-[#8E8996] px-1 flex items-center gap-1">
                      <span>Maya is typing</span>
                      <span className="animate-pulse">...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

