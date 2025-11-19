import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutUsBlogPage() {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
			<div>
				<p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
					About us · Blog
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					Insights and stories placeholder
				</h1>
			</div>
			<p className="text-lg text-neutral-700">
				Stay tuned for thought leadership pieces and behind-the-scenes updates
				that share how the Savaal Guide is evolving.
			</p>
			<Link
				href="/about-us"
				className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground)"
			>
				Back to About us
				<FiArrowUpRight />
			</Link>
		</section>
	);
}
