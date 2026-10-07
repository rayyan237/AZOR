import Image from "next/image";
import Link from "next/link";
import { archiveData } from "@/config/archive-data";

export function ArchiveClosingBanner() {
  const { closingBanner } = archiveData;

  return (
    <section
      aria-label="Archive Statement"
      className="relative w-full bg-[#09111E] text-white border-b border-white/5 py-14 sm:py-16 md:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        
        {/* Left Column: Heading & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-2 xs:space-y-2.5">
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#738294]">
            {closingBanner.eyebrow}
          </p>

          <h2 className="text-[24px] xs:text-[28px] sm:text-[34px] md:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-tight text-[#F8FAFC]">
            {closingBanner.title}
          </h2>

          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-relaxed max-w-[360px] pt-0.5">
            {closingBanner.description}
          </p>

          <div className="pt-4">
            <Link
              href={closingBanner.cta.href}
              className="group inline-flex items-center gap-2 text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-[#F8FAFC] border-b border-[#F8FAFC] pb-0.5 hover:text-[#94A3B8] hover:border-[#94A3B8] transition-colors"
            >
              <span>{closingBanner.cta.label}</span>
              <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Embossed Azor Box Photography */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[16/10] overflow-hidden bg-[#070D18] border border-white/10">
            <Image
              src={closingBanner.image.src}
              alt={closingBanner.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-center pointer-events-none select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}