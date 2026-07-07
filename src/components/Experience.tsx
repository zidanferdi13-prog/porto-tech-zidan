import { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { ExperienceItem } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<string | null>("exp_1");
  const { language } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      id: "exp_1",
      jobTitle: language === "en" ? "IT & IIoT Engineer" : "IT & IIoT Engineer",
      company: "PT Anugerah Mortar Abadi",
      period: language === "en" ? "Nov 2025 – Present" : "Nov 2025 – Sekarang",
      location: language === "en" ? "Indonesia" : "Indonesia",
      isCurrent: true,
      responsibilities: language === "en" ? [
        "Lead end-to-end development of industrial monitoring systems for manufacturing operations, integrating PLCs, load cells, and production equipment into centralized dashboards.",
        "Act as Project PIC for factory-wide device monitoring systems, ensuring data accuracy, system reliability, and continuous operation across multiple sites.",
        "Digitized manual production and weighing processes by connecting PLC-based weighing systems to web-based monitoring platforms.",
        "Designed and maintained local server infrastructure, MQTT brokers, and Node.js-based backend systems for real-time factory data acquisition.",
        "Integrated CAN Bus, MOD Bus, and heavy equipment health data into centralized monitoring systems to support preventive maintenance and operational decision-making.",
        "Collaborated closely with production, maintenance, and management teams to align IT systems with manufacturing workflows and operational needs."
      ] : [
        "Memimpin pengembangan menyeluruh sistem pemantauan industri untuk operasi manufaktur, mengintegrasikan PLC, load cell, dan peralatan produksi ke dalam dasbor terpusat.",
        "Bertindak sebagai Project PIC untuk sistem pemantauan perangkat di seluruh pabrik, memastikan akurasi data, keandalan sistem, dan operasi berkelanjutan di beberapa lokasi.",
        "Mendigitalkan proses produksi dan penimbangan manual dengan menghubungkan sistem penimbangan berbasis PLC ke platform pemantauan berbasis web.",
        "Merancang dan memelihara infrastruktur server lokal, broker MQTT, dan sistem backend berbasis Node.js untuk akuisisi data pabrik secara real-time.",
        "Mengintegrasikan CAN Bus, MOD Bus, dan data kesehatan alat berat ke dalam sistem pemantauan terpusat untuk mendukung pemeliharaan preventif dan pengambilan keputusan operasional.",
        "Berkolaborasi erat dengan tim produksi, pemeliharaan, dan manajemen untuk menyelaraskan sistem IT dengan alur kerja manufaktur dan kebutuhan operasional."
      ],
      achievements: language === "en" ? [
        "Completely eliminated manual reporting errors in mortar manufacturing operations by automating PLC scales.",
        "Designed redundant data polling fallback layers ensuring no metrics are lost during broker network resets.",
        "Successfully set up local failover servers that cache weighing records during internet blackouts."
      ] : [
        "Sama sekali menghilangkan kesalahan pelaporan manual dalam operasi pembuatan mortar dengan mengotomatisasi timbangan PLC.",
        "Merancang lapisan cadangan polling data redundan untuk memastikan tidak ada metrik yang hilang selama reset jaringan broker.",
        "Berhasil menyiapkan server failover lokal yang menyimpan data rekaman penimbangan selama gangguan internet."
      ]
    },
    {
      id: "exp_2",
      jobTitle: language === "en" ? "IoT Engineer" : "IoT Engineer",
      company: "PT Pamapersada Nusantara",
      period: language === "en" ? "Mar 2024 – Present" : "Mar 2024 – Sekarang",
      location: language === "en" ? "Indonesia" : "Indonesia",
      isCurrent: true,
      responsibilities: language === "en" ? [
        "Deployed and maintained over 400 IoT devices in coal mining operations, achieving 98% system uptime through proactive diagnostics and field inspections.",
        "Conducted real-time fatigue detection for 400+ operators using AI-based camera systems.",
        "Integrated sensors, AI cameras, and measuring tools with cloud infrastructure using MQTT and Socket.IO, enabling seamless real-time data transmission.",
        "Developed automated dashboards using Power BI to visualize operational metrics, supporting data-driven planning and resource allocation.",
        "Led the troubleshooting and calibration of IoT hardware, reducing maintenance response time by 30%.",
        "Collaborated with cross-functional teams (engineering, safety, IT) to ensure that deployed systems met both operational and compliance standards."
      ] : [
        "Memasang dan memelihara lebih dari 400 perangkat IoT dalam operasi penambangan batubara, mencapai waktu aktif sistem 98% melalui diagnostik proaktif dan inspeksi lapangan.",
        "Melakukan deteksi kelelahan real-time untuk 400+ operator menggunakan sistem kamera berbasis AI.",
        "Mengintegrasikan sensor, kamera AI, dan alat pengukur dengan infrastruktur cloud menggunakan MQTT dan Socket.IO, memungkinkan transmisi data real-time yang lancar.",
        "Mengembangkan dasbor otomatis menggunakan Power BI untuk memvisualisasikan metrik operasional, mendukung perencanaan berbasis data dan alokasi sumber daya.",
        "Memimpin pemecahan masalah dan kalibrasi perangkat keras IoT, mengurangi waktu respons pemeliharaan sebesar 30%.",
        "Berkolaborasi dengan tim lintas fungsi (teknik, keselamatan, IT) untuk memastikan bahwa sistem yang dipasang memenuhi standar operasional dan kepatuhan."
      ],
      achievements: language === "en" ? [
        "Achieved 98% system uptime over 400+ mining devices through predictive maintenance scheduling.",
        "Contributed to a 25% reduction in fatigue-related incidents by integrating high-precision AI computer vision cameras.",
        "Slashed equipment troubleshooting response time by 30% through automated diagnostics telemetry."
      ] : [
        "Mencapai waktu aktif sistem 98% di lebih dari 400 perangkat tambang melalui penjadwalan pemeliharaan prediktif.",
        "Berkontribusi pada pengurangan 25% insiden terkait kelelahan dengan mengintegrasikan kamera computer vision AI presisi tinggi.",
        "Memangkas waktu respons pemecahan masalah peralatan sebesar 30% melalui telemetri diagnostik otomatis."
      ]
    },
    {
      id: "exp_3",
      jobTitle: language === "en" ? "Robotics Instructor" : "Instruktur Robotika",
      company: "BrightCHAMPS",
      period: "Oct 2023 – Mar 2024",
      location: language === "en" ? "India (Remote / Global)" : "India (Jarak Jauh / Global)",
      responsibilities: language === "en" ? [
        "Delivered robotics and coding instruction to over 100 students (Grades 3–10) across global time zones, using a combination of Arduino-based hardware and interactive software.",
        "Designed and facilitated project-based learning modules for game development, app prototyping, and website creation.",
        "Instructed students in logical programming fundamentals and microcontroller operations, including sensors, actuators, and electrical systems.",
        "Adapted teaching strategies to suit international learners, ensuring a high satisfaction rate and improved technical comprehension among non-native English speakers."
      ] : [
        "Memberikan instruksi robotika dan pemrograman kepada lebih dari 100 siswa (Kelas 3–10) di berbagai zona waktu global, menggunakan kombinasi perangkat keras berbasis Arduino dan perangkat lunak interaktif.",
        "Merancang dan memfasilitasi modul pembelajaran berbasis proyek untuk pengembangan game, pembuatan prototipe aplikasi, dan pembuatan situs web.",
        "Mengajar siswa dasar-dasar pemrograman logika dan operasi mikrokontroler, termasuk sensor, aktuator, dan sistem kelistrikan.",
        "Menyesuaikan strategi pengajaran agar sesuai dengan pelajar internasional, memastikan tingkat kepuasan yang tinggi dan peningkatan pemahaman teknis di antara penutur asli non-Inggris."
      ],
      achievements: language === "en" ? [
        "Successfully raised student lesson engagement and module completion rates across several international time zones.",
        "Trained over 100 young global students in fundamental electrical concepts, Arduino firmware, and sensor variables."
      ] : [
        "Berhasil meningkatkan keterlibatan pelajaran siswa dan tingkat penyelesaian modul di beberapa zona waktu internasional.",
        "Melatih lebih dari 100 siswa muda global dalam konsep dasar listrik, firmware Arduino, dan variabel sensor."
      ]
    },
    {
      id: "exp_4",
      jobTitle: language === "en" ? "Agricultural Extension Officer" : "Petugas Penyuluh Pertanian",
      company: "Dinas Pertanian Bandar Lampung",
      period: language === "en" ? "Jun 2022 – Aug 2022" : "Jun 2022 – Agu 2022",
      location: "Bandar Lampung, Indonesia",
      responsibilities: language === "en" ? [
        "Delivered technical consultations to 20+ local farmers, offering actionable solutions for land-use and crop management challenges.",
        "Conducted hands-on training sessions on modern agricultural technologies and eco-friendly practices to improve crop productivity.",
        "Designed customized assistance plans based on village-level agricultural needs assessments.",
        "Organized and executed field surveys and inspections, ensuring alignment with planned agricultural interventions and validating reported outcomes."
      ] : [
        "Memberikan konsultasi teknis kepada lebih dari 20 petani lokal, menawarkan solusi praktis untuk tantangan pengelolaan lahan dan tanaman.",
        "Menyelenggarakan sesi pelatihan langsung tentang teknologi pertanian modern dan praktik ramah lingkungan untuk meningkatkan produktivitas tanaman.",
        "Merancang rencana bantuan khusus berdasarkan penilaian kebutuhan pertanian di tingkat desa.",
        "Mengatur dan melaksanakan survei serta inspeksi lapangan, memastikan keselarasan dengan intervensi pertanian yang direncanakan dan memvalidasi hasil yang dilaporkan."
      ],
      achievements: language === "en" ? [
        "Facilitated technology transfer classes in modern eco-friendly agricultural techniques for over 20 farming households."
      ] : [
        "Memasilitasi kelas transfer teknologi dalam teknik pertanian modern ramah lingkungan untuk lebih dari 20 rumah tangga tani."
      ]
    }
  ];

  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

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
            {language === "en" ? "Career Timeline" : "Garis Waktu Karir"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "Professional Experience" : "Pengalaman Profesional"}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            {language === "en"
              ? "Leading field deployments, building production systems, and driving operations automation."
              : "Memimpin penyebaran lapangan, membangun sistem produksi, dan mendorong otomatisasi operasi."}
          </p>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-6 sm:pl-8 flex flex-col gap-8">
          
          {experiences.map((exp) => {
            const isExpanded = expandedItem === exp.id;
            return (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group transition-all duration-300"
              >
                {/* Timeline Glow Dot indicator */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center">
                  {exp.isCurrent ? (
                    <span className="flex h-3.5 w-3.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-slate-950"></span>
                    </span>
                  ) : (
                    <span className="h-3.5 w-3.5 rounded-full bg-slate-800 border border-white/10"></span>
                  )}
                </span>

                {/* Main Card */}
                <div 
                  className={`glass-panel p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    exp.isCurrent 
                      ? "border-emerald-500/20 bg-slate-900/45 shadow-lg shadow-emerald-500/2" 
                      : "border-white/10"
                  }`}
                >
                  
                  {/* Card Header (Meta information) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className={`w-4 h-4 ${exp.isCurrent ? "text-emerald-400" : "text-gray-400"}`} />
                        <h3 className="text-lg font-display font-bold text-white tracking-tight leading-tight">
                          {exp.jobTitle}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-gray-300 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 gap-1.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400/85" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Content Button */}
                  <button
                    id={`toggle-exp-detail-${exp.id}`}
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full flex items-center justify-between text-xs font-mono text-emerald-400 hover:text-emerald-300 py-3 transition cursor-pointer"
                  >
                    <span>
                      {isExpanded 
                        ? (language === "en" ? "Hide Operational Tasks" : "Sembunyikan Tugas Operasional") 
                        : (language === "en" ? "Expand Operational Tasks & Achievements" : "Tampilkan Tugas Operasional & Pencapaian")}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Core Content Body (Collapsible) */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-5 pt-2"
                    >
                      {/* Responsibilities list */}
                      <div>
                        <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400 mb-2">
                          {language === "en" ? "Core Responsibilities & Workflow:" : "Tanggung Jawab Utama & Alur Kerja:"}
                        </h4>
                        <ul className="flex flex-col gap-2 pl-1">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index} className="text-xs text-gray-400 leading-relaxed flex gap-2.5 items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0 mt-1.5"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements Sub-block */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl flex flex-col gap-2.5">
                          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400">
                            {language === "en" ? "Key Achievements & Quantifiable Metrics:" : "Pencapaian Utama & Metrik Terukur:"}
                          </h4>
                          <ul className="flex flex-col gap-2 pl-1">
                            {exp.achievements.map((ach, index) => (
                              <li key={index} className="text-xs text-gray-300 leading-relaxed flex gap-2.5 items-start font-medium">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
