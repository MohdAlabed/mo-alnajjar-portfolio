import { PROJECTS_LIST } from "@/data/projects";

export interface ISitemapProject {
  slug: string;
  lastModified: Date;
}

export function getProjectSitemapData(): ISitemapProject[] {
  return PROJECTS_LIST.map((project) => ({
    slug: project.projectSlug,
    lastModified: project.endDate ? new Date(project.endDate) : new Date(project.startDate),
  }));
}