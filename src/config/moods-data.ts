// src/config/moods-data.ts

export interface MoodHeroData {
  slug: string;
  number: string;
  totalMoods: string;
  title: string;
  tagline: string;
  quote: string;
  description: string[];
  images: {
    desktop: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
  navigation: {
    prevSlug: string;
    nextSlug: string;
    currentIndex: string;
    totalIndex: string;
  };
}

export const moodsData: Record<string, MoodHeroData> = {
  soft: {
    slug: "soft",
    number: "01",
    totalMoods: "05",
    title: "SOFT.",
    tagline: "Delicate. Quiet. Effortless.",
    quote: "A whisper is louder than a shout.",
    description: [
      "Subtle silhouettes that rest like second skin,",
      "designed for quiet everyday grace.",
    ],
    images: {
      desktop: {
        src: "/images/moods/soft-hero.webp",
        alt: "Soft editorial portrait featuring delicate minimalist Azor jewelry",
      },
      mobile: {
        src: "/images/moods/soft-hero-mobile.webp",
        alt: "Mobile view of soft fine jewelry styling",
      },
    },
    navigation: {
      prevSlug: "timeless",
      nextSlug: "bold",
      currentIndex: "01",
      totalIndex: "05",
    },
  },

  bold: {
    slug: "bold",
    number: "02",
    totalMoods: "05",
    title: "BOLD.",
    tagline: "Confident. Distinct. Unapologetic.",
    quote: "Presence needs no introduction.",
    description: [
      "Sculpted forms that command attention,",
      "unafraid to redefine modern luxury.",
    ],
    images: {
      desktop: {
        src: "/images/moods/bold-hero.webp",
        alt: "Editorial model wearing bold statement Azor jewelry",
      },
      mobile: {
        src: "/images/moods/bold-hero-mobile.webp",
        alt: "Mobile framing of bold sculptural ring piece",
      },
    },
    navigation: {
      prevSlug: "soft",
      nextSlug: "romantic",
      currentIndex: "02",
      totalIndex: "05",
    },
  },

  romantic: {
    slug: "romantic",
    number: "03",
    totalMoods: "05",
    title: "ROMANTIC.",
    tagline: "Tender. Dreamy. Personal.",
    quote: "Carrying memories close to the chest.",
    description: [
      "Floral motifs and heirloom warmth,",
      "crafted to celebrate tender connections.",
    ],
    images: {
      desktop: {
        src: "/images/moods/romantic-hero.webp",
        alt: "Warm romantic lighting on fine gold gemstone necklace",
      },
      mobile: {
        src: "/images/moods/romantic-hero-mobile.webp",
        alt: "Romantic mood jewelry close-up for mobile",
      },
    },
    navigation: {
      prevSlug: "bold",
      nextSlug: "mysterious",
      currentIndex: "03",
      totalIndex: "05",
    },
  },

  mysterious: {
    slug: "mysterious",
    number: "04",
    totalMoods: "05",
    title: "MYSTERIOUS.",
    tagline: "Dark. Subtle. Intriguing.",
    quote: "Not everything needs to be said.",
    description: [
      "For the ones who move in silence,",
      "and leave a lasting impression.",
    ],
    images: {
      desktop: {
        src: "/images/moods/mysterious-hero.webp",
        alt: "Raw editorial portrait of a woman with hand touching her neck wearing Azor drop earrings and stack rings",
      },
      mobile: {
        src: "/images/moods/mysterious-hero-mobile.webp",
        alt: "Detail portrait of woman wearing fine jewelry on mobile",
      },
    },
    navigation: {
      prevSlug: "romantic",
      nextSlug: "timeless",
      currentIndex: "04",
      totalIndex: "05",
    },
  },

  timeless: {
    slug: "timeless",
    number: "05",
    totalMoods: "05",
    title: "TIMELESS.",
    tagline: "Elegant. Refined. Enduring.",
    quote: "Trends change. Your signature doesn't have to.",
    description: [
      "Enduring forms passed across generations,",
      "rooted in precision craftsmanship.",
    ],
    images: {
      desktop: {
        src: "/images/moods/timeless-hero.webp",
        alt: "Classic solitaire diamond and clean gold band editorial portrait",
      },
      mobile: {
        src: "/images/moods/timeless-hero-mobile.webp",
        alt: "Timeless signature piece mobile photography",
      },
    },
    navigation: {
      prevSlug: "mysterious",
      nextSlug: "soft",
      currentIndex: "05",
      totalIndex: "05",
    },
  },
};