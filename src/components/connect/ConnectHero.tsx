// src/components/connect/ConnectHero.tsx
import Image from "next/image";
import { connectData } from "@/config/connect-data";

export function ConnectHero() {
  const { hero } = connectData;

  return (
    <section
      id="connect-hero"
      aria-label="Connect - Let's Talk"
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center bg-[#04070D] text-white select-none overflow-hidden"
    >
      {/* 
        Full-Bleed Raw Reference Photography
        - No darkening overlays
        - No gradient masks
        - Priority loaded for immediate LCP render
      */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Portrait Image (>= sm) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={hero.image.desktop.src}
            alt={hero.image.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_right] xl:object-[75%_center] select-none pointer-events-none"
          />
        </div>

        {/* Mobile Portrait Image (< sm) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={hero.image.mobile?.src || hero.image.desktop.src}
            alt={hero.image.mobile?.alt || hero.image.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_top] select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Hero Narrative Overlay: Anchored Left */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-16 sm:pt-20">
        <div className="max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] flex flex-col items-start">
          
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-zinc-300 mb-3 sm:mb-4">
            {hero.eyebrow}
          </p>

          {/* Heading in Cormorant Garamond */}
          <h1 className="text-[36px] xs:text-[42px] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[66px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.02] text-white mb-5 sm:mb-6">
            {hero.title}
          </h1>

          {/* 3-Line Italic Prompt */}
          <div className="space-y-1 sm:space-y-1.5 text-[13px] xs:text-[14px] sm:text-[15px] font-[family-name:var(--font-serif)] italic text-zinc-300/95 leading-snug">
            {hero.prompts.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Hairline Divider Tick */}
          <div
            className="w-8 sm:w-10 h-[1px] bg-white/40 mt-6 sm:mt-8"
            aria-hidden="true"
          />

        </div>
      </div>
    </section>
  );
}