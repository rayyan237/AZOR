import { makeItYoursData } from "@/config/archive-data";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function MakeItYoursSection() {
  return (
    <section
      id="make-it-yours"
      aria-label="Acquire and Inquire"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-10 xs:py-12 sm:py-14 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        
        {/* Left Headline & Invitation */}
        <div className="flex flex-col items-start space-y-1">
          <span className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
            {makeItYoursData.eyebrow}
          </span>
          <h2 className="text-[20px] xs:text-[23px] sm:text-[26px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] text-[#1B222C] leading-none">
            {makeItYoursData.title}
          </h2>
          <p className="text-[11px] xs:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] pt-0.5">
            {makeItYoursData.description}
          </p>
        </div>

        {/* Right Contact Actions */}
        <div className="flex flex-wrap items-center gap-3 xs:gap-4 w-full md:w-auto">
          {/* DM on Instagram */}
          <a
            href={makeItYoursData.actions.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1B222C]/20 bg-white/60 hover:bg-white hover:border-[#1B222C] text-[#1B222C] transition-all duration-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black/20"
          >
            <SocialIcon platform="instagram" className="w-3.5 h-3.5 text-[#1B222C]" />
            <span className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.2em] uppercase">
              {makeItYoursData.actions.instagram.label}
            </span>
          </a>

          {/* Chat on WhatsApp */}
          <a
            href={makeItYoursData.actions.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1B222C]/20 bg-white/60 hover:bg-white hover:border-[#1B222C] text-[#1B222C] transition-all duration-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black/20"
          >
            <SocialIcon platform="whatsapp" className="w-3.5 h-3.5 text-[#1B222C]" />
            <span className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.2em] uppercase">
              {makeItYoursData.actions.whatsapp.label}
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}