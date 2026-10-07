"use client";

import { useState } from "react";
import { archiveData, ArchiveCategory } from "@/config/archive-data";
import { ArchiveCard } from "./ArchiveCard";

export function ArchiveGridSection() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>("ALL");

  const filteredPieces =
    activeCategory === "ALL"
      ? archiveData.pieces
      : archiveData.pieces.filter((piece) => piece.category === activeCategory);

  return (
    <section
      id="archive-grid"
      aria-label="Archive Collection Grid"
      className="relative w-full bg-[#09111E] text-white py-12 sm:py-16 lg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-white/5"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Minimalist Filter Navigation Bar */}
        <div className="w-full flex items-center justify-start border-b border-white/10 pb-4 mb-10 sm:mb-14 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 xs:gap-6 sm:gap-8 whitespace-nowrap">
            {archiveData.categories.map((cat, index) => {
              const isActive = activeCategory === cat;
              return (
                <div key={cat} className="flex items-center gap-4 xs:gap-6 sm:gap-8">
                  <button
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase transition-colors duration-200 pb-1 cursor-pointer focus:outline-none ${
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
          {filteredPieces.map((piece) => (
            <ArchiveCard key={piece.id} piece={piece} />
          ))}
        </div>

      </div>
    </section>
  );
}