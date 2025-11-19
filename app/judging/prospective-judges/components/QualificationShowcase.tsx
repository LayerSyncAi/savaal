"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { qualificationSteps } from "@/content/qualificationSteps";

const gradients = [
  "from-violet-400 to-indigo-400",
  "from-amber-400 to-orange-400",
  "from-green-400 to-emerald-400",
  "from-pink-400 to-red-400",
  "from-blue-400 to-cyan-400",
];

export function QualificationShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-4">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold md:text-5xl">Follow the path to join</h2>
          <p className="max-w-2xl text-lg text-slate-600">
            We make it simple to become a trusted Savaal judge. Each numbered step below shows
            exactly what to expect, from your first intro to ongoing support.
          </p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        {qualificationSteps.slice(0, 2).map((step, index) => (
          <BounceCard
            key={step.id}
            className={index === 0 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-8"}
            gradient={gradients[index]}
            step={step}
          />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        {qualificationSteps.slice(2, 4).map((step, index) => (
          <BounceCard
            key={step.id}
            className={index === 0 ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"}
            gradient={gradients[index + 2]}
            step={step}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard
          step={qualificationSteps[4]}
          className="col-span-12"
          gradient={gradients[4]}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/judging#faq"
            className="inline-block whitespace-nowrap rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            See judging FAQ
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BounceCard({
  className,
  gradient,
  step,
}: {
  className: string;
  gradient: string;
  step: (typeof qualificationSteps)[number];
}) {
  return (
    <motion.div
      whileHover={{ scale: 0.97, rotate: "-1deg" }}
      className={`group relative flex min-h-[380px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-slate-100 p-8 pb-40 shadow-lg transition-shadow hover:shadow-xl ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
            {step.id}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">{step.callout}</p>
            <CardTitle>{step.title}</CardTitle>
          </div>
        </div>
        <span className="text-3xl text-slate-500">
          <step.Icon />
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-slate-600">{step.description}</p>

      <div
        className={`pointer-events-none absolute bottom-6 left-6 right-6 rounded-2xl bg-gradient-to-br ${gradient} p-6 transition-transform duration-[250ms] group-hover:translate-y-2 group-hover:rotate-[2deg]`}
      >
        <span className="block text-center text-lg font-semibold text-indigo-50">
          Step {step.id}: {step.title}
        </span>
        <p className="mt-3 text-center text-sm text-indigo-50/90">{step.highlight}</p>
      </div>
    </motion.div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl font-semibold text-slate-900">{children}</h3>;
}
