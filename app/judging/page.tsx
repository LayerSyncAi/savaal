import Link from "next/link";

const judgingFaqs = [
  {
    question: "How are judges selected for each assignment?",
    answer:
      "Assignments pair your cuisine expertise, language skills, and neighborhoods you selected so visits feel natural and unbiased.",
  },
  {
    question: "Do businesses know who the judges are?",
    answer:
      "No. Judges visit anonymously, pay their own bill upfront, and only our core team sees their identity for scheduling purposes.",
  },
  {
    question: "What happens if scores disagree?",
    answer:
      "A calibration panel reviews the notes, requests clarifications, and may schedule a second visit to confirm the right star level.",
  },
  {
    question: "Can judges participate multiple cycles in a row?",
    answer:
      "Yes. We re-run a short integrity and rubric check every six months to keep standards aligned before new assignments start.",
  },
];

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

        <div className="space-y-6">
          <section className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-neutral-900">Scoring Pillars</h3>
              <p className="text-neutral-700">
                Judges use a 100-point rubric across four pillars. Notes from
                each anonymous visit are reviewed by a small panel to confirm
                accuracy before a star level is published.
              </p>
              <ol className="grid gap-3 sm:grid-cols-2">
                {[
                  "Taste, Technique & Service",
                  "Menu Composition",
                  "Beverage Experience",
                  "Ambience & Value",
                ].map((pillar) => (
                  <li
                    key={pillar}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-neutral-900"
                  >
                    {pillar}
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-neutral-900">Savaal Stars</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>
                  <span className="font-semibold text-neutral-900">1 star:</span>{" "}
                  high level consistency and a clearly defined culinary identity
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">2 stars:</span>{" "}
                  exceptional character and a deliberate, memorable guest journey
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">3 stars:</span>{" "}
                  Absolutely excellence - precision, restraint, and command at the highest level
                </li>
              </ul>
            </div>
          </section>
        {/* <div className="space-y-3">
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
          </div> */}
        </div>

        {/* <div id="faq" className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-neutral-900">Judging FAQs</h3>
            <p className="text-neutral-700">Answers to common questions from prospective and active judges.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {judgingFaqs.map(({ question, answer }) => (
              <div key={question} className="rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                <p className="text-sm font-semibold text-neutral-900">{question}</p>
                <p className="mt-2 text-sm text-neutral-700">{answer}</p>
              </div>
            ))}
          </div>
          <Link
            href="/judging/prospective-judges"
            className="text-sm font-semibold text-indigo-700 underline-offset-4 hover:underline"
          >
            Learn how to qualify as a judge
          </Link>
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Inquire About Certification
          </Link>
        </div> */}
      </section>
    </div>
  );
}
