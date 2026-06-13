const caseStudy = {
  slug: "pc-mini-industrial-dashboard",
  title: {
    id: "PC Mini Industrial Dashboard — Monitoring Timbangan M-Tech",
    en: "PC Mini Industrial Dashboard — M-Tech Weighing Monitor",
  },
  eyebrow: {
    id: "STUDI KASUS INDUSTRI",
    en: "INDUSTRIAL CASE STUDY",
  },
  navJourney: {
    id: "PERJALANAN DATA",
    en: "THE DATA JOURNEY",
  },
  navProblem: {
    id: "Masalah",
    en: "Problem",
  },
  navOutcome: {
    id: "Hasil",
    en: "Outcome",
  },
  roleIntro: {
    id: "Peran: IoT System Engineer & Fullstack Developer. Membangun sistem monitoring timbangan material input pada line M-Tech dengan komunikasi Serial PLC ke Raspberry Pi, WebSocket ke Mini PC, dan integrasi data MO ke services.ama.id.",
    en: "Role: IoT System Engineer & Fullstack Developer. Built a material weighing monitoring system for the M-Tech line with Serial PLC communication to Raspberry Pi, WebSocket to Mini PC, and MO data integration to services.ama.id.",
  },
  problem: {
    id: "Pada line M-Tech, proses penimbangan material input dilakukan oleh PLC Timbangan Otomatis dengan dua sensor timbangan. Operator hanya bisa melihat berat yang tampil di panel PLC saat itu — tidak ada pencatatan otomatis, tidak ada riwayat cycle, dan tidak ada visualisasi real-time. Data MO (Manufacturing Order) dari ERP harus di-input manual dan tidak terintegrasi dengan proses timbangan. Akibatnya, rekapitulasi produksi harian dilakukan manual, rawan human error, dan informasi MO tidak tersambung dengan realisasi timbangan di lapangan.",
    en: "On the M-Tech line, the material weighing process was handled by an Automatic Weighing PLC with two weighing sensors. Operators could only see the current weight on the PLC panel — no automatic logging, no cycle history, and no real-time visualization. MO (Manufacturing Order) data from the ERP had to be entered manually and was not integrated with the weighing process. As a result, daily production recaps were done manually, prone to human error, and MO information was not connected to actual weighing data on the floor.",
  },
  architectureTitle: {
    id: "Arsitektur Sistem",
    en: "System Architecture",
  },
  architectureSteps: [
    {
      label: { id: "PLC Timbangan", en: "Weighing PLC" },
      sub: { id: "2 sensor timbangan", en: "2 weighing sensors" },
    },
    {
      label: { id: "Serial RS232", en: "Serial RS232" },
      sub: { id: "Data real-time", en: "Real-time data" },
    },
    {
      label: { id: "Raspberry Pi", en: "Raspberry Pi" },
      sub: { id: "Gateway serial", en: "Serial gateway" },
    },
    {
      label: { id: "WebSocket", en: "WebSocket" },
      sub: { id: "Stream data", en: "Data stream" },
    },
    {
      label: { id: "Mini PC", en: "Mini PC" },
      sub: { id: "Dashboard + MO", en: "Dashboard + MO" },
    },
    {
      label: { id: "services.ama.id", en: "services.ama.id" },
      sub: { id: "Sinyal MO selesai", en: "MO completion signal" },
    },
  ],
  technicalTitle: {
    id: "Implementasi Teknis",
    en: "Technical Implementation",
  },
  layers: [
    {
      title: {
        id: "Layer PLC & Field Device",
        en: "PLC & Field Device Layer",
      },
      body: {
        id: "PLC Timbangan Otomatis menangani dua sensor timbangan untuk material input. Setiap kali push button ditekan, motor menyala dan mengeluarkan material ke bak tampung hingga batas yang sudah diset di PLC tercapai. Data berat real-time dari kedua timbangan dikirim melalui komunikasi Serial (RS232).",
        en: "An Automatic Weighing PLC handles two weighing sensors for input material. Each time the push button is pressed, the motor runs and releases material into the holding bin until the PLC-set limit is reached. Real-time weight data from both sensors is transmitted via Serial (RS232) communication.",
      },
    },
    {
      title: {
        id: "Layer Gateway & Streaming",
        en: "Gateway & Streaming Layer",
      },
      body: {
        id: "Raspberry Pi membaca data serial dari PLC secara real-time dan mengirimkannya ke Mini PC melalui WebSocket. Tidak ada middleware backend — data langsung dialirkan dari RPi ke dashboard visual. Pendekatan ini meminimalkan latency dan menjaga kesederhanaan arsitektur.",
        en: "A Raspberry Pi reads serial data from the PLC in real-time and sends it to the Mini PC via WebSocket. No middleware backend — data flows directly from the RPi to the visual dashboard. This approach minimizes latency and keeps the architecture simple.",
      },
    },
    {
      title: {
        id: "Layer Dashboard & Integrasi",
        en: "Dashboard & Integration Layer",
      },
      body: {
        id: "Mini PC menjalankan dashboard yang menampilkan berat real-time kedua timbangan, cycle pengisian, dan progress MO. Operator juga dapat meng-input Manufacturing Order dari ERP — dashboard akan menghitung target kg vs realisasi serta jumlah cycle. Saat MO terselesaikan, Mini PC mengirim sinyal ke services.ama.id memberitahu total kg dan total cycle yang keluar. Dilengkapi fitur print struk data untuk setiap timbangan.",
        en: "The Mini PC runs a dashboard displaying real-time weight from both sensors, filling cycles, and MO progress. Operators can also input Manufacturing Orders from the ERP — the dashboard calculates target kg vs actual and cycle count. When an MO is completed, the Mini PC sends a signal to services.ama.id reporting total kg and total cycles. Includes a receipt print feature for each weighing sensor.",
      },
    },
  ],
  outcomes: [
    {
      label: {
        id: "Monitoring Real-time",
        en: "Real-time Monitoring",
      },
      value: "2 timbangan",
    },
    {
      label: {
        id: "MO Terintegrasi",
        en: "MO Integration",
      },
      value: "ERP → Dashboard",
    },
    {
      label: {
        id: "Laporan Otomatis",
        en: "Auto Reporting",
      },
      value: "ke services.ama.id",
    },
  ],
};

export default caseStudy;
