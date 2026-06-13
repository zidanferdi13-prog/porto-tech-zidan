export const allProjects = [
  {
    slug: "pc-mini-industrial-dashboard",
    title: {
      id: "PC Mini Industrial Dashboard",
      en: "PC Mini Industrial Dashboard",
    },
    description: {
      id: "Monitoring timbangan material input pada line M-Tech dengan PLC 2 sensor, komunikasi Serial via Raspberry Pi, WebSocket ke Mini PC, dan integrasi MO ke services.ama.id.",
      en: "Input material weighing monitor for the M-Tech line with a 2-sensor PLC, Serial communication via Raspberry Pi, WebSocket to Mini PC, and MO integration to services.ama.id.",
    },
    image: "/images/dashboard-mtech.png",
    alt: "PC Mini industrial dashboard real-time monitoring timbangan M-Tech",
    tags: ["Raspberry Pi", "PLC", "Serial RS232", "WebSocket", "Mini PC", "React"],
    categories: ["iot", "fullstack", "dashboard"],
    role: {
      id: "IoT System Engineer & Fullstack Developer",
      en: "IoT System Engineer & Fullstack Developer",
    },
    timeline: {
      id: "6 minggu",
      en: "6 weeks",
    },
    problem: {
      id: "Operator dan tim maintenance harus berjalan ke panel kontrol utama setiap kali ingin melihat status mesin M-Tech. Tidak ada display real-time di lantai produksi sehingga indikasi awal kerusakan sering terlewat hingga terjadi downtime.",
      en: "Operators and maintenance teams had to walk to the main control panel every time they needed to check M-Tech machine status. No real-time display on the production floor meant early failure indicators were often missed until downtime occurred.",
    },
    solution: {
      id: "Memasang PC Mini di dekat line produksi dengan dashboard web real-time. Raspberry Pi bertindak sebagai gateway yang membaca data dari PLC mesin dan mengirimkannya ke backend untuk ditampilkan di dashboard.",
      en: "Installed a PC Mini near the production line with a real-time web dashboard. A Raspberry Pi acts as a gateway that reads data from machine PLCs and sends it to the backend for dashboard display.",
    },
    architecture: [
      {
        id: "PLC mesin M-Tech mengirim data produksi via Modbus TCP",
        en: "M-Tech machine PLC sends production data via Modbus TCP",
      },
      {
        id: "Raspberry Pi gateway membaca dan memproses data setiap 2 detik",
        en: "Raspberry Pi gateway reads and processes data every 2 seconds",
      },
      {
        id: "Node.js backend menerima data dan push via WebSocket",
        en: "Node.js backend receives data and pushes via WebSocket",
      },
      {
        id: "React dashboard pada PC Mini menampilkan visual real-time tanpa refresh",
        en: "React dashboard on PC Mini displays real-time visuals without page refresh",
      },
    ],
    outcomes: [
      {
        id: "Operator dapat melihat kondisi mesin secara real-time langsung dari lantai produksi",
        en: "Operators can see machine conditions in real-time directly from the production floor",
      },
      {
        id: "Indikasi awal kerusakan terdeteksi 15-20 menit lebih cepat dari sebelumnya",
        en: "Early failure indicators are detected 15-20 minutes faster than before",
      },
      {
        id: "Tim maintenance tidak perlu lagi berjalan ke panel kontrol untuk pengecekan rutin",
        en: "Maintenance team no longer needs to walk to the control panel for routine checks",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
  },
  {
    slug: "rfid-workforce-management",
    title: {
      id: "RFID Workforce & Meal Management",
      en: "RFID Workforce & Meal Management",
    },
    description: {
      id: "Sistem absensi dan tracking konsumsi makan berbasis RFID card dengan Raspberry Pi, sinkronisasi cloud, dan laporan otomatis.",
      en: "An RFID card-based attendance and meal consumption tracking system with Raspberry Pi, cloud synchronization, and automated reports.",
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    alt: "rfid card reader and industrial access system",
    tags: ["Raspberry Pi", "RFID", "Node.js", "PostgreSQL", "Cloud Sync"],
    categories: ["iot", "fullstack", "enterprise"],
    role: {
      id: "IoT System Engineer",
      en: "IoT System Engineer",
    },
    timeline: {
      id: "3 minggu",
      en: "3 weeks",
    },
    problem: {
      id: "Absensi dan tracking konsumsi makan karyawan masih manual menggunakan kertas atau kartu fisik tanpa data terpusat. Rekapitulasi memakan waktu dan rawan kesalahan input.",
      en: "Attendance and meal consumption tracking were still manual using paper or physical cards with no centralized data. Recaps were time-consuming and prone to input errors.",
    },
    solution: {
      id: "Membangun sistem RFID tap berbasis Raspberry Pi di titik-titik strategis. Karyawan cukup menempelkan kartu RFID, data otomatis tercatat dan sinkron ke cloud untuk dashboard admin dan laporan.",
      en: "Built an RFID tap system based on Raspberry Pi at strategic points. Employees simply tap their RFID card, data is automatically recorded and synced to the cloud for admin dashboards and reports.",
    },
    architecture: [
      {
        id: "Raspberry Pi dengan modul RFID RC522 membaca kartu karyawan",
        en: "Raspberry Pi with RFID RC522 module reads employee cards",
      },
      {
        id: "Data tap dikirim ke cloud API via HTTP dengan retry logic",
        en: "Tap data is sent to cloud API via HTTP with retry logic",
      },
      {
        id: "Node.js backend memvalidasi dan menyimpan ke PostgreSQL",
        en: "Node.js backend validates and stores data in PostgreSQL",
      },
      {
        id: "Dashboard admin menampilkan rekap absensi dan konsumsi harian",
        en: "Admin dashboard shows attendance and daily consumption recaps",
      },
    ],
    outcomes: [
      {
        id: "Proses absensi dari 5 menit manual menjadi < 1 detik tap card",
        en: "Attendance process reduced from 5 minutes manual to < 1 second tap",
      },
      {
        id: "Rekap konsumsi makan otomatis tanpa intervensi admin",
        en: "Automated meal consumption recap with zero admin intervention",
      },
      {
        id: "Data real-time tersedia kapan saja untuk keperluan audit dan laporan",
        en: "Real-time data available anytime for audit and reporting needs",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
  },
  {
    slug: "manufacturing-order-dashboard",
    title: {
      id: "Manufacturing Order Dashboard",
      en: "Manufacturing Order Dashboard",
    },
    description: {
      id: "Dashboard monitoring MO (Manufacturing Order) dengan KPI real-time, tracking status line, dan completion rate untuk tim produksi dan QA.",
      en: "A Manufacturing Order (MO) monitoring dashboard with real-time KPIs, production line status tracking, and completion rates for Production and QA teams.",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    alt: "data dashboard analytics",
    tags: ["React", "Express.js", "PostgreSQL", "KPI", "Dashboard"],
    categories: ["fullstack", "dashboard"],
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    timeline: {
      id: "3 minggu",
      en: "3 weeks",
    },
    problem: {
      id: "Tim produksi kesulitan memantau status Manufacturing Order (MO) secara real-time. Data MO tersebar di laporan harian dan spreadsheet, sehingga keterlambatan produksi baru diketahui saat akhir shift.",
      en: "The production team struggled to monitor Manufacturing Order (MO) status in real-time. MO data was scattered across daily reports and spreadsheets, so production delays were only discovered at the end of each shift.",
    },
    solution: {
      id: "Mengembangkan dashboard MO terpusat dengan KPI cards, progress bar per order, dan notifikasi status. Data diambil langsung dari database produksi melalui REST API service.",
      en: "Developed a centralized MO dashboard with KPI cards, per-order progress bars, and status notifications. Data is pulled directly from the production database via a REST API service.",
    },
    architecture: [
      {
        id: "Data MO dari database produksi diakses via REST API",
        en: "MO data from the production database is accessed via REST API",
      },
      {
        id: "Express.js backend menyediakan endpoint dengan query optimasi",
        en: "Express.js backend provides endpoints with optimized queries",
      },
      {
        id: "React dashboard autorefresh setiap 30 detik untuk data real-time",
        en: "React dashboard auto-refreshes every 30 seconds for real-time data",
      },
      {
        id: "Filter by line, status, dan periode untuk analisis lebih dalam",
        en: "Filter by line, status, and period for deeper analysis",
      },
    ],
    outcomes: [
      {
        id: "Visibilitas MO real-time tanpa harus menunggu laporan akhir shift",
        en: "Real-time MO visibility without waiting for end-of-shift reports",
      },
      {
        id: "Tim produksi dapat mengidentifikasi bottleneck 2-3 jam lebih cepat",
        en: "Production team can identify bottlenecks 2-3 hours faster",
      },
      {
        id: "Completion rate harian terpantau langsung oleh supervisor dan manajer",
        en: "Daily completion rate is directly monitored by supervisors and managers",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
  },
  {
    slug: "iot-device-health-monitor",
    title: {
      id: "IoT Device Health Monitor",
      en: "IoT Device Health Monitor",
    },
    description: {
      id: "Sistem monitoring kesehatan perangkat IoT, server, dan jaringan berbasis cron dengan notifikasi otomatis ke Telegram. Zero-cost improvement.",
      en: "A health monitoring system for IoT devices, servers, and network equipment based on cron jobs with automatic Telegram notifications. A zero-cost improvement.",
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    alt: "server rack monitoring",
    tags: ["Bash", "Cron", "Telegram Bot", "Ping", "Monitoring"],
    categories: ["iot", "devops"],
    role: {
      id: "IoT System Engineer",
      en: "IoT System Engineer",
    },
    timeline: {
      id: "1 minggu",
      en: "1 week",
    },
    problem: {
      id: "Tidak ada sistem monitoring untuk perangkat IoT, server, dan jaringan kantor. Downtime baru diketahui saat ada komplain dari pengguna atau saat ada device yang tidak terhubung ke sistem produksi.",
      en: "There was no monitoring system for IoT devices, servers, and office network equipment. Downtime was only discovered when users complained or when a device disconnected from the production system.",
    },
    solution: {
      id: "Membangun sistem monitoring berbasis cron job dengan ping sweep dan pengecekan port. Status device dikirim otomatis ke Telegram group tim IT. Total biaya: Rp 0 (menggunakan infrastruktur existing).",
      en: "Built a cron-based monitoring system with ping sweeps and port checks. Device status is automatically sent to the IT team's Telegram group. Total cost: Rp 0 (using existing infrastructure).",
    },
    architecture: [
      {
        id: "Cron job menjalankan ping ke semua device setiap 5 menit",
        en: "Cron job pings all devices every 5 minutes",
      },
      {
        id: "Script memeriksa status UP/DOWN dan mencatat histori",
        en: "Script checks UP/DOWN status and logs history",
      },
      {
        id: "Jika device DOWN, notifikasi otomatis dikirim ke Telegram",
        en: "If a device is DOWN, automatic notification is sent to Telegram",
      },
      {
        id: "Dashboard web untuk melihat histori uptime device",
        en: "Web dashboard to view device uptime history",
      },
    ],
    outcomes: [
      {
        id: "Downtime perangkat terdeteksi dalam < 5 menit (dari sebelumnya berjam-jam)",
        en: "Device downtime detected in < 5 minutes (down from hours)",
      },
      {
        id: "Tim IT mendapat notifikasi langsung tanpa perlu dicek manual",
        en: "IT team receives immediate notifications without manual checks",
      },
      {
        id: "Implementasi zero-cost tanpa tambahan hardware atau lisensi",
        en: "Zero-cost implementation without additional hardware or licenses",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
  },
  {
    slug: "quality-control-rework-dashboard",
    title: {
      id: "Quality Control & Rework Dashboard",
      en: "Quality Control & Rework Dashboard",
    },
    description: {
      id: "Dashboard digital untuk tracking data rework dan QC dengan filter multi-dimensi, visualisasi chart, dan ekspor ke Excel.",
      en: "A digital dashboard for rework and QC data tracking with multi-dimensional filters, chart visualizations, and Excel export.",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    alt: "quality analytics dashboard",
    tags: ["React", "Express.js", "Chart.js", "PostgreSQL", "Export"],
    categories: ["fullstack", "dashboard", "quality"],
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    timeline: {
      id: "2 minggu",
      en: "2 weeks",
    },
    problem: {
      id: "Data rework dan QC dicatat manual di form kertas dan baru diinput ke Excel di akhir hari. Akibatnya analisis tren rework lambat, sulit mengidentifikasi pola kerusakan, dan pelaporan ke manajemen memakan waktu.",
      en: "Rework and QC data were manually recorded on paper forms and only entered into Excel at the end of the day. This caused slow trend analysis, difficulty identifying damage patterns, and time-consuming management reporting.",
    },
    solution: {
      id: "Membangun dashboard digital dengan input form real-time, filter by jenis rework, departemen, dan periode. Ditambah visualisasi chart untuk analisis tren dan tombol ekspor Excel satu klik.",
      en: "Built a digital dashboard with real-time input forms, filters by rework type, department, and period. Added chart visualizations for trend analysis and one-click Excel export.",
    },
    architecture: [
      {
        id: "Form input digital menggantikan form kertas manual",
        en: "Digital input forms replace manual paper forms",
      },
      {
        id: "Data rework tersimpan di PostgreSQL dengan struktur ternormalisasi",
        en: "Rework data stored in PostgreSQL with normalized structure",
      },
      {
        id: "Chart.js untuk visualisasi tren rework per departemen dan jenis",
        en: "Chart.js for rework trend visualization by department and type",
      },
      {
        id: "Fitur ekspor Excel untuk kebutuhan laporan manajemen",
        en: "Excel export feature for management reporting needs",
      },
    ],
    outcomes: [
      {
        id: "Input data rework dari 30 menit (manual) menjadi 2 menit (digital)",
        en: "Rework data entry reduced from 30 minutes (manual) to 2 minutes (digital)",
      },
      {
        id: "Analisis tren rework dapat dilakukan kapan saja tanpa rekap manual",
        en: "Rework trend analysis can be done anytime without manual recaps",
      },
      {
        id: "Laporan manajemen dapat diekspor dalam 1 klik tanpa input ulang data",
        en: "Management reports can be exported in 1 click without re-entering data",
      },
    ],
    links: {
      demo: null,
      repo: null,
    },
  },
];

export const featuredProjects = allProjects.slice(0, 3);

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}
