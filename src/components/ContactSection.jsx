import { useState } from "react";

export default function ContactSection({ t }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "gsakran14@gmail.com"; 
  const linkedinUrl = "https://www.linkedin.com/in/george-sakran-1890111a0/"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Resets status after 3 seconds
  };

  return (
    <section id="contact" className="py-32 border-t border-white/5 text-center relative overflow-hidden">
      {/* Decorative Radial Backdrop Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.4em] text-blue-500 uppercase mb-6 font-bold">
          {t.protocol_title}
        </h2>
        
        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-12 italic">
          {t.contact_title}
        </h3>

        {/* Action Interactive Block */}
        <div className="inline-flex flex-col items-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md shadow-2xl w-full sm:w-auto sm:px-12">
          <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-4 uppercase">
            [ SECURE_ROUTE_ESTABLISHED ]
          </p>
          
          {/* INTERACTIVE EMAIL BOX WITH INLINE COPY SYMBOL */}
          <button 
            onClick={handleCopy}
            className="group relative flex items-center justify-between gap-4 w-full bg-[#020617]/80 hover:bg-[#030d22] px-6 py-3 rounded-xl border border-white/5 hover:border-blue-500/30 font-mono text-sm md:text-base tracking-tight text-blue-400 transition-all mb-8 cursor-pointer select-none"
          >
            <span className="break-all text-left select-all">{emailAddress}</span>
            
            <div className="flex items-center gap-2 shrink-0">
              {copied ? (
                <>
                  <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold animate-pulse">
                    [{t.contact_copied || "COPIED"}]
                  </span>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              )}
            </div>
          </button>
          
          {/* LINKEDIN REDIRECT BUTTON */}
          <div className="w-full flex justify-center">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-mono text-[10px] font-bold tracking-[0.3em] px-10 py-4 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all uppercase"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              {t.CONNECT_LINKEDIN}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}