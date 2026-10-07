// src/components/archive/ArchiveCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArchivePiece } from "@/config/archive-data";

interface ArchiveCardProps {
  piece: ArchivePiece;
}

export function ArchiveCard({ piece }: ArchiveCardProps) {
  return (
    <div className="flex flex-col items-start w-full group select-none">
      {/* 
        Slight Horizontal Landscape Rectangle Frame:
        aspect-[4/3] (or aspect-[1.22/1]) matching the reference layout
      */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#070D18] border border-white/10 transition-all duration-500 ease-out group-hover:border-white/30 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <Image
          src={piece.image.src}
          alt={piece.image.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 28vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Synchronized Typographic Info Block */}
      <div className="flex flex-col items-start mt-3 xs:mt-3.5 sm:mt-4 w-full">
        {/* Number Tag: Strict 1-line height */}
        <span className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-[#738294] uppercase leading-none h-[12px] flex items-center">
          {piece.number}
        </span>

        {/* 
          Item Name / Heading:
          - Cormorant Garamond Regular
          - Strict single line lock: line-clamp-1 truncate
        */}
        <div className="w-full h-[22px] xs:h-[24px] flex items-center mt-1">
          <h3 className="w-full text-[13.5px] xs:text-[14.5px] sm:text-[15.5px] font-[family-name:var(--font-serif)] font-normal tracking-[0.1em] text-[#F8FAFC] uppercase line-clamp-1 truncate leading-none">
            {piece.name}
          </h3>
        </div>

        {/* 
          Poetic Descriptor / Sub-content:
          - Strict 2-line lock: line-clamp-2
          - Exact height fixed to 3em with leading-[1.5]
        */}
        <div className="w-full h-[3em] mt-1.5 overflow-hidden">
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.02em] leading-[1.5] line-clamp-2">
            {piece.descriptor}
          </p>
        </div>

        {/* Discover Action: Identical baseline across all cards */}
        <div className="pt-2 xs:pt-2.5">
          <Link
            href={piece.href}
            className="group/link inline-flex items-center gap-1.5 xs:gap-2 text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-white/85 group-hover:text-white transition-colors duration-200"
          >
            <span className="border-b border-transparent group-hover/link:border-white transition-all pb-0.5">
              DISCOVER
            </span>
            <span className="text-[10px] xs:text-[11px] transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}