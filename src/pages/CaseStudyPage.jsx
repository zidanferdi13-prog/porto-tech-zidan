import React from "react";
import Seo from "../components/Seo";
import { useLanguage } from "../context/LanguageContext";
export default function CaseStudyPage() {
  const { isId } = useLanguage();
  const copy = {
    navJourney: isId ? "PERJALANAN DATA" : "THE DATA JOURNEY",
    navProblem: isId ? "Masalah" : "Problem",
    navOutcome: isId ? "Hasil" : "Outcome",
    eyebrow: isId ? "STUDI KASUS INDUSTRI" : "INDUSTRIAL CASE STUDY",
    roleIntro: isId
      ? "Peran: Lead IoT Engineer & Fullstack Developer. Membangun sistem monitoring mesin M-Tech dengan PC Mini display di lantai produksi."
      : "Role: Lead IoT Engineer & Fullstack Developer. Built an M-Tech machine monitoring system with a PC Mini display on the production floor.",
    problemBody: isId
      ? "Operator dan tim maintenance harus berjalan ke panel kontrol utama untuk melihat status mesin M-Tech. Tidak ada display di lantai produksi yang menunjukkan data real-time kondisi mesin, suhu, dan hasil produksi. Akibatnya, indikasi awal kerusakan sering terlewat hingga downtime terjadi, dan data historis tidak tercatat secara otomatis."
      : "Operators and maintenance teams had to walk to the main control panel to check the M-Tech machine status. There was no display on the production floor showing real-time machine conditions, temperature, and production output. As a result, early failure indicators were often missed until downtime occurred, and historical data was not automatically recorded.",
    architectureTitle: isId ? "Arsitektur Sistem" : "System Architecture",
    technicalTitle: isId ? "Implementasi Teknis" : "Technical Implementation",
    hardware: isId ? "Layer PLC & Field Device" : "PLC & Field Device Layer",
    hardwareBody: isId
      ? "PLC mesin M-Tech mengirim data produksi (suhu, kecepatan, status running, count produksi) via protokol Modbus TCP. Raspberry Pi berperan sebagai gateway yang membaca register PLC setiap 2 detik dan menerjemahkan data mentah menjadi format JSON yang siap diproses."
      : "The M-Tech machine PLC sends production data (temperature, speed, running status, production count) via Modbus TCP. A Raspberry Pi acts as a gateway that reads PLC registers every 2 seconds and translates raw data into JSON format ready for processing.",
    infra: isId ? "Layer Backend & Pipeline" : "Backend & Pipeline Layer",
    infraBody: isId
      ? "Node.js backend menerima data dari Raspberry Pi melalui REST API dan memprosesnya untuk validasi threshold. Data disimpan di PostgreSQL untuk riwayat dan analisis. WebSocket digunakan untuk push update real-time ke dashboard tanpa perlu pooling."
      : "The Node.js backend receives data from the Raspberry Pi via REST API and processes it for threshold validation. Data is stored in PostgreSQL for history and analysis. WebSocket is used to push real-time updates to the dashboard without polling.",
    app: isId ? "Layer Display & Dashboard" : "Display & Dashboard Layer",
    appBody: isId
      ? "PC Mini di lantai produksi menjalankan React dashboard yang menampilkan visualisasi real-time: status mesin, indikator suhu, count produksi, dan alert threshold. Dashboard menggunakan autorefresh via WebSocket sehingga operator melihat data terkini tanpa interaksi manual."
      : "A PC Mini on the production floor runs a React dashboard that displays real-time visualizations: machine status, temperature indicators, production count, and threshold alerts. The dashboard uses WebSocket auto-refresh so operators see current data without manual interaction.",
    delay: isId ? "Deteksi Downtime" : "Downtime Detection",
    visibility: isId ? "Visibilitas Produksi" : "Production Visibility",
    reliability: isId ? "Akurasi Data" : "Data Accuracy",
  };

  return (
    <main className="container case-layout">
      <Seo
        title={isId ? "Studi Kasus" : "Case Study"}
        description={
          isId
            ? "Studi kasus implementasi PC Mini Industrial Dashboard: integrasi PLC, Raspberry Pi gateway, Node.js backend, dan dashboard React real-time."
            : "Case study of PC Mini Industrial Dashboard implementation: PLC integration, Raspberry Pi gateway, Node.js backend, and React real-time dashboard."
        }
        path="/case-study"
      />
      <aside className="journey-nav mono reveal">
        <p>{copy.navJourney}</p>
        <a href="#problem">01 {copy.navProblem}</a>
        <a href="#architecture">02 {copy.architectureTitle}</a>
        <a href="#implementation">03 {copy.technicalTitle}</a>
        <a href="#outcome">04 {copy.navOutcome}</a>
      </aside>

      <section className="case-content">
        <article className="page-head reveal">
          <p className="eyebrow mono">{copy.eyebrow}</p>
          <h1>PC Mini Industrial Dashboard</h1>
          <p>{copy.roleIntro}</p>
        </article>

        <article id="problem" className="panel reveal">
          <h2>{isId ? "Masalah" : "Problem"}</h2>
          <p>{copy.problemBody}</p>
        </article>

        <article id="architecture" className="panel reveal">
          <h2>{copy.architectureTitle}</h2>
          <div className="flow-grid mono">
            <div className="node">
              PLC M-Tech
              <br />
              <span>Modbus TCP</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              Raspberry Pi
              <br />
              <span>Gateway</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              Node.js + WS
              <br />
              <span>Backend</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              PC Mini Display
              <br />
              <span>React Dashboard</span>
            </div>
          </div>
        </article>

        <article id="implementation" className="panel reveal">
          <h2>{copy.technicalTitle}</h2>
          <div className="spec-grid">
            <div>
              <h3>{copy.hardware}</h3>
              <p>{copy.hardwareBody}</p>
            </div>
            <div>
              <h3>{copy.infra}</h3>
              <p>{copy.infraBody}</p>
            </div>
            <div>
              <h3>{copy.app}</h3>
              <p>{copy.appBody}</p>
            </div>
          </div>
        </article>

        <article id="outcome" className="panel reveal">
          <h2>{isId ? "Hasil" : "Outcome"}</h2>
          <div className="hero-metrics">
            <article>
              <p className="mono">{copy.delay}</p>
              <h3>15-20 min</h3>
            </article>
            <article>
              <p className="mono">{copy.visibility}</p>
              <h3>Real-time</h3>
            </article>
            <article>
              <p className="mono">{copy.reliability}</p>
              <h3>99.9% Uptime</h3>
            </article>
          </div>
        </article>
      </section>
    </main>
  );
}
