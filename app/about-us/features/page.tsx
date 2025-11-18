import Link from "next/link";

const features = [
  {
    title: "Savaal Guide Website",
    description:
      "A curated digital hub that spotlights standout hospitality brands, insider experiences, and cultural happenings across the Savaal ecosystem.",
  },
  {
    title: "Judging Panel + Scorecard",
    description:
      "Independent culinary, hospitality, and cultural experts evaluate applicants using a transparent scorecard that keeps standards high and consistent.",
  },
  {
    title: "Pop-up Events & Cultural Festivals",
    description:
      "Immersive pop-ups and festivals bring Savaal partners together with travelers and locals, creating memorable touchpoints beyond the guide itself.",
  },
  {
    title: "Hospitality Training + Consultancy",
    description:
      "Hands-on coaching, playbooks, and operational support help venues level up guest experience, storytelling, and operational excellence.",
  },
  {
    title: "Savaal Certified Badge",
    description:
      "Verified partners earn a recognizable seal of approval that signals trust, authenticity, and alignment with the Savaal ethos.",
  },
  {
    title: "Subscription Model for Listings",
    description:
      "Flexible subscription tiers keep listings fresh while funding community programming, new guides, and platform improvements.",
  },
];

export default function AboutUsFeaturesPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-24">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          About us · Features
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          The Savaal Ecosystem
        </h1>
        <p className="text-lg text-neutral-700">
          Explore the programs and touchpoints that make Savaal more than a guide.
          Each feature strengthens the hospitality community, creates discovery
          moments for travelers, and reinforces a shared standard of excellence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">{feature.title}</h2>
            <p className="mt-2 text-neutral-700">{feature.description}</p>
          </div>
        ))}
      </div>

      <Link
        href="/about-us"
        className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
      >
        Back to About us
      </Link>
    </section>
  );
}
