export type EventDetails = {
  id: string;
  category: "gathering" | "training";
  presentedBy: string;
  title: string;
  host: string;
  theme: string;
  image: string;
  description: string[];
  highlights: string[];
  date: string;
  time: string;
  price: string;
  seating: string;
  location: {
    venue: string;
    address: string;
  };
  notes: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const events: EventDetails[] = [
  {
    id: "the-table-that-got-erased",
    category: "gathering",
    presentedBy: "Savaal presents",
    title: "The Table That Got Erased",
    host: "Chef Al",
    theme: "A poetic reclamation of memory, taste, and identity.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "This dinner experience tells the story of what was once silenced—now brought to the table. Rooted in heritage and designed for remembrance.",
      "Five courses of fire, soul, and celebration—each paired with wine, wisdom, and spirit. You are invited to sit at the table they tried to erase. We gather not just to dine, but to restore.",
    ],
    highlights: [
      "Five-course dinner designed for remembrance and celebration.",
      "Wine pairings that echo the story of each course.",
      "Intimate gathering guided by storytelling from Chef Al.",
    ],
    date: "Friday, 28 November 2025",
    time: "5:00 PM",
    price: "$50 five-course dinner with wine pairings",
    seating: "Limited to 20 seats",
    location: {
      venue: "The Forest Cabin",
      address: "Art Farm, College Ct, Harare",
    },
    notes: [
      "Payment is required to secure your seat.",
      "Seats are reserved on a first pay and confirmation basis.",
      "We will share event details with confirmed guests. Thank you for understanding.",
    ],
    cta: {
      label: "Reserve your seat",
      href: "/contact",
    },
  },
  {
    id: "vines-and-voices",
    category: "gathering",
    presentedBy: "Savaal tasting room",
    title: "Vines & Voices: A Winter Wine Salon",
    host: "Sommelier Naledi",
    theme: "An evening pairing heritage vintages with spoken word and live jazz.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "A sommelier-led tasting featuring boutique vineyards from across Southern Africa, spotlighting growers whose craft sustains rural economies.",
      "Guests move through stations of wine, charcuterie, and poetry that retell the stories of the valley. The night closes with a communal toast to independent producers.",
    ],
    highlights: [
      "Guided tasting flight of six regional wines with pairing notes.",
      "Live performances by emerging poets and jazz instrumentalists.",
      "Marketplace corner with winemaker meet-and-greets and bottle signings.",
    ],
    date: "Saturday, 14 February 2026",
    time: "6:30 PM",
    price: "$40 tasting flight and shared platters",
    seating: "Limited to 40 guests",
    location: {
      venue: "The Lantern Cellar",
      address: "Borrowdale, Harare",
    },
    notes: [
      "Guests must be 18+ to participate in tastings.",
      "Proceeds contribute to vineyard apprenticeship stipends.",
      "Smart casual with warm layers recommended for the cellar.",
    ],
    cta: {
      label: "Book the wine salon",
      href: "/contact",
    },
  },
  {
    id: "judging-foundations-workshop",
    category: "training",
    presentedBy: "Savaal Academy",
    title: "Judging Foundations Workshop",
    host: "Lead Judge Rumbi",
    theme: "Accreditation prep for cultural tastemakers safeguarding the Guide.",
    image:
      "https://images.unsplash.com/photo-1604908177370-0ac1c9bb6462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "A two-day intensive covering the Savaal Scorecard, ethical fieldwork, and the cultural context that underpins our standards.",
      "Participants shadow senior judges, practice discreet venue visits, and learn how to translate community feedback into fair evaluations.",
    ],
    highlights: [
      "Scorecard calibration labs with real case studies.",
      "Mentorship circles on ethics, conflict management, and safeguarding.",
      "Certification pathway that leads to paid judging assignments.",
    ],
    date: "10–11 March 2026",
    time: "8:30 AM – 4:30 PM",
    price: "$75 (materials, meals, and accreditation exam)",
    seating: "Capped at 18 participants",
    location: {
      venue: "Mbare Innovation Hub",
      address: "Harare, Zimbabwe",
    },
    notes: [
      "Scholarships available for applicants from rural provinces.",
      "Participants must complete pre-reading on safeguarding standards.",
      "Graduates receive priority placement for 2026 Guide assessments.",
    ],
    cta: {
      label: "Apply for the workshop",
      href: "/contact",
    },
  },
  {
    id: "junior-chef-poultry-lab",
    category: "training",
    presentedBy: "Savaal Academy",
    title: "Junior Chef Poultry Lab",
    host: "Chef Thabo",
    theme: "Hands-on kitchen studio for youth exploring poultry, safety, and nutrition.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "A practical lab where aspiring chefs break down whole birds, learn safe handling, and build flavourful recipes rooted in local spices and grains.",
      "Sessions pair culinary skills with nutrition coaching so graduates can feed families, cater events, or step into apprenticeships.",
    ],
    highlights: [
      "Knife skills, sanitation drills, and temperature controls.",
      "Budget-friendly recipe development with farm-to-table sourcing.",
      "Portfolio tasting where participants serve community leaders.",
    ],
    date: "Saturday, 4 April 2026",
    time: "9:00 AM – 3:00 PM",
    price: "$35 (includes ingredients and toolkit)",
    seating: "20 seats, with 8 youth scholarships",
    location: {
      venue: "Savaal Test Kitchen",
      address: "Greendale, Harare",
    },
    notes: [
      "Guardians must sign consent forms for participants under 18.",
      "Aprons and knives are provided; closed shoes required.",
      "Certificate of completion plus referral letters for internships.",
    ],
    cta: {
      label: "Reserve a kitchen station",
      href: "/contact",
    },
  },
];
