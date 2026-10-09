// src/app/journal/page.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { JournalHero } from "@/components/journal/JournalHero";
import { journalHeroData } from "@/config/journal-data";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Letters & Journal — AZOR Fine Jewelry",
  description:
    "Thoughts, stories and little notes from the world of Azor. Because there's more to jewelry than what you see.",
};

export default function JournalPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F5F1] text-[#171D26]">
      {/* Light navigation variant for sun-drenched editorial */}
      <Navbar />
      <JournalHero data={journalHeroData} />
      <Footer />
    </main>
  );
}