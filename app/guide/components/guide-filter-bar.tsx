"use client";

import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import type { RestaurantInfo, PriceLevel } from "@/content/restaurant-info";
import { getSavaalDistinction, getPriceLevelDisplay, zimbabweRegions } from "@/content/restaurant-info";

export type CategoryType = "All" | "Restaurants" | "Stays";
export type PriceFilter = "All" | PriceLevel;
export type DistinctionFilter = "All" | 1 | 2 | 3;

type GuideFilterBarProps = {
	restaurants: RestaurantInfo[];
	regionFilter: string;
	setRegionFilter: (value: string) => void;
	categoryTypeFilter: CategoryType;
	setCategoryTypeFilter: (value: CategoryType) => void;
	priceFilter: PriceFilter;
	setPriceFilter: (value: PriceFilter) => void;
	distinctionFilter: DistinctionFilter;
	setDistinctionFilter: (value: DistinctionFilter) => void;
	filteredCount: number;
};

const categoryTypeOptions: CategoryType[] = ["All", "Restaurants", "Stays"];
const priceOptions: PriceFilter[] = ["All", 1, 2, 3, 4];
const distinctionOptions: DistinctionFilter[] = ["All", 1, 2, 3];

const distinctionLabels: Record<number, string> = {
	1: "Notable",
	2: "Excellent",
	3: "Exceptional",
};

export function GuideFilterBar({
	restaurants,
	regionFilter,
	setRegionFilter,
	categoryTypeFilter,
	setCategoryTypeFilter,
	priceFilter,
	setPriceFilter,
	distinctionFilter,
	setDistinctionFilter,
	filteredCount,
}: GuideFilterBarProps) {
	const regionOptions = useMemo(() => {
		return ["All", ...zimbabweRegions];
	}, []);

	const hasActiveFilters =
		regionFilter !== "All" ||
		categoryTypeFilter !== "All" ||
		priceFilter !== "All" ||
		distinctionFilter !== "All";

	const clearAllFilters = () => {
		setRegionFilter("All");
		setCategoryTypeFilter("All");
		setPriceFilter("All");
		setDistinctionFilter("All");
	};

	return (
		<div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-4 shadow-lg shadow-amber-100/60 sm:p-6">
			{/* Filter Controls */}
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
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
						className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
					>
						{regionOptions.map((region) => (
							<option key={region} value={region}>
								{region === "All" ? "All Regions" : region}
							</option>
						))}
					</select>
				</div>

				{/* Category Type Filter */}
				<div className="space-y-1.5">
					<label
						htmlFor="category-filter"
						className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
					>
						Experience Type
					</label>
					<select
						id="category-filter"
						value={categoryTypeFilter}
						onChange={(e) =>
							setCategoryTypeFilter(e.target.value as CategoryType)
						}
						className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
					>
						{categoryTypeOptions.map((type) => (
							<option key={type} value={type}>
								{type === "All" ? "All Types" : type}
							</option>
						))}
					</select>
				</div>

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
						className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
					>
						{priceOptions.map((price) => (
							<option key={price} value={price}>
								{price === "All" ? "All Prices" : getPriceLevelDisplay(price)}
							</option>
						))}
					</select>
				</div>

				{/* Savaal Distinction Filter */}
				<div className="space-y-1.5">
					<label
						htmlFor="distinction-filter"
						className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
					>
						Distinction
					</label>
					<select
						id="distinction-filter"
						value={distinctionFilter}
						onChange={(e) =>
							setDistinctionFilter(
								e.target.value === "All"
									? "All"
									: (parseInt(e.target.value, 10) as 1 | 2 | 3)
							)
						}
						className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
					>
						{distinctionOptions.map((distinction) => (
							<option key={distinction} value={distinction}>
								{distinction === "All"
									? "All Stars"
									: `${"★".repeat(distinction)} ${distinctionLabels[distinction]}`}
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
					{regionFilter !== "All" && (
						<FilterTag
							label={regionFilter}
							onClear={() => setRegionFilter("All")}
						/>
					)}
					{categoryTypeFilter !== "All" && (
						<FilterTag
							label={categoryTypeFilter}
							onClear={() => setCategoryTypeFilter("All")}
						/>
					)}
					{priceFilter !== "All" && (
						<FilterTag
							label={getPriceLevelDisplay(priceFilter)}
							onClear={() => setPriceFilter("All")}
						/>
					)}
					{distinctionFilter !== "All" && (
						<FilterTag
							label={`${"★".repeat(distinctionFilter)} ${distinctionLabels[distinctionFilter]}`}
							onClear={() => setDistinctionFilter("All")}
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
