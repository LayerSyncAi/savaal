"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
	FiCheckCircle,
	FiClipboard,
	FiMapPin,
	FiShield,
	FiUsers,
} from "react-icons/fi";
import { qualificationSteps } from "@/content/qualificationSteps";

const gradients = [
	"from-violet-400 to-indigo-400",
	"from-amber-400 to-orange-400",
	"from-green-400 to-emerald-400",
	"from-pink-400 to-red-400",
	"from-blue-400 to-cyan-400",
];

export function QualificationShowcase() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-12">
			<div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-4">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold md:text-5xl">
						Follow the path to join
					</h2>
					<p className="max-w-2xl text-lg">
						We make it simple to become a trusted Savaal judge. Each numbered
						step below shows exactly what to expect, from your first intro to
						ongoing support.
					</p>
				</div>
			</div>

                        <div className="flex flex-col items-center gap-6">
                                {qualificationSteps.map((step, index) => (
                                        <div key={step.id} className="flex w-full flex-col items-center gap-6">
                                                <BounceCard
                                                        step={step}
                                                        className="w-full"
                                                        gradient={gradients[index]}
                                                />
                                                {index < qualificationSteps.length - 1 ? <StepArrow /> : null}
                                        </div>
                                ))}
                        </div>
			<div className="mt-8 flex justify-center">
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<a
						href="/judging#faq"
						className="inline-block whitespace-nowrap rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
					>
						See judging FAQ
					</a>
				</motion.div>
			</div>
		</section>
	);
}

function BounceCard({
	className,
	gradient,
	step,
}: {
	className: string;
	gradient: string;
	step: (typeof qualificationSteps)[number];
}) {
	return (
		<motion.div
			whileHover={{ scale: 0.97, rotate: "-1deg" }}
			className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 shadow-lg transition-shadow hover:shadow-xl ${className}`}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
						{step.id}
					</div>
					<div>
						<p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
							{step.callout}
						</p>
						<CardTitle>{step.title}</CardTitle>
					</div>
				</div>
				<span className="text-3xl text-slate-500">
					<step.Icon />
				</span>
			</div>

			<p className="mt-4 max-w-2xl text-slate-600">{step.description}</p>

                        <div
                                className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${gradient} p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
                        >
                                <span className="block text-center text-lg font-semibold text-indigo-50">
                                        Step {step.id}: {step.title}
                                </span>
                                <p className="mt-3 text-center text-sm p-white">{step.highlight}</p>
                        </div>
                </motion.div>
        );
}

function CardTitle({ children }: { children: ReactNode }) {
        return <h3 className="text-2xl font-semibold text-slate-900">{children}</h3>;
}

function StepArrow() {
        return (
                <motion.svg
                        width="95"
                        height="62"
                        viewBox="0 0 95 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-50 rotate-270 sm:scale-75"
                >
                        <path
                                d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
                                stroke="#7D7BE5"
                                strokeWidth="3"
                        />
                        <path
                                d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
                                stroke="#7D7BE5"
                                strokeWidth="3"
                                strokeLinecap="round"
                        />
                </motion.svg>
        );
}
