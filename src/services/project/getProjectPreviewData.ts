import { PROJECTS_LIST } from "@/data/projects";
import { IProjectPreview } from "@/types/projects";

const MAX_DESC_LENGTH = 120; 

export function getProjectPreviewData(): IProjectPreview[] {

    return PROJECTS_LIST.map((project) => {
        
        const isLong = project.description.length > MAX_DESC_LENGTH;
        const shortDesc = isLong 
            ? `${project.description.substring(0, MAX_DESC_LENGTH).trim()}...` 
            : project.description;

        return {
            projectSlug: project.projectSlug,
            title: project.title,
            tags: project.tags,
            thumbnail: project.thumbnail,
            shortDescription: shortDesc,
        };
    });
}