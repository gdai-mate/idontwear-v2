import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer className="border-t border-idw-black/10">
      {/* Newsletter */}
      <div className="px-gutter py-section">
        <div className="mx-auto max-w-content">
          <div className="max-w-lg">
            <h3 className="font-serif text-heading mb-8">Leave your email.</h3>
            <div className="group flex items-center border-b border-idw-black/20 transition-colors focus-within:border-idw-black/50">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-idw-stone/60"
                aria-label="Email address"
              />
              <button
                className="py-3 pl-4 opacity-40 transition-opacity hover:opacity-100"
                aria-label="Subscribe"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10h12" />
                  <path d="M12 6l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-idw-black/5 px-gutter py-6">
        <div className="mx-auto flex max-w-content flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-serif text-base tracking-tight transition-opacity hover:opacity-70"
          >
            idontwear
          </Link>

          <div className="flex gap-6">
            <Link
              to="/shop"
              className="text-xs tracking-wide opacity-50 transition-opacity hover:opacity-100"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-xs tracking-wide opacity-50 transition-opacity hover:opacity-100"
            >
              About
            </Link>
          </div>

          <p className="text-xs opacity-30">
            &copy; {new Date().getFullYear()} idontwear
          </p>
        </div>
      </div>
    </footer>
  );
}
