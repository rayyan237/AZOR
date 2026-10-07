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
      {/* 
        Small Rectangular Image Frame:
        aspect-[4/3] to aspect-square, constrained in width to replicate the slim thumbnail scale
      */}
      <div className="relative w-full aspect-[4/3] xs:aspect-[1.15/1] overflow-hidden bg-[#0A0D12]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 140px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Typography Stack Directly Below Image */}
      <div className="flex flex-col items-start mt-2 xs:mt-2.5 space-y-0.5 w-full">
        {/* Letter Identifier Tag */}
        <span className="text-[7.5px] xs:text-[8px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-[#747B86] uppercase leading-tight">
          {item.tag}
        </span>

        {/* Story Title with Controlled Line Wrapping */}
        <p className="text-[9.5px] xs:text-[10px] font-[family-name:var(--font-sans)] font-light text-[#1B222C] tracking-[0.01em] leading-[1.35] transition-colors duration-200 group-hover:text-[#525A67] pt-0.5">
          {item.title}
        </p>
      </div>
    </Link>
  );
}