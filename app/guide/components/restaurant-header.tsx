import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar, FaUtensils } from "react-icons/fa";
import type { RestaurantInfo } from "@/content/restaurant-info";

type RestaurantHeaderProps = {
  restaurant: RestaurantInfo;
};

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-orange-100 bg-neutral-900 text-white shadow-xl">
      <div className="absolute inset-0">
        <Image
          src={restaurant.coverImage}
          alt={`${restaurant.name} cover`}
          fill
          className="h-full w-full object-cover brightness-[0.45]"
          sizes="(max-width: 1024px) 100vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/35" />
      </div>

      <div className="relative p-8 lg:p-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" aria-hidden />
            {restaurant.category}
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl p-white">{restaurant.name}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-amber-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-medium text-white">
              <FaUtensils className="h-4 w-4" />
              {restaurant.cuisine}
            </span>
            <span className="inline-flex items-center gap-2 text-neutral-100">
              <FaLocationDot className="h-4 w-4 text-amber-300" />
              {restaurant.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-semibold text-white">
              <FaStar className="h-4 w-4 text-amber-400" />
              {restaurant.rating.toFixed(1)} rating
            </span>
          </div>

          <p className="max-w-3xl text-lg leading-relaxed p-on-dark">
            {restaurant.description}
          </p>
        </div>
      </div>
    </section>
  );
}
