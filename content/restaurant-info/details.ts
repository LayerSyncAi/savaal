export type JudgeComment = {
  judge: string;
  comment: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type RestaurantDetail = {
  judgeComments: JudgeComment[];
  gallery: string[];
  menu: MenuItem[];
};

export const restaurantDetails: Record<string, RestaurantDetail> = {
  "savanna-table": {
    judgeComments: [
      {
        judge: "Chef Amina K.",
        comment:
          "Fire-cooked vegetables carried elegant smoke while the wine pairings highlighted the kitchen's restraint.",
      },
      {
        judge: "Critic Thabo M.",
        comment:
          "The tasting menu tells a cohesive Cape terroir story without feeling nostalgic or heavy-handed.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Karoo lamb saddle",
        description: "Ember-roasted lamb with sorghum jus and wild herbs.",
        price: "$38",
      },
      {
        name: "Coal-seared kabeljou",
        description: "Line-caught fish, seaweed butter, charred lemon ash.",
        price: "$34",
      },
      {
        name: "Rooibos burnt custard",
        description: "Brûléed custard, naartjie gel, honeybush shortbread.",
        price: "$15",
      },
    ],
  },
  "maison-teranga": {
    judgeComments: [
      {
        judge: "Sommelier Lamine S.",
        comment: "Service choreography is seamless, with staff anticipating needs before you notice them yourself.",
      },
      {
        judge: "Judge Eve T.",
        comment: "The thieboudienne-inspired rice course was layered, aromatic, and technically impressive.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Yassa lobster",
        description: "Grilled lobster, onion confit, preserved lemon beurre blanc.",
        price: "$42",
      },
      {
        name: "Fonio & okra velouté",
        description: "Creamy fonio with young okra, smoked chili oil.",
        price: "$21",
      },
      {
        name: "Bouye sorbet",
        description: "Baobab fruit sorbet, coconut dacquoise, hibiscus syrup.",
        price: "$14",
      },
    ],
  },
  "spice-route-social": {
    judgeComments: [
      {
        judge: "Critic Daniel K.",
        comment: "Plates arrive quickly without sacrificing balance; the berbere beef skewer was a crowd favorite.",
      },
      {
        judge: "Chef Naledi P.",
        comment: "Cocktails echo the spice profiles on the menu, tying the lounge experience together.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Suya-spiced beef skewers",
        description: "Smoked chili, ground peanut crust, pickled shallots.",
        price: "$16",
      },
      {
        name: "Zanzibar prawn buns",
        description: "Turmeric bao, coconut sambal, lime leaf aioli.",
        price: "$14",
      },
      {
        name: "Teff beignets",
        description: "Honey drizzle, cardamom sugar, spiced chocolate dip.",
        price: "$11",
      },
    ],
  },
  "atlas-ember": {
    judgeComments: [
      {
        judge: "Judge Rachid H.",
        comment: "Live-fire technique is masterful, especially on the saffron lamb ribs with mint ash.",
      },
      {
        judge: "Chef Zola B.",
        comment: "The courtyard atmosphere and oud music give authenticity to the already transportive plates.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Harissa charcoal octopus",
        description: "Smoked tomato, preserved lemon labneh, crispy chickpeas.",
        price: "$32",
      },
      {
        name: "Atlas lamb ribs",
        description: "Saffron glaze, mint ash, pomegranate jus.",
        price: "$36",
      },
      {
        name: "Almond orange basbousa",
        description: "Semolina cake, orange blossom syrup, pistachio crumble.",
        price: "$13",
      },
    ],
  },
  "azure-dunes-hotel": {
    judgeComments: [
      {
        judge: "Travel Editor Mia R.",
        comment: "Beachside breakfast is serene, and staff maintain a calm pace without missing a detail.",
      },
      {
        judge: "Chef Consultant Felix W.",
        comment: "Seafood cookery is precise, though desserts could lean more tropical to match the setting.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Grilled reef snapper",
        description: "Coconut lime emulsion, pickled mango, sea greens.",
        price: "$33",
      },
      {
        name: "Vanilla bean parfait",
        description: "Passion fruit curd, candied pineapple, sable crumble.",
        price: "$16",
      },
      {
        name: "Seychelles breakfast platter",
        description: "Tropical fruit, smoked fish rillette, warm pastries.",
        price: "$24",
      },
    ],
  },
  "savannah-sky-lodge": {
    judgeComments: [
      {
        judge: "Safari Expert Leah O.",
        comment: "Guides bring the landscape to life, and the kitchen makes smart use of farm produce.",
      },
      {
        judge: "Judge Daniel S.",
        comment: "Thoughtful turndown touches and Maasai-led bush walks set a welcoming rhythm.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Campfire beef fillet",
        description: "Grilled over acacia coals, green peppercorn sauce.",
        price: "$29",
      },
      {
        name: "Spiced pumpkin soup",
        description: "Roasted pumpkin, coconut cream, toasted seeds.",
        price: "$12",
      },
      {
        name: "Wild honey tart",
        description: "Honey custard, roasted macadamia, tamarind caramel.",
        price: "$13",
      },
    ],
  },
  "sundown-rooftop": {
    judgeComments: [
      {
        judge: "Mixologist Kemi L.",
        comment: "Palm wine spritz balances acidity and sweetness, and the bar team moves with precision.",
      },
      {
        judge: "Critic Yaw A.",
        comment: "Live DJ sets keep energy high without overwhelming the conversation-friendly layout.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Palm wine spritz",
        description: "Palm wine, citrus cordial, sparkling wine, bitters.",
        price: "$12",
      },
      {
        name: "Suya old fashioned",
        description: "Bourbon, suya spice syrup, smoked chili bitters.",
        price: "$13",
      },
      {
        name: "Plantain chips & dip",
        description: "Crunchy plantain with avocado atchar and pepper sauce.",
        price: "$9",
      },
    ],
  },
  "baobab-jazz-lounge": {
    judgeComments: [
      {
        judge: "Maître d' Kwesi D.",
        comment: "The vinyl collection and dim lighting set a romantic tone matched by attentive service.",
      },
      {
        judge: "Critic Liora F.",
        comment: "Cocktails are stirred flawlessly; the smoked kola negroni is a standout.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Smoked kola negroni",
        description: "Kola bitters, gin, vermouth, smoked orange peel.",
        price: "$14",
      },
      {
        name: "Highlife highball",
        description: "Dark rum, pineapple shrub, ginger beer, lime.",
        price: "$12",
      },
      {
        name: "Crispy yam croquettes",
        description: "Aged cheddar, garden pepper relish, micro herbs.",
        price: "$10",
      },
    ],
  },
  "violet-coast-house": {
    judgeComments: [
      {
        judge: "Travel Writer Selma J.",
        comment: "Sandy pathways and ocean air weave into every stay, with staff remembering preferences day to day.",
      },
      {
        judge: "Judge Patrick C.",
        comment: "The hammam-influenced spa and airy suites pair beautifully with the seafood-focused dinner menu.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Chermoula sea bream",
        description: "Grilled bream, fennel salad, saffron couscous.",
        price: "$31",
      },
      {
        name: "Argan oil pavlova",
        description: "Crisp meringue, citrus curd, spiced almond praline.",
        price: "$15",
      },
      {
        name: "Moroccan mint tea service",
        description: "Fresh mint, gunpowder tea, honeyed pine nuts.",
        price: "$9",
      },
    ],
  },
  "ember-canvas": {
    judgeComments: [
      {
        judge: "Critic Joanne L.",
        comment: "Smoke is used as an accent rather than a gimmick, letting the produce stay front and center.",
      },
      {
        judge: "Chef Mentor Omar P.",
        comment: "Natural wine pairings show surprising range and amplify the fire-driven plates.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Roasted beet tartare",
        description: "Charred beet, smoked egg yolk, cassava crisp.",
        price: "$17",
      },
      {
        name: "Wood-fired ribeye",
        description: "Dry-aged beef, ember potato, herb chimichurri.",
        price: "$39",
      },
      {
        name: "Plantain caramel tart",
        description: "Toasted plantain, salted caramel, vanilla cremeux.",
        price: "$14",
      },
    ],
  },
  "marula-night-market": {
    judgeComments: [
      {
        judge: "Judge Sibusiso Q.",
        comment: "Open-kitchen stalls keep aromas front and center; the marula sour is playful and refreshing.",
      },
      {
        judge: "Critic Ayo T.",
        comment: "Lighting and music bring the night market feel indoors, making it a lively late-night stop.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    menu: [
      {
        name: "Marula sour",
        description: "Marula fruit, citrus, aquafaba, bitters.",
        price: "$11",
      },
      {
        name: "Rooibos pork bao",
        description: "Slow-cooked pork, pickled cucumber, chili relish.",
        price: "$13",
      },
      {
        name: "Smoked corn ribs",
        description: "Fermented chili glaze, roasted sesame, lime.",
        price: "$10",
      },
    ],
  },
};
