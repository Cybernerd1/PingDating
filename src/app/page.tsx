import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { PingSimulatorSection } from "@/components/simulator/PingSimulatorSection";
import { ConnectionMomentSection } from "@/components/sections/ConnectionMomentSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { EarlyAccessSection } from "@/components/sections/EarlyAccessSection";
import { FaqFooterSection } from "@/components/sections/FaqFooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#EADCFD] selection:text-[#121016]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Cinematic Editorial Story */}
        <StorySection />

        {/* Section 3: The Functional Centerpiece - Interactive App Simulator */}
        <PingSimulatorSection />

        {/* Section 4: The Connection Moment - Primary Cinematic Scene */}
        <ConnectionMomentSection />

        {/* Section 5: Product Features as an Editorial Layout */}
        <FeaturesSection />

        {/* Section 6: Interactive Product Showcase */}
        <ShowcaseSection />

        {/* Section 7: Early-Access Conversion */}
        <EarlyAccessSection />

        {/* Section 8: FAQ & Minimal Luxury Footer */}
        <FaqFooterSection />
      </main>
    </div>
  );
}
