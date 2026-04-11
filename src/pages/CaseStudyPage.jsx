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
      ? "Peran: Lead IoT & Fullstack Developer. Mengubah pencatatan rework manual menjadi sistem digital live monitoring."
      : "Role: Lead IoT & Fullstack Developer. Transformed manual rework logging into a live digital monitoring system.",
    problemBody: isId
      ? "Data rework tercatat di kertas dan baru di-input di akhir shift. Dampaknya: keterlambatan data hingga 24 jam, sulit tracing akar masalah, dan lambat melakukan perbaikan di line produksi."
      : "Rework data was recorded on paper and entered only at the end of each shift. This caused delays up to 24 hours, weak root-cause traceability, and slower corrective actions on the production line.",
    architectureTitle: isId ? "Arsitektur Sistem" : "System Architecture",
    technicalTitle: isId ? "Implementasi Teknis" : "Technical Implementation",
    hardware: isId ? "Layer Perangkat Keras" : "Hardware Layer",
    hardwareBody: isId
      ? "ESP32 membaca sensor count dan status line. Firmware memiliki auto-reconnect logic untuk menjaga kestabilan saat jaringan tidak stabil."
      : "ESP32 reads count sensors and production line status. Firmware includes auto-reconnect logic to maintain stability during network issues.",
    infra: isId ? "Layer Infrastruktur" : "Infrastructure Layer",
    infraBody: isId
      ? "Data publish lewat MQTT ke backend Node.js. Redis dipakai sebagai transient stream dan PostgreSQL sebagai penyimpanan historis."
      : "Data is published via MQTT to a Node.js backend. Redis is used as a transient stream buffer and PostgreSQL stores historical data.",
    app: isId ? "Layer Aplikasi" : "Application Layer",
    appBody: isId
      ? "Dashboard React menampilkan alarm, trend, dan status line tanpa refresh halaman menggunakan push update via WebSocket."
      : "The React dashboard shows alarms, trends, and line status without page refresh using WebSocket push updates.",
    delay: isId ? "Keterlambatan Laporan" : "Reporting Delay",
    visibility: isId ? "Visibilitas Operasional" : "Operational Visibility",
    reliability: isId ? "Keandalan" : "Reliability"
  };

  return (
    <main className="container case-layout">
      <Seo
        title={isId ? "Studi Kasus" : "Case Study"}
        description={
          isId
            ? "Studi kasus end-to-end sistem monitoring rework: edge device, MQTT, backend processing, sampai dashboard operator."
            : "End-to-end case study of a rework monitoring system: edge devices, MQTT, backend processing, and operator dashboard."
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
          <h1>Real-time Rework Monitoring System</h1>
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
              ESP32 + Sensors
              <br />
              <span>Edge Device</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              MQTT Broker
              <br />
              <span>Transport</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              Node.js + Redis
              <br />
              <span>Processing</span>
            </div>
            <div className="arrow">-&gt;</div>
            <div className="node">
              React Dashboard
              <br />
              <span>Operator UI</span>
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
              <h3>24h -&gt; &lt;1s</h3>
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
