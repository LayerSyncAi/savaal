import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	judges: defineTable({
		name: v.string(),
		createdAt: v.number(),
		updatedAt: v.number(),
	}).index("by_name", ["name"]),

	guideItems: defineTable({
		name: v.string(),
		category: v.union(
			v.literal("Restaurant"),
			v.literal("Hotel"),
			v.literal("Bar")
		),
		cuisine: v.string(),
		city: v.string(),
		country: v.string(),
		region: v.string(),
		location: v.string(),
		coverImage: v.string(),
		rating: v.number(),
		priceLevel: v.number(),
		description: v.string(),
		scores: v.array(
			v.object({
				label: v.string(),
				score: v.string(),
			})
		),
		totalScore: v.string(),
		judgeComments: v.optional(
			v.array(
				v.object({
					judgeName: v.string(),
					comment: v.string(),
					rating: v.number(),
				})
			)
		),
		gallery: v.optional(v.array(v.string())),
		menu: v.optional(
			v.array(
				v.object({
					name: v.string(),
					description: v.string(),
					price: v.string(),
				})
			)
		),
		sortOrder: v.number(),
		published: v.boolean(),
		createdAt: v.number(),
		updatedAt: v.number(),
	})
		.index("by_category", ["category"])
		.index("by_published", ["published"]),

	utilities_cuisines: defineTable({
		name: v.string(),
		slug: v.string(),
		isActive: v.boolean(),
		createdAt: v.number(),
	}).index("by_slug", ["slug"]),

	utilities_countries: defineTable({
		name: v.string(),
		code: v.optional(v.string()),
		region: v.literal("southern-africa"),
		isActive: v.boolean(),
		createdAt: v.number(),
	}).index("by_name", ["name"]),

	events: defineTable({
		slug: v.string(),
		title: v.string(),
		category: v.union(v.literal("gathering"), v.literal("training")),
		presentedBy: v.string(),
		host: v.string(),
		theme: v.string(),
		image: v.string(),
		description: v.array(v.string()),
		highlights: v.array(v.string()),
		date: v.string(),
		time: v.string(),
		price: v.string(),
		seating: v.string(),
		location: v.object({
			venue: v.string(),
			address: v.string(),
		}),
		notes: v.array(v.string()),
		cta: v.object({
			label: v.string(),
			href: v.string(),
		}),
		published: v.boolean(),
		showOnHomepage: v.boolean(),
		sortOrder: v.number(),
		createdAt: v.number(),
		updatedAt: v.number(),
	})
		.index("by_slug", ["slug"])
		.index("by_published", ["published"])
		.index("by_showOnHomepage", ["showOnHomepage"]),

	utilities_cities: defineTable({
		name: v.string(),
		slug: v.string(),
		countryId: v.id("utilities_countries"),
		isActive: v.boolean(),
		createdAt: v.number(),
	})
		.index("by_slug", ["slug"])
		.index("by_countryId", ["countryId"]),
});
