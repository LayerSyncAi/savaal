import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
const categoryValidator = v.union(v.literal("Restaurant"), v.literal("Hotel"), v.literal("Bar"));
const scoreValidator = v.object({
    label: v.string(),
    score: v.string(),
});
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
    sortOrder: v.number(),
    published: v.boolean(),
};
function assertAdmin(adminToken) {
    const expected = process.env.ADMIN_TOKEN;
    if (!expected || !adminToken || adminToken !== expected) {
        throw new Error("Unauthorized");
    }
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
        const timestamp = Date.now();
        return ctx.db.insert("guideItems", {
            ...args.payload,
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
        const existing = await ctx.db.get(args.id);
        if (!existing) {
            throw new Error("Guide item not found");
        }
        return ctx.db.patch(args.id, {
            ...args.patch,
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
