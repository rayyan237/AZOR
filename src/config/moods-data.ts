// src/config/moods-data.ts

export interface MoodHeroData {
  slug: string;
  number: string;
  totalMoods: string;
  title: string;
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
  mysterious: {
    slug: "mysterious",
    number: "04",
    totalMoods: "06",
    title: "MYSTERIOUS.",
    quote: "Not everything needs to be said.",
    description: [
      "For the ones who move in silence,",
      "and leave a lasting impression.",
    ],
    images: {
      desktop: {
        src: "/images/moods/mysterious-hero.webp",
        alt: "Raw editorial portrait of a woman with hand touching her neck wearing Azor delicate drop earrings and stack rings",
      },
      mobile: {
        src: "/images/moods/mysterious-hero-mobile.webp",
        alt: "Detail portrait of woman wearing fine jewelry on mobile",
      },
    },
    navigation: {
      prevSlug: "effortless",
      nextSlug: "poetic",
      currentIndex: "01",
      totalIndex: "06",
    },
  },
};