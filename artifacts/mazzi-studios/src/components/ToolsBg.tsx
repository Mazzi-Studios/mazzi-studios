// ─── ToolsBg — hero background for the Tools page ─────────────────────────────
// Same structural DNA as HeroBg: dot grid, PCB traces, bloom nodes, brackets,
// atmospheric gradients, edge fades.
// Motifs: bar-chart silhouette, cursor arrow, marketing funnel, wrench.

export function ToolsBg() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 860"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        {/* Ambient atmosphere */}
        <radialGradient id="tbPinkAtmo" cx="72%" cy="38%" r="52%">
          <stop offset="0%" stopColor="#EB2571" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tbCyanAtmo" cx="22%" cy="68%" r="46%">
          <stop offset="0%" stopColor="#2AC4EA" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0" />
        </radialGradient>

        {/* Piece aura — soft halo behind bar-chart */}
        <radialGradient id="tbAuraPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EB2571" stopOpacity="0.14" />
          <stop offset="70%" stopColor="#EB2571" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tbAuraCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2AC4EA" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#2AC4EA" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0" />
        </radialGradient>

        {/* Dot grid patterns */}
        <pattern id="tbDotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(235,37,113,0.18)" />
        </pattern>
        <pattern id="tbDotGridCyan" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(42,196,234,0.12)" />
        </pattern>

        {/* Fades */}
        <linearGradient id="tbBottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="55%" stopColor="#080810" stopOpacity="0" />
          <stop offset="100%" stopColor="#080810" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="tbLeftFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#080810" stopOpacity="0.88" />
          <stop offset="38%" stopColor="#080810" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tbRightFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="65%" stopColor="#080810" stopOpacity="0" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0.72" />
        </linearGradient>

        {/* Glow filters */}
        <filter id="tbGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="tbBloom" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="vivid" />
          <feComposite in="SourceGraphic" in2="vivid" operator="over" />
        </filter>
      </defs>

      {/* ── Dot grids ── */}
      <rect width="1440" height="860" fill="url(#tbDotGrid)" />
      <rect width="1440" height="860" fill="url(#tbDotGridCyan)" opacity="0.6" />

      {/* ── Atmosphere ── */}
      <rect width="1440" height="860" fill="url(#tbPinkAtmo)" />
      <rect width="1440" height="860" fill="url(#tbCyanAtmo)" />

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* BAR CHART silhouette — right side, large, like the chess pieces        */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <ellipse cx="1140" cy="360" rx="290" ry="360" fill="url(#tbAuraPink)" />

      {/* Bar chart body — 5 bars of ascending then descending height */}
      <g transform="translate(930, 55)" opacity="0.082" fill="#EB2571">
        {/* X-axis baseline */}
        <rect x="20" y="498" width="370" height="12" />
        {/* Y-axis */}
        <rect x="20" y="80" width="10" height="420" />

        {/* Bar 1 — short */}
        <rect x="52"  y="358" width="52" height="140" />
        {/* Bar 2 — medium */}
        <rect x="122" y="258" width="52" height="240" />
        {/* Bar 3 — tallest — accent cyan cap */}
        <rect x="192" y="138" width="52" height="360" />
        <rect x="192" y="128" width="52" height="18" fill="#2AC4EA" opacity="0.95" />
        {/* Bar 4 — high */}
        <rect x="262" y="198" width="52" height="300" />
        {/* Bar 5 — medium-low */}
        <rect x="332" y="298" width="52" height="200" />

        {/* Trend line connecting bar tops */}
        <polyline
          points="78,352  148,252  218,132  288,192  358,292"
          fill="none" stroke="#2AC4EA" strokeWidth="6" opacity="0.60"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Trend line dots */}
        <circle cx="78"  cy="352" r="8" fill="#2AC4EA" opacity="0.75" />
        <circle cx="148" cy="252" r="8" fill="#2AC4EA" opacity="0.75" />
        <circle cx="218" cy="132" r="10" fill="#EB2571" opacity="0.95" />
        <circle cx="288" cy="192" r="8" fill="#2AC4EA" opacity="0.75" />
        <circle cx="358" cy="292" r="8" fill="#2AC4EA" opacity="0.65" />

        {/* Y-axis tick marks */}
        <rect x="10" y="198" width="20" height="3" opacity="0.5" />
        <rect x="10" y="298" width="20" height="3" opacity="0.5" />
        <rect x="10" y="398" width="20" height="3" opacity="0.5" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* CURSOR / POINTER arrow — pointing at the bar chart                    */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(1122, 188)" opacity="0.095" fill="#F5F0EB">
        {/* Standard mouse cursor shape */}
        <polygon points="0,0 0,52 14,38 22,56 30,52 22,34 40,34" />
        {/* Cursor dot / hotspot */}
        <circle cx="0" cy="0" r="4" fill="#EB2571" opacity="0.80" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* MARKETING FUNNEL — upper-left quadrant, subtle                        */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(54, 110)" opacity="0.075" fill="#2AC4EA">
        {/* Funnel — three stacked trapezoids getting narrower */}
        <polygon points="0,0   220,0   195,52  25,52"  />
        <polygon points="30,60  190,60  162,116 58,116" />
        <polygon points="65,124 155,124 140,186 80,186" />
        {/* Funnel stem */}
        <rect x="93" y="192" width="34" height="52" />
        {/* Drop at bottom */}
        <ellipse cx="110" cy="256" rx="20" ry="12" />

        {/* Funnel stage labels — tick lines */}
        <line x1="225" y1="26"  x2="260" y2="26"  stroke="#2AC4EA" strokeWidth="2" opacity="0.55" />
        <line x1="196" y1="88"  x2="260" y2="88"  stroke="#2AC4EA" strokeWidth="2" opacity="0.45" />
        <line x1="160" y1="155" x2="260" y2="155" stroke="#2AC4EA" strokeWidth="2" opacity="0.38" />
        <line x1="140" y1="220" x2="260" y2="220" stroke="#2AC4EA" strokeWidth="2" opacity="0.30" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* WRENCH — bottom right corner, small decorative element                */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(1295, 640) rotate(-38)" opacity="0.065" fill="#EB2571">
        {/* Wrench handle */}
        <rect x="-10" y="0" width="20" height="120" rx="4" />
        {/* Wrench head — open-end spanner shape */}
        <rect x="-28" y="-48" width="56" height="52" rx="8" />
        <rect x="-36" y="-28" width="18" height="30" rx="3" fill="#080810" opacity="0.7" />
        <rect x="18"  y="-28" width="18" height="30" rx="3" fill="#080810" opacity="0.7" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* GEAR — bottom-left accent                                             */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(430, 720)" opacity="0.06" fill="#EB2571">
        {/* Simple gear: ring + 8 teeth */}
        <circle cx="0" cy="0" r="36" />
        <circle cx="0" cy="0" r="18" fill="#080810" opacity="0.9" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = Math.cos(rad) * 30; const y1 = Math.sin(rad) * 30;
          const x2 = Math.cos(rad) * 50; const y2 = Math.sin(rad) * 50;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EB2571" strokeWidth="10" strokeLinecap="round" />;
        })}
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* PCB traces — pink, left / center quadrant                            */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g stroke="rgba(235,37,113,0.22)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,185 L 320,185 L 320,325 L 0,325" />
        <path d="M 0,455 L 240,455 L 240,325" />
        <path d="M 320,455 L 320,575 L 0,575" />
        <path d="M 1080,130 L 1440,130" />
        <path d="M 1080,130 L 1080,420 L 1160,420" />
        <path d="M 1160,270 L 1440,270" />
      </g>

      {/* PCB traces — cyan */}
      <g stroke="rgba(42,196,234,0.17)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,685 L 400,685 L 400,600 L 480,600 L 480,860" />
        <path d="M 1280,600 L 1440,600" />
        <path d="M 240,325 L 240,455" />
        <path d="M 560,0 L 560,185 L 680,185 L 680,0" />
      </g>

      {/* Dashed vertical accent */}
      <g stroke="rgba(235,37,113,0.09)" strokeWidth="1" strokeDasharray="5 10">
        <line x1="560" y1="0" x2="560" y2="860" />
        <line x1="880" y1="0" x2="880" y2="860" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* BLOOM NODES at trace intersections                                    */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g filter="url(#tbBloom)">
        <circle cx="320"  cy="185" r="3.5" fill="#EB2571" opacity="0.90" />
        <circle cx="320"  cy="325" r="3"   fill="#EB2571" opacity="0.75" />
        <circle cx="240"  cy="455" r="3.5" fill="#EB2571" opacity="0.80" />
        <circle cx="1080" cy="130" r="4"   fill="#EB2571" opacity="0.65" />
        <circle cx="1080" cy="420" r="3"   fill="#EB2571" opacity="0.55" />
        <circle cx="400"  cy="685" r="4"   fill="#2AC4EA" opacity="0.80" />
        <circle cx="480"  cy="600" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="1280" cy="600" r="4"   fill="#2AC4EA" opacity="0.75" />
        <circle cx="560"  cy="185" r="3.5" fill="#2AC4EA" opacity="0.68" />
        <circle cx="680"  cy="185" r="3"   fill="#2AC4EA" opacity="0.60" />
      </g>
      {/* Outer ripple rings */}
      <circle cx="320"  cy="185" r="13" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.20" />
      <circle cx="400"  cy="685" r="16" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.18" />
      <circle cx="1080" cy="130" r="11" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.16" />
      <circle cx="560"  cy="185" r="12" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.16" />

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* NETWORK CLUSTER — top-right (same style as HeroBg human network)     */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(1265, 618)" opacity="0.15" strokeWidth="1.5" fill="none">
        <circle cx="0"   cy="0"   r="14" fill="rgba(235,37,113,0.28)" stroke="#EB2571" />
        <circle cx="80"  cy="-42" r="10" fill="rgba(42,196,234,0.22)"  stroke="#2AC4EA" />
        <circle cx="68"  cy="58"  r="12" fill="rgba(235,37,113,0.22)"  stroke="#EB2571" />
        <circle cx="-58" cy="48"  r="8"  fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-40" cy="-50" r="7"  fill="rgba(42,196,234,0.14)"  stroke="#2AC4EA" />
        <line x1="12"  y1="-6"  x2="70"  y2="-36" stroke="rgba(42,196,234,0.50)" />
        <line x1="12"  y1="6"   x2="56"  y2="50"  stroke="rgba(235,37,113,0.50)" />
        <line x1="-14" y1="4"   x2="-50" y2="42"  stroke="rgba(245,240,235,0.28)" />
        <line x1="-12" y1="-4"  x2="-34" y2="-44" stroke="rgba(42,196,234,0.28)" />
        <line x1="80"  y1="-30" x2="70"  y2="46"  stroke="rgba(42,196,234,0.20)" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* CORNER BRACKETS                                                       */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g stroke="rgba(235,37,113,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="square">
        {/* Top-left */}
        <path d="M 48,20 L 20,20 L 20,48" />
        {/* Top-right */}
        <path d="M 1392,20 L 1420,20 L 1420,48" />
        {/* Bottom-left */}
        <path d="M 48,840 L 20,840 L 20,812" />
        {/* Bottom-right */}
        <path d="M 1392,840 L 1420,840 L 1420,812" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* EDGE FADES — left vignette + bottom fade                              */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <rect width="1440" height="860" fill="url(#tbLeftFade)" />
      <rect width="1440" height="860" fill="url(#tbBottomFade)" />
    </svg>
  );
}
