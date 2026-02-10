import Link from "next/link";
import { convexClient, api } from "@/lib/convex";
import { JudgesList } from "./components/judges-list";

export default async function JudgesAdminPage() {
	const judges = await convexClient.query(api.judges.listJudges, {});

	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-neutral-900">
						Judges
					</h1>
					<p className="text-sm text-neutral-600">
						Manage judges available for guide item comments.
					</p>
				</div>
				<Link
					href="/admin/guide"
					className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
				>
					Back to Guide Admin
				</Link>
			</div>

			<JudgesList judges={judges} />
		</section>
	);
}
