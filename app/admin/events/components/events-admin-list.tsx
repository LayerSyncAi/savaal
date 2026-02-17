"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Doc } from "@/convex/_generated/dataModel";

type EventItem = Doc<"events">;

type FilterCategory = "All" | "gathering" | "training";
type FilterPublished = "All" | "Published" | "Unpublished";

export function EventsAdminList({ items }: { items: EventItem[] }) {
	const [categoryFilter, setCategoryFilter] =
		useState<FilterCategory>("All");
	const [publishedFilter, setPublishedFilter] =
		useState<FilterPublished>("All");
	const [search, setSearch] = useState("");

	const filteredItems = useMemo(() => {
		return items.filter((item) => {
			if (categoryFilter !== "All" && item.category !== categoryFilter) {
				return false;
			}
			if (publishedFilter === "Published" && !item.published) {
				return false;
			}
			if (publishedFilter === "Unpublished" && item.published) {
				return false;
			}
			if (search.trim()) {
				const query = search.toLowerCase();
				return item.title.toLowerCase().includes(query);
			}
			return true;
		});
	}, [categoryFilter, items, publishedFilter, search]);

	return (
		<div className="space-y-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
			<div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
						Category
						<select
							value={categoryFilter}
							onChange={(e) =>
								setCategoryFilter(
									e.target.value as FilterCategory
								)
							}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						>
							<option value="All">All</option>
							<option value="gathering">Gathering</option>
							<option value="training">Training</option>
						</select>
					</label>
					<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
						Published
						<select
							value={publishedFilter}
							onChange={(e) =>
								setPublishedFilter(
									e.target.value as FilterPublished
								)
							}
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						>
							<option value="All">All</option>
							<option value="Published">Published</option>
							<option value="Unpublished">Unpublished</option>
						</select>
					</label>
					<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
						Search
						<input
							type="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search by title"
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
				</div>
				<p className="text-sm text-neutral-500">
					{filteredItems.length}{" "}
					{filteredItems.length === 1 ? "event" : "events"}
				</p>
			</div>

			<div className="grid gap-4">
				{filteredItems.map((item) => (
					<div
						key={item._id}
						className="flex flex-col gap-4 rounded-2xl border border-amber-100 bg-amber-50/40 p-4 sm:flex-row sm:items-center sm:justify-between"
					>
						<div className="space-y-1">
							<h2 className="text-lg font-semibold text-neutral-900">
								{item.title}
							</h2>
							<p className="text-sm text-neutral-600">
								{item.category === "gathering"
									? "Gathering"
									: "Training"}{" "}
								&middot; {item.date}
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="text-xs text-neutral-500">
									{item.published ? "Published" : "Draft"}
								</span>
								{item.showOnHomepage && (
									<span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
										Homepage
									</span>
								)}
							</div>
						</div>
						<div className="flex flex-wrap gap-2">
							<Link
								href={`/admin/events/${item._id}/edit`}
								className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
							>
								Edit
							</Link>
						</div>
					</div>
				))}
				{filteredItems.length === 0 && (
					<div className="rounded-xl border border-dashed border-amber-200 p-8 text-center text-sm text-neutral-500">
						No events match your filters.
					</div>
				)}
			</div>
		</div>
	);
}
