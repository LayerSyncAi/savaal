import Link from "next/link";

import { events, type EventDetails } from "@/content/events";

const editorialGroups = [
  {
    label: "Recently Added",
    picker: (items: EventDetails[], used: Set<string>) =>
      items.find((event) => !used.has(event.id)),
  },
  {
    label: "This Month’s Tables",
    picker: (items: EventDetails[], used: Set<string>) =>
      items.find((event) => event.category === "gathering" && !used.has(event.id)),
  },
  {
    label: "Noteworthy Stays",
    picker: (items: EventDetails[], used: Set<string>) =>
      items.find((event) => event.category === "training" && !used.has(event.id)),
  },
];

const buildEditorialCards = () => {
  const used = new Set<string>();

  return editorialGroups
    .map((group) => {
      const picked =
        group.picker(events, used) ??
        events.find((event) => !used.has(event.id));

      if (!picked) {
        return null;
      }

      used.add(picked.id);

      return { ...group, event: picked };
    })
    .filter((card): card is { label: string; event: EventDetails; picker: (items: EventDetails[], used: Set<string>) => EventDetails | undefined } =>
      Boolean(card),
    )
    .slice(0, 3);
};

export function EditorialDiscoverySection() {
  const editorialCards = buildEditorialCards();

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
          {editorialCards.map((card) => (
            <EditorialDiscoveryCard
              key={`${card.label}-${card.event.id}`}
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
  event: EventDetails;
  label: string;
}) => {
  return (
    <Link
      href={`/events/${event.id}`}
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
