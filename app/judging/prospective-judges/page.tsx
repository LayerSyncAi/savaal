import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";
import { BackLinkSection } from "./components/BackLinkSection";
import { CriteriaSection } from "./components/CriteriaSection";
import { CycleSection } from "./components/CycleSection";
import { GreatJudgeSection } from "./components/GreatJudgeSection";
import { HeroSection } from "./components/HeroSection";
import { QualificationSection } from "./components/QualificationSection";
import { FiArrowUpRight } from "react-icons/fi";

export default function JudgingProspectiveJudgesPage() {
	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
			<HeroSection />

			<GreatJudgeSection />

			<QualificationSection />

			<RoundedSlideButtonLight
				href="/judging"
				title="Back to judging"
				hoverFillColor="var(--tertiary)"
				icon={<FiArrowUpRight />}
				defaultColor="var(--foreground)"
				className="mx-auto px-3 text-sm"
			/>
		</section>
	);
}
