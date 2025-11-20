const hours = [
  { day: "Monday", time: "8:00 AM – 4:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 4:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 4:00 PM" },
  { day: "Thursday", time: "8:00 AM – 4:00 PM" },
  { day: "Friday", time: "8:00 AM – 4:00 PM" },
];

export const OpeningHours = () => {
  return (
    <section className="space-y-4 rounded-3xl border border-(--border) bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Opening hours
          </p>
          <h3 className="text-2xl font-bold text-[var(--primary)]">
            Available 8:00 – 16:00 on weekdays
          </h3>
          <p className="text-sm text-[var(--muted)]">
            We&apos;re offline on weekends to recharge and curate new experiences.
          </p>
        </div>
        <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-[var(--muted-dark)]">
          Closed on weekends
        </span>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        {hours.map((entry) => (
          <div
            key={entry.day}
            className="flex items-center justify-between rounded-2xl border border-(--border-light) bg-(--secondary-light) px-4 py-3"
          >
            <span className="font-semibold text-[var(--primary-dark)]">{entry.day}</span>
            <span className="text-[var(--muted)]">{entry.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
