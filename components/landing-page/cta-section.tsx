import Link from "next/link";

export function CtaSection() {
        return (
                <section id="signup" className="mx-auto max-w-5xl px-6 py-16">
                        <div className="rounded-3xl bg-[rgb(var(--secondary-rgb)/0.6)] p-8 shadow-inner ring-1 ring-(--border-light)]">
                                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                                        <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent-strong)]">
                                                        Community
                                                </p>
                                                <h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
                                                        Join the Savaal network
                                                </h2>
                                                <p className="mt-4 text-(--paragraph-color)]">
                                                        Create an account to access the Guide, save your favourite listings, and receive early invites to
                                                        Savaal-curated events and hospitality insights.
                                                </p>
                                        </div>
                                        <div className="rounded-2xl bg-white p-6 shadow">
                                                <p className="text-sm font-semibold text-(--heading-color)]">
                                                        Ready to log in or request access?
                                                </p>
                                                <p className="mt-2 text-sm text-(--muted-dark)]">
                                                        Email us at <span className="font-semibold">partners@savaalguide.com</span> to activate your profile while
                                                        we complete the public portal.
                                                </p>
                                                <Link
                                                        href="mailto:partners@savaalguide.com?subject=Savaal%20Guide%20Access"
                                                        className="mt-6 inline-flex w-full justify-center rounded-full bg-(--primary) px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-(--primary-dark)]"
                                                >
                                                        Request Access
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
