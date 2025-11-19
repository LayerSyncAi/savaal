import Link from "next/link";

import { businessCriteria } from "@/content/judgingBusinesses";

import { QualificationShowcase } from "./components/QualificationShowcase";

export default function JudgingProspectiveJudgesPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Judging · Prospective Judges
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Join the judging collective
        </h1>
        <p className="text-lg text-neutral-700">
          Anyone can volunteer to become a judge. To keep evaluations credible and
          fair, we invite you to complete a short qualification process that
          focuses on honesty, discretion, and alignment with our criteria.
        </p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Who makes a great Savaal judge
        </h2>
        <p className="text-neutral-700">
          We look for people who know great food and hospitality, are comfortable
          staying anonymous in dining rooms, and can clearly explain why they
          gave the score they did. The best judges balance curiosity with
          discipline, keep strict confidentiality, and respect the businesses
          they visit.
        </p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-neutral-900">
              How qualification works
            </h2>
            <p className="text-neutral-700">
              A transparent, guided experience that mirrors the same discipline
              we expect from you in the field.
            </p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
            Built for light + dark backgrounds
          </span>
        </div>
        <QualificationShowcase />
      </div>

      <div className="grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-neutral-800 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-900">
          Judging criteria and maximum scores
        </h2>
        <p>
          Every score you submit uses the same 100-point rubric our business team
          relies on. Knowing the weighting keeps judges focused on what matters
          most during each anonymous visit.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {businessCriteria.map(({ category, maxScore, description }) => (
            <div
              key={category}
              className="rounded-2xl border border-indigo-100 bg-white/70 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-neutral-900">{category}</p>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800">
                  {maxScore} pts
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-700">{description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-neutral-700">
          Total possible score: 100 points. Judges submit a full scorecard after
          each visit, and panel reviews confirm the final star level.
        </p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-neutral-800">
        <h2 className="text-xl font-semibold text-neutral-900">Six-month judging cycles</h2>
        <p>
          Each program runs for six months. This timeframe helps restaurants stay
          consistent over time and keeps fresh faces and palates involved. After
          every cycle, you will be invited to take a similar—but refreshed—test
          to confirm you are ready for the next round.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/judging"
          className="inline-flex items-center text-indigo-600 underline-offset-4 hover:underline"
        >
          Back to Judging
        </Link>
      </div>
    </section>
  );
}
