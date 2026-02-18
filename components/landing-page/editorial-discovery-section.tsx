import Link from "next/link";
import { convexClient, api } from "@/lib/convex";

type HomepageEvent = {
  slug: string;
  title: string;
  image: string;
  category: "gathering" | "training";
};

const editorialLabels = [
  "Recently Added",
  "This Month's Tables",
  "Noteworthy Stays",
];

export async function EditorialDiscoverySection() {
  const homepageEvents = await convexClient.query(api.events.listEvents, {
    publishedOnly: true,
    homepageOnly: true,
  });

  const cards: { label: string; event: HomepageEvent }[] = [];
  const used = new Set<string>();

  for (
    let i = 0;
    i < editorialLabels.length && i < homepageEvents.length;
    i++
  ) {
    const event = homepageEvents.find((e) => !used.has(e._id));
    if (!event) break;
    used.add(event._id);
    cards.push({ label: editorialLabels[i], event });
  }

  if (cards.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-[rgb(var(--secondary-rgb)/0.25)] py-20"
      aria-labelledby="editorial-discovery-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent-strong)]">
              Editorial Discovery
            </p>
            <h2
              id="editorial-discovery-title"
              className="mt-2 text-3xl font-semibold text-(--heading-color)]"
            >
              Editorial Discovery
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--primary-dark) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <EditorialDiscoveryCard
              key={`${card.label}-${card.event.slug}`}
              event={card.event}
              label={card.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const EditorialDiscoveryCard = ({
  event,
  label,
}: {
  event: HomepageEvent;
  label: string;
}) => {
  return (
    <Link
      href={`/events/${event.slug}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%), url(${event.image})`,
      }}
      className="group flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-2xl bg-neutral-200 bg-[size:110%] bg-center shadow-lg shadow-neutral-900/15 transition-[background-size,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[size:120%] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--secondary-rgb)/0.25)]"
    >
      <span className="m-6 inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 shadow-sm">
        {label}
      </span>
      <div className="mt-auto bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
        <h3 className="text-xl font-semibold p-on-dark">{event.title}</h3>
      </div>
    </Link>
  );
};
