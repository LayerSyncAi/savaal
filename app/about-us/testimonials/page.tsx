"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { scrollingTestimonials } from "@/content/testimonials";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export default function AboutUsTestimonialsPage() {
  const testimonials = useMemo(() => mapTestimonials(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ef] via-[#f9f1e7] to-[#f3e3cf] text-stone-900">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700/80">
            About us · Testimonials
          </p>
          <h1 className="text-4xl font-semibold text-stone-900">
            Stories from our community
          </h1>
          <p className="mx-auto max-w-2xl text-base text-stone-700">
            Cultural hospitality leaders across the globe trust Savaal to craft
            experiences rooted in place, care, and collaboration. Hear how they
            weave our playbooks into daily rituals.
          </p>
        </div>

        <div className="rounded-[3rem] border border-amber-200/70 bg-[#fef8f0]/90 p-4 shadow-[0_25px_60px_rgba(165,120,70,0.12)]">
          <StaggerTestimonials testimonialsData={testimonials} />
        </div>

        <div className="text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center text-sm font-semibold text-amber-700 underline-offset-4 hover:text-amber-900 hover:underline"
          >
            Back to About us
          </Link>
        </div>
      </section>
    </div>
  );
}

const mapTestimonials = (): TestimonialType[] => {
  const combined = [
    ...scrollingTestimonials.top,
    ...scrollingTestimonials.middle,
    ...scrollingTestimonials.bottom,
  ];

  return combined.map((testimonial, idx) => ({
    tempId: idx,
    testimonial: testimonial.info,
    by: `${testimonial.name} · ${testimonial.title}`,
    imgSrc: testimonial.img,
  }));
};

export const StaggerTestimonials = ({
  testimonialsData,
}: {
  testimonialsData: TestimonialType[];
}) => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState<TestimonialType[]>(
    testimonialsData
  );

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, [testimonialsData]);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fdf3e7] via-[#fff9f2] to-[#fde6cf]"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-6">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-12 w-12 place-content-center rounded-full border border-amber-300 bg-white/90 text-2xl text-amber-900 transition-colors hover:bg-amber-50"
        >
          <span aria-hidden>&larr;</span>
          <span className="sr-only">Previous testimonial</span>
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-12 w-12 place-content-center rounded-full border border-amber-300 bg-white/90 text-2xl text-amber-900 transition-colors hover:bg-amber-50"
        >
          <span aria-hidden>&rarr;</span>
          <span className="sr-only">Next testimonial</span>
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: (position: number) => void;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer border border-amber-500/40 p-8 text-stone-900 transition-colors duration-500 shadow-[0px_10px_35px_rgba(160,120,70,0.15)] ${
        isActive ? "z-10 bg-amber-200/80" : "z-0 bg-white"
      }
      `}
      style={{
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive
          ? "0px 14px 0px 4px rgba(217, 119, 6, 0.4)"
          : "0px 0px 0px 0px rgba(0,0,0,0)",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-amber-500/60"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <Image
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        width={64}
        height={80}
        className="mb-4 h-16 w-14 rounded-md object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px rgba(244, 215, 182, 0.9)",
        }}
        sizes="64px"
      />
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-stone-900" : "text-stone-800"
        }`}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-amber-900/80" : "text-stone-500"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};
