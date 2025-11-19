"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiCheckCircle,
  FiClipboard,
  FiMapPin,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const qualificationSteps = [
  {
    id: 1,
    callout: "Step 1 · 5 minutes",
    title: "Tell us how you judge",
    description:
      "Share your hospitality experience, cuisines you know well, and the neighborhoods you can cover.",
    contentPosition: "r" as const,
    Icon: FiClipboard,
  },
  {
    id: 2,
    callout: "Step 2 · Online check",
    title: "Complete the integrity screen",
    description:
      "Answer scenario-based prompts focused on discretion, conflict-of-interest, and fair scoring.",
    contentPosition: "l" as const,
    Icon: FiShield,
  },
  {
    id: 3,
    callout: "Step 3 · Shadow visit",
    title: "Practice with a sample scorecard",
    description:
      "Review a past restaurant visit, apply our 100-point rubric, and compare your notes with a senior judge.",
    contentPosition: "r" as const,
    Icon: FiUsers,
  },
  {
    id: 4,
    callout: "Step 4 · Matchmaking",
    title: "Get assigned to locations",
    description:
      "Once approved, you are scheduled for anonymous visits in the areas you selected so you can start scoring immediately.",
    contentPosition: "l" as const,
    Icon: FiMapPin,
  },
  {
    id: 5,
    callout: "Always on",
    title: "Support & accountability",
    description:
      "Every judge has a direct contact for questions, plus regular calibration sessions to keep standards consistent.",
    contentPosition: "r" as const,
    Icon: FiCheckCircle,
  },
];

type QualificationStep = (typeof qualificationSteps)[number];

export function QualificationShowcase() {
  const [featureInView, setFeatureInView] = useState<QualificationStep>(
    qualificationSteps[0],
  );

  return (
    <section className="relative mx-auto max-w-6xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      <div className="-mt-[90vh] hidden md:block" />

      {qualificationSteps.map((step) => (
        <Content
          key={step.id}
          featureInView={step}
          setFeatureInView={setFeatureInView}
        />
      ))}
    </section>
  );
}

function SlidingFeatureDisplay({
  featureInView,
}: {
  featureInView: QualificationStep;
}) {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-16 z-10 hidden h-[86vh] w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="h-fit w-3/5 rounded-2xl bg-white/90 p-6 shadow-2xl ring-1 ring-neutral-200 backdrop-blur"
      >
        <FeatureCard featureInView={featureInView} />
      </motion.div>
    </div>
  );
}

function Content({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: (step: QualificationStep) => void;
  featureInView: QualificationStep;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-160px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, featureInView, setFeatureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-[86vh]"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-3"
        >
          <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {featureInView.callout}
          </span>
          <p className="text-3xl font-bold text-neutral-900">
            {featureInView.title}
          </p>
          <p className="text-neutral-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <FeatureCard featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  featureInView,
}: {
  featureInView: QualificationStep;
}) {
  return (
    <div className="relative h-80 w-full rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200">
      <div className="flex w-full items-center gap-1.5 rounded-t-2xl bg-neutral-100 p-3">
        <div className="h-3 w-3 rounded-full bg-rose-400" />
        <div className="h-3 w-3 rounded-full bg-amber-300" />
        <div className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-auto text-sm font-medium text-neutral-600">Savaal Live</span>
      </div>
      <div className="flex h-full flex-col justify-between p-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {featureInView.callout}
          </p>
          <p className="text-xl font-bold text-neutral-900">{featureInView.title}</p>
          <p className="text-sm text-neutral-600">{featureInView.description}</p>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-indigo-50 px-4 py-3 text-indigo-900">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide">Judge toolkit</p>
            <p className="text-sm text-neutral-700">
              Confidential scorecards, guidance notes, and a direct line to the judging team.
            </p>
          </div>
          <span className="text-5xl text-indigo-300">
            <featureInView.Icon />
          </span>
        </div>
      </div>
    </div>
  );
}
