import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

import { AboutUsSection } from "@/components/landing-page/about-us";
import { CtaSection } from "@/components/landing-page/cta-section";
import { EcosystemSection } from "@/components/landing-page/ecosystem-section";
import { FaqsSection } from "@/components/landing-page/faqs-section";
import { ForBusinessSections } from "@/components/landing-page/for-business-sections";
import { HeroSection } from "@/components/landing-page/hero-section";
import type { FAQ, Pillar } from "@/types/content";

const navigation = [
        { label: "Guide", href: "#guide" },
        { label: "Judging", href: "#judging" },
        { label: "Consultancy/Training", href: "#consultancy" },
        { label: "Events", href: "#events" },
        { label: "Partnerships", href: "#partnerships" },
];
const getContent = <T,>(filename: string): T => {
        const filePath = path.join(process.cwd(), "content", filename);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContents) as T;
};

const pillars = getContent<Pillar[]>("pillars.txt");
const faqs = getContent<FAQ[]>("faqs.txt");

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-background text-foreground">
			<header className="sticky top-0 z-20 bg-[rgb(var(--background-rgb)/0.95)] backdrop-blur">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
					<div className="text-lg font-semibold text-(--primary)">
						Savaal Guide
					</div>
					<nav className="hidden items-center gap-6 text-sm font-medium md:flex">
						{navigation.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-(--primary) transition hover:text-foreground"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<Link
						href="#signup"
						className="rounded-full bg-(--primary) px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-(--primary-dark)]"
					>
						Sign Up / Log In
					</Link>
				</div>
			</header>

                        <main className="flex-1">
                                <HeroSection />
                                <AboutUsSection />
                                <EcosystemSection pillars={pillars} />
                                <ForBusinessSections />
                                <CtaSection />
                                <FaqsSection faqs={faqs} />
                        </main>

			<footer className="bg-(--foreground)] px-6 py-10 text-(--sand)]">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-lg font-semibold text-white">Savaal Guide</p>
						<p className="text-sm text-(--sand)]">
							Guiding the future of cultural hospitality in Zimbabwe and across
							Africa.
						</p>
					</div>
					<div className="text-sm">
						<p>
							Email:{" "}
							<a href="mailto:partners@savaalguide.com" className="underline">
								partners@savaalguide.com
							</a>
						</p>
						<p>
							Instagram:{" "}
							<a
								href="https://instagram.com/savaal_guide"
								className="underline"
							>
								@savaal_guide
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
