import Link from "next/link";

type AuditProcessProps = {
  steps: string[];
};

export function AuditProcess({ steps }: AuditProcessProps) {
  return (
    <section className="grid gap-6 rounded-3xl bg-gradient-to-br from-white via-indigo-50 to-amber-50 p-10 shadow-sm">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700">Audit process</p>
        <h2 className="text-3xl font-semibold text-neutral-900">Steps to certification</h2>
        <p className="text-base text-neutral-700">
          We balance anonymous reviews with expert panels to confirm every star before it is published.
        </p>
      </div>
      <ol className="grid gap-3 md:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <p className="text-base font-semibold text-neutral-900">{step}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/judging"
          className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:shadow"
        >
          Back to Judging
        </Link>
        <Link
          href="/guide"
          className="inline-flex items-center rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
        >
          Explore the Savaal Guide
        </Link>
      </div>
    </section>
  );
}
