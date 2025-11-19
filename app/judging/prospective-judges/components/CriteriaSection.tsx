import { businessCriteria } from "@/content/judgingBusinesses";

export function CriteriaSection() {
  return (
    <div className="grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-neutral-800 shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-900">Judging criteria and maximum scores</h2>
      <p>
        Every score you submit uses the same 100-point rubric our business team relies on. Knowing the weighting keeps judges
        focused on what matters most during each anonymous visit.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {businessCriteria.map(({ category, maxScore, description }) => (
          <div key={category} className="rounded-2xl border border-indigo-100 bg-white/70 p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-semibold text-neutral-900">{category}</p>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800">{maxScore} pts</span>
            </div>
            <p className="mt-2 text-sm text-neutral-700">{description}</p>
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold text-neutral-700">
        Total possible score: 100 points. Judges submit a full scorecard after each visit, and panel reviews confirm the final star
        level.
      </p>
    </div>
  );
}
