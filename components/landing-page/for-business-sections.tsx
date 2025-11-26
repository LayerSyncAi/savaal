"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import RoundedSlideButtonLight from "../rounded-slide-button-light";

const IMG_PADDING = 12;

const sections = [
	{
		id: "consultancy",
		imgUrl:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2574&auto=format&fit=crop",
		subheading: "Consultancy & Training",
		heading: "Elevate teams with Savaal Consultants",
		content: (
			<div
				className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pb-24 pt-12 md:grid-cols-2"
				id="consultancy"
			>
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
						Consultancy & Training
					</p>
					<h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
						<span className="text-(--tertiary)">Elevate teams</span> with Savaal Consultants
					</h2>
					<p className="mt-4 text-(--paragraph-color)]">
						From mystery audits to immersive workshops, our consultants
						translate the Savaal standards into daily service rituals, beverage
						programs, and guest journey design.
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
					<p className="mt-2 text-sm text-(--muted-dark)] mb-4">
						Choose on-site or virtual formats across Zimbabwe and the region.
					</p>
					<RoundedSlideButtonLight
						href="/services/consultancy"
						title="View Consultancy Services"
						hoverFillColor="var(--primary)"
						icon={<FiArrowRight />}
						defaultColor="var(--foreground)"
						hoverScale={1.05}
					/>
				</div>
			</div>
		),
	},
	{
		id: "events",
		imgUrl:
			"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2574&auto=format&fit=crop",
		subheading: "Events & Curations",
		heading: "The Curators reimagine cultural hospitality",
		content: (
			<div
				className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pb-24 pt-12 md:grid-cols-2"
				id="events"
			>
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
						Events & Curations
					</p>
					<h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">
						The Curators <span className="text-(--tertiary)">reimagine cultural hospitality</span>
					</h2>
					<p className="mt-4 text-(--paragraph-color)]">
						Pop-up dinners, mixology showcases, and cultural festivals designed
						to highlight Zimbabwe&apos;s culinary icons and rising stars.
					</p>
				</div>
				<div className="rounded-2xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6">
					<ul className="space-y-2 text-sm font-medium text-(--heading-color)] mb-4">
						<li>• Seasonal pop-up restaurants</li>
						<li>• Collaborative chef residences</li>
						<li>• Art, fashion, and sound pairings</li>
					</ul>
					<RoundedSlideButtonLight
						href="/events"
						title="Discover Upcoming Events"
						hoverFillColor="var(--primary)"
						icon={<FiArrowRight />}
						defaultColor="var(--foreground)"
						hoverScale={1.05}
					/>
				</div>
			</div>
		),
	},
	{
		id: "judging",
		imgUrl:
			"https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=2574&auto=format&fit=crop",
		subheading: "Judging",
		heading: "Cultural tastemakers safeguarding the Savaal promise",
		content: (
			<div
				className="mx-auto max-w-4xl px-6 pb-24 pt-12 text-center"
				id="judging"
			>
				<h2 className="text-2xl font-semibold text-(--heading-color)]">
					Judging
				</h2>
				<p className="mt-4 text-(--paragraph-color)] mb-8">
					Savaal Judges are cultural tastemakers who discreetly assess venues
					via the Savaal Scorecard. Their evaluations ensure that every listing
					meets the promise of elevated service, cuisine, and cultural
					immersion.
				</p>
				<RoundedSlideButtonLight
					href="/judging/prospective-judges"
					title="Apply to Judge"
					hoverFillColor="var(--primary)"
					icon={<FiArrowRight />}
					defaultColor="var(--foreground)"
					className="mx-auto px-3 text-sm"
				/>
			</div>
		),
	},
	{
		id: "partnerships",
		imgUrl:
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2574&auto=format&fit=crop",
		subheading: "For Businesses",
		heading: "Elevate your business with Savaal partnerships",
		content: (
			<div
				className="mx-auto max-w-4xl px-6 pb-24 pt-12 text-center text-white"
				id="partnerships"
			>
				<p className="text-sm uppercase tracking-[0.4em] text-(--peach)]">
					For Businesses
				</p>
				<h2 className="mt-4 text-3xl font-semibold">
					<span className="text-(--tertiary)">Elevate Your Business.</span> Request a Savaal Certification Audit or
					Partnership.
				</h2>
				<p className="mt-4 text-(--peach-light)]">
					Engage with our consultancy team for training, audits, or bespoke
					cultural collaborations that spotlight your venue on the
					continent&apos;s most trusted hospitality guide.
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-4">
					<RoundedSlideButtonLight
						href="/contact"
						title="Request Consultancy"
						hoverFillColor="var(--primary)"
						icon={<FiArrowRight />}
						defaultColor="var(--foreground)"
						hoverScale={1.05}
					/>
					<RoundedSlideButtonLight
						href="/partnerships"
						title="Explore Partnerships"
						hoverFillColor="var(--primary)"
						icon={<FiArrowRight />}
						defaultColor="var(--foreground)"
						hoverScale={1.05}
					/>
				</div>
			</div>
		),
	},
];

export function ForBusinessSections() {
	return (
		<div className="bg-white">
			{sections.map((section) => (
				<section id={section.id} key={section.id}>
					<TextParallaxContent
						imgUrl={section.imgUrl}
						subheading={section.subheading}
						heading={section.heading}
					>
						{section.content}
					</TextParallaxContent>
				</section>
			))}
		</div>
	);
}

function TextParallaxContent({
	imgUrl,
	subheading,
	heading,
	children,
}: {
	imgUrl: string;
	subheading: string;
	heading: string;
	children: ReactNode;
}) {
	return (
		<div
			style={{
				paddingLeft: IMG_PADDING,
				paddingRight: IMG_PADDING,
			}}
		>
			<div className="relative h-[150vh]">
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy heading={heading} subheading={subheading} />
			</div>
			{children}
		</div>
	);
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
				scale,
			}}
			ref={targetRef}
			className="sticky z-0 overflow-hidden rounded-3xl"
		>
			<motion.div
				className="absolute inset-0 bg-neutral-950/70"
				style={{
					opacity,
				}}
			/>
		</motion.div>
	);
}

function OverlayCopy({
	subheading,
	heading,
}: {
	subheading: string;
	heading: string;
}) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			style={{
				y,
				opacity,
			}}
			ref={targetRef}
			className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
		>
			<p className="p-on-dark mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</p>
			<p className="p-on-dark text-center text-4xl font-bold md:text-7xl">
				{heading}
			</p>
		</motion.div>
	);
}
