import Image from "next/image";
import Link from "next/link";
import { sharedQuoteSection } from "@/config/archive-data";

export function SharedQuoteSection() {
  return (
    <section
      aria-label="Brand Philosophy Stanza"
      /* Slim, balanced panoramic band matching reference */
      className="relative w-full h-[320px] xs:h-[360px] sm:h-[400px] lg:h-[420px] overflow-hidden flex items-center bg-[#09111E] text-white border-b border-white/5 select-none"
    >
      {/* Background Image Container — Raw photography without darkening masks */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sharedQuoteSection.image.src}
          alt={sharedQuoteSection.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-[65%_center] xl:object-center pointer-events-none select-none"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
        
        {/* Left Stanza Quote */}
        <div className="max-w-[320px] xs:max-w-[380px] sm:max-w-[460px]">
          <blockquote className="text-[24px] xs:text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-[family-name:var(--font-serif)] font-normal italic tracking-[0.02em] text-[#F8FAFC] leading-[1.12]">
            &ldquo;{sharedQuoteSection.quote}&rdquo;
          </blockquote>
          <div className="w-8 h-[1px] bg-white/30 mt-3" aria-hidden="true" />
        </div>

        {/* Right Archive Hub Link */}
        <div className="flex flex-col items-start md:items-end">
          <span className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#738294] mb-1">
            {sharedQuoteSection.cta.eyebrow}
          </span>
          <Link
            href={sharedQuoteSection.cta.href}
            className="group inline-flex items-center gap-2 text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors"
          >
            <span>{sharedQuoteSection.cta.label}</span>
            <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}