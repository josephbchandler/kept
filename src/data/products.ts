// The whole Kept catalog lives in this file: categories, brands and products.
// Prices are in USD. `brand` and `category` reference slugs defined below.

export const CATEGORY_SLUGS = [
  "desk",
  "carry",
  "coffee",
  "tech",
  "home",
  "books",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

export type Brand = {
  slug: string;
  name: string;
  country: string;
  url: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  /** Brand slug, see `brands`. */
  brand: string;
  category: CategorySlug;
  priceUsd: number;
  description: string;
  imageUrl: string;
  staffPick: boolean;
  /** ISO date the item was added to the index. */
  addedAt: string;
};

export const categories: Category[] = [
  {
    slug: "desk",
    name: "Desk",
    description: "Chairs, pens, paper and the quiet tools of a good workday.",
  },
  {
    slug: "carry",
    name: "Carry",
    description: "Bags, wallets and the small things that leave the house with you.",
  },
  {
    slug: "coffee",
    name: "Coffee",
    description: "Kettles, grinders and brewers for a better first cup.",
  },
  {
    slug: "tech",
    name: "Tech",
    description: "Electronics with real attention paid to how they feel in the hand.",
  },
  {
    slug: "home",
    name: "Home",
    description: "Furniture, lighting and cookware built to outlast trends.",
  },
  {
    slug: "books",
    name: "Books",
    description: "Books on design, making and paying attention to ordinary things.",
  },
];

export const brands: Brand[] = [
  { slug: "herman-miller", name: "Herman Miller", country: "United States", url: "https://www.hermanmiller.com" },
  { slug: "grovemade", name: "Grovemade", country: "United States", url: "https://grovemade.com" },
  { slug: "lamy", name: "Lamy", country: "Germany", url: "https://www.lamy.com" },
  { slug: "field-notes", name: "Field Notes", country: "United States", url: "https://fieldnotesbrand.com" },
  { slug: "keychron", name: "Keychron", country: "China", url: "https://www.keychron.com" },
  { slug: "fellow", name: "Fellow", country: "United States", url: "https://fellowproducts.com" },
  { slug: "la-marzocco", name: "La Marzocco", country: "Italy", url: "https://lamarzoccohome.com" },
  { slug: "hario", name: "Hario", country: "Japan", url: "https://www.hario-usa.com" },
  { slug: "peak-design", name: "Peak Design", country: "United States", url: "https://www.peakdesign.com" },
  { slug: "bellroy", name: "Bellroy", country: "Australia", url: "https://bellroy.com" },
  { slug: "snow-peak", name: "Snow Peak", country: "Japan", url: "https://snowpeak.com" },
  { slug: "teenage-engineering", name: "Teenage Engineering", country: "Sweden", url: "https://teenage.engineering" },
  { slug: "sony", name: "Sony", country: "Japan", url: "https://electronics.sony.com" },
  { slug: "fujifilm", name: "Fujifilm", country: "Japan", url: "https://www.fujifilm-x.com" },
  { slug: "le-creuset", name: "Le Creuset", country: "France", url: "https://www.lecreuset.com" },
  { slug: "lars-muller-publishers", name: "Lars Müller Publishers", country: "Switzerland", url: "https://www.lars-mueller-publishers.com" },
  { slug: "phaidon", name: "Phaidon", country: "United Kingdom", url: "https://www.phaidon.com" },
];

export const products: Product[] = [
  // Desk
  {
    id: "p001",
    slug: "aeron-chair",
    name: "Aeron Chair",
    brand: "herman-miller",
    category: "desk",
    priceUsd: 1895,
    description:
      "The mesh office chair that rewrote the category, tuned for posture support through long days. Sized to fit, with a 12-year warranty.",
    imageUrl: "/images/aeron-chair.jpg",
    staffPick: true,
    addedAt: "2026-02-03",
  },
  {
    id: "p002",
    slug: "grovemade-desk-shelf",
    name: "Desk Shelf",
    brand: "grovemade",
    category: "desk",
    priceUsd: 250,
    description:
      "A solid walnut riser that lifts your monitor to eye level and gives the keyboard somewhere to hide underneath.",
    imageUrl: "/images/grovemade-desk-shelf.jpg",
    staffPick: false,
    addedAt: "2026-06-18",
  },
  {
    id: "p003",
    slug: "grovemade-wool-felt-desk-pad",
    name: "Wool Felt Desk Pad",
    brand: "grovemade",
    category: "desk",
    priceUsd: 90,
    description:
      "Dense merino felt over a cork base. Quiet under the keyboard, kind to the wrists, and it softens the look of a hard desk.",
    imageUrl: "/images/grovemade-wool-felt-desk-pad.jpg",
    staffPick: false,
    addedAt: "2026-04-09",
  },
  {
    id: "p004",
    slug: "lamy-safari-fountain-pen",
    name: "Safari Fountain Pen",
    brand: "lamy",
    category: "desk",
    priceUsd: 37,
    description:
      "A tough ABS fountain pen with a moulded grip and a wire clip, designed in 1980 and still the easiest way into fountain pens.",
    imageUrl: "/images/lamy-safari-fountain-pen.jpg",
    staffPick: false,
    addedAt: "2026-01-14",
  },
  {
    id: "p005",
    slug: "lamy-2000-fountain-pen",
    name: "Lamy 2000 Fountain Pen",
    brand: "lamy",
    category: "desk",
    priceUsd: 229,
    description:
      "Brushed fibreglass and stainless steel with a hooded gold nib. A Bauhaus-minded design that has barely changed since 1966.",
    imageUrl: "/images/lamy-2000-fountain-pen.jpg",
    staffPick: false,
    addedAt: "2026-09-02",
  },
  {
    id: "p006",
    slug: "field-notes-original-kraft",
    name: "Original Kraft Memo Book, 3-Pack",
    brand: "field-notes",
    category: "desk",
    priceUsd: 14.95,
    description:
      "Pocket notebooks with kraft covers, graph paper and three staples. Made in the USA and meant to be filled, not saved.",
    imageUrl: "/images/field-notes-original-kraft.jpg",
    staffPick: true,
    addedAt: "2026-10-21",
  },
  {
    id: "p007",
    slug: "keychron-q1-max",
    name: "Q1 Max Mechanical Keyboard",
    brand: "keychron",
    category: "desk",
    priceUsd: 219,
    description:
      "A gasket-mounted 75% keyboard in a machined aluminium case, with hot-swappable switches and a wireless range that covers the room.",
    imageUrl: "/images/keychron-q1-max.jpg",
    staffPick: false,
    addedAt: "2026-07-27",
  },

  // Coffee
  {
    id: "p008",
    slug: "fellow-stagg-ekg-kettle",
    name: "Stagg EKG Electric Kettle",
    brand: "fellow",
    category: "coffee",
    priceUsd: 195,
    description:
      "A gooseneck kettle with a counterweighted handle and a precise pour, holding temperature to the degree for pour-over.",
    imageUrl: "/images/fellow-stagg-ekg-kettle.jpg",
    staffPick: true,
    addedAt: "2026-08-11",
  },
  {
    id: "p009",
    slug: "fellow-ode-brew-grinder",
    name: "Ode Brew Grinder Gen 2",
    brand: "fellow",
    category: "coffee",
    priceUsd: 345,
    description:
      "A flat-burr grinder sized for the counter, with 31 settings for filter coffee and a single-dose design that keeps grounds fresh.",
    imageUrl: "/images/fellow-ode-brew-grinder.jpg",
    staffPick: false,
    addedAt: "2026-05-06",
  },
  {
    id: "p010",
    slug: "fellow-carter-move-mug",
    name: "Carter Move Mug",
    brand: "fellow",
    category: "coffee",
    priceUsd: 30,
    description:
      "A vacuum-insulated travel mug with a ceramic-coated interior, so coffee tastes like coffee and not like steel.",
    imageUrl: "/images/fellow-carter-move-mug.jpg",
    staffPick: false,
    addedAt: "2026-03-19",
  },
  {
    id: "p011",
    slug: "fellow-clara-french-press",
    name: "Clara French Press",
    brand: "fellow",
    category: "coffee",
    priceUsd: 99,
    description:
      "An insulated, non-stick French press with a mesh filter that cuts down on silt. Easy to clean, which means it actually gets used.",
    imageUrl: "/images/fellow-clara-french-press.jpg",
    staffPick: false,
    addedAt: "2026-06-03",
  },
  {
    id: "p012",
    slug: "fellow-atmos-canister",
    name: "Atmos Vacuum Canister",
    brand: "fellow",
    category: "coffee",
    priceUsd: 32,
    description:
      "Twist the lid to pull air out and keep beans fresher for longer. Stacks neatly and looks good left on the counter.",
    imageUrl: "/images/fellow-atmos-canister.jpg",
    staffPick: false,
    addedAt: "2026-02-25",
  },
  {
    id: "p013",
    slug: "la-marzocco-linea-micra",
    name: "Linea Micra",
    brand: "la-marzocco",
    category: "coffee",
    priceUsd: 4900,
    description:
      "A café-grade dual-boiler espresso machine scaled down for the home, built by hand in Florence.",
    imageUrl: "/images/la-marzocco-linea-micra.jpg",
    staffPick: false,
    addedAt: "2026-10-08",
  },
  {
    id: "p014",
    slug: "hario-v60-dripper",
    name: "V60 Ceramic Dripper",
    brand: "hario",
    category: "coffee",
    priceUsd: 28,
    description:
      "The cone with the spiral ribs and the single large hole. Simple, cheap and capable of a remarkably clean cup.",
    imageUrl: "/images/hario-v60-dripper.jpg",
    staffPick: false,
    addedAt: "2026-01-29",
  },

  // Carry
  {
    id: "p015",
    slug: "peak-design-everyday-backpack",
    name: "Everyday Backpack 20L",
    brand: "peak-design",
    category: "carry",
    priceUsd: 299.95,
    description:
      "A weatherproof daypack with origami-style dividers and side access, equally at home with a camera or a laptop.",
    imageUrl: "/images/peak-design-everyday-backpack.jpg",
    staffPick: false,
    addedAt: "2026-09-15",
  },
  {
    id: "p016",
    slug: "peak-design-everyday-sling",
    name: "Everyday Sling 6L",
    brand: "peak-design",
    category: "carry",
    priceUsd: 89.95,
    description:
      "A compact crossbody bag with a padded interior that swallows a small camera, a tablet and the day's essentials.",
    imageUrl: "/images/peak-design-everyday-sling.jpg",
    staffPick: false,
    addedAt: "2026-04-22",
  },
  {
    id: "p017",
    slug: "peak-design-field-pouch",
    name: "Field Pouch",
    brand: "peak-design",
    category: "carry",
    priceUsd: 29.95,
    description:
      "A small zip pouch for cables, chargers and loose bits, with a strap so it can ride on the outside of a bag.",
    imageUrl: "/images/peak-design-field-pouch.jpg",
    staffPick: false,
    addedAt: "2026-07-08",
  },
  {
    id: "p018",
    slug: "bellroy-hide-and-seek-wallet",
    name: "Hide & Seek Wallet",
    brand: "bellroy",
    category: "carry",
    priceUsd: 99,
    description:
      "A slim leather bifold with a hidden pocket for flat-folded notes, RFID protection and room for a dozen cards.",
    imageUrl: "/images/bellroy-hide-and-seek-wallet.jpg",
    staffPick: false,
    addedAt: "2026-03-04",
  },
  {
    id: "p019",
    slug: "bellroy-tokyo-totepack",
    name: "Tokyo Totepack",
    brand: "bellroy",
    category: "carry",
    priceUsd: 159,
    description:
      "Part tote, part backpack: an open top with a magnetic closure, a padded laptop sleeve and straps that tuck away.",
    imageUrl: "/images/bellroy-tokyo-totepack.jpg",
    staffPick: false,
    addedAt: "2026-08-26",
  },
  {
    id: "p020",
    slug: "snow-peak-titanium-mug",
    name: "Titanium Single Wall Mug 450",
    brand: "snow-peak",
    category: "carry",
    priceUsd: 39.95,
    description:
      "A featherweight titanium mug with folding handles. Goes on the stove, in the pack, and on the desk on Monday.",
    imageUrl: "/images/snow-peak-titanium-mug.jpg",
    staffPick: false,
    addedAt: "2026-05-30",
  },

  // Tech
  {
    id: "p021",
    slug: "teenage-engineering-op-1-field",
    name: "OP-1 Field",
    brand: "teenage-engineering",
    category: "tech",
    priceUsd: 1999,
    description:
      "A portable synthesizer, sampler and four-track recorder in an aluminium body thinner than most phones are wide.",
    imageUrl: "/images/teenage-engineering-op-1-field.jpg",
    staffPick: false,
    addedAt: "2026-06-29",
  },
  {
    id: "p022",
    slug: "teenage-engineering-ep-133",
    name: "EP–133 K.O. II",
    brand: "teenage-engineering",
    category: "tech",
    priceUsd: 299,
    description:
      "A sampler and drum machine with a calculator's layout and a punchy built-in speaker. Made for making beats on a train.",
    imageUrl: "/images/teenage-engineering-ep-133.jpg",
    staffPick: false,
    addedAt: "2026-10-30",
  },
  {
    id: "p023",
    slug: "sony-wh-1000xm6",
    name: "WH-1000XM6 Headphones",
    brand: "sony",
    category: "tech",
    priceUsd: 449.99,
    description:
      "Over-ear noise-cancelling headphones that fold flat again, with a quieter cabin than most flights and a full day of battery.",
    imageUrl: "/images/sony-wh-1000xm6.jpg",
    staffPick: false,
    addedAt: "2026-09-24",
  },
  {
    id: "p024",
    slug: "sony-wf-1000xm5",
    name: "WF-1000XM5 Earbuds",
    brand: "sony",
    category: "tech",
    priceUsd: 299.99,
    description:
      "Small, light noise-cancelling earbuds with a balanced, detailed sound and memory-foam tips that actually seal.",
    imageUrl: "/images/sony-wf-1000xm5.jpg",
    staffPick: false,
    addedAt: "2026-02-12",
  },
  {
    id: "p025",
    slug: "fujifilm-x100vi",
    name: "X100VI",
    brand: "fujifilm",
    category: "tech",
    priceUsd: 1799,
    description:
      "A fixed-lens compact with a hybrid viewfinder, physical dials and film simulations that make editing optional.",
    imageUrl: "/images/fujifilm-x100vi.jpg",
    staffPick: true,
    addedAt: "2026-11-04",
  },

  // Home
  {
    id: "p026",
    slug: "eames-molded-plastic-side-chair",
    name: "Eames Molded Plastic Side Chair",
    brand: "herman-miller",
    category: "home",
    priceUsd: 545,
    description:
      "The 1950 shell chair, now in recyclable polypropylene. Light enough to move with one hand, comfortable enough to stay put.",
    imageUrl: "/images/eames-molded-plastic-side-chair.jpg",
    staffPick: false,
    addedAt: "2026-07-16",
  },
  {
    id: "p027",
    slug: "nelson-saucer-bubble-pendant",
    name: "Nelson Saucer Bubble Pendant",
    brand: "herman-miller",
    category: "home",
    priceUsd: 1095,
    description:
      "A steel frame sprayed with a translucent skin, giving off a soft, even glow. George Nelson's 1947 design, still made by hand.",
    imageUrl: "/images/nelson-saucer-bubble-pendant.jpg",
    staffPick: false,
    addedAt: "2026-03-27",
  },
  {
    id: "p028",
    slug: "eames-hang-it-all",
    name: "Eames Hang-It-All",
    brand: "herman-miller",
    category: "home",
    priceUsd: 249,
    description:
      "Wire and wooden balls, made for a kid's room in 1953 and good for coats, bags and keys in any hallway since.",
    imageUrl: "/images/eames-hang-it-all.jpg",
    staffPick: false,
    addedAt: "2026-05-14",
  },
  {
    id: "p029",
    slug: "le-creuset-dutch-oven",
    name: "Signature Round Dutch Oven, 5.5 qt",
    brand: "le-creuset",
    category: "home",
    priceUsd: 440,
    description:
      "Enamelled cast iron that goes from stovetop to oven to table, and will likely be handed down when you're done with it.",
    imageUrl: "/images/le-creuset-dutch-oven.jpg",
    staffPick: false,
    addedAt: "2026-10-14",
  },
  {
    id: "p030",
    slug: "le-creuset-whistling-kettle",
    name: "Classic Whistling Kettle",
    brand: "le-creuset",
    category: "home",
    priceUsd: 110,
    description:
      "An enamelled steel stovetop kettle with a gentle whistle and a stay-cool handle. Works on every hob, including induction.",
    imageUrl: "/images/le-creuset-whistling-kettle.jpg",
    staffPick: false,
    addedAt: "2026-01-08",
  },
  {
    id: "p031",
    slug: "snow-peak-home-camp-burner",
    name: "Home & Camp Burner",
    brand: "snow-peak",
    category: "home",
    priceUsd: 139.95,
    description:
      "A single-burner butane stove that folds into a slim steel cylinder. Tidy enough for the dinner table, tough enough for the campsite.",
    imageUrl: "/images/snow-peak-home-camp-burner.jpg",
    staffPick: false,
    addedAt: "2026-08-04",
  },

  // Books
  {
    id: "p032",
    slug: "dieter-rams-as-little-design-as-possible",
    name: "Dieter Rams: As Little Design as Possible",
    brand: "phaidon",
    category: "books",
    priceUsd: 79.95,
    description:
      "The definitive monograph on Rams, covering his work at Braun and Vitsœ with hundreds of photographs and sketches.",
    imageUrl: "/images/dieter-rams-as-little-design-as-possible.jpg",
    staffPick: false,
    addedAt: "2026-04-01",
  },
  {
    id: "p033",
    slug: "designing-design",
    name: "Designing Design",
    brand: "lars-muller-publishers",
    category: "books",
    priceUsd: 50,
    description:
      "Kenya Hara on emptiness, the senses and the everyday, drawn from his work as art director of Muji.",
    imageUrl: "/images/designing-design.jpg",
    staffPick: false,
    addedAt: "2026-09-09",
  },
  {
    id: "p034",
    slug: "super-normal",
    name: "Super Normal: Sensations of the Ordinary",
    brand: "lars-muller-publishers",
    category: "books",
    priceUsd: 35,
    description:
      "Naoto Fukasawa and Jasper Morrison collect objects so ordinary they disappear into use, and explain why that matters.",
    imageUrl: "/images/super-normal.jpg",
    staffPick: false,
    addedAt: "2026-06-10",
  },
  {
    id: "p035",
    slug: "kenya-hara-white",
    name: "White",
    brand: "lars-muller-publishers",
    category: "books",
    priceUsd: 30,
    description:
      "A short, meditative book by Kenya Hara on the colour white and the Japanese sense of emptiness behind it.",
    imageUrl: "/images/kenya-hara-white.jpg",
    staffPick: false,
    addedAt: "2026-02-18",
  },
  {
    id: "p036",
    slug: "jasper-morrison-a-book-of-things",
    name: "A Book of Things",
    brand: "lars-muller-publishers",
    category: "books",
    priceUsd: 45,
    description:
      "Jasper Morrison walks through his own designs, from bottle openers to chairs, with short notes on how each came to be.",
    imageUrl: "/images/jasper-morrison-a-book-of-things.jpg",
    staffPick: false,
    addedAt: "2026-11-09",
  },
];
