import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PlatformCard from "@/components/ui/PlatformCard";
import { platforms } from "@/data/platforms";

export const metadata: Metadata = { title: "Platforms" };

export default function PlatformsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Platform directory" intro="Every UTECH product and service, with its current status." />
        <div className="grid">
          {platforms.map((p) => <PlatformCard key={p.slug} platform={p} />)}
        </div>
      </div>
    </section>
  );
}
