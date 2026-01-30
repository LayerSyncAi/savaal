"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RestaurantCard } from "@/components/guide/restaurant-card";
import { restaurants, getSavaalDistinction } from "@/content/restaurant-info";
import {
	GuideFilterBar,
	type CategoryType,
	type PriceFilter,
	type DistinctionFilter,
} from "./components/guide-filter-bar";

export default function GuidePage() {
	const [regionFilter, setRegionFilter] = useState<string>("All");
	const [categoryTypeFilter, setCategoryTypeFilter] =
		useState<CategoryType>("All");
	const [priceFilter, setPriceFilter] = useState<PriceFilter>("All");
	const [distinctionFilter, setDistinctionFilter] =
		useState<DistinctionFilter>("All");

	const filteredRestaurants = useMemo(() => {
		return restaurants.filter((restaurant) => {
			// Region filter
			const matchesRegion =
				regionFilter === "All" || restaurant.country === regionFilter;

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

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
			<div className="space-y-3">
				<p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
					Guide
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					<span className="text-(--tertiary)">Discover</span> THE SAVAAL GUIDE
				</h1>
				<p className="text-lg text-neutral-700">
					Restaurants, stays, and experiences across Africa.
				</p>
			</div>

			<GuideFilterBar
				restaurants={restaurants}
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

			{filteredRestaurants.length > 0 ? (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredRestaurants.map((restaurant) => (
						<RestaurantCard key={restaurant.id} restaurant={restaurant} />
					))}
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
