import { projectsData } from "../i18n/translations";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ language, t }) {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      {/* Section Header Indicator */}
      <div className="mb-24">
        <h2 className="text-xs font-mono tracking-[0.4em] text-blue-500 uppercase font-bold">
          {t.protocol_title}
        </h2>
      </div>

      {/* Projects Container Grid */}
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            language={language}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}