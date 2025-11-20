import Link from "next/link";

export default function ServicesPage() {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
			<div>
				<p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
					Services
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					Consultancy and training placeholder
				</h1>
			</div>
			<p className="text-lg text-neutral-700">
				Soon this page will outline our consultancy, training, and bespoke
				services built to uplift hospitality teams.
			</p>
			<Link
				href="/"
				className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
			>
				Back to home
			</Link>
		</section>
	);
}
