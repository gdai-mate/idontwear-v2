export type Category = "shirts" | "pants" | "bags" | "accessories";

export interface Product {
  handle: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  details: string;
  materials: string;
  image?: string;
}

export const categories: Category[] = [
  "shirts",
  "pants",
  "bags",
  "accessories",
];

export const products: Product[] = [
  // Shirts
  {
    handle: "washed-oxford",
    name: "Washed Oxford",
    category: "shirts",
    price: 145,
    description:
      "The collar rolls without being told to. We enzyme-washed the cloth until it stopped feeling new, which took longer than you'd think. This is the shirt that ends up on top of the pile because you keep reaching for it.",
    details: "Relaxed fit. Single chest pocket. Coconut shell buttons.",
    materials: "100% organic cotton oxford, 140gsm. Enzyme washed.",
    image: "/images/editorial-mannequins.jpeg",
  },
  {
    handle: "camp-collar-linen",
    name: "Camp Collar Linen",
    category: "shirts",
    price: 165,
    description:
      "Box cut with an open collar borrowed from 1950s Havana bowling leagues. European flax linen that wrinkles within the hour. People who iron these are missing the point entirely.",
    details: "Boxy fit. Camp collar. Side slits at hem.",
    materials: "100% European flax linen, 160gsm.",
    image: "/images/texture-linen.jpeg",
  },
  {
    handle: "indigo-work-shirt",
    name: "Indigo Work Shirt",
    category: "shirts",
    price: 175,
    description:
      "The pattern comes from a 1940s railroad shirt. Triple-stitched seams because the original was built to survive manual labour, not just reference it. The rope-dyed indigo will fade to match your particular life.",
    details: "Regular fit. Pen slot on left pocket. Chain stitch hem.",
    materials: "Rope-dyed indigo cotton twill, 200gsm.",
    image: "/images/texture-indigo.jpeg",
  },
  {
    handle: "heavyweight-tee",
    name: "Heavyweight Tee",
    category: "shirts",
    price: 75,
    description:
      "Tubular knit on vintage circular machines, which means no side seams to bunch up under a jacket. At 240 grams, it's heavy enough to hang properly but not so heavy you notice it. The kind of shirt that quietly becomes your favourite.",
    details: "Relaxed fit. Ribbed crew neck. Drop shoulder.",
    materials: "100% cotton jersey, 240gsm. Garment dyed.",
    image: "/images/editorial-hillside-coat.jpeg",
  },

  // Pants
  {
    handle: "canvas-fatigue",
    name: "Canvas Fatigue",
    category: "pants",
    price: 185,
    description:
      "Based on the US Army's OG-107 fatigue trousers, standard issue from Korea through Vietnam. We kept the relaxed taper and utility pockets but swapped the rigid twill for a washed canvas that feels already broken in. Button fly, because zippers on fatigues are historically inaccurate.",
    details: "Relaxed taper. Button fly. Adjustable waist tabs.",
    materials: "Washed cotton canvas, 280gsm. Herringbone pocket bags.",
    image: "/images/editorial-polo-rocks.jpeg",
  },
  {
    handle: "selvedge-straight",
    name: "Selvedge Straight",
    category: "pants",
    price: 220,
    description:
      "Fourteen-ounce selvedge from a mill in Okayama that's been weaving denim on vintage shuttle looms since the 1970s. The cloth is raw, meaning unwashed and untreated, so it will slowly conform to your body over the first six months. The fades you get will be entirely yours.",
    details: "Straight fit. Five pocket. Hidden selvedge coin pocket.",
    materials: "14oz Japanese selvedge denim. Sanforized.",
    image: "/images/product-selvedge-folded.jpeg",
  },
  {
    handle: "pleated-trouser",
    name: "Pleated Trouser",
    category: "pants",
    price: 195,
    description:
      "A single forward pleat in tropical wool, cut high enough on the waist that you don't need a belt to keep them up. Side adjusters instead. These are for people who've realised that flat-front chinos aren't actually more flattering, just more common.",
    details: "High-waisted. Single forward pleat. Side adjusters.",
    materials: "Tropical wool blend, 200gsm. Half-lined.",
    image: "/images/editorial-river-tweed.jpeg",
  },

  // Bags
  {
    handle: "waxed-canvas-tote",
    name: "Waxed Canvas Tote",
    category: "bags",
    price: 145,
    description:
      "British Millerain waxed cotton, from a Lancashire mill that's been at it since 1880. Leather handles cut from vegetable-tanned hides that will darken with use. The bag doesn't have compartments or organiser pockets because we trust you to figure out where your keys are.",
    details: "Unlined. Interior slip pocket. Rivet-reinforced stress points.",
    materials:
      "British Millerain waxed cotton. Vegetable-tanned leather handles.",
    image: "/images/waxed-canvas-tote.png",
  },
  {
    handle: "tool-roll",
    name: "Tool Roll",
    category: "bags",
    price: 95,
    description:
      "Six slots, originally sized for woodworking chisels, though they work just as well for pens, brushes, or whatever you need to carry in a civilised manner. Rolls up and ties shut with a single leather cord. No zipper, no Velcro, no nonsense.",
    details: "Six slots. Leather tie closure. Brass eyelets.",
    materials: "Heavy cotton duck canvas. Bridle leather tie.",
    image: "/images/editorial-puffer-vintage.jpeg",
  },

  // Accessories
  {
    handle: "wool-watch-cap",
    name: "Wool Watch Cap",
    category: "accessories",
    price: 55,
    description:
      "Extra-fine merino, rib-knitted in Melbourne by a family operation that's been making knitwear since the 1960s. The fit is snug without making you look like you're about to rob a petrol station. Fold the brim to taste.",
    details: "One size. Fold-up brim. Tonal logo tag.",
    materials: "100% extra-fine merino wool. Knitted in Melbourne.",
    image: "/images/editorial-mountain-scarf.jpeg",
  },
  {
    handle: "brass-key-hook",
    name: "Brass Key Hook",
    category: "accessories",
    price: 35,
    description:
      "Sand-cast brass with a Japanese spring-loaded hook that clips onto a belt loop. The brass will tarnish and develop a patina over time, which is the point. If you want something that stays shiny, buy something plated.",
    details: "Spring-loaded hook. Belt loop attachment. 8cm length.",
    materials: "Solid brass, sand-cast. Hand-polished.",
    image: "/images/product-canvas-tote.jpeg",
  },
];

export const placeholderColors: Record<string, string> = {
  "washed-oxford": "#D4C5B2",
  "camp-collar-linen": "#E8DFD0",
  "indigo-work-shirt": "#2C3E5A",
  "heavyweight-tee": "#1A1A1A",
  "canvas-fatigue": "#7A6F5D",
  "selvedge-straight": "#1A1E2E",
  "pleated-trouser": "#4A4A48",
  "waxed-canvas-tote": "#8B7D6B",
  "tool-roll": "#6B5D4C",
  "wool-watch-cap": "#3D3D3D",
  "brass-key-hook": "#C46B39",
};
