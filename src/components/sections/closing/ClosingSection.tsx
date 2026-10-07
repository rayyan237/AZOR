import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function ClosingSection() {
  const { closing } = siteConfig;

  return (
    <section
      id="connect"
      aria-label="Connect with Azor"
      /* 
        Slim panoramic section height:
        Clamped between 320px and 420px on desktop to maintain matching proportions
      */
      className="relative w-full h-[320px] xs:h-[350px] sm:h-[380px] lg:h-[400px] xl:h-[420px] overflow-hidden flex items-center border-t border-b border-white/5 select-none"
    >
      {/* Background Image Container — Raw image without artificial darkening filters */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px) */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={closing.images.mobile?.src || closing.images.desktop.src}
            alt={closing.images.mobile?.alt || closing.images.desktop.alt}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[78%_center] xs:object-[75%_center] pointer-events-none select-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={closing.images.desktop.src}
            alt={closing.images.desktop.alt}
            fill
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[65%_center] lg:object-[60%_center] xl:object-center pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <div className="max-w-[300px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[480px] flex flex-col items-start space-y-1.5 xs:space-y-2">
          
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] lg:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#C5CBD4] leading-tight">
            {closing.eyebrow}
          </p>

          {/* Display Title: Cormorant Garamond */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-none pt-0.5">
            {closing.title}
          </h2>

          {/* Subtext Statement */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] lg:text-[12.5px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-normal pt-0.5 pb-3 xs:pb-4 sm:pb-5">
            {closing.description}
          </p>

          {/* Interactive Social Actions: Side-by-side on all screens */}
          <div className="flex items-center gap-5 xs:gap-6 sm:gap-7 pt-1">
            {/* Instagram Action */}
            <a
              href={closing.actions.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm py-1"
              aria-label="Follow Azor on Instagram"
            >
              <SocialIcon
                platform="instagram"
                className="w-4 h-4 text-white/90 group-hover:text-white transition-colors"
              />
              <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase border-b border-transparent group-hover:border-white transition-all">
                {closing.actions.instagram.label}
              </span>
            </a>

            {/* WhatsApp Action */}
            <a
              href={closing.actions.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm py-1"
              aria-label="Chat with Azor on WhatsApp"
            >
              <SocialIcon
                platform="whatsapp"
                className="w-4 h-4 text-white/90 group-hover:text-white transition-colors"
              />
              <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase border-b border-transparent group-hover:border-white transition-all">
                {closing.actions.whatsapp.label}
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}