import Link from "next/link";

export default function AboutUsPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          About us
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Celebrating cultural hospitality across Africa.
        </h1>
      </div>
      <p className="text-lg text-neutral-700">
        This placeholder space will outline the Savaal Guide story, our mission,
        and how we champion the region&apos;s most outstanding hosts.
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
