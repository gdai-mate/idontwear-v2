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
      "Button-down collar. Washed until it felt right. The one you reach for when you stop thinking about what to wear.",
    details: "Relaxed fit. Single chest pocket. Coconut shell buttons.",
    materials: "100% organic cotton oxford, 140gsm. Enzyme washed.",
  },
  {
    handle: "camp-collar-linen",
    name: "Camp Collar Linen",
    category: "shirts",
    price: 165,
    description:
      "Open collar, box cut. Linen that wrinkles because it's supposed to.",
    details: "Boxy fit. Camp collar. Side slits at hem.",
    materials: "100% European flax linen, 160gsm.",
  },
  {
    handle: "indigo-work-shirt",
    name: "Indigo Work Shirt",
    category: "shirts",
    price: 175,
    description:
      "Based on a 1940s railroad shirt. Triple-stitched seams. Will fade beautifully.",
    details: "Regular fit. Pen slot on left pocket. Chain stitch hem.",
    materials: "Rope-dyed indigo cotton twill, 200gsm.",
  },
  {
    handle: "heavyweight-tee",
    name: "Heavyweight Tee",
    category: "shirts",
    price: 75,
    description:
      "Tubular knit. No side seams. Thick enough that you forget you're wearing it.",
    details: "Relaxed fit. Ribbed crew neck. Drop shoulder.",
    materials: "100% cotton jersey, 240gsm. Garment dyed.",
  },

  // Pants
  {
    handle: "canvas-fatigue",
    name: "Canvas Fatigue",
    category: "pants",
    price: 185,
    description:
      "Military fatigue pattern, civilian comfort. Four pockets, zero pretension.",
    details: "Relaxed taper. Button fly. Adjustable waist tabs.",
    materials: "Washed cotton canvas, 280gsm. Herringbone pocket bags.",
  },
  {
    handle: "selvedge-straight",
    name: "Selvedge Straight",
    category: "pants",
    price: 220,
    description:
      "Japanese selvedge denim. Straight leg. Raw. They'll become yours in about six months.",
    details: "Straight fit. Five pocket. Hidden selvedge coin pocket.",
    materials: "14oz Japanese selvedge denim. Sanforized.",
  },
  {
    handle: "pleated-trouser",
    name: "Pleated Trouser",
    category: "pants",
    price: 195,
    description:
      "Single pleat. High rise. For when you want to look like you thought about it.",
    details: "High-waisted. Single forward pleat. Side adjusters.",
    materials: "Tropical wool blend, 200gsm. Half-lined.",
  },

  // Bags
  {
    handle: "waxed-canvas-tote",
    name: "Waxed Canvas Tote",
    category: "bags",
    price: 145,
    description:
      "Waxed canvas. Brass rivets. Leather handles that'll outlast you. Fits everything, complains about nothing.",
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
      "Originally designed for chisels. Works for pens, brushes, whatever you carry. Rolls up, ties shut.",
    details: "Six slots. Leather tie closure. Brass eyelets.",
    materials: "Heavy cotton duck canvas. Bridle leather tie.",
  },

  // Accessories
  {
    handle: "wool-watch-cap",
    name: "Wool Watch Cap",
    category: "accessories",
    price: 55,
    description:
      "Merino wool. Ribbed knit. Fits heads, not egos.",
    details: "One size. Fold-up brim. Tonal logo tag.",
    materials: "100% extra-fine merino wool. Knitted in Melbourne.",
  },
  {
    handle: "brass-key-hook",
    name: "Brass Key Hook",
    category: "accessories",
    price: 35,
    description:
      "Solid brass. Japanese hook closure. Will develop a patina that's yours alone.",
    details: "Spring-loaded hook. Belt loop attachment. 8cm length.",
    materials: "Solid brass, sand-cast. Hand-polished.",
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
