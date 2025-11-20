import { ConsultingCta } from "./components/ConsultingCta";
import { ConsultingHeader } from "./components/ConsultingHeader";
import { PackagesSection } from "./components/PackagesSection";
import { SummaryTable } from "./components/SummaryTable";

export default function ConsultingPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="mx-auto max-w-5xl space-y-12 px-6 py-16">
        <ConsultingHeader />
        <PackagesSection />
        <SummaryTable />
        <ConsultingCta />
      </section>
    </div>
  );
}
