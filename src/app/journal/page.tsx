// src/app/journal/page.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { JournalHero } from "@/components/journal/JournalHero";
import { JournalGrid } from "@/components/journal/JournalGrid";
import { JournalClosingBanner } from "@/components/journal/JournalClosingBanner";
import { journalHeroData, journalBannerData } from "@/config/journal-data";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Letters & Journal — AZOR Fine Jewelry",
  description:
    "Thoughts, stories and little notes from the world of Azor. Because there's more to jewelry than what you see.",
};

export default function JournalPage() {
  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      <Navbar />
      <JournalHero data={journalHeroData} />
      <JournalGrid />
      <JournalClosingBanner data={journalBannerData} />
      <Footer />
    </main>
  );
}