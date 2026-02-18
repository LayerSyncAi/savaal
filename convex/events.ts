import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const categoryValidator = v.union(
	v.literal("gathering"),
	v.literal("training")
);

const eventPayload = {
	slug: v.string(),
	title: v.string(),
	category: categoryValidator,
	presentedBy: v.string(),
	host: v.string(),
	theme: v.string(),
	image: v.string(),
	description: v.array(v.string()),
	highlights: v.array(v.string()),
	date: v.string(),
	time: v.string(),
	tickets: v.array(
		v.object({
			label: v.string(),
			price: v.string(),
		})
	),
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
};

function assertAdmin(adminToken?: string) {
	const expected = process.env.ADMIN_TOKEN;
	if (!expected) {
		console.error(
			"[assertAdmin] ADMIN_TOKEN env var is not set in the Convex environment."
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

export const listEvents = query({
	args: {
		category: v.optional(categoryValidator),
		publishedOnly: v.optional(v.boolean()),
		homepageOnly: v.optional(v.boolean()),
	},
	handler: async (ctx, args) => {
		const items = await ctx.db.query("events").collect();
		const filtered = items.filter((item) => {
			if (args.category && item.category !== args.category) {
				return false;
			}
			if (args.publishedOnly && !item.published) {
				return false;
			}
			if (args.homepageOnly && !item.showOnHomepage) {
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

export const getEventById = query({
	args: {
		id: v.id("events"),
	},
	handler: async (ctx, args) => {
		return ctx.db.get(args.id);
	},
});

export const getEventBySlug = query({
	args: {
		slug: v.string(),
	},
	handler: async (ctx, args) => {
		return ctx.db
			.query("events")
			.withIndex("by_slug", (q) => q.eq("slug", args.slug))
			.first();
	},
});

export const createEvent = mutation({
	args: {
		payload: v.object(eventPayload),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);

		// Ensure slug is unique
		const existing = await ctx.db
			.query("events")
			.withIndex("by_slug", (q) => q.eq("slug", args.payload.slug))
			.first();
		if (existing) {
			throw new Error(`An event with slug "${args.payload.slug}" already exists`);
		}

		const timestamp = Date.now();
		return ctx.db.insert("events", {
			...args.payload,
			createdAt: timestamp,
			updatedAt: timestamp,
		});
	},
});

export const updateEvent = mutation({
	args: {
		id: v.id("events"),
		patch: v.object(eventPayload),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		const existing = await ctx.db.get(args.id);
		if (!existing) {
			throw new Error("Event not found");
		}

		// Ensure slug is unique (excluding self)
		const slugConflict = await ctx.db
			.query("events")
			.withIndex("by_slug", (q) => q.eq("slug", args.patch.slug))
			.first();
		if (slugConflict && slugConflict._id !== args.id) {
			throw new Error(`An event with slug "${args.patch.slug}" already exists`);
		}

		return ctx.db.patch(args.id, {
			...args.patch,
			updatedAt: Date.now(),
		});
	},
});

export const deleteEvent = mutation({
	args: {
		id: v.id("events"),
		adminToken: v.string(),
	},
	handler: async (ctx, args) => {
		assertAdmin(args.adminToken);
		return ctx.db.delete(args.id);
	},
});
