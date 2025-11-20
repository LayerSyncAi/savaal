const locationHighlights = [
  "Close to flagship hotels and culinary studios",
  "Easy access to metro and airport within 25 minutes",
  "Private tasting rooms and flexible meeting spaces",
];

export const LocationSpotlight = () => {
  return (
    <section className="grid gap-6 rounded-3xl border border-(--border) bg-gradient-to-br from-(--secondary) via-white to-(--peach-light) p-8 shadow-lg lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Where to find us</p>
        <h3 className="text-3xl font-bold text-[var(--primary)]">Savaal Guide Studio</h3>
        <p className="text-[var(--muted)]">
          Al Safa District, Dubai — nestled between design boutiques and artisanal
          cafés. Meetings by appointment only.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-(--border-light) bg-white px-4 py-3 text-sm font-semibold text-[var(--primary-dark)]">
            Landmark: City Walk
          </div>
          <div className="rounded-2xl border border-(--border-light) bg-white px-4 py-3 text-sm font-semibold text-[var(--primary-dark)]">
            Transit: Dubai Metro (Burj Khalifa/Dubai Mall)
          </div>
          <div className="rounded-2xl border border-(--border-light) bg-white px-4 py-3 text-sm font-semibold text-[var(--primary-dark)]">
            Parking: Valet & self-park nearby
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-(--border) bg-white/70 p-6 shadow-inner">
        <div className="h-full rounded-xl border border-dashed border-(--border) bg-[var(--secondary-light)] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-dark)]">
            Local highlights
          </p>
          <ul className="mt-4 space-y-2 text-[var(--primary-dark)]">
            {locationHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
