import Link from "next/link";
import { notFound } from "next/navigation";
import { convexClient, api } from "@/lib/convex";
import type { Id } from "@/convex/_generated/dataModel";
import {
	deleteGuideItemAction,
	updateGuideItemAction,
} from "../../actions";
import { GuideItemForm } from "../../components/guide-item-form";

type GuideEditPageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function EditGuideItemPage({
	params,
}: GuideEditPageProps) {
	const { id } = await params;
	const itemId = id as Id<"guideItems">;
	const [item, judges] = await Promise.all([
		convexClient.query(api.guideItems.getGuideItemById, { id: itemId }),
		convexClient.query(api.judges.listJudges, {}),
	]);

	if (!item) {
		notFound();
	}

	const judgeNames = judges.map((j) => j.name);

	return (
		<GuideItemForm
			title="Edit guide item"
			subtitle="Update venue details, scores, or publish status."
			action={updateGuideItemAction.bind(null, itemId)}
			judgeNames={judgeNames}
			initialValues={{
				name: item.name,
				category: item.category,
				cuisine: item.cuisine,
				city: item.city,
				country: item.country,
				region: item.region,
				location: item.location,
				coverImage: item.coverImage,
				rating: item.rating,
				priceLevel: item.priceLevel,
				description: item.description,
				totalScore: item.totalScore,
				sortOrder: item.sortOrder,
				published: item.published,
				scores: item.scores,
				judgeComments: item.judgeComments,
			}}
		>
			<button
				formAction={deleteGuideItemAction.bind(null, itemId)}
				className="rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
			>
				Delete
			</button>
			<Link
				href="/admin/guide"
				className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
			>
				Cancel
			</Link>
		</GuideItemForm>
	);
}
