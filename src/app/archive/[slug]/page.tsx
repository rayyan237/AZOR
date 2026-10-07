import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { archivePieces, getPieceBySlug } from "@/config/archive-data";
import { Navbar } from "@/components/navigation/Navbar";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductShowcaseSection } from "@/components/product/ProductShowcaseSection";
import { SharedQuoteSection } from "@/components/product/SharedQuoteSection";
import { MakeItYoursSection } from "@/components/product/MakeItYoursSection";
import { ClosingSection } from "@/components/sections/closing/ClosingSection";
import { Footer } from "@/components/navigation/Footer";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return archivePieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);

  if (!piece) {
    return {
      title: "Piece Not Found | AZOR Fine Jewelry",
    };
  }

  return {
    title: `${piece.name} | AZOR Archive`,
    description: `${piece.descriptor} Handcrafted fine jewelry from the AZOR archive.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);

  if (!piece) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#09111E] text-white">
      <Navbar />
      <ProductHero piece={piece} />
      <ProductShowcaseSection piece={piece} />
      <SharedQuoteSection />
      <MakeItYoursSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}