import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BeginningImages() {
  const { images } = siteConfig.beginning;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-[430px] mx-auto lg:mx-0">
      {/* Frame 1: Pendant / Necklace Detail (Editorial Portrait Ratio) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e2d8] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <Image
          src={images.necklace.src}
          alt={images.necklace.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 28vw, 210px"
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105 select-none"
        />
      </div>

      {/* Frame 2: Hands & Rings Detail (Editorial Portrait Ratio) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e2d8] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <Image
          src={images.rings.src}
          alt={images.rings.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 28vw, 210px"
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105 select-none"
        />
      </div>
    </div>
  );
}