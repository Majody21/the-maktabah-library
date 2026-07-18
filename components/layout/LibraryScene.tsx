/**
 * Candlelit reading-room backdrop for the "Library" theme.
 * Pure SVG, animated with CSS (flame sway, glow breathing, drifting dust);
 * all motion stops under prefers-reduced-motion, leaving a still scene.
 * Hidden unless <html> carries the `library` class (see globals.css).
 */

const SPINES: ReadonlyArray<readonly [number, number]> = [
  [18, 74], [22, 66], [15, 80], [24, 70], [17, 62], [20, 78],
  [14, 68], [23, 72], [16, 64], [21, 76], [18, 60], [19, 70],
];

const SPINE_COLORS = [
  "#5b4530", "#6d5238", "#49392a", "#74563a",
  "#4e5a45", "#6e4a38", "#3f3020", "#64503a",
];

function ShelfCase({ x }: { x: number }) {
  const shelfYs = [188, 298, 408, 518, 628];
  return (
    <g>
      <rect x={x} y={90} width={260} height={640} fill="#241809" />
      <rect
        x={x}
        y={90}
        width={260}
        height={640}
        fill="none"
        stroke="#3a2a16"
        strokeWidth={7}
      />
      {shelfYs.map((sy, row) => (
        <g key={sy}>
          <rect x={x + 6} y={sy} width={248} height={9} fill="#332412" />
          {(() => {
            const books = [];
            let bx = x + 14;
            for (let i = 0; i < SPINES.length; i++) {
              const [w, h] = SPINES[(i + row * 3) % SPINES.length];
              if (bx + w > x + 250) break;
              books.push(
                <rect
                  key={i}
                  x={bx}
                  y={sy - h}
                  width={w}
                  height={h}
                  rx={1.5}
                  fill={SPINE_COLORS[(i + row * 2) % SPINE_COLORS.length]}
                  opacity={0.85}
                />
              );
              bx += w + 3;
            }
            return books;
          })()}
        </g>
      ))}
    </g>
  );
}

export default function LibraryScene() {
  return (
    <div className="library-scene" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ls-room" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b1f12" />
            <stop offset="1" stopColor="#1a120a" />
          </linearGradient>
          <linearGradient id="ls-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#26190e" />
            <stop offset="1" stopColor="#150e07" />
          </linearGradient>
          <radialGradient id="ls-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#f7cd76" stopOpacity="0.5" />
            <stop offset="0.45" stopColor="#c2924a" stopOpacity="0.22" />
            <stop offset="1" stopColor="#c2924a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ls-glow-core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffe9b0" stopOpacity="0.75" />
            <stop offset="1" stopColor="#f2b649" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ls-vignette" cx="0.5" cy="0.42" r="0.75">
            <stop offset="0.55" stopColor="#060402" stopOpacity="0" />
            <stop offset="1" stopColor="#060402" stopOpacity="0.65" />
          </radialGradient>
        </defs>

        {/* room */}
        <rect width="1440" height="900" fill="url(#ls-room)" />
        <rect y="720" width="1440" height="180" fill="url(#ls-floor)" />
        <path d="M0 760 H1440 M0 805 H1440 M0 855 H1440" stroke="#0e0905" strokeWidth="2" opacity="0.55" />

        {/* rug */}
        <ellipse cx="860" cy="812" rx="300" ry="42" fill="#342414" opacity="0.4" />
        <ellipse cx="860" cy="812" rx="252" ry="33" fill="none" stroke="#543f26" strokeWidth="2" opacity="0.3" />

        {/* bookshelves */}
        <ShelfCase x={60} />
        <ShelfCase x={1120} />

        {/* chair */}
        <g opacity="0.95">
          <ellipse cx="680" cy="795" rx="72" ry="14" fill="#0c0805" opacity="0.5" />
          <rect x="636" y="545" width="10" height="150" rx="2" fill="#2a1d0f" />
          <rect x="712" y="545" width="10" height="150" rx="2" fill="#2a1d0f" />
          <rect x="636" y="566" width="86" height="9" rx="2" fill="#31220f" />
          <rect x="636" y="592" width="86" height="9" rx="2" fill="#31220f" />
          <rect x="628" y="676" width="102" height="12" rx="2" fill="#332412" />
          <rect x="632" y="688" width="9" height="104" fill="#281b0d" />
          <rect x="717" y="688" width="9" height="104" fill="#281b0d" />
        </g>

        {/* table */}
        <g>
          <ellipse cx="880" cy="795" rx="175" ry="20" fill="#0c0805" opacity="0.5" />
          <rect x="770" y="654" width="13" height="138" fill="#2f2113" />
          <rect x="975" y="654" width="13" height="138" fill="#2f2113" />
          <rect x="800" y="654" width="11" height="118" fill="#281b0d" />
          <rect x="948" y="654" width="11" height="118" fill="#281b0d" />
          <rect x="745" y="636" width="270" height="18" rx="3" fill="#3d2b18" />
          <path d="M748 636 H1012" stroke="#5a422a" strokeWidth="2" opacity="0.6" />
        </g>

        {/* open book on the table */}
        <g transform="rotate(-2 830 626)">
          <path d="M795 630 L860 620 L862 633 L797 643 Z" fill="#d9caa9" opacity="0.92" />
          <path d="M862 633 L860 620 L925 626 L924 639 Z" fill="#cfbf9d" opacity="0.92" />
          <path d="M861 620.5 L861.5 633.5" stroke="#9c8a68" strokeWidth="1.4" opacity="0.7" />
          <path d="M804 630 L850 623 M805 634 L851 627 M806 638 L845 632" stroke="#9c8a68" strokeWidth="0.9" opacity="0.55" />
          <path d="M870 626 L916 630 M869 630 L915 634 M871 634 L910 637" stroke="#9c8a68" strokeWidth="0.9" opacity="0.55" />
        </g>

        {/* candle */}
        <g>
          <ellipse cx="950" cy="634" rx="17" ry="4.5" fill="#57401f" />
          <ellipse cx="950" cy="631.5" rx="11" ry="3" fill="#6b4f28" />
          <rect x="944" y="592" width="12" height="40" rx="2.5" fill="#e6d5ac" />
          <path d="M944 600 q-2.5 6 0 11" stroke="#f2e5c2" strokeWidth="2.4" fill="none" opacity="0.8" />
          <line x1="950" y1="592" x2="950" y2="585" stroke="#3a2c18" strokeWidth="1.6" />
        </g>

        {/* candle glow (breathes) */}
        <circle className="scene-glow" cx="950" cy="570" r="230" fill="url(#ls-glow)" />
        <circle className="scene-glow-core" cx="950" cy="574" r="62" fill="url(#ls-glow-core)" />

        {/* flame (sways) */}
        <g className="scene-flame">
          <path
            d="M950 586 C942 574 944 559 950 551 C956 559 958 574 950 586 Z"
            fill="#f4b64d"
            opacity="0.95"
          />
          <path
            d="M950 583 C946 575 947 565 950 560 C953 565 954 575 950 583 Z"
            fill="#ffe6a8"
          />
        </g>

        {/* drifting dust motes */}
        <circle className="scene-mote" cx="905" cy="640" r="2" fill="#ecd398" />
        <circle className="scene-mote scene-mote-2" cx="975" cy="600" r="1.8" fill="#ecd398" />
        <circle className="scene-mote scene-mote-3" cx="940" cy="662" r="1.5" fill="#ecd398" />
        <circle className="scene-mote scene-mote-4" cx="1005" cy="630" r="2.2" fill="#ecd398" />
        <circle className="scene-mote scene-mote-5" cx="872" cy="612" r="1.7" fill="#ecd398" />

        {/* vignette */}
        <rect width="1440" height="900" fill="url(#ls-vignette)" />
      </svg>
      <div className="scene-veil" />
    </div>
  );
}
