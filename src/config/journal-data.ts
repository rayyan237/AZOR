// src/config/journal-data.ts

export interface JournalHeroData {
  eyebrow: string;
  titleLines: string[];
  subtitles: string[];
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
}

export const journalHeroData: JournalHeroData = {
  eyebrow: "AZOR LETTERS",
  titleLines: [
    "THOUGHTS, STORIES",
    "AND LITTLE NOTES",
    "FROM THE WORLD OF AZOR.",
  ],
  subtitles: [
    "Because there's more to jewelry",
    "than what you see.",
  ],
  images: {
    desktop: {
      src: "/images/journal/journal-hero-desktop.webp",
      alt: "Woman in white lace blouse in warm golden afternoon sunlight wearing Azor drop earring",
    },
    mobile: {
      src: "/images/journal/journal-hero-mobile.webp",
      alt: "Close crop portrait of woman wearing fine drop earring in natural sunlight",
    },
  },
};

// In src/config/journal-data.ts

export interface JournalArticle {
  id: string;
  number: string; // e.g. "LETTER 01"
  slug: string;
  title: string;
  excerpt: string;
  image: {
    src: string;
    alt: string;
  };
}

export const journalArticles: JournalArticle[] = [
  {
    id: "01",
    number: "LETTER 01",
    slug: "on-becoming-unforgettable",
    title: "On becoming unforgettable.",
    excerpt:
      "Some things are remembered because they are loud. Others stay with us because they were quietly ours.",
    image: {
      src: "/images/journal/letter-01.webp",
      alt: "Side profile of woman with hair up wearing drop earring",
    },
  },
  {
    id: "02",
    number: "LETTER 02",
    slug: "why-we-believe-everyday-deserves-something-beautiful",
    title: "Why we believe everyday deserves something beautiful.",
    excerpt:
      "Because beauty isn't reserved for special occasions. It lives in the little moments too.",
    image: {
      src: "/images/journal/letter-02.webp",
      alt: "Azor gold diamond cross pendant nestled in white flower petals",
    },
  },
  {
    id: "03",
    number: "LETTER 03",
    slug: "for-the-girls-who-wear-black",
    title: "For the girls who wear black.",
    excerpt:
      "A letter to the women who find peace in simplicity, power in silence, and beauty in the dark.",
    image: {
      src: "/images/journal/letter-03.webp",
      alt: "Crescent moon against deep nocturnal evening sky",
    },
  },
  {
    id: "04",
    number: "LETTER 04",
    slug: "the-art-of-keeping-things-simple",
    title: "The art of keeping things simple.",
    excerpt:
      "Not everything needs to be loud, complicated or extravagant. Sometimes, simplicity is the ultimate luxury.",
    image: {
      src: "/images/journal/letter-04.webp",
      alt: "Azor gold pendant draped over black leather book and white silk cloth",
    },
  },
  {
    id: "05",
    number: "LETTER 05",
    slug: "jewelry-and-the-stories-we-keep",
    title: "Jewelry and the stories we keep.",
    excerpt:
      "A piece of jewelry often holds more than just beauty — it holds memories, moments and meaning.",
    image: {
      src: "/images/journal/letter-05.webp",
      alt: "Model wearing collarbone pendant necklace against dark fabric",
    },
  },
];

export const comingSoonCard = {
  eyebrowLines: ["MORE", "LETTERS", "COMING SOON."],
  image: {
    src: "/images/journal/letter-06-shadows.webp",
    alt: "Gentle floral stems casting soft shadows on warm linen wall",
  },
};

export interface JournalBannerData {
  titleLines: string[];
  description: string;
  ctaText: string;
  ctaHref: string;
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
}

export const journalBannerData: JournalBannerData = {
  titleLines: [
    "A JOURNAL",
    "OF FEELINGS, MOMENTS",
    "AND MEANING.",
  ],
  description:
    "Because at Azor, every piece comes with a story — and every story deserves to be told.",
  ctaText: "READ ALL LETTERS",
  ctaHref: "#journal-letters",
  images: {
    desktop: {
      src: "/images/journal/journal-envelope-banner-desktop.webp",
      alt: "Black envelope sealed with bronze Azor wax stamp on black silk drapery with white florals",
    },
    mobile: {
      src: "/images/journal/journal-envelope-banner-mobile.webp",
      alt: "Azor bronze wax stamp on black envelope on mobile",
    },
  },
};