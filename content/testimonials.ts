export type Testimonial = {
  id: number;
  img: string;
  name: string;
  title: string;
  info: string;
};

export type TestimonialRows = {
  top: Testimonial[];
  middle: Testimonial[];
  bottom: Testimonial[];
};

export const scrollingTestimonials: TestimonialRows = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      name: "Karima Tazi",
      title: "Founder, Maison Safra · Marrakesh, Morocco",
      info:
        "Savaal helped our boutique riad overhaul operations in weeks. The templates and playbooks meant we stopped reinventing the wheel every season.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
      name: "Luis Aparicio",
      title: "Director of Experience, Casa del Mar · San Juan, Puerto Rico",
      info:
        "We finally have a single source of truth for policies and staff onboarding. That clarity keeps our guest experience consistent across properties.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=900&q=80",
      name: "Amina Rahman",
      title: "General Manager, The Crescent Collective · Doha, Qatar",
      info:
        "Savaal's cultural lens is invaluable. Their guidance respects local traditions while still giving us modern systems to scale responsibly.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      name: "Theo Mensah",
      title: "Managing Partner, Akwaaba Retreats · Accra, Ghana",
      info:
        "Our investor updates went from guesswork to confident storytelling. The benchmarking data made it easy to show traction to stakeholders.",
    },
  ],
  middle: [
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
      name: "Naya Ellis",
      title: "Operations Lead, Coast & Current · Oakland, USA",
      info:
        "Savaal kept our remote team aligned during a complicated renovation. The cadence rituals and documentation saved us from endless meetings.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80",
      name: "Gustavo Pinto",
      title: "Experience Designer, Festival Atlas · Lisbon, Portugal",
      info:
        "We now launch pop-up experiences twice as fast. The resource library gives our producers the confidence to experiment without chaos.",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1544723795-432537f480ea?auto=format&fit=crop&w=900&q=80",
      name: "Imani Rugare",
      title: "Program Director, Ubuntu House · Harare, Zimbabwe",
      info:
        "Their operations sprint turned our historic property into a modern hospitality lab. The team finally sees how daily rituals ladder up to strategy.",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      name: "Carlos Mendes",
      title: "Culinary Director, Bairro 28 · Porto, Portugal",
      info:
        "Menu tastings now sit inside a broader storytelling arc. Savaal helped us translate sourcing philosophies into guest-facing experiences.",
    },
  ],
  bottom: [
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=900&q=80",
      name: "Selam Bekele",
      title: "Experience Director, Lalibela Hideaway · Addis Ababa, Ethiopia",
      info:
        "The partnership gave our frontline team language for service moments rooted in Ethiopian hospitality instead of generic luxury standards.",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1544723795-432537f480ea?auto=format&fit=crop&w=900&q=80",
      name: "Farah Kamal",
      title: "Co-founder, Dune & Dhow · Muscat, Oman",
      info:
        "Savaal built a launch plan for our desert retreat that aligned marketing, culinary, and guest operations into a single narrative.",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1545996123-8509ee3daffd?auto=format&fit=crop&w=900&q=80",
      name: "Mateus Silva",
      title: "Resident Curator, Selva Collective · São Paulo, Brazil",
      info:
        "Their storytelling workshops unlocked collaborations between our chefs, DJs, and resident artists—now every stay feels like a festival.",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      name: "Mira Dube",
      title: "Head of Hospitality, Matobo Reserves · Bulawayo, Zimbabwe",
      info:
        "Savaal's benchmarks keep our conservation lodges accountable to both guests and the communities who steward the land with us.",
    },
  ],
};
