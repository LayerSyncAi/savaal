import Link from "next/link";
import RoundedSlideButtonLight from "../rounded-slide-button-light";
import { FiArrowRight } from "react-icons/fi";

export function FounderQuote() {
	return (
		<section className="mx-auto max-w-5xl px-6 py-16">
			<div className="overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white shadow-2xl ring-1 ring-black/10">
				<div className="grid gap-1 md:grid-cols-[1.15fr,0.85fr]">
					<div className="space-y-6 p-10">
						<p className="text-sm font-semibold uppercase tracking-[0.35em] p-brown">
							From our founder
						</p>
						<blockquote className="space-y-4">
							<p className="text-3xl font-semibold leading-tight md:text-4xl p-on-dark">
								“Use your competitors as mirrors but be a window into something
								only you can show the world”
							</p>
							<p className="text-lg p-brown">
								<span className="font-semibold text-white">
									— Al Murindagomo,
								</span>{" "}
								Founder & Chief Curator
							</p>
						</blockquote>
						<p className="text-base p-white">
							That promise is why we are building the Savaal Academy. Our
							training tracks for judges, “taste hunters,” and aspiring chefs
							turn passion into careers that benefit farmers, families, and
							entire culinary communities. Government support accelerates this
							mission.
						</p>
						<div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-900">
							<span className="rounded-full bg-white/90 px-4 py-2">
								Judging Standards Lab
							</span>
							<span className="rounded-full bg-white/90 px-4 py-2">
								Community Taste Hunter Camps
							</span>
							<span className="rounded-full bg-white/90 px-4 py-2">
								Chef Upskilling Studio
							</span>
						</div>
						<div className="flex items-center justify-center ">
							<RoundedSlideButtonLight
								href="/about-us/academy-training"
								title="Explore the Academy & Training"
								hoverFillColor="var(--sage-green)"
								icon={<FiArrowRight />}
								defaultColor="var(--sand)"
								hoverScale={1.05}
							/>
						</div>
					</div>
					<div className="flex flex-col justify-between gap-6 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_rgba(0,0,0,0))] p-10">
						<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
							<p className="text-xs uppercase tracking-[0.2em] p-white">
								Why this matters
							</p>
							<p className="mt-3 text-base p-on-dark">
								Each training cohort is paired with smallholder producers and
								independent venues, creating jobs while preserving Zimbabwe’s
								culinary heritage.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
