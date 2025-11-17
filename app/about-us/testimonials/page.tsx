import Link from "next/link";

export default function AboutUsTestimonialsPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          About us · Testimonials
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Stories from our community
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        Testimonials will live here soon. Expect quotes, success stories, and
        highlights from trailblazing cultural hospitality leaders.
      </p>
      <Link
        href="/about-us"
        className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
      >
        Back to About us
      </Link>
    </section>
  );
}
