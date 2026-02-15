"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { convexClient, api } from "@/lib/convex";
import type { Id } from "@/convex/_generated/dataModel";

const adminToken = process.env.ADMIN_TOKEN;

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

// ── Seed ─────────────────────────────────────────────────────────────

export async function seedUtilitiesAction() {
	await requireAdminSession();
	const result = await convexClient.mutation(api.utilities.seedUtilities, {
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	return result;
}

// ── Cuisines ─────────────────────────────────────────────────────────

export async function createCuisineAction(formData: FormData) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	if (!name) throw new Error("Cuisine name is required");
	await convexClient.mutation(api.utilities.createCuisine, {
		name,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

export async function updateCuisineAction(
	id: Id<"utilities_cuisines">,
	formData: FormData
) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	if (!name) throw new Error("Cuisine name is required");
	await convexClient.mutation(api.utilities.updateCuisine, {
		id,
		name,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

export async function toggleCuisineAction(
	id: Id<"utilities_cuisines">,
	isActive: boolean
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.updateCuisine, {
		id,
		isActive,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
}

export async function deleteCuisineAction(
	id: Id<"utilities_cuisines">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.deleteCuisine, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

// ── Countries ────────────────────────────────────────────────────────

export async function createCountryAction(formData: FormData) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	if (!name) throw new Error("Country name is required");
	await convexClient.mutation(api.utilities.createCountry, {
		name,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

export async function toggleCountryAction(
	id: Id<"utilities_countries">,
	isActive: boolean
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.updateCountry, {
		id,
		isActive,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
}

export async function deleteCountryAction(
	id: Id<"utilities_countries">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.deleteCountry, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

// ── Cities ───────────────────────────────────────────────────────────

export async function createCityAction(formData: FormData) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	const countryId = String(formData.get("countryId") ?? "").trim();
	if (!name) throw new Error("City name is required");
	if (!countryId) throw new Error("Country is required");
	await convexClient.mutation(api.utilities.createCity, {
		name,
		countryId: countryId as Id<"utilities_countries">,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}

export async function toggleCityAction(
	id: Id<"utilities_cities">,
	isActive: boolean
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.updateCity, {
		id,
		isActive,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
}

export async function deleteCityAction(
	id: Id<"utilities_cities">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.utilities.deleteCity, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/utilities");
	redirect("/admin/utilities");
}
