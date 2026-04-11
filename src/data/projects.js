export const allProjects = [
  {
    slug: "smart-factory-node-monitoring",
    title: {
      id: "Smart Factory Node Monitoring",
      en: "Smart Factory Node Monitoring"
    },
    description: {
      id: "Sistem monitoring vibration dan temperature untuk mendukung preventive maintenance pada line produksi.",
      en: "A vibration and temperature monitoring system to support preventive maintenance on production lines."
    },
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1000&q=80",
    alt: "sensor and pcb",
    tags: ["ESP32", "MQTT", "React"],
    categories: ["iot", "fullstack"],
    role: {
      id: "Lead IoT Engineer",
      en: "Lead IoT Engineer"
    },
    timeline: {
      id: "4 bulan",
      en: "4 months"
    },
    problem: {
      id: "Tim maintenance menerima laporan kondisi mesin secara terlambat sehingga indikasi kerusakan sering baru diketahui saat downtime sudah terjadi.",
      en: "Maintenance teams received machine condition reports too late, so early failure indicators were often detected only after downtime occurred."
    },
    solution: {
      id: "Membangun edge node berbasis ESP32 dengan sensor vibration-temperature yang mengirim data kontinu ke dashboard maintenance real-time.",
      en: "Built ESP32-based edge nodes with vibration-temperature sensors that continuously stream data to a real-time maintenance dashboard."
    },
    architecture: [
      {
        id: "ESP32 membaca sensor setiap 2 detik",
        en: "ESP32 reads sensors every 2 seconds"
      },
      {
        id: "Data dikirim ke MQTT broker dengan QoS 1",
        en: "Data is sent to MQTT broker using QoS 1"
      },
      {
        id: "Node.js subscriber melakukan validasi threshold",
        en: "Node.js subscriber validates threshold values"
      },
      {
        id: "WebSocket push update ke React dashboard",
        en: "WebSocket pushes updates to the React dashboard"
      }
    ],
    outcomes: [
      {
        id: "Kecepatan deteksi gejala awal kerusakan meningkat hingga 35%",
        en: "Early failure symptom detection speed improved by up to 35%"
      },
      {
        id: "Downtime tidak terencana berkurang hingga 18%",
        en: "Unplanned downtime was reduced by up to 18%"
      },
      {
        id: "Waktu respons maintenance turun dari hitungan jam menjadi hitungan menit",
        en: "Maintenance response time decreased from hours to minutes"
      }
    ],
    links: {
      demo: "#",
      repo: "#"
    }
  },
  {
    slug: "order-management-platform",
    title: {
      id: "Order Management Platform",
      en: "Order Management Platform"
    },
    description: {
      id: "Platform multi-role untuk approval, kontrol stok, dan procurement analytics dalam satu alur kerja.",
      en: "A multi-role platform for approvals, inventory control, and procurement analytics in one workflow."
    },
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    alt: "code editor",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    categories: ["fullstack"],
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer"
    },
    timeline: {
      id: "3 bulan",
      en: "3 months"
    },
    problem: {
      id: "Proses approval order dan validasi stok tersebar di banyak spreadsheet sehingga menimbulkan bottleneck antar departemen.",
      en: "Order approval and stock validation were spread across multiple spreadsheets, creating cross-department bottlenecks."
    },
    solution: {
      id: "Mendesain platform web terpusat dengan role-based access, pipeline approval terstruktur, dan analytics procurement harian.",
      en: "Designed a centralized web platform with role-based access, structured approval pipelines, and daily procurement analytics."
    },
    architecture: [
      {
        id: "Frontend Next.js untuk multi-role workflow",
        en: "Next.js frontend for multi-role workflows"
      },
      {
        id: "API Node.js untuk orchestrasi approval",
        en: "Node.js API for approval orchestration"
      },
      {
        id: "PostgreSQL untuk transaksi dan audit trail",
        en: "PostgreSQL for transactions and audit trails"
      },
      {
        id: "Caching query laporan dengan Redis",
        en: "Report query caching with Redis"
      }
    ],
    outcomes: [
      {
        id: "Siklus approval berkurang dari 2 hari menjadi sekitar 4 jam",
        en: "Approval cycle was reduced from 2 days to around 4 hours"
      },
      {
        id: "Kesalahan input order berkurang hingga 40%",
        en: "Order input errors were reduced by up to 40%"
      },
      {
        id: "Tim manajemen mendapatkan visibilitas KPI procurement secara real-time",
        en: "Management gained real-time visibility of procurement KPIs"
      }
    ],
    links: {
      demo: "#",
      repo: "#"
    }
  },
  {
    slug: "field-device-mobile-dashboard",
    title: {
      id: "Field Device Mobile Dashboard",
      en: "Field Device Mobile Dashboard"
    },
    description: {
      id: "Aplikasi mobile untuk kontrol perangkat lapangan dengan notifikasi alarm kritis secara real-time.",
      en: "A mobile app for field device control with real-time critical alert notifications."
    },
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
    alt: "mobile dashboard",
    tags: ["React Native", "Socket.IO", "Firebase"],
    categories: ["mobile", "iot"],
    role: {
      id: "IoT + Mobile Engineer",
      en: "IoT + Mobile Engineer"
    },
    timeline: {
      id: "2.5 bulan",
      en: "2.5 months"
    },
    problem: {
      id: "Supervisor lapangan kesulitan memantau status perangkat saat berada jauh dari panel kontrol utama.",
      en: "Field supervisors struggled to monitor device status when away from the main control panel."
    },
    solution: {
      id: "Membangun aplikasi mobile untuk monitoring dan kontrol terbatas dengan notifikasi alarm prioritas tinggi agar respons insiden lebih cepat.",
      en: "Built a mobile app for monitoring and limited control with high-priority alarm notifications to speed up incident response."
    },
    architecture: [
      {
        id: "Device gateway publish data status via Socket.IO",
        en: "Device gateway publishes status data via Socket.IO"
      },
      {
        id: "Service backend mengelola alarm dan escalation",
        en: "Backend service manages alarms and escalation flow"
      },
      {
        id: "React Native app menerima push event real-time",
        en: "React Native app receives real-time push events"
      },
      {
        id: "Firebase dipakai untuk notifikasi lintas platform",
        en: "Firebase handles cross-platform push notifications"
      }
    ],
    outcomes: [
      {
        id: "Waktu respons insiden lapangan berkurang hingga 50%",
        en: "Field incident response time was reduced by up to 50%"
      },
      {
        id: "Adopsi aplikasi mobile oleh operator mencapai > 90%",
        en: "Mobile app adoption by operators reached > 90%"
      },
      {
        id: "Alarm kritis tidak lagi terlewat selama operasional shift malam",
        en: "Critical alarms were no longer missed during night-shift operations"
      }
    ],
    links: {
      demo: "#",
      repo: "#"
    }
  }
];

export const featuredProjects = allProjects.slice(0, 3);

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}
