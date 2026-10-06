// src/app/page.tsx
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { BeginningSection } from "@/components/sections/beginning/BeginningSection";
import { PhilosophySection } from "@/components/sections/philosophy/PhilosophySection";
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
      </main>
    </>
  );
}