export type ScoreBreakdown = {
	label: string;
	score: string;
};

export type PriceLevel = 1 | 2 | 3 | 4;

// Zimbabwe regions for the guide filter
export const zimbabweRegions = [
	"Bulawayo",
	"Chimanimani",
	"Harare",
	"Honde Valley & Vumba",
	"Hwange",
	"Mana Pools & Kariba",
	"Masvingo & Southeastern Lowveld",
	"Matobo",
	"Nyanga",
	"Victoria Falls"
] as const;

export type ZimbabweRegion = (typeof zimbabweRegions)[number];

export type RestaurantInfo = {
	id: string;
	name: string;
	category: "Restaurant" | "Hotel" | "Bar";
	cuisine: string;
	city: string;
	country: string;
	region: ZimbabweRegion;
	location: string;
	coverImage: string;
	rating: number;
	priceLevel: PriceLevel;
	description: string;
	scores: ScoreBreakdown[];
	totalScore: string;
};

// Helper to convert totalScore to Savaal Distinction (1-3 stars)
export function getSavaalDistinction(totalScore: string): number {
	const score = parseInt(totalScore.split("/")[0], 10);
	if (score >= 90) return 3; // 3 Stars - Exceptional
	if (score >= 85) return 2; // 2 Stars - Excellent
	return 1; // 1 Star - Notable
}

// Helper to display price level as dollar signs
export function getPriceLevelDisplay(level: PriceLevel): string {
	return "$".repeat(level);
}

export const restaurants: RestaurantInfo[] = [
	{
		id: "savanna-table",
		name: "Savanna Table",
		category: "Restaurant",
		cuisine: "Modern South African",
		city: "Cape Town",
		country: "South Africa",
		region: "Harare",
		location: "Cape Town, South Africa",
		coverImage:
			"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
		rating: 4.8,
		priceLevel: 4,
		description:
			"Chef-driven tasting menus celebrate South Africa's terroir with fire-kissed plates, seasonal produce, and impeccable wine pairings overlooking Table Mountain.",
		scores: [
			{ label: "Taste & Technique", score: "31/35" },
			{ label: "Service", score: "21/25" },
			{ label: "Beverage Experience", score: "8/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Victoria Falls",
		location: "Dakar, Senegal",
		coverImage:
			"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
		rating: 4.7,
		priceLevel: 4,
		description:
			"A refined tribute to Dakar's coastal larder where thieboudienne-inspired courses meet French technique, backed by warm, attentive Teranga hospitality.",
		scores: [
			{ label: "Taste & Technique", score: "30/35" },
			{ label: "Service", score: "22/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "5/5" },
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
		region: "Bulawayo",
		location: "Nairobi, Kenya",
		coverImage:
			"https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
		rating: 4.6,
		priceLevel: 3,
		description:
			"Vibrant small plates travel the spice routes from Addis to Zanzibar, paired with craft cocktails and live DJs in a rooftop lounge atmosphere.",
		scores: [
			{ label: "Taste & Technique", score: "30/35" },
			{ label: "Service", score: "20/25" },
			{ label: "Beverage Experience", score: "8/10" },
			{ label: "Menu Composition", score: "7/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "4/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Hwange",
		location: "Marrakech, Morocco",
		coverImage:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
		rating: 4.9,
		priceLevel: 4,
		description:
			"Charcoal-grilled meats, saffron-scented vegetables, and smoky flatbreads evoke the medina, served in a lantern-lit courtyard with live oud music.",
		scores: [
			{ label: "Taste & Technique", score: "33/35" },
			{ label: "Service", score: "23/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Victoria Falls",
		location: "Victoria, Seychelles",
		coverImage:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
		rating: 4.7,
		priceLevel: 4,
		description:
			"Private villas spill onto powdery sands with butler-led service, reef-to-table dining, and sunset cruises across the Seychelles' turquoise waters.",
		scores: [
			{ label: "Taste & Technique", score: "31/35" },
			{ label: "Service", score: "22/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "5/5" },
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
		region: "Mana Pools & Kariba",
		location: "Arusha, Tanzania",
		coverImage:
			"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
		rating: 4.8,
		priceLevel: 4,
		description:
			"Canvas suites overlook acacia-dotted plains where sunrise game drives, Maasai-led bush walks, and farm-to-table feasts define the stay.",
		scores: [
			{ label: "Taste & Technique", score: "32/35" },
			{ label: "Service", score: "23/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Harare",
		location: "Lagos, Nigeria",
		coverImage:
			"https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
		rating: 4.5,
		priceLevel: 2,
		description:
			"Skyline views, Afrobeat sets, and a menu of palm wine spritzes and spice-forward cocktails make this the go-to Lagos sundowner spot.",
		scores: [
			{ label: "Taste & Technique", score: "28/35" },
			{ label: "Service", score: "21/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "7/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "5/5" },
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
		region: "Nyanga",
		location: "Accra, Ghana",
		coverImage:
			"https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80",
		rating: 4.6,
		priceLevel: 3,
		description:
			"Vintage vinyl, velvet banquettes, and nightly jazz trios set the tone for expertly stirred classics and small bites inspired by coastal Ghana.",
		scores: [
			{ label: "Taste & Technique", score: "29/35" },
			{ label: "Service", score: "22/25" },
			{ label: "Beverage Experience", score: "10/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Chimanimani",
		location: "Essaouira, Morocco",
		coverImage:
			"https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85",
		rating: 4.6,
		priceLevel: 3,
		description:
			"Sun-washed terraces, locally woven textiles, and hammam-inspired suites create a serene escape steps from Essaouira's Atlantic waves.",
		scores: [
			{ label: "Taste & Technique", score: "30/35" },
			{ label: "Service", score: "20/25" },
			{ label: "Beverage Experience", score: "9/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "4/5" },
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
		region: "Matobo",
		location: "Kigali, Rwanda",
		coverImage:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
		rating: 4.7,
		priceLevel: 3,
		description:
			"An art-filled dining room where seasonal Rwandan produce meets wood-fire cooking, showcasing smoky vegetables, aged meats, and natural wines.",
		scores: [
			{ label: "Taste & Technique", score: "31/35" },
			{ label: "Service", score: "22/25" },
			{ label: "Beverage Experience", score: "8/10" },
			{ label: "Menu Composition", score: "8/10" },
			{ label: "Presentation", score: "9/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "5/5" },
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
		region: "Masvingo & Southeastern Lowveld",
		location: "Johannesburg, South Africa",
		coverImage:
			"https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=80",
		rating: 4.4,
		priceLevel: 2,
		description:
			"Neon-lit stalls serve wood-fired skewers and sorghum bao alongside cocktails built with marula, rooibos, and foraged botanicals.",
		scores: [
			{ label: "Taste & Technique", score: "26/35" },
			{ label: "Service", score: "20/25" },
			{ label: "Beverage Experience", score: "8/10" },
			{ label: "Menu Composition", score: "7/10" },
			{ label: "Presentation", score: "8/10" },
			{ label: "Ambience", score: "5/5" },
			{ label: "Perceived Value", score: "5/5" },
		],
		totalScore: "79/100",
	},
];
