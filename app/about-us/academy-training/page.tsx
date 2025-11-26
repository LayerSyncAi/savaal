import { FiArrowRight } from "react-icons/fi";
import RoundedSlideButtonLight from "@/components/rounded-slide-button-light";

const trainingTracks = [
	{
		title: "Judge Accreditation",
		description:
			"Intensive standards training that equips cultural tastemakers to evaluate hospitality experiences fairly and transparently.",
		outcomes: [
			"Scorecard mastery with senior curator mentorship",
			"Ethics, conflict of interest, and reporting rigor",
			"Community listening sessions with venue teams",
		],
	},
	{
		title: "Taste Hunter Camps",
		description:
			"Field labs that place scouts in rural food hubs to spotlight farmers, market vendors, and homegrown culinary traditions.",
		outcomes: [
			"Storytelling that links producers to restaurants",
			"Food safety, nutrition, and provenance checks",
			"Career pathways for youth exploring hospitality",
		],
	},
	{
		title: "Junior Chef Studios",
		description:
			"Hands-on kitchen training focused on poultry, grains, and indigenous ingredients so young cooks can feed their communities well.",
		outcomes: [
			"Knife skills and safe kitchen operations",
			"Menu costing that respects local supply chains",
			"Signature dish labs with mentorship from Savaal chefs",
		],
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
					Training pathways that improve everyday lives
				</h1>
				<p className="max-w-3xl text-lg text-neutral-700">
					The Savaal Academy is built to unlock government and partner funding
					for programs that directly benefit workers, families, and the venues
					they support. From judge accreditation to youth chef studios, every
					cohort is tied to real jobs and safer, more joyful culinary spaces.
				</p>
			</header>

			<div className="grid gap-6 rounded-3xl bg-[rgb(var(--secondary-rgb)/0.6)] p-6 shadow-lg md:grid-cols-[1.1fr,0.9fr]">
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
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{trainingTracks.map((track) => (
					<div
						key={track.title}
						className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
					>
						<h3 className="text-xl font-semibold text-neutral-900">
							{track.title}
						</h3>
						<p className="mt-3 text-sm text-neutral-700">{track.description}</p>
						<ul className="mt-4 space-y-2 text-sm font-medium text-neutral-800">
							{track.outcomes.map((outcome) => (
								<li key={outcome}>• {outcome}</li>
							))}
						</ul>
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
								hoverFillColor="var(--tertiary)"
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
