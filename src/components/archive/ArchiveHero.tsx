import Image from "next/image";
import { archiveData } from "@/config/archive-data";

export function ArchiveHero() {
  const { hero } = archiveData;

  return (
    <section
      aria-label="Archive Hero"
      className="relative w-full bg-[#09111E] text-white pt-28 xs:pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-10">
        
        {/* Left Column: Heading & Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-2.5 sm:space-y-3 z-10">
          <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#738294]">
            {hero.eyebrow}
          </p>

          <h1 className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.05] text-[#F8FAFC]">
            {hero.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="text-[11.5px] xs:text-[12px] sm:text-[13px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-relaxed max-w-[340px] pt-1">
            {hero.description}
          </p>

          {/* Editorial Hairline Tick */}
          <div className="w-8 h-[1px] bg-white/20 mt-3" aria-hidden="true" />
        </div>

        {/* Right Column: Natural Portrait Photography */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-[center_20%] pointer-events-none select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}