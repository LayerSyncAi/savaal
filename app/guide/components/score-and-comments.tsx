import type { RestaurantInfo } from "@/content/restaurant-info";
import { restaurantDetails } from "@/content/restaurant-info/details";
import { FaCommentDots } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

type ScoreAndCommentsProps = {
  restaurant: RestaurantInfo;
};

export function ScoreAndComments({ restaurant }: ScoreAndCommentsProps) {
  const details = restaurantDetails[restaurant.id];

  if (!details) return null;

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-3 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
          <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" aria-hidden />
          Score breakdown
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {restaurant.scores.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-orange-100 bg-amber-50/60 px-4 py-3 text-neutral-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">{item.label}</p>
              <p className="text-lg font-bold text-neutral-900">{item.score}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl bg-amber-100 px-4 py-3 text-amber-900">
          <span className="text-sm font-semibold uppercase tracking-[0.12em]">Total</span>
          <span className="text-2xl font-bold">{restaurant.totalScore}</span>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-orange-100 bg-neutral-900 p-6 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
          <FaCommentDots className="h-4 w-4" />
          Judge comments
        </div>
        <div className="space-y-3">
          {details.judgeComments.map((entry) => (
            <div
              key={`${entry.judge}-${entry.comment}`}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-amber-50"
            >
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-200">
                <FaRegCheckCircle className="h-3.5 w-3.5" />
                {entry.judge}
              </div>
              <p className="leading-relaxed p-on-dark">{entry.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
