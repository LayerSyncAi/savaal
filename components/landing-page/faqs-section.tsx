import type { FAQ } from "@/types/content";

interface FaqsSectionProps {
        faqs: FAQ[];
}

export function FaqsSection({ faqs }: FaqsSectionProps) {
        return (
                <section className="mx-auto max-w-5xl px-6 py-16" aria-label="FAQs">
                        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-(--border)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(--accent)]">FAQs</p>
                                <h2 className="mt-2 text-3xl font-semibold text-(--heading-color)]">Common Questions</h2>
                                <dl className="mt-8 space-y-6">
                                        {faqs.map((faq) => (
                                                <div key={faq.question}>
                                                        <dt className="text-xl font-semibold text-(--heading-color)]">{faq.question}</dt>
                                                        <dd className="mt-2 text-(--paragraph-color)]">{faq.answer}</dd>
                                                </div>
                                        ))}
                                </dl>
                        </div>
                </section>
        );
}
