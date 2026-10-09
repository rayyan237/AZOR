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