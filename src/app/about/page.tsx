import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStorySection } from "@/components/about/OurStorySection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { WhyAzorSection } from "@/components/about/WhyAzorSection";
import { AboutClosingSection } from "@/components/about/AboutClosingSection";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "About | AZOR Fine Jewelry",
  description:
    "Jewelry should feel personal. Not just something you wear, but something you feel.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      <Navbar />
      <AboutHero />
      <OurStorySection />
      <PhilosophySection />
      <WhyAzorSection />
      <AboutClosingSection />
      <Footer />
    </main>
  );
}