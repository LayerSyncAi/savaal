"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RoundedSlideButtonLight } from "@/components/rounded-slide-button-light";
import { zimbabweRegions, type RestaurantInfo } from "@/content/restaurant-info";
import {
	GuideFilterBar,
	type PriceFilter,
	type CategoryTab,
} from "./components/guide-filter-bar";
import { HorizontalCardSection } from "./components/horizontal-card-section";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { mapGuideItemToRestaurantInfo } from "@/lib/guide";

export default function GuidePage() {
	const searchParams = useSearchParams();
	const regionParam = searchParams.get("region");
	const initialRegion =
		regionParam && (zimbabweRegions as readonly string[]).includes(regionParam)
			? regionParam
			: "All";
	const [activeTab, setActiveTab] = useState<CategoryTab>("Restaurants");
	const [regionFilter, setRegionFilter] = useState<string>(initialRegion);
	const [cuisineFilter, setCuisineFilter] = useState<string>("All");
	const [priceFilter, setPriceFilter] = useState<PriceFilter>("All");
	const [goodForFilter, setGoodForFilter] = useState<string>("All");

	const guideItems = useQuery(api.guideItems.listGuideItems, {
		publishedOnly: true,
	});

	const cuisines = useQuery(api.utilities.listCuisines, { activeOnly: true });
	const goodForItems = useQuery(api.utilities.listGoodFor, { activeOnly: true });

	const cuisineOptions = useMemo(
		() => (cuisines ?? []).map((c) => c.name),
		[cuisines]
	);

	const goodForOptions = useMemo(
		() => (goodForItems ?? []).map((g) => g.name),
		[goodForItems]
	);

	const restaurants = useMemo(
		() => (guideItems ?? []).map(mapGuideItemToRestaurantInfo),
		[guideItems]
	);

	// Filter by active tab first
	const tabFilteredItems = useMemo(() => {
		if (activeTab === "Stays") {
			return restaurants.filter((r: RestaurantInfo) => r.category === "Hotel");
		}
		if (activeTab === "Bars") {
			return restaurants.filter((r: RestaurantInfo) => r.category === "Bar");
		}
		return restaurants.filter((r: RestaurantInfo) => r.category === "Restaurant");
	}, [restaurants, activeTab]);

	const filteredRestaurants = useMemo(() => {
		return tabFilteredItems.filter((restaurant: RestaurantInfo) => {
			const matchesRegion =
				regionFilter === "All" || restaurant.region === regionFilter;
			const matchesCuisine =
				cuisineFilter === "All" || restaurant.cuisine === cuisineFilter;
			const matchesPrice =
				priceFilter === "All" || restaurant.priceLevel === priceFilter;
			const matchesGoodFor = goodForFilter === "All";

			return matchesRegion && matchesCuisine && matchesPrice && matchesGoodFor;
		});
	}, [tabFilteredItems, regionFilter, cuisineFilter, priceFilter, goodForFilter]);

	const isLoading = guideItems === undefined;

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-3">
					<h1 className="text-4xl font-bold text-neutral-900">
						THE SAVAAL GUIDE
					</h1>
					<p className="text-lg text-neutral-700">
						Restaurants, stays, and experiences across Zimbabwe.
					</p>
				</div>
				<RoundedSlideButtonLight
					href="/judging/businesses"
					title="How we assess"
					hoverFillColor="var(--tertiary)"
					defaultColor="var(--background)"
					className="self-start sm:self-auto"
				/>
			</div>

			<GuideFilterBar
				activeTab={activeTab}
				setActiveTab={(tab) => {
					setActiveTab(tab);
					setCuisineFilter("All");
				}}
				regionFilter={regionFilter}
				setRegionFilter={setRegionFilter}
				cuisineFilter={cuisineFilter}
				setCuisineFilter={setCuisineFilter}
				priceFilter={priceFilter}
				setPriceFilter={setPriceFilter}
				goodForFilter={goodForFilter}
				setGoodForFilter={setGoodForFilter}
				filteredCount={filteredRestaurants.length}
				cuisineOptions={cuisineOptions}
				goodForOptions={goodForOptions}
			/>

			{isLoading ? (
				<div className="flex flex-col gap-10">
					<div className="space-y-4">
						<div className="h-6 w-32 animate-pulse rounded bg-neutral-200" />
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{Array.from({ length: 3 }).map((_, i) => (
								<div key={i} className="animate-pulse rounded-2xl border border-amber-100 bg-white p-4">
									<div className="aspect-[4/3] w-full rounded-xl bg-neutral-200" />
									<div className="mt-4 space-y-2">
										<div className="h-4 w-3/4 rounded bg-neutral-200" />
										<div className="h-3 w-1/2 rounded bg-neutral-200" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : filteredRestaurants.length > 0 ? (
				<div className="flex flex-col gap-10">
					<HorizontalCardSection
						title={activeTab}
						items={filteredRestaurants}
					/>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center rounded-2xl border border-amber-100 bg-amber-50/50 px-6 py-16 text-center">
					<p className="text-lg font-semibold text-neutral-800">
						No venues match your filters
					</p>
					<p className="mt-2 text-sm text-neutral-600">
						Try adjusting your filters to see more results
					</p>
				</div>
			)}

			<div className="flex justify-start">
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
