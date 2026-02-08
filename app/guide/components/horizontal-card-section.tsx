import type { RestaurantInfo } from "@/content/restaurant-info";
import { RestaurantCard } from "@/components/guide/restaurant-card";

type HorizontalCardSectionProps = {
	title: string;
	items: RestaurantInfo[];
};

export function HorizontalCardSection({
	title,
	items,
}: HorizontalCardSectionProps) {
	if (items.length === 0) {
		return null;
	}

	return (
		<section className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
			</div>
			<div className="overflow-x-auto pb-2">
				<div className="flex snap-x snap-mandatory gap-6 px-1 sm:px-2">
					{items.map((restaurant) => (
						<div
							key={restaurant.id}
							className="w-[320px] shrink-0 snap-start"
						>
							<RestaurantCard restaurant={restaurant} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
