import Link from "next/link";

const contactPoints = [
  {
    label: "Email",
    value: "partners@savaalguide.com",
    href: "mailto:partners@savaalguide.com",
    accent: "bg-[#fcefe1] text-[#2c1a12]",
  },
  {
    label: "Instagram",
    value: "@savaal_guide",
    href: "https://www.instagram.com/savaal_guide",
    accent: "bg-[#efe2d2] text-[#5a3a2d]",
  },
];

export const ContactDetails = () => {
  return (
    <section className="grid gap-6 rounded-3xl border border-(--border) bg-white/80 p-8 shadow-lg backdrop-blur lg:grid-cols-3">
      <div className="space-y-3 lg:col-span-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Reach us directly
        </p>
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Partners, collaborators, and tastemakers welcome.
        </h2>
        <p className="text-[var(--muted)]">
          Drop us a note for partnerships, media, or community opportunities.
          We respond within business hours.
        </p>
      </div>

      <div className="lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactPoints.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              className="group flex items-center justify-between rounded-2xl border border-(--border) bg-(--secondary-light) p-5 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-dark)]">
                  {contact.label}
                </p>
                <p className="text-lg font-bold text-[var(--primary-dark)]">{contact.value}</p>
                <p className="text-xs text-[var(--muted)]">Tap to open</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold shadow ${contact.accent}`}
              >
                {contact.label === "Email" ? "Message" : "Social"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
