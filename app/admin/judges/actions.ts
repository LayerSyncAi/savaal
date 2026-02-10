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

export async function createJudgeAction(formData: FormData) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	if (!name) {
		throw new Error("Judge name is required");
	}
	await convexClient.mutation(api.judges.createJudge, {
		name,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/judges");
	redirect("/admin/judges");
}

export async function updateJudgeAction(
	id: Id<"judges">,
	formData: FormData
) {
	await requireAdminSession();
	const name = String(formData.get("name") ?? "").trim();
	if (!name) {
		throw new Error("Judge name is required");
	}
	await convexClient.mutation(api.judges.updateJudge, {
		id,
		name,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/judges");
	redirect("/admin/judges");
}

export async function deleteJudgeAction(
	id: Id<"judges">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.judges.deleteJudge, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/judges");
	redirect("/admin/judges");
}
