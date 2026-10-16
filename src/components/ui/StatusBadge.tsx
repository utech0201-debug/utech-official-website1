import type { PlatformStatus } from "@/types/platform";

const labels: Record<PlatformStatus, string> = {
  live: "Live",
  "in-development": "In development",
  planned: "Planned",
};

export default function StatusBadge({ status }: { status: PlatformStatus }) {
  return <span className={`badge badge-${status}`}>{labels[status]}</span>;
}
