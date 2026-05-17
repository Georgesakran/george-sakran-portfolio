export default function Footer({ t }) {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-16 border-t border-white/5 relative overflow-hidden">
        {/* Decorative Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
  
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
          {/* Author Metadata */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <p>{t.footer_text}</p>
          </div>
  
          {/* Timestamp */}
          <p>© {currentYear} ALL_RIGHTS_RESERVED</p>
        </div>
      </footer>
    );
  }