import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/layout/BackLink";
import Button from "@/components/ui/Button";
import { getProject, projects, statusLabel } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.name, description: p.description } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <section className="section">
      <div className="container detail">
        <BackLink href="/projects">All projects</BackLink>
        <div className="meta">
          <span className="badge badge-in-development">{statusLabel[project.status]}</span>
        </div>
        <h1>{project.name}</h1>
        <p className="muted">{project.description}</p>
        <div>
          <h2>Built with</h2>
          <ul className="features">{project.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="actions">
          {project.repoUrl && <Button href={project.repoUrl} external>View on GitHub</Button>}
          {project.demoUrl && <Button href={project.demoUrl} external variant="secondary">Open live demo</Button>}
        </div>
      </div>
    </section>
  );
}
