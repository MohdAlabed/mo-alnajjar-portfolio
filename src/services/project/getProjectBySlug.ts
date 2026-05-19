import { cache } from 'react';
import { IProjectFullView } from '@/types/projects'; 
import { PROJECTS_LIST } from '@/data/projects';

export const getProjectBySlug = cache(async (slug: string): Promise<IProjectFullView | undefined> => {
  
  return new Promise((resolve) => {
    const project = PROJECTS_LIST.find((p) => String(p.projectSlug) === String(slug));
    resolve(project);
  });
});