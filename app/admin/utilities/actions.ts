"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { convexClient, api } from "@/lib/convex";
import type { Id } from "@/convex/_generated/dataModel";

const adminToken = process.env.ADMIN_TOKEN;

type ActionResult = { success: true } | { success: false; error: string };

async function requireAdminSession() {
	const cookieStore = await cookies();
	const cookieValue = cookieStore.get("savaal_admin")?.value;
	if (cookieValue !== "true") {
		throw new Error("Unauthorized");
	}
}

function requireAdminToken(): string {
	if (!adminToken) {
		throw new Error(
			"ADMIN_TOKEN is not configured in the Next.js environment. " +
				"Add ADMIN_TOKEN to your .env.local file."
		);
	}
	return adminToken;
}

/**
 * Wraps a Convex mutation call with error handling.
 * Returns a structured result instead of throwing, so the UI can display
 * the error message rather than causing an unhandled 500.
 */
async function safeAdminAction<T>(
	fn: () => Promise<T>
): Promise<(ActionResult & { data?: T })> {
	try {
		await requireAdminSession();
		const data = await fn();
		return { success: true, data };
	} catch (err: unknown) {
		const message =
			err instanceof Error ? err.message : "An unexpected error occurred";
		console.error("[admin/utilities] Action failed:", message);
		return { success: false, error: message };
	}
}

// ── Seed ─────────────────────────────────────────────────────────────

export async function seedUtilitiesAction() {
	const result = await safeAdminAction(() =>
		convexClient.mutation(api.utilities.seedUtilities, {
			adminToken: requireAdminToken(),
		})
	);
	if (result.success) {
		revalidatePath("/admin/utilities");
		return result.data!;
	}
	throw new Error(result.error);
}

// ── Cuisines ─────────────────────────────────────────────────────────

export async function createCuisineAction(
	_prevState: ActionResult | null,
	formData: FormData
): Promise<ActionResult> {
	const name = String(formData.get("name") ?? "").trim();
	if (!name) return { success: false, error: "Cuisine name is required" };
	const result = await safeAdminAction(() =>
		convexClient.mutation(api.utilities.createCuisine, {
			name,
			adminToken: requireAdminToken(),
		})
	);
	if (result.success) {
		revalidatePath("/admin/utilities");
		redirect("/admin/utilities");
	}
	return result;
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

export async function createCountryAction(
	_prevState: ActionResult | null,
	formData: FormData
): Promise<ActionResult> {
	const name = String(formData.get("name") ?? "").trim();
	if (!name) return { success: false, error: "Country name is required" };
	const result = await safeAdminAction(() =>
		convexClient.mutation(api.utilities.createCountry, {
			name,
			adminToken: requireAdminToken(),
		})
	);
	if (result.success) {
		revalidatePath("/admin/utilities");
		redirect("/admin/utilities");
	}
	return result;
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

export async function createCityAction(
	_prevState: ActionResult | null,
	formData: FormData
): Promise<ActionResult> {
	const name = String(formData.get("name") ?? "").trim();
	const countryId = String(formData.get("countryId") ?? "").trim();
	if (!name) return { success: false, error: "City name is required" };
	if (!countryId) return { success: false, error: "Country is required" };
	const result = await safeAdminAction(() =>
		convexClient.mutation(api.utilities.createCity, {
			name,
			countryId: countryId as Id<"utilities_countries">,
			adminToken: requireAdminToken(),
		})
	);
	if (result.success) {
		revalidatePath("/admin/utilities");
		redirect("/admin/utilities");
	}
	return result;
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
