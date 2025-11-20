import { ConsultingHero } from "./components/ConsultingHero";
import { PartnerCta } from "./components/PartnerCta";
import { SlidePricing } from "./components/SlidePricing";
import { SummaryTable } from "./components/SummaryTable";
import { summaryRows } from "./components/data";

export default function ConsultingPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="mx-auto max-w-5xl space-y-12 px-6 py-16">
        <ConsultingHero />
        <SlidePricing />
        <SummaryTable rows={summaryRows} />
        <PartnerCta />
      </section>
    </div>
  );
}
