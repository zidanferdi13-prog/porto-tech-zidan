import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import { experienceTimeline, getSiteUrl, siteProfile, skillRadar } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import { useProjects } from "../context/ProjectsContext";
import { textOf } from "../utils/i18n";

export default function HomePage() {
  const { isId } = useLanguage();
  const { featuredProjects } = useProjects();
  const siteUrl = getSiteUrl();
  const copy = {
    eyebrow: isId ? "TERSEDIA UNTUK DIGITALISASI INDUSTRI" : "AVAILABLE FOR INDUSTRIAL DIGITALIZATION",
    subcopy: isId
      ? "Saya membangun solusi end-to-end: sensor, protokol komunikasi, backend stream, sampai dashboard operasional yang dipakai tim produksi."
      : "I build end-to-end solutions: sensors, communication protocols, streaming backends, and operational dashboards for production teams.",
    introLabel: isId ? "Tentang Saya" : "About Me",
    trustExperience: isId ? "Pengalaman" : "Experience",
    trustLocation: isId ? "Lokasi" : "Location",
    trustAvailability: isId ? "Ketersediaan" : "Availability",
    trustCurrent: isId ? "Current Role" : "Current Role",
    ctaProjects: isId ? "Lihat Proyek" : "View Projects",
    ctaCase: isId ? "Baca Studi Kasus" : "Read Case Study",
    ctaContact: isId ? "Hubungi Saya" : "Contact Me",
    ctaResume: isId ? "Download CV" : "Download Resume",
    journeyTitle: isId ? "Perjalanan Data" : "The Data Journey",
    journeyDesc: isId
      ? "Fokus utama portofolio ini adalah memperlihatkan alur data dari perangkat fisik hingga antarmuka pengguna secara real-time."
      : "This portfolio focuses on showing the complete data flow from physical devices to real-time user interfaces.",
    stackTitle: isId ? "Tech Stack Utama" : "Core Tech Stack",
    stackDesc: isId
      ? "Kombinasi tools yang paling sering saya pakai untuk implementasi sistem industrial end-to-end."
      : "A focused stack I use most often to build end-to-end industrial systems.",
    featured: isId ? "Proyek Unggulan" : "Featured Projects",
    viewAll: isId ? "LIHAT SEMUA" : "VIEW ALL",
    seoTitle: isId ? "IoT Engineer & Fullstack Programmer" : "IoT Engineer & Fullstack Programmer",
    seoDescription: isId
      ? "Portofolio Zidan untuk solusi IoT dan fullstack: dari sensor, backend stream, hingga dashboard operasional real-time."
      : "Zidan's portfolio for IoT and fullstack solutions: from sensors and streaming backends to real-time operational dashboards."
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: textOf(siteProfile.role, isId),
    description: textOf(siteProfile.summary, isId),
    email: siteProfile.email,
    url: siteUrl,
    sameAs: [siteProfile.linkedin, siteProfile.github]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zidan Portfolio",
    url: siteUrl,
    inLanguage: isId ? "id" : "en"
  };
  const currentExperience = experienceTimeline[0] || null;
  const hasResume = Boolean(siteProfile.resumeUrl && siteProfile.resumeUrl !== "#");

  return (
    <main>
      <JsonLd id="home-person" data={personSchema} />
      <JsonLd id="home-website" data={websiteSchema} />
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
        path="/"
      />
      <section className="hero container reveal">
        <div className="hero-grid">
          <div>
            <p className="eyebrow mono">{copy.eyebrow}</p>
            <h1>
              {siteProfile.name}
              <span>{textOf(siteProfile.role, isId)}</span>
            </h1>
            <p className="subcopy">{copy.subcopy}</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/projects">
                {copy.ctaProjects}
              </Link>
              <Link className="btn btn-outline" to="/contact">
                {copy.ctaContact}
              </Link>
              <Link className="btn btn-outline" to="/case-study">
                {copy.ctaCase}
              </Link>
              {hasResume ? (
                <a className="btn btn-outline" href={siteProfile.resumeUrl} target="_blank" rel="noreferrer">
                  {copy.ctaResume}
                </a>
              ) : null}
            </div>
          </div>

          <aside className="panel identity-panel">
            <p className="mono identity-label">{copy.introLabel}</p>
            <h3>{siteProfile.name}</h3>
            <p>{textOf(siteProfile.summary, isId)}</p>
            <ul className="identity-list mono">
              <li>{siteProfile.email}</li>
              <li>{siteProfile.linkedin.replace("https://", "")}</li>
              <li>{siteProfile.github.replace("https://", "")}</li>
            </ul>
          </aside>
        </div>

        <div className="home-trust">
          <article>
            <p className="mono">{copy.trustExperience}</p>
            <h3>{textOf(siteProfile.experienceYears, isId)}</h3>
          </article>
          <article>
            <p className="mono">{copy.trustLocation}</p>
            <h3>{textOf(siteProfile.location, isId)}</h3>
          </article>
          <article>
            <p className="mono">{copy.trustCurrent}</p>
            <h3>
              {currentExperience
                ? `${textOf(currentExperience.role, isId)} - ${textOf(currentExperience.organization, isId)}`
                : textOf(siteProfile.availability, isId)}
            </h3>
          </article>
        </div>

        <div className="hero-metrics">
          <article>
            <p className="mono">Latency</p>
            <h3>{"< 1s"}</h3>
          </article>
          <article>
            <p className="mono">Devices Simultaneous</p>
            <h3>100+</h3>
          </article>
          <article>
            <p className="mono">System Uptime</p>
            <h3>99.9%</h3>
          </article>
        </div>
      </section>

      <section className="container reveal">
        <div className="section-head">
          <h2>{copy.stackTitle}</h2>
        </div>
        <p className="subcopy stack-subcopy">{copy.stackDesc}</p>
        <div className="tags mono home-stack-tags">
          {skillRadar.slice(0, 8).map((skill) => (
            <span key={skill.name}>{skill.name}</span>
          ))}
        </div>
      </section>

      <section className="container split reveal">
        <div>
          <h2>{copy.journeyTitle}</h2>
          <p>{copy.journeyDesc}</p>
          <ul className="journey mono">
            <li>Device Layer: ESP32, STM32, Sensor Integration</li>
            <li>Connectivity: MQTT, HTTP, WebSocket</li>
            <li>Backend: Node.js, Python, PostgreSQL, Redis</li>
            <li>Frontend: React, Next.js, Tailwind, Mobile Dashboard</li>
          </ul>
        </div>
        <figure className="feature-img">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="IoT board and electronics"
          />
        </figure>
      </section>

      <section className="container reveal">
        <div className="section-head">
          <h2>{copy.featured}</h2>
          <Link className="mono" to="/projects">
            {copy.viewAll}
          </Link>
        </div>
        <div className="cards">
          {featuredProjects.map((project) => (
            <Link className="project-link" to={`/projects/${project.slug}`} key={project.slug}>
              <article className="project-card">
                <img src={project.image} alt={project.alt} />
                <div className="card-body">
                  <h3>{textOf(project.title, isId)}</h3>
                  <p>{textOf(project.description, isId)}</p>
                  <div className="tags mono">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
