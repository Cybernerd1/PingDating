"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  X,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Briefcase,
  ChevronRight,
  Info,
} from "lucide-react";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

// Sample Profiles matching Ping's brand aesthetic
const SIMULATOR_PROFILES = [
  {
    id: "p1",
    name: "Maya Lin",
    age: 25,
    role: "Urban Architect",
    location: "Berlin / Kreuzberg",
    distance: "3 km away",
    verified: true,
    bio: "Designing quiet spaces & finding loud coffee shops. If you know where the best cinnamon roll in the city is, tell me immediately.",
    photos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=85",
    ],
    interests: ["Architecture", "Film Photography", "Espresso", "Brutalism", "Vinyl"],
    interestColors: ["#3B7BF6", "#E0911B", "#2E9E6A", "#7A4BE0", "#E2457A"],
    matchMessage: "You and Maya liked each other. Say hi first?",
    starterPrompts: [
      "Architecture debate: Brutalism or Mid-Century?",
      "I know the best hidden cinnamon roll in town...",
      "What vinyl record are you playing today?",
    ],
  },
  {
    id: "p2",
    name: "Julian Vance",
    age: 27,
    role: "Sound Designer",
    location: "Berlin / Mitte",
    distance: "5 km away",
    verified: true,
    bio: "Collecting analog synth textures, indie film scores, and late-night ramen spots. Looking for someone to trade favorite albums with.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=85",
    ],
    interests: ["Synthesizers", "Soundscapes", "Ramen", "A24 Films", "Cycling"],
    interestColors: ["#7A4BE0", "#1A9BB0", "#C9772A", "#2E9E6A", "#3B7BF6"],
    matchMessage: "You and Julian liked each other. Share a soundtrack?",
    starterPrompts: [
      "What film score gives you goosebumps?",
      "Top ramen spot recommendation?",
      "Analog synths or modular gear?",
    ],
  },
  {
    id: "p3",
    name: "Elena Ross",
    age: 26,
    role: "Ceramicist",
    location: "Berlin / Neukölln",
    distance: "2 km away",
    verified: true,
    bio: "Shaping clay by day, cooking overly ambitious pasta by night. Believer in intentional slowness and impromptu road trips.",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    ],
    interests: ["Ceramics", "Pasta Making", "Natural Wine", "Hiking", "Jazz"],
    interestColors: ["#E2457A", "#E0911B", "#7A4BE0", "#2E9E6A", "#1A9BB0"],
    matchMessage: "You and Elena connected. Say hello!",
    starterPrompts: [
      "What shape clay piece took the longest?",
      "Handmade pasta recipe recommendations?",
      "Favorite Sunday jazz record?",
    ],
  },
];

interface ChatMessage {
  id: string;
  sender: "user" | "candidate";
  text: string;
  time: string;
}

export function PingSimulatorSection() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [simulatorState, setSimulatorState] = useState<"discover" | "match" | "chat">("discover");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [swipeFeedback, setSwipeFeedback] = useState<"like" | "pass" | null>(null);

  const messageCounterRef = useRef(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentProfile = SIMULATOR_PROFILES[profileIndex] || SIMULATOR_PROFILES[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handlePass = () => {
    setSwipeFeedback("pass");
    setTimeout(() => {
      setSwipeFeedback(null);
      setPhotoIndex(0);
      setProfileIndex((prev) => (prev + 1) % SIMULATOR_PROFILES.length);
    }, 280);
  };

  const handleLike = () => {
    setSwipeFeedback("like");
    setTimeout(() => {
      setSwipeFeedback(null);
      // Trigger deterministic simulated match screen!
      setSimulatorState("match");
    }, 320);
  };

  const handleSayHello = () => {
    setMessages([
      {
        id: "m0",
        sender: "candidate",
        text: `Hey there! Loved your profile note. What are you up to today?`,
        time: "Just now",
      },
    ]);
    setSimulatorState("chat");
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `u_${messageCounterRef.current++}`,
      sender: "user",
      text,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Contextual simulated reply
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "That’s such a refreshing take! It feels like most people don’t appreciate that. Have you been around Berlin long?";
      if (text.toLowerCase().includes("brutalism") || text.toLowerCase().includes("architecture")) {
        replyText = "Brutalism has so much raw honesty! The Kulturforum concrete always blows my mind. Have you visited?";
      } else if (text.toLowerCase().includes("coffee") || text.toLowerCase().includes("roll")) {
        replyText = "Okay, hands down: The Barn on Auguststraße or Annelies. Deal: next coffee is on me if you beat that!";
      } else if (text.toLowerCase().includes("vinyl") || text.toLowerCase().includes("album")) {
        replyText = "Spinning Nils Frahm right now on analog! Perfect Sunday background. What's in your rotation?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `c_${messageCounterRef.current++}`,
          sender: "candidate",
          text: replyText,
          time: "Just now",
        },
      ]);
    }, 1100);
  };

  const handleReset = () => {
    setSimulatorState("discover");
    setProfileIndex(0);
    setPhotoIndex(0);
    setMessages([]);
    setInputValue("");
    setIsTyping(false);
  };

  // Keyboard navigation for simulator
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (simulatorState === "discover" && document.activeElement?.tagName !== "INPUT") {
        if (e.key === "ArrowLeft") handlePass();
        if (e.key === "ArrowRight") handleLike();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [simulatorState, profileIndex]);

  return (
    <section id="simulator" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      {/* Soft holographic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#D9CCF2]/35 via-[#D6EFEC]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollFade delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#9B3CF2] font-semibold">
              Live Product Experience
            </span>
          </ScrollFade>

          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016] mt-2">
            Enough about us. Try it.
          </RevealText>

          <ScrollFade delay={0.35}>
            <p className="mt-4 text-base sm:text-lg text-[#6F6A78] leading-relaxed">
              Explore the Ping experience for yourself. Swipe candidates, spark a genuine connection, and test the real-time conversation interface.
            </p>
          </ScrollFade>
        </div>

        {/* Stable Simulator Showcase: stationary device, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Left / Explanatory Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="p-6 rounded-3xl glass-panel border border-[#121016]/8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#121016]">
                  Simulator Mode
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EADCFD] text-[#7A22D6]">
                  {simulatorState === "discover" ? "Discover Deck" : simulatorState === "match" ? "Match Screen" : "Active Chat"}
                </span>
              </div>

              <p className="text-sm text-[#6F6A78] leading-relaxed">
                This is a fully reactive simulator running Ping’s client architecture without needing an account or connecting to live daters.
              </p>

              {/* Instructions list */}
              <div className="space-y-2.5 text-xs text-[#121016] pt-2 border-t border-[#121016]/8">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#9B3CF2]/10 text-[#9B3CF2] flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span><strong>Swipe or tap:</strong> Like Maya to trigger the deterministic match overlay.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#9B3CF2]/10 text-[#9B3CF2] flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span><strong>Say hello:</strong> Click &ldquo;Say hello&rdquo; to launch the conversation thread.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#9B3CF2]/10 text-[#9B3CF2] flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                  <span><strong>Type a message:</strong> Maya replies contextually in real-time.</span>
                </div>
              </div>

              {/* Simulator Action Controls */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#121016] text-[#FAF8F5] text-xs font-semibold hover:bg-[#9B3CF2] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Demo</span>
                </button>

                {simulatorState === "chat" && (
                  <button
                    type="button"
                    onClick={() => setSimulatorState("discover")}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#121016]/15 text-xs font-medium text-[#121016] hover:bg-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Deck</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick keyboard hints */}
            <div className="hidden sm:flex items-center justify-between text-xs text-[#8E8996] px-2">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#121016]/10 font-mono text-[10px]">←</kbd> Pass
                <span className="mx-1">•</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#121016]/10 font-mono text-[10px]">→</kbd> Like
              </span>
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                Local Sandbox
              </span>
            </div>
          </div>

          {/* Right / Centered Stable Smartphone Simulator (7 cols) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            {/* Phone Hardware Mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[640px] sm:h-[680px] bg-[#121016] rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(18,16,22,0.35)] border-4 border-[#2A2630] select-none">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#121016]/80 border border-white/10" />
              </div>

              {/* Phone Inner Display */}
              <div className="relative w-full h-full bg-[#F1EEF8] rounded-[38px] overflow-hidden flex flex-col font-sans">
                {/* Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-[#121016] z-30">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9B3CF2]" />
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#6F6A78]">Ping</span>
                  </div>
                </div>

                {/* VIEW 1: DISCOVER SCREEN */}
                {simulatorState === "discover" && (
                  <div className="flex-1 flex flex-col p-3 pt-1 relative overflow-hidden">
                    {/* Top deck header */}
                    <div className="flex items-center justify-between px-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <Image src="/brand/ping_icon.png" alt="Ping" width={18} height={18} />
                        <span className="font-serif font-bold text-sm tracking-tight text-[#121016]">Discover</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#6F6A78]">
                        {profileIndex + 1} of {SIMULATOR_PROFILES.length}
                      </span>
                    </div>

                    {/* Profile Card */}
                    <div className="relative flex-1 rounded-[28px] overflow-hidden bg-white shadow-md flex flex-col border border-[#121016]/6">
                      {/* Photo Area */}
                      <div className="relative h-[62%] w-full bg-[#EADCFD]">
                        <Image
                          src={currentProfile.photos[photoIndex]}
                          alt={currentProfile.name}
                          fill
                          className="object-cover object-center"
                          sizes="360px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        {/* Photo story pagination indicators */}
                        {currentProfile.photos.length > 1 && (
                          <div className="absolute top-2.5 inset-x-3 flex gap-1 z-20">
                            {currentProfile.photos.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setPhotoIndex(i)}
                                className={`h-1 flex-1 rounded-full transition-all ${
                                  photoIndex === i ? "bg-white" : "bg-white/40"
                                }`}
                                aria-label={`View photo ${i + 1}`}
                              />
                            ))}
                          </div>
                        )}

                        {/* Swipe visual feedback stamps */}
                        {swipeFeedback === "like" && (
                          <div className="absolute top-8 right-6 rotate-12 border-4 border-[#9B3CF2] text-[#9B3CF2] font-black text-2xl uppercase px-4 py-1 rounded-xl bg-white/90 backdrop-blur-sm shadow-xl animate-scale">
                            PING
                          </div>
                        )}
                        {swipeFeedback === "pass" && (
                          <div className="absolute top-8 left-6 -rotate-12 border-4 border-[#FF3B5C] text-[#FF3B5C] font-black text-2xl uppercase px-4 py-1 rounded-xl bg-white/90 backdrop-blur-sm shadow-xl animate-scale">
                            PASS
                          </div>
                        )}

                        {/* Name and distance on photo */}
                        <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-serif text-xl font-bold leading-tight">
                              {currentProfile.name}, {currentProfile.age}
                            </h3>
                            {currentProfile.verified && (
                              <CheckCircle2 className="w-4 h-4 text-[#3CCB7F] fill-[#3CCB7F]/20" />
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-[#FAF8F5]/90 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3 text-[#EADCFD]" />
                              {currentProfile.role}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#EADCFD]" />
                              {currentProfile.distance}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bio & Interest Chips */}
                      <div className="p-3.5 flex-1 flex flex-col justify-between bg-white">
                        <p className="text-xs text-[#2A2630] line-clamp-2 leading-relaxed">
                          {currentProfile.bio}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {currentProfile.interests.slice(0, 4).map((interest, idx) => (
                            <span
                              key={interest}
                              style={{ color: currentProfile.interestColors[idx] }}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F1EEF8]"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 px-4 pb-1 flex items-center justify-around">
                      <button
                        type="button"
                        onClick={handlePass}
                        className="w-13 h-13 rounded-full bg-white shadow-md border border-[#121016]/10 flex items-center justify-center text-[#FF3B5C] hover:bg-[#FF3B5C] hover:text-white transition-all active:scale-90"
                        aria-label="Pass"
                      >
                        <X className="w-6 h-6 stroke-[2.5]" />
                      </button>

                      <button
                        type="button"
                        onClick={handleLike}
                        className="w-15 h-15 rounded-full bg-gradient-to-br from-[#9B3CF2] to-[#7A22D6] shadow-lg shadow-[#9B3CF2]/30 flex items-center justify-center text-white hover:scale-105 transition-all active:scale-95"
                        aria-label="Like profile and trigger connection"
                      >
                        <Heart className="w-7 h-7 fill-white" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setPhotoIndex((p) => (p + 1) % currentProfile.photos.length)}
                        className="w-13 h-13 rounded-full bg-white shadow-md border border-[#121016]/10 flex items-center justify-center text-[#9B3CF2] hover:bg-[#EADCFD] transition-all active:scale-90"
                        aria-label="Next photo"
                      >
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* VIEW 2: DETERMINISTIC MATCH SCREEN */}
                {simulatorState === "match" && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center holo-gradient relative">
                    {/* Touching Avatars */}
                    <div className="relative flex items-center justify-center mb-6">
                      <div className="relative w-22 h-22 rounded-full overflow-hidden border-4 border-white shadow-lg -mr-4 -rotate-6 z-10">
                        <Image
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
                          alt="You"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-22 h-22 rounded-full overflow-hidden border-4 border-white shadow-lg -ml-4 rotate-6 z-10">
                        <Image
                          src={currentProfile.photos[0]}
                          alt={currentProfile.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 z-20 w-10 h-10 rounded-full bg-[#9B3CF2] border-2 border-white flex items-center justify-center text-white shadow-md animate-bounce">
                        <Heart className="w-5 h-5 fill-white" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#121016] tracking-tight">
                      Well, this could be something.
                    </h3>
                    <p className="text-xs text-[#6F6A78] mt-2 mb-6 max-w-[220px]">
                      You and {currentProfile.name.split(" ")[0]} liked each other. Say hello first?
                    </p>

                    <div className="w-full space-y-2.5">
                      <button
                        type="button"
                        onClick={handleSayHello}
                        className="w-full py-3.5 rounded-full bg-[#9B3CF2] text-white text-xs font-bold tracking-wide shadow-md hover:bg-[#7A22D6] active:scale-98 transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Say hello</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSimulatorState("discover");
                          setProfileIndex((p) => (p + 1) % SIMULATOR_PROFILES.length);
                        }}
                        className="w-full py-3 rounded-full bg-white/70 backdrop-blur-md text-[#121016] text-xs font-semibold hover:bg-white active:scale-98 transition-all"
                      >
                        Keep exploring
                      </button>
                    </div>
                  </div>
                )}

                {/* VIEW 3: INTERACTIVE CHAT SCREEN */}
                {simulatorState === "chat" && (
                  <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="px-4 py-2.5 border-b border-[#121016]/8 flex items-center justify-between bg-white/90 backdrop-blur-sm">
                      <button
                        type="button"
                        onClick={() => setSimulatorState("discover")}
                        className="p-1 -ml-1 text-[#121016] hover:text-[#9B3CF2]"
                        aria-label="Back"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#9B3CF2]/30">
                          <Image
                            src={currentProfile.photos[0]}
                            alt={currentProfile.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-[#121016] leading-none">
                            {currentProfile.name.split(" ")[0]}
                          </div>
                          <div className="flex items-center gap-1 text-[9px] text-[#3CCB7F] font-medium mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3CCB7F]" />
                            <span>Online</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="p-1 text-[#6F6A78] hover:text-[#121016]"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#FAF8F5]">
                      {/* Suggested openers */}
                      {messages.length <= 1 && (
                        <div className="mb-2 space-y-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E8996]">
                            Suggested Openers:
                          </span>
                          <div className="space-y-1">
                            {currentProfile.starterPrompts.map((prompt) => (
                              <button
                                key={prompt}
                                type="button"
                                onClick={() => handleSendMessage(prompt)}
                                className="w-full text-left text-[11px] p-2 rounded-xl bg-white border border-[#9B3CF2]/20 text-[#121016] hover:bg-[#EADCFD]/40 transition-colors flex items-center justify-between"
                              >
                                <span>{prompt}</span>
                                <ChevronRight className="w-3 h-3 text-[#9B3CF2] shrink-0" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Rendered Messages */}
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[78%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                              msg.sender === "user"
                                ? "bg-[#9B3CF2] text-white rounded-br-xs"
                                : "bg-white text-[#121016] border border-[#121016]/8 rounded-bl-xs shadow-xs"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span
                              className={`block text-[9px] mt-1 text-right ${
                                msg.sender === "user" ? "text-white/70" : "text-[#8E8996]"
                              }`}
                            >
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="px-3.5 py-2 rounded-2xl bg-white border border-[#121016]/8 rounded-bl-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9B3CF2] animate-bounce" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9B3CF2] animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9B3CF2] animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage();
                      }}
                      className="p-2 border-t border-[#121016]/8 bg-white flex items-center gap-1.5"
                    >
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Write a message..."
                        className="flex-1 px-3 py-2 text-xs bg-[#F1EEF8] rounded-full focus:outline-none focus:ring-1 focus:ring-[#9B3CF2] text-[#121016]"
                      />
                      <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="w-8 h-8 rounded-full bg-[#9B3CF2] text-white flex items-center justify-center hover:bg-[#7A22D6] disabled:opacity-40 transition-colors"
                        aria-label="Send message"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

