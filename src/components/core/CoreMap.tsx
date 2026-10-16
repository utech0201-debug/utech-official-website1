"use client";
import Link from "next/link";
import { useState } from "react";
import type { Platform } from "@/types/platform";
import StatusBadge from "@/components/ui/StatusBadge";

const C = 200, R = 138, W = 112, H = 34;

export default function CoreMap({ platforms }: { platforms: Platform[] }) {
  const [active, setActive] = useState(platforms[0]?.slug);
  const current = platforms.find((p) => p.slug === active);

  return (
    <div className="coremap">
      <svg viewBox="0 0 400 400" role="group" aria-label="Map of UTECH platforms">
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#2f7bff" stopOpacity=".9" />
            <stop offset="60%" stopColor="#2f7bff" stopOpacity=".18" />
            <stop offset="100%" stopColor="#2f7bff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={C} cy={C} r={190} fill="url(#coreGlow)" opacity=".5" />
        <g className="orbit orbit-a"><circle cx={C} cy={C} r={R} className="map-ring" /></g>
        <g className="orbit orbit-b">
          <circle cx={C} cy={C} r={R + 46} className="map-ring faint" />
          <circle cx={C} cy={C - R - 46} r={4} className="map-dot" />
          <circle cx={C + R + 46} cy={C} r={3} className="map-dot green" />
        </g>
        {platforms.map((p, i) => {
          const a = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
          const x = C + R * Math.cos(a), y = C + R * Math.sin(a);
          const on = p.slug === active;
          return (
            <g key={p.slug}>
              <line x1={C} y1={C} x2={x} y2={y} className={`map-line${on ? " on" : ""}`} />
              <g
                className={`map-node${on ? " on" : ""}`}
                tabIndex={0}
                role="button"
                aria-pressed={on}
                aria-label={p.name}
                onClick={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
                onMouseEnter={() => setActive(p.slug)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(p.slug)}
              >
                <rect x={x - W / 2} y={y - H / 2} width={W} height={H} rx={H / 2} />
                <text x={x} y={y + 4} textAnchor="middle">{p.name}</text>
              </g>
            </g>
          );
        })}
        <circle cx={C} cy={C} r={46} className="map-halo" />
        <circle cx={C} cy={C} r={34} className="map-core" />
        <text x={C} y={C + 6} textAnchor="middle" className="map-core-label">UTECH</text>
      </svg>
      {current && (
        <div className="card map-panel" aria-live="polite">
          <StatusBadge status={current.status} />
          <h3>{current.name}</h3>
          <p className="muted">{current.tagline}</p>
          <Link href={`/platforms/${current.slug}`} className="btn btn-text">View {current.name}</Link>
        </div>
      )}
    </div>
  );
}
