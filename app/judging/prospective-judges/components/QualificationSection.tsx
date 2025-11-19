import { QualificationShowcase } from "./QualificationShowcase";

export function QualificationSection() {
  return (
    <div className="grid gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-neutral-900">How qualification works</h2>
          <p className="text-neutral-700">
            A transparent, guided experience that mirrors the same discipline we expect from you in the field.
          </p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
          Built for light + dark backgrounds
        </span>
      </div>
      <QualificationShowcase />
    </div>
  );
}
