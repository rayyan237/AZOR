// src/config/archive-pieces.ts

export interface ArchivePieceDetail {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  story: string;
  heroImages: {
    desktop: string;
    mobile: string;
  };
  mood: {
    titleLines: string[];
    description: string;
  };
  editorial: {
    headline: string;
    description: string;
    stylingTip: string;
  };
  care: string[];
  gallery: {
    main: { src: string; alt: string };
    thumbnails: { src: string; alt: string }[];
  };
}

const standardCareInstructions = [
  "Keep away from water, perfume and harsh chemicals.",
  "Store in a soft pouch.",
  "Clean with a soft, dry cloth.",
];

export const archivePieceDetails: ArchivePieceDetail[] = [
  {
    id: "01",
    slug: "the-signature",
    number: "001",
    name: "THE SIGNATURE",
    tagline: "A quiet statement of your own kind of magic.",
    story: "A timeless piece, designed for the moments that feel like you.",
    heroImages: {
      desktop: "/images/archive/piece-01-hero-desktop.webp",
      mobile: "/images/archive/piece-01-hero-mobile.webp",
    },
    mood: {
      titleLines: ["ELEGANT.", "PERSONAL.", "TIMELESS."],
      description:
        "For the days you want to feel put together without trying too hard. The Signature is a reminder that true elegance is always effortless.",
    },
    editorial: {
      headline: "A timeless silhouette, crafted to catch ambient light.",
      description:
        "Designed with balanced proportions to rest naturally against the collarbone. Each facet is shaped to offer gentle shimmer without overpowering your personal presence.",
      stylingTip:
        "Wear it solitary for an effortless daytime look, or layer it with fine gold chains for evening presence.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-01.webp",
        alt: "The Signature cross-shaped diamond pendant necklace",
      },
      thumbnails: [
        {
          src: "/images/archive/piece-01-thumb-1.webp",
          alt: "Necklace worn on model collarbone",
        },
        {
          src: "/images/archive/piece-01-thumb-2.webp",
          alt: "Fine diamond setting macro detail",
        },
        {
          src: "/images/archive/piece-01-thumb-3.webp",
          alt: "Side profile of The Signature pendant",
        },
      ],
    },
  },
  {
    id: "02",
    slug: "the-afterglow",
    number: "002",
    name: "THE AFTERGLOW",
    tagline: "Softness, with a little more sparkle.",
    story: "Sculpted to catch late-afternoon sunlight and whisper in evening shadows.",
    heroImages: {
      desktop: "/images/archive/piece-02.webp",
      mobile: "/images/archive/piece-02.webp",
    },
    mood: {
      titleLines: ["RADIANT.", "SUBTLE.", "EVENING."],
      description:
        "Crafted to move fluidly with your rhythm. Three descending droplets designed to frame the cheekbone with understated luminosity.",
    },
    editorial: {
      headline: "A rhythmic cascade of light with gentle motion.",
      description:
        "Engineered with delicate articulation so every turn of the head catches surrounding light. Lightweight and balanced for complete comfort from day to night.",
      stylingTip:
        "Pairs seamlessly with swept-back hair and open necklines to highlight the jawline.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-02.webp",
        alt: "The Afterglow triple droplet diamond earrings",
      },
      thumbnails: [
        { src: "/images/archive/piece-02.webp", alt: "Side profile" },
        { src: "/images/archive/piece-04.webp", alt: "Setting detail" },
        { src: "/images/archive/piece-12.webp", alt: "Worn look" },
      ],
    },
  },
  {
    id: "03",
    slug: "the-noir",
    number: "003",
    name: "THE NOIR",
    tagline: "For evenings that don't need an occasion.",
    story: "A solitary cabochon stone embedded in a weighted brushed gold band.",
    heroImages: {
      desktop: "/images/archive/piece-03.webp",
      mobile: "/images/archive/piece-03.webp",
    },
    mood: {
      titleLines: ["MYSTERIOUS.", "GROUNDED.", "BOLD."],
      description:
        "An intentional contrast of deep natural dark stone against hand-polished gold. Built to be worn solitary on the index or stacked with subtle pavé.",
    },
    editorial: {
      headline: "A quiet anchor of depth and sculpted warmth.",
      description:
        "The smooth, domed cabochon creates an intriguing play of shadow and reflection. Weighted comfortably to provide a reassuring, grounded presence on the hand.",
      stylingTip:
        "Wear alone on the index finger for a modern architectural statement, or pair with delicate textured bands.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-03.webp",
        alt: "The Noir gold ring with solitary dark onyx stone",
      },
      thumbnails: [
        { src: "/images/archive/piece-07.webp", alt: "Hand worn" },
        { src: "/images/archive/piece-03.webp", alt: "Stone facet" },
        { src: "/images/archive/piece-10.webp", alt: "Side view" },
      ],
    },
  },
  {
    id: "04",
    slug: "the-petale",
    number: "004",
    name: "THE PÉTALE",
    tagline: "Delicate by nature. Bold in presence.",
    story: "Organic floral silhouettes reimagined in freshwater pearls and gold.",
    heroImages: {
      desktop: "/images/archive/piece-04.webp",
      mobile: "/images/archive/piece-04.webp",
    },
    mood: {
      titleLines: ["ORGANIC.", "GENTLE.", "POETIC."],
      description:
        "Inspired by petals resting on water. A four-stone cluster that delivers tactile softness with architectural structure.",
    },
    editorial: {
      headline: "Soft, organic contours meeting polished geometry.",
      description:
        "Lustrous pearl undertones bring warmth to the face. The floral arrangement feels effortless and nostalgic yet distinctly modern.",
      stylingTip:
        "Complements soft knitwear and linen tailoring, bringing romantic poise to understated outfits.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-04.webp",
        alt: "The Pétale pearl floral stud earrings",
      },
      thumbnails: [
        { src: "/images/archive/piece-04.webp", alt: "Pearl texture" },
        { src: "/images/archive/piece-09.webp", alt: "Worn earring" },
        { src: "/images/archive/piece-02.webp", alt: "Scale detail" },
      ],
    },
  },
  {
    id: "05",
    slug: "the-lune",
    number: "005",
    name: "THE LUNE",
    tagline: "Made for softer moments.",
    story: "A curved crescent motif that rests against the hollow of the neck.",
    heroImages: {
      desktop: "/images/archive/piece-05.webp",
      mobile: "/images/archive/piece-05.webp",
    },
    mood: {
      titleLines: ["INTIMATE.", "NOCTURNAL.", "POETIC."],
      description:
        "The gentle curve of the moon suspended on an ultra-fine diamond-cut chain. Understated enough for morning coffee, striking under candlelight.",
    },
    editorial: {
      headline: "An understated arc that celebrates quiet poise.",
      description:
        "Slender and whisper-light against bare skin. The polished curved silhouette catches low light effortlessly without demanding attention.",
      stylingTip:
        "Resting right at the collarbone, it is ideal inside an unbuttoned crisp white shirt or paired with silk slips.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-05.webp",
        alt: "The Lune crescent moon pendant necklace",
      },
      thumbnails: [
        { src: "/images/archive/piece-08.webp", alt: "Layered view" },
        { src: "/images/archive/piece-05.webp", alt: "Pendant macro" },
        { src: "/images/archive/piece-01.webp", alt: "Clasp detail" },
      ],
    },
  },
  {
    id: "06",
    slug: "the-solace",
    number: "006",
    name: "THE SOLACE",
    tagline: "Quiet strength, in every detail.",
    story: "A hand-textured gold cuff punctuated with flush-set brilliant stones.",
    heroImages: {
      desktop: "/images/archive/piece-06.webp",
      mobile: "/images/archive/piece-06.webp",
    },
    mood: {
      titleLines: ["ENDURING.", "MINIMAL.", "WEIGHTED."],
      description:
        "Engineered with a seamless hinge and subtle brushed interior. Designed to be put on and never taken off.",
    },
    editorial: {
      headline: "Subtle textural dimension with daily resilience.",
      description:
        "A balanced oval profile ensures the cuff contours closely to the wrist rather than spinning, making typing and movement completely frictionless.",
      stylingTip:
        "Stands strong on its own next to a leather watch, or stacked adjacent to a delicate chain bracelet.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-06.webp",
        alt: "The Solace textured gold pave diamond bangle",
      },
      thumbnails: [
        { src: "/images/archive/piece-11.webp", alt: "Wrist stack" },
        { src: "/images/archive/piece-06.webp", alt: "Texture detail" },
        { src: "/images/archive/piece-07.webp", alt: "Hinge closeup" },
      ],
    },
  },
  {
    id: "07",
    slug: "the-verite",
    number: "007",
    name: "THE VÉRITÉ",
    tagline: "Because the truth always looks good on you.",
    story: "An unbroken circle of micro-pavé stones handset in platinum-plated silver.",
    heroImages: {
      desktop: "/images/archive/piece-07.webp",
      mobile: "/images/archive/piece-07.webp",
    },
    mood: {
      titleLines: ["ESSENTIAL.", "TIMELESS.", "PURIST."],
      description:
        "The eternity ring distilled to its purest essence. Ultra-low profile so it rests weightless alongside your favorite heirloom pieces.",
    },
    editorial: {
      headline: "The quintessential eternity ring, refined to perfection.",
      description:
        "Low-profile prong settings ensure comfort between fingers while maximizing the continuous facet scintillation from every perspective.",
      stylingTip:
        "The ultimate stacking foundation. Pair with solitary gemstones or wear across multiple fingers for refined repetition.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-07.webp",
        alt: "The Vérité delicate pavé eternity band on hand",
      },
      thumbnails: [
        { src: "/images/archive/piece-03.webp", alt: "Stacked look" },
        { src: "/images/archive/piece-07.webp", alt: "Pavé setting" },
        { src: "/images/archive/piece-10.webp", alt: "Profile view" },
      ],
    },
  },
  {
    id: "08",
    slug: "the-delice",
    number: "008",
    name: "THE DÉLICE",
    tagline: "A little sweetness. Always.",
    story: "Two delicately staggered chains cradling a faceted pear-cut pendant.",
    heroImages: {
      desktop: "/images/archive/piece-08.webp",
      mobile: "/images/archive/piece-08.webp",
    },
    mood: {
      titleLines: ["LUMINOUS.", "LAYERED.", "DELICATE."],
      description:
        "The look of effortless layering without the entanglement. Cascading drop proportions calibrated to highlight open collar shirts and evening gowns.",
    },
    editorial: {
      headline: "Effortless multi-length cascade without the tangling.",
      description:
        "Joined at a singular secure clasp, both chains are spaced at proportional intervals to accentuate the throat and décolletage naturally.",
      stylingTip:
        "Best showcased with deep V-necks, blazer lapels, or relaxed silk shirts unbuttoned low.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-08.webp",
        alt: "The Délice layered teardrop crystal necklace",
      },
      thumbnails: [
        { src: "/images/archive/piece-01.webp", alt: "Pendant closeup" },
        { src: "/images/archive/piece-08.webp", alt: "Layering detail" },
        { src: "/images/archive/piece-05.webp", alt: "Clasp" },
      ],
    },
  },
  {
    id: "09",
    slug: "the-eclat",
    number: "009",
    name: "THE ÉCLAT",
    tagline: "For the ones who shine effortlessly.",
    story: "Sculptural arches featuring suspended natural baroque pearl drops.",
    heroImages: {
      desktop: "/images/archive/piece-09.webp",
      mobile: "/images/archive/piece-09.webp",
    },
    mood: {
      titleLines: ["ARCHITECTURAL.", "SCULPTURAL.", "DISTINCT."],
      description:
        "A dance between modernist gold curves and the irregular, organic beauty of the sea. Made for art gallery openings and quiet dinners alike.",
    },
    editorial: {
      headline: "Organic seaside forms embraced by sleek arches.",
      description:
        "Each baroque pearl possesses its own natural surface nuances, ensuring every pair is distinct and carries an unmistakable artisanal soul.",
      stylingTip:
        "Let them lead your styling alongside minimal, structured monochrome garments like charcoal wool or matte black silk.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-09.webp",
        alt: "The Éclat sculptural gold drop earrings with pearl",
      },
      thumbnails: [
        { src: "/images/archive/piece-09.webp", alt: "Earring profile" },
        { src: "/images/archive/piece-04.webp", alt: "Pearl nuance" },
        { src: "/images/archive/piece-12.webp", alt: "Editorial portrait" },
      ],
    },
  },
  {
    id: "10",
    slug: "the-minimal",
    number: "010",
    name: "THE MINIMAL",
    tagline: "Less, but never ordinary.",
    story: "Twisted organic huggie hoops with an understated ergonomic latch.",
    heroImages: {
      desktop: "/images/archive/piece-10.webp",
      mobile: "/images/archive/piece-10.webp",
    },
    mood: {
      titleLines: ["TACTILE.", "EFFORTLESS.", "DAILY."],
      description:
        "The everyday staple perfected. Sits snugly against the lobe with zero pinch, lightweight enough to sleep in.",
    },
    editorial: {
      headline: "Your second-skin hoop, elevated with organic twist detailing.",
      description:
        "Designed to sit closely around the earlobe with zero snagging or weight. The subtle ribbon twist reflects ambient warmth across all angles.",
      stylingTip:
        "The consummate first or second-piercing anchor. Pairs harmoniously with studs, drops, or worn solo as a timeless uniform.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-10.webp",
        alt: "The Minimal organic twisted gold huggie hoops",
      },
      thumbnails: [
        { src: "/images/archive/piece-10.webp", alt: "Twist detail" },
        { src: "/images/archive/piece-02.webp", alt: "Ear fit" },
        { src: "/images/archive/piece-06.webp", alt: "Gold luster" },
      ],
    },
  },
  {
    id: "11",
    slug: "the-serenity",
    number: "011",
    name: "THE SERENITY",
    tagline: "Calm. Glossy. Timeless.",
    story: "Bezel-set floating gems linked by fine hand-assembled articulation.",
    heroImages: {
      desktop: "/images/archive/piece-11.webp",
      mobile: "/images/archive/piece-11.webp",
    },
    mood: {
      titleLines: ["FLUID.", "DELICATE.", "TIMELESS."],
      description:
        "A bracelet that moves like liquid water over the wrist. Each stone is individually bezel-set to lay flat and prevent catching on knitwear.",
    },
    editorial: {
      headline: "Liquid drape and smooth bezels that never catch.",
      description:
        "Engineered for daily tactile comfort. The enclosed settings shield the stones while giving them a crisp, circular frame of reflective luster.",
      stylingTip:
        "Drapes gracefully over shirt cuffs or stacks easily alongside a solid bangle.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-11.webp",
        alt: "The Serenity fine bezel crystal chain bracelet",
      },
      thumbnails: [
        { src: "/images/archive/piece-06.webp", alt: "Bezel setting" },
        { src: "/images/archive/piece-11.webp", alt: "Extender link" },
        { src: "/images/archive/piece-07.webp", alt: "Worn wrist" },
      ],
    },
  },
  {
    id: "12",
    slug: "the-aura",
    number: "012",
    name: "THE AURA",
    tagline: "Not just a piece. A presence.",
    story: "Linear cascading chain drops that trace the jawline with radiant grace.",
    heroImages: {
      desktop: "/images/archive/piece-12.webp",
      mobile: "/images/archive/piece-12.webp",
    },
    mood: {
      titleLines: ["HYPNOTIC.", "CINEMATIC.", "PRESENCE."],
      description:
        "When you want your arrival to speak before words are spoken. Long diamond-cut links that catch ambient candlelight with every movement.",
    },
    editorial: {
      headline: "An elongated thread of movement and light.",
      description:
        "Lightweight fine-chain links deliver dramatic vertical length without weighing down the lobe. Glides fluidly as you move.",
      stylingTip:
        "Needs no accompanying necklace. Pair with an off-the-shoulder silhouette or an updo to maximize its vertical impact.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/piece-12.webp",
        alt: "The Aura statement dangling earrings against evening portrait",
      },
      thumbnails: [
        { src: "/images/archive/piece-12.webp", alt: "Ear drop macro" },
        { src: "/images/archive/piece-02.webp", alt: "Chain articulation" },
        { src: "/images/archive/piece-09.webp", alt: "Atmosphere view" },
      ],
    },
  },
];

export const sharedQuoteSection = {
  quote: "Not just a piece of jewelry, but a part of your story.",
  cta: {
    label: "EXPLORE MORE PIECES",
    eyebrow: "THE ARCHIVE",
    href: "/archive",
  },
  image: {
    src: "/images/archive/archive-hero-desktop.webp",
    alt: "Editorial portrait wearing Azor signature jewelry",
  },
};

export const makeItYoursData = {
  eyebrow: "ACQUIRE & INQUIRE",
  title: "WANT TO MAKE IT YOURS?",
  description: "Let's get you closer to a piece that feels like you.",
  actions: {
    instagram: {
      label: "DM ON INSTAGRAM",
      href: "https://instagram.com/azorjewelry",
    },
    whatsapp: {
      label: "CHAT ON WHATSAPP",
      href: "https://wa.me/1234567890",
    },
  },
};

export function getPieceBySlug(slug: string): ArchivePieceDetail | undefined {
  return archivePieceDetails.find((p) => p.slug === slug);
}