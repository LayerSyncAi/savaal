import RoundedSlideButtonDark from "@/components/rounded-slide-button-dark";
import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { PiFileMagnifyingGlass } from "react-icons/pi";

type AuditProcessProps = {
	steps: string[];
};

export function AuditProcess({ steps }: AuditProcessProps) {
	return (
		<section className="grid gap-6 rounded-3xl bg-(--primary) p-10 shadow-sm">
			<div className="space-y-3">
				<p className="text-xs font-semibold uppercase tracking-[0.3em] p-on-dark">
					Audit process
				</p>
				<h2 className="text-3xl font-semibold p-on-dark">
					Steps to certification
				</h2>
				<p className="text-base p-on-dark">
					We balance anonymous reviews with expert panels to confirm every star
					before it is published.
				</p>
			</div>
			<ol className="grid gap-3 md:grid-cols-2">
				{steps.map((step, index) => (
					<li
						key={step}
						className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm"
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--tertiary) text-sm font-semibold text-(--secondary)">
							{index + 1}
						</span>
						<div>
							<p className="text-base font-semibold text-neutral-900">{step}</p>
						</div>
					</li>
				))}
			</ol>
			<div className="flex flex-wrap gap-4">
				<RoundedSlideButtonDark
					href="/judging"
					title="Back to Judging"
					hoverFillColor="var(--sand)"
					icon={<FiArrowUpRight/>}
					defaultColor="var(--peach-light)"
					hoverScale={1.05}
				/>
				
        <RoundedSlideButtonDark
					href="/guide"
					title="Explore the Savaal Guide"
					hoverFillColor="var(--sand)"
					icon={<PiFileMagnifyingGlass/>}
					defaultColor="var(--peach-light)"
					hoverScale={1.05}
				/>
			</div>
		</section>
	);
}
