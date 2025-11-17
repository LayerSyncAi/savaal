export function AboutUsSection() {
        return (
                <section id="guide" className="mx-auto max-w-5xl px-6 py-16">
                        <div className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-(--border)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">About</p>
                                <h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
                                        What is the Savaal Guide?
                                </h2>
                                <ul className="mt-6 space-y-3 text-lg text-(--paragraph-color)]">
                                        <li className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />A curated digital platform showcasing
                                                verified restaurants, hotels, bars, and vendors.
                                        </li>
                                        <li className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />Savaal-certified listings based on
                                                experiential standards.
                                        </li>
                                        <li className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />The standard for African hospitality,
                                                culture, and experience.
                                        </li>
                                </ul>
                        </div>
                </section>
        );
}
