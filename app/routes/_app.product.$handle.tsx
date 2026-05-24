import { useParams, Link } from "@remix-run/react";
import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { products, placeholderColors } from "~/lib/data";
import { AnimateIn } from "~/components/AnimateIn";
import { ProductCard } from "~/components/ProductCard";

export const meta: MetaFunction = ({ params }) => {
  const product = products.find((p) => p.handle === params.handle);
  if (!product) return [{ title: "Not Found | idontwear" }];
  return [
    { title: `${product.name} | idontwear` },
    { name: "description", content: product.description },
  ];
};

export default function ProductDetail() {
  const { handle } = useParams();
  const product = products.find((p) => p.handle === handle);
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="px-gutter pb-section pt-32">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-serif text-heading mb-4">Not found.</h1>
          <p className="mb-8 text-sm opacity-50">
            This product doesn&apos;t exist. Yet.
          </p>
          <Link
            to="/shop"
            className="link-underline inline-block pb-1 text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const related = products
    .filter((p) => p.category === product.category && p.handle !== handle)
    .slice(0, 3);

  return (
    <div className="px-gutter pb-section pt-28 md:pt-36">
      <div className="mx-auto max-w-content">
        {/* Breadcrumb */}
        <AnimateIn>
          <nav className="mb-8 flex items-center gap-2 text-xs opacity-40">
            <Link to="/shop" className="transition-opacity hover:opacity-100">
              Shop
            </Link>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
          </nav>
        </AnimateIn>

        {/* Product layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <div>
            {(product.images && product.images.length > 1) ? (
              <div className="space-y-3">
                {product.images.map((src, i) => (
                  <AnimateIn key={src} delay={Math.min(i * 100, 400)}>
                    <div className="img-grain aspect-[3/4] overflow-hidden bg-idw-linen">
                      <img
                        src={src}
                        alt={`${product.name} - ${i + 1}`}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </AnimateIn>
                ))}
              </div>
            ) : (
              <AnimateIn>
                <div className="img-grain aspect-[3/4] overflow-hidden bg-idw-linen">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundColor:
                          placeholderColors[product.handle] || "#E8DFD0",
                      }}
                    />
                  )}
                </div>
              </AnimateIn>
            )}
          </div>

          {/* Details column */}
          <AnimateIn delay={150} className="lg:sticky lg:top-28 lg:self-start">
            <div>
              <p className="text-subheading mb-3 uppercase tracking-widest opacity-40">
                {product.category}
              </p>
              <h1 className="font-serif text-heading">{product.name}</h1>
              <p className="mt-3 text-lg tabular-nums opacity-60">
                ${product.price}
              </p>

              <p className="mt-8 max-w-md text-sm leading-relaxed opacity-70">
                {product.description}
              </p>

              {/* Add to bag */}
              <button className="btn-fill mt-10 w-full border border-idw-black py-4 text-sm tracking-wider transition-colors lg:max-w-sm">
                Add to bag
              </button>

              {/* Collapsible details */}
              <div className="mt-10 divide-y divide-idw-black/10 border-t border-idw-black/10">
                <Collapsible
                  title="Details"
                  content={product.details}
                  isOpen={openSection === "details"}
                  onToggle={() =>
                    setOpenSection(
                      openSection === "details" ? null : "details"
                    )
                  }
                />
                <Collapsible
                  title="Materials"
                  content={product.materials}
                  isOpen={openSection === "materials"}
                  onToggle={() =>
                    setOpenSection(
                      openSection === "materials" ? null : "materials"
                    )
                  }
                />
                <Collapsible
                  title="Sizing"
                  content="See our size guide for detailed measurements. We recommend sizing up if you prefer a relaxed fit."
                  isOpen={openSection === "sizing"}
                  onToggle={() =>
                    setOpenSection(
                      openSection === "sizing" ? null : "sizing"
                    )
                  }
                />
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-section border-t border-idw-black/10 pt-section">
            <AnimateIn>
              <p className="mb-10 text-subheading uppercase tracking-widest opacity-40">
                You might also like
              </p>
            </AnimateIn>
            <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <AnimateIn key={p.handle}>
                  <ProductCard product={p} />
                </AnimateIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Collapsible({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-sm tracking-wide"
      >
        <span>{title}</span>
        <span
          className={`text-base transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed opacity-60">{content}</p>
      </div>
    </div>
  );
}
