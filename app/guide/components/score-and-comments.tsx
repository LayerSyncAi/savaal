import type { RestaurantInfo } from "@/content/restaurant-info";
import { restaurantDetails } from "@/content/restaurant-info/details";
import { FaCommentDots } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

type JudgeComment = {
  judge: string;
  comment: string;
};

type ScoreAndCommentsProps = {
  restaurant: RestaurantInfo;
  judgeComments?: JudgeComment[];
};

export function ScoreAndComments({ restaurant, judgeComments }: ScoreAndCommentsProps) {
  const details = restaurantDetails[restaurant.id];
  const comments = judgeComments ?? details?.judgeComments;

  if (!comments || comments.length === 0) return null;

  return (
    <section className="rounded-2xl border border-orange-100 bg-neutral-900 p-6 text-white">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
          <FaCommentDots className="h-4 w-4" />
          Judge comments
        </div>
        <div className="space-y-3">
          {comments.map((entry) => (
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
