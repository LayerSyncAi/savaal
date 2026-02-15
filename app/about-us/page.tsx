import { FounderQuote } from "@/components/landing-page/founder-quote";
import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const aboutSavaalCards = [
	{
		title: "Savaal Star",
		description:
			"A distinction awarded to restaurants demonstrating exceptional mastery, consistency and intent.",
		href: "/judging/businesses",
		image: {
			src: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Globe illustration representing the Savaal Star distinction.",
		},
	},
	{
		title: "Savaal Selected",
		description:
			"Venues included in the Savaal Guide — considered, visited and chosen for quality and character.",
		href: "/judging/prospective-judges",
		image: {
			src: "https://images.unsplash.com/photo-1608503120873-61c4643f96b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Window illustration representing the Savaal Selected listings.",
		},
	},
	{
		title: "About Savaal",
		description:
			"Learn how Savaal works and explore our services for partners and businesses.",
		href: "/about-us/services/consulting",
		image: {
			src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
							<span className="text-(--tertiary)">Guiding travelers</span> to
							the heart of African hospitality.
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

				<FounderQuote /> 
			</section>
		</div>
	);
}
