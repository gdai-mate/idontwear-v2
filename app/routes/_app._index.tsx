import { Link } from "@remix-run/react";
import { products } from "~/lib/data";
import { ProductCard } from "~/components/ProductCard";
import { AnimateIn } from "~/components/AnimateIn";

const gallery = [
  { src: "/images/editorial-denim-stack.jpeg", alt: "Denim shirts" },
  { src: "/images/editorial-overcoat-bw-hires.jpeg", alt: "Classic tailoring" },
  { src: "/images/lifestyle-mrporter.jpeg", alt: "Morning reading" },
  { src: "/images/editorial-nyc-70s.jpeg", alt: "New York, 1970s" },
  { src: "/images/editorial-hillside-coat.jpeg", alt: "Walking the hills" },
  { src: "/images/accent-taste.jpeg", alt: "" },
  { src: "/images/texture-dark-indigo.jpeg", alt: "Indigo texture" },
  { src: "/images/editorial-newspaper.jpeg", alt: "Reading the paper" },
  { src: "/images/editorial-couple-tweed.jpeg", alt: "Tweed and houndstooth" },
  { src: "/images/process-tailoring.jpeg", alt: "Pattern cutting" },
  { src: "/images/process-fabric-rolls.jpeg", alt: "Fabric rolls" },
  { src: "/images/editorial-nyc-market.jpeg", alt: "Garment market" },
];

export default function Home() {
  const featured = [
    products.find((p) => p.handle === "waxed-canvas-tote")!,
    products.find((p) => p.handle === "indigo-work-shirt")!,
    products.find((p) => p.handle === "canvas-fatigue")!,
  ];

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative flex h-svh items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/editorial-overcoat-field.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-idw-black/60 via-idw-black/15 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-gutter pb-12 md:pb-16">
          <div className="mx-auto max-w-content">
            <h1 className="font-serif text-display text-idw-white">
              idontwear
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-idw-white/50">
              Clothes for people who wear them.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="h-8 w-px animate-pulse bg-idw-white/20" />
        </div>
      </section>

      {/* ---- Brand Statement ---- */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <AnimateIn className="md:col-span-3">
              <div className="aspect-[4/5] w-full overflow-hidden bg-idw-linen">
                <img
                  src="/images/editorial-garden.jpeg"
                  alt="Workwear in the garden"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimateIn>

            <AnimateIn
              className="flex flex-col justify-center md:col-span-2"
              delay={200}
            >
              <p className="font-serif text-heading text-balance">
                The most beautiful aspect of clothing is the person wearing them.
              </p>
              <p className="mt-6 text-sm leading-relaxed opacity-60">
                Built around the functional silhouettes of workwear, outdoorswear,
                and tailoring. Every piece draws from techniques and contexts
                across cultures, made to become part of your day, not a costume
                for it.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ---- Featured Products ---- */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <AnimateIn>
            <p className="mb-12 text-subheading uppercase tracking-widest opacity-40">
              Featured
            </p>
          </AnimateIn>

          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <AnimateIn key={product.handle}>
                <ProductCard product={product} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="mt-16 text-center">
            <Link
              to="/shop"
              className="link-underline inline-block pb-1 text-sm tracking-wide opacity-60 transition-opacity hover:opacity-100"
            >
              View all
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Philosophy ---- */}
      <section className="px-gutter py-section">
        <AnimateIn className="mx-auto max-w-content text-center">
          <blockquote className="font-serif text-display italic text-balance">
            &ldquo;We make clothes for
            <br className="hidden sm:block" /> people who wear them.&rdquo;
          </blockquote>
        </AnimateIn>
      </section>

      {/* ---- Gallery Feed ---- */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div
            className="columns-2 md:columns-3"
            style={{ columnGap: "clamp(12px, 2vw, 20px)" }}
          >
            {gallery.map((img, i) => (
              <AnimateIn key={i} delay={Math.min(i * 80, 400)}>
                <div className="mb-3 break-inside-avoid overflow-hidden md:mb-5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-smooth hover:scale-[1.02]"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
