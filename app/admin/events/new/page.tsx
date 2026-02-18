import Link from "next/link";
import { createEventAction } from "../actions";
import { EventForm } from "../components/event-form";

export default function NewEventPage() {
	return (
		<EventForm
			title="Create event"
			subtitle="Add a new gathering or training event."
			action={createEventAction}
		>
			<Link
				href="/admin/events"
				className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
			>
				Cancel
			</Link>
		</EventForm>
	);
}
