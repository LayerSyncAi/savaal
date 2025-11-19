export function BusinessHero() {
  return (
    <div className="space-y-4 rounded-3xl bg-white/90 p-10 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
        Judging · Businesses
      </p>
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">How we judge</h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          At Savaal, we blend global standards with local flavor to evaluate dining experiences through a
          rigorous 3-star scoring system. This process ensures every star awarded reflects true culinary
          excellence, service consistency, and ambiance integrity.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
        <span className="inline-flex items-center gap-2 rounded-full bg-(--sand) px-4 py-2 font-semibold text-(--primary)">
          Savaal Elite Audit required
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-semibold text-(--secondary)">
          3-star certification · 100-point scale
        </span>
      </div>
    </div>
  );
}
