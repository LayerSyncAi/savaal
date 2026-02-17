import Link from "next/link";
import { convexClient, api } from "@/lib/convex";
import { EventsAdminList } from "./components/events-admin-list";

export default async function EventsAdminPage() {
	const items = await convexClient.query(api.events.listEvents, {});

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-neutral-900">
						Events Admin
					</h1>
					<p className="text-sm text-neutral-600">
						Manage gatherings and training events.
					</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<Link
						href="/admin/events/new"
						className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
					>
						Add new event
					</Link>
					<Link
						href="/admin/guide"
						className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
					>
						Manage Guide
					</Link>
					<Link
						href="/admin/judges"
						className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
					>
						Manage Judges
					</Link>
				</div>
			</div>

			<EventsAdminList items={items} />
		</section>
	);
}
