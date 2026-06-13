export const siteProfile = {
  name: "Zidan Ferdiansyah",
  role: {
    id: "IoT Engineer & Fullstack Programmer",
    en: "IoT Engineer & Fullstack Programmer",
  },
  summary: {
    id: "IoT Engineer dan Fullstack Programmer dengan pengalaman 5+ tahun di industri manufaktur. Spesialisasi dalam membangun sistem monitoring real-time, integrasi perangkat IoT (ESP32, Raspberry Pi, PLC), pipeline data dari edge ke cloud, dan dashboard operasional untuk tim produksi.",
    en: "IoT Engineer and Fullstack Programmer with 5+ years of experience in the manufacturing industry. Specializes in building real-time monitoring systems, IoT device integration (ESP32, Raspberry Pi, PLC), edge-to-cloud data pipelines, and operational dashboards for production teams.",
  },
  location: {
    id: "Indonesia",
    en: "Indonesia",
  },
  availability: {
    id: "Terbuka untuk full-time, freelance, dan konsultasi IoT industri",
    en: "Open for full-time, freelance, and industrial IoT consultation",
  },
  experienceYears: {
    id: "5+ Tahun",
    en: "5+ Years",
  },
  resumeUrl: "#",
  email: "zidanferdi13@gmail.com",
  linkedin: "https://linkedin.com/in/zidan-ferdiansyah",
  github: "https://github.com/zidan-tech",
};

export const experienceTimeline = [
  {
    period: {
      id: "2025 - Sekarang",
      en: "2025 - Present",
    },
    role: {
      id: "IT System & IoT Engineer",
      en: "IT System & IoT Engineer",
    },
    organization: {
      id: "PT Anugerah Mortar Abadi",
      en: "PT Anugerah Mortar Abadi",
    },
    highlights: [
      {
        id: "Mengembangkan PC Mini Industrial Dashboard untuk monitoring real-time mesin M-Tech dengan gateway Raspberry Pi dan integrasi PLC via Modbus",
        en: "Developed PC Mini Industrial Dashboard for real-time M-Tech machine monitoring with Raspberry Pi gateway and PLC integration via Modbus",
      },
      {
        id: "Membangun sistem absensi RFID berbasis Raspberry Pi untuk manajemen workforce dan tracking konsumsi makan",
        en: "Built RFID-based attendance system on Raspberry Pi for workforce management and meal consumption tracking",
      },
      {
        id: "Merancang dashboard Manufacturing Order (MO) dan QC Rework untuk monitoring KPI produksi harian secara real-time",
        en: "Designed Manufacturing Order (MO) and QC Rework dashboards for real-time daily production KPI monitoring",
      },
      {
        id: "Mengimplementasikan IoT Device Health Monitor dengan cron job dan notifikasi otomatis ke Telegram (zero-cost)",
        en: "Implemented IoT Device Health Monitor with cron jobs and automatic Telegram notifications (zero-cost)",
      },
    ],
  },
  {
    period: {
      id: "2023 - 2025",
      en: "2023 - 2025",
    },
    role: {
      id: "IoT Engineer",
      en: "IoT Engineer",
    },
    organization: {
      id: "PT Pamapersada Nusantara",
      en: "PT Pamapersada Nusantara",
    },
    highlights: [
      {
        id: "Membangun platform order, approval, dan procurement analytics untuk menyederhanakan alur kerja lintas departemen",
        en: "Built order, approval, and procurement analytics platforms to streamline cross-department workflows",
      },
      {
        id: "Mendesain REST API service untuk orkestrasi workflow bisnis dan integrasi antar sistem internal",
        en: "Designed REST API services for business workflow orchestration and internal system integration",
      },
      {
        id: "Mengembangkan dashboard real-time berbasis WebSocket untuk monitoring operasional dengan respons milidetik",
        en: "Developed real-time WebSocket-based dashboards for operational monitoring with millisecond response times",
      },
    ],
  },
];

export const skillRadar = [
  { name: "ESP32 / Embedded", level: 88, group: { id: "IoT", en: "IoT" } },
  { name: "Raspberry Pi / Gateway", level: 85, group: { id: "IoT", en: "IoT" } },
  { name: "PLC / Modbus Integration", level: 78, group: { id: "IoT", en: "IoT" } },
  { name: "MQTT / Realtime Protocol", level: 90, group: { id: "IoT", en: "IoT" } },
  { name: "Node.js / Express.js", level: 87, group: { id: "Backend", en: "Backend" } },
  { name: "PostgreSQL / MySQL", level: 84, group: { id: "Backend", en: "Backend" } },
  { name: "React / Next.js", level: 89, group: { id: "Frontend", en: "Frontend" } },
  { name: "WebSocket / Real-time", level: 86, group: { id: "Frontend", en: "Frontend" } },
  {
    name: "System Integration",
    level: 91,
    group: { id: "Arsitektur", en: "Architecture" },
  },
  { name: "REST API Design", level: 88, group: { id: "Arsitektur", en: "Architecture" } },
];

export function getSiteUrl() {
  if (typeof window !== "undefined") {
    return import.meta.env.VITE_SITE_URL || window.location.origin;
  }

  return import.meta.env.VITE_SITE_URL || "https://example.com";
}
