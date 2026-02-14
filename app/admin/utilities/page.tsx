import Link from "next/link";
import { convexClient, api } from "@/lib/convex";
import { UtilitiesList } from "./components/utilities-list";

export default async function UtilitiesAdminPage() {
	const [cuisines, countries, cities] = await Promise.all([
		convexClient.query(api.utilities.listCuisines, {}),
		convexClient.query(api.utilities.listCountries, {}),
		convexClient.query(api.utilities.listCities, {}),
	]);

	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-neutral-900">
						Utilities
					</h1>
					<p className="text-sm text-neutral-600">
						Manage cuisines, cities, and countries used across the Guide.
					</p>
				</div>
				<Link
					href="/admin/guide"
					className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
				>
					Back to Guide Admin
				</Link>
			</div>

			<UtilitiesList
				cuisines={cuisines}
				countries={countries}
				cities={cities}
			/>
		</section>
	);
}
