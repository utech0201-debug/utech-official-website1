export type ProjectStatus = "prototype" | "in-development" | "active" | "archived";
export interface Project {
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}
