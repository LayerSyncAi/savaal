import Link from "next/link";
import { RestaurantCard } from "@/components/guide/restaurant-card";
import { restaurants } from "@/content/restaurant-info";

export default function GuidePage() {
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
          Explore the restaurants celebrated by our judges with mobile-first
          cards that showcase their cuisine, location, and scoring breakdown.
          Hover or tap each feature card to see how every venue performed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
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
