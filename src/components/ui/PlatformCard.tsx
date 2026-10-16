import Link from "next/link";
import type { Platform } from "@/types/platform";
import StatusBadge from "./StatusBadge";

export default function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <Link href={`/platforms/${platform.slug}`} className="card">
      <StatusBadge status={platform.status} />
      <h3>{platform.name}</h3>
      <p className="muted">{platform.tagline}</p>
      <span className="muted">{platform.category}</span>
    </Link>
  );
}
