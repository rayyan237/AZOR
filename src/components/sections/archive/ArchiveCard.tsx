import Image from "next/image";
import Link from "next/link";
import { ArchiveItem } from "@/config/site";

interface ArchiveCardProps {
  item: ArchiveItem;
}

export function ArchiveCard({ item }: ArchiveCardProps) {
  return (
    <Link
      href={item.href}
      className="group relative block w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#0A0D12] select-none transition-transform duration-500 hover:-translate-y-1 focus:outline-none focus:ring-1 focus:ring-neutral-400"
      aria-label={`${item.id} ${item.title}`}
    >
      {/* Raw Product Photography: No darkening filters */}
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Item Metadata Overlay at Bottom Left */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 lg:p-4 z-10 flex flex-col items-start bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none">
        <span className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] tracking-[0.24em] text-zinc-400 uppercase">
          {item.id}
        </span>
        <span className="text-[10px] xs:text-[10.5px] lg:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] text-white uppercase mt-0.5">
          {item.title}
        </span>
      </div>
    </Link>
  );
}