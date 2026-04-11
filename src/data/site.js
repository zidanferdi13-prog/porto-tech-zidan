export const siteProfile = {
  name: "Zidan Ferdiansyah",
  role: {
    id: "IoT Engineer & Fullstack Programmer",
    en: "IoT Engineer & Fullstack Programmer"
  },
  summary: {
    id: "IoT Engineer dan Fullstack Programmer yang membangun solusi end-to-end dari integrasi perangkat, pipeline data real-time, hingga dashboard operasional untuk kebutuhan industri.",
    en: "IoT Engineer and Fullstack Programmer building end-to-end solutions from device integration and real-time data pipelines to operational dashboards for industrial use cases."
  },
  location: {
    id: "Indonesia",
    en: "Indonesia"
  },
  availability: {
    id: "Terbuka untuk kolaborasi full-time maupun freelance",
    en: "Open for full-time and freelance collaboration"
  },
  experienceYears: {
    id: "5+ Tahun",
    en: "5+ Years"
  },
  resumeUrl: "#",
  email: "zidanferdi13@gmail.com",
  linkedin: "https://linkedin.com/in/zidan-ferdiansyah",
  github: "https://github.com/zidan-tech"
};

export const experienceTimeline = [
  {
    period: {
      id: "2025 - Sekarang",
      en: "2025 - Present"
    },
    role: {
      id: "IT System & IoT Engineer",
      en: "IT System & IoT Engineer"
    },
    organization: {
      id: "PT Anugerah Mortar Abadi",
      en: "PT Anugerah Mortar Abadi"
    },
    highlights: [
      {
        id: "Mengimplementasikan sistem monitoring mesin real-time berbasis MQTT dan WebSocket untuk visibilitas proses produksi.",
        en: "Implemented real-time machine monitoring using MQTT and WebSocket to improve production process visibility."
      },
      {
        id: "Mengembangkan dashboard operasional untuk tim Produksi dan QA agar keputusan lapangan dapat diambil lebih cepat.",
        en: "Developed operational dashboards for Production and QA teams to enable faster on-floor decision making."
      },
      {
        id: "Merancang arsitektur data dari edge device ke cloud dengan fokus reliabilitas, keterlacakan, dan skalabilitas.",
        en: "Designed data architecture from edge devices to cloud services with a focus on reliability, traceability, and scalability."
      }
    ]
  },
  {
    period: {
      id: "2023 - 2025",
      en: "2023 - 2025"
    },
    role: {
      id: "IoT Engineer",
      en: "IoT Engineer"
    },
    organization: {
      id: "PT Pamapersada Nusantara",
      en: "PT Pamapersada Nusantara"
    },
    highlights: [
      {
        id: "Membangun platform order, approval, dan procurement analytics untuk menyederhanakan alur kerja lintas departemen.",
        en: "Built order, approval, and procurement analytics platforms to streamline cross-department workflows."
      },
      {
        id: "Mendesain REST API service untuk orkestrasi workflow bisnis dan integrasi antar sistem internal.",
        en: "Designed REST API services for business workflow orchestration and internal system integration."
      },
      {
        id: "Meningkatkan performa query laporan melalui strategi indexing dan caching di layer backend.",
        en: "Improved report query performance through indexing and backend caching strategies."
      }
    ]
  }
];

export const skillRadar = [
  { name: "ESP32 / Embedded", level: 88, group: { id: "IoT", en: "IoT" } },
  { name: "MQTT / Realtime Protocol", level: 90, group: { id: "IoT", en: "IoT" } },
  { name: "Node.js / API", level: 87, group: { id: "Backend", en: "Backend" } },
  {
    name: "PostgreSQL / Data Modeling",
    level: 84,
    group: { id: "Backend", en: "Backend" }
  },
  { name: "React / Next.js", level: 89, group: { id: "Frontend", en: "Frontend" } },
  {
    name: "System Integration",
    level: 91,
    group: { id: "Arsitektur", en: "Architecture" }
  }
];

export function getSiteUrl() {
  if (typeof window !== "undefined") {
    return import.meta.env.VITE_SITE_URL || window.location.origin;
  }

  return import.meta.env.VITE_SITE_URL || "https://example.com";
}
