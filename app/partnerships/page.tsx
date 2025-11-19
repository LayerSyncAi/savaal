import Link from "next/link";

import { ShiftHightlightTabs } from "./components/ShiftHightlightTabs";

export default function PartnershipsPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Partnerships
        </p>
        <h1 className="text-4xl font-bold text-neutral-900">
          Explore partnership opportunities
        </h1>
        <p className="text-lg text-neutral-700">
          Learn how to collaborate with the Savaal Guide on campaigns, programs,
          and community initiatives. Select the option that best fits your
          goals to see how we can work together.
        </p>
      </div>

      <ShiftHightlightTabs />

      <div>
        <Link
          href="/"
          className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
