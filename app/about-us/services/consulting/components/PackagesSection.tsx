"use client";

import { useMemo, useState } from "react";

import { packages } from "./data";

type Billing = "M" | "A";

const billingCopy: Record<Billing, string> = {
  M: "Monthly",
  A: "Annual",
};

function getDisplayPrice(price: string, billing: Billing) {
  const numericPrice = Number(price.replace(/[^0-9.]/g, ""));
  const adjustedPrice = billing === "A" ? Math.max(0, numericPrice - 10) : numericPrice;

  return `$${adjustedPrice.toLocaleString()}`;
}

export function PackagesSection() {
  const [billing, setBilling] = useState<Billing>("M");

  const packagesWithPrice = useMemo(
    () =>
      packages.map((offer) => ({
        ...offer,
        displayPrice: getDisplayPrice(offer.price, billing),
      })),
    [billing],
  );

  return (
    <section className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-md lg:space-y-8 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">Packages</p>
          <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">Choose the right consulting partner</h2>
          <p className="text-sm text-neutral-600 lg:text-base">
            Explore our tailored packages built for different stages of your hospitality journey. Switch to annual billing to
            save $10 on every plan.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-neutral-100 p-1">
            {(Object.keys(billingCopy) as Billing[]).map((option) => {
              const isActive = billing === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "bg-neutral-900 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {billingCopy[option]}
                  {option === "A" && <span className="ml-2 rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">- $10</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {packagesWithPrice.map((offer, index) => {
          const isHighlighted = index === 1;
          return (
            <article
              key={offer.title}
              className={`flex h-full flex-col gap-5 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                isHighlighted ? "border-indigo-200 bg-indigo-50/60" : "border-neutral-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {offer.emoji} {offer.duration}
                  </p>
                  <h3 className="text-2xl font-semibold text-neutral-900">{offer.title}</h3>
                  <p className="text-sm text-neutral-600">{offer.bestFor}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-neutral-900">{offer.displayPrice}</p>
                  <p className="text-xs font-semibold text-neutral-500">per package</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-neutral-700">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-indigo-500" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
