import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";

import type { RestaurantDetail } from "@/content/restaurant-info/details";

type RestaurantGalleryProps = {
  gallery: RestaurantDetail["gallery"];
};

export function RestaurantGallery({ gallery }: RestaurantGalleryProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
        <FaCameraRetro className="h-4 w-4" />
        Gallery
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm"
          >
            <Image
              src={image}
              alt="Gallery image"
              fill
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
