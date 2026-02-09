import Link from "next/link";

import { ShiftHightlightTabs } from "./components/ShiftHightlightTabs";

export default function PartnershipsPage() {
	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
			<div className="space-y-4">
				<p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
					Partnerships
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					For those ready to be considered
				</h1>
				<p className="text-lg text-neutral-700">
					Learn how to collaborate with the Savaal Guide on campaigns, programs,
					and community initiatives. Select the option that best fits your goals
					to see how we can work together.
				</p>
			</div>

			<ShiftHightlightTabs />

			<div>
				<Link
					href="/"
					className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
				>
					Back to home
				</Link>
			</div>
		</section>
	);
}
