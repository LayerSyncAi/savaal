import Link from "next/link";

const navigation = [
  { label: "Guide", href: "#guide" },
  { label: "Judging", href: "#judging" },
  { label: "Consultancy/Training", href: "#consultancy" },
  { label: "Events", href: "#events" },
  { label: "Partnerships", href: "#partnerships" },
];

const pillars = [
  {
    title: "The Guide",
    items: ["Curated listings", "Savaal Scorecard", "Certification"],
    description:
      "Explore verified restaurants, hotels, and lifestyle spaces that meet our experiential benchmarks.",
    anchor: "guide",
  },
  {
    title: "The Consultants",
    items: ["Training", "Audits", "Hospitality consultancy"],
    description:
      "Upskill teams with bespoke coaching, operational audits, and cultural hospitality playbooks.",
    anchor: "consultancy",
  },
  {
    title: "The Curators",
    items: ["Pop-up events", "Cultural festivals", "Collaborative showcases"],
    description:
      "Design immersive events that celebrate Zimbabwean art, cuisine, music, and community.",
    anchor: "events",
  },
];

const faqs = [
  {
    question: "Who can be listed?",
    answer:
      "Any Zimbabwean restaurant, hotel, bar, vendor, or lifestyle brand that demonstrates commitment to authentic African hospitality can apply for consideration.",
  },
  {
    question: "How do I become a Judge?",
    answer:
      "Judges are hospitality, culinary, or culture experts vetted by Savaal. Share your credentials via partners@savaalguide.com to be considered for upcoming judging panels.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-[#2c1a12]">
      <header className="sticky top-0 z-20 bg-[#fdf9f3]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-[#5a3a2d]">Savaal Guide</div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#5a3a2d] transition hover:text-[#2c1a12]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#signup"
            className="rounded-full bg-[#5a3a2d] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#40261d]"
          >
            Sign Up / Log In
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section
          className="relative isolate overflow-hidden bg-[#0f0906]"
          aria-labelledby="hero-title"
        >
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#5a3a2d]/90 via-[#2c1a12]/70 to-transparent" />
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 text-white md:flex-row md:items-center">
            <div className="md:w-2/3">
              <p className="text-sm uppercase tracking-[0.3em] text-[#efe2d2]">
                Vision · Mission · Culture
              </p>
              <h1
                id="hero-title"
                className="mt-4 text-4xl font-semibold leading-tight md:text-5xl"
              >
                The Guide to Cultural Hospitality in Africa.
              </h1>
              <p className="mt-4 text-lg text-[#f8ecdf]">
                Curating and celebrating excellence in Zimbabwe&apos;s finest restaurants,
                hotels, and lifestyle. Our mission is to elevate local standards,
                celebrate culinary artistry, and connect travelers to authentic African
                experiences.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#guide"
                  className="rounded-full bg-[#efe2d2] px-6 py-3 text-sm font-semibold text-[#5a3a2d] shadow-lg transition hover:bg-white"
                >
                  Explore the Savaal Guide
                </Link>
                <div className="text-sm uppercase tracking-[0.3em] text-[#efe2d2]">
                  Zimbabwe · Africa
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 text-sm text-[#efe2d2] shadow-xl backdrop-blur md:w-1/3">
              <p className="font-semibold text-white">Vision</p>
              <p>
                To be the leading cultural hospitality guide across Africa, starting in
                Zimbabwe.
              </p>
              <div className="mt-4 h-px bg-white/20" />
              <p className="font-semibold text-white">Mission</p>
              <p>
                To elevate local hospitality standards, celebrate culinary and lifestyle
                excellence, and connect travelers to authentic African experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="guide" className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-[#efe2d2]">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#c08f6f]">
              About
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#5a3a2d]">
              What is the Savaal Guide?
            </h2>
            <ul className="mt-6 space-y-3 text-lg text-[#2c1a12]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#5a3a2d]" />
                A curated digital platform showcasing verified restaurants, hotels, bars,
                and vendors.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#5a3a2d]" />
                Savaal-certified listings based on experiential standards.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#5a3a2d]" />
                The standard for African hospitality, culture, and experience.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#efe2d2]/60 py-20" aria-label="Savaal Ecosystem">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-[#b77b5f]">
              Ecosystem
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold text-[#5a3a2d]">
              Three pillars of the Savaal experience
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  id={pillar.anchor}
                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-[#f2d7c2]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#efe2d2] p-3 text-[#5a3a2d]">●</div>
                    <h3 className="text-xl font-semibold text-[#5a3a2d]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-[#826555]">{pillar.description}</p>
                  <ul className="mt-6 space-y-2 text-sm font-medium text-[#2c1a12]">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#b77b5f]">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consultancy" className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#efe2d2]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#c08f6f]">
                  Consultancy & Training
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-[#5a3a2d]">
                  Elevate teams with Savaal Consultants
                </h2>
                <p className="mt-4 text-[#2c1a12]">
                  From mystery audits to immersive workshops, our consultants translate
                  the Savaal standards into daily service rituals, beverage programs, and
                  guest journey design.
                </p>
                <ul className="mt-6 space-y-2 text-sm font-medium text-[#5a3a2d]">
                  <li>• Hospitality capability assessments</li>
                  <li>• Staff coaching & leadership development</li>
                  <li>• Concept refinement & menu storytelling</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#efe2d2]/60 p-6">
                <p className="text-sm font-semibold text-[#5a3a2d]">
                  Book a training intensive
                </p>
                <p className="mt-2 text-sm text-[#6f4c3c]">
                  Choose on-site or virtual formats across Zimbabwe and the region.
                </p>
                <Link
                  href="/consultancy"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#5a3a2d] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#40261d]"
                >
                  View Consultancy Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#efe2d2]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#c08f6f]">
                  Events & Curations
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-[#5a3a2d]">
                  The Curators reimagine cultural hospitality
                </h2>
                <p className="mt-4 text-[#2c1a12]">
                  Pop-up dinners, mixology showcases, and cultural festivals designed to
                  highlight Zimbabwe&apos;s culinary icons and rising stars.
                </p>
              </div>
              <div className="rounded-2xl bg-[#efe2d2]/60 p-6">
                <ul className="space-y-2 text-sm font-medium text-[#5a3a2d]">
                  <li>• Seasonal pop-up restaurants</li>
                  <li>• Collaborative chef residences</li>
                  <li>• Art, fashion, and sound pairings</li>
                </ul>
                <Link
                  href="/events"
                  className="mt-6 inline-flex w-full justify-center rounded-full border border-[#5a3a2d] px-5 py-3 text-sm font-semibold text-[#5a3a2d] transition hover:bg-[#5a3a2d] hover:text-white"
                >
                  Discover Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="judging" className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#efe2d2]">
            <h2 className="text-2xl font-semibold text-[#5a3a2d]">Judging</h2>
            <p className="mt-4 text-[#2c1a12]">
              Savaal Judges are cultural tastemakers who discreetly assess venues via the
              Savaal Scorecard. Their evaluations ensure that every listing meets the
              promise of elevated service, cuisine, and cultural immersion.
            </p>
            <Link
              href="mailto:partners@savaalguide.com"
              className="mt-6 inline-flex rounded-full border border-[#5a3a2d] px-5 py-2 text-sm font-semibold text-[#5a3a2d] transition hover:bg-[#5a3a2d] hover:text-white"
            >
              Apply to Judge
            </Link>
          </div>
        </section>

        <section id="signup" className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-[#efe2d2]/60 p-8 shadow-inner ring-1 ring-[#f2d7c2]">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b77b5f]">
                  Community
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-[#5a3a2d]">
                  Join the Savaal network
                </h2>
                <p className="mt-4 text-[#2c1a12]">
                  Create an account to access the Guide, save your favourite listings, and
                  receive early invites to Savaal-curated events and hospitality insights.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm font-semibold text-[#5a3a2d]">
                  Ready to log in or request access?
                </p>
                <p className="mt-2 text-sm text-[#6f4c3c]">
                  Email us at <span className="font-semibold">partners@savaalguide.com</span> to
                  activate your profile while we complete the public portal.
                </p>
                <Link
                  href="mailto:partners@savaalguide.com?subject=Savaal%20Guide%20Access"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#5a3a2d] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#40261d]"
                >
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="partnerships"
          className="bg-[#5a3a2d] px-6 py-16 text-white"
          aria-label="Business Call to Action"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[#f5d7c0]">
              For Businesses
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Elevate Your Business. Request a Savaal Certification Audit or Partnership.
            </h2>
            <p className="mt-4 text-[#fcefe1]">
              Engage with our consultancy team for training, audits, or bespoke cultural
              collaborations that spotlight your venue on the continent&apos;s most trusted
              hospitality guide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/consultancy"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5a3a2d] shadow-lg"
              >
                Request Consultancy
              </Link>
              <Link
                href="/partnerships"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16" aria-label="FAQs">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#efe2d2]">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#c08f6f]">
              FAQs
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#5a3a2d]">
              Common Questions
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-xl font-semibold text-[#5a3a2d]">{faq.question}</dt>
                  <dd className="mt-2 text-[#2c1a12]">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c1a12] px-6 py-10 text-[#f4e4d4]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Savaal Guide</p>
            <p className="text-sm text-[#f4e4d4]">
              Guiding the future of cultural hospitality in Zimbabwe and across Africa.
            </p>
          </div>
          <div className="text-sm">
            <p>
              Email: <a href="mailto:partners@savaalguide.com" className="underline">partners@savaalguide.com</a>
            </p>
            <p>
              Instagram: <a href="https://instagram.com/savaal_guide" className="underline">@savaal_guide</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
