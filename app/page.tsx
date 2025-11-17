import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

import type { FAQ, Pillar } from "@/types/content";

const navigation = [
        { label: "Guide", href: "#guide" },
        { label: "Judging", href: "#judging" },
        { label: "Consultancy/Training", href: "#consultancy" },
        { label: "Events", href: "#events" },
        { label: "Partnerships", href: "#partnerships" },
];
const getContent = <T,>(filename: string): T => {
        const filePath = path.join(process.cwd(), "content", filename);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContents) as T;
};

const pillars = getContent<Pillar[]>("pillars.txt");
const faqs = getContent<FAQ[]>("faqs.txt");

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-background text-foreground">
			<header className="sticky top-0 z-20 bg-[rgb(var(--background-rgb)/0.95)] backdrop-blur">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
					<div className="text-lg font-semibold text-(--primary)">
						Savaal Guide
					</div>
					<nav className="hidden items-center gap-6 text-sm font-medium md:flex">
						{navigation.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-(--primary) transition hover:text-foreground"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<Link
						href="#signup"
						className="rounded-full bg-(--primary) px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-(--primary-dark)]"
					>
						Sign Up / Log In
					</Link>
				</div>
			</header>

			<main className="flex-1">
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
							<h1
								id="hero-title"
								className="mt-4 text-4xl font-semibold leading-tight md:text-5xl"
							>
								The Guide to Cultural Hospitality in Africa.
							</h1>
							<p className="mt-4 text-lg text-(--secondary-light)]">
								Curating and celebrating excellence in Zimbabwe&apos;s finest
								restaurants, hotels, and lifestyle. Our mission is to elevate
								local standards, celebrate culinary artistry, and connect
								travelers to authentic African experiences.
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
							<p>
								To be the leading cultural hospitality guide across Africa,
								starting in Zimbabwe.
							</p>
							<div className="mt-4 h-px bg-white/20" />
							<p className="font-semibold text-white">Mission</p>
							<p>
								To elevate local hospitality standards, celebrate culinary and
								lifestyle excellence, and connect travelers to authentic African
								experiences.
							</p>
						</div>
					</div>
				</section>

				<section id="guide" className="mx-auto max-w-5xl px-6 py-16">
					<div className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-(--border)]">
						<p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
							About
						</p>
						<h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
							What is the Savaal Guide?
						</h2>
						<ul className="mt-6 space-y-3 text-lg text-(--paragraph-color)]">
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />A
								curated digital platform showcasing verified restaurants,
								hotels, bars, and vendors.
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />
								Savaal-certified listings based on experiential standards.
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-(--primary)" />
								The standard for African hospitality, culture, and experience.
							</li>
						</ul>
					</div>
				</section>

				<section
					className="bg-[rgb(var(--secondary-rgb)/0.6)] py-20"
					aria-label="Savaal Ecosystem"
				>
					<div className="mx-auto max-w-6xl px-6">
						<p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-(--accent-strong)]">
							Ecosystem
						</p>
						<h2 className="mt-2 text-center text-3xl font-semibold text-(--heading-color)]">
							Three pillars of the Savaal experience
						</h2>
						<div className="mt-12 grid gap-8 md:grid-cols-3">
							{pillars.map((pillar) => (
								<div
									key={pillar.title}
									id={pillar.anchor}
									className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-(--border-light)]"
								>
									<div className="flex items-center gap-3">
										<div className="rounded-full bg-(--secondary)] p-3 text-(--primary)">
											●
										</div>
										<h3 className="text-xl font-semibold text-(--heading-color)]">
											{pillar.title}
										</h3>
									</div>
									<p className="mt-4 text-sm text-(--muted)]">
										{pillar.description}
									</p>
									<ul className="mt-6 space-y-2 text-sm font-medium text-(--paragraph-color)]">
										{pillar.items.map((item) => (
											<li key={item} className="flex items-center gap-2">
												<span className="text-(--accent-strong)]">▸</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

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
									From mystery audits to immersive workshops, our consultants
									translate the Savaal standards into daily service rituals,
									beverage programs, and guest journey design.
								</p>
								<ul className="mt-6 space-y-2 text-sm font-medium text-(--heading-color)]">
									<li>• Hospitality capability assessments</li>
									<li>• Staff coaching & leadership development</li>
									<li>• Concept refinement & menu storytelling</li>
								</ul>
							</div>
							<div className="rounded-2xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6">
								<p className="text-sm font-semibold text-(--heading-color)]">
									Book a training intensive
								</p>
								<p className="mt-2 text-sm text-(--muted-dark)]">
									Choose on-site or virtual formats across Zimbabwe and the
									region.
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
									Pop-up dinners, mixology showcases, and cultural festivals
									designed to highlight Zimbabwe&apos;s culinary icons and
									rising stars.
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
						<h2 className="text-2xl font-semibold text-(--heading-color)]">
							Judging
						</h2>
						<p className="mt-4 text-(--paragraph-color)]">
							Savaal Judges are cultural tastemakers who discreetly assess
							venues via the Savaal Scorecard. Their evaluations ensure that
							every listing meets the promise of elevated service, cuisine, and
							cultural immersion.
						</p>
						<Link
							href="mailto:partners@savaalguide.com"
							className="mt-6 inline-flex rounded-full border border-(--primary) px-5 py-2 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
						>
							Apply to Judge
						</Link>
					</div>
				</section>

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
									Create an account to access the Guide, save your favourite
									listings, and receive early invites to Savaal-curated events
									and hospitality insights.
								</p>
							</div>
							<div className="rounded-2xl bg-white p-6 shadow">
								<p className="text-sm font-semibold text-(--heading-color)]">
									Ready to log in or request access?
								</p>
								<p className="mt-2 text-sm text-(--muted-dark)]">
									Email us at{" "}
									<span className="font-semibold">
										partners@savaalguide.com
									</span>{" "}
									to activate your profile while we complete the public portal.
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

				<section
					id="partnerships"
					className="bg-(--primary) px-6 py-16 text-white"
					aria-label="Business Call to Action"
				>
					<div className="mx-auto max-w-4xl text-center">
						<p className="text-sm uppercase tracking-[0.4em] text-(--peach)]">
							For Businesses
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							Elevate Your Business. Request a Savaal Certification Audit or
							Partnership.
						</h2>
						<p className="mt-4 text-(--peach-light)]">
							Engage with our consultancy team for training, audits, or bespoke
							cultural collaborations that spotlight your venue on the
							continent&apos;s most trusted hospitality guide.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link
								href="/consultancy"
								className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--primary) shadow-lg"
							>
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

				<section className="mx-auto max-w-5xl px-6 py-16" aria-label="FAQs">
					<div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-(--border)]">
						<p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
							FAQs
						</p>
						<h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
							Common Questions
						</h2>
						<dl className="mt-8 space-y-6">
							{faqs.map((faq) => (
								<div key={faq.question}>
									<dt className="text-xl font-semibold text-(--heading-color)]">
										{faq.question}
									</dt>
									<dd className="mt-2 text-(--paragraph-color)]">
										{faq.answer}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</section>
			</main>

			<footer className="bg-(--foreground)] px-6 py-10 text-(--sand)]">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-lg font-semibold text-white">Savaal Guide</p>
						<p className="text-sm text-(--sand)]">
							Guiding the future of cultural hospitality in Zimbabwe and across
							Africa.
						</p>
					</div>
					<div className="text-sm">
						<p>
							Email:{" "}
							<a href="mailto:partners@savaalguide.com" className="underline">
								partners@savaalguide.com
							</a>
						</p>
						<p>
							Instagram:{" "}
							<a
								href="https://instagram.com/savaal_guide"
								className="underline"
							>
								@savaal_guide
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
