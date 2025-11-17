import Link from "next/link";

export default function JudgingPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Judging
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Judging framework placeholder
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        Explore how judging works, what evaluators look for, and how businesses
        and prospective judges can participate.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/judging/businesses"
          className="rounded-full border border-indigo-200 px-4 py-2 text-indigo-700"
        >
          For businesses
        </Link>
        <Link
          href="/judging/prospective-judges"
          className="rounded-full border border-indigo-200 px-4 py-2 text-indigo-700"
        >
          For judges
        </Link>
      </div>
    </section>
  );
}
