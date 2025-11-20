"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RestaurantCard } from "@/components/guide/restaurant-card";
import { restaurants } from "@/content/restaurant-info";
import { FiArrowRight } from "react-icons/fi";
import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";

const categoryOptions = ["All", "Restaurant", "Hotel", "Bar"] as const;

type CategoryOption = (typeof categoryOptions)[number];

export default function GuidePage() {
	const [categoryFilter, setCategoryFilter] = useState<CategoryOption>("All");
	const [countryFilter, setCountryFilter] = useState<string>("All");
	const [cityFilter, setCityFilter] = useState<string>("All");

	const countryOptions = useMemo(
		() => [
			"All",
			...Array.from(new Set(restaurants.map((item) => item.country))),
		],
		[]
	);

	const cityOptions = useMemo(() => {
		const cities = restaurants
			.filter(
				(item) => countryFilter === "All" || item.country === countryFilter
			)
			.map((item) => item.city);

		return ["All", ...Array.from(new Set(cities))];
	}, [countryFilter]);

	const filteredRestaurants = useMemo(
		() =>
			restaurants.filter((restaurant) => {
				const matchesCategory =
					categoryFilter === "All" || restaurant.category === categoryFilter;
				const matchesCountry =
					countryFilter === "All" || restaurant.country === countryFilter;
				const matchesCity =
					cityFilter === "All" || restaurant.city === cityFilter;

				return matchesCategory && matchesCountry && matchesCity;
			}),
		[categoryFilter, cityFilter, countryFilter]
	);

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
			<div className="space-y-3">
				<p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
					Guide
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					Discover the full Savaal Guide experience.
				</h1>
				<p className="text-lg text-neutral-700">
					Explore the restaurants, hotels, and bars celebrated by our judges
					with mobile-first cards that showcase their signature offering,
					location, and scoring breakdown. Hover or tap each feature card to see
					how every venue performed.
				</p>
			</div>

			<div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-6 shadow-lg shadow-amber-100/60">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
					<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm font-semibold text-neutral-800">
								<span>Category</span>
								{categoryFilter !== "All" && (
									<button
										type="button"
										onClick={() => setCategoryFilter("All")}
										className="text-xs font-medium text-amber-700 underline-offset-2 transition hover:text-amber-600 hover:underline"
									>
										Clear
									</button>
								)}
							</div>
							<div className="relative">
								<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
									<span className="text-amber-600">•</span>
								</div>
								<select
									value={categoryFilter}
									onChange={(event) =>
										setCategoryFilter(event.target.value as CategoryOption)
									}
									className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
								>
									{categoryOptions.map((category) => (
										<option key={category} value={category}>
											{category}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm font-semibold text-neutral-800">
								<span>Country</span>
								{countryFilter !== "All" && (
									<button
										type="button"
										onClick={() => {
											setCountryFilter("All");
											setCityFilter("All");
										}}
										className="text-xs font-medium text-amber-700 underline-offset-2 transition hover:text-amber-600 hover:underline"
									>
										Clear
									</button>
								)}
							</div>
							<div className="relative">
								<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
									<span className="text-amber-600">•</span>
								</div>
								<select
									value={countryFilter}
									onChange={(event) => {
										setCountryFilter(event.target.value);
										setCityFilter("All");
									}}
									className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
								>
									{countryOptions.map((country) => (
										<option key={country} value={country}>
											{country}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm font-semibold text-neutral-800">
								<span>Location in country</span>
								{cityFilter !== "All" && (
									<button
										type="button"
										onClick={() => setCityFilter("All")}
										className="text-xs font-medium text-amber-700 underline-offset-2 transition hover:text-amber-600 hover:underline"
									>
										Clear
									</button>
								)}
							</div>
							<div className="relative">
								<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
									<span className="text-amber-600">•</span>
								</div>
								<select
									value={cityFilter}
									onChange={(event) => setCityFilter(event.target.value)}
									className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
								>
									{cityOptions.map((city) => (
										<option key={city} value={city}>
											{city}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 text-sm text-neutral-700 lg:max-w-xs">
						<div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm shadow-amber-100">
							<span
								className="inline-flex h-2 w-2 rounded-full bg-amber-500"
								aria-hidden="true"
							/>
							<span className="font-semibold text-neutral-900">
								{filteredRestaurants.length}
							</span>
							<span className="text-neutral-600">venues found</span>
						</div>

						<div className="flex flex-wrap gap-2">
							{[
								["Category", categoryFilter],
								["Country", countryFilter],
								["City", cityFilter],
							]
								.filter(([, value]) => value !== "All")
								.map(([label, value]) => (
									<span
										key={`${label}-${value}`}
										className="inline-flex items-center gap-2 rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold text-amber-800"
									>
										{label}: {value}
									</span>
								))}
							{[categoryFilter, countryFilter, cityFilter].every(
								(value) => value === "All"
							) && (
								<span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600">
									Showing all results
								</span>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.id} restaurant={restaurant} />
				))}
			</div>

			<Link
				href="/"
				className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-(--primary) hover:text-white"
			>
				Back to home
			</Link>
		</section>
	);
}
