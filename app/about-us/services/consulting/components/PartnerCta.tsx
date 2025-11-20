export function PartnerCta() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Partner with Savaal</p>
        <p className="text-lg text-neutral-800">
          Ready to plan your package? Let’s map out the milestones and team support you need.
        </p>
      </div>
      <a
        href="/contact"
        className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Talk to us
      </a>
    </div>
  );
}
