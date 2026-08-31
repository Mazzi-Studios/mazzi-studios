// ─── PlaybookBg — hero background for the Playbook page ──────────────────────
// Motifs: fragmenting SERP (old paradigm) → AI answer card (new paradigm),
// magnifying glass, neural network, citation nodes, knowledge graph edges.
// Same structural DNA as HeroBg: dot grid, PCB traces, bloom nodes, brackets,
// atmospheric gradients, edge fades.

export function PlaybookBg() {
  // Neural network node positions (left / center-left area)
  const neuralNodes = [
    { cx: 148, cy: 310, r: 14, fill: '#EB2571', opacity: 0.30 },
    { cx: 258, cy: 228, r: 10, fill: '#2AC4EA', opacity: 0.24 },
    { cx: 322, cy: 390, r: 11, fill: '#EB2571', opacity: 0.22 },
    { cx: 198, cy: 468, r:  9, fill: '#2AC4EA', opacity: 0.20 },
    { cx:  88, cy: 418, r:  8, fill: '#F5F0EB', opacity: 0.14 },
    { cx:  80, cy: 230, r:  7, fill: '#2AC4EA', opacity: 0.18 },
    { cx: 378, cy: 298, r:  8, fill: '#EB2571', opacity: 0.18 },
  ];
  const neuralEdges: [number, number][] = [
    [0,1],[0,2],[0,4],[0,5],[1,2],[1,6],[2,3],[3,4],[2,6],[5,1]
  ];

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 860"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        {/* Atmospheres */}
        <radialGradient id="pbPinkAtmo" cx="68%" cy="38%" r="55%">
          <stop offset="0%"   stopColor="#EB2571" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="pbCyanAtmo" cx="20%" cy="65%" r="50%">
          <stop offset="0%"   stopColor="#2AC4EA" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="pbPinkAtmo2" cx="32%" cy="25%" r="48%">
          <stop offset="0%"   stopColor="#EB2571" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0"    />
        </radialGradient>

        {/* Piece auras */}
        <radialGradient id="pbAuraPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#EB2571" stopOpacity="0.16" />
          <stop offset="65%"  stopColor="#EB2571" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="pbAuraCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#2AC4EA" stopOpacity="0.13" />
          <stop offset="65%"  stopColor="#2AC4EA" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#080810" stopOpacity="0"    />
        </radialGradient>

        {/* Dot grid */}
        <pattern id="pbDotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(235,37,113,0.20)" />
        </pattern>
        <pattern id="pbDotGridCyan" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(42,196,234,0.13)" />
        </pattern>

        {/* Fades */}
        <linearGradient id="pbBottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="52%"  stopColor="#080810" stopOpacity="0" />
          <stop offset="100%" stopColor="#080810" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="pbLeftFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#080810" stopOpacity="0.90" />
          <stop offset="40%"  stopColor="#080810" stopOpacity="0"    />
        </linearGradient>
        <linearGradient id="pbRightFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="65%"  stopColor="#080810" stopOpacity="0"    />
          <stop offset="100%" stopColor="#080810" stopOpacity="0.72" />
        </linearGradient>

        {/* Glow filters */}
        <filter id="pbGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="pbBloom" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="vivid" />
          <feComposite in="SourceGraphic" in2="vivid" operator="over" />
        </filter>

        {/* Fragment mask — SERP rows fade out toward bottom */}
        <linearGradient id="pbSerpFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="1"    />
          <stop offset="55%"  stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
        <mask id="pbSerpMask">
          <rect x="0" y="0" width="460" height="520" fill="url(#pbSerpFade)" />
        </mask>
      </defs>

      {/* Dot grids */}
      <rect width="1440" height="860" fill="url(#pbDotGrid)" />
      <rect width="1440" height="860" fill="url(#pbDotGridCyan)" opacity="0.55" />

      {/* Atmospheres */}
      <rect width="1440" height="860" fill="url(#pbPinkAtmo)"  />
      <rect width="1440" height="860" fill="url(#pbCyanAtmo)"  />
      <rect width="1440" height="860" fill="url(#pbPinkAtmo2)" />

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* MAIN SILHOUETTE — right side                                           */}
      {/* Concept: classic SERP rows (old paradigm) fragmenting into an         */}
      {/* AI answer card (new paradigm). A search bar tops both.                */}
      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* Aura behind silhouette */}
      <ellipse cx="1160" cy="340" rx="300" ry="370" fill="url(#pbAuraPink)" />

      <g transform="translate(910, 52)" opacity="0.086">

        {/* ── SEARCH BAR (top) ── */}
        {/* Bar body */}
        <rect x="0" y="0" width="380" height="48" rx="6" fill="#F5F0EB" />
        {/* Placeholder dots inside bar — simulates typed query */}
        <rect x="20"  y="18" width="80"  height="12" rx="3" fill="#080810" opacity="0.25" />
        <rect x="110" y="18" width="50"  height="12" rx="3" fill="#080810" opacity="0.18" />
        <rect x="170" y="18" width="70"  height="12" rx="3" fill="#080810" opacity="0.22" />
        {/* Magnifying glass inside search bar (right side) */}
        <circle cx="344" cy="24" r="13" fill="none" stroke="#EB2571" strokeWidth="5" opacity="0.90" />
        <line   x1="353" y1="34" x2="363" y2="44" stroke="#EB2571" strokeWidth="5" strokeLinecap="round" opacity="0.90" />

        {/* ── DIVIDER LINE ── */}
        <line x1="0" y1="64" x2="380" y2="64" stroke="rgba(235,37,113,0.30)" strokeWidth="1" />

        {/* ── OLD SERP ROWS (fragmenting) ── */}
        {/* Each row = URL bar + 2 text bars, representing a blue-link result.  */}
        {/* Rows lower down are progressively more fragmented / offset.          */}

        {/* Row 1 — intact */}
        <g transform="translate(0, 80)">
          <rect x="0"   y="0"  width="50"  height="8"  rx="2" fill="#2AC4EA" opacity="0.70" />
          <rect x="0"   y="14" width="260" height="10" rx="2" fill="#F5F0EB" opacity="0.80" />
          <rect x="0"   y="30" width="310" height="7"  rx="2" fill="#F5F0EB" opacity="0.45" />
          <rect x="0"   y="41" width="220" height="7"  rx="2" fill="#F5F0EB" opacity="0.30" />
        </g>

        {/* Row 2 — slight offset, starting to fragment */}
        <g transform="translate(0, 148)">
          <rect x="6"   y="0"  width="48"  height="8"  rx="2" fill="#2AC4EA" opacity="0.55" />
          <rect x="0"   y="14" width="248" height="10" rx="2" fill="#F5F0EB" opacity="0.65" />
          <rect x="8"   y="30" width="280" height="7"  rx="2" fill="#F5F0EB" opacity="0.38" />
          <rect x="4"   y="41" width="190" height="7"  rx="2" fill="#F5F0EB" opacity="0.25" />
        </g>

        {/* Row 3 — more fragmented */}
        <g transform="translate(0, 216)">
          <rect x="12"  y="0"  width="44"  height="8"  rx="2" fill="#2AC4EA" opacity="0.40" />
          <rect x="-8"  y="14" width="220" height="10" rx="2" fill="#F5F0EB" opacity="0.50" />
          <rect x="18"  y="30" width="240" height="7"  rx="2" fill="#F5F0EB" opacity="0.28" />
          <rect x="-4"  y="41" width="160" height="7"  rx="2" fill="#F5F0EB" opacity="0.18" />
          {/* Fragment splinters */}
          <rect x="340" y="8"  width="30"  height="7"  rx="2" fill="#F5F0EB" opacity="0.18" />
          <rect x="330" y="22" width="20"  height="5"  rx="2" fill="#F5F0EB" opacity="0.12" />
        </g>

        {/* Row 4 — heavily fragmented, dissolving */}
        <g transform="translate(0, 284)">
          <rect x="22"  y="0"  width="38"  height="8"  rx="2" fill="#2AC4EA" opacity="0.24" />
          <rect x="-18" y="14" width="180" height="10" rx="2" fill="#F5F0EB" opacity="0.32" />
          <rect x="28"  y="30" width="190" height="7"  rx="2" fill="#F5F0EB" opacity="0.18" />
          {/* Scattered fragments */}
          <rect x="320" y="4"  width="40"  height="6"  rx="2" fill="#EB2571" opacity="0.22" />
          <rect x="355" y="18" width="20"  height="5"  rx="2" fill="#F5F0EB" opacity="0.12" />
          <rect x="-30" y="38" width="25"  height="5"  rx="2" fill="#2AC4EA" opacity="0.14" />
        </g>

        {/* Row 5 — almost gone */}
        <g transform="translate(0, 348)">
          <rect x="35"  y="0"  width="28"  height="8"  rx="2" fill="#2AC4EA" opacity="0.12" />
          <rect x="-30" y="14" width="130" height="10" rx="2" fill="#F5F0EB" opacity="0.18" />
          <rect x="40"  y="28" width="110" height="6"  rx="2" fill="#F5F0EB" opacity="0.10" />
          {/* Dust particles */}
          <circle cx="360" cy="10" r="3" fill="#EB2571" opacity="0.20" />
          <circle cx="380" cy="24" r="2" fill="#F5F0EB" opacity="0.14" />
          <circle cx="340" cy="32" r="2" fill="#2AC4EA" opacity="0.16" />
          <circle cx="395" cy="6"  r="2" fill="#EB2571" opacity="0.12" />
        </g>

        {/* ── TRANSITION ARROW ── pointing downward into AI answer */}
        <g transform="translate(170, 410)" opacity="0.35">
          <line x1="0" y1="0" x2="0" y2="38" stroke="#EB2571" strokeWidth="2" />
          <polygon points="-8,28 8,28 0,44" fill="#EB2571" />
        </g>

        {/* ── AI ANSWER CARD (new paradigm) — solid, confident, rising up ── */}
        <g transform="translate(-20, 465)">
          {/* Card body */}
          <rect x="0" y="0" width="420" height="148" rx="8" fill="#EB2571" opacity="0.88" />
          {/* AI sparkle / star in top-left corner */}
          <g transform="translate(16, 14)" fill="#F5F0EB" opacity="0.90">
            {/* 4-point star */}
            <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" />
          </g>
          {/* Label: "AI" */}
          <rect x="42"  y="10"  width="28" height="10" rx="2" fill="#F5F0EB" opacity="0.75" />
          {/* Answer text bars — confident, full-width, no fragmentation */}
          <rect x="16"  y="34"  width="385" height="11" rx="3" fill="#F5F0EB" opacity="0.80" />
          <rect x="16"  y="52"  width="365" height="11" rx="3" fill="#F5F0EB" opacity="0.72" />
          <rect x="16"  y="70"  width="340" height="11" rx="3" fill="#F5F0EB" opacity="0.65" />
          <rect x="16"  y="88"  width="280" height="11" rx="3" fill="#F5F0EB" opacity="0.50" />
          {/* Source citation bar */}
          <line x1="16" y1="114" x2="404" y2="114" stroke="rgba(245,240,235,0.25)" strokeWidth="1" />
          {/* Three citation source chips */}
          <rect x="16"  y="122" width="72"  height="16" rx="8" fill="rgba(245,240,235,0.18)" />
          <rect x="96"  y="122" width="60"  height="16" rx="8" fill="rgba(245,240,235,0.14)" />
          <rect x="164" y="122" width="68"  height="16" rx="8" fill="rgba(245,240,235,0.12)" />
          {/* Citation dot indicators inside chips */}
          <circle cx="27"  cy="130" r="4" fill="#2AC4EA" opacity="0.80" />
          <circle cx="107" cy="130" r="4" fill="#2AC4EA" opacity="0.70" />
          <circle cx="175" cy="130" r="4" fill="#2AC4EA" opacity="0.65" />
        </g>

        {/* ── STANDALONE MAGNIFYING GLASS — lower right of silhouette ── */}
        <g transform="translate(320, 508)" opacity="0.28">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#2AC4EA" strokeWidth="7" />
          <line   x1="52" y1="52" x2="72" y2="78"   stroke="#2AC4EA" strokeWidth="7" strokeLinecap="round" />
          {/* Inner crosshair — suggests precision/targeting */}
          <line x1="32" y1="14" x2="32" y2="50" stroke="rgba(42,196,234,0.45)" strokeWidth="1.5" />
          <line x1="14" y1="32" x2="50" y2="32" stroke="rgba(42,196,234,0.45)" strokeWidth="1.5" />
        </g>

      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* NEURAL NETWORK — left / center-left (LLM inference motif)             */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g opacity="0.18" strokeWidth="1.2" fill="none">
        {/* Edges */}
        {neuralEdges.map(([a, b], i) => (
          <line key={i}
            x1={neuralNodes[a].cx} y1={neuralNodes[a].cy}
            x2={neuralNodes[b].cx} y2={neuralNodes[b].cy}
            stroke={i % 2 === 0 ? 'rgba(235,37,113,0.55)' : 'rgba(42,196,234,0.45)'}
          />
        ))}
        {/* Node circles */}
        {neuralNodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
            fill={n.fill} fillOpacity={n.opacity}
            stroke={n.fill} strokeOpacity={n.opacity * 1.8}
          />
        ))}
      </g>

      {/* Bloom on primary neural nodes */}
      <g filter="url(#pbBloom)">
        <circle cx={neuralNodes[0].cx} cy={neuralNodes[0].cy} r="4.5" fill="#EB2571" opacity="0.85" />
        <circle cx={neuralNodes[1].cx} cy={neuralNodes[1].cy} r="3.5" fill="#2AC4EA" opacity="0.75" />
        <circle cx={neuralNodes[2].cx} cy={neuralNodes[2].cy} r="3.5" fill="#EB2571" opacity="0.70" />
        <circle cx={neuralNodes[6].cx} cy={neuralNodes[6].cy} r="3"   fill="#EB2571" opacity="0.65" />
      </g>
      {/* Ripple rings on main node */}
      <circle cx={neuralNodes[0].cx} cy={neuralNodes[0].cy} r="24" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.22" />
      <circle cx={neuralNodes[0].cx} cy={neuralNodes[0].cy} r="40" fill="none" stroke="#EB2571" strokeWidth="0.6" opacity="0.11" />

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* KNOWLEDGE GRAPH — mid-right, below main silhouette                    */}
      {/* Entity nodes connected by labeled edges (citation web)                */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g transform="translate(1080, 650)" opacity="0.15" strokeWidth="1.4" fill="none">
        {/* Hub node */}
        <circle cx="0"   cy="0"   r="16" fill="rgba(235,37,113,0.30)" stroke="#EB2571" />
        {/* Spoke nodes */}
        <circle cx="90"  cy="-44" r="11" fill="rgba(42,196,234,0.24)"  stroke="#2AC4EA" />
        <circle cx="84"  cy="60"  r="12" fill="rgba(235,37,113,0.22)"  stroke="#EB2571" />
        <circle cx="-72" cy="52"  r="9"  fill="rgba(245,240,235,0.14)" stroke="rgba(245,240,235,0.40)" />
        <circle cx="-58" cy="-56" r="8"  fill="rgba(42,196,234,0.16)"  stroke="#2AC4EA" />
        <circle cx="152" cy="8"   r="7"  fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        {/* Edges */}
        <line x1="13"  y1="-7"  x2="79"  y2="-38" stroke="rgba(42,196,234,0.55)"  />
        <line x1="13"  y1="7"   x2="71"  y2="52"  stroke="rgba(235,37,113,0.55)"  />
        <line x1="-14" y1="5"   x2="-62" y2="46"  stroke="rgba(245,240,235,0.30)" />
        <line x1="-12" y1="-5"  x2="-50" y2="-50" stroke="rgba(42,196,234,0.30)"  />
        <line x1="16"  y1="0"   x2="145" y2="8"   stroke="rgba(245,240,235,0.25)" />
        <line x1="90"  y1="-33" x2="82"  y2="48"  stroke="rgba(42,196,234,0.20)"  />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* PCB TRACES — left quadrant, same L-path style as HeroBg               */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g stroke="rgba(235,37,113,0.22)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,190 L 330,190 L 330,330 L 0,330" />
        <path d="M 0,470 L 250,470 L 250,330" />
        <path d="M 330,470 L 330,580 L 0,580" />
        <path d="M 1090,128 L 1440,128" />
        <path d="M 1090,128 L 1090,430 L 1180,430" />
      </g>
      <g stroke="rgba(42,196,234,0.17)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,690 L 410,690 L 410,610 L 490,610 L 490,860" />
        <path d="M 1300,610 L 1440,610" />
        <path d="M 250,330 L 250,470" />
        <path d="M 570,0 L 570,190 L 700,190 L 700,0" />
      </g>
      {/* Dashed accent verticals */}
      <g stroke="rgba(235,37,113,0.08)" strokeWidth="1" strokeDasharray="5 10">
        <line x1="570" y1="0"   x2="570"  y2="860" />
        <line x1="880" y1="0"   x2="880"  y2="860" />
      </g>
      <g stroke="rgba(42,196,234,0.07)" strokeWidth="1" strokeDasharray="4 12">
        <line x1="440" y1="0"   x2="440"  y2="860" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* BLOOM NODES at PCB intersections                                       */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g filter="url(#pbBloom)">
        <circle cx="330"  cy="190" r="3.5" fill="#EB2571" opacity="0.90" />
        <circle cx="330"  cy="330" r="3"   fill="#EB2571" opacity="0.75" />
        <circle cx="250"  cy="470" r="3.5" fill="#EB2571" opacity="0.80" />
        <circle cx="1090" cy="128" r="4"   fill="#EB2571" opacity="0.65" />
        <circle cx="1090" cy="430" r="3"   fill="#EB2571" opacity="0.55" />
        <circle cx="410"  cy="690" r="4"   fill="#2AC4EA" opacity="0.80" />
        <circle cx="490"  cy="610" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="1300" cy="610" r="4"   fill="#2AC4EA" opacity="0.75" />
        <circle cx="570"  cy="190" r="3.5" fill="#2AC4EA" opacity="0.68" />
        <circle cx="700"  cy="190" r="3"   fill="#2AC4EA" opacity="0.60" />
      </g>
      <circle cx="330"  cy="190" r="13" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.20" />
      <circle cx="410"  cy="690" r="16" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.18" />
      <circle cx="1090" cy="128" r="11" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.16" />
      <circle cx="570"  cy="190" r="12" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.15" />

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* CORNER BRACKETS                                                         */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <g stroke="rgba(235,37,113,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="square">
        <path d="M 48,20  L 20,20  L 20,48"  />
        <path d="M 1392,20  L 1420,20  L 1420,48"  />
        <path d="M 48,840 L 20,840 L 20,812" />
        <path d="M 1392,840 L 1420,840 L 1420,812" />
      </g>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* EDGE FADES                                                              */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <rect width="1440" height="860" fill="url(#pbLeftFade)"  />
      <rect width="1440" height="860" fill="url(#pbBottomFade)" />
    </svg>
  );
}
