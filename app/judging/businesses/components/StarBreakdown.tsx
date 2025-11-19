import type { BusinessStarLevel } from "@/content/judgingBusinesses";

type StarBreakdownProps = {
  starLevels: BusinessStarLevel[];
};

export function StarBreakdown({ starLevels }: StarBreakdownProps) {
  return (
    <section className="grid gap-8 rounded-3xl bg-white p-10 shadow-sm">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Star breakdown</p>
        <h2 className="text-3xl font-semibold text-neutral-900">How to earn Savaal stars</h2>
        <p className="text-base text-neutral-700">
          Only restaurants that undergo the Savaal Elite Audit can earn a 1 to 3-star certification. Stars are
          awarded based on a 100-point scoring system and are reserved for establishments that excel in all areas
          of the judging criteria.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {starLevels.map((star) => (
          <div key={star.level} className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-neutral-900">{star.level}</h3>
              <span className="text-sm font-semibold text-indigo-700">{star.scoreRange}</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">{star.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
