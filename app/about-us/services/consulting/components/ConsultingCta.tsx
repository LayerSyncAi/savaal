import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";
import { BsTelephone } from "react-icons/bs";

export function ConsultingCta() {
	return (
		<div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
			<div>
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
					Partner with Savaal
				</p>
				<p className="text-lg text-neutral-800">
					Ready to plan your package? Let’s map out the milestones and team
					support you need.
				</p>
			</div>
			
			<RoundedSlideButtonLight
				href="/contact"
				title="Talk to us"
				hoverFillColor="var(--sage-green)"
				icon={<BsTelephone />}
				defaultColor="var(--peach-light)"
				hoverScale={1.05}
			/>
		</div>
	);
}
