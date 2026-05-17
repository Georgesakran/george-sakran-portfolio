import { Link } from "react-router-dom";
import { projectsData } from "../i18n/translations";

export default function ProjectsPage({ language, t }) {
  return (
    <div className="pt-24 pb-16">
      <div className="mb-12">
        <h2 className="text-xs font-mono tracking-[0.4em] text-blue-500 uppercase font-bold">
          /PROJECT_CATALOG_INDEX
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          const content = project.content[language] || project.content["en"];
          return (
            <div 
              key={project.id} 
              className="group bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-3xl shadow-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-mono text-lg text-blue-400 font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {project.icon}
                </div>
                <span className="font-mono text-[10px] text-blue-500 tracking-widest block mb-1 font-bold uppercase">
                  {content.sub}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">
                  {content.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {content.desc}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full text-center block font-mono text-[10px] font-bold tracking-widest bg-white/5 text-white border border-white/10 hover:bg-blue-600 hover:border-blue-500 py-3 rounded-xl transition-all uppercase"
                >
                  {t.view_project}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}