export function PageLoader({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-2 border-amber-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-amber-600" />
      </div>
      <p className="text-sm font-medium text-neutral-500">{message}</p>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-amber-100 bg-white p-4">
      <div className="aspect-[4/3] w-full rounded-xl bg-neutral-200" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-neutral-200" />
        <div className="h-3 w-1/2 rounded bg-neutral-200" />
      </div>
    </div>
  );
}

export function GuidePageSkeleton() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="h-9 w-64 animate-pulse rounded bg-neutral-200" />
          <div className="h-5 w-80 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-10 w-36 animate-pulse rounded-full bg-neutral-200" />
      </div>
      <div className="h-12 w-full animate-pulse rounded-2xl bg-neutral-100" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export function AdminListSkeleton() {
  return (
    <div className="space-y-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
      <div className="flex gap-3">
        <div className="h-10 flex-1 animate-pulse rounded-xl bg-neutral-200" />
        <div className="h-10 flex-1 animate-pulse rounded-xl bg-neutral-200" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl border border-amber-100 bg-amber-50/40 p-4"
        >
          <div className="h-5 w-1/3 rounded bg-neutral-200" />
          <div className="mt-2 h-4 w-1/4 rounded bg-neutral-200" />
        </div>
      ))}
    </div>
  );
}

export function DetailPageSkeleton() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="space-y-4">
        <div className="h-8 w-2/3 animate-pulse rounded bg-neutral-200" />
        <div className="h-5 w-1/3 animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-1/4 animate-pulse rounded bg-neutral-200" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-32 animate-pulse rounded-2xl bg-neutral-200" />
        <div className="h-32 animate-pulse rounded-2xl bg-neutral-200" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse rounded-xl bg-neutral-200" />
        ))}
      </div>
    </div>
  );
}

export function ContentPageSkeleton() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24">
      <div className="space-y-3">
        <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />
        <div className="h-10 w-2/3 animate-pulse rounded bg-neutral-200" />
        <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-neutral-200" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-48 animate-pulse rounded-2xl bg-neutral-200" />
        <div className="h-48 animate-pulse rounded-2xl bg-neutral-200" />
      </div>
    </section>
  );
}
