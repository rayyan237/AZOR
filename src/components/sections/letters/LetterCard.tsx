import Image from "next/image";
import Link from "next/link";
import { LetterItem } from "@/config/site";

interface LetterCardProps {
  item: LetterItem;
}

export function LetterCard({ item }: LetterCardProps) {
  return (
    <Link
      href={item.href}
      className="group flex flex-col items-start w-full select-none text-left focus:outline-none focus:ring-1 focus:ring-black/20"
      aria-label={`${item.tag}: ${item.title}`}
    >
      {/* 4:5 Portrait Image Frame */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0A0D12] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 24vw, 180px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Typography Stack Below Image */}
      <div className="flex flex-col items-start mt-2.5 xs:mt-3 sm:mt-3.5 space-y-1">
        {/* Letter Tag */}
        <span className="text-[8px] xs:text-[8.5px] sm:text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-[#747B86] uppercase leading-tight">
          {item.tag}
        </span>

        {/* Story Title */}
        <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-light text-[#1B222C] tracking-[0.015em] leading-[1.4] transition-colors duration-200 group-hover:text-[#525A67]">
          {item.title}
        </p>
      </div>
    </Link>
  );
}