import { Link } from "@remix-run/react";
import { useState, useMemo } from "react";
import type { Product } from "~/lib/data";
import { placeholderColors } from "~/lib/data";

const hoverTags = [
  "nice.",
  "yeah.",
  "want.",
  "good choice.",
  "ooh.",
  "this one.",
  "solid.",
  "into it.",
];

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  const tag = useMemo(
    () => hoverTags[Math.floor(Math.random() * hoverTags.length)],
    []
  );

  const tagPos = useMemo(
    () => ({
      top: `${20 + Math.random() * 40}%`,
      left: `${10 + Math.random() * 50}%`,
    }),
    []
  );

  return (
    <Link
      to={`/product/${product.handle}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="img-grain relative aspect-[3/4] overflow-hidden bg-idw-linen">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            style={{
              backgroundColor:
                placeholderColors[product.handle] || "#E8DFD0",
            }}
          />
        )}

        {/* Playful hover tag */}
        <span
          className={`absolute z-10 rounded-full bg-idw-white/95 px-3 py-1.5 text-[11px] tracking-wide text-idw-black shadow-sm backdrop-blur-sm transition-all duration-300 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
          style={tagPos}
        >
          {tag}
        </span>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-sm tracking-wide">{product.name}</h3>
        <span className="text-sm tabular-nums opacity-50">${product.price}</span>
      </div>
    </Link>
  );
}
