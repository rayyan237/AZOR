// src/app/journal/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lettersDetailData } from "@/config/journal-data";
import { Navbar } from "@/components/navigation/Navbar";
import { LetterDetailView } from "@/components/journal/LetterDetailView";
import { LetterDetailBanner } from "@/components/journal/LetterDetailBanner";
import { Footer } from "@/components/navigation/Footer";

interface LetterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(lettersDetailData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LetterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const letter = lettersDetailData[slug];

  if (!letter) {
    return { title: "Letter Not Found | AZOR" };
  }

  return {
    title: `${letter.title} — Azor Letters | Fine Jewelry`,
    description: letter.italicSubtitle,
  };
}

export default async function LetterPage({ params }: LetterPageProps) {
  const { slug } = await params;
  const letter = lettersDetailData[slug];

  if (!letter) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      {/* <Navbar /> */}
      <LetterDetailView letter={letter} />
      <LetterDetailBanner />
      <Footer />
    </main>
  );
}