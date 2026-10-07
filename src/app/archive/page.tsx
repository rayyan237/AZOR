import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { ArchiveHero } from "@/components/archive/ArchiveHero";
import { ArchiveGridSection } from "@/components/archive/ArchiveGridSection";
import { ArchiveClosingBanner } from "@/components/archive/ArchiveClosingBanner";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "The Archive | AZOR Fine Jewelry",
  description:
    "Explore the pieces that make up the world of Azor. Delicate necklaces, sculptural earrings, timeless rings, and fine bracelets crafted with intention.",
};

export default function ArchivePage() {
  return (
    <main className="relative min-h-screen bg-[#09111E] text-white">
      <Navbar />
      <ArchiveHero />
      <ArchiveGridSection />
      <ArchiveClosingBanner />
      <Footer />
    </main>
  );
}