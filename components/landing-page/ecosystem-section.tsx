import Link from "next/link";

import type { Pillar } from "@/types/content";

const PILLAR_CTAS: Record<string, { href: string; label: string }> = {
        guide: {
                href: "/guide",
                label: "Explore the Guide",
        },
        consultancy: {
                href: "/services",
                label: "Meet the Consultants",
        },
        events: {
                href: "/judging/prospective-judges",
                label: "Join as a Curator",
        },
};

interface EcosystemSectionProps {
        pillars: Pillar[];
}

export function EcosystemSection({ pillars }: EcosystemSectionProps) {
        return (
                <section className="bg-[rgb(var(--secondary-rgb)/0.6)] py-20" aria-label="Savaal Ecosystem">
                        <div className="mx-auto max-w-6xl px-6">
                                <p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-(--accent-strong)]">
                                        Ecosystem
                                </p>
                                <h2 className="mt-2 text-center text-3xl font-semibold text-(--heading-color)]">
                                        Three pillars of the Savaal experience
                                </h2>
                                <div className="mt-12 grid gap-8 md:grid-cols-3">
                                        {pillars.map((pillar) => {
                                                const cta = PILLAR_CTAS[pillar.anchor];

                                                return (
                                                        <div key={pillar.title} id={pillar.anchor} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-(--border-light)]">
                                                        <div className="flex items-center gap-3">
                                                                <div className="rounded-full bg-(--secondary)] p-3 text-(--primary)">●</div>
                                                                <h3 className="text-xl font-semibold text-(--heading-color)]">{pillar.title}</h3>
                                                        </div>
                                                        <p className="mt-4 text-sm text-(--muted)]">{pillar.description}</p>
                                                        <ul className="mt-6 space-y-2 text-sm font-medium text-(--paragraph-color)]">
                                                                {pillar.items.map((item) => (
                                                                        <li key={item} className="flex items-center gap-2">
                                                                                <span className="text-(--accent-strong)]">▸</span>
                                                                                {item}
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                        {cta ? (
                                                                <Link
                                                                        href={cta.href}
                                                                        className="mt-6 inline-flex items-center justify-center rounded-full border border-(--primary) px-5 py-2 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
                                                                >
                                                                        {cta.label}
                                                                </Link>
                                                        ) : null}
                                                </div>
                                                );
                                        })}
                                </div>
                        </div>
                </section>
        );
}
