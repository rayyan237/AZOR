import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function AzorGirlSection() {
  const { azorGirl } = siteConfig;

  return (
    <section
      id="letters"
      aria-label="The Azor Girl"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#E2DDD3] py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-[#1B222C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
        
        {/* Left Column: 6-Image Micro Mosaic Collage */}
        <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0">
          <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-2.5 max-w-[420px] mx-auto lg:mx-0">
            {azorGirl.mosaic.map((item, index) => (
              <div
                key={index}
                className="relative w-full aspect-[3/4] overflow-hidden bg-[#0A0D12]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 130px"
                  className="object-cover object-center select-none pointer-events-none hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Column: Typographic Narrative */}
        <div className="w-full lg:w-[42%] xl:w-[44%] flex flex-col items-start space-y-3.5 sm:space-y-4">
          {/* Eyebrow */}
          <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#747B86] select-none">
            {azorGirl.eyebrow}
          </p>

          {/* Main Title: Cormorant Garamond stacked */}
          <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.1] text-[#1B222C]">
            {azorGirl.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Stanza */}
          <div className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-[#525A67] tracking-[0.02em] space-y-0.5 pt-0.5">
            {azorGirl.narrative.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Hairline Divider Accent */}
          <div className="w-6 h-[1px] bg-[#1B222C]/25 mt-1 sm:mt-2" aria-hidden="true" />

          {/* CTA Link */}
          <div className="pt-1">
            <Link
              href={azorGirl.cta.href}
              className="group inline-flex items-center gap-2 text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#525A67] hover:border-[#525A67] transition-colors"
            >
              <span>{azorGirl.cta.label}</span>
              <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column / Mobile Integrated Instagram Bar */}
        <div className="w-full lg:w-[20%] xl:w-[18%] flex lg:justify-end items-center pt-2 lg:pt-0">
          
          {/* DESKTOP VIEW (lg+): Vertical Hairline with Notch + Vertical Badge */}
          <div className="hidden lg:flex items-center gap-5 sm:gap-6">
            <div className="flex flex-col items-center h-28 justify-center relative">
              <div className="w-[1px] h-full bg-[#1B222C]/20" />
              <div className="absolute w-2 h-[1px] bg-[#1B222C]/30" />
            </div>

            <a
              href={azorGirl.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start select-none focus:outline-none focus:ring-1 focus:ring-black/20 rounded p-1"
              aria-label="Follow Azor on Instagram"
            >
              <SocialIcon
                platform="instagram"
                className="w-5 h-5 text-[#1B222C] group-hover:text-[#525A67] transition-colors mb-2.5"
              />
              <span className="text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] text-[#1B222C] uppercase leading-tight group-hover:text-[#525A67] transition-colors">
                {azorGirl.instagram.label}
              </span>
              <span className="text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] text-[#1B222C] uppercase leading-tight group-hover:text-[#525A67] transition-colors mt-0.5">
                {azorGirl.instagram.sublabel}
              </span>
              <span className="text-xs text-[#1B222C] group-hover:translate-x-1 transition-transform duration-300 mt-1">
                →
              </span>
            </a>
          </div>

          {/* MOBILE / TABLET VIEW (< lg): Editorial Horizontal Bar with Subtle Frame */}
          <div className="w-full lg:hidden pt-4 border-t border-[#1B222C]/15">
            <a
              href={azorGirl.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full py-2.5 px-3 bg-[#E6E2DC]/50 rounded-sm hover:bg-[#E6E2DC] transition-colors"
              aria-label="Follow Azor on Instagram"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#1B222C]/5 flex items-center justify-center">
                  <SocialIcon
                    platform="instagram"
                    className="w-4 h-4 text-[#1B222C]"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.22em] text-[#1B222C] uppercase leading-tight">
                    {azorGirl.instagram.label}
                  </span>
                  <span className="text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] text-[#525A67] uppercase leading-tight mt-0.5">
                    {azorGirl.instagram.sublabel}
                  </span>
                </div>
              </div>

              <span className="text-xs text-[#1B222C] group-hover:translate-x-1 transition-transform duration-300 pr-1">
                →
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}