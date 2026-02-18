"use client";

import { useMemo, useRef, useState, type MutableRefObject } from "react";
import type React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Doc } from "@/convex/_generated/dataModel";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

const eventTabs = [
  {
    id: "gathering" as const,
    label: "Gatherings",
    copy: "Intimate dinners and salons that celebrate Zimbabwe's culinary heritage.",
  },
  {
    id: "training" as const,
    label: "Training",
    copy: "Academy-led workshops that uplift judges, taste hunters, and aspiring chefs.",
  },
];

type EventCategory = (typeof eventTabs)[number]["id"];

type EventItem = Doc<"events">;

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>(() => {
    if (typeof window === "undefined") {
      return "gathering";
    }

    const hash = window.location.hash.replace("#", "");
    return hash === "training" ? "training" : "gathering";
  });

  const allEvents = useQuery(api.events.listEvents, { publishedOnly: true });

  const filteredEvents = useMemo(
    () =>
      (allEvents ?? []).filter((event: EventItem) => event.category === activeCategory),
    [allEvents, activeCategory],
  );

  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            Events
          </p>
          <h1 className="text-4xl font-bold text-neutral-900">
            Gatherings and training that honor food, memory, and
            <span className="text-(--tertiary)"> community</span>
          </h1>
          <p className="max-w-3xl text-lg text-neutral-700">
            Discover upcoming Savaal experiences rooted in storytelling, heritage,
            and hands-on learning. Our academy programming is built to improve
            livelihoods—training judges, taste hunters, and junior chefs to serve
            their communities with care.
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3" id="gatherings">
              {eventTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    activeCategory === tab.id
                      ? "border-amber-600 bg-amber-50 text-amber-800"
                      : "border-amber-200 text-neutral-700 hover:border-amber-400 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-sm text-neutral-600" id="training">
              {eventTabs.find((tab) => tab.id === activeCategory)?.copy}
            </div>
          </div>
          {allEvents === undefined ? (
            <div className="py-12 text-center text-sm text-neutral-500">
              Loading events...
            </div>
          ) : (
            <OutlineCards events={filteredEvents} />
          )}
        </div>

        <div>
         <Link
                                        href="/"
                                        className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
                                >
                                        Back to home
                                </Link>
        </div>
      </div>
    </section>
  );
}

const OutlineCards = ({ events }: { events: EventItem[] }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const el = e.target as HTMLElement;
    const cursorEl = cursorRef.current as HTMLElement | null;

    if (!cursorEl) return;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";

      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";

      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {events.map((event) => (
          <Card key={event._id} event={event} />
        ))}
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ event }: { event: EventItem }) => {
  return (
    <Link
      href={`/events/${event.slug}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%), url(${event.image})`,
        backgroundPosition: "center",
      }}
      className="outline-card flex aspect-square w-full flex-col justify-between overflow-hidden rounded-2xl bg-neutral-400 bg-[size:110%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:120%]"
    >
      <div className="pointer-events-none flex items-center justify-between p-6 text-xl font-semibold text-white md:text-2xl">
        <h3 className="max-w-[14ch] leading-tight p-white">{event.title}</h3>
        <FiArrowRight />
      </div>
      <div className="pointer-events-none grid grid-cols-1 gap-1 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 text-sm font-medium text-white sm:grid-cols-3 sm:items-end">
        <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
          {event.category === "training" ? "Training" : "Gathering"}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] p-on-dark sm:col-span-3">
          {event.presentedBy}
        </p>
        <p className="sm:truncate p-on-dark ">{event.location.venue}</p>
        <p className="sm:text-center p-on-dark ">{event.date}</p>
        <p className="sm:text-right p-on-dark ">
          {event.tickets && event.tickets.length > 0
            ? event.tickets.length === 1
              ? `${event.tickets[0].price} · ${event.tickets[0].seats} seats`
              : `From ${event.tickets[0].price}`
            : event.price ?? "—"}
        </p>
      </div>
    </Link>
  );
};

const Cursor = ({
  cursorRef,
}: {
  cursorRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="hover-cursor pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 border border-neutral-900"
    />
  );
};
