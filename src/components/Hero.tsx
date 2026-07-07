import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Radio, Activity, Terminal, ShieldAlert, CheckCircle, Download } from "lucide-react";
import { downloadPdfCv } from "../utils/pdfGenerator";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const handleDownloadCv = async () => {
    try {
      const res = await fetch("/zidan_cv.pdf", { method: "HEAD" });
      if (res.ok) {
        const link = document.createElement("a");
        link.href = "/zidan_cv.pdf";
        link.download = "Zidan_Ferdiansyah_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        downloadPdfCv();
      }
    } catch (e) {
      downloadPdfCv();
    }
  };

  const stats = language === "en" ? [
    { label: "IoT Devices Configured", value: "400+" },
    { label: "Guaranteed System Uptime", value: "98%" },
    { label: "Incidents Reduced via AI Camera", value: "-25%" },
    { label: "Engineering GPA (Agritech)", value: "3.77/4" }
  ] : [
    { label: "Perangkat IoT Terpasang", value: "400+" },
    { label: "Jaminan Uptime Sistem", value: "98%" },
    { label: "Insiden Berkurang via Kamera AI", value: "-25%" },
    { label: "IPK Teknik (Agriteknologi)", value: "3.77/4" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-dot-pattern"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                {language === "en" ? "Active in Field • PT Anugerah Mortar Abadi" : "Aktif di Lapangan • PT Anugerah Mortar Abadi"}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                {language === "en" ? "Hi, I'm" : "Halo, Saya"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-400">
                  Zidan Ferdiansyah
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono text-gray-300 font-medium tracking-wide">
                {language === "en" ? "IT System & IoT Engineer" : "Rekayasa Sistem IT & IoT"}
              </h2>
            </motion.div>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              {language === "en"
                ? "Bridging the gap between operational technology (OT) and enterprise IT infrastructures. I design, deploy, and maintain robust 24/7 monitoring systems, PLC-to-Web telemetry, edge servers, and industrial automation networks that power heavy industries and mining operations."
                : "Menjembatani celah antara teknologi operasional (OT) dan infrastruktur IT perusahaan. Saya merancang, menyebarkan, dan memelihara sistem pemantauan 24/7 yang tangguh, telemetri PLC-ke-Web, server edge, dan jaringan otomasi industri yang menggerakkan industri berat serta operasi pertambangan."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a
                id="hero-view-projects"
                href="#projects"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold rounded-xl transition duration-300 shadow-xl shadow-emerald-400/15 cursor-pointer"
              >
                {language === "en" ? "View Projects" : "Lihat Proyek"}
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-cv"
                onClick={handleDownloadCv}
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 font-bold rounded-xl transition duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                {language === "en" ? "Download PDF CV" : "Unduh PDF CV"}
              </button>

              <a
                id="hero-contact-me"
                href="#contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition duration-300 cursor-pointer"
              >
                {language === "en" ? "Contact Me" : "Hubungi Saya"}
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5 w-full mt-2"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight text-glow-emerald">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Hero Right Visual Column - Embedded Abstract Micro Edge Device */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm glass-panel rounded-3xl border border-white/15 p-6 relative shadow-2xl">
              
              {/* Outer visual decor */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse delay-75"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-150"></span>
              </div>

              {/* Edge Device Faceplate UI */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-gray-300 tracking-wider uppercase font-bold">
                    EDG-GW-9606_v2.4
                  </span>
                </div>

                {/* Main Screen graphic */}
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 flex flex-col gap-3 font-mono">
                  
                  {/* Status header */}
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-500">DIAG_UPTIME: 184h_5m</span>
                    <span className="text-emerald-400 font-bold">● {language === "en" ? "OPERATIONAL" : "OPERASIONAL"}</span>
                  </div>

                  {/* Core wave indicator */}
                  <div className="h-16 flex items-end justify-between gap-1 border-b border-white/5 pb-2 overflow-hidden">
                    {[30, 60, 45, 90, 75, 40, 20, 55, 80, 100, 65, 42, 85, 30, 50, 70, 95].map((h, index) => (
                      <motion.div
                        key={index}
                        animate={{ 
                          height: [`${h}%`, `${Math.max(15, h - 20 + Math.random() * 40)}%`, `${h}%`] 
                        }}
                        transition={{ 
                          duration: 1.5 + Math.random() * 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`w-full rounded-sm ${index % 2 === 0 ? "bg-emerald-500" : "bg-cyan-500"}`}
                      ></motion.div>
                    ))}
                  </div>

                  {/* Micro metric printout */}
                  <div className="flex flex-col gap-1.5 text-[10px]">
                    <div className="flex justify-between text-gray-300">
                      <span>{language === "en" ? "PLC Connection:" : "Koneksi PLC:"}</span>
                      <span className="text-emerald-400 font-semibold">{language === "en" ? "Active (Modbus/TCP)" : "Aktif (Modbus/TCP)"}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{language === "en" ? "Broker Link:" : "Hubungan Broker:"}</span>
                      <span className="text-emerald-400 font-semibold">{language === "en" ? "Active (MQTT/SSL)" : "Aktif (MQTT/SSL)"}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{language === "en" ? "Operator Fatigue Watch:" : "Monitor Kelelahan Op:"}</span>
                      <span className="text-emerald-400 font-semibold">{language === "en" ? "Ready (AI Cam)" : "Siap (AI Cam)"}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-modules status buttons */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-[9px] text-gray-500 uppercase">SYS_TEMP</span>
                    <span className="font-bold text-white">41.2 °C</span>
                    <span className="text-[8px] text-emerald-400">{language === "en" ? "Stable" : "Stabil"}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-[9px] text-gray-500 uppercase">BANDWIDTH</span>
                    <span className="font-bold text-white">12.4 kbps</span>
                    <span className="text-[8px] text-cyan-400">{language === "en" ? "Excellent" : "Istimewa"}</span>
                  </div>
                </div>

                {/* Terminal Printout lines */}
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 font-mono text-[9px] text-gray-400 flex flex-col gap-1 h-20 overflow-hidden">
                  <div className="text-emerald-500/80">{"$ mqtpub -t \"mining/vhms\" -m '{\"status\":\"OK\"}'"}</div>
                  <div className="text-gray-500">{language === "en" ? "> Message published successfully to broker" : "> Pesan sukses dikirim ke broker"}</div>
                  <div className="text-cyan-500/80">$ plcread -r "DB10.DBD14"</div>
                  <div className="text-gray-500">{language === "en" ? "> Read success: Value = 250.40 kg" : "> Pembacaan sukses: Nilai = 250.40 kg"}</div>
                  <div className="text-rose-400/80">{language === "en" ? "> WARNING: operator fatigue loop running" : "> PERINGATAN: siklus kelelahan operator aktif"}</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
