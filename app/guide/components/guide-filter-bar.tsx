"use client";

import { useMemo } from "react";
import { FaXmark } from "react-icons/fa6";
import type { PriceLevel } from "@/content/restaurant-info";
import { getPriceLevelDisplay, zimbabweRegions } from "@/content/restaurant-info";

export type PriceFilter = "All" | PriceLevel;
export type CategoryTab = "Restaurants" | "Stays" | "Bars";

const STAY_TYPE_OPTIONS = [
	"Hotel",
	"Lodge",
	"Resort",
	"Guest House",
	"Boutique Hotel",
	"Bed & Breakfast",
	"Safari Lodge",
	"Villa",
];

type GuideFilterBarProps = {
	activeTab: CategoryTab;
	setActiveTab: (value: CategoryTab) => void;
	regionFilter: string;
	setRegionFilter: (value: string) => void;
	cuisineFilter: string;
	setCuisineFilter: (value: string) => void;
	priceFilter: PriceFilter;
	setPriceFilter: (value: PriceFilter) => void;
	goodForFilter: string;
	setGoodForFilter: (value: string) => void;
	filteredCount: number;
	cuisineOptions: string[];
	goodForOptions: string[];
};

const priceOptions: PriceFilter[] = ["All", 1, 2, 3, 4];
const tabs: CategoryTab[] = ["Restaurants", "Stays", "Bars"];

export function GuideFilterBar({
	activeTab,
	setActiveTab,
	regionFilter,
	setRegionFilter,
	cuisineFilter,
	setCuisineFilter,
	priceFilter,
	setPriceFilter,
	goodForFilter,
	setGoodForFilter,
	filteredCount,
	cuisineOptions,
	goodForOptions,
}: GuideFilterBarProps) {
	const regionOptions = useMemo(() => {
		return ["All", ...zimbabweRegions];
	}, []);

	const hasActiveFilters =
		regionFilter !== "All" ||
		cuisineFilter !== "All" ||
		priceFilter !== "All" ||
		goodForFilter !== "All";

	const clearAllFilters = () => {
		setRegionFilter("All");
		setCuisineFilter("All");
		setPriceFilter("All");
		setGoodForFilter("All");
	};

	const isStays = activeTab === "Stays";
	const selectClass =
		"w-full rounded-xl border border-amber-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200";

	return (
		<div className="space-y-4">
			{/* Category Pills */}
			<div className="flex gap-2">
				{tabs.map((tab) => (
					<button
						key={tab}
						type="button"
						onClick={() => setActiveTab(tab)}
						className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
							activeTab === tab
								? "bg-amber-600 text-white shadow-md shadow-amber-200"
								: "bg-amber-50 text-neutral-700 hover:bg-amber-100"
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Filter Controls */}
			<div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-4 shadow-lg shadow-amber-100/60 sm:p-6">
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
					{/* Price Filter */}
					<div className="space-y-1.5">
						<label
							htmlFor="price-filter"
							className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
						>
							Price
						</label>
						<select
							id="price-filter"
							value={priceFilter}
							onChange={(e) =>
								setPriceFilter(
									e.target.value === "All"
										? "All"
										: (parseInt(e.target.value, 10) as PriceLevel)
								)
							}
							className={selectClass}
						>
							{priceOptions.map((price) => (
								<option key={price} value={price}>
									{price === "All" ? "All Prices" : getPriceLevelDisplay(price)}
								</option>
							))}
						</select>
					</div>

					{/* Cuisine / Stay Type Filter */}
					<div className="space-y-1.5">
						<label
							htmlFor="cuisine-filter"
							className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
						>
							{isStays ? "Stay Type" : "Cuisine"}
						</label>
						<select
							id="cuisine-filter"
							value={cuisineFilter}
							onChange={(e) => setCuisineFilter(e.target.value)}
							className={selectClass}
						>
							<option value="All">
								{isStays ? "All Stay Types" : "All Cuisines"}
							</option>
							{(isStays ? STAY_TYPE_OPTIONS : cuisineOptions).map(
								(option) => (
									<option key={option} value={option}>
										{option}
									</option>
								)
							)}
						</select>
					</div>

					{/* Region Filter */}
					<div className="space-y-1.5">
						<label
							htmlFor="region-filter"
							className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
						>
							Region
						</label>
						<select
							id="region-filter"
							value={regionFilter}
							onChange={(e) => setRegionFilter(e.target.value)}
							className={selectClass}
						>
							{regionOptions.map((region) => (
								<option key={region} value={region}>
									{region === "All" ? "All Regions" : region}
								</option>
							))}
						</select>
					</div>

					{/* Good For Filter */}
					<div className="space-y-1.5">
						<label
							htmlFor="good-for-filter"
							className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
						>
							Good For
						</label>
						<select
							id="good-for-filter"
							value={goodForFilter}
							onChange={(e) => setGoodForFilter(e.target.value)}
							className={selectClass}
						>
							<option value="All">All Occasions</option>
							{goodForOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Results & Active Filters */}
				<div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-amber-100 pt-4">
					<div className="flex flex-wrap items-center gap-2">
						{/* Results Count */}
						<div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-sm shadow-amber-100">
							<span
								className="inline-flex h-2 w-2 rounded-full bg-amber-500"
								aria-hidden="true"
							/>
							<span className="text-sm font-semibold text-neutral-900">
								{filteredCount}
							</span>
							<span className="text-sm text-neutral-600">
								{filteredCount === 1 ? "venue" : "venues"} found
							</span>
						</div>

						{/* Active Filter Tags */}
						{priceFilter !== "All" && (
							<FilterTag
								label={getPriceLevelDisplay(priceFilter)}
								onClear={() => setPriceFilter("All")}
							/>
						)}
						{cuisineFilter !== "All" && (
							<FilterTag
								label={cuisineFilter}
								onClear={() => setCuisineFilter("All")}
							/>
						)}
						{regionFilter !== "All" && (
							<FilterTag
								label={regionFilter}
								onClear={() => setRegionFilter("All")}
							/>
						)}
						{goodForFilter !== "All" && (
							<FilterTag
								label={goodForFilter}
								onClear={() => setGoodForFilter("All")}
							/>
						)}
					</div>

					{/* Clear All Button */}
					{hasActiveFilters && (
						<button
							type="button"
							onClick={clearAllFilters}
							className="text-xs font-medium text-amber-700 underline-offset-2 transition hover:text-amber-600 hover:underline"
						>
							Clear all filters
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

function FilterTag({
	label,
	onClear,
}: {
	label: string;
	onClear: () => void;
}) {
	return (
		<span className="inline-flex items-center gap-1.5 rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold text-amber-800">
			{label}
			<button
				type="button"
				onClick={onClear}
				className="rounded-full p-0.5 transition hover:bg-amber-600/20"
				aria-label={`Remove ${label} filter`}
			>
				<FaXmark className="h-3 w-3" />
			</button>
		</span>
	);
}
