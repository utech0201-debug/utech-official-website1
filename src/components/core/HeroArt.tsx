// Decorative night-city hero. Swap for a real render: put it in public/images/hero.jpg
const rnd = (n: number) => { const x = Math.sin(n * 91.7) * 10000; return x - Math.floor(x); };

const towers = Array.from({ length: 26 }, (_, i) => ({
  x: 20 + i * 30 + rnd(i) * 8,
  w: 18 + rnd(i + 3) * 14,
  h: 60 + rnd(i + 7) * 130,
}));

export default function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 800 360" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#030a1c" /><stop offset="1" stopColor="#0a2a66" />
        </linearGradient>
        <radialGradient id="globe" cx=".35" cy=".3">
          <stop offset="0" stopColor="#5fb0ff" /><stop offset=".55" stopColor="#1c5fd6" /><stop offset="1" stopColor="#06163a" />
        </radialGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a4fb8" /><stop offset="1" stopColor="#0a1d4a" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" fill="url(#sky)" />
      {Array.from({ length: 50 }, (_, i) => (
        <circle key={i} cx={rnd(i + 40) * 800} cy={rnd(i + 80) * 150} r={rnd(i) * 1.1 + .3} fill="#bcd8ff" opacity={.5} />
      ))}
      <circle cx="470" cy="120" r="125" fill="url(#globe)" />
      {[-70, -35, 0, 35, 70].map((o) => (
        <ellipse key={o} cx="470" cy="120" rx="125" ry={Math.abs(o) + 18} fill="none" stroke="#7fc0ff" strokeOpacity=".25" />
      ))}
      {[0, 40, 80, 120].map((r) => (
        <ellipse key={r} cx="470" cy="120" rx={30 + r / 1.3} ry="125" fill="none" stroke="#7fc0ff" strokeOpacity=".2" />
      ))}
      {Array.from({ length: 14 }, (_, i) => {
        const a = { x: 400 + rnd(i) * 150, y: 50 + rnd(i + 9) * 140 };
        const b = { x: 400 + rnd(i + 20) * 150, y: 50 + rnd(i + 31) * 140 };
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#9fd2ff" strokeOpacity=".5" />
            <circle cx={a.x} cy={a.y} r="2.4" fill="#d6ecff" />
          </g>
        );
      })}
      {towers.map((t, i) => (
        <g key={i} opacity={.9}>
          <rect x={t.x} y={300 - t.h} width={t.w} height={t.h + 60} fill="#071533" stroke="#1a3d86" strokeOpacity=".6" />
          {Array.from({ length: Math.floor(t.h / 14) }, (_, r) => (
            rnd(i * 31 + r) > .45 && <rect key={r} x={t.x + 3 + rnd(r + i) * (t.w - 9)} y={300 - t.h + 6 + r * 14} width="3" height="5" fill="#ffd98a" opacity=".8" />
          ))}
        </g>
      ))}
      <g>
        <rect x="560" y="120" width="240" height="240" fill="url(#glass)" stroke="#5aa2ff" strokeOpacity=".7" />
        {Array.from({ length: 6 }, (_, c) => Array.from({ length: 7 }, (_, r) => (
          <rect key={`${c}-${r}`} x={568 + c * 38} y={130 + r * 30} width="30" height="22" fill="#2f7bff" opacity={.25 + rnd(c * 7 + r) * .45} />
        )))}
        <rect x="600" y="160" width="110" height="100" fill="#06163a" stroke="#9fd2ff" strokeOpacity=".8" />
        <path d="M635 180v32a20 20 0 0 0 40 0v-32h-11v32a9 9 0 0 1-18 0v-32z" fill="#3b8bff" />
        <text x="655" y="248" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" letterSpacing="2">UTECH</text>
      </g>
      <rect y="330" width="800" height="30" fill="#04102a" />
      <rect y="334" width="800" height="3" fill="#2f7bff" opacity=".4" />
    </svg>
  );
}
