"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RoundedSlideButtonLight } from "@/components/rounded-slide-button-light";
import { getSavaalDistinction } from "@/content/restaurant-info";
import {
	GuideFilterBar,
	type CategoryType,
	type PriceFilter,
	type DistinctionFilter,
} from "./components/guide-filter-bar";
import { HorizontalCardSection } from "./components/horizontal-card-section";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { mapGuideItemToRestaurantInfo } from "@/lib/guide";

export default function GuidePage() {
	const [regionFilter, setRegionFilter] = useState<string>("All");
	const [categoryTypeFilter, setCategoryTypeFilter] =
		useState<CategoryType>("All");
	const [priceFilter, setPriceFilter] = useState<PriceFilter>("All");
	const [distinctionFilter, setDistinctionFilter] =
		useState<DistinctionFilter>("All");

	const guideItems = useQuery(api.guideItems.listGuideItems, {
		publishedOnly: true,
	});

	const restaurants = useMemo(
		() => (guideItems ?? []).map(mapGuideItemToRestaurantInfo),
		[guideItems]
	);

	const filteredRestaurants = useMemo(() => {
		return restaurants.filter((restaurant) => {
			// Region filter
			const matchesRegion =
				regionFilter === "All" || restaurant.region === regionFilter;

			// Category type filter (Restaurants = Restaurant + Bar, Stays = Hotel)
			let matchesCategoryType = true;
			if (categoryTypeFilter === "Restaurants") {
				matchesCategoryType =
					restaurant.category === "Restaurant" ||
					restaurant.category === "Bar";
			} else if (categoryTypeFilter === "Stays") {
				matchesCategoryType = restaurant.category === "Hotel";
			}

			// Price filter
			const matchesPrice =
				priceFilter === "All" || restaurant.priceLevel === priceFilter;

			// Savaal Distinction filter
			const matchesDistinction =
				distinctionFilter === "All" ||
				getSavaalDistinction(restaurant.totalScore) === distinctionFilter;

			return (
				matchesRegion &&
				matchesCategoryType &&
				matchesPrice &&
				matchesDistinction
			);
		});
	}, [regionFilter, categoryTypeFilter, priceFilter, distinctionFilter]);

	const { restaurantItems, stayItems } = useMemo(() => {
		const restaurantEntries = filteredRestaurants.filter(
			(restaurant) =>
				restaurant.category === "Restaurant" || restaurant.category === "Bar"
		);
		const stayEntries = filteredRestaurants.filter(
			(restaurant) => restaurant.category === "Hotel"
		);

		return { restaurantItems: restaurantEntries, stayItems: stayEntries };
	}, [filteredRestaurants]);

	const isLoading = guideItems === undefined;

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-3">
					<h1 className="text-4xl font-bold text-neutral-900">
						{/* <span className="text-(--tertiary)">Discover</span>  */}
						THE SAVAAL GUIDE
					</h1>
					<p className="text-lg text-neutral-700">
						Restaurants, stays, and experiences across Zimbabwe.
					</p>
				</div>
				<RoundedSlideButtonLight
					href="http://localhost:3000/judging/businesses"
					title="How we assess"
					hoverFillColor="var(--tertiary)"
					defaultColor="var(--background)"
					target="_blank"
					rel="noreferrer noopener"
					className="self-start sm:self-auto"
				/>
			</div>

			<GuideFilterBar
				regionFilter={regionFilter}
				setRegionFilter={setRegionFilter}
				categoryTypeFilter={categoryTypeFilter}
				setCategoryTypeFilter={setCategoryTypeFilter}
				priceFilter={priceFilter}
				setPriceFilter={setPriceFilter}
				distinctionFilter={distinctionFilter}
				setDistinctionFilter={setDistinctionFilter}
				filteredCount={filteredRestaurants.length}
			/>

			{isLoading ? (
				<div className="rounded-2xl border border-amber-100 bg-white px-6 py-12 text-center text-neutral-600">
					Loading guide venues…
				</div>
			) : filteredRestaurants.length > 0 ? (
				<div className="flex flex-col gap-10">
					<HorizontalCardSection
						title="Restaurants"
						items={restaurantItems}
					/>
					<HorizontalCardSection title="Stays" items={stayItems} />
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
