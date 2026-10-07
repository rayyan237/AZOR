import Image from "next/image";
import Link from "next/link";
import { ArchivePiece } from "@/config/archive-data";

interface ArchiveCardProps {
  piece: ArchivePiece;
}

export function ArchiveCard({ piece }: ArchiveCardProps) {
  return (
    <div className="flex flex-col items-start w-full group select-none">
      {/* Square Image Frame with Fine Hairline Border */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#070D18] border border-white/10 transition-all duration-500 ease-out group-hover:border-white/30 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <Image
          src={piece.image.src}
          alt={piece.image.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 28vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Item Details Stack */}
      <div className="flex flex-col items-start mt-3.5 xs:mt-4 space-y-1.5 w-full">
        {/* Number Tag: Montserrat Sans */}
        <span className="text-[9.5px] xs:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-[#738294] uppercase leading-none">
          {piece.number}
        </span>

        {/* Piece Name: Cormorant Garamond Serif (Scaled Up) */}
        <h3 className="text-[13.5px] xs:text-[14.5px] sm:text-[15.5px] font-[family-name:var(--font-serif)] font-normal tracking-[0.1em] text-[#F8FAFC] uppercase leading-tight pt-0.5">
          {piece.name}
        </h3>

        {/* Poetic Descriptor: Montserrat Sans Light (Scaled Up by One Level) */}
        <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.02em] leading-[1.5] pt-0.5 min-h-[36px]">
          {piece.descriptor}
        </p>

        {/* Discover Action */}
        <div className="pt-2">
          <Link
            href={piece.href}
            className="group/link inline-flex items-center gap-2 text-[9.5px] xs:text-[10px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-white/85 group-hover:text-white transition-colors duration-200"
          >
            <span className="border-b border-transparent group-hover/link:border-white transition-all pb-0.5">
              DISCOVER
            </span>
            <span className="text-[11px] transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}