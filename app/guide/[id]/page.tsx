import { notFound } from "next/navigation";

import { MenuSection } from "../components/menu-section";
import { RestaurantGallery } from "../components/restaurant-gallery";
import { RestaurantHeader } from "../components/restaurant-header";
import { ScoreAndComments } from "../components/score-and-comments";
import { restaurantDetails } from "@/content/restaurant-info/details";
import { restaurants } from "@/content/restaurant-info";
import { convexClient, api } from "@/lib/convex";
import { mapGuideItemToRestaurantInfo } from "@/lib/guide";

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ id: restaurant.id }));
}

export const dynamicParams = true;

type RestaurantPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RestaurantPage({
  params,
}: RestaurantPageProps) {
  const { id } = await params;
  const restaurantId = decodeURIComponent(id);

  // Try static restaurants first
  const staticRestaurant = restaurants.find((item) => item.id === restaurantId);

  if (staticRestaurant) {
    const details = restaurantDetails[restaurantId];

    if (!details) {
      return notFound();
    }

    return (
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <RestaurantHeader restaurant={staticRestaurant} />
        <ScoreAndComments restaurant={staticRestaurant} />
        <RestaurantGallery gallery={details.gallery} />
        <MenuSection menu={details.menu} />
      </div>
    );
  }

  // Try Convex guide item
  try {
    const guideItem = await convexClient.query(api.guideItems.getGuideItemById, {
      id: restaurantId as any,
    });

    if (!guideItem || !guideItem.published) {
      return notFound();
    }

    const restaurant = mapGuideItemToRestaurantInfo(guideItem);
    const judgeComments = guideItem.judgeComments?.map((jc) => ({
      judge: jc.judgeName,
      comment: jc.comment,
    }));

    return (
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <RestaurantHeader restaurant={restaurant} />
        <ScoreAndComments restaurant={restaurant} judgeComments={judgeComments} />
        {guideItem.gallery && guideItem.gallery.length > 0 && (
          <RestaurantGallery gallery={guideItem.gallery} />
        )}
        {guideItem.menu && guideItem.menu.length > 0 && (
          <MenuSection menu={guideItem.menu} />
        )}
      </div>
    );
  } catch {
    return notFound();
  }
}
