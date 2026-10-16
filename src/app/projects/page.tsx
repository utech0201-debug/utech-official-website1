import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, statusLabel } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Projects" intro="Applications and engineering work, with links to the code and live demos." />
        <div className="grid">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="card">
              <span className="badge badge-in-development">{statusLabel[p.status]}</span>
              <h3>{p.name}</h3>
              <p className="muted">{p.description}</p>
              <span className="muted">{p.technologies.join(" · ")}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
