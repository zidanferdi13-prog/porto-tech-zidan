import { useState } from "react";
import { 
  Cpu, 
  Database, 
  Terminal, 
  Layers, 
  Server, 
  Settings, 
  Wrench, 
  Activity, 
  Radio, 
  CheckCircle 
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface Skill {
  name: string;
  proficiency: number;
  level: "Expert" | "Advanced" | "Intermediate";
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { language } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      id: "iot",
      title: language === "en" ? "IoT & Automation" : "IoT & Otomasi",
      icon: Cpu,
      skills: [
        { name: language === "en" ? "PLC Integration (Siemens S7, etc.)" : "Integrasi PLC (Siemens S7, dll.)", proficiency: 92, level: "Expert" },
        { name: language === "en" ? "Weighing Systems & Load Cells" : "Sistem Penimbangan & Load Cell", proficiency: 95, level: "Expert" },
        { name: language === "en" ? "MQTT Broker Networks & Socket.IO" : "Jaringan Broker MQTT & Socket.IO", proficiency: 94, level: "Expert" },
        { name: "CAN Bus & Modbus RTU/TCP", proficiency: 90, level: "Advanced" },
        { name: language === "en" ? "Node-RED Control Flow" : "Alur Kontrol Node-RED", proficiency: 93, level: "Expert" },
        { name: language === "en" ? "Sensors & Actuators Calibration" : "Kalibrasi Sensor & Aktuator", proficiency: 91, level: "Expert" }
      ]
    },
    {
      id: "backend",
      title: language === "en" ? "Backend Development" : "Pengembangan Backend",
      icon: Terminal,
      skills: [
        { name: "Node.js (Express)", proficiency: 88, level: "Advanced" },
        { name: language === "en" ? "Real-Time API Architecture" : "Arsitektur API Real-Time", proficiency: 87, level: "Advanced" },
        { name: "TypeScript & JavaScript", proficiency: 85, level: "Advanced" },
        { name: language === "en" ? "Data Ingestion & Processing" : "Penyerapan & Pemrosesan Data", proficiency: 90, level: "Advanced" }
      ]
    },
    {
      id: "database",
      title: language === "en" ? "Database Management" : "Manajemen Basis Data",
      icon: Database,
      skills: [
        { name: "MongoDB", proficiency: 84, level: "Advanced" },
        { name: "MariaDB / MySQL", proficiency: 86, level: "Advanced" },
        { name: language === "en" ? "Database Schema Design" : "Desain Skema Basis Data", proficiency: 85, level: "Advanced" },
        { name: language === "en" ? "Query Performance Tuning" : "Penyetelan Performa Kueri", proficiency: 82, level: "Advanced" }
      ]
    },
    {
      id: "devops",
      title: language === "en" ? "DevOps & Deployment" : "DevOps & Penyebaran",
      icon: Server,
      skills: [
        { name: language === "en" ? "Local Server Infrastructure" : "Infrastruktur Server Lokal", proficiency: 90, level: "Advanced" },
        { name: language === "en" ? "Raspberry Pi & Gateway Edge Computing" : "Raspberry Pi & Komputasi Edge Gateway", proficiency: 92, level: "Expert" },
        { name: language === "en" ? "Proactive Field Diagnostics" : "Diagnostik Lapangan Proaktif", proficiency: 94, level: "Expert" },
        { name: language === "en" ? "Network Infrastructure Security" : "Keamanan Infrastruktur Jaringan", proficiency: 83, level: "Advanced" }
      ]
    },
    {
      id: "frontend",
      title: language === "en" ? "Frontend Development" : "Pengembangan Frontend",
      icon: Layers,
      skills: [
        { name: language === "en" ? "Power BI Dashboards" : "Dasbor Power BI", proficiency: 91, level: "Expert" },
        { name: "React.js & Vite", proficiency: 80, level: "Advanced" },
        { name: "Tailwind CSS", proficiency: 85, level: "Advanced" },
        { name: language === "en" ? "Data Visualizations & Charts" : "Visualisasi Data & Grafik", proficiency: 88, level: "Advanced" }
      ]
    },
    {
      id: "tools",
      title: language === "en" ? "Tools & Platforms" : "Alat & Platform",
      icon: Settings,
      skills: [
        { name: language === "en" ? "Arduino IDE & Microcontrollers" : "Arduino IDE & Mikrokontroler", proficiency: 95, level: "Expert" },
        { name: "Siemens WinCC SCADA", proficiency: 88, level: "Advanced" },
        { name: "Git & GitHub", proficiency: 86, level: "Advanced" },
        { name: language === "en" ? "VS Code & Terminal Environment" : "VS Code & Lingkungan Terminal", proficiency: 90, level: "Advanced" }
      ]
    }
  ];

  const translateLevel = (lvl: string) => {
    if (lvl === "Expert") return language === "en" ? "Expert" : "Ahli";
    if (lvl === "Advanced") return language === "en" ? "Advanced" : "Lanjutan";
    return language === "en" ? "Intermediate" : "Menengah";
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            {language === "en" ? "Tech Stack" : "Keahlian"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "Comprehensive Skill Inventory" : "Daftar Keahlian Lengkap"}
          </h2>
          <div className="h-1 w-12 bg-cyan-400 rounded mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            {language === "en"
              ? "A specialized hybrid skillset bridging software design and electrical automation field engineering."
              : "Keahlian hibrida khusus yang menjembatani desain perangkat lunak dan rekayasa otomasi listrik di lapangan."}
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            id="skill-tab-all"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-full border transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-md"
                : "bg-white/2 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
            }`}
          >
            {language === "en" ? "Show All" : "Semua"}
          </button>
          {skillCategories.map((cat) => (
            <button
              id={`skill-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-full border transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-md"
                  : "bg-white/2 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter((cat) => activeTab === "all" || cat.id === activeTab)
            .map((cat, catIdx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (catIdx % 3) * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                    <div className="p-2.5 bg-slate-900 rounded-xl border border-white/5 text-cyan-400">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-gray-300">{skill.name}</span>
                          <span className="font-mono font-bold text-cyan-400">{skill.proficiency}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.1 }}
                          />
                        </div>

                        {/* Level badge */}
                        <div className="flex justify-end">
                          <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                            {translateLevel(skill.level)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Footnote / Standard */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-cyan-500/70" />
                    <span>{language === "en" ? "Real-time Capable" : "Kemampuan Real-time"}</span>
                  </div>
                  <div>
                    <span>{language === "en" ? "Standard Verified" : "Standar Terverifikasi"}</span>
                  </div>
                </div>

              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
