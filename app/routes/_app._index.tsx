import { Link } from "@remix-run/react";
import { products } from "~/lib/data";
import { ProductCard } from "~/components/ProductCard";
import { AnimateIn } from "~/components/AnimateIn";

export default function Home() {
  const featured = [
    products.find((p) => p.handle === "waxed-canvas-tote")!,
    products.find((p) => p.handle === "indigo-work-shirt")!,
    products.find((p) => p.handle === "canvas-fatigue")!,
  ];

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative flex h-svh items-end">
        {/* Background with moody gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(160deg, #1a1a2e 0%, #16213e 35%, #0f3460 65%, #0C0C0C 100%)",
          }}
        />

        {/* Subtle texture lines */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.1) 80px, rgba(255,255,255,0.1) 81px)",
          }}
        />

        <div className="w-full px-gutter pb-12 md:pb-16">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="h-8 w-px animate-pulse bg-idw-white/20" />
        </div>
      </section>

      {/* ---- Brand Statement ---- */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <AnimateIn className="md:col-span-3">
              <div
                className="aspect-[4/5] w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #E8DFD0 0%, #C4B9A8 60%, #A09B93 100%)",
                }}
              />
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

      {/* ---- Editorial Strip ---- */}
      <section className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { bg: "#2C3E5A", aspect: "aspect-[3/4]" },
              { bg: "#8B6F47", aspect: "aspect-square" },
              { bg: "#C4B9A8", aspect: "aspect-square" },
              { bg: "#4A4A48", aspect: "aspect-[3/4]" },
            ].map((block, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div
                  className={`${block.aspect} w-full`}
                  style={{ backgroundColor: block.bg }}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
