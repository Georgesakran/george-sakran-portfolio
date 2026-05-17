import { Link } from "react-router-dom";

export default function ProjectCard({ project, index, language, t }) {
  const isEven = index % 2 === 0;
  const content = project.content[language] || project.content['en'];

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center mb-36`}>
      
      {/* SHRUNK VISUAL BOX */}
      <div className="w-full lg:w-5/12 group relative">
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-10 group-hover:opacity-25 transition duration-1000"></div>

        <div className="relative bg-slate-900/30 border border-slate-800/60 p-2 rounded-3xl backdrop-blur-3xl overflow-hidden">
          <div className="aspect-16/10g-[#030712] rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            ></div>

            <div className="relative z-10 text-center p-4">
              <div className="w-16 h-16 bg-linear-to-tr from-blue-600/80 to-indigo-900/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl border border-white/5">
                <span className="text-white text-2xl">{project.icon}</span>
              </div>
              <h4 className="text-slate-500 font-mono text-[9px] tracking-[0.4em] uppercase">
                {content.title}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* METADATA CONTENT SIDE */}
      <div className="w-full lg:w-7/12">
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.tech.map((techItem) => (
            <span
              key={techItem}
              className="text-[9px] font-mono text-blue-400 bg-blue-400/5 border border-blue-400/10 px-2.5 py-0.5 rounded-md uppercase"
            >
              {techItem}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
          {content.sub}
        </h3>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed font-normal">
          {content.desc}
        </p>

        <div className="space-y-3 mb-8">
          {content.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-300 text-xs group">
              <span className="w-6 h-px bg-slate-800 group-hover:w-8 group-hover:bg-blue-500 transition-all"></span>
              {feature}
            </div>
          ))}
        </div>

        {/* REDIRECTS TO INTERNAL PORTFOLIO VIEW PAGE */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-block bg-slate-900 border border-slate-800 text-slate-200 font-mono text-[10px] font-bold tracking-widest px-8 py-3.5 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all uppercase"
        >
          {t.view_project}
        </Link>
      </div>
    </div>
  );
}