import { AdminListSkeleton } from "@/components/page-loader";

export default function Loading() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
      <div className="space-y-2">
        <div className="h-8 w-48 animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-72 animate-pulse rounded bg-neutral-200" />
      </div>
      <AdminListSkeleton />
    </section>
  );
}
