import Link from "next/link";

export default function JudgingProspectiveJudgesPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
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

      <div className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-neutral-900">How it works</h2>
        <ul className="space-y-3 text-neutral-700">
          <li>
            <span className="font-semibold text-neutral-900">Sign up freely:</span>{" "}
            Registration is open to everyone. After you share your contact
            details and preferred locations, you will receive an email with the
            next steps.
          </li>
          <li>
            <span className="font-semibold text-neutral-900">Pass the qualification test:</span>{" "}
            We assess credibility, commitment to fairness and confidentiality,
            ability to judge according to our published criteria, and your
            promise to integrity and honesty.
          </li>
          <li>
            <span className="font-semibold text-neutral-900">Stay informed:</span>{" "}
            You will be emailed about your progress at each stage of the
            process.
          </li>
          <li>
            <span className="font-semibold text-neutral-900">Receive assignments:</span>{" "}
            If you pass, we will assign you to institution(s) that match the
            preferred locations you provided, so you can begin on-site judging.
          </li>
        </ul>
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
