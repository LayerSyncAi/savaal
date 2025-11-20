export type ScoreBreakdown = {
  label: string;
  score: string;
};

export type RestaurantInfo = {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  coverImage: string;
  rating: number;
  scores: ScoreBreakdown[];
  totalScore: string;
};

export const restaurants: RestaurantInfo[] = [
  {
    id: "savanna-table",
    name: "Savanna Table",
    cuisine: "Modern South African",
    location: "Cape Town, South Africa",
    coverImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
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
    cuisine: "Senegalese fine dining",
    location: "Dakar, Senegal",
    coverImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
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
    cuisine: "Pan-African small plates",
    location: "Nairobi, Kenya",
    coverImage:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
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
    cuisine: "North African grill",
    location: "Marrakech, Morocco",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    scores: [
      { label: "Taste & technique", score: "29/35" },
      { label: "Presentation", score: "19/20" },
      { label: "Hospitality", score: "10/10" },
      { label: "Cultural fidelity", score: "9/10" },
    ],
    totalScore: "91/100",
  },
];
