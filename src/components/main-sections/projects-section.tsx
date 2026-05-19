import { getProjectPreviewData } from "@/services/project/getProjectPreviewData";
import ProjectsCard from "@/components/cards/projects-card";
import SectionHeader from "./section-header";

const ProjectsSection = () => {
    const projects = getProjectPreviewData();

    return (
        <section id="projects">
          <SectionHeader title="Recent Projects" order='03' color="zinc"  />
          <div className="flex flex-col w-full">
            {projects.map((project) => {
              return (
                <ProjectsCard key={project.projectSlug} {...project}></ProjectsCard>
              )
            })}
          </div>
        </section>
    );
};
export default ProjectsSection;