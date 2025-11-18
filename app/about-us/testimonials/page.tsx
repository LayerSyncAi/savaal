import Link from "next/link";

const testimonials = [
  {
    quote:
      "Savaal helped our boutique riad overhaul operations in weeks. The templates and playbooks meant we stopped reinventing the wheel every season.",
    name: "Karima Tazi",
    role: "Founder, Maison Safra",
    location: "Marrakesh, Morocco",
  },
  {
    quote:
      "We finally have a single source of truth for policies and staff onboarding. That clarity keeps our guest experience consistent across properties.",
    name: "Luis Aparicio",
    role: "Director of Experience, Casa del Mar",
    location: "San Juan, Puerto Rico",
  },
  {
    quote:
      "Savaal's cultural lens is invaluable. Their guidance respects local traditions while still giving us modern systems to scale responsibly.",
    name: "Amina Rahman",
    role: "General Manager, The Crescent Collective",
    location: "Doha, Qatar",
  },
  {
    quote:
      "Our investor updates went from guesswork to confident storytelling. The benchmarking data made it easy to show traction to stakeholders.",
    name: "Theo Mensah",
    role: "Managing Partner, Akwaaba Retreats",
    location: "Accra, Ghana",
  },
  {
    quote:
      "Savaal kept our remote team aligned during a complicated renovation. The cadence rituals and documentation saved us from endless meetings.",
    name: "Naya Ellis",
    role: "Operations Lead, Coast & Current",
    location: "Oakland, California",
  },
  {
    quote:
      "We now launch pop-up experiences twice as fast. The resource library gives our producers the confidence to experiment without chaos.",
    name: "Gustavo Pinto",
    role: "Experience Designer, Festival Atlas",
    location: "Lisbon, Portugal",
  },
];

export default function AboutUsTestimonialsPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          About us · Testimonials
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-neutral-900">
            Stories from our community
          </h1>
          <p className="text-lg text-neutral-700">
            Cultural hospitality leaders across the globe use Savaal to design,
            operate, and scale meaningful guest experiences. Here are a few of
            their reflections on the partnership.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm"
          >
            <blockquote className="text-lg text-neutral-800">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="flex flex-col text-sm font-medium text-neutral-600">
              <span className="text-base font-semibold text-neutral-900">
                {testimonial.name}
              </span>
              <span>{testimonial.role}</span>
              <span>{testimonial.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link
        href="/about-us"
        className="inline-flex w-fit items-center text-indigo-600 underline-offset-4 hover:underline"
      >
        Back to About us
      </Link>
    </section>
  );
}
