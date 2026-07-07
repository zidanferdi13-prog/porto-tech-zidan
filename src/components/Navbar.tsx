import { useState, useEffect } from "react";
import { Menu, X, Cpu, Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { downloadPdfCv } from "../utils/pdfGenerator";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", labelEn: "Home", labelId: "Beranda", href: "#home" },
    { name: "About", labelEn: "About", labelId: "Tentang", href: "#about" },
    { name: "Skills", labelEn: "Skills", labelId: "Keahlian", href: "#skills" },
    { name: "Projects", labelEn: "Projects", labelId: "Proyek", href: "#projects" },
    { name: "Experience", labelEn: "Timeline", labelId: "Pengalaman", href: "#experience" },
    { name: "Services", labelEn: "Services", labelId: "Layanan", href: "#services" },
    { name: "Contact", labelEn: "Contact", labelId: "Kontak", href: "#contact" }
  ];

  return (
    <nav 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl group-hover:border-emerald-500/60 transition-colors">
              <Cpu className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight leading-none text-base">
                ZIDAN FERDIANSYAH
              </span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest leading-none mt-1">
                {language === "en" ? "SYSTEMS & IOT ENGINEER" : "REKAYASA SISTEM & IOT"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const label = language === "en" ? item.labelEn : item.labelId;
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  id={`nav-item-${item.name.toLowerCase()}`}
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Download Resume / CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              id="desktop-lang-switcher"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer"
              title={language === "en" ? "Switch to Indonesian" : "Ubah ke Bahasa Inggris"}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              id="nav-pdf-download"
              onClick={downloadPdfCv}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              {language === "en" ? "Download CV" : "Unduh CV"}
            </button>
            <a
              id="nav-resume-download"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-500 rounded-full transition-all shadow-lg hover:shadow-emerald-400/20 shadow-emerald-400/10"
            >
              {language === "en" ? "Let's Collaborate" : "Mari Berkolaborasi"}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-lang-switcher-header"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition cursor-pointer font-mono text-xs font-bold flex items-center gap-1 border border-white/5"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navbar-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              
              {/* Language Switcher Row in Drawer */}
              <div className="flex items-center justify-between px-4 pb-3 border-b border-white/5 mb-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {language === "en" ? "Select Language" : "Pilih Bahasa"}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
                      language === "en"
                        ? "bg-emerald-500 text-slate-950 shadow"
                        : "text-gray-400 hover:text-white bg-white/5"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("id")}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
                      language === "id"
                        ? "bg-emerald-500 text-slate-950 shadow"
                        : "text-gray-400 hover:text-white bg-white/5"
                    }`}
                  >
                    Indonesia
                  </button>
                </div>
              </div>

              {navItems.map((item) => {
                const label = language === "en" ? item.labelEn : item.labelId;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    id={`mobile-nav-item-${item.name.toLowerCase()}`}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-500 font-semibold"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <div className="pt-4 px-4 flex flex-col gap-2.5">
                <button
                  id="mobile-nav-pdf-download"
                  onClick={() => {
                    setIsOpen(false);
                    downloadPdfCv();
                  }}
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  {language === "en" ? "Download PDF CV" : "Unduh PDF CV"}
                </button>
                <a
                  id="mobile-nav-resume-download"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-500 rounded-xl transition shadow-md"
                >
                  {language === "en" ? "Let's Collaborate" : "Mari Berkolaborasi"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

