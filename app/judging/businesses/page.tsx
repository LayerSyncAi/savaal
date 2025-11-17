import Link from "next/link";

export default function JudgingBusinessesPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Judging · Businesses
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Business submission guidance
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        Placeholder content for outlining criteria, timelines, and support for
        businesses entering the Savaal Guide judging program.
      </p>
      <Link
        href="/judging"
        className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
      >
        Back to Judging
      </Link>
    </section>
  );
}
