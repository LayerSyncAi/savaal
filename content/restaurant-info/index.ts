export type ScoreBreakdown = {
  label: string;
  score: string;
};

export type RestaurantInfo = {
  id: string;
  name: string;
  category: "Restaurant" | "Hotel" | "Bar";
  cuisine: string;
  city: string;
  country: string;
  location: string;
  coverImage: string;
  rating: number;
  description: string;
  scores: ScoreBreakdown[];
  totalScore: string;
};

export const restaurants: RestaurantInfo[] = [
  {
    id: "savanna-table",
    name: "Savanna Table",
    category: "Restaurant",
    cuisine: "Modern South African",
    city: "Cape Town",
    country: "South Africa",
    location: "Cape Town, South Africa",
    coverImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description:
      "Chef-driven tasting menus celebrate South Africa's terroir with fire-kissed plates, seasonal produce, and impeccable wine pairings overlooking Table Mountain.",
    scores: [
      { label: "Taste & technique", score: "27/35" },
      { label: "Presentation", score: "18/20" },
      { label: "Hospitality", score: "9/10" },
      { label: "Sustainability", score: "8/10" },
    ],
    totalScore: "86/100",
  },
  {
    id: "maison-teranga",
    name: "Maison Teranga",
    category: "Restaurant",
    cuisine: "Senegalese fine dining",
    city: "Dakar",
    country: "Senegal",
    location: "Dakar, Senegal",
    coverImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    description:
      "A refined tribute to Dakar's coastal larder where thieboudienne-inspired courses meet French technique, backed by warm, attentive Teranga hospitality.",
    scores: [
      { label: "Taste & technique", score: "26/35" },
      { label: "Presentation", score: "19/20" },
      { label: "Hospitality", score: "10/10" },
      { label: "Beverage pairing", score: "9/10" },
    ],
    totalScore: "88/100",
  },
  {
    id: "spice-route-social",
    name: "Spice Route Social",
    category: "Restaurant",
    cuisine: "Pan-African small plates",
    city: "Nairobi",
    country: "Kenya",
    location: "Nairobi, Kenya",
    coverImage:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    description:
      "Vibrant small plates travel the spice routes from Addis to Zanzibar, paired with craft cocktails and live DJs in a rooftop lounge atmosphere.",
    scores: [
      { label: "Taste & technique", score: "25/35" },
      { label: "Presentation", score: "17/20" },
      { label: "Hospitality", score: "9/10" },
      { label: "Storytelling", score: "8/10" },
    ],
    totalScore: "82/100",
  },
  {
    id: "atlas-ember",
    name: "Atlas Ember",
    category: "Restaurant",
    cuisine: "North African grill",
    city: "Marrakech",
    country: "Morocco",
    location: "Marrakech, Morocco",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    description:
      "Charcoal-grilled meats, saffron-scented vegetables, and smoky flatbreads evoke the medina, served in a lantern-lit courtyard with live oud music.",
    scores: [
      { label: "Taste & technique", score: "29/35" },
      { label: "Presentation", score: "19/20" },
      { label: "Hospitality", score: "10/10" },
      { label: "Cultural fidelity", score: "9/10" },
    ],
    totalScore: "91/100",
  },
  {
    id: "azure-dunes-hotel",
    name: "Azure Dunes Hotel",
    category: "Hotel",
    cuisine: "Coastal luxury resort",
    city: "Victoria",
    country: "Seychelles",
    location: "Victoria, Seychelles",
    coverImage:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    description:
      "Private villas spill onto powdery sands with butler-led service, reef-to-table dining, and sunset cruises across the Seychelles' turquoise waters.",
    scores: [
      { label: "Hospitality", score: "19/20" },
      { label: "Amenities", score: "27/30" },
      { label: "Dining", score: "24/30" },
      { label: "Sustainability", score: "9/10" },
    ],
    totalScore: "89/100",
  },
  {
    id: "savannah-sky-lodge",
    name: "Savannah Sky Lodge",
    category: "Hotel",
    cuisine: "Safari retreat",
    city: "Arusha",
    country: "Tanzania",
    location: "Arusha, Tanzania",
    coverImage:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abb?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description:
      "Canvas suites overlook acacia-dotted plains where sunrise game drives, Maasai-led bush walks, and farm-to-table feasts define the stay.",
    scores: [
      { label: "Hospitality", score: "20/20" },
      { label: "Amenities", score: "26/30" },
      { label: "Dining", score: "25/30" },
      { label: "Sense of place", score: "9/10" },
    ],
    totalScore: "90/100",
  },
  {
    id: "sundown-rooftop",
    name: "Sundown Rooftop Bar",
    category: "Bar",
    cuisine: "Craft cocktails",
    city: "Lagos",
    country: "Nigeria",
    location: "Lagos, Nigeria",
    coverImage:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
    description:
      "Skyline views, Afrobeat sets, and a menu of palm wine spritzes and spice-forward cocktails make this the go-to Lagos sundowner spot.",
    scores: [
      { label: "Mixology", score: "27/35" },
      { label: "Atmosphere", score: "18/20" },
      { label: "Service", score: "9/10" },
      { label: "Music & vibe", score: "8/10" },
    ],
    totalScore: "84/100",
  },
  {
    id: "baobab-jazz-lounge",
    name: "Baobab Jazz Lounge",
    category: "Bar",
    cuisine: "Live music lounge",
    city: "Accra",
    country: "Ghana",
    location: "Accra, Ghana",
    coverImage:
      "https://images.unsplash.com/photo-1468070970162-6970676c9a66?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    description:
      "Vintage vinyl, velvet banquettes, and nightly jazz trios set the tone for expertly stirred classics and small bites inspired by coastal Ghana.",
    scores: [
      { label: "Mixology", score: "26/35" },
      { label: "Atmosphere", score: "19/20" },
      { label: "Service", score: "9/10" },
      { label: "Entertainment", score: "9/10" },
    ],
    totalScore: "87/100",
  },
  {
    id: "violet-coast-house",
    name: "Violet Coast House",
    category: "Hotel",
    cuisine: "Boutique seaside stay",
    city: "Essaouira",
    country: "Morocco",
    location: "Essaouira, Morocco",
    coverImage:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=900&q=90",
    rating: 4.6,
    description:
      "Sun-washed terraces, locally woven textiles, and hammam-inspired suites create a serene escape steps from Essaouira's Atlantic waves.",
    scores: [
      { label: "Hospitality", score: "18/20" },
      { label: "Amenities", score: "25/30" },
      { label: "Dining", score: "23/30" },
      { label: "Sense of place", score: "9/10" },
    ],
    totalScore: "85/100",
  },
  {
    id: "ember-canvas", 
    name: "Ember Canvas", 
    category: "Restaurant", 
    cuisine: "Wood-fired contemporary", 
    city: "Kigali", 
    country: "Rwanda", 
    location: "Kigali, Rwanda", 
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", 
    rating: 4.7, 
    description:
      "An art-filled dining room where seasonal Rwandan produce meets wood-fire cooking, showcasing smoky vegetables, aged meats, and natural wines.",
    scores: [
      { label: "Taste & technique", score: "28/35" },
      { label: "Presentation", score: "18/20" },
      { label: "Hospitality", score: "9/10" },
      { label: "Sustainability", score: "8/10" },
    ],
    totalScore: "88/100", 
  },
  {
    id: "marula-night-market",
    name: "Marula Night Market",
    category: "Bar",
    cuisine: "Street food cocktails",
    city: "Johannesburg",
    country: "South Africa",
    location: "Johannesburg, South Africa",
    coverImage:
      "https://images.unsplash.com/photo-1523362628745-0c100150b05f?auto=format&fit=crop&w=900&q=80",
    rating: 4.4,
    description:
      "Neon-lit stalls serve wood-fired skewers and sorghum bao alongside cocktails built with marula, rooibos, and foraged botanicals.",
    scores: [
      { label: "Mixology", score: "25/35" },
      { label: "Atmosphere", score: "18/20" },
      { label: "Service", score: "8/10" },
      { label: "Entertainment", score: "8/10" },
    ],
    totalScore: "79/100",
  },
];
