import Image from "next/image";
import Link from "next/link";
import { ArchivePiece } from "@/config/archive-data";

interface ProductShowcaseSectionProps {
  piece: ArchivePiece;
}

export function ProductShowcaseSection({ piece }: ProductShowcaseSectionProps) {
  return (
    <section
      aria-label="Piece Aesthetics and Craft"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-14 xs:py-16 sm:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-[#1B222C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-12 items-start">
        
        {/* LEFT COLUMN: THE MOOD (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col items-start space-y-3 lg:space-y-4">
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#747B86] select-none">
            THE MOOD
          </p>

          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] leading-[1.12] text-[#1B222C]">
            {piece.mood.titleLines.map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h2>

          <div className="w-6 h-[1px] bg-[#1B222C]/25 my-1" aria-hidden="true" />

          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-[#525A67] tracking-[0.02em] max-w-[280px]">
            {piece.mood.description}
          </p>
        </div>

        {/* CENTER COLUMN: THE PICTURE GALLERY (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 xs:gap-4 items-center sm:items-start justify-center">
          {/* Main Large Portrait Frame */}
          <div className="relative w-full sm:w-[68%] aspect-[4/5] overflow-hidden bg-[#070D18] shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
            <Image
              src={piece.gallery.main.src}
              alt={piece.gallery.main.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
            />
          </div>

          {/* Stacked Vertical Micro-Thumbnails */}
          <div className="flex sm:flex-col gap-3 w-full sm:w-[32%]">
            {piece.gallery.thumbnails.slice(0, 3).map((thumb, index) => (
              <div
                key={index}
                className="relative w-1/3 sm:w-full aspect-[4/5] overflow-hidden bg-[#070D18] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 120px"
                  className="object-cover object-center hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: THE ATELIER NOTE & PROMISE (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col items-start space-y-4 pt-4 lg:pt-0 border-t border-[#1B222C]/10 lg:border-t-0">
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#747B86] select-none">
            ATELIER NOTE
          </p>

          <h3 className="text-[17px] xs:text-[19px] sm:text-[21px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] text-[#1B222C] leading-snug">
            Intentionally Crafted. Designed to Endure.
          </h3>

          <div className="text-[11px] xs:text-[11.5px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-[#525A67] space-y-2.5 pt-1">
            <p>
              Each Azor artifact undergoes individual hand-inspection and diamond setting at our partner atelier.
            </p>
            <p>
              Subtle proportions engineered to rest weightless against your collarbone and hand throughout the day.
            </p>
          </div>

          {/* Signature Promise Points */}
          <div className="w-full pt-3 border-t border-[#1B222C]/10 space-y-2 text-[10px] font-[family-name:var(--font-sans)] text-[#1B222C]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#747B86]">✦</span>
              <span className="tracking-[0.1em] uppercase font-medium">Bespoke Jewelry Box Packaging</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#747B86]">✦</span>
              <span className="tracking-[0.1em] uppercase font-medium">Complimentary Insured Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#747B86]">✦</span>
              <span className="tracking-[0.1em] uppercase font-medium">Lifetime Authenticity Guarantee</span>
            </div>
          </div>

          {/* Concierge Link */}
          <div className="pt-2">
            <Link
              href="#make-it-yours"
              className="group inline-flex items-center gap-2 text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#747B86] hover:border-[#747B86] transition-colors"
            >
              <span>INQUIRE WITH STYLIST</span>
              <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}