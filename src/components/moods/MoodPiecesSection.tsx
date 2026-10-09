// src/components/moods/MoodPiecesSection.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoodData } from "@/config/moods-data";
import { archiveCatalogData } from "@/config/archive-catalog";

interface MoodPiecesSectionProps {
  mood: MoodData;
}

export function MoodPiecesSection({ mood }: MoodPiecesSectionProps) {
  const { piecesSection } = mood;

  // Safe dynamic catalog filter
  const filteredPieces = useMemo(() => {
    const targetSlug = (mood?.slug || "").toLowerCase();
    const allPieces = archiveCatalogData?.pieces || [];

    return allPieces.filter((piece: any) => {
      if (!piece.mood) return false;
      if (Array.isArray(piece.mood)) {
        return piece.mood.some(
          (m: string) => typeof m === "string" && m.toLowerCase() === targetSlug
        );
      }
      if (typeof piece.mood === "string") {
        return piece.mood.toLowerCase() === targetSlug;
      }
      return false;
    });
  }, [mood?.slug]);

  // SSR hydration-safe breakpoint check
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const initialLimit = mounted && isMobile ? 6 : 5;
  const hasMore = filteredPieces.length > initialLimit;
  const visiblePieces = isExpanded
    ? filteredPieces
    : filteredPieces.slice(0, initialLimit);

  if (filteredPieces.length === 0) {
    return null;
  }

  return (
    <section
      id="mood-pieces"
      aria-label="Pieces in this mood"
      className="relative w-full bg-[#09111E] text-white border-b border-white/10 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {piecesSection?.eyebrow || "PIECES IN THIS MOOD"}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          <span className="text-[12px] xs:text-[13px] font-[family-name:var(--font-serif)] italic text-zinc-400">
            {filteredPieces.length} {filteredPieces.length === 1 ? "Piece" : "Pieces"}
          </span>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 lg:gap-7">
          {visiblePieces.map((piece: any) => (
            <Link
              key={piece.id || piece.slug}
              href={piece.href || `/archive/${piece.slug}`}
              className="group flex flex-col space-y-3 cursor-pointer focus:outline-none"
            >
              {/* Product Photography Square */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#04070D] border border-white/10 transition-colors duration-500 group-hover:border-white/30">
                {piece.image?.src ? (
                  <Image
                    src={piece.image.src}
                    alt={piece.image.alt || piece.name || "Azor piece"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900" />
                )}
              </div>

              {/* Product Info: Scaled to Apple HIG Headline/Footnote */}
              <div className="flex flex-col space-y-1 text-left pt-0.5">
                <h3 className="text-[13px] xs:text-[13.5px] sm:text-[14px] font-[family-name:var(--font-sans)] font-medium tracking-[0.14em] uppercase text-white group-hover:text-zinc-300 transition-colors line-clamp-1">
                  {piece.name || piece.title}
                </h3>
                <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-snug text-zinc-300 line-clamp-2">
                  {piece.descriptor}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Adaptive Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-8 sm:pt-10">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              type="button"
              className="group inline-flex items-center gap-3 px-8 py-3 border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-zinc-200 group-hover:text-white transition-colors">
                {isExpanded ? "SHOW LESS" : `VIEW ALL (${filteredPieces.length})`}
              </span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5">
                {isExpanded ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}