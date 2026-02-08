import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const pillars = [
	{
		title: "Vision",
		summary:
			"To be the leading cultural hospitality guide across Africa, starting in Zimbabwe.",
	},
	{
		title: "Mission",
		summary:
			"To elevate local hospitality standards, celebrate culinary and lifestyle excellence, and connect travelers to authentic African experiences.",
	},
];

const guideHighlights = [
	{
		title: "Curated listings",
		description:
			"A digital platform showcasing verified restaurants, hotels, bars, and vendors that reflect the spirit of African hospitality.",
	},
	{
		title: "Savaal-certified standards",
		description:
			"Each feature is backed by hands-on evaluations that measure ambience, service, and cultural resonance.",
	},
	{
		title: "Beyond discovery",
		description:
			"Expect editorial storytelling, training services, and immersive events designed to uplift the industry.",
	},
];

const aboutSavaalCards = [
	{
		title: "Savaal Star",
		description:
			"A distinction awarded to restaurants demonstrating exceptional mastery, consistency and intent.",
		href: "/judging/businesses",
		image: {
			src: "/globe.svg",
			alt: "Globe illustration representing the Savaal Star distinction.",
		},
	},
	{
		title: "Savaal Selected",
		description:
			"Venues included in the Savaal Guide — considered, visited and chosen for quality and character.",
		href: "/judging/prospective-judges",
		image: {
			src: "/window.svg",
			alt: "Window illustration representing the Savaal Selected listings.",
		},
	},
	{
		title: "About Savaal",
		description:
			"Learn how Savaal works and explore our services for partners and businesses.",
		href: "/about-us/services/consulting",
		image: {
			src: "/file.svg",
			alt: "Document illustration introducing how Savaal works.",
		},
	},
];

export default function AboutUsPage() {
	return (
		<div className="bg-neutral-50">
			<section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24">
				<div className="flex flex-col gap-6 rounded-3xl bg-white/90 p-10 shadow-sm">
					<div className="space-y-3">
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
							About Savaal
						</p>
						<h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
							<span className="text-(--tertiary)">Guiding travelers</span> to the heart of African hospitality.
						</h1>
						<p className="text-lg text-neutral-700">
							Savaal is a cultural hospitality guide that amplifies the chefs,
							hosts, and innovators shaping Zimbabwe&apos;s lifestyle scene and
							the continent beyond. We spotlight authentic spaces, champion
							service excellence, and open the door to experiences that feel
							both local and unforgettable.
						</p>
					</div>
					<div className="flex flex-wrap gap-4">
						<RoundedSlideButtonLight
							href="/about-us/services"
							title="Explore our services"
							hoverFillColor="var(--primary-dark)"
							icon={<FiArrowRight />}
							defaultColor="var(--sand)"
							hoverScale={1.05}
						/>
						<Link
							href="/"
							className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
						>
							Back to home
						</Link>
					</div>
				</div>

				<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{aboutSavaalCards.map((card) => (
						<article
							key={card.title}
							className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
						>
							<div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
								<Image
									src={card.image.src}
									alt={card.image.alt}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									className="object-cover"
								/>
							</div>
							<div className="flex h-full flex-col gap-3 p-6">
								<h3 className="text-xl font-semibold text-neutral-900">
									{card.title}
								</h3>
								<p className="text-sm leading-relaxed text-neutral-700">
									{card.description}
								</p>
								<div className="mt-auto pt-4">
									<RoundedSlideButtonLight
										href={card.href}
										title="Discover"
										hoverFillColor="var(--tertiary)"
										defaultColor="var(--background)"
										icon={<FiArrowRight />}
										className="w-fit"
									/>
								</div>
							</div>
						</article>
					))}
				</section>

				{/* <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-amber-100 via-white to-indigo-100 p-8 sm:grid-cols-2">
					<div className="flex flex-col gap-6">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
							Vision & Mission
						</p>
						<h2 className="text-3xl font-semibold text-neutral-900">
							A roadmap that celebrates excellence and authenticity.
						</h2>
						<p className="text-base text-neutral-700">
							We meet tastemakers where they are, providing the tools and
							visibility required to thrive on the continental stage.
						</p>
					</div>
					<div className="grid gap-4">
						{pillars.map((pillar) => (
							<div
								key={pillar.title}
								className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm"
							>
								<h3 className="text-lg font-semibold text-neutral-900">
									{pillar.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-neutral-700">
									{pillar.summary}
								</p>
							</div>
						))}
					</div>
				</section> */}

				{/* <section className="rounded-3xl bg-white p-10 shadow-sm">
					<div className="flex flex-col gap-3">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
							What is the Savaal Guide?
						</p>
						<h2 className="text-3xl font-semibold text-neutral-900">
							A trusted companion for travelers, locals, and partners.
						</h2>
						<p className="text-base text-neutral-700">
							The Savaal Guide curates and celebrates exceptional spaces while
							investing in the people who bring them to life.
						</p>
					</div>
					<div className="mt-8 grid gap-6 md:grid-cols-3">
						{guideHighlights.map((highlight) => (
							<article
								key={highlight.title}
								className="flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-neutral-50/60 p-6"
							>
								<h3 className="text-lg font-semibold text-neutral-900">
									{highlight.title}
								</h3>
								<p className="text-sm text-neutral-700">
									{highlight.description}
								</p>
							</article>
						))}
					</div>
					<p className="mt-8 text-sm text-neutral-500">
						Together with our partners, we offer training services, editorial
						storytelling, and immersive events that keep local hospitality ahead
						of the curve.
					</p>
				</section> */}

				
			</section>
		</div>
	);
}
