// src/components/archive/ArchiveCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArchivePieceDetail } from "@/config/archive-data";

// Lightweight catalog item definition (from archiveData.pieces)
export interface ArchiveCardItem {
  id: string;
  slug?: string;
  number: string;
  name: string;
  descriptor?: string;
  tagline?: string;
  story?: string;
  href?: string;
  category?: string;
  image?: {
    src: string;
    alt: string;
  };
  gallery?: {
    main?: { src: string; alt: string };
    thumbnails?: { src: string; alt: string }[];
  };
  heroImages?: {
    desktop?: string;
    mobile?: string;
  };
}

// Accepts either the catalog summary item OR the full detail object
interface ArchiveCardProps {
  piece: ArchivePieceDetail | ArchiveCardItem;
}

export function ArchiveCard({ piece }: ArchiveCardProps) {
  // Extract image cleanly from either schema
  const imageSrc =
    ("image" in piece && piece.image?.src) ||
    ("gallery" in piece && piece.gallery?.main?.src) ||
    ("heroImages" in piece && piece.heroImages?.desktop) ||
    "";

  const imageAlt =
    ("image" in piece && piece.image?.alt) ||
    ("gallery" in piece && piece.gallery?.main?.alt) ||
    piece.name;

  // Extract link cleanly
  const targetHref =
    ("href" in piece && piece.href) ||
    (piece.slug ? `/archive/${piece.slug}` : `/archive/${piece.id}`);

  // Extract descriptor cleanly
  const descriptorText =
    ("descriptor" in piece && piece.descriptor) ||
    ("tagline" in piece && piece.tagline) ||
    ("story" in piece && piece.story) ||
    "";

  return (
    <div className="flex flex-col items-start w-full group select-none">
      {/* 
        Slight Horizontal Landscape Rectangle Frame:
        aspect-[4/3] matching the reference layout
      */}
      <Link
        href={targetHref}
        className="relative w-full aspect-[4/3] overflow-hidden bg-[#070D18] border border-white/10 transition-all duration-500 ease-out group-hover:border-white/30 shadow-[0_6px_24px_rgba(0,0,0,0.35)] block focus:outline-none"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 28vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>

      {/* Synchronized Typographic Info Block */}
      <div className="flex flex-col items-start mt-3 xs:mt-3.5 sm:mt-4 w-full">
        {/* Number Tag */}
        <span className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-[#738294] uppercase leading-none h-[12px] flex items-center">
          {piece.number}
        </span>

        {/* Item Name / Heading */}
        <div className="w-full h-[22px] xs:h-[24px] flex items-center mt-1">
          <Link href={targetHref} className="w-full focus:outline-none">
            <h3 className="w-full text-[13.5px] xs:text-[14.5px] sm:text-[15.5px] font-[family-name:var(--font-serif)] font-normal tracking-[0.1em] text-[#F8FAFC] uppercase line-clamp-1 truncate leading-none group-hover:text-white transition-colors">
              {piece.name}
            </h3>
          </Link>
        </div>

        {/* Poetic Descriptor */}
        <div className="w-full h-[3em] mt-1.5 overflow-hidden">
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.02em] leading-[1.5] line-clamp-2">
            {descriptorText}
          </p>
        </div>

        {/* Discover Action */}
        <div className="pt-2 xs:pt-2.5">
          <Link
            href={targetHref}
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