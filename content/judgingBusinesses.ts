export type BusinessCriteria = {
  category: string;
  maxScore: number;
  description: string;
};

export type BusinessStarLevel = {
  level: string;
  scoreRange: string;
  meaning: string;
};

export const businessCriteria: BusinessCriteria[] = [
  {
    category: "Taste & Technique",
    maxScore: 35,
    description: "Quality, flavor balance, cooking skill, and use of traditional ingredients.",
  },
  {
    category: "Service",
    maxScore: 25,
    description: "Hospitality, timing, staff knowledge, and guest experience.",
  },
  {
    category: "Menu Composition",
    maxScore: 10,
    description: "Ingredient sourcing, dietary options, and creativity.",
  },
  {
    category: "Presentation",
    maxScore: 10,
    description: "Visual storytelling, plating style, and consistency.",
  },
  {
    category: "Beverage Experience",
    maxScore: 10,
    description: "Curation, pairing options, and bar service.",
  },
  {
    category: "Ambience",
    maxScore: 5,
    description: "Décor, lighting, cleanliness, and comfort.",
  },
  {
    category: "Perceived Value",
    maxScore: 5,
    description: "Experience vs price, portion sizes, and exclusivity.",
  },
];

export const businessStarLevels: BusinessStarLevel[] = [
  {
    level: "⭐ 1 Star",
    scoreRange: "70–79 out of 100",
    meaning: "Consistently good with unique local flavor, worth visiting.",
  },
  {
    level: "⭐⭐ 2 Stars",
    scoreRange: "80–89 out of 100",
    meaning: "Excellent execution and memorable service, with elevated classics.",
  },
  {
    level: "⭐⭐⭐ 3 Stars",
    scoreRange: "90–100 out of 100",
    meaning: "Exceptional. World-class food, service, and cultural innovation. A destination.",
  },
];

export const businessAuditSteps = [
  "Anonymous Mystery Visit",
  "Internal Scorecard Evaluation",
  "Panel Review and Star Confirmation",
  "Official Star Badge Issued",
  "Feedback & Actionable Insights Report",
  "Inclusion in the Savaal Website Star Listings",
  "Optional In-depth Digital Report Add-on",
];
