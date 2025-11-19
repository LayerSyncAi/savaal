import { businessAuditSteps, businessCriteria, businessStarLevels } from "@/content/judgingBusinesses";
import { AuditProcess } from "./components/AuditProcess";
import { BusinessHero } from "./components/BusinessHero";
import { ScoringCriteria } from "./components/ScoringCriteria";
import { StarBreakdown } from "./components/StarBreakdown";

export default function JudgingBusinessesPage() {
  return (
    <div className="bg-neutral-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
        <BusinessHero />
        <ScoringCriteria criteria={businessCriteria} />
        <StarBreakdown starLevels={businessStarLevels} />
        <AuditProcess steps={businessAuditSteps} />
      </section>
    </div>
  );
}
