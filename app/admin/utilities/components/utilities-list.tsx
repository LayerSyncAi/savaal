"use client";

import { useState } from "react";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import {
	createCuisineAction,
	updateCuisineAction,
	deleteCuisineAction,
	toggleCuisineAction,
	createCountryAction,
	deleteCountryAction,
	toggleCountryAction,
	createCityAction,
	deleteCityAction,
	toggleCityAction,
	seedUtilitiesAction,
} from "../actions";
import { SOUTHERN_AFRICA_COUNTRIES } from "@/lib/southern-africa";

type Cuisine = Doc<"utilities_cuisines">;
type Country = Doc<"utilities_countries">;
type CityWithCountry = Doc<"utilities_cities"> & { countryName: string };

const inputClass =
	"flex-1 rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200";

const sectionClass =
	"space-y-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm";

function SeedButton() {
	const [seeding, setSeeding] = useState(false);
	const [result, setResult] = useState<string | null>(null);

	return (
		<div className="flex items-center gap-3">
			<button
				type="button"
				disabled={seeding}
				onClick={async () => {
					setSeeding(true);
					try {
						const res = await seedUtilitiesAction();
						setResult(
							`Seeded: ${res.cuisinesAdded} cuisines, ${res.countriesAdded} countries, ${res.citiesAdded} cities`
						);
					} catch {
						setResult("Seed failed");
					} finally {
						setSeeding(false);
					}
				}}
				className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 disabled:opacity-50"
			>
				{seeding ? "Seeding..." : "Seed defaults"}
			</button>
			{result && (
				<span className="text-xs text-neutral-500">{result}</span>
			)}
		</div>
	);
}

function CuisinesSection({
	cuisines,
}: {
	cuisines: Cuisine[];
}) {
	const [editingId, setEditingId] = useState<string | null>(null);

	return (
		<div className={sectionClass}>
			<h2 className="text-lg font-semibold text-neutral-900">
				Cuisines ({cuisines.length})
			</h2>

			<form action={createCuisineAction} className="flex gap-3">
				<input
					name="name"
					placeholder="New cuisine name"
					required
					className={inputClass}
				/>
				<button
					type="submit"
					className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
				>
					Add
				</button>
			</form>

			<div className="grid gap-2">
				{cuisines.map((cuisine) => (
					<div
						key={cuisine._id}
						className={`flex items-center gap-4 rounded-2xl border p-4 ${
							cuisine.isActive
								? "border-amber-100 bg-amber-50/40"
								: "border-neutral-200 bg-neutral-50 opacity-60"
						}`}
					>
						{editingId === cuisine._id ? (
							<form
								action={updateCuisineAction.bind(null, cuisine._id)}
								className="flex flex-1 gap-3"
								onSubmit={() => setEditingId(null)}
							>
								<input
									name="name"
									defaultValue={cuisine.name}
									required
									autoFocus
									className={inputClass}
								/>
								<button
									type="submit"
									className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white"
								>
									Save
								</button>
								<button
									type="button"
									onClick={() => setEditingId(null)}
									className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-700"
								>
									Cancel
								</button>
							</form>
						) : (
							<>
								<span className="flex-1 text-sm font-medium text-neutral-900">
									{cuisine.name}
								</span>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() =>
											toggleCuisineAction(
												cuisine._id,
												!cuisine.isActive
											)
										}
										className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
											cuisine.isActive
												? "border-amber-300 text-amber-700 hover:bg-amber-50"
												: "border-green-300 text-green-700 hover:bg-green-50"
										}`}
									>
										{cuisine.isActive
											? "Deactivate"
											: "Activate"}
									</button>
									<button
										type="button"
										onClick={() =>
											setEditingId(cuisine._id)
										}
										className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
									>
										Edit
									</button>
									<form
										action={deleteCuisineAction.bind(
											null,
											cuisine._id
										)}
									>
										<button
											type="submit"
											className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
										>
											Delete
										</button>
									</form>
								</div>
							</>
						)}
					</div>
				))}
				{cuisines.length === 0 && (
					<div className="rounded-xl border border-dashed border-amber-200 p-8 text-center text-sm text-neutral-500">
						No cuisines yet. Click &ldquo;Seed defaults&rdquo; above or add one manually.
					</div>
				)}
			</div>
		</div>
	);
}

function CountriesSection({
	countries,
}: {
	countries: Country[];
}) {
	const existingNames = new Set(countries.map((c) => c.name));
	const availableCountries = SOUTHERN_AFRICA_COUNTRIES.filter(
		(name) => !existingNames.has(name)
	);

	return (
		<div className={sectionClass}>
			<h2 className="text-lg font-semibold text-neutral-900">
				Countries ({countries.length})
			</h2>
			<p className="text-xs text-neutral-500">
				Limited to Southern Africa only.
			</p>

			{availableCountries.length > 0 && (
				<form action={createCountryAction} className="flex gap-3">
					<select name="name" required className={inputClass}>
						<option value="">Select a country to add</option>
						{availableCountries.map((name) => (
							<option key={name} value={name}>
								{name}
							</option>
						))}
					</select>
					<button
						type="submit"
						className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
					>
						Add
					</button>
				</form>
			)}

			<div className="grid gap-2">
				{countries.map((country) => (
					<div
						key={country._id}
						className={`flex items-center gap-4 rounded-2xl border p-4 ${
							country.isActive
								? "border-amber-100 bg-amber-50/40"
								: "border-neutral-200 bg-neutral-50 opacity-60"
						}`}
					>
						<span className="flex-1 text-sm font-medium text-neutral-900">
							{country.name}
						</span>
						<div className="flex gap-2">
							<button
								type="button"
								onClick={() =>
									toggleCountryAction(
										country._id,
										!country.isActive
									)
								}
								className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
									country.isActive
										? "border-amber-300 text-amber-700 hover:bg-amber-50"
										: "border-green-300 text-green-700 hover:bg-green-50"
								}`}
							>
								{country.isActive ? "Deactivate" : "Activate"}
							</button>
							<form
								action={deleteCountryAction.bind(
									null,
									country._id
								)}
							>
								<button
									type="submit"
									className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
								>
									Delete
								</button>
							</form>
						</div>
					</div>
				))}
				{countries.length === 0 && (
					<div className="rounded-xl border border-dashed border-amber-200 p-8 text-center text-sm text-neutral-500">
						No countries yet. Click &ldquo;Seed defaults&rdquo; above to add Southern Africa countries.
					</div>
				)}
			</div>
		</div>
	);
}

function CitiesSection({
	cities,
	countries,
}: {
	cities: CityWithCountry[];
	countries: Country[];
}) {
	const activeCountries = countries.filter((c) => c.isActive);

	return (
		<div className={sectionClass}>
			<h2 className="text-lg font-semibold text-neutral-900">
				Cities ({cities.length})
			</h2>

			{activeCountries.length > 0 ? (
				<form action={createCityAction} className="flex gap-3">
					<input
						name="name"
						placeholder="New city name"
						required
						className={inputClass}
					/>
					<select
						name="countryId"
						required
						className={inputClass}
					>
						<option value="">Select country</option>
						{activeCountries.map((country) => (
							<option key={country._id} value={country._id}>
								{country.name}
							</option>
						))}
					</select>
					<button
						type="submit"
						className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
					>
						Add
					</button>
				</form>
			) : (
				<p className="text-xs text-amber-600">
					Add countries first before adding cities.
				</p>
			)}

			<div className="grid gap-2">
				{cities.map((city) => (
					<div
						key={city._id}
						className={`flex items-center gap-4 rounded-2xl border p-4 ${
							city.isActive
								? "border-amber-100 bg-amber-50/40"
								: "border-neutral-200 bg-neutral-50 opacity-60"
						}`}
					>
						<span className="flex-1 text-sm font-medium text-neutral-900">
							{city.name}
							<span className="ml-2 text-xs text-neutral-500">
								({city.countryName})
							</span>
						</span>
						<div className="flex gap-2">
							<button
								type="button"
								onClick={() =>
									toggleCityAction(
										city._id,
										!city.isActive
									)
								}
								className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
									city.isActive
										? "border-amber-300 text-amber-700 hover:bg-amber-50"
										: "border-green-300 text-green-700 hover:bg-green-50"
								}`}
							>
								{city.isActive ? "Deactivate" : "Activate"}
							</button>
							<form
								action={deleteCityAction.bind(null, city._id)}
							>
								<button
									type="submit"
									className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
								>
									Delete
								</button>
							</form>
						</div>
					</div>
				))}
				{cities.length === 0 && (
					<div className="rounded-xl border border-dashed border-amber-200 p-8 text-center text-sm text-neutral-500">
						No cities yet. Click &ldquo;Seed defaults&rdquo; above or add one manually.
					</div>
				)}
			</div>
		</div>
	);
}

export function UtilitiesList({
	cuisines,
	countries,
	cities,
}: {
	cuisines: Cuisine[];
	countries: Country[];
	cities: CityWithCountry[];
}) {
	return (
		<div className="space-y-8">
			<SeedButton />
			<CuisinesSection cuisines={cuisines} />
			<CountriesSection countries={countries} />
			<CitiesSection cities={cities} countries={countries} />
		</div>
	);
}
