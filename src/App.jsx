import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { translations } from "./i18n/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsPage from "./components/ProjectsPage"; 
import ProjectDetail from "./components/ProjectDetail"; 
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("gs_portfolio_lang") || "en";
  });

  const t = translations[language] || translations["en"];

  useEffect(() => {
    if (t && t.dir) {
      document.documentElement.dir = t.dir;
      document.documentElement.lang = language;
      localStorage.setItem("gs_portfolio_lang", language);
    }
  }, [language, t]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-blue-500/30 font-sans transition-all duration-300">
        
        <Navbar t={t} />

        <main className="max-w-7xl mx-auto px-8 relative z-10 min-h-[calc(100vh-160px)]">
          <Routes>
            
            {/* CLEAN LANDING ROUTE (No terminal mock) */}
            <Route path="/" element={
              <>
                <Reveal>
                  <Hero t={t} />
                </Reveal>
                
                <Reveal>
                  <ProjectsSection language={language} t={t} />
                </Reveal>
              </>
            } />

            <Route path="/projects" element={
              <Reveal>
                <ProjectsPage language={language} t={t} />
              </Reveal>
            } />

            <Route path="/projects/:id" element={
              <Reveal>
                <ProjectDetail language={language} t={t} />
              </Reveal>
            } />

            <Route path="/cv" element={
              <div className="pt-24">
                <Reveal>
                  <ResumeSection t={t} />
                </Reveal>
              </div>
            } />

          </Routes>

          <Reveal>
            <ContactSection t={t} />
          </Reveal>
          
          <Reveal>
            <Footer t={t} />
          </Reveal>
        </main>

        <div className={`fixed bottom-8 ${t.dir === 'rtl' ? 'left-8' : 'right-8'} z-50 flex gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md shadow-2xl`}>
          {Object.keys(translations).map((langKey) => (
            <button
              key={langKey}
              onClick={() => setLanguage(langKey)}
              className={`w-9 h-9 rounded-lg font-mono text-[10px] font-bold transition-all cursor-pointer ${
                language === langKey
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {translations[langKey].label}
            </button>
          ))}
        </div>

      </div>
    </Router>
  );
}