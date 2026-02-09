import Link from "next/link";
import { createGuideItemAction } from "../actions";
import { GuideItemForm } from "../components/guide-item-form";

export default function NewGuideItemPage() {
	return (
		<>
			<GuideItemForm
				title="Create guide item"
				subtitle="Add a new restaurant, stay, or bar to the Guide."
				action={createGuideItemAction}
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
