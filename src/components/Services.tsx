import { motion } from "motion/react";
import { 
  Radio, 
  Layers, 
  Terminal, 
  Database, 
  Cpu, 
  Activity,
  Check
} from "lucide-react";
import { ServiceItem } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const services: ServiceItem[] = [
    {
      id: "srv_1",
      title: language === "en" ? "IIoT Monitoring Systems" : "Sistem Pemantauan IIoT",
      description: language === "en" 
        ? "Architect and implement robust, extreme-environment sensor networks that transmit real-time telemetry securely from field devices to local servers or cloud brokers."
        : "Merancang dan menerapkan jaringan sensor tangguh di lingkungan ekstrem yang mentransmisikan telemetri real-time dengan aman dari perangkat lapangan ke server lokal atau broker cloud.",
      iconName: "Radio",
      features: language === "en" ? [
        "Reliable edge gateway setups (Raspberry Pi, industrial routers)",
        "Over-the-air firmware setup & health diagnostics",
        "Protocols deployment: MQTT, Socket.IO, Modbus RTU/TCP",
        "Sensors, transducers, and load cells calibration workflows"
      ] : [
        "Konfigurasi gateway edge yang andal (Raspberry Pi, router industri)",
        "Konfigurasi firmware over-the-air & diagnostik kesehatan",
        "Penerapan protokol: MQTT, Socket.IO, Modbus RTU/TCP",
        "Alur kerja kalibrasi sensor, transduser, dan load cell"
      ]
    },
    {
      id: "srv_2",
      title: language === "en" ? "Real-Time Web Dashboards" : "Dasbor Web Real-Time",
      description: language === "en"
        ? "Build beautiful, fluid, high-performance web applications that visualize continuous machinery telemetries, operational KPIs, and sensor registers."
        : "Membangun aplikasi web berkinerja tinggi, indah, dan dinamis yang memvisualisasikan telemetri mesin berkelanjutan, KPI operasional, dan register sensor.",
      iconName: "Layers",
      features: language === "en" ? [
        "Interactive analytics dashboards styled in Tailwind & React",
        "Low-latency websocket triggers displaying millisecond updates",
        "Integrated custom reports generator (Excel/PDF exports)",
        "Fully responsive layouts optimized for command centers & mobile"
      ] : [
        "Dasbor analitik interaktif yang ditata dengan Tailwind & React",
        "Pemicu websocket latensi rendah yang menampilkan pembaruan milidetik",
        "Pembuat laporan kustom terintegrasi (ekspor Excel/PDF)",
        "Tata letak responsif penuh yang dioptimalkan untuk pusat komando & perangkat seluler"
      ]
    },
    {
      id: "srv_3",
      title: language === "en" ? "Node.js Backend & APIs" : "Backend & API Node.js",
      description: language === "en"
        ? "Construct scalable, secure server backends designed to ingest, process, and distribute thousands of high-velocity telemetry data packets per second."
        : "Membangun backend server yang aman dan berskala besar, dirancang untuk menerima, memproses, dan mendistribusikan ribuan paket data telemetri berkecepatan tinggi per detik.",
      iconName: "Terminal",
      features: language === "en" ? [
        "Express & TSX RESTful API structures and MQTT routing",
        "Device-to-Server packet authorization & secure token flows",
        "Websocket broadcast mechanisms (Socket.IO hubs)",
        "Automated background workers, data validation & compression"
      ] : [
        "Struktur RESTful API Express & TSX serta perutean MQTT",
        "Otorisasi paket Perangkat-ke-Server & aliran token aman",
        "Mekanisme siaran Websocket (hub Socket.IO)",
        "Pekerja latar belakang otomatis, validasi & kompresi data"
      ]
    },
    {
      id: "srv_4",
      title: language === "en" ? "Industrial PLC Integration" : "Integrasi PLC Industri",
      description: language === "en"
        ? "Bridge legacy Operational Technology (OT) and modern Enterprise IT frameworks by pulling sensor values directly from programmable logic controllers."
        : "Menghubungkan Teknologi Operasional (OT) warisan dan kerangka kerja IT Perusahaan modern dengan menarik nilai sensor langsung dari pengontrol logika terprogram.",
      iconName: "Cpu",
      features: language === "en" ? [
        "Siemens S7-1200 / S7-1500 Modbus TCP client integration",
        "CAN Bus J1939 vehicle telemetry frames acquisition",
        "SCADA systems (Siemens WinCC Explorer) interfaces",
        "Digitalizing old weighing scales and manual packaging plants"
      ] : [
        "Integrasi klien Modbus TCP Siemens S7-1200 / S7-1500",
        "Akuisisi bingkai telemetri kendaraan CAN Bus J1939",
        "Antarmuka sistem SCADA (Siemens WinCC Explorer)",
        "Digitalisasi timbangan lama dan pabrik pengemasan manual"
      ]
    },
    {
      id: "srv_5",
      title: language === "en" ? "Relational & NoSQL Databases" : "Database Relasional & NoSQL",
      description: language === "en"
        ? "Design performance-optimized, durable database schemas that maintain high write-speeds for endless logging streams and structured batch tracking."
        : "Merancang skema database tahan lama yang dioptimalkan kinerjanya, menjaga kecepatan penulisan tinggi untuk aliran log tanpa henti dan pelacakan batch terstruktur.",
      iconName: "Database",
      features: language === "en" ? [
        "MongoDB cluster architecture for fluid unstructured logs",
        "MariaDB / MySQL setups for relational business parameters",
        "Telemetry tables indexes optimization & indexing strategies",
        "Automated backup failovers & local offline cache buffers"
      ] : [
        "Arsitektur kluster MongoDB untuk log tidak terstruktur yang dinamis",
        "Konfigurasi MariaDB / MySQL untuk parameter bisnis relasional",
        "Optimasi indeks tabel telemetri & strategi pengindeksan",
        "Failover cadangan otomatis & buffer cache offline lokal"
      ]
    },
    {
      id: "srv_6",
      title: language === "en" ? "Automated Industrial Reporting" : "Pelaporan Industri Otomatis",
      description: language === "en"
        ? "Build automated, data-driven workflow notifications and schedules that replace manual clipboard recording, eliminating operational reporting friction."
        : "Membangun notifikasi alur kerja dan jadwal otomatis berbasis data yang menggantikan pencatatan papan klip manual, menghilangkan hambatan pelaporan operasional.",
      iconName: "Activity",
      features: language === "en" ? [
        "Node-RED automation flows connecting devices to Google APIs",
        "Email / WhatsApp automated warning alerts on critical limits",
        "Power BI scheduled datasets refreshes and visual reporting",
        "Operational downtime logging & performance diagnostics"
      ] : [
        "Alur otomatisasi Node-RED yang menghubungkan perangkat ke Google API",
        "Peringatan peringatan otomatis Email / WhatsApp pada batas kritis",
        "Penyegaran dataset terjadwal Power BI dan pelaporan visual",
        "Pencatatan downtime operasional & diagnostik kinerja"
      ]
    }
  ];

  // Helper to dynamically match icons
  const renderIcon = (name: string) => {
    switch (name) {
      case "Radio": return <Radio className="w-6 h-6 text-emerald-400" />;
      case "Layers": return <Layers className="w-6 h-6 text-emerald-400" />;
      case "Terminal": return <Terminal className="w-6 h-6 text-emerald-400" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-emerald-400" />;
      case "Database": return <Database className="w-6 h-6 text-emerald-400" />;
      case "Activity": return <Activity className="w-6 h-6 text-emerald-400" />;
      default: return <Radio className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dot-pattern">
      {/* Background blur */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

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
            {language === "en" ? "Professional Services" : "Layanan Profesional"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "How I Create Enterprise Value" : "Bagaimana Saya Menciptakan Nilai Perusahaan"}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            {language === "en"
              ? "Unifying hardware engineering and modern full-stack software development to build reliable, high-uptime digital systems."
              : "Menyatukan rekayasa perangkat keras dan pengembangan perangkat lunak full-stack modern untuk membangun sistem digital yang andal dan memiliki waktu aktif tinggi."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between h-full hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Icon wrapper */}
                <div className="p-3 bg-slate-900 rounded-xl border border-white/5 w-fit mb-6">
                  {renderIcon(srv.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white tracking-tight mb-3">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="border-t border-white/5 pt-5 mt-auto">
                <ul className="flex flex-col gap-2.5">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
