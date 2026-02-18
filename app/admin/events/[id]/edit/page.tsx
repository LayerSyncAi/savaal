import Link from "next/link";
import { notFound } from "next/navigation";
import { convexClient, api } from "@/lib/convex";
import type { Id } from "@/convex/_generated/dataModel";
import { deleteEventAction, updateEventAction } from "../../actions";
import { EventForm } from "../../components/event-form";

type EventEditPageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function EditEventPage({ params }: EventEditPageProps) {
	const { id } = await params;
	const eventId = id as Id<"events">;
	const item = await convexClient.query(api.events.getEventById, {
		id: eventId,
	});

	if (!item) {
		notFound();
	}

	return (
		<EventForm
			title="Edit event"
			subtitle="Update event details, publish status, or homepage visibility."
			action={updateEventAction.bind(null, eventId)}
			initialValues={{
				slug: item.slug,
				title: item.title,
				category: item.category,
				presentedBy: item.presentedBy,
				host: item.host,
				theme: item.theme,
				image: item.image,
				description: item.description,
				highlights: item.highlights,
				date: item.date,
				time: item.time,
				tickets: item.tickets,
				seating: item.seating,
				location: item.location,
				notes: item.notes,
				cta: item.cta,
				published: item.published,
				showOnHomepage: item.showOnHomepage,
				sortOrder: item.sortOrder,
			}}
		>
			<button
				formAction={deleteEventAction.bind(null, eventId)}
				className="rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
			>
				Delete
			</button>
			<Link
				href="/admin/events"
				className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
			>
				Cancel
			</Link>
		</EventForm>
	);
}
