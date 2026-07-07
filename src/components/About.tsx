import { motion } from "motion/react";
import { GraduationCap, Award, Check, Layers, Cpu, Wrench, Globe, User, Activity } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
// @ts-ignore
import zidanPhoto from "../assets/images/zidan_photo.jpg";



export default function About() {
  const { language } = useLanguage();

  const coreValues = language === "en" ? [
    {
      icon: Cpu,
      title: "Bridging OT and IT",
      desc: "Integrating legacy PLCs, sensors, CAN Bus, and edge devices directly into web dashboards, database systems, and secure API networks."
    },
    {
      icon: Layers,
      title: "Uptime & Reliability",
      desc: "Proven track record maintaining over 400 heavy-equipment IoT mining devices at 98% operational uptime in extreme physical environments."
    },
    {
      icon: Wrench,
      title: "End-to-End Digitalization",
      desc: "Converting manual spreadsheets and analog systems into modern Web platforms, automated MQTT brokers, and automated reporting systems."
    }
  ] : [
    {
      icon: Cpu,
      title: "Menghubungkan OT dan IT",
      desc: "Mengintegrasikan PLC lawas, sensor, CAN Bus, dan perangkat edge secara langsung ke dasbor web, sistem basis data, dan jaringan API yang aman."
    },
    {
      icon: Layers,
      title: "Uptime & Keandalan",
      desc: "Rekam jejak terbukti memelihara lebih dari 400 perangkat IoT pertambangan alat berat pada waktu aktif operasional 98% di lingkungan fisik ekstrem."
    },
    {
      icon: Wrench,
      title: "Digitalisasi Menyeluruh",
      desc: "Mengubah lembar kerja manual dan sistem analog menjadi platform Web modern, broker MQTT otomatis, dan sistem pelaporan otomatis."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            {language === "en" ? "About Me" : "Tentang Saya"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "Engineering Systems That Bridge Two Worlds" : "Merekayasa Sistem yang Menghubungkan Dua Dunia"}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Operator Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 glass-panel p-4 flex flex-col items-center">
              {/* Retro HUD brackets decoration */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-emerald-500/40"></div>
              <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-500/40"></div>
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-500/40"></div>
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-emerald-500/40"></div>
              
              {/* Photo Box with scrolling laser scanline */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center">
                <img 
                  id="about-profile-image"
                  src={zidanPhoto} 
                  alt="Zidan Ferdiansyah" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fb = parent.querySelector('.photo-fallback');
                      if (fb) fb.classList.remove('hidden');
                    }
                  }}
                />
                
                {/* Tech vector fallback when image is missing or replacing */}
                <div className="photo-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-emerald-400 font-mono text-center p-6">
                  <Cpu className="w-16 h-16 text-emerald-400 animate-pulse mb-3" />
                  <span className="text-sm font-bold tracking-widest text-white">ZIDAN FERDIANSYAH</span>
                  <span className="text-[10px] text-gray-500 mt-1 uppercase">IT_SYSTEM_IOT_ENG</span>
                </div>

                {/* Dashboard Scope / Camera Grid lines overlay */}
                <div className="absolute inset-2 border border-dashed border-white/5 pointer-events-none rounded-lg"></div>

                {/* Sweeping laser line */}
                <div className="absolute left-0 right-0 h-[2.5px] bg-emerald-400/40 shadow-[0_0_12px_rgba(52,211,153,0.6)] top-0 animate-scan pointer-events-none"></div>

                {/* Status Indicator Tag */}
                <div className="absolute bottom-3 right-3 bg-slate-950/85 border border-emerald-500/30 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                    SYS_OP: ONLINE
                  </span>
                </div>
              </div>

              {/* HUD telemetries */}
              <div className="w-full mt-4 pt-4 border-t border-white/5 text-center font-mono text-xs text-gray-400 flex flex-col gap-2">
                <div className="flex justify-between text-[10px] items-center">
                  <span className="text-gray-500 uppercase tracking-wider">{language === "en" ? "OPERATOR ID:" : "ID OPERATOR:"}</span>
                  <span className="text-white font-bold">ZF-9606_v2.4</span>
                </div>
                <div className="flex justify-between text-[10px] items-center">
                  <span className="text-gray-500 uppercase tracking-wider">{language === "en" ? "SECTOR:" : "SEKTOR:"}</span>
                  <span className="text-white font-bold">INDONESIA</span>
                </div>
                <div className="flex justify-between text-[10px] items-center">
                  <span className="text-gray-500 uppercase tracking-wider">{language === "en" ? "SEAL:" : "VERIFIKASI:"}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" /> VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Quick deployment indicator box */}
            <div className="bg-slate-900/40 border border-white/5 p-4.5 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  {language === "en" ? "ACTIVE ASSIGNMENT" : "TUGAS AKTIF"}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {language === "en" 
                  ? "Integrating heavy instrumentation telemetry, modbus registers, and SCADA pipelines directly with cloud systems."
                  : "Mengintegrasikan telemetri instrumentasi berat, register modbus, dan jalur SCADA langsung dengan sistem cloud."}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Biography content, then sub-grid for highlights & competencies */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Biography Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 text-gray-300"
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
                {language === "en" 
                  ? "An IT System & IoT Engineer dedicated to robust, data-driven industrial operations."
                  : "Seorang IT System & IoT Engineer yang berdedikasi pada operasi industri tangguh berbasis data."}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {language === "en" ? (
                  <>
                    My engineering journey began in <strong>Agricultural Engineering at Lampung University (graduated with a GPA of 3.77/4.00)</strong>. My thesis project involved designing and developing an automated cassava starch gravity-measuring device using an Arduino Uno and load cell sensors. This foundational experience showed me the incredible power of bridging physical sensors with software algorithms to automate labor-intensive processes.
                  </>
                ) : (
                  <>
                    Perjalanan rekayasa saya dimulai dari <strong>Teknik Pertanian di Universitas Lampung (lulus dengan IPK 3.77/4.00)</strong>. Proyek tesis saya melibatkan perancangan dan pengembangan alat pengukur berat jenis pati singkong otomatis menggunakan Arduino Uno dan sensor load cell. Pengalaman mendasar ini menunjukkan kepada saya kekuatan luar biasa dari menghubungkan sensor fisik dengan algoritma perangkat lunak untuk mengotomatisasi proses padat karya.
                  </>
                )}
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {language === "en" ? (
                  <>
                    Since then, I have transitioned into high-scale industrial and mining operations. At <strong>PT Pamapersada Nusantara</strong>, I deployed and maintained more than 400 mission-critical IoT devices across remote coal mining sites, establishing 98% uptime. I integrated AI cameras to perform real-time operator fatigue monitoring, helping reduce fatigue incidents by 25%.
                  </>
                ) : (
                  <>
                    Sejak saat itu, saya beralih ke operasi industri dan pertambangan berskala besar. Di <strong>PT Pamapersada Nusantara</strong>, saya memasang dan memelihara lebih dari 400 perangkat IoT penting di lokasi pertambangan batubara terpencil, mencapai waktu aktif 98%. Saya mengintegrasikan kamera AI untuk melakukan pemantauan kelelahan operator secara real-time, membantu mengurangi insiden kelelahan sebesar 25%.
                  </>
                )}
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {language === "en" ? (
                  <>
                    Currently at <strong>PT Anugerah Mortar Abadi</strong>, I lead factory digitalization projects. By connecting heavy-equipment sensors, CAN Bus, Modbus protocols, and industrial PLCs to Node.js backend systems, MQTT brokers, and clean dashboards, I help operations transition from reactive procedures to real-time, data-driven optimization.
                  </>
                ) : (
                  <>
                    Saat ini di <strong>PT Anugerah Mortar Abadi</strong>, saya memimpin proyek digitalisasi pabrik. Dengan menghubungkan sensor alat berat, CAN Bus, protokol Modbus, dan PLC industri ke sistem backend Node.js, broker MQTT, dan dasbor yang bersih, saya membantu operasional beralih dari prosedur reaktif ke optimalisasi real-time berbasis data.
                  </>
                )}
              </p>
            </motion.div>

            {/* Inner Sub-grid: Academic Credentials vs Core Competencies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Credentials column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-1 h-3 bg-cyan-400 rounded-sm"></span>
                  {language === "en" ? "Academic Highlights" : "Sorotan Akademis"}
                </h4>

                {/* Education Highlight */}
                <div className="bg-white/2 p-4 rounded-xl border border-white/5 flex gap-3.5 items-start">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                      {language === "en" ? "Education" : "Pendidikan"}
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      {language === "en" ? "B.Eng. in Agricultural Engineering" : "S.TP. dalam Teknik Pertanian"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {language === "en" ? "Lampung University • GPA 3.77/4.00" : "Universitas Lampung • IPK 3.77/4.00"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">
                      {language === "en" ? "Focus: Arduino, load cells, starch gravity sensing" : "Fokus: Arduino, load cell, sensor berat jenis pati"}
                    </p>
                  </div>
                </div>

                {/* Certifications Highlight */}
                <div className="bg-white/2 p-4 rounded-xl border border-white/5 flex gap-3.5 items-start">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
                      {language === "en" ? "Certifications" : "Sertifikasi"}
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">Siemens WinCC SCADA</p>
                    <p className="text-xs text-gray-400 mt-1">Anak Teknik Indonesia (2023)</p>
                    <p className="text-[10px] text-gray-500 mt-1">IoT Engineer Cert (Edspert.id)</p>
                  </div>
                </div>
              </motion.div>

              {/* Core Competencies & Checklists */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-1 h-3 bg-emerald-400 rounded-sm"></span>
                  {language === "en" ? "Core Competencies" : "Kompetensi Utama"}
                </h4>

                <div className="flex flex-col gap-3">
                  {coreValues.map((val, i) => (
                    <div 
                      key={i} 
                      className="glass-panel p-4.5 rounded-xl border border-white/10 flex gap-3.5 items-start"
                    >
                      <div className="p-2 bg-slate-900 rounded-lg border border-white/5 text-emerald-400 mt-0.5">
                        <val.icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h5 className="text-xs font-display font-bold text-white tracking-tight">{val.title}</h5>
                        <p className="text-[11px] text-gray-400 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Check List */}
                <div className="bg-emerald-500/5 p-4.5 rounded-xl border border-emerald-500/15 flex flex-col gap-3 mt-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    {language === "en" ? "What drives my work:" : "Apa yang menggerakkan pekerjaan saya:"}
                  </span>
                  <ul className="text-[11px] text-gray-300 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{language === "en" ? "Extreme environmental hardware testing" : "Pengujian perangkat keras di lingkungan ekstrem"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{language === "en" ? "MQTT, Socket.IO real-time data networks" : "Jaringan data real-time MQTT, Socket.IO"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{language === "en" ? "Bridging machinery CAN Bus diagnostics with IT" : "Menghubungkan diagnostik CAN Bus alat berat dengan IT"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{language === "en" ? "Interactive web control portals & Power BI" : "Portal kontrol web interaktif & Power BI"}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
