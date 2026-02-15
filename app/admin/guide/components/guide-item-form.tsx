"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { zimbabweRegions } from "@/content/restaurant-info";

type JudgeComment = {
	judgeName: string;
	comment: string;
	rating: number;
};

type CityOption = {
	_id: string;
	name: string;
	countryName: string;
};

type CuisineOption = {
	_id: string;
	name: string;
};

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
	judgeComments?: JudgeComment[];
};

type GuideItemFormProps = {
	title: string;
	subtitle: string;
	initialValues?: GuideItemFormValues;
	action: (formData: FormData) => void;
	children?: React.ReactNode;
	judgeNames: string[];
	cuisines?: CuisineOption[];
	cities?: CityOption[];
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

const MAX_COMMENTS = 3;

const inputClass =
	"mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200";

export function GuideItemForm({
	title,
	subtitle,
	initialValues,
	action,
	children,
	judgeNames,
	cuisines = [],
	cities = [],
}: GuideItemFormProps) {
	const initialImage = initialValues?.coverImage ?? "";
	const [imageUrl, setImageUrl] = useState(initialImage);
	const [imageMode, setImageMode] = useState<"url" | "upload">(
		initialImage ? "url" : "url"
	);
	const [uploading, setUploading] = useState(false);
	const [uploadError, setUploadError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
	const [comments, setComments] = useState<JudgeComment[]>(
		initialValues?.judgeComments ?? []
	);
	const [selectedCity, setSelectedCity] = useState(
		initialValues?.city ?? ""
	);

	// Build a city→country lookup
	const cityCountryMap = useMemo(() => {
		const map = new Map<string, string>();
		for (const city of cities) {
			map.set(city.name, city.countryName);
		}
		return map;
	}, [cities]);

	// Derive country from selected city
	const derivedCountry = selectedCity
		? cityCountryMap.get(selectedCity) ?? ""
		: initialValues?.country ?? "";

	const scoresByLabel = new Map(
		(initialValues?.scores ?? []).map((score) => [score.label, score.score])
	);

	const addComment = () => {
		if (comments.length >= MAX_COMMENTS) return;
		setComments([...comments, { judgeName: judgeNames[0] ?? "", comment: "", rating: 0 }]);
	};

	const removeComment = (index: number) => {
		setComments(comments.filter((_, i) => i !== index));
	};

	const updateComment = (index: number, field: keyof JudgeComment, value: string | number) => {
		setComments(
			comments.map((c, i) => (i === index ? { ...c, [field]: value } : c))
		);
	};

	const handleFileUpload = async (file: File) => {
		if (file.size > 10 * 1024 * 1024) {
			setUploadError("File must be under 10 MB");
			return;
		}

		setUploading(true);
		setUploadError(null);
		try {
			const postUrl = await generateUploadUrl();
			const result = await fetch(postUrl, {
				method: "POST",
				headers: { "Content-Type": file.type },
				body: file,
			});
			if (!result.ok) throw new Error("Upload failed");
			const { storageId } = await result.json();
			// Build the Convex HTTP action URL for serving the image.
			// Convex storage URLs are served via the site URL.
			const siteUrl = process.env.NEXT_PUBLIC_CONVEX_URL!.replace(
				".cloud",
				".site"
			);
			setImageUrl(`${siteUrl}/getImage?storageId=${storageId}`);
		} catch (err: unknown) {
			const msg = err instanceof Error ? err.message : "Upload failed";
			setUploadError(msg);
		} finally {
			setUploading(false);
		}
	};

	const hasCuisines = cuisines.length > 0;
	const hasCities = cities.length > 0;

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
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Category
						<select
							name="category"
							defaultValue={initialValues?.category ?? "Restaurant"}
							className={inputClass}
						>
							<option value="Restaurant">Restaurant</option>
							<option value="Hotel">Stay</option>
							<option value="Bar">Bar</option>
						</select>
					</label>

					{/* Cuisine dropdown */}
					<label className="text-sm font-medium text-neutral-700">
						Cuisine
						{hasCuisines ? (
							<select
								name="cuisine"
								defaultValue={initialValues?.cuisine ?? ""}
								required
								className={inputClass}
							>
								<option value="">Select cuisine</option>
								{cuisines.map((c) => (
									<option key={c._id} value={c.name}>
										{c.name}
									</option>
								))}
							</select>
						) : (
							<div className="mt-2 flex items-center gap-2">
								<span className="text-xs text-neutral-500">
									No cuisines configured.
								</span>
								<Link
									href="/admin/utilities"
									className="text-xs font-semibold text-amber-700 underline"
								>
									Manage Utilities
								</Link>
							</div>
						)}
					</label>

					{/* City dropdown */}
					<label className="text-sm font-medium text-neutral-700">
						City
						{hasCities ? (
							<select
								name="city"
								value={selectedCity}
								onChange={(e) => setSelectedCity(e.target.value)}
								required
								className={inputClass}
							>
								<option value="">Select city</option>
								{cities.map((c) => (
									<option key={c._id} value={c.name}>
										{c.name} ({c.countryName})
									</option>
								))}
							</select>
						) : (
							<div className="mt-2 flex items-center gap-2">
								<span className="text-xs text-neutral-500">
									No cities configured.
								</span>
								<Link
									href="/admin/utilities"
									className="text-xs font-semibold text-amber-700 underline"
								>
									Manage Utilities
								</Link>
							</div>
						)}
					</label>

					{/* Country (auto-populated, disabled) */}
					<label className="text-sm font-medium text-neutral-700">
						Country
						<input
							value={derivedCountry}
							readOnly
							disabled
							className={`${inputClass} bg-neutral-100 text-neutral-500 cursor-not-allowed`}
						/>
						{/* Hidden input so country is included in FormData */}
						<input type="hidden" name="country" value={derivedCountry} />
					</label>

					<label className="text-sm font-medium text-neutral-700">
						Region
						<select
							name="region"
							defaultValue={initialValues?.region ?? zimbabweRegions[0]}
							className={inputClass}
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
							className={inputClass}
						/>
					</label>

					{/* Cover Image: URL or Upload */}
					<div className="text-sm font-medium text-neutral-700 sm:col-span-2">
						Cover Image
						<div className="mt-1 mb-2 flex gap-2">
							<button
								type="button"
								onClick={() => setImageMode("url")}
								className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
									imageMode === "url"
										? "bg-neutral-900 text-white"
										: "border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
								}`}
							>
								Enter URL
							</button>
							<button
								type="button"
								onClick={() => setImageMode("upload")}
								className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
									imageMode === "upload"
										? "bg-neutral-900 text-white"
										: "border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
								}`}
							>
								Upload file
							</button>
						</div>

						{imageMode === "url" ? (
							<input
								name="imageUrl"
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
								placeholder="https://example.com/image.jpg"
								required={!imageUrl}
								className={inputClass}
							/>
						) : (
							<div className="space-y-2">
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									disabled={uploading}
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) handleFileUpload(file);
									}}
									className={`${inputClass} file:mr-3 file:rounded-full file:border-0 file:bg-amber-50 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-amber-700 hover:file:bg-amber-100`}
								/>
								{uploading && (
									<p className="text-xs text-amber-600">Uploading...</p>
								)}
								{uploadError && (
									<p className="text-xs text-red-600">{uploadError}</p>
								)}
								{/* Hidden input carries the resolved URL into FormData */}
								<input type="hidden" name="imageUrl" value={imageUrl} />
							</div>
						)}

						{imageUrl && (
							<p className="mt-1 truncate text-xs text-neutral-400">
								{imageUrl}
							</p>
						)}
					</div>

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
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Price level (1-4)
						<select
							name="priceLevel"
							defaultValue={initialValues?.priceLevel ?? 1}
							className={inputClass}
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
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Sort order
						<input
							type="number"
							name="sortOrder"
							defaultValue={initialValues?.sortOrder ?? 0}
							className={inputClass}
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
						className={inputClass}
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
										className={inputClass}
									/>
								</label>
							);
						})}
					</div>
				</div>

				{/* Judge Comments Section */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold text-neutral-800">
							Judge comments ({comments.length}/{MAX_COMMENTS})
						</p>
						{comments.length < MAX_COMMENTS && (
							<button
								type="button"
								onClick={addComment}
								className="rounded-full border border-amber-300 px-4 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
							>
								Add comment
							</button>
						)}
					</div>

					{comments.length === 0 && (
						<p className="text-xs text-neutral-500">
							No judge comments yet. Click &ldquo;Add comment&rdquo; to add up to {MAX_COMMENTS}.
						</p>
					)}

					{comments.map((comment, index) => (
						<div
							key={index}
							className="space-y-3 rounded-xl border border-amber-100 bg-amber-50/40 p-4"
						>
							<div className="flex items-center justify-between">
								<p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
									Comment {index + 1}
								</p>
								<button
									type="button"
									onClick={() => removeComment(index)}
									className="text-xs font-medium text-red-500 transition hover:text-red-700"
								>
									Remove
								</button>
							</div>
							<div className="grid gap-3 sm:grid-cols-2">
								<label className="text-sm font-medium text-neutral-700">
									Judge
									<select
										value={comment.judgeName}
										onChange={(e) =>
											updateComment(index, "judgeName", e.target.value)
										}
										className={inputClass}
									>
										<option value="">Select a judge</option>
										{judgeNames.map((name) => (
											<option key={name} value={name}>
												{name}
											</option>
										))}
									</select>
								</label>
								<label className="text-sm font-medium text-neutral-700">
									Rating (0-5)
									<input
										type="number"
										step="0.1"
										min="0"
										max="5"
										value={comment.rating}
										onChange={(e) =>
											updateComment(
												index,
												"rating",
												parseFloat(e.target.value) || 0
											)
										}
										className={inputClass}
									/>
								</label>
							</div>
							<label className="text-sm font-medium text-neutral-700">
								Comment
								<textarea
									value={comment.comment}
									onChange={(e) =>
										updateComment(index, "comment", e.target.value)
									}
									rows={2}
									className={inputClass}
								/>
							</label>
							{/* Hidden inputs to serialize into FormData */}
							<input type="hidden" name={`judgeComment_${index}_judgeName`} value={comment.judgeName} />
							<input type="hidden" name={`judgeComment_${index}_comment`} value={comment.comment} />
							<input type="hidden" name={`judgeComment_${index}_rating`} value={comment.rating} />
						</div>
					))}
					<input type="hidden" name="judgeCommentCount" value={comments.length} />
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
								unoptimized
							/>
						</div>
					</div>
				) : null}

				<div className="flex flex-wrap gap-3">
					<button
						type="submit"
						disabled={uploading}
						className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50"
					>
						{uploading ? "Uploading image..." : "Save guide item"}
					</button>
					{children}
				</div>
			</form>
		</section>
	);
}
