/**
 * Southern Africa countries allowed in the system.
 * This is the authoritative list used for server-side validation.
 */
export const SOUTHERN_AFRICA_COUNTRIES = [
	"South Africa",
	"Zimbabwe",
	"Botswana",
	"Namibia",
	"Mozambique",
	"Zambia",
	"Malawi",
	"Lesotho",
	"Eswatini",
	"Angola",
] as const;

export type SouthernAfricaCountry = (typeof SOUTHERN_AFRICA_COUNTRIES)[number];

/**
 * Default cuisines to seed.
 */
export const DEFAULT_CUISINES = [
	"Contemporary",
	"African",
	"Italian",
	"Seafood",
	"Steakhouse",
	"Cafe",
	"French",
	"Asian",
	"Indian",
	"Mediterranean",
	"Mexican",
	"Japanese",
	"Fusion",
	"Vegetarian",
	"Farm-to-Table",
	"Fine Dining",
	"Bistro",
	"Gastropub",
] as const;

/**
 * Default cities to seed, grouped by country.
 */
export const DEFAULT_CITIES: Record<string, string[]> = {
	"South Africa": [
		"Cape Town",
		"Johannesburg",
		"Durban",
		"Pretoria",
		"Stellenbosch",
		"Franschhoek",
		"Port Elizabeth",
		"Knysna",
	],
	Zimbabwe: [
		"Harare",
		"Bulawayo",
		"Victoria Falls",
		"Mutare",
		"Masvingo",
	],
	Botswana: ["Gaborone", "Maun", "Kasane", "Francistown"],
	Namibia: ["Windhoek", "Swakopmund", "Walvis Bay"],
	Mozambique: ["Maputo", "Vilankulo", "Tofo"],
	Zambia: ["Lusaka", "Livingstone"],
	Malawi: ["Lilongwe", "Blantyre", "Cape Maclear"],
	Lesotho: ["Maseru"],
	Eswatini: ["Mbabane", "Manzini"],
	Angola: ["Luanda"],
};
