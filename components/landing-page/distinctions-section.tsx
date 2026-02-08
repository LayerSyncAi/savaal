import Link from "next/link";
import { BadgeCheck, BedDouble, Star } from "lucide-react";

const DISTINCTIONS = [
        {
                title: "What is a Savaal Star?",
                description:
                        "A distinction awarded to restaurants demonstrating exceptional mastery, consistency and intent",
                cta: "Discover restaurants",
                href: "/guide",
                icon: Star,
        },
        {
                title: "What is Savaal Selected?",
                description:
                        "Venues included in the Savaal Guide - considered, visited and chosen for quality and character",
                cta: "View the guide",
                href: "/guide",
                icon: BadgeCheck,
        },
        {
                title: "What is a Savaal Mark?",
                description:
                        "A distinction for hotels and lodges defined by comfort, service, design and sense of place",
                cta: "Discover stays",
                href: "/guide",
                icon: BedDouble,
        },
];

export function DistinctionsSection() {
        return (
                <section className="bg-[rgb(var(--secondary-rgb)/0.6)] py-20" aria-labelledby="distinctions-title">
                        <div className="mx-auto max-w-6xl px-6">
                                <p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-(--accent-strong)]">
                                        Distinctions
                                </p>
                                <h2
                                        id="distinctions-title"
                                        className="mt-2 text-center text-3xl font-semibold text-(--heading-color)]"
                                >
                                        The Savaal Guide distinctions
                                </h2>
                                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                        {DISTINCTIONS.map((tile) => {
                                                const Icon = tile.icon;

                                                return (
                                                        <div
                                                                key={tile.title}
                                                                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-(--border-light)]"
                                                        >
                                                                <div className="flex items-center gap-3">
                                                                        <div className="rounded-full bg-(--secondary)] p-3 text-(--primary)]">
                                                                                <Icon className="h-5 w-5" aria-hidden="true" />
                                                                        </div>
                                                                        <h3 className="text-xl font-semibold text-(--heading-color)]">
                                                                                {tile.title}
                                                                        </h3>
                                                                </div>
                                                                <p className="mt-4 text-sm text-(--muted)]">
                                                                        {tile.description}
                                                                </p>
                                                                <Link
                                                                        href={tile.href}
                                                                        className="mt-6 inline-flex items-center justify-center rounded-full border border-primary) px-5 py-2 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                                                >
                                                                        {tile.cta}
                                                                </Link>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>
                </section>
        );
}
