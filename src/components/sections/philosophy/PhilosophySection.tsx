import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PhilosophySection() {
  const { philosophy } = siteConfig;

  return (
    <section
      id="about"
      aria-label="Our Philosophy"
      /*
        Responsive Height Strategy:
        - Mobile: auto-height with min-h-[380px] to accommodate content cleanly
        - Tablet (md): min-h-[440px]
        - Laptop (lg): min-h-[480px] matching BeginningSection compact ratio
        - Desktop / Ultra-wide (xl/2xl): min-h-[520px] max-h-[600px]
      */
      className="relative w-full min-h-[380px] xs:min-h-[420px] sm:min-h-[440px] md:min-h-[460px] lg:min-h-[490px] xl:min-h-[520px] 2xl:min-h-[540px] overflow-hidden flex items-center py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-24 border-b border-white/5"
    >
      {/* Background Image Container — Raw image without artificial darkening filters */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Crop (< 768px): Focuses on model profile and jewelry on the right */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={philosophy.images.mobile.src}
            alt={philosophy.images.mobile.alt}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[78%_center] xs:object-[82%_center] sm:object-[85%_center] select-none pointer-events-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px): Cinematic landscape crop */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={philosophy.images.desktop.src}
            alt={philosophy.images.desktop.alt}
            fill
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[82%_center] lg:object-[86%_center] xl:object-[88%_center] 2xl:object-[center_35%] select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Content Container: Aligned with grid standards from BeginningSection */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto">
        <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[500px] flex flex-col items-start space-y-3.5 xs:space-y-4 sm:space-y-5">
          {/* Eyebrow: Scaled tracking and size per device */}
          <p className="text-[9px] xs:text-[10px] sm:text-[10.5px] md:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] xs:tracking-[0.26em] sm:tracking-[0.28em] uppercase text-zinc-400 select-none">
            {philosophy.eyebrow}
          </p>

          {/* Section Main Title: Fluid scaling with Cormorant Garamond */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-white">
            {philosophy.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Stanza: Proportional line-height and font clamp */}
          <div className="text-[11px] xs:text-[11.5px] sm:text-[12px] md:text-[12.5px] lg:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.7] xs:leading-[1.75] sm:leading-[1.8] text-zinc-300 space-y-0.5 pt-0.5">
            {philosophy.narrative.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Minimal Divider Accent */}
          <div
            className="w-6 sm:w-7 h-[1px] bg-white/35 mt-1 sm:mt-2 mb-0.5"
            aria-hidden="true"
          />

          {/* CTA Link */}
          <div className="pt-0.5">
            <Link
              href={philosophy.cta.href}
              className="group inline-flex items-center gap-2 xs:gap-2.5 text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] xs:tracking-[0.24em] uppercase text-white border-b border-white pb-0.5 sm:pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
            >
              <span>{philosophy.cta.label}</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}