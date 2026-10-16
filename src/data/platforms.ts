import type { Platform } from "@/types/platform";

// Single source of truth. Descriptions are draft copy: confirm each entry,
// status, and URL before launch.
export const platforms: Platform[] = [
  {
    slug: "learning-hub",
    name: "Learning Hub",
    tagline: "Courses, lessons, and progress in one place.",
    description:
      "Structured courses for software development, networking, and security, with lesson tracking and completion progress.",
    category: "Learning",
    status: "in-development",
    features: ["Course catalog", "Lesson viewer", "Progress tracking", "Bookmarks"],
  },
  {
    slug: "cyber-labs",
    name: "Cyber Labs",
    tagline: "Practice security skills on safe, authorized targets.",
    description:
      "Guided exercises in Linux, networking, secure coding, and web security. Hands-on labs run only in isolated environments.",
    category: "Cybersecurity",
    status: "planned",
    features: ["Linux and networking exercises", "Secure coding demos", "Web security lessons", "Challenge walkthroughs"],
  },
  {
    slug: "experiments",
    name: "Experiments",
    tagline: "Interactive prototypes and technology demos.",
    description:
      "A showcase of interactive demos and early-stage ideas, each labeled as a demo, prototype, or production feature.",
    category: "AI & Experiments",
    status: "in-development",
    features: ["Interactive viewers", "Clear status labels", "Data-driven experiment pages"],
  },
  {
    slug: "projects",
    name: "Project Catalog",
    tagline: "Applications and engineering work, with links to the code.",
    description:
      "Individual projects with technologies used, GitHub repositories, live demos, and honest development status.",
    category: "Development",
    status: "in-development",
    features: ["Repository links", "Live demos", "Technology tags", "Status labels"],
  },
];

export const getPlatform = (slug: string) => platforms.find((p) => p.slug === slug);
