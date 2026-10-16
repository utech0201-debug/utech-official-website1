import Link from "next/link";

// Photos: first four reuse the domain images; Projects and Learning use /images/platform/.
const nodes = [
  { label: "Technology", sub: "Build the foundation", glyph: "</>", color: "#2f7bff", href: "/projects", side: "L", img: "/images/domains/software.jpg" },
  { label: "Products", sub: "Tools for creators", glyph: "▣", color: "#2ee59d", href: "/platforms", side: "L", img: "/images/domains/products.jpg" },
  { label: "Projects", sub: "Build real solutions", glyph: "◆", color: "#f5b942", href: "/projects", side: "L", img: "/images/platform/projects.jpg" },
  { label: "AI", sub: "Smarter solutions", glyph: "AI", color: "#8b7bff", href: "/platforms/experiments", side: "R", img: "/images/domains/ai.jpg" },
  { label: "Security", sub: "Safer tomorrow", glyph: "⛉", color: "#2ee5d0", href: "/platforms/cyber-labs", side: "R", img: "/images/domains/security.jpg" },
  { label: "Learning", sub: "Gain skills", glyph: "◎", color: "#6a7bff", href: "/platforms/learning-hub", side: "R", img: "/images/platform/learning.jpg" },
] as const;

const pos = [[-82, -118], [-150, 0], [-82, 118], [82, -118], [150, 0], [82, 118]];
const NR = 31;

export default function EcosystemWheel() {
  return (
    <svg className="wheel" viewBox="-285 -175 570 350" role="group" aria-label="UTECH Core and its six divisions">
      <defs>
        <radialGradient id="wg"><stop offset="0" stopColor="#2f7bff" stopOpacity=".55" /><stop offset="1" stopColor="#2f7bff" stopOpacity="0" /></radialGradient>
        {nodes.map((_, i) => (
          <clipPath id={`wc${i}`} key={i}><circle cx={pos[i][0]} cy={pos[i][1]} r={NR - 2} /></clipPath>
        ))}
      </defs>
      <circle r="170" fill="url(#wg)" />
      <circle r="130" className="map-ring" />
      <circle r="92" className="map-ring faint" />
      {nodes.map((n, i) => {
        const [x, y] = pos[i];
        const left = n.side === "L";
        const tx = x + (left ? -42 : 42);
        return (
          <Link key={n.label} href={n.href} aria-label={n.label}>
            <g className="wnode">
              <line x1="0" y1="0" x2={x} y2={y} stroke={n.color} strokeOpacity=".4" strokeDasharray="4 5" />
              <circle cx={x} cy={y} r={NR} fill="#0a1a38" />
              <text x={x} y={y + 5} textAnchor="middle" fill={n.color} fontSize="15" fontWeight="700">{n.glyph}</text>
              <image href={n.img} x={x - NR} y={y - NR} width={NR * 2} height={NR * 2} preserveAspectRatio="xMidYMid slice" clipPath={`url(#wc${i})`} />
              <circle cx={x} cy={y} r={NR - 1} fill="none" stroke={n.color} strokeWidth="2.5" />
              <text x={tx} y={y - 3} textAnchor={left ? "end" : "start"} className="wlabel">{n.label}</text>
              <text x={tx} y={y + 15} textAnchor={left ? "end" : "start"} className="wsub">{n.sub}</text>
            </g>
          </Link>
        );
      })}
      <circle r="62" fill="#07142e" stroke="#2f7bff" strokeWidth="3" style={{ filter: "drop-shadow(0 0 16px #2f7bff)" }} />
      <path d="M-14 -34v26a14 14 0 0 0 28 0v-26h-8v26a6 6 0 0 1-12 0v-26z" fill="#3b8bff" />
      <text y="14" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700" letterSpacing="1">UTECH</text>
      <text y="32" textAnchor="middle" fill="#2ee59d" fontSize="13" fontWeight="600">CORE</text>
    </svg>
  );
}
