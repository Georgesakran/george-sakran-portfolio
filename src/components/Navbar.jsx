import { Link, useLocation } from "react-router-dom";

export default function Navbar({ t }) {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        
        {/* Core Logo Route Link */}
        <Link 
          to="/" 
          className="text-xl font-black tracking-tighter text-white uppercase hover:opacity-80 transition-all cursor-pointer"
        >
          GS<span className="text-blue-500">.</span>CORE
        </Link>
        
        {/* Page Switch Navigation Anchors */}
        <div className="flex items-center gap-4 font-mono text-[10px] font-bold tracking-[0.2em]">
          
          {/* ALL_PROJECTS Button (Now matching the CV button style) */}
          <Link 
            to="/projects"
            className={`px-4 py-2 rounded-lg font-mono text-[10px] font-bold transition-all uppercase cursor-pointer border ${
              location.pathname === "/projects" || location.pathname.startsWith("/projects/")
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-white border-white/10 hover:bg-slate-800"
            }`}
          >
            {t.nav_projects}
          </Link>
          
          {/* VIRTUAL_CV Button */}
          <Link 
            to="/cv" 
            className={`px-4 py-2 rounded-lg font-mono text-[10px] font-bold transition-all uppercase cursor-pointer border ${
              location.pathname === "/cv"
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-white border-white/10 hover:bg-slate-800"
            }`}
          >
            {t.nav_cv}
          </Link>
          
        </div>

      </div>
    </nav>
  );
}