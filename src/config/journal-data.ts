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

// In src/config/journal-data.ts

export interface LetterArticleData {
  id: string;
  number: string;
  slug: string;
  title: string;
  italicSubtitle: string;
  paragraphs: string[];
  signature: string;
  image: {
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

export const lettersDetailData: Record<string, LetterArticleData> = {
  "on-becoming-unforgettable": {
    id: "01",
    number: "LETTER 01",
    slug: "on-becoming-unforgettable",
    title: "ON BECOMING UNFORGETTABLE.",
    italicSubtitle:
      "Some things are remembered because they are loud. Others stay with us because they were quietly ours.",
    paragraphs: [
      "There is a kind of beauty in the moments no one sees. The way you adjust your necklace before a big meeting. The way a piece of jewelry catches the light when you're not trying to be noticed. The way it stays with you, long after the moment has passed.",
      "You don't become unforgettable by trying. You become unforgettable by being — and by the little things that feel like you.",
      "This is for the moments that stay.",
    ],
    signature: "— AZOR",
    image: {
      desktop: {
        src: "/images/journal/letter-01.webp",
        alt: "Model wearing crystal floral pendant caught in warm natural sunlight",
      },
      mobile: {
        src: "/images/journal/letter-01.webp",
        alt: "Detail portrait of woman wearing fine necklace on mobile",
      },
    },
  },
  "why-we-believe-everyday-deserves-something-beautiful": {
    id: "02",
    number: "LETTER 02",
    slug: "why-we-believe-everyday-deserves-something-beautiful",
    title: "WHY WE BELIEVE EVERYDAY DESERVES SOMETHING BEAUTIFUL.",
    italicSubtitle:
      "Because beauty isn't reserved for special occasions. It lives in the little moments too.",
    paragraphs: [
      "We often wait for milestones to wear our favorite things. The anniversary, the gala, the celebration. But life unfolds in the quiet mornings, the unhurried coffees, and the solitary walks.",
      "To wear a signature piece on an ordinary Tuesday is an act of honoring yourself. It is a quiet reminder that today, in all its simplicity, is worthy of grace.",
      "Don't save what brings you joy for tomorrow.",
    ],
    signature: "— AZOR",
    image: {
      desktop: {
        src: "/images/journal/letter-02.webp",
        alt: "Azor gold cross pendant nested in soft white flower petals",
      },
      mobile: {
        src: "/images/journal/letter-02.webp",
        alt: "Pendant detail on mobile",
      },
    },
  },
  "for-the-girls-who-wear-black": {
    id: "03",
    number: "LETTER 03",
    slug: "for-the-girls-who-wear-black",
    title: "FOR THE GIRLS WHO WEAR BLACK.",
    italicSubtitle:
      "A letter to the women who find peace in simplicity, power in silence, and beauty in the dark.",
    paragraphs: [
      "Black is not the absence of color; it is the presence of certainty. It asks for nothing yet commands everything.",
      "Against dark silk, fine gold and brilliant cuts don't compete. They breathe. They become subtle beacons of personal sovereign confidence.",
      "To the ones who wear midnight like a second skin: your light shines brightest in the dark.",
    ],
    signature: "— AZOR",
    image: {
      desktop: {
        src: "/images/journal/letter-03.webp",
        alt: "Crescent moon against deep nocturnal evening sky",
      },
      mobile: {
        src: "/images/journal/letter-03.webp",
        alt: "Crescent moon nocturnal sky mobile",
      },
    },
  },
  "the-art-of-keeping-things-simple": {
    id: "04",
    number: "LETTER 04",
    slug: "the-art-of-keeping-things-simple",
    title: "THE ART OF KEEPING THINGS SIMPLE.",
    italicSubtitle:
      "Not everything needs to be loud, complicated or extravagant. Sometimes, simplicity is the ultimate luxury.",
    paragraphs: [
      "Simplicity is not lack of effort; it is the ultimate result of discernment. Stripping away the excess leaves behind only what is essential.",
      "A single diamond resting against the collarbone. A polished gold band that never leaves your finger. When form meets purpose, nothing more is required.",
      "Luxury is found in what you choose to leave out.",
    ],
    signature: "— AZOR",
    image: {
      desktop: {
        src: "/images/journal/letter-04.webp",
        alt: "Azor gold pendant over black leather book and white silk cloth",
      },
      mobile: {
        src: "/images/journal/letter-04.webp",
        alt: "Pendant detail on silk mobile",
      },
    },
  },
  "jewelry-and-the-stories-we-keep": {
    id: "05",
    number: "LETTER 05",
    slug: "jewelry-and-the-stories-we-keep",
    title: "JEWELRY AND THE STORIES WE KEEP.",
    italicSubtitle:
      "A piece of jewelry often holds more than just beauty — it holds memories, moments and meaning.",
    paragraphs: [
      "Metal and stone are enduring. They survive our seasons, our travels, and our transformations. They absorb our warmth and carry our secrets.",
      "Long after words are forgotten, a ring or locket remains as a tangible anchor to who we were and what we loved.",
      "Wear your stories with reverence.",
    ],
    signature: "— AZOR",
    image: {
      desktop: {
        src: "/images/journal/letter-05.webp",
        alt: "Model wearing delicate collarbone pendant against black fabric",
      },
      mobile: {
        src: "/images/journal/letter-05.webp",
        alt: "Model wearing collarbone pendant on mobile",
      },
    },
  },
};