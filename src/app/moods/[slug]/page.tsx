// src/app/moods/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { moodsData } from "@/config/moods-data";
import { Navbar } from "@/components/navigation/Navbar";
import { MoodHero } from "@/components/moods/MoodHero";
import { MoodEditorialSection } from "@/components/moods/MoodEditorialSection";
import { MoodPiecesSection } from "@/components/moods/MoodPiecesSection";
import { MoodsExploreStrip } from "@/components/moods/MoodsExploreStrip";
import { MoodClosingBanner } from "@/components/moods/MoodClosingBanner";
import { Footer } from "@/components/navigation/Footer";

interface MoodPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(moodsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MoodPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mood = moodsData[slug];

  if (!mood) {
    return { title: "Mood Not Found | AZOR" };
  }

  return {
    title: `${mood.title} — Mood | AZOR Fine Jewelry`,
    description: mood.quote,
  };
}

export default async function MoodPage({ params }: MoodPageProps) {
  const { slug } = await params;
  const mood = moodsData[slug];

  if (!mood) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      <Navbar />
      <MoodHero mood={mood} />
      <MoodEditorialSection mood={mood} />
      <MoodPiecesSection mood={mood} />
      <MoodsExploreStrip currentSlug={slug} />
      <MoodClosingBanner mood={mood} />
      <Footer />
    </main>
  );
}