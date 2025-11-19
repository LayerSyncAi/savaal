import Link from "next/link";

import { businessCriteria } from "@/content/judgingBusinesses";

export default function JudgingPage() {
  return (
    <div className="bg-neutral-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Judging
          </p>
          <h1 className="text-4xl font-bold text-neutral-900">
            Transparent judging, trusted outcomes
          </h1>
          <p className="text-lg text-neutral-700">
            Savaal stars are issued by independent judges who follow a 100-point
            rubric and a documented review cycle. Businesses and judges can both
            participate—while keeping the scoring process consistent and fair.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">For restaurants & cafes</h2>
            <p className="mt-2 text-neutral-700">
              Anonymous visits, detailed scorecards, and a panel review keep our
              stars credible. We focus on food quality, hospitality, ambience,
              and value to determine where each venue lands on the Savaal
              three-star scale.
            </p>
            <Link
              href="/judging/businesses"
              className="mt-4 inline-flex w-fit items-center gap-2 text-indigo-700 underline-offset-4 hover:underline"
            >
              See how businesses are assessed
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">For judges</h2>
            <p className="mt-2 text-neutral-700">
              Prospective judges complete a short qualification, practice with a
              sample scorecard, and receive assignments matched to their
              expertise and location. Ongoing calibration sessions keep everyone
              aligned to the same rubric.
            </p>
            <Link
              href="/judging/prospective-judges"
              className="mt-4 inline-flex w-fit items-center gap-2 text-indigo-700 underline-offset-4 hover:underline"
            >
              Become a judge
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900">How scoring works</h3>
            <p className="text-neutral-700">
              Judges use a 100-point rubric across seven categories. Notes from
              each anonymous visit are reviewed by a small panel to confirm
              accuracy before a star level is published.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {businessCriteria.slice(0, 4).map(({ category, maxScore, description }) => (
                <div
                  key={category}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-neutral-900">{category}</p>
                    <span className="text-xs font-bold text-indigo-700">{maxScore} pts</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">{description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Stars are awarded at 70+ (⭐), 80+ (⭐⭐), and 90+ (⭐⭐⭐) once panel
              consensus is reached.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900">Judging timeline</h3>
            <ul className="space-y-3 text-neutral-700">
              <li>
                <span className="font-semibold text-neutral-900">Mystery visit:</span>{" "}
                Judges are scheduled discreetly; venues do not know when they are
                being evaluated.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Scorecard & notes:</span>{" "}
                A full rubric is completed within 24 hours, capturing photos and
                observations to support the score.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Panel calibration:</span>{" "}
                A small review team checks for consistency and resolves any
                variances against our standards.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Stars published:</span>{" "}
                Once confirmed, stars are shared with the business and listed on
                Savaal. Updates occur during each six-month cycle.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
