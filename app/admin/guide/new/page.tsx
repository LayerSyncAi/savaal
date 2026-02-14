import Link from "next/link";
import { convexClient, api } from "@/lib/convex";
import { createGuideItemAction } from "../actions";
import { GuideItemForm } from "../components/guide-item-form";

export default async function NewGuideItemPage() {
	const [judges, cuisines, cities] = await Promise.all([
		convexClient.query(api.judges.listJudges, {}),
		convexClient.query(api.utilities.listCuisines, { activeOnly: true }),
		convexClient.query(api.utilities.listCities, { activeOnly: true }),
	]);
	const judgeNames = judges.map((j) => j.name);

	return (
		<>
			<GuideItemForm
				title="Create guide item"
				subtitle="Add a new restaurant, stay, or bar to the Guide."
				action={createGuideItemAction}
				judgeNames={judgeNames}
				cuisines={cuisines}
				cities={cities}
			>
				<Link
					href="/admin/guide"
					className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
				>
					Cancel
				</Link>
			</GuideItemForm>
		</>
	);
}
