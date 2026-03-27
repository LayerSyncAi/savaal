"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { convexClient, api } from "@/lib/convex";
import type { Id } from "@/convex/_generated/dataModel";

const adminToken = process.env.ADMIN_TOKEN;
const adminPassword = process.env.ADMIN_PASSWORD;

async function requireAdminSession() {
	const cookieStore = await cookies();
	const cookieValue = cookieStore.get("savaal_admin")?.value;
	if (cookieValue !== "true") {
		throw new Error("Unauthorized");
	}
}

function requireAdminToken(): string {
	if (!adminToken) {
		throw new Error("ADMIN_TOKEN is not configured");
	}
	return adminToken;
}

function parseJudgeComments(formData: FormData) {
	const count = Number(formData.get("judgeCommentCount") ?? 0);
	if (count === 0) return undefined;

	const comments: { judgeName: string; comment: string; rating: number }[] = [];
	for (let i = 0; i < Math.min(count, 3); i++) {
		const judgeName = String(formData.get(`judgeComment_${i}_judgeName`) ?? "").trim();
		const comment = String(formData.get(`judgeComment_${i}_comment`) ?? "").trim();
		const rating = Number(formData.get(`judgeComment_${i}_rating`) ?? 0);
		if (judgeName && comment) {
			comments.push({ judgeName, comment, rating: Number.isNaN(rating) ? 0 : rating });
		}
	}
	return comments.length > 0 ? comments : undefined;
}

function parseGallery(formData: FormData) {
	const count = Number(formData.get("galleryCount") ?? 0);
	if (count === 0) return undefined;

	const urls: string[] = [];
	for (let i = 0; i < count; i++) {
		const url = String(formData.get(`gallery_${i}`) ?? "").trim();
		if (url) urls.push(url);
	}
	return urls.length > 0 ? urls : undefined;
}

function parseMenu(formData: FormData) {
	const count = Number(formData.get("menuCount") ?? 0);
	if (count === 0) return undefined;

	const items: { name: string; description: string; price: string }[] = [];
	for (let i = 0; i < count; i++) {
		const name = String(formData.get(`menu_${i}_name`) ?? "").trim();
		const description = String(formData.get(`menu_${i}_description`) ?? "").trim();
		const price = String(formData.get(`menu_${i}_price`) ?? "").trim();
		if (name) {
			items.push({ name, description, price });
		}
	}
	return items.length > 0 ? items : undefined;
}

/**
 * Validates and returns a Google Maps embed URL.
 *
 * The URL must be obtained from Google Maps by:
 * 1. Opening the location on Google Maps
 * 2. Clicking "Share" → "Embed a map"
 * 3. Copying the iframe code
 * 4. Extracting just the URL from the src="..." attribute
 *
 * Expected format: https://www.google.com/maps/embed?pb=...
 */
function resolveGoogleMapsEmbedUrl(raw: string): string | undefined {
	if (!raw) return undefined;

	const trimmed = raw.trim();

	// Accept Google Maps embed URLs (the proper embed format)
	if (trimmed.startsWith("https://www.google.com/maps/embed")) {
		return trimmed;
	}

	// Also accept the older maps.google.com embed format
	if (trimmed.startsWith("https://maps.google.com/maps") && trimmed.includes("output=embed")) {
		return trimmed;
	}

	// Reject other URL formats — they won't work in iframes
	return undefined;
}

function parseGoodFor(formData: FormData): string[] | undefined {
	const count = Number(formData.get("goodForCount") ?? 0);
	if (count === 0) return undefined;

	const tags: string[] = [];
	for (let i = 0; i < count; i++) {
		const tag = String(formData.get(`goodFor_${i}`) ?? "").trim();
		if (tag) tags.push(tag);
	}
	return tags.length > 0 ? tags : undefined;
}

function parseGuideItemForm(formData: FormData) {
	const published = formData.get("published") === "on";
	const rating = Number(formData.get("rating"));
	const priceLevel = Number(formData.get("priceLevel"));
	const sortOrder = Number(formData.get("sortOrder"));

	return {
		name: String(formData.get("name") ?? ""),
		category: String(formData.get("category") ?? "Restaurant") as "Restaurant" | "Hotel" | "Bar",
		cuisine: String(formData.get("cuisine") ?? ""),
		city: String(formData.get("city") ?? ""),
		country: String(formData.get("country") ?? ""),
		region: String(formData.get("region") ?? ""),
		location: String(formData.get("location") ?? ""),
		coverImage: String(formData.get("imageUrl") ?? ""),
		rating: Number.isNaN(rating) ? 0 : rating,
		priceLevel: Number.isNaN(priceLevel) ? 1 : priceLevel,
		description: String(formData.get("description") ?? ""),
		scores: [
			{ label: "Taste & Technique", score: String(formData.get("scoreTaste") ?? "") },
			{ label: "Service", score: String(formData.get("scoreService") ?? "") },
			{ label: "Beverage Experience", score: String(formData.get("scoreBeverage") ?? "") },
			{ label: "Menu Composition", score: String(formData.get("scoreMenu") ?? "") },
			{ label: "Presentation", score: String(formData.get("scorePresentation") ?? "") },
			{ label: "Ambience", score: String(formData.get("scoreAmbience") ?? "") },
			{ label: "Perceived Value", score: String(formData.get("scoreValue") ?? "") },
		],
		totalScore: String(formData.get("totalScore") ?? ""),
		judgeComments: parseJudgeComments(formData),
		goodFor: parseGoodFor(formData),
		gallery: parseGallery(formData),
		menu: parseMenu(formData),
		googleMapsUrl: resolveGoogleMapsEmbedUrl(String(formData.get("googleMapsUrl") ?? "").trim()),
		sortOrder: Number.isNaN(sortOrder) ? 0 : sortOrder,
		published,
	};
}

export async function loginAdminAction(formData: FormData) {
	if (!adminPassword) {
		throw new Error("ADMIN_PASSWORD is not configured");
	}
	const password = String(formData.get("password") ?? "");
	if (password !== adminPassword) {
		throw new Error("Invalid password");
	}
	const cookieStore = await cookies();
	cookieStore.set("savaal_admin", "true", {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		path: "/",
	});
	redirect("/admin/guide");
}

export async function createGuideItemAction(formData: FormData) {
	await requireAdminSession();
	const payload = parseGuideItemForm(formData);
	await convexClient.mutation(api.guideItems.createGuideItem, {
		payload,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/guide");
	revalidatePath("/guide");
	redirect("/admin/guide");
}

export async function updateGuideItemAction(
	id: Id<"guideItems">,
	formData: FormData
) {
	await requireAdminSession();
	const patch = parseGuideItemForm(formData);
	await convexClient.mutation(api.guideItems.updateGuideItem, {
		id,
		patch,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/guide");
	revalidatePath("/guide");
	redirect("/admin/guide");
}

export async function deleteGuideItemAction(
	id: Id<"guideItems">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.guideItems.deleteGuideItem, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/guide");
	revalidatePath("/guide");
	redirect("/admin/guide");
}
