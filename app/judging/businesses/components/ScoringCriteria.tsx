import type { BusinessCriteria } from "@/content/judgingBusinesses";

type ScoringCriteriaProps = {
  criteria: BusinessCriteria[];
};

export function ScoringCriteria({ criteria }: ScoringCriteriaProps) {
  return (
    <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-amber-50 p-10 shadow-sm">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700">Scoring criteria</p>
        <h2 className="text-3xl font-semibold text-neutral-900">Weighted categories we assess</h2>
        <p className="text-base text-neutral-700">
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
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                Max {item.maxScore}/100
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
