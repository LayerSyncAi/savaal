import Link from "next/link";
import { convexClient, api } from "@/lib/convex";
import { GuideAdminList } from "./components/guide-admin-list";

export default async function GuideAdminPage() {
	const items = await convexClient.query(api.guideItems.listGuideItems, {});

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-neutral-900">
						Guide Admin
					</h1>
					<p className="text-sm text-neutral-600">
						Manage restaurants, stays, and bars featured in the Guide.
					</p>
				</div>
				<Link
					href="/admin/guide/new"
					className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
				>
					Add new venue
				</Link>
			</div>

			<GuideAdminList items={items} />
		</section>
	);
}
