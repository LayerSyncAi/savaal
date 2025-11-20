import { packages } from "./data";

export function PackagesSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((offer) => (
        <article
          key={offer.title}
          className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-indigo-600">{offer.emoji} {offer.duration}</p>
              <h2 className="text-2xl font-semibold text-neutral-900">{offer.title}</h2>
              <p className="text-sm text-neutral-600">{offer.bestFor}</p>
            </div>
            <p className="text-lg font-semibold text-neutral-900">{offer.price}</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {offer.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
