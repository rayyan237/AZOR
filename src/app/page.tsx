import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { BeginningSection } from "@/components/sections/beginning/BeginningSection";
import { PhilosophySection } from "@/components/sections/philosophy/PhilosophySection";
import { ArchiveSection } from "@/components/sections/archive/ArchiveSection";
import { MoodSection } from "@/components/sections/moods/MoodSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { AzorGirlSection } from "@/components/sections/girl/AzorGirlSection";
import { LettersSection } from "@/components/sections/letters/LettersSection";
import { ClosingSection } from "@/components/sections/closing/ClosingSection";
import { Footer } from "@/components/navigation/Footer";

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

        <div className="block lg:hidden h-[12vh] bg-[#EFECE6] border-b border-[#E2DDD3]" />

        <MoodSection />
        <AzorGirlSection />
        <LettersSection />
        <ClosingSection />
        <Footer />
      </main>
    </>
  );
}