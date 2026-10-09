// src/components/journal/LetterDetailView.tsx
import Image from "next/image";
import Link from "next/link";
import { LetterArticleData } from "@/config/journal-data";

interface LetterDetailViewProps {
  letter: LetterArticleData;
}

export function LetterDetailView({ letter }: LetterDetailViewProps) {
  return (
    <article
      id="letter-content"
      aria-label={letter.title}
      className="relative w-full bg-[#F7F5F1] text-[#171D26] overflow-hidden select-none border-b border-[#E3DFD7]"
    >
      <div className="max-w-[1440px] mx-auto min-h-[calc(100dvh-5rem)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* ================= LEFT COLUMN: READING ESSAY ================= */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14">
          <div className="flex flex-col items-start max-w-[480px]">
            {/* Eyebrow + Hairline Rule */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#717882]">
                {letter.number}
              </span>
              <span className="w-10 sm:w-12 h-[1px] bg-[#171D26]/25" aria-hidden="true" />
            </div>

            {/* Title in Cormorant Garamond */}
            <h1 className="text-[26px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-[family-name:var(--font-serif)] font-normal tracking-[0.02em] leading-[1.08] text-[#171D26] mb-3.5 sm:mb-4">
              {letter.title}
            </h1>

            {/* Subtitle in Italic Serif */}
            <p className="text-[14px] xs:text-[15px] sm:text-[16px] font-[family-name:var(--font-serif)] italic text-[#4A525E] leading-snug tracking-wide mb-5 sm:mb-6">
              {letter.italicSubtitle}
            </p>

            {/* Hairline Separator */}
            <div className="w-9 h-[1px] bg-[#171D26]/25 mb-5 sm:mb-6" aria-hidden="true" />

            {/* Essay Paragraphs */}
            <div className="space-y-4 text-[12px] xs:text-[12.5px] sm:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.7] text-[#555D68] tracking-[0.015em]">
              {letter.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* AZOR Signature */}
            <p className="text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-[#171D26] mt-6 sm:mt-7">
              {letter.signature}
            </p>
          </div>

          {/* Bottom Back Navigation */}
          <div className="pt-10 sm:pt-12">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-[10px] xs:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-[#717882] hover:text-[#171D26] transition-colors focus:outline-none"
            >
              <span
                className="transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              >
                ←
              </span>
              <span>BACK TO LETTERS</span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL PHOTOGRAPHY ================= */}
        <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] xs:min-h-[440px] sm:min-h-[500px] lg:min-h-full bg-[#04070D] border-t lg:border-t-0 lg:border-l border-[#E3DFD7]">
          {/* Desktop Image */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src={letter.image.desktop.src}
              alt={letter.image.desktop.alt}
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center select-none pointer-events-none"
            />
          </div>

          {/* Mobile Image */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src={letter.image.mobile?.src || letter.image.desktop.src}
              alt={letter.image.mobile?.alt || letter.image.desktop.alt}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center select-none pointer-events-none"
            />
          </div>
        </div>

      </div>
    </article>
  );
}