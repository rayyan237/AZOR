import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { BeginningSection } from "@/components/sections/beginning/BeginningSection";
import { PhilosophySection } from "@/components/sections/philosophy/PhilosophySection";
import { ArchiveSection } from "@/components/sections/archive/ArchiveSection";
import { MoodSection } from "@/components/sections/moods/MoodSection";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="relative min-h-screen bg-[#07090c] text-white">
        <Navbar />
        <HeroSection />
        <BeginningSection />
        <PhilosophySection />
        <ArchiveSection />

        {/* 
          Mobile Section Transition Cushion:
          Provides 12vh of vertical pause between horizontal scroll tracks
          so users can smoothly unhook from Archive before entering Moods.
        */}
        <div className="block lg:hidden h-[12vh] bg-[#EFECE6] border-b border-[#E2DDD3]" />

        <MoodSection />
      </main>
    </>
  );
}