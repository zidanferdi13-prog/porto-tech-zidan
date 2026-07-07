import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Activity, 
  CheckCircle, 
  ExternalLink,
  ShieldAlert,
  Database,
  Radio,
  Clock
} from "lucide-react";
import IoTSimulator from "./IoTSimulator";
import { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";

// Import project showcase images from assets
// @ts-ignore
import projFleet from "../assets/images/proj_fleet.jpg";
// @ts-ignore
import projWeighing from "../assets/images/proj_weighing.jpg";
// @ts-ignore
import projFarming from "../assets/images/proj_farming.jpg";
// @ts-ignore
import projGravity from "../assets/images/proj_gravity.jpg";
// @ts-ignore
import projWeb from "../assets/images/proj_web.jpg";

export default function Projects() {
  const [filter, setFilter] = useState<"ALL" | "IOT" | "INDUSTRIAL" | "WEB">("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();

  const projects: Project[] = [
    {
      id: "proj_1",
      title: language === "en" ? "Mining Fleet Health & Operator Fatigue Watch" : "Kesehatan Armada Tambang & Pengawasan Kelelahan Operator",
      description: language === "en" 
        ? "Deployed and calibrated over 400 specialized IoT devices and AI camera nodes on heavy excavation vehicles, ensuring reliable system links in hash physical conditions."
        : "Memasang dan mengkalibrasi lebih dari 400 perangkat IoT khusus dan simpul kamera AI pada kendaraan ekskavasi berat, memastikan keandalan sistem di kondisi fisik ekstrem.",
      techStack: ["Edge Gateways", "AI Cameras", "Socket.IO", "MQTT", "Power BI", "Node.js"],
      impact: language === "en"
        ? "Achieved 98% system uptime and contributed to a 25% reduction in fatigue incidents across operators."
        : "Mencapai waktu aktif sistem 98% dan berkontribusi pada penurunan insiden kelelahan operator sebesar 25%.",
      category: "IoT",
      year: "2024 - Present",
      image: projFleet,
      details: language === "en" ? [
        "Integrated real-time operator state monitoring using AI camera sensors to track fatigue indexes.",
        "Created automatic streaming data logic that delivers raw telemetries to central cloud structures.",
        "Built automated analytical dashboards using Power BI to visualize fleet uptime logs.",
        "Reduced diagnostic response times by 30% through hardware calibration workflows."
      ] : [
        "Mengintegrasikan pemantauan kondisi operator secara real-time menggunakan sensor kamera AI untuk melacak indeks kelelahan.",
        "Membuat logika streaming data otomatis yang mengirimkan telemetri mentah ke struktur cloud pusat.",
        "Membangun dasbor analitis otomatis menggunakan Power BI untuk memvisualisasikan log waktu aktif armada.",
        "Mengurangi waktu respons diagnostik sebesar 30% melalui alur kerja kalibrasi perangkat keras."
      ]
    },
    {
      id: "proj_2",
      title: language === "en" ? "Automated Factory Batch Weighing Digitalization" : "Digitalisasi Penimbangan Batch Pabrik Otomatis",
      description: language === "en"
        ? "Re-engineered manual industrial mortar weighing processes by connecting Siemens PLC scale devices to centralized web-based monitoring portals."
        : "Merekayasa ulang proses penimbangan mortar industri manual dengan menghubungkan alat timbangan Siemens PLC ke portal pemantauan berbasis web terpusat.",
      techStack: ["Siemens S7 PLC", "Modbus TCP", "MQTT", "Node.js Backend", "MongoDB", "MariaDB"],
      impact: language === "en"
        ? "Completely eliminated manual reporting errors and enabled 100% data transparency for factory leads."
        : "Sama sekali menghilangkan kesalahan pelaporan manual dan memungkinkan transparansi data 100% untuk pimpinan pabrik.",
      category: "Industrial",
      year: "2025 - Present",
      image: projWeighing,
      details: language === "en" ? [
        "Established low-latency Modbus registers polling from Siemens PLC-based scales.",
        "Built local offline-resilient server infrastructures running Node.js and MQTT brokers.",
        "Developed custom dashboard layouts tracking chemical additive metrics per batch.",
        "Collaborated with production and maintenance leads to verify calibration alignment."
      ] : [
        "Menerapkan pengambilan data register Modbus latensi rendah dari timbangan berbasis Siemens PLC.",
        "Membangun infrastruktur server lokal tangguh-offline yang menjalankan Node.js dan broker MQTT.",
        "Mengembangkan tata letak dasbor khusus untuk melacak metrik aditif kimia per batch.",
        "Berkolaborasi dengan pimpinan produksi dan pemeliharaan untuk memverifikasi keselarasan kalibrasi."
      ]
    },
    {
      id: "proj_3",
      title: language === "en" ? "IoT-based Autonomous Smart Farming System" : "Sistem Pertanian Cerdas Mandiri Berbasis IoT",
      description: language === "en"
        ? "Designed a solar-powered agricultural monitor with 6 weather and soil quality sensors, using Node-RED logic to trigger automatic watering valves."
        : "Merancang monitor pertanian bertenaga surya dengan 6 sensor kualitas cuaca dan tanah, menggunakan logika Node-RED untuk memicu katup penyiraman otomatis.",
      techStack: ["Arduino / ESP32", "6-Sensor Array", "Solar Power Management", "Node-RED", "Google Sheets API"],
      impact: language === "en"
        ? "Improved agricultural decision speed for irrigation and fertilization in setup greenhouses by 40%."
        : "Meningkatkan kecepatan keputusan pertanian untuk irigasi dan pemupukan di rumah kaca yang disiapkan sebesar 40%.",
      category: "IoT",
      year: "2023",
      image: projFarming,
      details: language === "en" ? [
        "Engineered autonomous energy tracking using lithium batteries and micro solar charge controllers.",
        "Designed real-time Node-RED flows to ingest raw sensor data streams (soil moisture, temperature, UV index).",
        "Configured automatic irrigation relays that trigger dynamically based on custom environmental thresholds.",
        "Logged continuous sensor records to Google Sheets via direct API integrations."
      ] : [
        "Merekayasa pelacakan energi mandiri menggunakan baterai lithium dan pengontrol pengisian daya surya mikro.",
        "Merancang alur Node-RED real-time untuk menyerap aliran data sensor mentah (kelembaban tanah, suhu, indeks UV).",
        "Mengonfigurasi relai irigasi otomatis yang memicu secara dinamis berdasarkan ambang batas lingkungan khusus.",
        "Mencatat rekaman sensor berkelanjutan ke Google Sheets melalui integrasi API langsung."
      ]
    },
    {
      id: "proj_4",
      title: language === "en" ? "Cassava Starch Specific Gravity Measuring Device" : "Alat Pengukur Berat Jenis Pati Singkong",
      description: language === "en"
        ? "Created a custom digital measurement device that calculates starch percentage levels using an Arduino Uno microcontroller and high-precision load cell balances."
        : "Membuat alat pengukuran digital khusus yang menghitung tingkat persentase pati menggunakan mikrokontroler Arduino Uno dan timbangan load cell presisi tinggi.",
      techStack: ["Arduino UNO", "Load Cell Sensor", "HX711 Amplifier", "Mathematical Gravity Models", "C++ Coding"],
      impact: language === "en"
        ? "Achieved 95% gravity measurement accuracy, reducing manual starch processing cycles by 40%."
        : "Mencapai akurasi pengukuran berat jenis 95%, mengurangi siklus pemrosesan pati manual sebesar 40%.",
      category: "Industrial",
      year: "2022 - 2023",
      image: projGravity,
      details: language === "en" ? [
        "Researched and integrated custom starch specific-gravity calculation matrices into microcontrollers.",
        "Configured physical calibration loops for load cells with HX711 operational amplifiers.",
        "Slashed processing time from 15 minutes of manual labor to under 30 seconds of automated scale immersion.",
        "Validated and presented prototype results inside university agricultural labs."
      ] : [
        "Meneliti dan mengintegrasikan matriks perhitungan berat jenis pati khusus ke dalam mikrokontroler.",
        "Mengonfigurasi putaran kalibrasi fisik untuk load cell dengan penguat operasional HX711.",
        "Memangkas waktu pemrosesan dari 15 menit kerja manual menjadi kurang dari 30 detik pencelupan timbangan otomatis.",
        "Memvalidasi dan mempresentasikan hasil prototipe di laboratorium pertanian universitas."
      ]
    },
    {
      id: "proj_5",
      title: language === "en" ? "Enterprise Telemetry Real-Time Web Dashboard" : "Dasbor Web Real-Time Telemetri Perusahaan",
      description: language === "en"
        ? "Designed and developed a highly responsive centralized web control hub that aggregates live telemetry data streams from distributed edge devices."
        : "Merancang dan mengembangkan pusat kontrol web terpusat yang sangat responsif untuk menggabungkan aliran data telemetri langsung dari perangkat edge terdistribusi.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "Socket.io", "JWT"],
      impact: language === "en"
        ? "Replaced legacy localized HMIs with a secure web-based platform, reducing on-site diagnostic inspection overheads by 50%."
        : "Menggantikan HMI lokal warisan dengan platform berbasis web yang aman, mengurangi biaya inspeksi diagnostik langsung di lokasi sebesar 50%.",
      category: "Web",
      year: "2024",
      image: projWeb,
      details: language === "en" ? [
        "Built responsive real-time data visualizers and line/gauge charts using Recharts and Tailwind.",
        "Engineered robust WebSockets connection pools to stream active MQTT event pipelines from server to client.",
        "Integrated custom light/dark theme modes with localized configurations and full zero-latency render optimizations.",
        "Implemented secure JWT authorization routes and system activity logging."
      ] : [
        "Membangun visualisasi data real-time yang responsif serta grafik garis/gauge menggunakan Recharts dan Tailwind.",
        "Merekayasa polling koneksi WebSockets yang tangguh untuk mengalirkan pipa kejadian MQTT aktif dari server ke klien.",
        "Mengintegrasikan mode tema terang/gelap khusus dengan konfigurasi lokal dan optimalisasi render tanpa latensi.",
        "Menerapkan rute otorisasi JWT yang aman dan pencatatan aktivitas sistem."
      ]
    }
  ];

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/20">
      {/* Visual background gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

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
            {language === "en" ? "Portfolio Showcase" : "Pameran Portofolio"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "Systems & Solutions Deployed" : "Sistem & Solusi Terpasang"}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            {language === "en"
              ? "A selective history of professional deployments and university research projects demonstrating robust execution."
              : "Sejarah selektif penempatan profesional dan proyek penelitian universitas yang menunjukkan eksekusi tangguh."}
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12"
        >
          {["ALL", "IOT", "INDUSTRIAL", "WEB"].map((tab) => (
            <button
              id={`project-tab-${tab.toLowerCase()}`}
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-4 sm:px-4.5 py-1.5 sm:py-2 text-xs font-mono font-bold tracking-wider rounded-full border transition-all cursor-pointer ${
                filter === tab
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                  : "bg-white/2 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
              }`}
            >
              {tab === "ALL" 
                ? (language === "en" ? "All" : "Semua") 
                : tab === "IOT" 
                ? "IoT" 
                : tab === "INDUSTRIAL"
                ? (language === "en" ? "Industrial" : "Industri")
                : (language === "en" ? "Web" : "Web")}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div>
                {/* Year & Category */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badge list */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono bg-slate-900 border border-white/5 px-2 py-1 rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Card block & View Details Button */}
              <div className="border-t border-white/5 pt-4 flex flex-col gap-4">
                <div className="bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl">
                  <span className="text-[9px] font-mono uppercase text-emerald-400 tracking-wider font-bold">
                    {language === "en" ? "System Impact / Outcome:" : "Dampak Sistem / Hasil:"}
                  </span>
                  <p className="text-xs text-gray-200 mt-1 font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* View Detail Action */}
                <button
                  id={`view-detail-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-center py-2 px-4 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/3 hover:bg-white/5 border border-white/5 hover:border-white/10 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {language === "en" ? "View System Architecture Detail" : "Lihat Detail Arsitektur Sistem"}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              id="project-detail-modal-backdrop"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                id="project-detail-modal-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-2xl bg-slate-950 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl relative flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-start border-b border-white/15 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight mt-2.5">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button 
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 border border-white/5 transition hover:bg-white/10 cursor-pointer text-xs leading-none"
                  >
                    ✕
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex flex-col gap-5 text-gray-300 text-xs sm:text-sm">
                  {/* Project Showcase Photo */}
                  {selectedProject.image && (
                    <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group shrink-0">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/85 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] uppercase px-2.5 py-1 rounded-md tracking-wider font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {language === "en" ? "System Deployment Photo" : "Foto Pemasangan Sistem"}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold mb-1.5">
                      {language === "en" ? "Overview" : "Ringkasan"}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold mb-2.5">
                      {language === "en" ? "Engineering Specifications" : "Spesifikasi Rekayasa"}
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.details?.map((spec, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-2">
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">
                      {language === "en" ? "Primary Technology Integration" : "Integrasi Teknologi Utama"}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-slate-900 border border-white/5 px-3 py-1.5 rounded-lg text-gray-300 font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end pt-4 border-t border-white/10 mt-2">
                  <button
                    id="close-modal-footer-btn"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer"
                  >
                    {language === "en" ? "Close Specs Screen" : "Tutup Spesifikasi"}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/5 my-24"></div>

        {/* Interactive Simulator Section Container */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <div className="text-center md:text-left mb-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
              {language === "en" ? "INTERACTIVE DEMO" : "DEMO INTERAKTIF"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-3">
              {language === "en" ? "Real-Time Telemetry Sandbox" : "Sandbox Telemetri Real-Time"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl leading-relaxed">
              {language === "en"
                ? "Test my systems integration capability in real-time. Use the dashboard controls below to switch protocols, monitor live signals, or simulate load cell anomalies and operator warnings."
                : "Uji kemampuan integrasi sistem saya secara real-time. Gunakan kontrol dasbor di bawah ini untuk beralih protokol, memantau sinyal langsung, atau mensimulasikan anomali load cell dan peringatan operator."}
            </p>
          </div>
          <IoTSimulator />
        </motion.div>

      </div>
    </section>
  );
}
