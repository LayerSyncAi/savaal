"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiCheckCircle, FiClipboard, FiMapPin, FiShield, FiUsers } from "react-icons/fi";

const qualificationSteps = [
  {
    id: 1,
    callout: "Step 1 · 5 minutes",
    title: "Tell us how you judge",
    description:
      "Share your hospitality experience, cuisines you know well, and the neighborhoods you can cover.",
    Icon: FiClipboard,
  },
  {
    id: 2,
    callout: "Step 2 · Online check",
    title: "Complete the integrity screen",
    description:
      "Answer scenario-based prompts focused on discretion, conflict-of-interest, and fair scoring.",
    Icon: FiShield,
  },
  {
    id: 3,
    callout: "Step 3 · Shadow visit",
    title: "Practice with a sample scorecard",
    description:
      "Review a past restaurant visit, apply our 100-point rubric, and compare your notes with a senior judge.",
    Icon: FiUsers,
  },
  {
    id: 4,
    callout: "Step 4 · Matchmaking",
    title: "Get assigned to locations",
    description:
      "Once approved, you are scheduled for anonymous visits in the areas you selected so you can start scoring immediately.",
    Icon: FiMapPin,
  },
  {
    id: 5,
    callout: "Always on",
    title: "Support & accountability",
    description:
      "Every judge has a direct contact for questions, plus regular calibration sessions to keep standards consistent.",
    Icon: FiCheckCircle,
  },
];

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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          See judging FAQ
        </motion.button>
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
      className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 shadow-lg transition-shadow hover:shadow-xl ${className}`}
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
        className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${gradient} p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
      >
        <span className="block text-center text-lg font-semibold text-indigo-50">
          Step {step.id}: {step.title}
        </span>
        <p className="mt-3 text-center text-sm text-indigo-50/90">
          Follow the instructions in order—each number keeps you on track as you move closer to judging live.
        </p>
      </div>
    </motion.div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl font-semibold text-slate-900">{children}</h3>;
}
