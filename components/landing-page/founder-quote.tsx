import Link from "next/link";

export function FounderQuote() {
        return (
                <section className="mx-auto max-w-5xl px-6 py-16">
                        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white shadow-2xl ring-1 ring-black/10">
                                <div className="grid gap-10 md:grid-cols-[1.15fr,0.85fr]">
                                        <div className="space-y-6 p-10">
                                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                                                        From our founder
                                                </p>
                                                <blockquote className="space-y-4">
                                                        <p className="text-3xl font-semibold leading-tight md:text-4xl">
                                                                “Savaal exists to dignify everyday hosts and the guests who trust
                                                                them. Every guide entry, audit, and workshop is a promise that
                                                                cultural hospitality can uplift livelihoods across Zimbabwe.”
                                                        </p>
                                                        <p className="text-lg text-amber-100">
                                                                <span className="font-semibold text-white">— Tariro Moyo,</span> Founder & Chief Curator
                                                        </p>
                                                </blockquote>
                                                <p className="text-base text-neutral-200">
                                                        That promise is why we are building the Savaal Academy. Our training
                                                        tracks for judges, “taste hunters,” and aspiring chefs turn passion
                                                        into careers that benefit farmers, families, and entire culinary
                                                        communities. Government support accelerates this mission.
                                                </p>
                                                <div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-900">
                                                        <span className="rounded-full bg-white/90 px-4 py-2">Judging Standards Lab</span>
                                                        <span className="rounded-full bg-white/90 px-4 py-2">Community Taste Hunter Camps</span>
                                                        <span className="rounded-full bg-white/90 px-4 py-2">Chef Upskilling Studio</span>
                                                </div>
                                                <Link
                                                        href="/about-us/academy-training"
                                                        className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-300"
                                                >
                                                        Explore the Academy & Training
                                                </Link>
                                        </div>
                                        <div className="flex flex-col justify-between gap-6 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_rgba(0,0,0,0))] p-10">
                                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                                        <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                                                                Why this matters
                                                        </p>
                                                        <p className="mt-3 text-base text-neutral-100">
                                                                Each training cohort is paired with smallholder producers and
                                                                independent venues, creating jobs while preserving Zimbabwe’s
                                                                culinary heritage.
                                                        </p>
                                                </div>
                                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                                        <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                                                                Pathways we fund
                                                        </p>
                                                        <ul className="mt-3 space-y-2 text-neutral-100">
                                                                <li>• Judge accreditation with mentorship from senior curators</li>
                                                                <li>• Regional taste hunter placements in rural food hubs</li>
                                                                <li>• Junior chef studios focused on nutrition and safety</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
