"use client";

import Image from "next/image";
import { aboutData } from "@/config/about-data";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

export function AboutHero() {
  const { hero } = aboutData;
  const { lenis } = useLenis();

  const handleScrollClick = () => {
    const nextSection = document.getElementById("our-story");
    if (nextSection) {
      if (lenis) {
        lenis.scrollTo(nextSection, { duration: 1.5 });
      } else {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="about-hero"
      aria-label="About Azor Hero"
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between pt-16 xs:pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-6 xs:pb-7 sm:pb-8 lg:pb-10 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 bg-[#04070D] select-none"
    >
      {/* Background Image Container — Raw photography without artificial filters */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px) */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={hero.images.mobile?.src || hero.images.desktop.src}
            alt={hero.images.mobile?.alt || hero.images.desktop.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[78%_center] xs:object-[75%_center] select-none pointer-events-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={hero.images.desktop.src}
            alt={hero.images.desktop.alt}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[70%_center] lg:object-[65%_center] xl:object-center select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Main Content Area: Vertically Centered */}
      <div className="relative z-10 my-auto w-full max-w-[1440px] mx-auto">
        <div className="max-w-[320px] xs:max-w-[380px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[680px] flex flex-col items-start select-none">
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[10.5px] tracking-[0.26em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-2.5 xs:mb-3 sm:mb-4">
            {hero.eyebrow}
          </p>

          {/* Display Title: Cormorant Garamond */}
          <h1 className="text-[38px] xs:text-[46px] sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[84px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] leading-[0.96] text-white">
            {hero.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Italic Quote Lines */}
          <div className="mt-3 xs:mt-3.5 sm:mt-4 text-[15px] xs:text-[17px] sm:text-[20px] md:text-[23px] font-[family-name:var(--font-serif)] italic font-normal tracking-wide text-zinc-100 leading-tight">
            {hero.italicQuoteLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Hairline Divider Accent */}
          <div
            className="w-8 xs:w-10 sm:w-12 h-[1px] bg-white/40 my-3 xs:my-3.5 sm:my-4 lg:my-5"
            aria-hidden="true"
          />

          {/* Narrative Body Copy */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-xs md:text-[12.5px] font-[family-name:var(--font-sans)] font-light tracking-[0.025em] text-zinc-300 leading-relaxed max-w-[340px] xs:max-w-[400px]">
            {hero.description}
          </p>
        </div>
      </div>

      {/* Hero Bottom Meta Controls: Bottom Right SCROLL Indicator */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-end justify-end select-none">
        <button
          type="button"
          onClick={handleScrollClick}
          className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none"
          aria-label="Scroll to our story"
        >
          <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase border-b border-transparent group-hover:border-white transition-all pb-0.5">
            {hero.ctaScroll}
          </span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </button>
      </div>
    </section>
  );
}