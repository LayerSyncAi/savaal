import Link from "next/link";

export function ForBusinessSections() {
        return (
                <>
                        <section id="consultancy" className="mx-auto max-w-5xl px-6 py-16">
                                <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-(--border)]">
                                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                                                <div>
                                                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
                                                                Consultancy & Training
                                                        </p>
                                                        <h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
                                                                Elevate teams with Savaal Consultants
                                                        </h2>
                                                        <p className="mt-4 text-(--paragraph-color)]">
                                                                From mystery audits to immersive workshops, our consultants translate the Savaal standards into daily service
                                                                rituals, beverage programs, and guest journey design.
                                                        </p>
                                                        <ul className="mt-6 space-y-2 text-sm font-medium text-(--heading-color)]">
                                                                <li>• Hospitality capability assessments</li>
                                                                <li>• Staff coaching & leadership development</li>
                                                                <li>• Concept refinement & menu storytelling</li>
                                                        </ul>
                                                </div>
                                                <div className="rounded-2xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6">
                                                        <p className="text-sm font-semibold text-(--heading-color)]">Book a training intensive</p>
                                                        <p className="mt-2 text-sm text-(--muted-dark)]">
                                                                Choose on-site or virtual formats across Zimbabwe and the region.
                                                        </p>
                                                        <Link
                                                                href="/consultancy"
                                                                className="mt-6 inline-flex w-full justify-center rounded-full bg-(--primary) px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-(--primary-dark)]"
                                                        >
                                                                View Consultancy Services
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section id="events" className="mx-auto max-w-5xl px-6 pb-16">
                                <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-(--border)]">
                                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                                                <div>
                                                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
                                                                Events & Curations
                                                        </p>
                                                        <h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
                                                                The Curators reimagine cultural hospitality
                                                        </h2>
                                                        <p className="mt-4 text-(--paragraph-color)]">
                                                                Pop-up dinners, mixology showcases, and cultural festivals designed to highlight Zimbabwe&apos;s culinary icons
                                                                and rising stars.
                                                        </p>
                                                </div>
                                                <div className="rounded-2xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6">
                                                        <ul className="space-y-2 text-sm font-medium text-(--heading-color)]">
                                                                <li>• Seasonal pop-up restaurants</li>
                                                                <li>• Collaborative chef residences</li>
                                                                <li>• Art, fashion, and sound pairings</li>
                                                        </ul>
                                                        <Link
                                                                href="/events"
                                                                className="mt-6 inline-flex w-full justify-center rounded-full border border-(--primary) px-5 py-3 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
                                                        >
                                                                Discover Upcoming Events
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section id="judging" className="mx-auto max-w-5xl px-6 py-16">
                                <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-(--border)]">
                                        <h2 className="text-2xl font-semibold text-(--heading-color)]">Judging</h2>
                                        <p className="mt-4 text-(--paragraph-color)]">
                                                Savaal Judges are cultural tastemakers who discreetly assess venues via the Savaal Scorecard. Their evaluations ensure
                                                that every listing meets the promise of elevated service, cuisine, and cultural immersion.
                                        </p>
                                        <Link
                                                href="mailto:partners@savaalguide.com"
                                                className="mt-6 inline-flex rounded-full border border-(--primary) px-5 py-2 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
                                        >
                                                Apply to Judge
                                        </Link>
                                </div>
                        </section>

                        <section id="partnerships" className="bg-(--primary) px-6 py-16 text-white" aria-label="Business Call to Action">
                                <div className="mx-auto max-w-4xl text-center">
                                        <p className="p-on-dark text-sm uppercase tracking-[0.4em] text-(--peach)]">For Businesses</p>
                                        <h2 className="p-on-dark mt-4 text-3xl font-semibold">
                                                Elevate Your Business. Request a Savaal Certification Audit or Partnership.
                                        </h2>
                                        <p className="p-on-dark mt-4 text-(--peach-light)]">
                                                Engage with our consultancy team for training, audits, or bespoke cultural collaborations that spotlight your venue on
                                                the continent&apos;s most trusted hospitality guide.
                                        </p>
                                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                                                <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--primary) shadow-lg">
                                                        Request Consultancy
                                                </Link>
                                                <Link
                                                        href="/partnerships"
                                                        className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                                >
                                                        Explore Partnerships
                                                </Link>
                                        </div>
                                </div>
                        </section>
                </>
        );
}
