import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About | AZOR Fine Jewelry",
  description:
    "Jewelry should feel personal. Not just something you wear, but something you feel.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      <Navbar activeRoute="/about" />
      <AboutHero />
    </main>
  );
}