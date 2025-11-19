const packages = [
  {
    title: "Quick Fix",
    emoji: "1️⃣",
    duration: "1 Month",
    price: "$750",
    bestFor: "Restaurants that need an urgent turnaround or want to test our value fast.",
    features: [
      "Full Business Audit (1–2 Days On-Site)",
      "SWOT Analysis & Operational Scorecard",
      "Menu Critique & Immediate Suggestions",
      "2 In-Person Training Sessions (FOH & BOH)",
      "New SOP Templates (Cleaning, Service, Prep)",
      "Kitchen Efficiency & Service Flow Optimization",
      "1 Branding/Experience Strategy Session",
      "Basic Cost Control & Portioning Adjustments",
      "1-Month Follow-Up Report",
      "Savaal “Recommended” Sticker (optional)",
    ],
  },
  {
    title: "Growth Partner",
    emoji: "2️⃣",
    duration: "3 Months",
    price: "$1,650",
    bestFor:
      "Mid-tier restaurants, cafes, or pubs needing consistent help without long commitment.",
    features: [
      "Everything in Quick Fix",
      "Deep Dive Menu Engineering (revamp, costings, supplier links)",
      "Weekly Strategy & Progress Meetings",
      "Full Staff Coaching & Customer Experience Training",
      "Service Simulation Role Plays",
      "Marketing Strategy Session (Instagram & Local PR Guidance)",
      "POS/Inventory Support (if tech is involved)",
      "Quarterly Report to Track ROI/Performance",
      "Optional Pre-Launch Pop-Up Co-Design (if relevant)",
    ],
  },
  {
    title: "Transformation Plan",
    emoji: "3️⃣",
    duration: "6 Months",
    price: "$2,700",
    bestFor:
      "Brands ready to become industry leaders or who need full transformation.",
    features: [
      "Everything in Growth Partner",
      "Complete Rebrand Support (menu, visuals, language, uniforms)",
      "Local Supplier Matchmaking (for sustainable sourcing)",
      "Monthly Mystery Diner Reports",
      "Advanced Menu Innovation (signature dishes, storytelling)",
      "Upskilling & Leadership Training for Management",
      "Full SOP Handbook Customized to Business",
      "Content Creation Support (via Savaal partners or advisory)",
      "Quarterly Client Impact Report (good for investors)",
    ],
  },
];

const summaryRows = [
  {
    package: "Quick Fix",
    duration: "1 Month",
    price: "$750",
    bestFor: "Urgent help or small test",
    keyWins: "Fast, tactical wins",
  },
  {
    package: "Growth Partner",
    duration: "3 Months",
    price: "$1,650",
    bestFor: "Mid-tier restaurants",
    keyWins: "Menu + service systems",
  },
  {
    package: "Transformation Plan",
    duration: "6 Months",
    price: "$2,700",
    bestFor: "High-potential venues",
    keyWins: "Long-term growth, brand value",
  },
];

export default function ConsultingPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="mx-auto max-w-5xl space-y-12 px-6 py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            About us · Services
          </p>
          <h1 className="text-4xl font-bold">Savaal Hospitality Consulting Packages</h1>
          <p className="text-lg text-neutral-700">
            Choose from our expert consulting packages designed to transform your food business, whether you need a quick fix,
            growth support, or full transformation. Savaal is here to build Zimbabwe’s hospitality excellence from the ground up.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((offer) => (
            <article
              key={offer.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-indigo-600">{offer.emoji} {offer.duration}</p>
                  <h2 className="text-2xl font-semibold text-neutral-900">{offer.title}</h2>
                  <p className="text-sm text-neutral-600">{offer.bestFor}</p>
                </div>
                <p className="text-lg font-semibold text-neutral-900">{offer.price}</p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
                {offer.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="bg-neutral-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            🏷️ Summary Table
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 text-sm">
              <thead className="bg-neutral-100 text-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Package</th>
                  <th className="px-4 py-3 text-left font-semibold">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold">Price</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Wins</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {summaryRows.map((row) => (
                  <tr key={row.package} className="bg-white">
                    <td className="px-4 py-3 font-semibold text-neutral-900">{row.package}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.duration}</td>
                    <td className="px-4 py-3 text-neutral-900">{row.price}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.bestFor}</td>
                    <td className="px-4 py-3 text-neutral-700">{row.keyWins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Partner with Savaal</p>
            <p className="text-lg text-neutral-800">
              Ready to plan your package? Let’s map out the milestones and team support you need.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Talk to us
          </a>
        </div>
      </section>
    </div>
  );
}
