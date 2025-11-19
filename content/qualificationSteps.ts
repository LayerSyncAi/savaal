import type { IconType } from "react-icons";
import { FiCheckCircle, FiClipboard, FiMapPin, FiShield, FiUsers } from "react-icons/fi";

export type QualificationStep = {
  id: number;
  callout: string;
  title: string;
  description: string;
  highlight: string;
  Icon: IconType;
};

export const qualificationSteps: QualificationStep[] = [
  {
    id: 1,
    callout: "Step 1 · 5 minutes",
    title: "Tell us how you judge",
    description:
      "Share your hospitality experience, cuisines you know well, and the neighborhoods you can cover.",
    highlight: "Paint a clear picture of where you shine so we can match you with the right assignments.",
    Icon: FiClipboard,
  },
  {
    id: 2,
    callout: "Step 2 · Online check",
    title: "Complete the integrity screen",
    description:
      "Answer scenario-based prompts focused on discretion, conflict-of-interest, and fair scoring.",
    highlight: "Show us how you navigate tricky calls to keep judging impartial and consistent.",
    Icon: FiShield,
  },
  {
    id: 3,
    callout: "Step 3 · Shadow visit",
    title: "Practice with a sample scorecard",
    description:
      "Review a past restaurant visit, apply our 100-point rubric, and compare your notes with a senior judge.",
    highlight: "Use real examples to align with Savaal standards before you score live venues.",
    Icon: FiUsers,
  },
  {
    id: 4,
    callout: "Step 4 · Matchmaking",
    title: "Get assigned to locations",
    description:
      "Once approved, you are scheduled for anonymous visits in the areas you selected so you can start scoring immediately.",
    highlight: "We pair you with venues that fit your expertise and travel radius to keep judging efficient.",
    Icon: FiMapPin,
  },
  {
    id: 5,
    callout: "Always on",
    title: "Support & accountability",
    description:
      "Every judge has a direct contact for questions, plus regular calibration sessions to keep standards consistent.",
    highlight: "Stay connected to the judging team with check-ins, refreshers, and quick answers when you need them.",
    Icon: FiCheckCircle,
  },
];
