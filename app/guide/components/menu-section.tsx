import { FaUtensils, FaLocationDot } from "react-icons/fa6";

import type { RestaurantDetail } from "@/content/restaurant-info/details";

type MenuSectionProps = {
  menu: RestaurantDetail["menu"];
  googleMapsUrl?: string;
};

function getEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Already an embed URL
    if (parsed.pathname.includes("/embed")) return url;
    // Extract query param (e.g. ?q=...)
    const query = parsed.searchParams.get("q");
    if (query) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
    }
    // Extract coordinates from ll param
    const ll = parsed.searchParams.get("ll");
    if (ll) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(ll)}&z=16&output=embed`;
    }
    // Extract from @lat,lng in path (e.g. /maps/@-17.7,31.1,16z)
    const atMatch = url.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);
    if (atMatch) {
      return `https://maps.google.com/maps?q=${atMatch[1]},${atMatch[2]}&z=16&output=embed`;
    }
    // Extract place name from /place/ path
    const placeMatch = parsed.pathname.match(/\/place\/([^/]+)/);
    if (placeMatch) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(decodeURIComponent(placeMatch[1]))}&output=embed`;
    }
    // Fallback: use entire URL as query
    return `https://maps.google.com/maps?q=${encodeURIComponent(url)}&output=embed`;
  } catch {
    return `https://maps.google.com/maps?q=${encodeURIComponent(url)}&output=embed`;
  }
}

export function MenuSection({ menu, googleMapsUrl }: MenuSectionProps) {
  const hasMenu = menu.length > 0;

  return (
    <section className="space-y-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
      {hasMenu && (
        <>
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
        </>
      )}
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
        <FaLocationDot className="h-4 w-4" />
        Location
      </div>
      {googleMapsUrl ? (
        <div className="overflow-hidden rounded-xl border border-orange-100">
          <iframe
            src={getEmbedUrl(googleMapsUrl)}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location"
          />
        </div>
      ) : (
        <p className="text-sm text-neutral-400">Location unavailable</p>
      )}
    </section>
  );
}
