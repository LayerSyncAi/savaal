"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface StatConfig {
        value: number;
        suffix: string;
        label: string;
        decimals?: number;
}

const stats: StatConfig[] = [
        {
                value: 200,
                suffix: "+",
                label: "curated stays",
        },
        {
                value: 140,
                suffix: "",
                label: "chef tables",
        },
        {
                value: 23,
                suffix: "+",
                label: "hosted events",
        },
];

export function StatsCounter() {
        return (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {stats.map((stat) => (
                                <StatCard
                                        key={stat.label}
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        label={stat.label}
                                        decimals={stat.decimals}
                                />
                        ))}
                </div>
        );
}

type StatCardProps = StatConfig;

const StatCard = ({ value, suffix, label, decimals = 0 }: StatCardProps) => {
        const ref = useRef<HTMLSpanElement | null>(null);
        const isInView = useInView(ref);

        useEffect(() => {
                if (!isInView) return;

                const controls = animate(0, value, {
                        duration: 2.2,
                        onUpdate(currentValue) {
                                if (!ref.current) return;

                                ref.current.textContent = currentValue.toFixed(decimals);
                        },
                });

                return () => {
                        controls.stop();
                };
        }, [value, decimals, isInView]);

        return (
                <div className="rounded-2xl border border-white/25 bg-white/5 px-6 py-5 text-center text-white backdrop-blur">
                        <p className="text-4xl font-bold tracking-tight md:text-5xl">
                                <span ref={ref} />
                                {suffix}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/70">{label}</p>
                </div>
        );
};
