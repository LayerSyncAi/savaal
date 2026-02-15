/**
 * Southern Africa countries allowed in the system.
 * Shared between frontend components and Convex functions.
 * The authoritative server-side copy is inlined in convex/utilities.ts.
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
