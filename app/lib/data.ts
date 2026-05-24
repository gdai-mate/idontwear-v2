export type Category = "jackets" | "pants" | "bags";

export interface Product {
  handle: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  details: string;
  materials: string;
  image?: string;
  images?: string[];
}

export const categories: Category[] = [
  "jackets",
  "pants",
  "bags",
];

export const products: Product[] = [
  // Jackets
  {
    handle: "stand-collar-jacket",
    name: "Stand Collar Jacket",
    category: "jackets",
    price: 295,
    description:
      "Cropped workwear jacket with a mandarin collar that sits clean against the neck. Panelled construction borrowed from French chore coats, shortened to hit at the natural waist. The kind of piece that makes everything underneath it look intentional.",
    details: "Cropped fit. Stand collar. Hidden button placket. Patch pockets.",
    materials: "Heavy cotton twill, 320gsm. Overdyed black.",
    image: "/images/shoot/outfit-full-front.jpg",
    images: [
      "/images/shoot/outfit-full-front.jpg",
      "/images/shoot/jacket-portrait.jpg",
      "/images/shoot/jacket-closeup.jpg",
      "/images/shoot/jacket-waist-detail.jpg",
      "/images/shoot/jacket-side-profile.jpg",
      "/images/shoot/outfit-full-straight.jpg",
    ],
  },

  // Pants
  {
    handle: "wide-leg-trouser",
    name: "Wide Leg Trouser",
    category: "pants",
    price: 225,
    description:
      "High-waisted with a tie belt instead of loops. The silhouette pulls from hakama and 1940s naval trousers at the same time. Wide through the leg, cuffed at the ankle. You either get it immediately or you don't.",
    details: "High rise. Tie belt. Deep pleats. Cuffed hem.",
    materials: "Cotton twill, 280gsm. Overdyed black. Contrast gold topstitch.",
    image: "/images/shoot/pants-front-detail.jpg",
    images: [
      "/images/shoot/pants-front-detail.jpg",
      "/images/shoot/waist-tie-detail.jpg",
      "/images/shoot/pants-hand-pocket.jpg",
      "/images/shoot/pants-arms-crossed.jpg",
      "/images/shoot/pants-back-view.jpg",
      "/images/shoot/pants-back-pockets.jpg",
      "/images/shoot/pocket-stitch-detail.jpg",
      "/images/shoot/pants-back-pocket-detail.jpg",
    ],
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
    image: "/images/shoot/pants-back-view.jpg",
    images: [
      "/images/shoot/pants-back-view.jpg",
      "/images/shoot/pants-hands-hips.jpg",
      "/images/shoot/pants-back-pockets.jpg",
    ],
  },

  // Bags
  {
    handle: "sailcloth-tote",
    name: "Sailcloth Tote",
    category: "bags",
    price: 185,
    description:
      "Made from reclaimed sailcloth. Each one is different because each sail had a different life. Leather handles riveted with copper. The stains, the wear marks, the faded racing numbers, they all stay. That's the point.",
    details: "One-of-one. Copper rivets. Interior green lining.",
    materials:
      "Reclaimed Dacron sailcloth. Full-grain leather handles. Copper hardware.",
    image: "/images/shoot/sailbag-product-held.jpg",
    images: [
      "/images/shoot/sailbag-product-held.jpg",
      "/images/shoot/sailbag-shoulder-carry.jpg",
      "/images/shoot/sailbag-over-shoulder.jpg",
      "/images/shoot/sailbag-front-hung.jpg",
      "/images/shoot/sailbag-held-side.jpg",
      "/images/shoot/sailbag-back-branded.jpg",
      "/images/shoot/branding-detail.jpg",
      "/images/shoot/sailbag-back-clean.jpg",
    ],
  },
  {
    handle: "weathered-canvas-tote",
    name: "Weathered Canvas Tote",
    category: "bags",
    price: 165,
    description:
      "Reclaimed heavy canvas with decades of honest wear already in it. The patina you see is real, earned from actual use, not distressed in a factory. Leather handles, brass rivets, green cotton lining.",
    details: "One-of-one. Brass rivets. Green cotton lining.",
    materials:
      "Reclaimed heavy canvas. Full-grain leather handles. Brass hardware.",
    image: "/images/shoot/weathered-tote-held.jpg",
    images: [
      "/images/shoot/weathered-tote-held.jpg",
      "/images/shoot/weathered-tote-shoulder.jpg",
      "/images/shoot/weathered-tote-profile.jpg",
      "/images/shoot/weathered-tote-product.jpg",
      "/images/shoot/weathered-tote-texture.jpg",
    ],
  },
];

export const placeholderColors: Record<string, string> = {
  "stand-collar-jacket": "#1A1A1A",
  "wide-leg-trouser": "#1A1A1A",
  "pleated-trouser": "#1A1A1A",
  "sailcloth-tote": "#E8DFD0",
  "weathered-canvas-tote": "#8B7D6B",
};
