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

function parseDescriptionLines(formData: FormData): string[] {
	const count = Number(formData.get("descriptionCount") ?? 0);
	const lines: string[] = [];
	for (let i = 0; i < count; i++) {
		const line = String(formData.get(`description_${i}`) ?? "").trim();
		if (line) lines.push(line);
	}
	return lines;
}

function parseHighlights(formData: FormData): string[] {
	const count = Number(formData.get("highlightCount") ?? 0);
	const lines: string[] = [];
	for (let i = 0; i < count; i++) {
		const line = String(formData.get(`highlight_${i}`) ?? "").trim();
		if (line) lines.push(line);
	}
	return lines;
}

function parseTickets(
	formData: FormData
): { label: string; price: string; seats: number }[] {
	const count = Number(formData.get("ticketCount") ?? 0);
	const tickets: { label: string; price: string; seats: number }[] = [];
	for (let i = 0; i < count; i++) {
		const label = String(formData.get(`ticket_${i}_label`) ?? "").trim();
		const price = String(formData.get(`ticket_${i}_price`) ?? "").trim();
		const seats = Number(formData.get(`ticket_${i}_seats`) ?? 0);
		if (label && price) {
			tickets.push({ label, price, seats: Number.isNaN(seats) ? 0 : seats });
		}
	}
	return tickets;
}

function parseNotes(formData: FormData): string[] {
	const count = Number(formData.get("noteCount") ?? 0);
	const lines: string[] = [];
	for (let i = 0; i < count; i++) {
		const line = String(formData.get(`note_${i}`) ?? "").trim();
		if (line) lines.push(line);
	}
	return lines;
}

function parseEventForm(formData: FormData) {
	const published = formData.get("published") === "on";
	const showOnHomepage = formData.get("showOnHomepage") === "on";
	const sortOrder = Number(formData.get("sortOrder") ?? 0);

	return {
		slug: String(formData.get("slug") ?? ""),
		title: String(formData.get("title") ?? ""),
		category: String(formData.get("category") ?? "gathering") as
			| "gathering"
			| "training",
		presentedBy: String(formData.get("presentedBy") ?? ""),
		host: String(formData.get("host") ?? ""),
		theme: String(formData.get("theme") ?? ""),
		image: String(formData.get("imageUrl") ?? ""),
		description: parseDescriptionLines(formData),
		highlights: parseHighlights(formData),
		date: String(formData.get("date") ?? ""),
		time: String(formData.get("time") ?? ""),
		tickets: parseTickets(formData),
		location: {
			venue: String(formData.get("locationVenue") ?? ""),
			address: String(formData.get("locationAddress") ?? ""),
		},
		notes: parseNotes(formData),
		cta: {
			label: String(formData.get("ctaLabel") ?? ""),
			href: String(formData.get("ctaHref") ?? ""),
		},
		published,
		showOnHomepage,
		sortOrder: Number.isNaN(sortOrder) ? 0 : sortOrder,
	};
}

export async function createEventAction(formData: FormData) {
	await requireAdminSession();
	const payload = parseEventForm(formData);
	await convexClient.mutation(api.events.createEvent, {
		payload,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/events");
	revalidatePath("/events");
	revalidatePath("/");
	redirect("/admin/events");
}

export async function updateEventAction(
	id: Id<"events">,
	formData: FormData
) {
	await requireAdminSession();
	const patch = parseEventForm(formData);
	await convexClient.mutation(api.events.updateEvent, {
		id,
		patch,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/events");
	revalidatePath("/events");
	revalidatePath("/");
	redirect("/admin/events");
}

export async function deleteEventAction(
	id: Id<"events">,
	_formData?: FormData
) {
	await requireAdminSession();
	await convexClient.mutation(api.events.deleteEvent, {
		id,
		adminToken: requireAdminToken(),
	});
	revalidatePath("/admin/events");
	revalidatePath("/events");
	revalidatePath("/");
	redirect("/admin/events");
}
