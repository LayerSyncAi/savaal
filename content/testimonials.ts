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
      name: "Ruvarashe Nyoni",
      title: "Culinary Director, Ngoma House Dining Club · Harare, Zimbabwe",
      info:
        "Savaal mapped every touchpoint of our chef's table, from sourcing to storytelling. Guests now talk about the experience long after the last course.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
      name: "Tendai Chikafu",
      title: "Head of Cabin Experience, Mosi Luxe Airways · Harare, Zimbabwe",
      info:
        "Their cabin service rituals keep our airline dining consistent even on double-rotation weeks. Crews finally have clear playbooks for every route.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=900&q=80",
      name: "Naledi Chawira",
      title: "Experiential Lead, Victoria Falls Gourmet Trails · Victoria Falls, Zimbabwe",
      info:
        "The platform connected chefs, guides, and storytellers under one shared calendar. Our progressive dinners now feel choreographed, not improvised.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      name: "Kudzanai Mhlanga",
      title: "Creative Producer, Zambezi Night Markets · Victoria Falls, Zimbabwe",
      info:
        "Vendor onboarding, sponsor decks, and artist hospitality all live in one workspace. It freed our team to focus on guest immersion and not logistics.",
    },
  ],
  middle: [
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
      name: "Nyasha Manyika",
      title: "Operations Lead, Highlands Tasting Room · Harare, Zimbabwe",
      info:
        "Renovations usually derail our service culture. With Savaal, every SOP lived alongside the build schedule, so training never stopped.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80",
      name: "Farai Ncube",
      title: "Experience Designer, Kariba Sunset Events · Kariba, Zimbabwe",
      info:
        "We now stage lakeside receptions in half the time. Templates cover everything from marine logistics to VIP tasting notes.",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1544723795-432537f480ea?auto=format&fit=crop&w=900&q=80",
      name: "Imani Rugare",
      title: "Hospitality Director, Ubuntu House Residences · Harare, Zimbabwe",
      info:
        "Their sprint made our serviced apartments feel as curated as a five-star lodge. Daily rituals now ladder directly into brand promises.",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      name: "Tariro Mutsvairo",
      title: "Culinary Director, Matombo Sky Lounge · Harare, Zimbabwe",
      info:
        "Pairing notes, supplier stories, and DJ briefs are synced in Savaal. Our rooftop supper clubs finally feel seamless.",
    },
  ],
  bottom: [
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=900&q=80",
      name: "Rutendo Hove",
      title: "Experience Director, Hwange Heritage Lodges · Hwange, Zimbabwe",
      info:
        "Frontline teams finally have language for service rooted in Zimbabwean hospitality, not copy-pasted luxury scripts.",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1544723795-432537f480ea?auto=format&fit=crop&w=900&q=80",
      name: "Chiedza Mataranyika",
      title: "Executive Producer, Harare International Food Festival · Harare, Zimbabwe",
      info:
        "Ticketing partners, chefs, and sponsors operate from one shared production tracker. Our host city partners noticed the difference immediately.",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1545996123-8509ee3daffd?auto=format&fit=crop&w=900&q=80",
      name: "Takudzwa Bvute",
      title: "Resident Curator, The Umbo Gallery & Suites · Bulawayo, Zimbabwe",
      info:
        "Storytelling workshops unlocked new collaborations between our mixologists and resident artists—now every stay feels like an exhibition opening.",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      name: "Mira Dube",
      title: "Head of Hospitality, Matobo Reserves · Bulawayo, Zimbabwe",
      info:
        "Savaal's benchmarks keep our conservation lodges accountable to both discerning guests and the communities stewarding the land with us.",
    },
  ],
};
