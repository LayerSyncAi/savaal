import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    guideItems: defineTable({
        name: v.string(),
        category: v.union(v.literal("Restaurant"), v.literal("Hotel"), v.literal("Bar")),
        cuisine: v.string(),
        city: v.string(),
        country: v.string(),
        region: v.string(),
        location: v.string(),
        coverImage: v.string(),
        rating: v.number(),
        priceLevel: v.number(),
        description: v.string(),
        scores: v.array(v.object({
            label: v.string(),
            score: v.string(),
        })),
        totalScore: v.string(),
        sortOrder: v.number(),
        published: v.boolean(),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_category", ["category"])
        .index("by_published", ["published"]),
});
