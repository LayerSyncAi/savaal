"use client";

import { useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type TicketType = { label: string; price: string; seats: number };

type EventFormValues = {
	slug: string;
	title: string;
	category: "gathering" | "training";
	presentedBy: string;
	host: string;
	theme: string;
	image: string;
	description: string[];
	highlights: string[];
	date: string;
	time: string;
	tickets: TicketType[];
	location: { venue: string; address: string };
	notes: string[];
	cta: { label: string; href: string };
	published: boolean;
	showOnHomepage: boolean;
	sortOrder: number;
};

type EventFormProps = {
	title: string;
	subtitle: string;
	initialValues?: EventFormValues;
	action: (formData: FormData) => void;
	children?: React.ReactNode;
};

const inputClass =
	"mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200";

const RequiredMark = () => (
	<span className="ml-0.5 text-red-500" aria-label="required">*</span>
);

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

export function EventForm({
	title,
	subtitle,
	initialValues,
	action,
	children,
}: EventFormProps) {
	const initialImage = initialValues?.image ?? "";
	const [imageUrl, setImageUrl] = useState(initialImage);
	const [imageMode, setImageMode] = useState<"url" | "upload">("url");
	const [uploading, setUploading] = useState(false);
	const [uploadError, setUploadError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const generateUploadUrl = useMutation(api.storage.generateUploadUrl);

	const [slug, setSlug] = useState(initialValues?.slug ?? "");
	const [titleValue, setTitleValue] = useState(initialValues?.title ?? "");
	const [autoSlug, setAutoSlug] = useState(!initialValues?.slug);

	const [descriptions, setDescriptions] = useState<string[]>(
		initialValues?.description?.length ? initialValues.description : [""]
	);
	const [highlights, setHighlights] = useState<string[]>(
		initialValues?.highlights?.length ? initialValues.highlights : [""]
	);
	const [notes, setNotes] = useState<string[]>(
		initialValues?.notes?.length ? initialValues.notes : [""]
	);

	const [tickets, setTickets] = useState<TicketType[]>(
		initialValues?.tickets?.length
			? initialValues.tickets
			: [{ label: "", price: "", seats: 0 }]
	);

	const handleTitleChange = (value: string) => {
		setTitleValue(value);
		if (autoSlug) {
			setSlug(slugify(value));
		}
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

	const addListItem = (
		setter: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setter((prev) => [...prev, ""]);
	};

	const removeListItem = (
		setter: React.Dispatch<React.SetStateAction<string[]>>,
		index: number
	) => {
		setter((prev) => prev.filter((_, i) => i !== index));
	};

	const updateListItem = (
		setter: React.Dispatch<React.SetStateAction<string[]>>,
		index: number,
		value: string
	) => {
		setter((prev) => prev.map((item, i) => (i === index ? value : item)));
	};

	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
			<header className="space-y-1">
				<h1 className="text-3xl font-semibold text-neutral-900">
					{title}
				</h1>
				<p className="text-sm text-neutral-600">{subtitle}</p>
			</header>

			<form
				action={action}
				className="space-y-6 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
			>
				<p className="text-xs text-neutral-500">
					Fields marked with <span className="text-red-500">*</span> are required.
				</p>

				{/* Basic info */}
				<div className="grid gap-4 sm:grid-cols-2">
					<label className="text-sm font-medium text-neutral-700">
						Title<RequiredMark />
						<input
							name="title"
							value={titleValue}
							onChange={(e) => handleTitleChange(e.target.value)}
							required
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Slug<RequiredMark />
						<div className="flex gap-2">
							<input
								name="slug"
								value={slug}
								onChange={(e) => {
									setSlug(e.target.value);
									setAutoSlug(false);
								}}
								required
								className={`${inputClass} flex-1`}
							/>
						</div>
						<span className="text-xs text-neutral-400">
							Used in the URL: /events/{slug || "..."}
						</span>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Category<RequiredMark />
						<select
							name="category"
							defaultValue={
								initialValues?.category ?? "gathering"
							}
							className={inputClass}
						>
							<option value="gathering">Gathering</option>
							<option value="training">Training</option>
						</select>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Presented by<RequiredMark />
						<input
							name="presentedBy"
							defaultValue={initialValues?.presentedBy ?? ""}
							required
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Host<RequiredMark />
						<input
							name="host"
							defaultValue={initialValues?.host ?? ""}
							required
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700 sm:col-span-2">
						Theme<RequiredMark />
						<input
							name="theme"
							defaultValue={initialValues?.theme ?? ""}
							required
							className={inputClass}
						/>
					</label>
				</div>

				{/* Cover image */}
				<div className="text-sm font-medium text-neutral-700">
					Cover Image<RequiredMark />
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
								<p className="text-xs text-amber-600">
									Uploading...
								</p>
							)}
							{uploadError && (
								<p className="text-xs text-red-600">
									{uploadError}
								</p>
							)}
							<input
								type="hidden"
								name="imageUrl"
								value={imageUrl}
							/>
						</div>
					)}

					{imageUrl && (
						<p className="mt-1 truncate text-xs text-neutral-400">
							{imageUrl}
						</p>
					)}
				</div>

				{imageUrl && (
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
				)}

				{/* Date & time */}
				<div className="grid gap-4 sm:grid-cols-2">
					<label className="text-sm font-medium text-neutral-700">
						Date<RequiredMark />
						<input
							name="date"
							defaultValue={initialValues?.date ?? ""}
							required
							placeholder="Friday, 28 November 2025"
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Time<RequiredMark />
						<input
							name="time"
							defaultValue={initialValues?.time ?? ""}
							required
							placeholder="5:00 PM"
							className={inputClass}
						/>
					</label>
				</div>

				{/* Ticket types */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold text-neutral-800">
							Ticket types<RequiredMark /> ({tickets.length})
						</p>
						<button
							type="button"
							onClick={() =>
								setTickets((prev) => [
									...prev,
									{ label: "", price: "", seats: 0 },
								])
							}
							className="rounded-full border border-amber-300 px-4 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
						>
							Add ticket type
						</button>
					</div>
					<div className="grid grid-cols-[1fr_7rem_5rem_auto] gap-x-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
						<span>Label</span>
						<span>Price</span>
						<span>Seats</span>
						<span />
					</div>
					{tickets.map((ticket, index) => (
						<div
							key={index}
							className="grid grid-cols-[1fr_7rem_5rem_auto] gap-2 items-start"
						>
							<input
								value={ticket.label}
								onChange={(e) =>
									setTickets((prev) =>
										prev.map((t, i) =>
											i === index
												? { ...t, label: e.target.value }
												: t
										)
									)
								}
								placeholder="e.g. General Admission"
								className={`${inputClass} mt-0`}
							/>
							<input
								value={ticket.price}
								onChange={(e) =>
									setTickets((prev) =>
										prev.map((t, i) =>
											i === index
												? { ...t, price: e.target.value }
												: t
										)
									)
								}
								placeholder="$50"
								className={`${inputClass} mt-0`}
							/>
							<input
								type="number"
								min={0}
								value={ticket.seats}
								onChange={(e) =>
									setTickets((prev) =>
										prev.map((t, i) =>
											i === index
												? {
														...t,
														seats: Number(e.target.value) || 0,
													}
												: t
										)
									)
								}
								placeholder="20"
								className={`${inputClass} mt-0`}
							/>
							{tickets.length > 1 ? (
								<button
									type="button"
									onClick={() =>
										setTickets((prev) =>
											prev.filter((_, i) => i !== index)
										)
									}
									className="mt-1 text-xs font-medium text-red-500 transition hover:text-red-700"
								>
									Remove
								</button>
							) : (
								<span />
							)}
							<input
								type="hidden"
								name={`ticket_${index}_label`}
								value={ticket.label}
							/>
							<input
								type="hidden"
								name={`ticket_${index}_price`}
								value={ticket.price}
							/>
							<input
								type="hidden"
								name={`ticket_${index}_seats`}
								value={ticket.seats}
							/>
						</div>
					))}
					<input
						type="hidden"
						name="ticketCount"
						value={tickets.length}
					/>
				</div>

				{/* Location */}
				<div className="grid gap-4 sm:grid-cols-2">
					<label className="text-sm font-medium text-neutral-700">
						Venue name<RequiredMark />
						<input
							name="locationVenue"
							defaultValue={
								initialValues?.location?.venue ?? ""
							}
							required
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						Venue address<RequiredMark />
						<input
							name="locationAddress"
							defaultValue={
								initialValues?.location?.address ?? ""
							}
							required
							className={inputClass}
						/>
					</label>
				</div>

				{/* Description paragraphs */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold text-neutral-800">
							Description paragraphs ({descriptions.length})
						</p>
						<button
							type="button"
							onClick={() => addListItem(setDescriptions)}
							className="rounded-full border border-amber-300 px-4 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
						>
							Add paragraph
						</button>
					</div>
					{descriptions.map((desc, index) => (
						<div
							key={index}
							className="flex gap-2 items-start"
						>
							<textarea
								value={desc}
								onChange={(e) =>
									updateListItem(
										setDescriptions,
										index,
										e.target.value
									)
								}
								rows={2}
								className={`${inputClass} mt-0 flex-1`}
							/>
							{descriptions.length > 1 && (
								<button
									type="button"
									onClick={() =>
										removeListItem(
											setDescriptions,
											index
										)
									}
									className="mt-1 text-xs font-medium text-red-500 transition hover:text-red-700"
								>
									Remove
								</button>
							)}
							<input
								type="hidden"
								name={`description_${index}`}
								value={desc}
							/>
						</div>
					))}
					<input
						type="hidden"
						name="descriptionCount"
						value={descriptions.length}
					/>
				</div>

				{/* Highlights */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold text-neutral-800">
							Highlights ({highlights.length})
						</p>
						<button
							type="button"
							onClick={() => addListItem(setHighlights)}
							className="rounded-full border border-amber-300 px-4 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
						>
							Add highlight
						</button>
					</div>
					{highlights.map((highlight, index) => (
						<div
							key={index}
							className="flex gap-2 items-start"
						>
							<input
								value={highlight}
								onChange={(e) =>
									updateListItem(
										setHighlights,
										index,
										e.target.value
									)
								}
								className={`${inputClass} mt-0 flex-1`}
							/>
							{highlights.length > 1 && (
								<button
									type="button"
									onClick={() =>
										removeListItem(
											setHighlights,
											index
										)
									}
									className="mt-1 text-xs font-medium text-red-500 transition hover:text-red-700"
								>
									Remove
								</button>
							)}
							<input
								type="hidden"
								name={`highlight_${index}`}
								value={highlight}
							/>
						</div>
					))}
					<input
						type="hidden"
						name="highlightCount"
						value={highlights.length}
					/>
				</div>

				{/* Notes */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold text-neutral-800">
							Notes ({notes.length})
						</p>
						<button
							type="button"
							onClick={() => addListItem(setNotes)}
							className="rounded-full border border-amber-300 px-4 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
						>
							Add note
						</button>
					</div>
					{notes.map((note, index) => (
						<div
							key={index}
							className="flex gap-2 items-start"
						>
							<input
								value={note}
								onChange={(e) =>
									updateListItem(
										setNotes,
										index,
										e.target.value
									)
								}
								className={`${inputClass} mt-0 flex-1`}
							/>
							{notes.length > 1 && (
								<button
									type="button"
									onClick={() =>
										removeListItem(setNotes, index)
									}
									className="mt-1 text-xs font-medium text-red-500 transition hover:text-red-700"
								>
									Remove
								</button>
							)}
							<input
								type="hidden"
								name={`note_${index}`}
								value={note}
							/>
						</div>
					))}
					<input
						type="hidden"
						name="noteCount"
						value={notes.length}
					/>
				</div>

				{/* CTA */}
				<div className="grid gap-4 sm:grid-cols-2">
					<label className="text-sm font-medium text-neutral-700">
						CTA label<RequiredMark />
						<input
							name="ctaLabel"
							defaultValue={
								initialValues?.cta?.label ?? "Reserve your seat"
							}
							required
							className={inputClass}
						/>
					</label>
					<label className="text-sm font-medium text-neutral-700">
						CTA link<RequiredMark />
						<input
							name="ctaHref"
							defaultValue={
								initialValues?.cta?.href ?? "/contact"
							}
							required
							className={inputClass}
						/>
					</label>
				</div>

				{/* Sort order */}
				<label className="text-sm font-medium text-neutral-700">
					Sort order
					<input
						type="number"
						name="sortOrder"
						defaultValue={initialValues?.sortOrder ?? 0}
						className={inputClass}
					/>
				</label>

				{/* Toggles */}
				<div className="flex flex-wrap gap-6">
					<label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
						<input
							type="checkbox"
							name="published"
							defaultChecked={initialValues?.published ?? false}
							className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-amber-400"
						/>
						Published
					</label>
					<label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
						<input
							type="checkbox"
							name="showOnHomepage"
							defaultChecked={
								initialValues?.showOnHomepage ?? false
							}
							className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-amber-400"
						/>
						Show on homepage
					</label>
				</div>

				<div className="flex flex-wrap gap-3">
					<SubmitButton uploading={uploading} />
					{children}
				</div>
			</form>
		</section>
	);
}

function SubmitButton({ uploading }: { uploading: boolean }) {
	const { pending } = useFormStatus();
	const isDisabled = uploading || pending;

	return (
		<button
			type="submit"
			disabled={isDisabled}
			className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50"
		>
			{pending && (
				<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
			)}
			{uploading
				? "Uploading image..."
				: pending
					? "Saving..."
					: "Save event"}
		</button>
	);
}
