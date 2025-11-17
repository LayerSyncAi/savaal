import Link from "next/link";

export default function GuidePage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Guide
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Discover the full Savaal Guide experience.
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        This placeholder page will soon showcase detailed resources to help you
        navigate cultural hospitality benchmarks, learning paths, and curated
        destinations across Africa.
      </p>
      <Link
        href="/"
        className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </section>
  );
}
