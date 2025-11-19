'use client'

import { scrollingTestimonials, type Testimonial, type TestimonialRows } from "@/content/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsTestimonialsPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <ScrollingTestimonials testimonials={scrollingTestimonials} />
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <Link
          href="/about-us"
          className="inline-flex items-center text-sm font-semibold text-indigo-300 underline-offset-4 hover:text-indigo-200 hover:underline"
        >
          Back to About us
        </Link>
      </div>
    </div>
  );
}

const ScrollingTestimonials = ({ testimonials }: { testimonials: TestimonialRows }) => {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
      <div className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">
          About us · Testimonials
        </p>
        <h1 className="text-4xl font-bold">Stories from our community</h1>
        <p className="mx-auto max-w-2xl text-base text-slate-300">
          Cultural hospitality leaders across the globe use Savaal to design,
          operate, and scale meaningful guest experiences. Hear how they embed
          our playbooks into everyday rituals.
        </p>
      </div>

      <div className="relative overflow-x-hidden rounded-3xl border border-slate-900/60 bg-slate-900/40 p-6 shadow-2xl">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />

        <div className="flex items-center gap-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="mt-6 flex items-center gap-4">
          <TestimonialList list={testimonials.middle} duration={85} reverse />
          <TestimonialList list={testimonials.middle} duration={85} reverse />
          <TestimonialList list={testimonials.middle} duration={85} reverse />
        </div>
        <div className="mt-6 flex items-center gap-4">
          <TestimonialList list={testimonials.bottom} duration={165} />
          <TestimonialList list={testimonials.bottom} duration={165} />
          <TestimonialList list={testimonials.bottom} duration={165} />
        </div>
      </div>
    </section>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: Testimonial[];
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((testimonial) => (
        <article
          key={testimonial.id}
          className="shrink-0 w-[420px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80"
        >
          <div className="grid grid-cols-[7rem,_1fr]">
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={280}
              height={160}
              className="h-40 w-full object-cover"
              sizes="120px"
            />
            <div className="relative bg-slate-950/60 p-4">
              <span className="block text-lg font-semibold text-white">
                {testimonial.name}
              </span>
              <span className="block text-xs font-medium uppercase tracking-wider text-indigo-200">
                {testimonial.title}
              </span>
              <p className="mt-3 text-sm text-slate-300">{testimonial.info}</p>
              <span className="absolute right-3 top-2 text-5xl font-serif text-slate-800">“</span>
            </div>
          </div>
        </article>
      ))}
    </motion.div>
  );
};
