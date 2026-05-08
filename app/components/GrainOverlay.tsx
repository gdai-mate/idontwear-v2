export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    >
      <svg className="absolute h-0 w-0">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div
        className="h-full w-full opacity-[0.025]"
        style={{ filter: "url(#grain-filter)" }}
      />
    </div>
  );
}
