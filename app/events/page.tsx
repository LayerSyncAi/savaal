"use client";

import { useRef, type MutableRefObject } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

import { events, type EventDetails } from "@/content/events";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

export default function EventsPage() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
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

        <OutlineCards events={events} />

        <div>
          <Link
            href="/"
            className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

const OutlineCards = ({ events }: { events: EventDetails[] }) => {
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
          <Card key={event.id} event={event} />
        ))}
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ event }: { event: EventDetails }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%), url(${event.image})`,
        backgroundPosition: "center",
      }}
      className="outline-card flex aspect-square w-full flex-col justify-between overflow-hidden rounded-2xl bg-neutral-400 bg-[size:110%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:120%]"
    >
      <div className="pointer-events-none flex items-center justify-between p-6 text-xl font-semibold text-white md:text-2xl">
        <h3 className="max-w-[14ch] leading-tight">{event.title}</h3>
        <FiArrowRight />
      </div>
      <div className="pointer-events-none grid grid-cols-1 gap-1 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 text-sm font-medium text-white sm:grid-cols-3 sm:items-end">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:col-span-3">
          {event.presentedBy}
        </p>
        <p className="sm:truncate">{event.location.venue}</p>
        <p className="sm:text-center">{event.date}</p>
        <p className="sm:text-right">{event.price}</p>
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
