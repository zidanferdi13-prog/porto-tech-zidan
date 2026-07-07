import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Cpu, Mail, Phone, Linkedin, ArrowUp, Terminal, Radio } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language, t } = useLanguage();

  // Monitor scroll height to show Back-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observer to highlight active navbar items on scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "services", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px" // Trigger when section occupies the active focus area
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300 antialiased relative">
      
      {/* Top Banner Ticker representing active telemetry links */}
      <div className="bg-slate-950 border-b border-white/5 py-2 text-center text-[10px] font-mono text-gray-400 select-none z-50 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:justify-center gap-6">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-bold">{t("nav.systemOnline")}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>{t("nav.edgeNodes")}: <strong className="text-gray-200">412 {t("nav.active")}</strong></span>
            <span className="text-white/10">•</span>
            <span>{t("nav.uptime")}: <strong className="text-gray-200">99.82% SLA</strong></span>
            <span className="text-white/10">•</span>
            <span>{t("nav.brokerLink")}: <strong className="text-emerald-400">{t("nav.secure")} (TLS/MQTTS)</strong></span>
          </div>
          <div className="text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/5 font-bold uppercase text-gray-300">
            v2.4 {language === "en" ? "Deployed" : "Terpasang"}
          </div>
        </div>
      </div>

      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden select-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
            
            {/* Footer Left Identity */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-white text-base tracking-tight leading-none">
                    ZIDAN FERDIANSYAH
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-widest leading-none mt-1 uppercase">
                    {language === "en" ? "SYSTEMS & IOT ENGINEER" : "REKAYASA SISTEM & IOT"}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 max-w-sm mt-2 leading-relaxed">
                {language === "en"
                  ? "Lead Device Display & PIC managing end-to-end development of 24/7 monitoring systems for heavy excavation equipment, automated industrial systems, and manufacturing operations. Bridging OT and IT with absolute reliability."
                  : "PIC & Lead Device Display yang mengelola pengembangan menyeluruh sistem pemantauan 24/7 untuk alat berat, sistem industri otomatis, dan operasi manufaktur. Menghubungkan OT dan IT dengan keandalan mutlak."}
              </p>

              {/* Direct links coordinates quick badge row */}
              <div className="flex items-center gap-3 mt-2">
                <a 
                  id="footer-email-link"
                  href="mailto:zidanferdi13@gmail.com" 
                  className="p-2 bg-white/3 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 rounded-lg border border-white/5 hover:border-emerald-500/20 transition"
                  aria-label="Email Zidan"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  id="footer-phone-link"
                  href="https://wa.me/6281319535441" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/3 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 rounded-lg border border-white/5 hover:border-emerald-500/20 transition"
                  aria-label="Chat via WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a 
                  id="footer-linkedin-link"
                  href="https://www.linkedin.com/in/zidanferdiansyah" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/3 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 rounded-lg border border-white/5 hover:border-emerald-500/20 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer Middle Links */}
            <div className="md:col-span-3 flex flex-col gap-3 md:pl-8">
              <h4 className="text-xs font-mono font-bold uppercase text-gray-300 tracking-wider">
                {language === "en" ? "System Anchors" : "Jangkar Sistem"}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col gap-2">
                  <a href="#home" className="text-gray-400 hover:text-white transition">{t("nav.home")}</a>
                  <a href="#about" className="text-gray-400 hover:text-white transition">{t("nav.about")}</a>
                  <a href="#skills" className="text-gray-400 hover:text-white transition">{t("nav.skills")}</a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#projects" className="text-gray-400 hover:text-white transition">{t("nav.projects")}</a>
                  <a href="#experience" className="text-gray-400 hover:text-white transition">{t("nav.experience")}</a>
                  <a href="#contact" className="text-gray-400 hover:text-white transition">{t("nav.contact")}</a>
                </div>
              </div>
            </div>

            {/* Footer Right Tech Spec */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold uppercase text-gray-300 tracking-wider">
                {language === "en" ? "Edge Diagnostics Link" : "Hubungan Diagnostik Edge"}
              </h4>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 font-mono text-[10px] text-gray-500 flex flex-col gap-1.5 leading-relaxed">
                <div className="flex justify-between">
                  <span>SSL connection:</span>
                  <span className="text-emerald-400">{language === "en" ? "ACTIVE" : "AKTIF"} (TLSv1.3)</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === "en" ? "Local Server Cache:" : "Cache Server Lokal:"}</span>
                  <span className="text-cyan-400">{language === "en" ? "ACTIVE" : "AKTIF"} ({language === "en" ? "Redundant" : "Redundan"})</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === "en" ? "MQTT Broker Ingestion:" : "Ingesti Broker MQTT:"}</span>
                  <span className="text-emerald-400">{language === "en" ? "STABLE" : "STABIL"} (MQTTS)</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-white/5 text-[9px]">
                  <span>{language === "en" ? "Console Log:" : "Log Konsol:"}</span>
                  <span className="text-gray-400 truncate">Zidan_portfolio_core_v2.4.bin</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Copyright block */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-center sm:text-left">
            <p className="text-[11px] font-mono text-gray-500">
              © {new Date().getFullYear()} Zidan Ferdiansyah. {language === "en" ? "All rights reserved. Deployed via Google AI Studio." : "Hak cipta dilindungi undang-undang. Ditayangkan via Google AI Studio."}
            </p>
            <p className="text-[10px] font-mono text-gray-600">
              {language === "en" 
                ? "IT-OT Integration • Industrial Digitalization • High Uptime Engineering"
                : "Integrasi IT-OT • Digitalisasi Industri • Rekayasa Waktu Aktif Tinggi"}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold rounded-xl transition duration-300 shadow-xl shadow-emerald-400/20 border border-emerald-300/10 cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
