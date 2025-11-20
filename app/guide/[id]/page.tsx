import { notFound } from "next/navigation";

import { MenuSection } from "../components/menu-section";
import { RestaurantGallery } from "../components/restaurant-gallery";
import { RestaurantHeader } from "../components/restaurant-header";
import { ScoreAndComments } from "../components/score-and-comments";
import { restaurantDetails } from "@/content/restaurant-info/details";
import { restaurants } from "@/content/restaurant-info";

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ id: restaurant.id }));
}

type RestaurantPageProps = {
  params: { id: string };
};

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurantId = decodeURIComponent(params.id);
  const restaurant = restaurants.find((item) => item.id === restaurantId);

  if (!restaurant) {
    return notFound();
  }

  const details = restaurantDetails[restaurantId];

  if (!details) {
    return notFound();
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
      <RestaurantHeader restaurant={restaurant} />
      <ScoreAndComments restaurant={restaurant} />
      <RestaurantGallery gallery={details.gallery} />
      <MenuSection menu={details.menu} />
    </div>
  );
}
