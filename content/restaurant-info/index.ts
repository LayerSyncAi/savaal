export type ScoreBreakdown = {
  label: string;
  score: string;
};

export type RestaurantInfo = {
  id: string;
  name: string;
  category: "Restaurant" | "Hotel" | "Bar";
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
    category: "Restaurant",
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
    category: "Restaurant",
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
    category: "Restaurant",
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
    category: "Restaurant",
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
  {
    id: "azure-dunes-hotel",
    name: "Azure Dunes Hotel",
    category: "Hotel",
    cuisine: "Coastal luxury resort",
    location: "Victoria, Seychelles",
    coverImage:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
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
    location: "Arusha, Tanzania",
    coverImage:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abb?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
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
    location: "Lagos, Nigeria",
    coverImage:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
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
    location: "Accra, Ghana",
    coverImage:
      "https://images.unsplash.com/photo-1468070970162-6970676c9a66?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    scores: [
      { label: "Mixology", score: "26/35" },
      { label: "Atmosphere", score: "19/20" },
      { label: "Service", score: "9/10" },
      { label: "Entertainment", score: "9/10" },
    ],
    totalScore: "87/100",
  },
];
