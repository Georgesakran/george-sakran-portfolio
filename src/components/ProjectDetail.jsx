import { useParams, Link } from "react-router-dom";
import { projectsData } from "../i18n/translations";

export default function ProjectDetail({ language, t }) {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="pt-32 text-center font-mono">
        <p className="text-red-400 mb-4">[ ERROR: ROUTE_NODE_NOT_FOUND ]</p>
        <Link to="/projects" className="text-blue-500 underline text-xs">{t.cv_back_btn}</Link>
      </div>
    );
  }

  const content = project.content[language] || project.content["en"];

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-500 hover:text-blue-400 transition-colors uppercase font-bold"
        >
          ← {t.projects_back_btn}
        </Link>
      </div>

      <div className="bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
        
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-mono text-xl text-blue-400 font-bold mb-6">
            {project.icon}
          </div>
          <span className="font-mono text-xs text-blue-500 tracking-widest block mb-1 font-bold uppercase">
            {content.sub}
          </span>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-4">
            {content.title}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">{content.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-4">
                // {t.project_tech_stack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#050b14] border border-slate-800 text-xs text-slate-300 px-3 py-1.5 rounded-lg font-mono block w-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CLEAN PRODUCTION GITHUB BUTTON WITH EMBEDDED SVG */}
            {project.link && project.link !== "#" && (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2.5 font-mono text-[10px] tracking-widest bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all uppercase"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.061.069-.061 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {t.view_github}
              </a>
            )}
          </div>

          <div className="md:col-span-2 border-t md:border-t-0 md:border-s border-slate-800/60 pt-6 md:pt-0 md:ps-8">
            <h3 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-4">
              // {t.project_features}
            </h3>
            <ul className="space-y-4">
              {content.features.map((feature, i) => (
                <li key={i} className="bg-slate-950/40 border border-slate-800/40 rounded-xl p-4 flex gap-4 items-start">
                  <span className="text-blue-500 mt-1 font-mono text-xs font-bold">[0{i+1}]</span>
                  <span className="text-slate-300 text-sm font-normal leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}