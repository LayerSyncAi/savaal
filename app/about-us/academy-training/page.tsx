import { FiArrowRight } from "react-icons/fi";
import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";

const trainingTracks = [
	{
		title: "Judge Accreditation",
		description:
			"Earn trusted certification to evaluate hospitality experiences with fairness and transparency. Build confidence through guided scoring and reporting practice.",
		cta: "Inquire About Enrollment",
		href: "/contact",
	},
	{
		title: "Taste Hunter Camps",
		description:
			"Join immersive field labs that uncover regional food stories and emerging talent. Learn ethical sourcing, documentation, and community engagement.",
		cta: "Inquire About Enrollment",
		href: "/contact",
	},
	{
		title: "Chef Upskilling Studio",
		description:
			"Sharpen modern culinary techniques while honoring indigenous ingredients and local supply chains. Advance your craft with mentorship and practical labs.",
		cta: "Inquire About Enrollment",
		href: "/contact",
	},
	{
		title: "Food & Beverage Service Excellence",
		description:
			"Elevate front-of-house standards with service rituals, guest care, and operational polish. Train teams to deliver consistent, memorable hospitality.",
		cta: "Inquire About Enrollment",
		href: "/contact",
	},
];

export default function AcademyTrainingPage() {
	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
			<header className="space-y-4">
				<p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
					About us · Academy + Training
				</p>
				<h1 className="text-4xl font-bold text-neutral-900">
					Cultivating the Future of <span className="text-(--tertiary)">African Excellence</span>
				</h1>
				<p className="max-w-3xl text-lg text-neutral-700">
					The Savaal Academy underpins the integrity of the Guide by training assessors, chefs, and service professionals.
				</p>
			</header>

			{/* <div className="grid gap-6 rounded-3xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6 shadow-lg md:grid-cols-[1.1fr,0.9fr]">
				<div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
					<h2 className="text-2xl font-semibold text-neutral-900">
						Our promise to funders
					</h2>
					<p className="text-neutral-700">
						Every dollar fuels practical training that protects guests and
						uplifts local producers. We report on community placements, job
						creation, and the number of venues that graduate into the Guide
						after mentorship.
					</p>
					<ul className="space-y-2 text-sm font-medium text-neutral-800">
						<li>
							• Transparent metrics on participant outcomes and placements
						</li>
						<li>
							• Co-designed curricula with public sector and civic partners
						</li>
						<li>• Safeguarding standards woven into every workshop</li>
					</ul>
					<div className="flex justify-start">
						{" "}
						<RoundedSlideButtonLight
							href="/events#training"
							title="View upcoming training cohorts"
							hoverFillColor="var(--tertiary)"
							defaultColor="var(--sand)"
							hoverScale={1.05}
							icon={<FiArrowRight />}
							className="uppercase"
						/>
					</div>
				</div>
				<div className="space-y-4 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-6">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
						Who we train
					</p>
					<p className="text-lg text-neutral-800">
						Judges, taste hunters, and aspiring chefs work side by side to raise
						service standards while strengthening food security for the people
						they serve.
					</p>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="rounded-xl bg-white p-4 shadow-sm">
							<p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
								Civic impact
							</p>
							<p className="mt-2 text-sm text-neutral-700">
								Placements in public cafeterias, school kitchens, and regional
								tourism hubs ensure training benefits everyday diners.
							</p>
						</div>
						<div className="rounded-xl bg-white p-4 shadow-sm">
							<p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
								Economic mobility
							</p>
							<p className="mt-2 text-sm text-neutral-700">
								Stipends, apprenticeships, and entrepreneurship clinics reduce
								barriers for young people entering hospitality careers.
							</p>
						</div>
					</div>
				</div>
			</div> */}

			<h2 className="text-2xl font-semibold text-neutral-900">
				Training tracks
			</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{trainingTracks.map((track) => (
					<div
						key={track.title}
						className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
					>
						<h3 className="text-xl font-semibold text-neutral-900">
							{track.title}
						</h3>
						<p className="mt-3 text-sm text-neutral-700">
							{track.description}
						</p>
						<div className="mt-5">
							<RoundedSlideButtonLight
								href={track.href}
								title={track.cta}
								hoverFillColor="var(--tertiary)"
								defaultColor="var(--sand)"
								hoverScale={1.05}
								icon={<FiArrowRight />}
								className="uppercase"
							/>
						</div>
					</div>
				))}
			</div>

			<div className="rounded-2xl bg-neutral-900 px-6 py-8 text-white">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div className="space-y-2">
						<p className="text-sm uppercase tracking-[0.2em] p-white">
							Ready to collaborate
						</p>
						<h2 className="text-2xl font-semibold p-on-dark">
							Help us expand access to safe, culturally rooted training
						</h2>
						<p className="text-sm p-on-dark">
							Partner funding allows us to run more cohorts, subsidize community
							kitchens, and bring world-class mentors to underserved regions.
						</p>
					</div>
					<div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-900">
						{/* <div className="flex justify-start"> */}
							
							<RoundedSlideButtonLight
								href="/contact"
								title="Start a partnership conversation"
								hoverFillColor="var(--tertiary)"
								defaultColor="var(--sand)"
								hoverScale={1.05}
								icon={<FiArrowRight />}
								className="uppercase"
							/>
                                                        <RoundedSlideButtonLight
								href="/events"
								title="See live training dates"
								hoverFillColor="var(--sage-green)"
								defaultColor="var(--sand)"
								hoverScale={1.05}
								icon={<FiArrowRight />}
								className="uppercase"
							/>
						{/* <Link
                                                        href="/"
                                                        className="rounded-full bg-amber-400 px-5 py-3 text-neutral-900 transition hover:bg-amber-300"
                                                >
                                                        
                                                </Link>
                                                <Link
                                                        href="/events"
                                                        className="rounded-full border border-white/60 px-5 py-3 text-white transition hover:border-white hover:bg-white/10"
                                                >
                                                        See live training dates
                                                </Link> */}
					</div>
				</div>
			</div>
		</section>
	);
}
