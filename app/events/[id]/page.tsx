import Link from "next/link";
import { notFound } from "next/navigation";
import { convexClient, api } from "@/lib/convex";
import type { Doc } from "@/convex/_generated/dataModel";

type EventPageProps = {
	params: Promise<{ id: string }>;
};

type EventItem = Doc<"events">;

export default async function EventDetailPage({ params }: EventPageProps) {
	const { id } = await params;
	const slug = decodeURIComponent(id);
	const event = await convexClient.query(api.events.getEventBySlug, {
		slug,
	});

	if (!event || !event.published) {
		return notFound();
	}

	return <EventContent event={event} />;
}

const EventContent = ({ event }: { event: EventItem }) => {
	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
			<header className="overflow-hidden rounded-3xl shadow-lg">
                                <div
                                        style={{
                                                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%), url(${event.image})`,
                                                backgroundPosition: "center",
                                        }}
                                        className="flex min-h-[320px] flex-col justify-end bg-[size:110%] transition-[background-size] duration-500 hover:bg-[size:120%]"
                                >
                                        <div className="space-y-3 p-8 text-white">
                                                <div className="flex flex-wrap items-center gap-3">
                                                        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                                                                {event.category === "training" ? "Training" : "Gathering"}
                                                        </span>
                                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] p-on-dark">
                                                                {event.presentedBy}
                                                        </p>
                                                </div>
                                                <h1 className="text-4xl font-bold leading-tight p-white">
                                                        {event.title}
                                                </h1>
						<p className="text-lg text-amber-100 p-on-dark">
							Hosted by {event.host}
						</p>
						<p className="max-w-3xl text-lg text-neutral-100 p-on-dark">
							{event.theme}
						</p>
					</div>
				</div>
			</header>

			<div className="grid gap-8 md:grid-cols-[2fr,1fr]">
                                        <div className="space-y-5 text-neutral-800">
                                                {event.description.map((paragraph, index) => (
                                                        <p key={index} className="leading-relaxed">
                                                                {paragraph}
                                                        </p>
                                                ))}

                                        <div className="rounded-2xl bg-neutral-50 p-6">
                                                <h2 className="text-lg font-semibold text-neutral-900">
                                                        What to expect
                                                </h2>
                                                <ul className="mt-3 space-y-2 text-neutral-700">
                                                        {event.highlights.map((highlight, index) => (
                                                                <li key={index}>{highlight}</li>
                                                        ))}
                                                </ul>
                                        </div>
                                </div>

				<aside className="flex flex-col gap-6 rounded-2xl bg-neutral-900 p-6 text-white">
					<div className="space-y-1">
						<p className="text-sm uppercase tracking-wide p-on-dark">Price</p>
						<p className="text-lg font-semibold p-white">{event.price}</p>
						<p className="text-sm text-amber-100 p-white">{event.seating}</p>
					</div>

					<div className="space-y-2">
						<p className="text-sm uppercase tracking-wide p-on-dark">
							Date & time
						</p>
						<p className="text-lg font-semibold p-white">{event.date}</p>
						<p className="text-sm text-amber-100 p-white">{event.time}</p>
					</div>

					<div className="space-y-2">
						<p className="text-sm uppercase tracking-wide p-on-dark">
							Location
						</p>
						<p className="text-lg font-semibold p-white">
							{event.location.venue}
						</p>
						<p className="text-sm text-amber-100 p-white">
							{event.location.address}
						</p>
					</div>

					<div className="space-y-2">
						<p className="text-sm uppercase tracking-wide p-on-dark">
							Important details
						</p>
						<ul className="space-y-1 text-sm text-amber-100">
							{event.notes.map((note, index) => (
								<li key={index}>{note}</li>
							))}
						</ul>
					</div>

					<Link
						href={event.cta.href}
						className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-300"
					>
						{event.cta.label}
					</Link>
				</aside>
			</div>

			<div className="flex justify-between gap-4">

				<Link
					href="/events"
					className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
				>
					Back to events
				</Link>
        <Link
					href="/"
					className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
				>
					Back to home
				</Link>
			</div>
		</section>
	);
};
