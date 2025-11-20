import { FaUtensils } from "react-icons/fa6";

import type { RestaurantDetail } from "@/content/restaurant-info/details";

type MenuSectionProps = {
  menu: RestaurantDetail["menu"];
};

export function MenuSection({ menu }: MenuSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
        <FaUtensils className="h-4 w-4" />
        Menu highlights
      </div>
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
    </section>
  );
}
