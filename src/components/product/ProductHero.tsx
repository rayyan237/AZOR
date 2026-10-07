import Image from "next/image";
import Link from "next/link";
import { ArchivePiece } from "@/config/archive-data";

interface ProductHeroProps {
  piece: ArchivePiece;
}

export function ProductHero({ piece }: ProductHeroProps) {
  return (
    <section
      aria-label={`${piece.name} Showcase`}
      id="product-hero"
      /* Strict 100dvh viewport lock matching homepage hero */
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between pt-16 xs:pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-6 xs:pb-7 sm:pb-8 lg:pb-10 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 bg-[#09111E] select-none"
    >
      {/* Background Image Container — Raw photography without artificial filters */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px) */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={piece.heroImages.mobile || piece.image.src}
            alt={piece.image.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[70%_center] xs:object-[68%_center] select-none pointer-events-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={piece.heroImages.desktop || piece.image.src}
            alt={piece.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[65%_center] lg:object-[60%_center] xl:object-center select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Main Content Area: Centered vertically */}
      <div className="relative z-10 my-auto w-full max-w-[1440px] mx-auto">
        <div className="max-w-[320px] xs:max-w-[380px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[680px] flex flex-col items-start select-none">
          {/* Eyebrow: Item Number & Name */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[10.5px] tracking-[0.26em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-2 xs:mb-2.5 sm:mb-3.5">
            {piece.number} / {piece.name}
          </p>

          {/* Piece Display Title: Cormorant Garamond */}
          <h1 className="text-[40px] xs:text-[50px] sm:text-[64px] md:text-[74px] lg:text-[84px] xl:text-[92px] font-[family-name:var(--font-serif)] font-normal tracking-[0.05em] leading-[0.94] text-white">
            {piece.name}
          </h1>

          {/* Tagline Statement */}
          <p className="mt-2.5 xs:mt-3 sm:mt-4 text-[15px] xs:text-[18px] sm:text-[22px] md:text-[26px] font-[family-name:var(--font-serif)] italic font-normal tracking-wide text-zinc-100 leading-tight">
            {piece.tagline}
          </p>

          {/* Hairline Accent */}
          <div
            className="w-8 xs:w-10 sm:w-12 h-[1px] bg-white/40 my-3 xs:my-3.5 sm:my-4 lg:my-5"
            aria-hidden="true"
          />

          {/* Poetic Story Stanza */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-xs md:text-[12.5px] font-[family-name:var(--font-sans)] font-light tracking-[0.03em] text-zinc-300 leading-relaxed max-w-[360px] xs:max-w-[420px]">
            {piece.story}
          </p>
        </div>
      </div>

      {/* Hero Bottom Meta Controls: Back to Archive & Piece Index */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-end justify-between select-none">
        <Link
          href="/archive"
          className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-white/40"
        >
          <span className="text-xs transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase border-b border-transparent group-hover:border-white transition-all pb-0.5">
            BACK TO ARCHIVE
          </span>
        </Link>

        {/* Piece Index Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-300 text-[9px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em]">
          <span>{piece.number} / 012</span>
          <span className="w-5 sm:w-7 h-[1px] bg-white/40 block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}