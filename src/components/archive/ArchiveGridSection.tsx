"use client";

import { useState } from "react";
import { archiveData, ArchiveCategory } from "@/config/archive-data";
import { ArchiveCard } from "./ArchiveCard";

const INITIAL_VISIBLE_COUNT = 12;
const INCREMENT_COUNT = 6;

export function ArchiveGridSection() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  const filteredPieces =
    activeCategory === "ALL"
      ? archiveData.pieces
      : archiveData.pieces.filter((piece) => piece.category === activeCategory);

  const handleCategoryChange = (category: ArchiveCategory) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const displayedPieces = filteredPieces.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPieces.length;

  return (
    <section
      id="archive-grid"
      aria-label="Archive Collection Grid"
      /* Tightened top padding so filter bar connects naturally to the hero */
      className="relative w-full bg-[#09111E] text-white pt-8 xs:pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-white/5"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Minimalist Filter Navigation Bar with Inset Border */}
        <div className="w-full flex items-center justify-start border-b border-white/10 pb-4 mb-10 sm:mb-14 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 xs:gap-6 sm:gap-8 whitespace-nowrap">
            {archiveData.categories.map((cat, index) => {
              const isActive = activeCategory === cat;
              return (
                <div key={cat} className="flex items-center gap-4 xs:gap-6 sm:gap-8">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`relative text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase transition-colors duration-200 pb-1 cursor-pointer focus:outline-none ${
                      isActive ? "text-[#F8FAFC]" : "text-[#738294] hover:text-[#C5CBD4]"
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F8FAFC]" />
                    )}
                  </button>

                  {/* Hairline Divider between categories */}
                  {index < archiveData.categories.length - 1 && (
                    <span className="text-white/15 text-[10px] font-light select-none">
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 12-Piece Product Grid (3 columns on desktop, 2 on tablet & mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 xs:gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 items-start">
          {displayedPieces.map((piece) => (
            <ArchiveCard key={piece.id} piece={piece} />
          ))}
        </div>

        {/* Future-Proof Expansion: Discover More CTA */}
        {hasMore ? (
          <div className="mt-14 sm:mt-16 md:mt-20 flex flex-col items-center justify-center space-y-3">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + INCREMENT_COUNT)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-white/20 bg-[#070D18]/80 hover:bg-white/10 hover:border-white/40 text-white transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer"
            >
              <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase">
                DISCOVER MORE
              </span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>
            <p className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-light text-[#738294] tracking-[0.16em]">
              Showing {displayedPieces.length} of {filteredPieces.length} pieces
            </p>
          </div>
        ) : (
          /* Subtle End-of-Collection Hairline Accent */
          <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
            <div className="w-8 h-[1px] bg-white/15 mb-2" aria-hidden="true" />
            <span className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] font-light text-[#738294] tracking-[0.2em] uppercase">
              End of Collection
            </span>
          </div>
        )}

      </div>
    </section>
  );
}