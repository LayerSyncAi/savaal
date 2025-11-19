import Link from "next/link";

const criteria = [
  {
    category: "Taste & Technique",
    weight: "35%",
    description: "Quality, flavor balance, cooking skill, and use of traditional ingredients.",
  },
  {
    category: "Service",
    weight: "25%",
    description: "Hospitality, timing, staff knowledge, and guest experience.",
  },
  {
    category: "Menu Composition",
    weight: "10%",
    description: "Ingredient sourcing, dietary options, and creativity.",
  },
  {
    category: "Presentation",
    weight: "10%",
    description: "Visual storytelling, plating style, and consistency.",
  },
  {
    category: "Beverage Experience",
    weight: "10%",
    description: "Curation, pairing options, and bar service.",
  },
  {
    category: "Ambience",
    weight: "5%",
    description: "Décor, lighting, cleanliness, and comfort.",
  },
  {
    category: "Perceived Value",
    weight: "5%",
    description: "Experience vs price, portion sizes, and exclusivity.",
  },
];

const starLevels = [
  {
    level: "⭐ 1 Star",
    score: "70–79",
    meaning: "Consistently good with unique local flavor, worth visiting.",
  },
  {
    level: "⭐⭐ 2 Stars",
    score: "80–89",
    meaning: "Excellent execution and memorable service, with elevated classics.",
  },
  {
    level: "⭐⭐⭐ 3 Stars",
    score: "90–100",
    meaning:
      "Exceptional. World-class food, service, and cultural innovation. A destination.",
  },
];

const auditSteps = [
  "Anonymous Mystery Visit",
  "Internal Scorecard Evaluation",
  "Panel Review and Star Confirmation",
  "Official Star Badge Issued",
  "Feedback & Actionable Insights Report",
  "Inclusion in the Savaal Website Star Listings",
  "Optional In-depth Digital Report Add-on",
];

export default function JudgingBusinessesPage() {
  return (
    <div className="bg-neutral-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
        <div className="space-y-4 rounded-3xl bg-white/90 p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Judging · Businesses
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">How we judge</h1>
            <p className="text-lg leading-relaxed text-neutral-700">
              At Savaal, we blend global standards with local flavor to evaluate dining experiences
              through a rigorous 3-star scoring system. This process ensures every star awarded
              reflects true culinary excellence, service consistency, and ambiance integrity.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 font-semibold text-indigo-700">
              Savaal Elite Audit required
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-700">
              3-star certification · 100-point scale
            </span>
          </div>
        </div>

        <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-amber-50 p-10 shadow-sm">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700">
              Scoring criteria
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900">Weighted categories we assess</h2>
            <p className="text-base text-neutral-700">
              Each establishment is evaluated on the following internationally aligned criteria.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {criteria.map((item) => (
              <article
                key={item.category}
                className="flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-neutral-900">{item.category}</h3>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {item.weight}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white p-10 shadow-sm">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Star breakdown
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900">How to earn Savaal stars</h2>
            <p className="text-base text-neutral-700">
              Only restaurants that undergo the Savaal Elite Audit can earn a 1 to 3-star certification.
              Stars are awarded based on a 100-point scoring system and are reserved for establishments that
              excel in all areas of the judging criteria.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {starLevels.map((star) => (
              <div
                key={star.level}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">{star.level}</h3>
                  <span className="text-sm font-semibold text-indigo-700">{star.score}</span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{star.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-neutral-900 p-10 text-white shadow-sm">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Audit process
            </p>
            <h2 className="text-3xl font-semibold">Steps to certification</h2>
            <p className="text-base text-neutral-200">
              We balance anonymous reviews with expert panels to confirm every star before it is published.
            </p>
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {auditSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold">{step}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/judging"
              className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:translate-y-[-2px] hover:shadow"
            >
              Back to Judging
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore the Savaal Guide
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
