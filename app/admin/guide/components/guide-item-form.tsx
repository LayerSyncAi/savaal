"use client";

import { useState } from "react";
import Image from "next/image";
import { zimbabweRegions } from "@/content/restaurant-info";

type GuideItemFormValues = {
	name: string;
	category: "Restaurant" | "Hotel" | "Bar";
	cuisine: string;
	city: string;
	country: string;
	region: string;
	location: string;
	coverImage: string;
	rating: number;
	priceLevel: number;
	description: string;
	totalScore: string;
	sortOrder: number;
	published: boolean;
	scores: {
		label: string;
		score: string;
	}[];
};

type GuideItemFormProps = {
	title: string;
	subtitle: string;
	initialValues?: GuideItemFormValues;
	action: (formData: FormData) => void;
	children?: React.ReactNode;
};

const scoreFields = [
	{ name: "scoreTaste", label: "Taste & Technique" },
	{ name: "scoreService", label: "Service" },
	{ name: "scoreBeverage", label: "Beverage Experience" },
	{ name: "scoreMenu", label: "Menu Composition" },
	{ name: "scorePresentation", label: "Presentation" },
	{ name: "scoreAmbience", label: "Ambience" },
	{ name: "scoreValue", label: "Perceived Value" },
] as const;

export function GuideItemForm({
	title,
	subtitle,
	initialValues,
	action,
	children,
}: GuideItemFormProps) {
	const initialImage = initialValues?.coverImage ?? "";
	const [imageUrl, setImageUrl] = useState(initialImage);

	const scoresByLabel = new Map(
		(initialValues?.scores ?? []).map((score) => [score.label, score.score])
	);

	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
			<header className="space-y-1">
				<h1 className="text-3xl font-semibold text-neutral-900">{title}</h1>
				<p className="text-sm text-neutral-600">{subtitle}</p>
			</header>

			<form
				action={action}
				className="space-y-6 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
			>
				<div className="grid gap-4 sm:grid-cols-2">
					<label className="text-sm font-medium text-neutral-700">
						Name
						<input
							name="name"
							defaultValue={initialValues?.name ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Category
						<select
							name="category"
							defaultValue={initialValues?.category ?? "Restaurant"}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						>
							<option value="Restaurant">Restaurant</option>
							<option value="Hotel">Stay</option>
							<option value="Bar">Bar</option>
						</select>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Cuisine
						<input
							name="cuisine"
							defaultValue={initialValues?.cuisine ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						City
						<input
							name="city"
							defaultValue={initialValues?.city ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Country
						<input
							name="country"
							defaultValue={initialValues?.country ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Region
						<select
							name="region"
							defaultValue={initialValues?.region ?? zimbabweRegions[0]}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						>
							{zimbabweRegions.map((region) => (
								<option key={region} value={region}>
									{region}
								</option>
							))}
						</select>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Location
						<input
							name="location"
							defaultValue={initialValues?.location ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Image URL
						<input
							name="imageUrl"
							defaultValue={initialValues?.coverImage ?? ""}
							onChange={(event) => setImageUrl(event.target.value)}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Rating
						<input
							type="number"
							step="0.1"
							min="0"
							max="5"
							name="rating"
							defaultValue={initialValues?.rating ?? 0}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Price level (1-4)
						<select
							name="priceLevel"
							defaultValue={initialValues?.priceLevel ?? 1}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						>
							<option value={1}>$</option>
							<option value={2}>$$</option>
							<option value={3}>$$$</option>
							<option value={4}>$$$$</option>
						</select>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Total score
						<input
							name="totalScore"
							defaultValue={initialValues?.totalScore ?? ""}
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Sort order
						<input
							type="number"
							name="sortOrder"
							defaultValue={initialValues?.sortOrder ?? 0}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
				</div>

				<label className="text-sm font-medium text-neutral-700">
					Description
					<textarea
						name="description"
						defaultValue={initialValues?.description ?? ""}
						required
						rows={4}
						className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
					/>
				</label>

				<div className="space-y-3">
					<p className="text-sm font-semibold text-neutral-800">
						Score breakdown
					</p>
					<div className="grid gap-4 sm:grid-cols-2">
						{scoreFields.map(({ name, label }) => {
							return (
								<label
									key={label}
									className="text-sm font-medium text-neutral-700"
								>
									{label}
									<input
										name={name}
										defaultValue={scoresByLabel.get(label) ?? ""}
										required
										className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
									/>
								</label>
							);
						})}
					</div>
				</div>

				<label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
					<input
						type="checkbox"
						name="published"
						defaultChecked={initialValues?.published ?? false}
						className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-amber-400"
					/>
					Published
				</label>

				{imageUrl ? (
					<div className="space-y-2">
						<p className="text-sm font-medium text-neutral-700">
							Image preview
						</p>
						<div className="relative h-48 w-full overflow-hidden rounded-2xl border border-amber-100">
							<Image
								src={imageUrl}
								alt="Preview"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				) : null}

				<div className="flex flex-wrap gap-3">
					<button
						type="submit"
						className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
					>
						Save guide item
					</button>
					{children}
				</div>
			</form>
		</section>
	);
}
