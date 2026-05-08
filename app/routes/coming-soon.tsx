import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "idontwear" },
  { name: "description", content: "Coming soon." },
  { name: "theme-color", content: "#F7F6F3" },
];

export default function ComingSoon() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-gutter">
      {/* Subtle background lines */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 120px, rgba(12,12,12,0.15) 120px, rgba(12,12,12,0.15) 121px)",
        }}
      />

      <div className="w-full max-w-md text-center">
        {/* Brand mark */}
        <div className="mb-16">
          <h1 className="font-serif text-display tracking-tight">idontwear</h1>
        </div>

        {/* Coming soon */}
        <p className="mb-20 text-sm tracking-[0.2em] opacity-40">
          COMING SOON
        </p>

        {/* Email capture */}
        <div className="mx-auto max-w-xs">
          <div className="group flex items-center border-b border-idw-black/20 transition-colors focus-within:border-idw-accent">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-3 text-center text-sm outline-none placeholder:text-idw-stone/50"
              aria-label="Email address"
            />
            <button
              className="py-3 pl-3 opacity-30 transition-opacity hover:opacity-80"
              aria-label="Subscribe"
            >
              <svg
                width="16"
                height="16"
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
          <p className="mt-4 text-xs opacity-30">Leave your email.</p>
        </div>
      </div>

      {/* Bottom text */}
      <p className="fixed bottom-6 text-[10px] tracking-widest opacity-20">
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
