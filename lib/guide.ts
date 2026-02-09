import type { RestaurantInfo } from "@/content/restaurant-info";
import type { Doc } from "@/convex/_generated/dataModel";

export type GuideItemDoc = Doc<"guideItems">;

export function mapGuideItemToRestaurantInfo(
	item: GuideItemDoc
): RestaurantInfo {
	return {
		id: item._id,
		name: item.name,
		category: item.category,
		cuisine: item.cuisine,
		city: item.city,
		country: item.country,
		region: item.region as RestaurantInfo["region"],
		location: item.location,
		coverImage: item.coverImage,
		rating: item.rating,
		priceLevel: item.priceLevel as RestaurantInfo["priceLevel"],
		description: item.description,
		scores: item.scores,
		totalScore: item.totalScore,
	};
}
