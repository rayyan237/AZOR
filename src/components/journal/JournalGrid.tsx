// src/components/journal/JournalGrid.tsx
import Image from "next/image";
import Link from "next/link";
import {
  journalArticles,
  comingSoonCard,
  JournalArticle,
} from "@/config/journal-data";

export function JournalGrid() {
  return (
    <section
      id="journal-letters"
      aria-label="Journal Letters Grid"
      className="relative w-full bg-[#F7F5F1] text-[#171D26] py-14 xs:py-16 sm:py-20 md:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-[#E3DFD7]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xs:gap-9 sm:gap-10 lg:gap-8 xl:gap-10">
          
          {/* Letters 01 through 05 */}
          {journalArticles.map((article: JournalArticle) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between h-full bg-transparent"
            >
              <div>
                {/* Image Frame */}
                <div className="relative w-full aspect-[1.5/1] overflow-hidden bg-[#04070D] border border-[#E3DFD7] mb-4 sm:mb-5">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Meta & Narrative */}
                <div className="flex flex-col items-start space-y-2 sm:space-y-2.5">
                  <span className="text-[10px] xs:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#717882]">
                    {article.number}
                  </span>

                  <h3 className="text-[20px] xs:text-[21px] sm:text-[22px] font-[family-name:var(--font-serif)] font-normal text-[#171D26] leading-[1.2] group-hover:text-black transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[12px] xs:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-[#5C6470] tracking-[0.01em] line-clamp-3 pt-0.5">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="pt-4 sm:pt-5">
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 group/link text-[10px] xs:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-[#171D26] hover:text-black focus:outline-none"
                >
                  <span>READ MORE</span>
                  <span
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}

          {/* 6th Card: Split Teaser Card (Coming Soon) */}
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="grid grid-cols-2 w-full aspect-[1.5/1] overflow-hidden border border-[#E3DFD7]">
              {/* Left Pane: Shadow Floral Photography */}
              <div className="relative w-full h-full bg-[#EFECE6]">
                <Image
                  src={comingSoonCard.image.src}
                  alt={comingSoonCard.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 17vw"
                  className="object-cover object-center select-none pointer-events-none"
                />
              </div>

              {/* Right Pane: Coming Soon Plaque */}
              <div className="w-full h-full bg-[#EBE7DF] flex flex-col items-center justify-center p-4 text-center select-none">
                <div className="space-y-1 mb-3">
                  {comingSoonCard.eyebrowLines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-[11px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-serif)] tracking-[0.2em] uppercase text-[#4A515D] leading-tight"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="w-8 h-[1px] bg-[#171D26]/20" aria-hidden="true" />
              </div>
            </div>

            {/* Bottom empty spacing to align with other cards */}
            <div className="hidden lg:block pt-5" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}