export default function Hero({ t }) {
    return (
      <section className="relative pt-44 pb-32 overflow-hidden">
        {/* Decorative Blueprint Grid Background Accent */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Subtle Laser Beam Line Glow at the top */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
  
        <div className="w-full">
          {/* System Status Banner */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-mono text-[9px] font-bold tracking-[0.3em] uppercase italic">
              {t.hero_status}
            </span>
          </div>
  
          {/* Dynamic Typography Header */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-10 uppercase">
            {t.hero_h1_1} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t.hero_h1_2}
            </span>
          </h1>
  
          {/* Professional Summary Statement */}
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 font-medium leading-relaxed tracking-wide">
            {t.hero_desc}
          </p>
        </div>
      </section>
    );
  }