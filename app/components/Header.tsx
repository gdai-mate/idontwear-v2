import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const showDarkBg = scrolled || !isHome;
  const textColor = !scrolled && isHome ? "text-idw-white" : "text-idw-black";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        showDarkBg
          ? "bg-idw-white/95 backdrop-blur-sm border-b border-idw-black/5"
          : "bg-transparent"
      } ${textColor}`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-gutter py-5">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl tracking-tight transition-opacity hover:opacity-70"
        >
          idontwear
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/shop" label="Shop" />
          <NavLink to="/about" label="About" />
          <CartButton />
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 h-8 w-8 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`absolute left-1 right-1 h-px transition-all duration-300 ${
              menuOpen
                ? "top-1/2 -translate-y-px rotate-45 bg-idw-black"
                : "top-[10px] bg-current"
            }`}
          />
          <span
            className={`absolute left-1 right-1 h-px transition-all duration-300 ${
              menuOpen
                ? "top-1/2 -translate-y-px -rotate-45 bg-idw-black"
                : "top-[18px] bg-current"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-idw-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <Link
            to="/shop"
            className="font-serif text-4xl text-idw-black transition-opacity hover:opacity-60"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="font-serif text-4xl text-idw-black transition-opacity hover:opacity-60"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`link-underline text-sm tracking-wide transition-opacity ${
        isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
    >
      {label}
    </Link>
  );
}

function CartButton() {
  return (
    <button className="relative transition-opacity hover:opacity-70" aria-label="Cart">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 4.5h11l-1.2 8H4.7L3.5 4.5z" />
        <path d="M6.5 4.5V3.5a2.5 2.5 0 0 1 5 0v1" />
      </svg>
    </button>
  );
}
