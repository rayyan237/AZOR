// src/components/moods/MoodPiecesSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoodData } from "@/config/moods-data";

interface MoodPiecesSectionProps {
  mood: MoodData;
}

export function MoodPiecesSection({ mood }: MoodPiecesSectionProps) {
  const { piecesSection } = mood;
  const pieces = piecesSection.pieces;

  // Track whether we are on a mobile screen (< 640px)
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile limit is 6 pieces (3 rows of 2), Desktop limit is 5 pieces (1 row of 5)
  const initialLimit = isMobile ? 6 : 5;
  const hasMore = pieces.length > initialLimit;
  const visiblePieces = isExpanded ? pieces : pieces.slice(0, initialLimit);

  return (
    <section
      id="mood-pieces"
      aria-label="Pieces in this mood"
      className="relative w-full bg-[#04070D] text-white border-b border-white/10 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col space-y-6 sm:space-y-8">
        
        {/* Section Header Row (Link Removed) */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {piecesSection.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/25" aria-hidden="true" />
          </div>
        </div>

        {/* Dynamic Responsive Grid: 2 columns on mobile, 5 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 xs:gap-4 sm:gap-5 lg:gap-6">
          {visiblePieces.map((piece) => (
            <Link
              key={piece.id}
              href={`/archive/${piece.slug}`}
              className="group flex flex-col space-y-2.5 sm:space-y-3 cursor-pointer focus:outline-none"
            >
              {/* Product Photography Square */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#070D18] border border-white/10 transition-colors duration-500 group-hover:border-white/25">
                <Image
                  src={piece.image.src}
                  alt={piece.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-0.5 text-left pt-0.5">
                <h3 className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-medium tracking-[0.16em] uppercase text-white group-hover:text-zinc-300 transition-colors">
                  {piece.title}
                </h3>
                <div className="space-y-0 text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-light leading-snug text-zinc-400">
                  {piece.descriptors.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button (Shown only when pieces exceed threshold) */}
        {hasMore && (
          <div className="flex justify-center pt-6 sm:pt-8 md:pt-10">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              type="button"
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300 focus:outline-none"
            >
              <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-zinc-300 group-hover:text-white transition-colors">
                {isExpanded ? "SHOW LESS" : "VIEW MORE PIECES"}
              </span>
              <span className="text-xs text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5">
                {isExpanded ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}