"use client";

import { useRef } from "react";
import {
	motion,
	type MotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { AiFillCompass, AiOutlineBook } from "react-icons/ai";
import Link from "next/link";
import { RoundedSlideButtonLight } from "../rounded-slide-button-light";
import { FiArrowRight } from "react-icons/fi";
import RoundedSlideButtonDark from "../rounded-slide-button-dark";
import { StatsCounter } from "./stats-counter";

export function HeroSection() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	return (
		<>
			<Nav scrollYProgress={scrollYProgress} />
			<section ref={targetRef} className="bg-white h-[350vh]">
				<div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
					<Copy scrollYProgress={scrollYProgress} />
					<Images scrollYProgress={scrollYProgress} />
					<Circles />
				</div>
			</section>

			<div className="h-screen bg-(--primary) text-white flex items-center justify-center px-6">
				<div className="max-w-4xl text-center space-y-6">
					<p className="p-on-dark text-sm uppercase tracking-[0.4em] text-white/70">
						Savaal Guide · 2024 Edition
					</p>
					<p className="p-on-dark text-3xl md:text-5xl font-semibold ">
						Plan unforgettable culinary escapes through Zimbabwe&apos;s premier
						hotels, rooftop bars, and chef-driven kitchens.
					</p>
					<p className="text-lg p-on-dark">
						From sunrise tastings in Harare to sunset pairings in Victoria
						Falls, the Guide maps every refined stay, table, and cultural
						ritual—helping you book with confidence and savor each moment.
					</p>
                                        <StatsCounter />
					<div className="flex flex-wrap justify-center gap-4 text-black">
						<RoundedSlideButtonDark
							href="/guide"
							title="Start planning"
							hoverFillColor="var(--secondary)"
							icon={<FiArrowRight />}
							defaultColor="var(--foreground)"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

const Nav = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
	const background = useTransform(scrollYProgress, (value: number) =>
		value === 1 ? "rgb(13,10,9)" : "transparent"
	);

	return (
		<motion.nav
			style={{ background }}
			className="px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
		>
			<div className="flex items-center gap-3 text-lg text-white">
				<AiFillCompass className="text-2xl" />
				<span className="font-bold tracking-[0.2em]">SAVAAL</span>
			</div>
			<button className="text-sm bg-white text-black hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 px-4 py-2 rounded-full">
				<AiOutlineBook className="text-lg" />
				<span>View the Guide</span>
			</button>
		</motion.nav>
	);
};

const Copy = ({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) => {
	const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
	const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
	const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

	return (
		<motion.div
			style={{
				scale: copyScale,
				opacity: copyOpacity,
				y: copyY,
			}}
			className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center text-center"
		>
			<p className="text-xs uppercase tracking-[0.4em] text-white/80">
				Zimbabwe · Africa · Hospitality
			</p>
			<h1 className="text-stone-50 text-4xl md:text-6xl font-bold max-w-2xl mt-6">
				Elevating cultural hospitality experiences across Africa.
			</h1>
			<p className="text-stone-200 text-base md:text-lg max-w-2xl my-6">
				Savaal curates the most exceptional stays, dining rooms, and experiences
				across Zimbabwe and beyond—helping travelers connect with authentic
				African luxury and local artisans.
			</p>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<RoundedSlideButtonLight
					href="/guide"
					title="Explore Destinations"
					hoverFillColor="var(--primary)"
					icon={<FiArrowRight />}
					defaultColor="var(--background)"
				/>
				<Link
					href="/about-us"
					className="px-6 py-3 border border-white/70 hover:bg-white/10 transition-colors text-black font-medium rounded-full"
				>
					Learn about Savaal
				</Link>
			</div>
		</motion.div>
	);
};

const Images = ({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

	const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
	const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

	const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
	const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

	const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

	const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
	const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

	const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

	return (
		<>
			<motion.div
				className="col-span-2 relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1855&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image1Offset,
					y: image1Offset,
				}}
			/>
			<motion.div
				className="row-span-2 relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=870&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image2OffsetX,
					y: image2OffsetY,
				}}
			/>

			<motion.div
				className="row-span-2 relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=870&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image3OffsetX,
					y: image3OffsetY,
				}}
			/>
			<motion.div
				className="relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1624&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image4OffsetX,
					y: image4OffsetY,
				}}
			/>

			<motion.div
				className="relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1740&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image5OffsetX,
					y: image5OffsetY,
				}}
			/>
			<motion.div
				className="relative z-10 rounded-3xl"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=870&q=80)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image6OffsetX,
					y: image6OffsetY,
				}}
			/>
		</>
	);
};

const Circles = () => (
	<>
		<div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-white/40 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
		<div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-white/40 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
	</>
);
