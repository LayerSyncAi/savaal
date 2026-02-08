import fs from "node:fs";
import path from "node:path";

import { AboutUsSection } from "@/components/landing-page/about-us";
import { CtaSection } from "@/components/landing-page/cta-section";
import { DistinctionsSection } from "@/components/landing-page/distinctions-section";
import { EcosystemSection } from "@/components/landing-page/ecosystem-section";
import { FaqsSection } from "@/components/landing-page/faqs-section";
import { ForBusinessSections } from "@/components/landing-page/for-business-sections";
import { FounderQuote } from "@/components/landing-page/founder-quote";
import { HeroSection } from "@/components/landing-page/hero-section";
import { SearchHeroSection } from "@/components/landing-page/search-hero-section";
import { WelcomePopup } from "@/components/welcome-popup";
import type { FAQ, Pillar } from "@/types/content";

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
                        <WelcomePopup />
                        <main className="flex-1">
                                <SearchHeroSection />
                                <HeroSection />
							{/* <AboutUsSection />
							<FounderQuote /> */}
							<EcosystemSection pillars={pillars} />
							<DistinctionsSection />
							{/* <ForBusinessSections /> */}
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
