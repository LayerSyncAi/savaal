"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RestaurantCard } from "@/components/guide/restaurant-card";
import { restaurants } from "@/content/restaurant-info";

const categoryOptions = ["All", "Restaurant", "Hotel", "Bar"] as const;

type CategoryOption = (typeof categoryOptions)[number];

export default function GuidePage() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryOption>("All");
  const [countryFilter, setCountryFilter] = useState<string>("All");
  const [cityFilter, setCityFilter] = useState<string>("All");

  const countryOptions = useMemo(
    () => ["All", ...Array.from(new Set(restaurants.map((item) => item.country)))],
    [],
  );

  const cityOptions = useMemo(() => {
    const cities = restaurants
      .filter((item) => countryFilter === "All" || item.country === countryFilter)
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
        const matchesCity = cityFilter === "All" || restaurant.city === cityFilter;

        return matchesCategory && matchesCountry && matchesCity;
      }),
    [categoryFilter, cityFilter, countryFilter],
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
          location, and scoring breakdown. Hover or tap each feature card to
          see how every venue performed.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
              Category
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value as CategoryOption)}
                className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
              Country
              <select
                value={countryFilter}
                onChange={(event) => {
                  setCountryFilter(event.target.value);
                  setCityFilter("All");
                }}
                className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                {countryOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-800">
              Location in country
              <select
                value={cityFilter}
                onChange={(event) => setCityFilter(event.target.value)}
                className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
            {filteredRestaurants.length} venues found
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
        className="inline-flex w-fit items-center text-amber-700 underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </section>
  );
}
