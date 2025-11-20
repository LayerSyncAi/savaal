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
    id: "free",
    title: "Free",
    subtitle: "Everything to start",
    price: {
      monthly: "$0",
      suffix: "/month",
    },
    features: [
      "10,000 requests/month",
      "Basic in app support",
      "2 users on your account",
      "1 workspace",
    ],
    cta: {
      label: "Sign up free",
      className: "w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase",
    },
  },
  {
    id: "professional",
    title: "Professional",
    subtitle: "Everything to launch",
    price: {
      monthly: "$49",
      annual: "$39",
      suffix: "/month",
      className: "text-indigo-500",
    },
    features: [
      "100,000 requests/month",
      "Email in app support",
      "10 users on your account",
      "10 work spaces",
    ],
    cta: {
      label: "Sign up professional",
      className:
        "w-full py-4 mt-8 font-semibold bg-indigo-500 text-white rounded-lg uppercase",
    },
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Everything to go public",
    price: {
      monthly: "$499",
      annual: "$399",
      suffix: "/month",
    },
    features: [
      "10,000,000 requests/month",
      "Phone support",
      "∞ users on your account",
      "∞ work spaces",
    ],
    cta: {
      label: "Sign up enterprise",
      className: "w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase",
    },
  },
];
