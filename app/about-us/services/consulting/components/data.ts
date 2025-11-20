export type ConsultingPackage = {
  title: string;
  emoji: string;
  duration: string;
  price: string;
  bestFor: string;
  features: string[];
};

export const packages: ConsultingPackage[] = [
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
    bestFor: "Mid-tier restaurants, cafes, or pubs needing consistent help without long commitment.",
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
    bestFor: "Brands ready to become industry leaders or who need full transformation.",
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

export const summaryRows = [
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

export const slidePricingTiers = {
  monthly: [
    {
      name: "Quick Fix",
      duration: "1 month | Launch-ready",
      price: "$750",
      cta: "Book quick fix",
      highlight: "Fast turnaround for urgent challenges",
      features: [
        "2 on-site training sessions (FOH & BOH)",
        "Immediate menu critique & efficiency tweaks",
        "Follow-up report with prioritized actions",
      ],
    },
    {
      name: "Growth Partner",
      duration: "3 months | Most chosen",
      price: "$1,650",
      cta: "Start growth track",
      highlight: "Hands-on menu, service, and operations support",
      features: [
        "Weekly strategy meetings & simulations",
        "Menu engineering with costing and supplier links",
        "Customer experience coaching for the whole team",
      ],
    },
    {
      name: "Transformation Plan",
      duration: "6 months | Full reset",
      price: "$2,700",
      cta: "Plan transformation",
      highlight: "End-to-end rebrand and leadership training",
      features: [
        "Monthly mystery diner reporting",
        "Signature menu innovation and storytelling",
        "Custom SOP handbook and leadership upskilling",
      ],
    },
  ],
  engagement: [
    {
      name: "Quick Fix",
      duration: "Intensive sprint",
      price: "$700",
      cta: "Reserve sprint",
      highlight: "Pre-booked block for immediate relief",
      features: [
        "Chef + service lead on-site for 2 days",
        "Rapid-fire SOP templates tailored to your floor",
        "Follow-up check-in two weeks later",
      ],
    },
    {
      name: "Growth Partner",
      duration: "Full program",
      price: "$1,550",
      cta: "Lock in partner",
      highlight: "Structured rhythm with measurable ROI",
      features: [
        "Full staff coaching plus leadership mentoring",
        "Marketing & Instagram playbook aligned to service",
        "Quarterly ROI progress deck for owners",
      ],
    },
    {
      name: "Transformation Plan",
      duration: "Signature rebuild",
      price: "$2,500",
      cta: "Begin rebuild",
      highlight: "Brand, menu, and ops reinvented together",
      features: [
        "Rebrand support across visuals, uniforms, and tone",
        "Sustainable supplier matchmaking",
        "Executive coaching for long-term scale",
      ],
    },
  ],
};
