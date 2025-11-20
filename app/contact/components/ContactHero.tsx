const heroHighlights = [
  "Personal introductions to our tasting community.",
  "Specialized consulting for hospitality leaders.",
  "Opportunities to co-create standout guest experiences.",
];

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c130d] via-[#2d1b12] to-[#5a3a2d] px-8 py-14 text-white shadow-2xl">
      <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#c08f6f]/30 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] p-white">
            Contact
          </p>
          <h1 className="text-4xl font-bold leading-tight p-on-dark sm:text-5xl">
            Let&apos;s craft experiences worth remembering
          </h1>
          <p className="max-w-2xl text-lg p-on-dark">
            Tell us how we can help you elevate taste, hospitality, and community
            moments. Whether it&apos;s a personal passion or a business idea, we&apos;ll
            pair you with the right people to make it happen.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {heroHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-[#fcefe1] backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c44614]/20 text-2xl text-[#fcefe1]">
              ✨
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide p-white">
                Concierge Support
              </p>
              <p className="text-xl font-semibold p-on-dark">Tailored introductions</p>
            </div>
          </div>
          <p className="mt-4 text-sm p-on-dark">
            Share your goals and we&apos;ll route your note straight to the right
            team—consultants, judges, or Taste Hunter mentors.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm p-on-dark">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold p-white">Response window</p>
              <p className="p-on-dark">Within 24 hours on weekdays</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold p-white">Service zones</p>
              <p className="p-on-dark">Gulf region, Europe, remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
