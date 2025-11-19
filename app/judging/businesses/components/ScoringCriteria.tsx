import type { BusinessCriteria } from "@/content/judgingBusinesses";

type ScoringCriteriaProps = {
  criteria: BusinessCriteria[];
};

export function ScoringCriteria({ criteria }: ScoringCriteriaProps) {
  return (
    <section className="grid gap-8 rounded-3xl bg-(--primary) p-10 shadow-sm">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] p-on-dark">Scoring criteria</p>
        <h1 className="text-3xl font-semibold p-on-dark">Weighted categories we assess</h1>
        <p className="text-base p-on-dark">
          Each establishment is evaluated on the following internationally aligned criteria.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {criteria.map((item) => (
          <article
            key={item.category}
            className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">{item.category}</h3>
              <span className="rounded-full bg-(--peach) px-3 py-1 text-xs font-semibold text-(--tertiary)">
                Max {item.maxScore}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
