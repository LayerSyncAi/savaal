import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ── Constants (inlined to avoid extra entry-point files in convex/) ──

const SOUTHERN_AFRICA_COUNTRIES = [
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

const DEFAULT_CUISINES = [
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

const DEFAULT_CITIES: Record<string, string[]> = {
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

function assertAdmin(adminToken?: string) {
	const expected = process.env.ADMIN_TOKEN;
	if (!expected) {
		console.error(
			"[assertAdmin] ADMIN_TOKEN env var is not set in the Convex environment. " +
				"Set it via `npx convex env set ADMIN_TOKEN <value>` or in the Convex dashboard."
		);
		throw new Error(
			"Admin authorization is not configured. See server logs."
		);
	}
	if (!adminToken || adminToken !== expected) {
		console.warn("[assertAdmin] Rejected: invalid or missing admin token.");
		throw new Error("Unauthorized");
	}
}

function slugify(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

// ── Cuisine queries & mutations ──────────────────────────────────────

export const listCuisines = query({
	args: { activeOnly: v.optional(v.boolean()) },
	handler: async (ctx, args) => {
		const items = await ctx.db.query("utilities_cuisines").collect();
		const filtered = args.activeOnly
			? items.filter((c) => c.isActive)
			: items;
		return filtered.sort((a, b) => a.name.localeCompare(b.name));
	},
});

export const createCuisine = mutation({
	args: { name: v.string(), adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const name = args.name.trim();
		if (!name) throw new Error("Cuisine name is required");
		const slug = slugify(name);
		const existing = await ctx.db
			.query("utilities_cuisines")
			.withIndex("by_slug", (q) => q.eq("slug", slug))
			.first();
		if (existing) throw new Error("Cuisine already exists");
		return ctx.db.insert("utilities_cuisines", {
			name,
			slug,
			isActive: true,
			createdAt: Date.now(),
		});
	},
});

export const updateCuisine = mutation({
	args: {
		id: v.id("utilities_cuisines"),
		name: v.optional(v.string()),
		isActive: v.optional(v.boolean()),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const existing = await ctx.db.get(args.id);
		if (!existing) throw new Error("Cuisine not found");
		const patch: Record<string, unknown> = {};
		if (args.name !== undefined) {
			const name = args.name.trim();
			if (!name) throw new Error("Cuisine name is required");
			patch.name = name;
			patch.slug = slugify(name);
		}
		if (args.isActive !== undefined) {
			patch.isActive = args.isActive;
		}
		return ctx.db.patch(args.id, patch);
	},
});

export const deleteCuisine = mutation({
	args: { id: v.id("utilities_cuisines"), adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		return ctx.db.delete(args.id);
	},
});

// ── Country queries & mutations ──────────────────────────────────────

export const listCountries = query({
	args: { activeOnly: v.optional(v.boolean()) },
	handler: async (ctx, args) => {
		const items = await ctx.db.query("utilities_countries").collect();
		const filtered = args.activeOnly
			? items.filter((c) => c.isActive)
			: items;
		return filtered.sort((a, b) => a.name.localeCompare(b.name));
	},
});

export const createCountry = mutation({
	args: { name: v.string(), code: v.optional(v.string()), adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const name = args.name.trim();
		if (!name) throw new Error("Country name is required");
		if (
			!SOUTHERN_AFRICA_COUNTRIES.includes(
				name as (typeof SOUTHERN_AFRICA_COUNTRIES)[number]
			)
		) {
			throw new Error(
				`Country "${name}" is not in the allowed Southern Africa list`
			);
		}
		const existing = await ctx.db
			.query("utilities_countries")
			.withIndex("by_name", (q) => q.eq("name", name))
			.first();
		if (existing) throw new Error("Country already exists");
		return ctx.db.insert("utilities_countries", {
			name,
			code: args.code,
			region: "southern-africa",
			isActive: true,
			createdAt: Date.now(),
		});
	},
});

export const updateCountry = mutation({
	args: {
		id: v.id("utilities_countries"),
		isActive: v.optional(v.boolean()),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const existing = await ctx.db.get(args.id);
		if (!existing) throw new Error("Country not found");
		const patch: Record<string, unknown> = {};
		if (args.isActive !== undefined) {
			patch.isActive = args.isActive;
		}
		return ctx.db.patch(args.id, patch);
	},
});

export const deleteCountry = mutation({
	args: { id: v.id("utilities_countries"), adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		// Check for cities referencing this country
		const cities = await ctx.db
			.query("utilities_cities")
			.withIndex("by_countryId", (q) => q.eq("countryId", args.id))
			.collect();
		if (cities.length > 0) {
			throw new Error(
				"Cannot delete country with existing cities. Delete the cities first."
			);
		}
		return ctx.db.delete(args.id);
	},
});

// ── City queries & mutations ─────────────────────────────────────────

export const listCities = query({
	args: {
		countryId: v.optional(v.id("utilities_countries")),
		activeOnly: v.optional(v.boolean()),
	},
	handler: async (ctx, args) => {
		let items;
		if (args.countryId) {
			items = await ctx.db
				.query("utilities_cities")
				.withIndex("by_countryId", (q) =>
					q.eq("countryId", args.countryId!)
				)
				.collect();
		} else {
			items = await ctx.db.query("utilities_cities").collect();
		}
		const filtered = args.activeOnly
			? items.filter((c) => c.isActive)
			: items;

		// Resolve country names
		const countryIds = [...new Set(filtered.map((c) => c.countryId))];
		const countries = await Promise.all(
			countryIds.map((id) => ctx.db.get(id))
		);
		const countryMap = new Map(
			countries
				.filter((c): c is NonNullable<typeof c> => c !== null)
				.map((c) => [c._id, c.name])
		);

		return filtered
			.map((city) => ({
				...city,
				countryName: countryMap.get(city.countryId) ?? "Unknown",
			}))
			.sort((a, b) => a.name.localeCompare(b.name));
	},
});

export const getCityById = query({
	args: { id: v.id("utilities_cities") },
	handler: async (ctx, args) => {
		const city = await ctx.db.get(args.id);
		if (!city) return null;
		const country = await ctx.db.get(city.countryId);
		return {
			...city,
			countryName: country?.name ?? "Unknown",
		};
	},
});

export const createCity = mutation({
	args: {
		name: v.string(),
		countryId: v.id("utilities_countries"),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const name = args.name.trim();
		if (!name) throw new Error("City name is required");
		// Validate country exists and is Southern Africa
		const country = await ctx.db.get(args.countryId);
		if (!country) throw new Error("Country not found");
		if (country.region !== "southern-africa") {
			throw new Error("Country must be in Southern Africa");
		}
		const slug = slugify(name);
		const existing = await ctx.db
			.query("utilities_cities")
			.withIndex("by_slug", (q) => q.eq("slug", slug))
			.first();
		if (existing) throw new Error("City already exists");
		return ctx.db.insert("utilities_cities", {
			name,
			slug,
			countryId: args.countryId,
			isActive: true,
			createdAt: Date.now(),
		});
	},
});

export const updateCity = mutation({
	args: {
		id: v.id("utilities_cities"),
		name: v.optional(v.string()),
		countryId: v.optional(v.id("utilities_countries")),
		isActive: v.optional(v.boolean()),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const existing = await ctx.db.get(args.id);
		if (!existing) throw new Error("City not found");
		const patch: Record<string, unknown> = {};
		if (args.name !== undefined) {
			const name = args.name.trim();
			if (!name) throw new Error("City name is required");
			patch.name = name;
			patch.slug = slugify(name);
		}
		if (args.countryId !== undefined) {
			const country = await ctx.db.get(args.countryId);
			if (!country) throw new Error("Country not found");
			if (country.region !== "southern-africa") {
				throw new Error("Country must be in Southern Africa");
			}
			patch.countryId = args.countryId;
		}
		if (args.isActive !== undefined) {
			patch.isActive = args.isActive;
		}
		return ctx.db.patch(args.id, patch);
	},
});

export const deleteCity = mutation({
	args: { id: v.id("utilities_cities"), adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		return ctx.db.delete(args.id);
	},
});

// ── Seed mutation (idempotent) ───────────────────────────────────────

export const seedUtilities = mutation({
	args: { adminToken: v.string() },
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);

		const now = Date.now();
		let cuisinesAdded = 0;
		let countriesAdded = 0;
		let citiesAdded = 0;

		// Seed cuisines (idempotent by slug)
		for (const name of DEFAULT_CUISINES) {
			const slug = slugify(name);
			const existing = await ctx.db
				.query("utilities_cuisines")
				.withIndex("by_slug", (q) => q.eq("slug", slug))
				.first();
			if (!existing) {
				await ctx.db.insert("utilities_cuisines", {
					name,
					slug,
					isActive: true,
					createdAt: now,
				});
				cuisinesAdded++;
			}
		}

		// Seed countries (idempotent by name)
		const countryIdMap = new Map<string, string>();
		for (const name of SOUTHERN_AFRICA_COUNTRIES) {
			const existing = await ctx.db
				.query("utilities_countries")
				.withIndex("by_name", (q) => q.eq("name", name))
				.first();
			if (existing) {
				countryIdMap.set(name, existing._id);
			} else {
				const id = await ctx.db.insert("utilities_countries", {
					name,
					region: "southern-africa",
					isActive: true,
					createdAt: now,
				});
				countryIdMap.set(name, id);
				countriesAdded++;
			}
		}

		// Seed cities (idempotent by slug)
		for (const [countryName, cities] of Object.entries(DEFAULT_CITIES)) {
			const countryId = countryIdMap.get(countryName);
			if (!countryId) continue;
			for (const cityName of cities) {
				const slug = slugify(cityName);
				const existing = await ctx.db
					.query("utilities_cities")
					.withIndex("by_slug", (q) => q.eq("slug", slug))
					.first();
				if (!existing) {
					await ctx.db.insert("utilities_cities", {
						name: cityName,
						slug,
						countryId: countryId as any,
						isActive: true,
						createdAt: now,
					});
					citiesAdded++;
				}
			}
		}

		return { cuisinesAdded, countriesAdded, citiesAdded };
	},
});

// ── Admin setup verification ─────────────────────────────────────────
// Returns whether ADMIN_TOKEN is configured in the Convex environment.
// Does NOT reveal the token value.
export const verifyAdminSetup = query({
	args: {},
	handler: async () => {
		const hasToken = !!process.env.ADMIN_TOKEN;
		return {
			adminTokenConfigured: hasToken,
			message: hasToken
				? "ADMIN_TOKEN is configured in Convex."
				: "ADMIN_TOKEN is NOT set in the Convex environment. " +
					"Run: npx convex env set ADMIN_TOKEN <your-token-value>",
		};
	},
});
