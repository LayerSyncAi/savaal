export type EventDetails = {
  id: string;
  presentedBy: string;
  title: string;
  host: string;
  theme: string;
  image: string;
  description: string[];
  date: string;
  time: string;
  price: string;
  seating: string;
  location: {
    venue: string;
    address: string;
  };
  notes: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const events: EventDetails[] = [
  {
    id: "the-table-that-got-erased",
    presentedBy: "Savaal presents",
    title: "The Table That Got Erased",
    host: "Chef Al",
    theme: "A poetic reclamation of memory, taste, and identity.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "This dinner experience tells the story of what was once silenced—now brought to the table. Rooted in heritage and designed for remembrance.",
      "Five courses of fire, soul, and celebration—each paired with wine, wisdom, and spirit. You are invited to sit at the table they tried to erase. We gather not just to dine, but to restore.",
    ],
    date: "Friday, 28 November 2025",
    time: "5:00 PM",
    price: "$50 five-course dinner with wine pairings",
    seating: "Limited to 20 seats",
    location: {
      venue: "The Forest Cabin",
      address: "Art Farm, College Ct, Harare",
    },
    notes: [
      "Payment is required to secure your seat.",
      "Seats are reserved on a first pay and confirmation basis.",
      "We will share event details with confirmed guests. Thank you for understanding.",
    ],
    cta: {
      label: "Reserve your seat",
      href: "/contact",
    },
  },
];
