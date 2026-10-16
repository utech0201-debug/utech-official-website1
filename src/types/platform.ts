export type PlatformStatus = "live" | "in-development" | "planned";
export type PlatformCategory =
  | "Learning"
  | "Development"
  | "Cybersecurity"
  | "AI & Experiments"
  | "Commerce & Hardware"
  | "Community";

export interface Platform {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: PlatformCategory;
  status: PlatformStatus;
  features: string[];
  /** Real destination. Leave undefined until the app actually exists. */
  url?: string;
}
