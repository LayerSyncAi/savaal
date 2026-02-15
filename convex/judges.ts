import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

export const listJudges = query({
	handler: async (ctx) => {
		return ctx.db
			.query("judges")
			.withIndex("by_name")
			.collect();
	},
});

export const createJudge = mutation({
	args: {
		name: v.string(),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		if (!args.name.trim()) {
			throw new Error("Judge name is required");
		}
		const timestamp = Date.now();
		return ctx.db.insert("judges", {
			name: args.name.trim(),
			createdAt: timestamp,
			updatedAt: timestamp,
		});
	},
});

export const updateJudge = mutation({
	args: {
		id: v.id("judges"),
		name: v.string(),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		if (!args.name.trim()) {
			throw new Error("Judge name is required");
		}
		const existing = await ctx.db.get(args.id);
		if (!existing) {
			throw new Error("Judge not found");
		}
		return ctx.db.patch(args.id, {
			name: args.name.trim(),
			updatedAt: Date.now(),
		});
	},
});

export const deleteJudge = mutation({
	args: {
		id: v.id("judges"),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		return ctx.db.delete(args.id);
	},
});
