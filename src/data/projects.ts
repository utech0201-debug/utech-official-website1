import type { Project } from "@/types/project";

// Add real projects here. Only list a repo or demo URL that actually exists.
export const projects: Project[] = [
  {
    slug: "utech-official-website",
    name: "UTECH Official Website",
    description: "The public gateway to the UTECH ecosystem: platform directory, projects, and learning entry points.",
    status: "in-development",
    technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    repoUrl: "https://github.com/utech0201-debug/utech-official-website1",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const statusLabel: Record<Project["status"], string> = {
  prototype: "Prototype",
  "in-development": "In development",
  active: "Active",
  archived: "Archived",
};
