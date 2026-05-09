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
      "The collar rolls without being told to. Enzyme-washed until it stopped feeling new. This is the shirt that ends up on top of the pile because you keep reaching for it.",
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
      "Pattern borrowed from a 1940s railroad shirt. Triple-stitched because the original survived manual labour, not just referenced it. The indigo will fade to match your particular life.",
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
      "Tubular knit, no side seams. Heavy enough to hang properly, not so heavy you notice it. The kind of shirt that quietly becomes your favourite.",
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
      "Based on the US Army's OG-107, standard issue from Korea through Vietnam. Relaxed taper, utility pockets, washed canvas that feels already broken in. Button fly, because zippers on fatigues are historically wrong.",
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
      "Fourteen-ounce selvedge from an Okayama mill, woven on vintage shuttle looms since the 1970s. Raw, meaning unwashed, so it'll slowly conform to your body. The fades you get will be entirely yours.",
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
      "Single forward pleat, tropical wool, cut high enough that you don't need a belt. Side adjusters instead. For people who've realised flat-fronts aren't more flattering, just more common.",
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
      "British Millerain waxed cotton, from a Lancashire mill that's been at it since 1880. Vegetable-tanned leather handles that darken with use. No compartments or organiser pockets because we trust you to find your own keys.",
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
      "Six slots, originally sized for chisels. Works for pens, brushes, whatever you carry. Rolls up, ties shut with a leather cord. No zipper, no Velcro.",
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
      "Extra-fine merino, rib-knitted in Melbourne since the 1960s. Snug without making you look like you're about to rob a servo. Fold the brim to taste.",
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
      "Sand-cast brass, Japanese spring-loaded hook, clips onto a belt loop. Will tarnish over time, which is the point. If you want shiny, buy plated.",
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
