"use client";

import {
	scrollingTestimonials,
	type Testimonial,
} from "@/content/testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import {
	SiAtlassian,
	SiDribbble,
	SiGrubhub,
	SiKaggle,
	SiNike,
	SiSlack,
} from "react-icons/si";

export default function AboutUsTestimonialsPage() {
	const stackedTestimonials = useMemo(() => {
		const icons = [
			SiNike,
			SiAtlassian,
			SiDribbble,
			SiGrubhub,
			SiKaggle,
			SiSlack,
		];
		const allTestimonials = [
			...scrollingTestimonials.top,
			...scrollingTestimonials.middle,
			...scrollingTestimonials.bottom,
		];

		return allTestimonials.map((testimonial, index) => ({
			...testimonial,
			Icon: icons[index % icons.length],
		}));
	}, []);

	return (
		<div className="bg-(--background) text-slate-50">
			<StackedCardTestimonials testimonials={stackedTestimonials} />
			<div className="mx-auto max-w-5xl px-6 pb-16">
				<Link
					href="/about-us"
					className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground)"
				>
					Back to About us
					<FiArrowUpRight />
				</Link>
			</div>
		</div>
	);
}

const StackedCardTestimonials = ({
	testimonials,
}: {
	testimonials: StackedTestimonial[];
}) => {
	const [selected, setSelected] = useState(0);

	return (
		<section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2">
			<div className="space-y-5">
				<p className="text-xs font-semibold uppercase tracking-[0.35em]">
					About us · Testimonials
				</p>
				<h1 className="text-4xl font-bold">Stories from our community</h1>
				<p className="text-base ">
					Cultural hospitality leaders across the globe use Savaal to design,
					operate, and scale meaningful guest experiences. Hear how they embed
					our playbooks into everyday rituals.
				</p>
				<SelectBtns
					numTracks={testimonials.length}
					setSelected={setSelected}
					selected={selected}
				/>
			</div>

			<Cards
				testimonials={testimonials}
				setSelected={setSelected}
				selected={selected}
			/>
		</section>
	);
};

const SelectBtns = ({
	numTracks,
	setSelected,
	selected,
}: {
	numTracks: number;
	setSelected: Dispatch<SetStateAction<number>>;
	selected: number;
}) => {
	return (
		<div className="mt-8 flex gap-1">
			{Array.from(Array(numTracks).keys()).map((n) => {
				return (
					<button
						key={n}
						onClick={() => setSelected(n)}
						className="relative h-1.5 w-full bg-gray-300"
					>
						{selected === n ? (
							<motion.span
								className="absolute inset-y-0 left-0 bg-(--primary)"
								initial={{
									width: "0%",
								}}
								animate={{
									width: "100%",
								}}
								transition={{
									duration: 5,
								}}
								onAnimationComplete={() => {
									setSelected(selected === numTracks - 1 ? 0 : selected + 1);
								}}
							/>
						) : (
							<span
								className="absolute inset-y-0 left-0 bg-(--primary)"
								style={{
									width: selected > n ? "100%" : "0%",
								}}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
};

const Cards = ({
	testimonials,
	selected,
	setSelected,
}: {
	testimonials: StackedTestimonial[];
	selected: number;
	setSelected: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<div className="relative h-[450px] w-full shadow-2xl shadow-slate-900/30">
			{testimonials.map((testimonial, index) => {
				return (
					<Card
						{...testimonial}
						key={testimonial.id}
						position={index}
						selected={selected}
						setSelected={setSelected}
					/>
				);
			})}
		</div>
	);
};

const Card = ({
	Icon,
	info,
	name,
	title,
	position,
	selected,
	setSelected,
}: StackedTestimonial & {
	position: number;
	selected: number;
	setSelected: Dispatch<SetStateAction<number>>;
}) => {
	const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
	const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
	const background = position % 2 ? "bg-slate-900" : "bg-slate-50";
	const color = position % 2 ? "text-white" : "text-slate-900";

	return (
		<motion.div
			initial={false}
			style={{
				zIndex: position,
				transformOrigin: "left bottom",
			}}
			animate={{
				x: `${offset}%`,
				scale,
			}}
			whileHover={{
				translateX: position === selected ? 0 : -3,
			}}
			transition={{
				duration: 0.25,
				ease: "easeOut",
			}}
			onClick={() => setSelected(position)}
			className={`absolute left-0 top-0 w-full min-h-full p-8 lg:p-12 ${background} ${color} cursor-pointer rounded-3xl border border-slate-800/40`}
		>
			<Icon className="mx-auto text-6xl" />
			<p className="my-8 text-lg font-light italic lg:text-xl">“{info}”</p>
			<div>
				<span className="block text-lg font-semibold">{name}</span>
				<span className="block text-sm">{title}</span>
			</div>
		</motion.div>
	);
};

type StackedTestimonial = Testimonial & { Icon: IconType };
