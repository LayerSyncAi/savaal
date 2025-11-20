"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { slidePricingTiers } from "./data";

const SELECTED_STYLES =
  "bg-indigo-600 text-white font-semibold rounded-full py-2 px-5 shadow-md shadow-indigo-200";
const DESELECTED_STYLES =
  "font-semibold rounded-full py-2 px-5 text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors";

type TierKey = keyof typeof slidePricingTiers;

type PricingTier = (typeof slidePricingTiers)[TierKey][number];

export function SlidePricing() {
  const [selected, setSelected] = useState<TierKey>("monthly");

  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white px-6 py-12 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-50/70 to-transparent" aria-hidden />
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
      <TopLeftCircle />
      <BottomRightCircle />
    </section>
  );
}

function Heading({
  selected,
  setSelected,
}: {
  selected: TierKey;
  setSelected: (tier: TierKey) => void;
}) {
  return (
    <div className="mb-12 relative z-10 text-center">
      <h3 className="font-semibold text-4xl lg:text-5xl text-neutral-900 mb-4">Engagement pricing</h3>
      <p className="text-neutral-700 max-w-2xl mx-auto mb-6">
        Switch between our monthly rhythm and full-engagement options. Each package keeps the Savaal look and feel—neutral,
        bold, and ready to go.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("monthly")}
          className={selected === "monthly" ? SELECTED_STYLES : DESELECTED_STYLES}
        >
          Monthly rhythm
          {selected === "monthly" ? <BackgroundShift /> : null}
        </button>
        <button
          onClick={() => setSelected("engagement")}
          className={selected === "engagement" ? SELECTED_STYLES : DESELECTED_STYLES}
        >
          Full engagement
          {selected === "engagement" ? <BackgroundShift /> : null}
        </button>
      </div>
    </div>
  );
}

const BackgroundShift = () => (
  <motion.span
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-full bg-indigo-600"
    transition={{ type: "spring", stiffness: 250, damping: 25 }}
  />
);

function PriceCards({ selected }: { selected: TierKey }) {
  return (
    <div className="relative z-10 grid gap-6 lg:grid-cols-3">
      {slidePricingTiers[selected].map((tier) => (
        <PricingCard key={tier.name + selected} tier={tier} />
      ))}
    </div>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white via-white to-indigo-50/40 p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{tier.duration}</p>
          <h4 className="text-2xl font-semibold text-neutral-900">{tier.name}</h4>
          <p className="text-sm text-neutral-600">{tier.highlight}</p>
        </div>
        <div className="text-right">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={tier.price}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="text-3xl font-semibold text-indigo-700"
            >
              {tier.price}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-neutral-700">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="mt-auto w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
      >
        {tier.cta}
      </motion.button>
    </div>
  );
}

const CheckIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-0.5 shrink-0"
  >
    <path d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z" fill="#4338ca" />
  </svg>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      className="pointer-events-none absolute -left-[260px] -top-[220px] h-[420px] w-[420px] rounded-full border-2 border-indigo-100 border-dotted"
      aria-hidden
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      className="pointer-events-none absolute -bottom-[220px] -right-[260px] h-[420px] w-[420px] rounded-full border-2 border-indigo-100 border-dotted"
      aria-hidden
    />
  );
};
