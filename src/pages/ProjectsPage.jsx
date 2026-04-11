import React from "react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import { getSiteUrl } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import { useProjects } from "../context/ProjectsContext";
import { textOf } from "../utils/i18n";

export default function ProjectsPage() {
  const { isId } = useLanguage();
  const { projects } = useProjects();
  const [activeFilter, setActiveFilter] = useState("all");
  const siteUrl = getSiteUrl();
  const copy = {
    title: isId ? "Karya Lintas Domain" : "Cross-Domain Works",
    desc: isId
      ? "Filter proyek berdasarkan fokus domain untuk menyorot kedalaman skill Anda."
      : "Filter projects by domain to highlight your technical depth.",
    eyebrow: isId ? "LAB PROYEK" : "PROJECT LAB",
    seoDescription: isId
      ? "Koleksi proyek IoT, fullstack web, dan mobile dengan pendekatan industrial-grade dan data real-time."
      : "A collection of IoT, fullstack web, and mobile projects with industrial-grade and real-time data approaches."
  };

  const filters = [
    { key: "all", label: isId ? "Semua" : "All" },
    { key: "iot", label: isId ? "Sistem IoT" : "IoT Systems" },
    { key: "fullstack", label: isId ? "Web Fullstack" : "Fullstack Web" },
    { key: "mobile", label: isId ? "Aplikasi Mobile" : "Mobile App" }
  ];

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Project Lab - Zidan Portfolio",
    url: `${siteUrl}/projects`,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: textOf(project.title, isId),
      url: `${siteUrl}/projects/${project.slug}`,
      description: textOf(project.description, isId)
    }))
  };

  return (
    <main className="container">
      <JsonLd id="projects-collection" data={collectionSchema} />
      <Seo
        title={isId ? "Proyek" : "Projects"}
        description={copy.seoDescription}
        path="/projects"
      />
      <section className="page-head reveal">
        <p className="eyebrow mono">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.desc}</p>
      </section>

      <section className="filter-row reveal mono">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={`chip ${activeFilter === filter.key ? "active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </section>

      <section className="cards reveal" id="project-grid">
        {visibleProjects.map((project) => (
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
      </section>
    </main>
  );
}
