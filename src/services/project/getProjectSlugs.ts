import { PROJECTS_LIST } from '@/data/projects';

export function getProjectSlugs() {
  return PROJECTS_LIST.map((project) => ({
    projectSlug: project.projectSlug,
  }));
}