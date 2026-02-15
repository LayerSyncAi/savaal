import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Generate a short-lived upload URL for Convex file storage.
 * The client POSTs the file to this URL, receives a storageId,
 * then passes that storageId to a mutation to persist it.
 */
export const generateUploadUrl = mutation({
	args: {},
	handler: async (ctx) => {
		return await ctx.storage.generateUploadUrl();
	},
});

/**
 * Given a Convex storage ID, return a serving URL for the file.
 */
export const getImageUrl = query({
	args: { storageId: v.id("_storage") },
	handler: async (ctx, args) => {
		return await ctx.storage.getUrl(args.storageId);
	},
});
