// src/components/archive/ArchiveClosingBanner.tsx
import Image from "next/image";
import Link from "next/link";
import { archiveData } from "@/config/archive-data";

export function ArchiveClosingBanner() {
  const { closingBanner } = archiveData;

  return (
    <section
      id="archive-closing"
      aria-label="Archive Collection Closing Statement"
      /* Slim panoramic banner height matching ClosingSection */
      className="relative w-full h-[260px] xs:h-[280px] sm:h-[310px] md:h-[340px] lg:h-[360px] overflow-hidden flex items-center border-t border-b border-white/5 select-none"
    >
      {/* Background Image Container — Raw image without artificial darkening filters */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px): Focused on box and silk folds */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={closingBanner.images.mobile?.src || closingBanner.images.desktop.src}
            alt={closingBanner.images.mobile?.alt || closingBanner.images.desktop.alt}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[82%_center] xs:object-[80%_center] pointer-events-none select-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px): Wide landscape showing angled Azor box */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={closingBanner.images.desktop.src}
            alt={closingBanner.images.desktop.alt}
            fill
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[70%_center] lg:object-[65%_center] xl:object-center pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <div className="max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] md:max-w-[540px] flex flex-col items-start space-y-1.5 xs:space-y-2">
          
          {/* Eyebrow: Montserrat Medium */}
          <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] lg:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#C5CBD4] leading-tight">
            {closingBanner.eyebrow}
          </p>

          {/* Display Title: Cormorant Garamond 2-Line Stack */}
          <h2 className="text-[20px] xs:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-[1.08] pt-0.5">
            {closingBanner.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Subtext Statement: Montserrat Light */}
          <div className="text-[11px] xs:text-[11.5px] sm:text-[12px] lg:text-[12.5px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-relaxed pt-0.5 pb-2.5 xs:pb-3 sm:pb-3.5 space-y-0.5">
            <p>{closingBanner.statement1}</p>
            <p>{closingBanner.statement2}</p>
          </div>

          {/* Action: Editorial EXPLORE ALL Link */}
          {/* <div className="pt-0.5">
            <Link
              href={closingBanner.cta.href}
              className="group inline-flex items-center gap-2 text-[9.5px] xs:text-[10px] sm:text-[10.5px] lg:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm py-0.5"
            >
              <span className="border-b border-transparent group-hover:border-white transition-all pb-0.5">
                {closingBanner.cta.label}
              </span>
              <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div> */}

        </div>
      </div>
    </section>
  );
}