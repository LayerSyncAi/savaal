import { FaUtensils, FaLocationDot } from "react-icons/fa6";

import type { RestaurantDetail } from "@/content/restaurant-info/details";

type MenuSectionProps = {
  menu: RestaurantDetail["menu"];
  googleMapsUrl?: string;
};

export function MenuSection({ menu, googleMapsUrl }: MenuSectionProps) {
  const hasMenu = menu.length > 0;

  return (
    <section className="space-y-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        {hasMenu && (
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
            <FaUtensils className="h-4 w-4" />
            Menu highlights
          </div>
        )}
        {googleMapsUrl && (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
          >
            <FaLocationDot className="h-3 w-3" />
            Open in Google Maps
          </a>
        )}
      </div>
      {hasMenu && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {menu.map((item) => (
            <div key={`${item.name}-${item.price}`} className="rounded-xl border border-orange-100 bg-amber-50/60 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{item.name}</h3>
                  <p className="text-sm text-neutral-700">{item.description}</p>
                </div>
                <span className="text-sm font-semibold text-amber-800">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
