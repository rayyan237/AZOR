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
        Slimmed panoramic height:
        Clamped between 240px (mobile) and 340px (desktop)
      */
      className="relative w-full h-[240px] xs:h-[260px] sm:h-[290px] md:h-[320px] lg:h-[340px] overflow-hidden flex items-center border-t border-b border-white/5 select-none"
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
        <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] flex flex-col items-start space-y-1 xs:space-y-1.5">
          
          {/* Eyebrow */}
          <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] lg:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#C5CBD4] leading-tight">
            {closing.eyebrow}
          </p>

          {/* Display Title: Cormorant Garamond */}
          <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-none pt-0.5">
            {closing.title}
          </h2>

          {/* Subtext Statement */}
          <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-normal pt-0.5 pb-2 xs:pb-2.5 sm:pb-3">
            {closing.description}
          </p>

          {/* Interactive Social Actions: Side-by-side */}
          <div className="flex items-center gap-4 xs:gap-5 sm:gap-6 pt-0.5">
            {/* Instagram Action */}
            <a
              href={closing.actions.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 xs:gap-2 text-white/85 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm py-0.5"
              aria-label="Follow Azor on Instagram"
            >
              <SocialIcon
                platform="instagram"
                className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white/90 group-hover:text-white transition-colors"
              />
              <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase border-b border-transparent group-hover:border-white transition-all">
                {closing.actions.instagram.label}
              </span>
            </a>

            {/* WhatsApp Action */}
            <a
              href={closing.actions.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 xs:gap-2 text-white/85 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm py-0.5"
              aria-label="Chat with Azor on WhatsApp"
            >
              <SocialIcon
                platform="whatsapp"
                className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white/90 group-hover:text-white transition-colors"
              />
              <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase border-b border-transparent group-hover:border-white transition-all">
                {closing.actions.whatsapp.label}
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}