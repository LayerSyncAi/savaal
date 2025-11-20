export type PackageInfo = {
	id: string;
	title: string;
	subtitle: string;
	price: {
		monthly: string;
		annual?: string;
		suffix: string;
		className?: string;
	};
	features: string[];
	cta: {
		label: string;
		className: string;
	};
};

export const consultingPackages: PackageInfo[] = [
	{
		id: "quick-fix",
		title: "Quick Fix",
		subtitle: "Perfect for urgent turnaround",
		price: {
			monthly: "$750",
			suffix: "once off",
		},
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
		],
		cta: {
			label: "Get your quick fix",
			className:
				"w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase",
		},
	},
	{
		id: "growth-partner",
		title: "Growth Partner",
		subtitle: "Consistent help without long commitment",
		price: {
			monthly: "$550",
			annual: "$450",
			suffix: "/month",
			className: "text-indigo-500",
		},
		features: [
			"3 Months Long",
			"Includes everything in Quick Fix",
			"Deep Dive Menu Engineering (revamp, costings, supplier links)",
			"Weekly Strategy & Progress Meetings",
			"Full Staff Coaching & Customer Experience Training",
			"Service Simulation Role Plays",
			"Marketing Strategy Session (Instagram & Local PR Guidance)",
			"POS/Inventory Support (if tech is involved)",
			"Quarterly Report to Track ROI/Performance",
			"Optional Pre-Launch Pop-Up Co-Design (if relevant)",
		],
		cta: {
			label: "Become a growth partner",
			className:
				"w-full py-4 mt-8 font-semibold bg-(--sage-green) text-white rounded-lg uppercase",
		},
	},
	{
		id: "transformation-plan",
		title: "Transformation Plan",
		subtitle: "Become an industry leader",
		price: {
			monthly: "$450",
			annual: "$400",
			suffix: "/month",
		},
		features: [
			"6 Months Long",
      "Everything In Growth Plan",
			"Complete Rebrand Support (menu, visuals, language, uniforms)",
			"Local Supplier Matchmaking (for sustainable sourcing)",
			"Monthly Mystery Diner Reports",
			"Advanced Menu Innovation (signature dishes, storytelling)",
			"Upskilling & Leadership Training for Management",
			"Full SOP Handbook Customized to Business",
			"Content Creation Support (via Savaal partners or advisory)",
			"Quarterly Client Impact Report (good for investors)",
		],
		cta: {
			label: "Start your transformation",
			className:
				"w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase",
		},
	},
];
