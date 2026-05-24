import { useSearchParams } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { products, categories } from "~/lib/data";
import { ProductCard } from "~/components/ProductCard";
import { AnimateIn } from "~/components/AnimateIn";

export const meta: MetaFunction = () => [
  { title: "Shop | idontwear" },
  { name: "description", content: "Browse the full collection." },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-section">
      {/* Shop hero */}
      <div className="mb-12 h-[35vh] w-full overflow-hidden bg-idw-stone pt-24 md:mb-16 md:h-[40vh]">
        <img
          src="/images/shoot/bags-collection.jpg"
          alt="The collection"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-content px-gutter">
        {/* Page title */}
        <AnimateIn>
          <h1 className="font-serif text-heading mb-12 md:mb-16">Shop</h1>
        </AnimateIn>

        {/* Category filter */}
        <AnimateIn delay={100}>
          <div className="mb-12 flex flex-wrap gap-3 md:mb-16 md:gap-5">
            <FilterButton
              label="All"
              isActive={activeCategory === "all"}
              onClick={() => setSearchParams({})}
            />
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onClick={() => setSearchParams({ category: cat })}
              />
            ))}
          </div>
        </AnimateIn>

        {/* Product grid */}
        <div className="stagger-children grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <AnimateIn key={product.handle}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm opacity-50">Nothing here yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm capitalize tracking-wide transition-all duration-300 ${
        isActive
          ? "opacity-100"
          : "opacity-30 hover:opacity-70"
      }`}
    >
      {label}
    </button>
  );
}
