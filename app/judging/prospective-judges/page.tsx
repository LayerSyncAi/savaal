import { BackLinkSection } from "./components/BackLinkSection";
import { CriteriaSection } from "./components/CriteriaSection";
import { CycleSection } from "./components/CycleSection";
import { GreatJudgeSection } from "./components/GreatJudgeSection";
import { HeroSection } from "./components/HeroSection";
import { QualificationSection } from "./components/QualificationSection";

export default function JudgingProspectiveJudgesPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <HeroSection />

      <GreatJudgeSection />

      <QualificationSection />

      <CriteriaSection />

      <CycleSection />

      <BackLinkSection />
    </section>
  );
}
