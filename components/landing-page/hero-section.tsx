import Link from "next/link";

export function HeroSection() {
        return (
                <section
                        className="relative isolate overflow-hidden bg-(--hero-background)"
                        aria-labelledby="hero-title"
                >
                        <div
                                className="absolute inset-0 -z-10 opacity-70"
                                style={{
                                        backgroundImage:
                                                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                }}
                        />
                        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[rgb(var(--primary-rgb)/0.9)] via-[rgb(var(--foreground-rgb)/0.7)] to-transparent" />
                        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 text-white md:flex-row md:items-center">
                                <div className="md:w-2/3">
                                        <p className="text-sm uppercase tracking-[0.3em] text-(--secondary)]">
                                                Vision · Mission · Culture
                                        </p>
                                        <h1 id="hero-title" className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                                                The Guide to Cultural Hospitality in Africa.
                                        </h1>
                                        <p className="mt-4 text-lg text-(--secondary-light)]">
                                                Curating and celebrating excellence in Zimbabwe&apos;s finest restaurants,
                                                hotels, and lifestyle. Our mission is to elevate local standards,
                                                celebrate culinary artistry, and connect travelers to authentic African
                                                experiences.
                                        </p>
                                        <div className="mt-8 flex flex-wrap items-center gap-4">
                                                <Link
                                                        href="#guide"
                                                        className="rounded-full bg-(--secondary)] px-6 py-3 text-sm font-semibold text-(--primary) shadow-lg transition hover:bg-white"
                                                >
                                                        Explore the Savaal Guide
                                                </Link>
                                                <div className="text-sm uppercase tracking-[0.3em] text-(--secondary)]">
                                                        Zimbabwe · Africa
                                                </div>
                                        </div>
                                </div>
                                <div className="rounded-3xl bg-white/10 p-6 text-sm text-(--secondary)] shadow-xl backdrop-blur md:w-1/3">
                                        <p className="font-semibold text-white">Vision</p>
                                        <p>To be the leading cultural hospitality guide across Africa, starting in Zimbabwe.</p>
                                        <div className="mt-4 h-px bg-white/20" />
                                        <p className="font-semibold text-white">Mission</p>
                                        <p>
                                                To elevate local hospitality standards, celebrate culinary and lifestyle excellence, and
                                                connect travelers to authentic African experiences.
                                        </p>
                                </div>
                        </div>
                </section>
        );
}
