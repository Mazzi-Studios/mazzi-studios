import { useEffect, useState } from 'react';

// ─── Shared defs ──────────────────────────────────────────────────────────────
function Defs() {
  return (
    <defs>
      {/* Ambient atmosphere */}
      <radialGradient id="pinkAtmo" cx="68%" cy="35%" r="55%">
        <stop offset="0%" stopColor="#EB2571" stopOpacity="0.20" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cyanAtmo" cx="18%" cy="70%" r="48%">
        <stop offset="0%" stopColor="#2AC4EA" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="pinkAtmo2" cx="28%" cy="28%" r="52%">
        <stop offset="0%" stopColor="#EB2571" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cyanAtmo2" cx="78%" cy="66%" r="48%">
        <stop offset="0%" stopColor="#2AC4EA" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>

      {/* Piece aura — large soft halo placed behind each silhouette */}
      <radialGradient id="auraPink" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EB2571" stopOpacity="0.16" />
        <stop offset="70%" stopColor="#EB2571" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="auraCyan" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2AC4EA" stopOpacity="0.14" />
        <stop offset="70%" stopColor="#2AC4EA" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0" />
      </radialGradient>

      {/* Patterns */}
      <pattern id="dotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="rgba(235,37,113,0.20)" />
      </pattern>
      <pattern id="dotGridCyan" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(42,196,234,0.14)" />
      </pattern>
      <pattern id="chessGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="40" height="40" fill="rgba(235,37,113,0.035)" />
        <rect x="40" y="40" width="40" height="40" fill="rgba(235,37,113,0.035)" />
      </pattern>
      <pattern id="chessGridCyan" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="40" height="40" fill="rgba(42,196,234,0.030)" />
        <rect x="40" y="40" width="40" height="40" fill="rgba(42,196,234,0.030)" />
      </pattern>

      {/* Fades */}
      <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="58%" stopColor="#080810" stopOpacity="0" />
        <stop offset="100%" stopColor="#080810" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#080810" stopOpacity="0.85" />
        <stop offset="35%" stopColor="#080810" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="rightFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="65%" stopColor="#080810" stopOpacity="0" />
        <stop offset="100%" stopColor="#080810" stopOpacity="0.75" />
      </linearGradient>

      {/* Node glow — crisp inner + soft outer bloom */}
      <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="bloom" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feColorMatrix in="blur" type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="vivid" />
        <feComposite in="SourceGraphic" in2="vivid" operator="over" />
      </filter>
    </defs>
  );
}

// ─── Editorial corner brackets — shared across all variants ───────────────────
function Brackets({ color = 'rgba(235,37,113,0.35)', size = 28, pad = 20 }: {
  color?: string; size?: number; pad?: number;
}) {
  const W = 1440; const H = 860; const s = size; const p = pad;
  return (
    <g stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="square">
      <path d={`M ${p + s},${p} L ${p},${p} L ${p},${p + s}`} />
      <path d={`M ${W - p - s},${p} L ${W - p},${p} L ${W - p},${p + s}`} />
      <path d={`M ${p + s},${H - p} L ${p},${H - p} L ${p},${H - p - s}`} />
      <path d={`M ${W - p - s},${H - p} L ${W - p},${H - p} L ${W - p},${H - p - s}`} />
    </g>
  );
}

// ─── Variant A: Chess Knight · connected PCB traces · pink dominant ───────────
function VariantA() {
  const gl = [0, 80, 160, 240, 320, 400, 480, 560, 640];
  return (
    <>
      <rect width="1440" height="860" fill="url(#dotGrid)" />
      <rect width="1440" height="860" fill="url(#pinkAtmo)" />
      <rect width="1440" height="860" fill="url(#cyanAtmo)" />

      {/* Chess board — right */}
      <g transform="translate(740, 40)" opacity="0.17">
        <rect width="640" height="640" fill="url(#chessGrid)" />
        {gl.map((v, i) => (
          <g key={i}>
            <line x1={v} y1="0" x2={v} y2="640" stroke="rgba(235,37,113,0.28)" strokeWidth="0.5" />
            <line x1="0" y1={v} x2="640" y2={v} stroke="rgba(235,37,113,0.28)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Piece aura */}
      <ellipse cx="1180" cy="320" rx="280" ry="340" fill="url(#auraPink)" />

      {/* Knight silhouette — geometric horse-head, facing left */}
      <g transform="translate(1010, 55)" opacity="0.082" fill="#EB2571">
        <ellipse cx="130" cy="522" rx="96" ry="15" />
        <rect x="84" y="485" width="92" height="38" />
        <rect x="96" y="320" width="70" height="168" />
        {/* Neck */}
        <path d="M 96,320 L 96,230 Q 110,190 148,165 L 200,155 L 215,210 L 175,220 Q 155,235 155,260 L 155,320 Z" />
        {/* Head protrudes right */}
        <path d="M 148,165 L 220,120 L 240,105 L 255,125 L 235,145 L 220,155 L 215,210 Z" />
        {/* Ear */}
        <path d="M 218,120 L 228,90 L 244,112 Z" />
        {/* Eye */}
        <circle cx="238" cy="128" r="6" fill="#2AC4EA" opacity="0.9" />
        {/* Mane */}
        <path d="M 155,175 Q 170,160 185,155 Q 195,152 200,155" fill="none" stroke="#EB2571" strokeWidth="8" opacity="0.5" />
      </g>

      {/* PCB traces — connected L-shaped paths, pink */}
      <g stroke="rgba(235,37,113,0.24)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,195 L 340,195 L 340,315 L 0,315" />
        <path d="M 0,455 L 260,455 L 260,315" />
        <path d="M 340,455 L 340,555 L 0,555" />
        <path d="M 1100,140 L 1440,140" />
        <path d="M 1100,140 L 1100,415 L 1180,415" />
        <path d="M 1180,275 L 1440,275" />
      </g>
      {/* PCB traces — cyan */}
      <g stroke="rgba(42,196,234,0.17)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,675 L 420,675 L 420,595 L 500,595 L 500,860" />
        <path d="M 1300,595 L 1440,595" />
        <path d="M 260,315 L 260,455" />
      </g>

      {/* Nodes */}
      <g filter="url(#bloom)">
        <circle cx="340" cy="195" r="3.5" fill="#EB2571" opacity="0.90" />
        <circle cx="340" cy="315" r="3" fill="#EB2571" opacity="0.75" />
        <circle cx="260" cy="455" r="3.5" fill="#EB2571" opacity="0.80" />
        <circle cx="1100" cy="140" r="4" fill="#EB2571" opacity="0.65" />
        <circle cx="1100" cy="415" r="3" fill="#EB2571" opacity="0.55" />
        <circle cx="420" cy="675" r="4" fill="#2AC4EA" opacity="0.80" />
        <circle cx="500" cy="595" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="1300" cy="595" r="4" fill="#2AC4EA" opacity="0.75" />
      </g>
      <circle cx="340" cy="195" r="13" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.22" />
      <circle cx="420" cy="675" r="16" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.20" />
      <circle cx="1100" cy="140" r="11" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.18" />

      {/* Human network — top right */}
      <g transform="translate(1265, 618)" opacity="0.16" strokeWidth="1.5" fill="none">
        <circle cx="0" cy="0" r="14" fill="rgba(235,37,113,0.30)" stroke="#EB2571" />
        <circle cx="80" cy="-42" r="10" fill="rgba(42,196,234,0.22)" stroke="#2AC4EA" />
        <circle cx="68" cy="58" r="12" fill="rgba(235,37,113,0.22)" stroke="#EB2571" />
        <circle cx="-58" cy="48" r="8" fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-40" cy="-50" r="7" fill="rgba(42,196,234,0.14)" stroke="#2AC4EA" />
        <line x1="12" y1="-6" x2="70" y2="-36" stroke="rgba(42,196,234,0.50)" />
        <line x1="12" y1="6" x2="56" y2="50" stroke="rgba(235,37,113,0.50)" />
        <line x1="-14" y1="4" x2="-50" y2="42" stroke="rgba(245,240,235,0.28)" />
        <line x1="-12" y1="-4" x2="-34" y2="-44" stroke="rgba(42,196,234,0.28)" />
        <line x1="80" y1="-30" x2="70" y2="46" stroke="rgba(42,196,234,0.20)" />
      </g>

      <Brackets color="rgba(235,37,113,0.32)" />
      <rect width="1440" height="860" fill="url(#leftFade)" />
    </>
  );
}

// ─── Variant B: Chess Bishop · diagonal connected paths · cyan dominant ────────
function VariantB() {
  const gl = [0, 80, 160, 240, 320, 400, 480, 560, 640];
  return (
    <>
      <rect width="1440" height="860" fill="url(#dotGridCyan)" />
      <rect width="1440" height="860" fill="url(#cyanAtmo2)" />
      <rect width="1440" height="860" fill="url(#pinkAtmo2)" />

      {/* Chess board — left */}
      <g transform="translate(60, 115)" opacity="0.14">
        <rect width="640" height="640" fill="url(#chessGridCyan)" />
        {gl.map((v, i) => (
          <g key={i}>
            <line x1={v} y1="0" x2={v} y2="640" stroke="rgba(42,196,234,0.26)" strokeWidth="0.5" />
            <line x1="0" y1={v} x2="640" y2={v} stroke="rgba(42,196,234,0.26)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Piece aura */}
      <ellipse cx="1130" cy="320" rx="260" ry="320" fill="url(#auraCyan)" />

      {/* Bishop silhouette — tall, elegant */}
      <g transform="translate(1040, 42)" opacity="0.085" fill="#2AC4EA">
        <ellipse cx="110" cy="540" rx="88" ry="14" />
        <rect x="66" y="500" width="88" height="40" />
        <rect x="88" y="278" width="44" height="226" />
        <rect x="73" y="178" width="74" height="105" />
        <path d="M 73,186 Q 110,145 147,186" fill="#2AC4EA" />
        <ellipse cx="110" cy="136" rx="36" ry="54" />
        <ellipse cx="110" cy="80" rx="14" ry="10" />
        <circle cx="110" cy="66" r="10" />
        {/* Eye slit */}
        <rect x="97" y="130" width="26" height="7" fill="#EB2571" opacity="0.95" />
      </g>

      {/* Diagonal connected traces — cyan */}
      <g stroke="rgba(42,196,234,0.22)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 720,0 L 0,720" />
        <path d="M 920,0 L 200,720" />
        <path d="M 1120,0 L 720,400 L 820,500" />
        <path d="M 1440,80 L 1060,500" />
      </g>
      {/* Cross-axis anchors — pink */}
      <g stroke="rgba(235,37,113,0.18)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,0 L 380,380 L 380,500 L 0,500" />
        <path d="M 0,200 L 280,480" />
        <path d="M 1440,320 L 1220,540 L 1320,680" />
      </g>
      {/* Dashed vertical accent lines */}
      <g stroke="rgba(42,196,234,0.11)" strokeWidth="1" fill="none" strokeDasharray="5 9">
        <line x1="360" y1="0" x2="360" y2="860" />
        <line x1="760" y1="0" x2="760" y2="860" />
        <line x1="1110" y1="0" x2="1110" y2="860" />
      </g>

      {/* Nodes */}
      <g filter="url(#bloom)">
        <circle cx="720" cy="0" r="3.5" fill="#2AC4EA" opacity="0.80" />
        <circle cx="200" cy="520" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="380" cy="380" r="4" fill="#EB2571" opacity="0.80" />
        <circle cx="380" cy="500" r="3" fill="#EB2571" opacity="0.65" />
        <circle cx="820" cy="500" r="3.5" fill="#2AC4EA" opacity="0.65" />
        <circle cx="1060" cy="500" r="4" fill="#2AC4EA" opacity="0.70" />
      </g>
      <circle cx="380" cy="380" r="14" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.22" />
      <circle cx="1060" cy="500" r="16" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.20" />

      {/* Human network — bottom left */}
      <g transform="translate(125, 686)" opacity="0.16" strokeWidth="1.5" fill="none">
        <circle cx="0" cy="0" r="16" fill="rgba(42,196,234,0.28)" stroke="#2AC4EA" />
        <circle cx="88" cy="-36" r="11" fill="rgba(235,37,113,0.22)" stroke="#EB2571" />
        <circle cx="76" cy="56" r="13" fill="rgba(42,196,234,0.22)" stroke="#2AC4EA" />
        <circle cx="-64" cy="40" r="9" fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-44" cy="-52" r="8" fill="rgba(235,37,113,0.14)" stroke="#EB2571" />
        <line x1="14" y1="-6" x2="77" y2="-31" stroke="rgba(235,37,113,0.50)" />
        <line x1="14" y1="8" x2="63" y2="49" stroke="rgba(42,196,234,0.50)" />
        <line x1="-16" y1="4" x2="-55" y2="36" stroke="rgba(245,240,235,0.28)" />
        <line x1="-14" y1="-5" x2="-38" y2="-46" stroke="rgba(235,37,113,0.28)" />
      </g>

      <Brackets color="rgba(42,196,234,0.30)" />
      <rect width="1440" height="860" fill="url(#leftFade)" />
    </>
  );
}

// ─── Variant C: Chess Queen · radial command burst · balanced pink+cyan ────────
function VariantC() {
  const gl = [0, 80, 160, 240, 320, 400, 480, 560, 640];
  const fX = 1310; const fY = 430;
  const spokes = Array.from({ length: 22 }, (_, i) => 142 + i * 8);
  return (
    <>
      <rect width="1440" height="860" fill="url(#dotGrid)" />
      <rect width="1440" height="860" fill="url(#pinkAtmo)" />
      <rect width="1440" height="860" fill="url(#cyanAtmo2)" />

      {/* Chess board — center-right, slight rotation */}
      <g transform="translate(660, 48) rotate(3, 320, 320)" opacity="0.15">
        <rect width="640" height="640" fill="url(#chessGrid)" />
        {gl.map((v, i) => (
          <g key={i}>
            <line x1={v} y1="0" x2={v} y2="640" stroke="rgba(235,37,113,0.26)" strokeWidth="0.5" />
            <line x1="0" y1={v} x2="640" y2={v} stroke="rgba(235,37,113,0.26)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Piece aura */}
      <ellipse cx="1090" cy="310" rx="310" ry="370" fill="url(#auraPink)" />

      {/* Queen silhouette — regal, 5-pointed crown */}
      <g transform="translate(935, 28)" opacity="0.085" fill="#EB2571">
        <ellipse cx="128" cy="548" rx="103" ry="17" />
        <rect x="79" y="496" width="102" height="52" />
        <path d="M 81,496 L 79,338 L 181,338 L 179,496 Z" />
        <rect x="95" y="288" width="68" height="54" />
        <rect x="83" y="178" width="92" height="114" />
        <rect x="79" y="152" width="100" height="30" />
        {/* Five crown peaks */}
        <polygon points="79,152 95,96 111,152" />
        <polygon points="105,152 121,82 137,152" />
        <polygon points="131,152 147,90 163,152" />
        <polygon points="155,152 171,100 179,152" />
        <polygon points="79,152 92,116 107,152" />
        {/* Crown jewels */}
        <circle cx="128" cy="108" r="9" fill="#2AC4EA" opacity="0.95" />
        <circle cx="92" cy="118" r="5" fill="#2AC4EA" opacity="0.65" />
        <circle cx="164" cy="122" r="5" fill="#2AC4EA" opacity="0.65" />
      </g>

      {/* Radial burst from focal right */}
      <g stroke="rgba(235,37,113,0.14)" strokeWidth="1" fill="none">
        {spokes.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const len = 720 + (i % 4) * 60;
          return (
            <line key={i} x1={fX} y1={fY}
              x2={fX + Math.cos(rad) * len}
              y2={fY + Math.sin(rad) * len} />
          );
        })}
      </g>

      {/* Connected PCB anchor grid — left quadrant */}
      <g stroke="rgba(42,196,234,0.20)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,240 L 560,240 L 560,480 L 0,480" />
        <path d="M 0,680 L 380,680 L 380,480" />
        <path d="M 120,240 L 120,480" />
        <path d="M 360,240 L 360,680" />
      </g>
      <g stroke="rgba(235,37,113,0.15)" strokeWidth="1" fill="none" strokeDasharray="3 7">
        <line x1="600" y1="0" x2="600" y2="860" />
      </g>

      {/* Nodes */}
      <g filter="url(#bloom)">
        <circle cx="120" cy="240" r="4" fill="#2AC4EA" opacity="0.85" />
        <circle cx="360" cy="240" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="560" cy="240" r="3.5" fill="#2AC4EA" opacity="0.65" />
        <circle cx="560" cy="480" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="120" cy="480" r="3" fill="#EB2571" opacity="0.70" />
        <circle cx="360" cy="680" r="4" fill="#EB2571" opacity="0.75" />
        <circle cx={fX} cy={fY} r="5" fill="#EB2571" opacity="0.38" />
      </g>
      <circle cx="120" cy="240" r="14" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.22" />
      <circle cx="560" cy="480" r="13" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.18" />
      <circle cx={fX} cy={fY} r="22" fill="none" stroke="#EB2571" strokeWidth="1" opacity="0.15" />
      <circle cx={fX} cy={fY} r="42" fill="none" stroke="#EB2571" strokeWidth="0.6" opacity="0.08" />

      {/* Human network — mid left */}
      <g transform="translate(92, 428)" opacity="0.15" strokeWidth="1.5" fill="none">
        <circle cx="0" cy="0" r="14" fill="rgba(235,37,113,0.28)" stroke="#EB2571" />
        <circle cx="70" cy="-50" r="10" fill="rgba(42,196,234,0.22)" stroke="#2AC4EA" />
        <circle cx="78" cy="46" r="11" fill="rgba(235,37,113,0.22)" stroke="#EB2571" />
        <circle cx="-55" cy="-36" r="8" fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-50" cy="52" r="9" fill="rgba(42,196,234,0.16)" stroke="#2AC4EA" />
        <line x1="12" y1="-5" x2="60" y2="-44" stroke="rgba(42,196,234,0.45)" />
        <line x1="12" y1="5" x2="67" y2="39" stroke="rgba(235,37,113,0.45)" />
        <line x1="-12" y1="-5" x2="-47" y2="-31" stroke="rgba(245,240,235,0.32)" />
        <line x1="-12" y1="5" x2="-42" y2="45" stroke="rgba(42,196,234,0.32)" />
        <line x1="70" y1="-38" x2="72" y2="35" stroke="rgba(235,37,113,0.20)" />
      </g>

      <Brackets />
      <rect width="1440" height="860" fill="url(#leftFade)" />
    </>
  );
}

// ─── Variant D: Chess Rook · orthogonal fortress grid · structured ─────────────
function VariantD() {
  const gl = [0, 80, 160, 240, 320, 400, 480, 560, 640];
  return (
    <>
      <rect width="1440" height="860" fill="url(#dotGrid)" />
      <rect width="1440" height="860" fill="url(#cyanAtmo)" />
      <rect width="1440" height="860" fill="url(#pinkAtmo2)" />

      {/* Chess board — bottom right, large */}
      <g transform="translate(800, 178)" opacity="0.20">
        <rect width="640" height="640" fill="url(#chessGrid)" />
        {gl.map((v, i) => (
          <g key={i}>
            <line x1={v} y1="0" x2={v} y2="640" stroke="rgba(235,37,113,0.28)" strokeWidth="0.5" />
            <line x1="0" y1={v} x2="640" y2={v} stroke="rgba(235,37,113,0.28)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Piece aura */}
      <ellipse cx="1150" cy="360" rx="270" ry="330" fill="url(#auraPink)" />

      {/* Rook silhouette — blocky castle */}
      <g transform="translate(985, 55)" opacity="0.085" fill="#EB2571">
        <rect x="42" y="540" width="176" height="28" />
        <rect x="68" y="198" width="124" height="345" />
        {/* Three merlons */}
        <rect x="52" y="98" width="50" height="106" />
        <rect x="125" y="98" width="50" height="106" />
        <rect x="198" y="98" width="50" height="106" />
        {/* Crenels between merlons */}
        <rect x="68" y="198" width="57" height="14" fill="#080810" opacity="0.5" />
        <rect x="143" y="198" width="49" height="14" fill="#080810" opacity="0.5" />
        {/* Arrow slit */}
        <rect x="118" y="318" width="24" height="64" fill="#080810" opacity="0.55" />
        {/* Window */}
        <rect x="118" y="440" width="24" height="24" fill="#2AC4EA" opacity="0.85" />
      </g>

      {/* Connected orthogonal traces — pink, left quadrant */}
      <g stroke="rgba(235,37,113,0.22)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,160 L 720,160 L 720,320 L 0,320" />
        <path d="M 0,480 L 560,480 L 560,640 L 0,640" />
        <path d="M 160,160 L 160,480" />
        <path d="M 320,160 L 320,640" />
        <path d="M 480,160 L 480,480" />
        <path d="M 640,160 L 640,320" />
      </g>
      {/* Cyan traces — right edge incoming */}
      <g stroke="rgba(42,196,234,0.18)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 1440,178 L 800,178 L 800,580 L 900,580" />
        <path d="M 1440,378 L 900,378 L 900,760" />
        <path d="M 1440,578 L 960,578" />
      </g>

      {/* Dense intersection nodes */}
      <g filter="url(#glow)">
        {[160, 320, 480, 640].map(x =>
          [160, 320, 480].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#EB2571"
              opacity={x + y < 640 ? 0.65 : x + y < 900 ? 0.48 : 0.32} />
          ))
        )}
      </g>
      <g filter="url(#bloom)">
        <circle cx="800" cy="178" r="4" fill="#2AC4EA" opacity="0.82" />
        <circle cx="800" cy="580" r="4" fill="#2AC4EA" opacity="0.75" />
        <circle cx="900" cy="378" r="3.5" fill="#2AC4EA" opacity="0.70" />
        <circle cx="720" cy="160" r="4" fill="#EB2571" opacity="0.75" />
        <circle cx="560" cy="480" r="3.5" fill="#EB2571" opacity="0.68" />
      </g>
      {[160, 320, 480].map(x => (
        <circle key={x} cx={x} cy={160} r="11" fill="none" stroke="#EB2571" strokeWidth="0.8" opacity="0.20" />
      ))}
      <circle cx="800" cy="178" r="16" fill="none" stroke="#2AC4EA" strokeWidth="1" opacity="0.22" />

      {/* Human network — top left */}
      <g transform="translate(82, 138)" opacity="0.14" strokeWidth="1.5" fill="none">
        <circle cx="0" cy="0" r="13" fill="rgba(235,37,113,0.28)" stroke="#EB2571" />
        <circle cx="75" cy="-32" r="9" fill="rgba(42,196,234,0.22)" stroke="#2AC4EA" />
        <circle cx="65" cy="55" r="11" fill="rgba(235,37,113,0.22)" stroke="#EB2571" />
        <circle cx="-55" cy="46" r="8" fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-38" cy="-46" r="7" fill="rgba(42,196,234,0.14)" stroke="#2AC4EA" />
        <line x1="11" y1="-5" x2="66" y2="-27" stroke="rgba(42,196,234,0.50)" />
        <line x1="11" y1="5" x2="54" y2="47" stroke="rgba(235,37,113,0.50)" />
        <line x1="-13" y1="4" x2="-46" y2="38" stroke="rgba(245,240,235,0.30)" />
        <line x1="-11" y1="-4" x2="-32" y2="-40" stroke="rgba(42,196,234,0.28)" />
        <line x1="75" y1="-20" x2="67" y2="44" stroke="rgba(42,196,234,0.22)" />
      </g>

      <Brackets color="rgba(235,37,113,0.30)" />
      <rect width="1440" height="860" fill="url(#leftFade)" />
    </>
  );
}

// ─── Variant E: Chess King · command radar · concentric authority rings ─────────
function VariantE() {
  const gl = [0, 80, 160, 240, 320, 400, 480, 560, 640];
  const cx = 460; const cy = 415;
  const rings = [72, 152, 252, 374, 514, 672];

  return (
    <>
      <rect width="1440" height="860" fill="url(#dotGrid)" />
      <rect width="1440" height="860" fill="url(#pinkAtmo)" />
      <rect width="1440" height="860" fill="url(#cyanAtmo2)" />

      {/* Chess board — upper right, slight counter-rotation */}
      <g transform="translate(768, 22) rotate(-4, 320, 320)" opacity="0.16">
        <rect width="640" height="640" fill="url(#chessGrid)" />
        {gl.map((v, i) => (
          <g key={i}>
            <line x1={v} y1="0" x2={v} y2="640" stroke="rgba(235,37,113,0.26)" strokeWidth="0.5" />
            <line x1="0" y1={v} x2="640" y2={v} stroke="rgba(235,37,113,0.26)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Piece aura */}
      <ellipse cx="1120" cy="330" rx="290" ry="355" fill="url(#auraPink)" />

      {/* King silhouette — commanding, cross on crown */}
      <g transform="translate(998, 32)" opacity="0.088" fill="#EB2571">
        <ellipse cx="112" cy="540" rx="96" ry="16" />
        <rect x="67" y="504" width="90" height="38" />
        <rect x="79" y="306" width="66" height="200" />
        <rect x="92" y="280" width="40" height="30" />
        <rect x="73" y="244" width="78" height="40" />
        <rect x="77" y="212" width="70" height="36" />
        {/* Crown — three wide battlements */}
        <rect x="77" y="158" width="20" height="58" />
        <rect x="103" y="146" width="20" height="70" />
        <rect x="129" y="158" width="20" height="58" />
        {/* Cross horizontal */}
        <rect x="90" y="110" width="44" height="14" />
        {/* Cross vertical */}
        <rect x="105" y="84" width="14" height="56" />
        {/* Cross jewel */}
        <circle cx="112" cy="96" r="9" fill="#2AC4EA" opacity="0.95" />
        <circle cx="90" cy="117" r="4" fill="#2AC4EA" opacity="0.68" />
        <circle cx="134" cy="117" r="4" fill="#2AC4EA" opacity="0.68" />
      </g>

      {/* Concentric radar rings */}
      {rings.map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none"
          stroke={i % 2 === 0 ? 'rgba(235,37,113,0.15)' : 'rgba(42,196,234,0.10)'}
          strokeWidth={i === 0 ? 1.8 : 1}
          strokeDasharray={i >= 3 ? '6 11' : undefined} />
      ))}

      {/* Connected spoke paths radiating from command center */}
      <g stroke="rgba(235,37,113,0.20)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 0,415 L 388,415" />
        <path d="M 0,295 L 240,295 L 240,415" />
        <path d="M 0,535 L 280,535 L 280,415" />
        <path d="M 300,0 L 300,290 L 460,290" />
        <path d="M 460,540 L 460,820 L 200,820" />
      </g>
      <g stroke="rgba(42,196,234,0.16)" strokeWidth="1" fill="none" strokeLinecap="square">
        <path d="M 1440,215 L 900,215 L 640,415" />
        <path d="M 1440,615 L 880,615 L 640,415" />
        <path d="M 1440,415 L 532,415" />
      </g>

      {/* Nodes */}
      <g filter="url(#bloom)">
        <circle cx={cx} cy={cy} r="5" fill="#EB2571" opacity="0.90" />
        <circle cx="240" cy="415" r="3.5" fill="#EB2571" opacity="0.70" />
        <circle cx="280" cy="415" r="3.5" fill="#EB2571" opacity="0.65" />
        <circle cx="300" cy="290" r="3" fill="#EB2571" opacity="0.60" />
        <circle cx="900" cy="215" r="4" fill="#2AC4EA" opacity="0.78" />
        <circle cx="880" cy="615" r="4" fill="#2AC4EA" opacity="0.72" />
        <circle cx="1440" cy="415" r="3" fill="#2AC4EA" opacity="0.50" />
      </g>
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#EB2571" strokeWidth="1.2" opacity="0.28" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="#EB2571" strokeWidth="0.6" opacity="0.14" />

      {/* Human network — bottom left, most connections (King) */}
      <g transform="translate(115, 696)" opacity="0.15" strokeWidth="1.5" fill="none">
        <circle cx="0" cy="0" r="18" fill="rgba(235,37,113,0.28)" stroke="#EB2571" />
        <circle cx="82" cy="-52" r="12" fill="rgba(42,196,234,0.22)" stroke="#2AC4EA" />
        <circle cx="88" cy="52" r="13" fill="rgba(235,37,113,0.22)" stroke="#EB2571" />
        <circle cx="-72" cy="-46" r="9" fill="rgba(245,240,235,0.12)" stroke="rgba(245,240,235,0.35)" />
        <circle cx="-68" cy="52" r="10" fill="rgba(42,196,234,0.16)" stroke="#2AC4EA" />
        <circle cx="0" cy="-96" r="9" fill="rgba(235,37,113,0.18)" stroke="#EB2571" />
        <circle cx="162" cy="0" r="7" fill="rgba(42,196,234,0.13)" stroke="#2AC4EA" />
        <line x1="15" y1="-6" x2="70" y2="-46" stroke="rgba(42,196,234,0.45)" />
        <line x1="15" y1="6" x2="76" y2="46" stroke="rgba(235,37,113,0.45)" />
        <line x1="-15" y1="-6" x2="-62" y2="-40" stroke="rgba(245,240,235,0.30)" />
        <line x1="-15" y1="6" x2="-58" y2="46" stroke="rgba(42,196,234,0.30)" />
        <line x1="0" y1="-18" x2="0" y2="-87" stroke="rgba(235,37,113,0.38)" />
        <line x1="18" y1="0" x2="155" y2="0" stroke="rgba(42,196,234,0.28)" />
        <line x1="82" y1="-40" x2="86" y2="40" stroke="rgba(42,196,234,0.20)" />
      </g>

      <Brackets color="rgba(235,37,113,0.32)" />
      <rect width="1440" height="860" fill="url(#leftFade)" />
    </>
  );
}

const VARIANTS = [VariantA, VariantB, VariantC, VariantD, VariantE];
const HERO_VARIANT_KEY = 'mazzi-home-hero-variant';

export function HeroBg() {
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    let nextIndex = 1;
    try {
      const previousIndex = Number.parseInt(
        window.localStorage.getItem(HERO_VARIANT_KEY) ?? '0',
        10,
      );
      nextIndex = Number.isFinite(previousIndex)
        ? (previousIndex + 1) % VARIANTS.length
        : 1;
      window.localStorage.setItem(HERO_VARIANT_KEY, String(nextIndex));
    } catch {
      // Keep the deterministic first variant when storage is unavailable.
    }
    setVariantIndex(nextIndex);
  }, []);

  const Variant = VARIANTS[variantIndex];

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 860"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <Defs />
      <Variant />
      <rect width="1440" height="860" fill="url(#bottomFade)" />
    </svg>
  );
}
