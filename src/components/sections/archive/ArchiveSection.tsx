import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArchiveCard } from "./ArchiveCard";

export function ArchiveSection() {
  const { archive } = siteConfig;

  return (
    <section
      id="archive"
      aria-label="The Azor Archive"
      /* Slim panoramic banner height matching Beginning and Philosophy sections */
      className="relative w-full bg-[#EFECE6] text-[#1D232C] py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-[#E2DDD3] selection:bg-[#1D232C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Row: Title & Subtitle on Left, CTA on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col items-start space-y-1 xs:space-y-1.5">
            {/* Main Section Title */}
            <h2 className="text-2xl xs:text-3xl sm:text-[34px] md:text-[38px] lg:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] text-[#1D232C] leading-tight">
              {archive.title}
            </h2>

            {/* Subtitle Eyebrow & Description */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 pt-0.5">
              <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
                {archive.subtitle}
              </span>
              <span className="hidden sm:inline text-[#A4ACB8] text-xs" aria-hidden="true">
                •
              </span>
              <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#4E5562] tracking-[0.02em]">
                {archive.description}
              </p>
            </div>
          </div>

          {/* Right Header Action: EXPLORE ALL */}
          <div className="self-start sm:self-end pt-1 sm:pt-0">
            <Link
              href={archive.cta.href}
              className="group inline-flex items-center gap-2 text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] uppercase text-[#1D232C] border-b border-[#1D232C] pb-0.5 hover:text-[#555C68] hover:border-[#555C68] transition-colors"
            >
              <span>{archive.cta.label}</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 
          Product Grid & Mobile Horizontal Snap Rail:
          - Desktop (lg/xl/2xl): 5 balanced columns
          - Tablet (md): 3 columns
          - Mobile (sm and below): Horizontal snap rail with peek styling
        */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-3.5 xs:gap-4 sm:gap-4 lg:gap-4 xl:gap-5 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {archive.items.map((item) => (
              <div
                key={item.id}
                className="min-w-[68vw] xs:min-w-[55vw] sm:min-w-[42vw] md:min-w-0 snap-center shrink-0 md:shrink"
              >
                <ArchiveCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}