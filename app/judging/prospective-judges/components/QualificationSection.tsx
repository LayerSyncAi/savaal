import { QualificationShowcase } from "./QualificationShowcase";

export function QualificationSection() {
  return (
    <div className="grid gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">How qualification works</h2>
          <p>
            A transparent, guided experience that mirrors the same discipline we expect from you in the field.
          </p>
        </div>
      </div>
      <QualificationShowcase />
    </div>
  );
}
