import Link from "next/link";

export default function JudgingProspectiveJudgesPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Judging · Prospective Judges
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Join the judging collective
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        Details on how to become a judge, expectations, and onboarding steps
        will be published here soon.
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
