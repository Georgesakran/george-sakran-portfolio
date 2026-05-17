import { skillsData } from "../i18n/translations";

export default function ResumeSection({ t }) {
  return (
    <section id="resume" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-xs font-mono tracking-[0.4em] text-blue-500 uppercase font-bold">
          {t.cv_title}
        </h2>
      </div>

      <div className="bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
        
        {/* CV Header Identity */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-800 pb-10 mb-10">
          <div>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">{t.cv_name}</h3>
            <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">[ {t.cv_title_sub} ]</p>
          </div>
          <div className="font-mono text-[11px] text-slate-400 space-y-1 md:text-right">
            <p className="text-white font-bold">{t.cv_address}</p>
            <p>058-7400656</p>
            <p className="text-blue-400 hover:underline cursor-pointer">Gsakran14@gmail.com</p>
            <p className="text-blue-400 hover:underline cursor-pointer">linkedin.com/in/george-sakran-1890111a0</p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-12">
          <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-4">// {t.cv_sec_summary}</h4>
          <p className="text-slate-300 leading-relaxed font-medium text-base md:text-lg">{t.cv_summary}</p>
        </div>

        {/* Technical Hard Skills Grid */}
        <div className="mb-12 border-t border-slate-800/60 pt-10">
          <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-6">// {t.cv_sec_skills}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div>
              <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-wider uppercase">Languages</p>
              <div className="flex flex-wrap gap-1.5">{skillsData.languages.map(s => <span key={s} className="bg-white/5 border border-white/5 text-xs text-white px-2 py-1 rounded-md font-mono">{s}</span>)}</div>
            </div>

            <div>
              <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-wider uppercase">Web Dev</p>
              <div className="flex flex-wrap gap-1.5">{skillsData.web.map(s => <span key={s} className="bg-white/5 border border-white/5 text-xs text-white px-2 py-1 rounded-md font-mono">{s}</span>)}</div>
            </div>

            <div>
              <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-wider uppercase">Databases</p>
              <div className="flex flex-wrap gap-1.5">{skillsData.databases.map(s => <span key={s} className="bg-white/5 border border-white/5 text-xs text-white px-2 py-1 rounded-md font-mono">{s}</span>)}</div>
            </div>

            <div>
              <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-wider uppercase">Tools & OS</p>
              <div className="flex flex-wrap gap-1.5">{skillsData.tools.map(s => <span key={s} className="bg-white/5 border border-white/5 text-xs text-white px-2 py-1 rounded-md font-mono">{s}</span>)}</div>
            </div>

            <div>
              <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-wider uppercase">Core Concepts</p>
              <div className="flex flex-wrap gap-1.5">{skillsData.concepts.map(s => <span key={s} className="bg-white/5 border border-white/5 text-xs text-white px-2 py-1 rounded-md font-mono">{s}</span>)}</div>
            </div>

          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-12 border-t border-slate-800/60 pt-10">
          <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-8">// {t.cv_sec_experience}</h4>
          
          <div className="space-y-10">
            {/* Job 1 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="w-full md:w-1/4 font-mono text-[11px] text-blue-400 tracking-wider font-bold pt-1">{t.job1_date}</div>
              <div className="w-full md:w-3/4">
                <h5 className="text-xl font-bold text-white mb-1">{t.job1_role}</h5>
                <p className="text-slate-500 font-mono text-xs mb-4">{t.job1_company}</p>
                <ul className="space-y-2.5 text-slate-300 text-sm list-none pl-0">
                  {t.job1_points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-blue-500 mt-1.5 shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
        </div>

        {/* Technical Projects Description */}
        <div className="mb-12 border-t border-slate-800/60 pt-10">
          <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-8">// {t.cv_sec_projects}</h4>
          <div className="space-y-6">
            <div>
              <h5 className="text-base font-bold text-white mb-1">{t.proj1_title}</h5>
              <p className="text-slate-300 text-sm leading-relaxed">{t.proj1_desc}</p>
            </div>
            <div className="border-t border-slate-800/40 pt-4">
              <h5 className="text-base font-bold text-white mb-1">{t.proj2_title}</h5>
              <p className="text-slate-300 text-sm leading-relaxed">{t.proj2_desc}</p>
            </div>
            <div className="border-t border-slate-800/40 pt-4">
              <h5 className="text-base font-bold text-white mb-1">{t.proj3_title}</h5>
              <p className="text-slate-300 text-sm leading-relaxed">{t.proj3_desc}</p>
            </div>
          </div>
        </div>

        {/* Education & Language Engines Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800/60 pt-10">
          <div>
            <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-4">// {t.cv_sec_education}</h4>
            <span className="font-mono text-[10px] text-blue-400 block mb-1 font-bold">{t.edu_date}</span>
            <h5 className="text-lg font-bold text-white mb-1">{t.edu_degree}</h5>
            <p className="text-slate-400 text-xs font-mono">{t.edu_school}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-4">// {t.cv_sec_languages}</h4>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.lang_ar}</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.lang_he}</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.lang_en}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}