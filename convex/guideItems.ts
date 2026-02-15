import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { DatabaseReader } from "./_generated/server";

const categoryValidator = v.union(
	v.literal("Restaurant"),
	v.literal("Hotel"),
	v.literal("Bar")
);

const scoreValidator = v.object({
	label: v.string(),
	score: v.string(),
});

const judgeCommentValidator = v.object({
	judgeName: v.string(),
	comment: v.string(),
	rating: v.number(),
});

const SCORE_MAX: Record<string, number> = {
	"Taste & Technique": 35,
	Service: 25,
	"Beverage Experience": 10,
	"Menu Composition": 10,
	Presentation: 10,
	Ambience: 5,
	"Perceived Value": 5,
};

function validateScoresAndRating(payload: {
	rating: number;
	scores: { label: string; score: string }[];
}) {
	if (payload.rating < 0 || payload.rating > 5) {
		throw new Error("Rating must be between 0 and 5");
	}
	for (const s of payload.scores) {
		const max = SCORE_MAX[s.label];
		if (max !== undefined) {
			const val = parseFloat(s.score);
			if (!Number.isNaN(val) && (val < 0 || val > max)) {
				throw new Error(
					`${s.label} score must be between 0 and ${max}`
				);
			}
		}
	}
}

const guideItemPayload = {
	name: v.string(),
	category: categoryValidator,
	cuisine: v.string(),
	city: v.string(),
	country: v.string(),
	region: v.string(),
	location: v.string(),
	coverImage: v.string(),
	rating: v.number(),
	priceLevel: v.number(),
	description: v.string(),
	scores: v.array(scoreValidator),
	totalScore: v.string(),
	judgeComments: v.optional(v.array(judgeCommentValidator)),
	sortOrder: v.number(),
	published: v.boolean(),
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

/**
 * Validate cuisine, city, and country for a guide item.
 * - Cuisine must exist in utilities_cuisines (active).
 * - City must exist in utilities_cities (active, Southern Africa).
 * - Country is derived from the city's country; the submitted country value is ignored.
 * Returns the corrected country name.
 */
async function validateAndResolveCityCountryCuisine(
	db: DatabaseReader,
	cuisine: string,
	city: string
): Promise<string> {
	// Validate cuisine exists
	const cuisines = await db.query("utilities_cuisines").collect();
	const cuisineExists = cuisines.some(
		(c) => c.name === cuisine && c.isActive
	);
	if (!cuisineExists) {
		throw new Error(`Cuisine "${cuisine}" is not in the allowed list`);
	}

	// Validate city exists and resolve country
	const cities = await db.query("utilities_cities").collect();
	const cityRecord = cities.find((c) => c.name === city && c.isActive);
	if (!cityRecord) {
		throw new Error(`City "${city}" is not in the allowed list`);
	}

	const country = await db.get(cityRecord.countryId);
	if (!country || country.region !== "southern-africa") {
		throw new Error(`City "${city}" does not belong to a valid Southern Africa country`);
	}

	return country.name;
}

export const listGuideItems = query({
	args: {
		category: v.optional(categoryValidator),
		publishedOnly: v.optional(v.boolean()),
	},
	handler: async (ctx, args) => {
		const items = await ctx.db.query("guideItems").collect();
		const filtered = items.filter((item) => {
			if (args.category && item.category !== args.category) {
				return false;
			}
			if (args.publishedOnly && !item.published) {
				return false;
			}
			return true;
		});

		return filtered.sort((a, b) => {
			if (a.sortOrder !== b.sortOrder) {
				return a.sortOrder - b.sortOrder;
			}
			return b.createdAt - a.createdAt;
		});
	},
});

export const getGuideItemById = query({
	args: {
		id: v.id("guideItems"),
	},
	handler: async (ctx, args) => {
		return ctx.db.get(args.id);
	},
});

export const createGuideItem = mutation({
	args: {
		payload: v.object(guideItemPayload),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		validateScoresAndRating(args.payload);
		// Server-side: derive country from city, validate cuisine
		const resolvedCountry = await validateAndResolveCityCountryCuisine(
			ctx.db,
			args.payload.cuisine,
			args.payload.city
		);
		const timestamp = Date.now();
		return ctx.db.insert("guideItems", {
			...args.payload,
			country: resolvedCountry,
			createdAt: timestamp,
			updatedAt: timestamp,
		});
	},
});

export const updateGuideItem = mutation({
	args: {
		id: v.id("guideItems"),
		patch: v.object(guideItemPayload),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		validateScoresAndRating(args.patch);
		const existing = await ctx.db.get(args.id);
		if (!existing) {
			throw new Error("Guide item not found");
		}
		// Server-side: derive country from city, validate cuisine
		const resolvedCountry = await validateAndResolveCityCountryCuisine(
			ctx.db,
			args.patch.cuisine,
			args.patch.city
		);
		return ctx.db.patch(args.id, {
			...args.patch,
			country: resolvedCountry,
			updatedAt: Date.now(),
		});
	},
});

export const deleteGuideItem = mutation({
	args: {
		id: v.id("guideItems"),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		return ctx.db.delete(args.id);
	},
});
