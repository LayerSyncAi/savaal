"use client";

import { useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import type { FAQ } from "@/types/content";

interface FaqsSectionProps {
        faqs: FAQ[];
}

export function FaqsSection({ faqs }: FaqsSectionProps) {
        return (
                <section className="px-6 py-20" aria-label="FAQs">
                        <div className="mx-auto max-w-5xl">
                                <div className="text-center">
                                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">
                                                FAQs
                                        </p>
                                        <h2 className="mt-3 text-3xl font-semibold text-(--heading-color)]">
                                                Answers for mindful travelers
                                        </h2>
                                        <p className="mt-3 text-base text-(--paragraph-color)]">
                                                Everything you need to know about booking curated stays, chef tables,
                                                and signature Savaal events across Zimbabwe.
                                        </p>
                                </div>
                                <div className="mt-12 rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-(--border)]">
                                        {faqs.map((faq, index) => (
                                                <Question
                                                        key={faq.question}
                                                        title={faq.question}
                                                        defaultOpen={index === 0}
                                                >
                                                        <p className="leading-relaxed text-(--paragraph-color)]">{faq.answer}</p>
                                                </Question>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}

interface QuestionProps {
        title: string;
        children: ReactNode;
        defaultOpen?: boolean;
}

const Question = ({ title, children, defaultOpen = false }: QuestionProps) => {
        const [ref, { height }] = useMeasure();
        const [open, setOpen] = useState(defaultOpen);

        return (
                <motion.div
                        animate={open ? "open" : "closed"}
                        className="border-b border-(--border)] last:border-b-0"
                >
                        <button
                                type="button"
                                onClick={() => setOpen((prev) => !prev)}
                                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                        >
                                <motion.span
                                        variants={{
                                                open: {
                                                        color: "var(--primary)",
                                                },
                                                closed: {
                                                        color: "var(--heading-color)",
                                                },
                                        }}
                                        className="text-lg font-medium"
                                >
                                        {title}
                                </motion.span>
                                <motion.span
                                        variants={{
                                                open: {
                                                        rotate: "180deg",
                                                        color: "var(--primary)",
                                                },
                                                closed: {
                                                        rotate: "0deg",
                                                        color: "var(--heading-color)",
                                                },
                                        }}
                                >
                                        <FiChevronDown className="text-2xl" />
                                </motion.span>
                        </button>
                        <motion.div
                                initial={false}
                                animate={{
                                        height: open ? height : 0,
                                        marginBottom: open ? 24 : 0,
                                }}
                                className="overflow-hidden text-(--paragraph-color)]"
                        >
                                <div ref={ref}>{children}</div>
                        </motion.div>
                </motion.div>
        );
};
