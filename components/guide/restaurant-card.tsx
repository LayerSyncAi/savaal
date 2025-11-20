"use client";

import Image from "next/image";
import { useState } from "react";
import type { RestaurantInfo } from "@/content/restaurant-info";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { FaStar, FaUtensils } from "react-icons/fa";

type RestaurantCardProps = {
  restaurant: RestaurantInfo;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="group relative h-full w-full [perspective:1600px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleToggle();
        }
      }}
      aria-pressed={isFlipped}
    >
      <div
        className={`relative h-full min-h-[420px] w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}
      >
        <article
          className={`absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-orange-100/70 bg-neutral-900 shadow-md transition-opacity duration-500 [backface-visibility:hidden] ${isFlipped ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={restaurant.coverImage}
            alt={`${restaurant.name} cover`}
            fill
            className="absolute inset-0 h-full w-full object-cover brightness-[0.78] transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/25" />

          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-amber-700 shadow">
            <FaStar className="h-4 w-4 text-amber-500" />
            <span>{restaurant.rating.toFixed(1)} ★</span>
          </div>

          <div className="relative flex flex-1 flex-col gap-4 p-4 text-white">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-amber-200">
                {restaurant.category}
              </p>
              <h3 className="text-xl font-bold text-white">{restaurant.name}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-medium text-white">
                <FaUtensils className="h-4 w-4" />
                {restaurant.cuisine}
              </span>
              <span className="inline-flex items-center gap-2 text-neutral-100">
                <FaLocationDot className="h-4 w-4 text-amber-400" />
                {restaurant.location}
              </span>
            </div>

            <p className="p-on-dark text-sm leading-relaxed text-neutral-100">
              {restaurant.description}
            </p>

            <div className="group/cta mt-auto inline-flex w-full items-center justify-between rounded-xl bg-white/15 px-4 py-3 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_12px_35px_-12px_rgba(0,0,0,0.45)] group-hover:scale-[1.015] group-hover:bg-white/20 group-hover:shadow-[0_12px_35px_-12px_rgba(0,0,0,0.45)]">
              <span className="text-sm font-semibold">Explore {restaurant.category.toLowerCase()}</span>
              <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:scale-110" />
            </div>
          </div>
        </article>

        <article
          className={`absolute inset-0 flex h-full w-full flex-col rounded-2xl border border-orange-100 bg-white px-4 py-6 shadow-md transition-opacity duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)] ${isFlipped ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                Judging breakdown
              </p>
              <h3 className="text-lg font-bold text-neutral-900">{restaurant.name}</h3>
              <p className="text-sm text-neutral-600">{restaurant.cuisine}</p>
            </div>
            <div className="rounded-xl bg-amber-50 px-3 py-2 text-right text-amber-800">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                Total
              </p>
              <p className="text-lg font-bold leading-tight">{restaurant.totalScore}</p>
            </div>
          </div>

          <div className="mt-4 flex-1 space-y-3">
            {restaurant.scores.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl bg-orange-50/70 px-4 py-3 text-sm text-neutral-800 shadow-sm transition-all duration-300 group-hover:-translate-y-[1px]"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-semibold text-amber-700">{item.score}</span>
              </div>
            ))}
          </div>

          <div className="group/cta mt-4 inline-flex w-full items-center justify-between rounded-xl border border-orange-100 bg-amber-50 px-4 py-3 text-amber-800 transition-transform duration-300 hover:scale-[1.02]">
            <span className="text-sm font-semibold">Explore {restaurant.category.toLowerCase()}</span>
            <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:scale-110" />
          </div>
        </article>
      </div>
    </div>
  );
}
