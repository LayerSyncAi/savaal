import Link from "next/link";
import { events } from "@/content/events";

export default function EventsPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Events
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Gatherings that honor food, memory, and community
        </h1>
        <p className="max-w-3xl text-lg text-neutral-700">
          Discover upcoming Savaal experiences rooted in storytelling, heritage,
          and the joy of dining together.
        </p>
      </header>

      <div className="space-y-8">
        {events.map((event) => (
          <article
            key={event.id}
            className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm"
          >
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-8 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                {event.presentedBy}
              </p>
              <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold text-neutral-900">
                    {event.title}
                  </h2>
                  <p className="text-base text-neutral-700">Hosted by {event.host}</p>
                  <p className="max-w-2xl text-lg text-neutral-800">{event.theme}</p>
                </div>
                <div className="shrink-0 rounded-2xl bg-white px-5 py-4 text-right shadow-sm">
                  <p className="text-sm font-semibold text-neutral-700">{event.date}</p>
                  <p className="text-lg font-bold text-neutral-900">{event.time}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 px-8 py-10 md:grid-cols-[2fr,1fr]">
              <div className="space-y-5 text-neutral-800">
                {event.description.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="rounded-2xl bg-neutral-50 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    What to expect
                  </h3>
                  <ul className="mt-3 space-y-2 text-neutral-700">
                    <li>Five-course dinner designed for remembrance and celebration.</li>
                    <li>Wine pairings that echo the story of each course.</li>
                    <li>Intimate gathering guided by storytelling from Chef Al.</li>
                  </ul>
                </div>
              </div>

              <aside className="flex flex-col gap-6 rounded-2xl bg-neutral-900 p-6 text-white">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wide text-amber-200">Price</p>
                  <p className="text-lg font-semibold">{event.price}</p>
                  <p className="text-sm text-amber-100">{event.seating}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wide text-amber-200">Location</p>
                  <p className="text-lg font-semibold">{event.location.venue}</p>
                  <p className="text-sm text-amber-100">{event.location.address}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wide text-amber-200">Important details</p>
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
          </article>
        ))}
      </div>

      <div>
        <Link
          href="/"
          className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
