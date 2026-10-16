import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/layout/BackLink";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import { getPlatform, platforms } from "@/data/platforms";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  return platform ? { title: platform.name, description: platform.tagline } : {};
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  return (
    <section className="section">
      <div className="container detail">
        <BackLink href="/platforms">All platforms</BackLink>
        <div className="meta">
          <StatusBadge status={platform.status} />
          <span className="muted">{platform.category}</span>
        </div>
        <h1>{platform.name}</h1>
        <p className="muted">{platform.description}</p>
        <div>
          <h2>What it offers</h2>
          <ul className="features">
            {platform.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        {platform.url ? (
          <div><Button href={platform.url} external>Open platform</Button></div>
        ) : (
          <p className="muted">This platform is not open to the public yet.</p>
        )}
      </div>
    </section>
  );
}
