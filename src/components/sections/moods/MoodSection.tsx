import { siteConfig } from "@/config/site";
import { MoodCard } from "./MoodCard";

export function MoodSection() {
  const { moods } = siteConfig;

  return (
    <section
      id="moods"
      aria-label="The Azor Mood"
      /* Slim panoramic banner height matching the Beginning and Philosophy sections */
      className="relative w-full bg-[#07090C] text-white border-b border-white/5 py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-white/20 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Block: Left-Aligned Without CTA Link */}
        <div className="flex flex-col items-start space-y-1.5 xs:space-y-2 mb-8 xs:mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow: THE AZOR MOOD */}
          <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#7E8795]">
            {moods.eyebrow}
          </p>

          {/* Section Main Title: Cormorant Garamond */}
          <h2 className="text-[26px] xs:text-[29px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-none">
            {moods.title}
          </h2>

          {/* Subtitle / Description */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#C5CBD4] tracking-[0.03em] leading-normal pt-0.5">
            {moods.description}
          </p>
        </div>

        {/* 
          Responsive Grid Architecture:
          - Mobile (< 768px): 2 balanced editorial columns with natural vertical flow
          - Tablet (768px - 1023px): 3 balanced columns
          - Desktop (1024px+): Clean 6-column single-row panoramic display
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 xs:gap-x-5 sm:gap-x-6 lg:gap-x-3.5 xl:gap-x-4 gap-y-7 xs:gap-y-8 sm:gap-y-9 lg:gap-y-0 w-full items-start">
          {moods.items.map((item) => (
            <MoodCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}