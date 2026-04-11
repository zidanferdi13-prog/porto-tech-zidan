import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import { getSiteUrl, siteProfile } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import { useProjects } from "../context/ProjectsContext";
import { textOf } from "../utils/i18n";

export default function ProjectDetailPage() {
  const { isId } = useLanguage();
  const { getProjectBySlug } = useProjects();
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const siteUrl = getSiteUrl();

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: textOf(project.title, isId),
    description: textOf(project.description, isId),
    image: project.image,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: siteProfile.name
    },
    keywords: project.tags.join(", "),
    about: project.categories,
    inLanguage: isId ? "id" : "en"
  };

  return (
    <main className="container">
      <JsonLd id={`project-${project.slug}`} data={projectSchema} />
      <Seo
        title={textOf(project.title, isId)}
        description={textOf(project.description, isId)}
        path={`/projects/${project.slug}`}
        type="article"
        image={project.image}
      />
      <section className="page-head reveal">
        <p className="eyebrow mono">{isId ? "DETAIL PROYEK" : "PROJECT DETAIL"}</p>
        <h1>{textOf(project.title, isId)}</h1>
        <p>{textOf(project.description, isId)}</p>
        <div className="tags mono">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="panel reveal project-hero">
        <img src={project.image} alt={project.alt} />
      </section>

      <section className="spec-grid reveal">
        <article className="panel">
          <h3>{isId ? "Peran" : "Role"}</h3>
          <p>{textOf(project.role, isId)}</p>
        </article>
        <article className="panel">
          <h3>{isId ? "Durasi" : "Timeline"}</h3>
          <p>{textOf(project.timeline, isId)}</p>
        </article>
        <article className="panel">
          <h3>{isId ? "Domain" : "Domain"}</h3>
          <p>{project.categories.join(" + ")}</p>
        </article>
      </section>

      <section className="panel reveal">
        <h2>{isId ? "Masalah" : "Problem"}</h2>
        <p>{textOf(project.problem, isId)}</p>
      </section>

      <section className="panel reveal">
        <h2>{isId ? "Solusi" : "Solution"}</h2>
        <p>{textOf(project.solution, isId)}</p>
      </section>

      <section className="panel reveal">
        <h2>Architecture</h2>
        <ul className="journey mono">
          {project.architecture.map((step) => (
            <li key={textOf(step, true)}>{textOf(step, isId)}</li>
          ))}
        </ul>
      </section>

      <section className="panel reveal">
        <h2>{isId ? "Hasil" : "Outcome"}</h2>
        <ul className="journey">
          {project.outcomes.map((item) => (
            <li key={textOf(item, true)}>{textOf(item, isId)}</li>
          ))}
        </ul>
      </section>

      <section className="detail-actions reveal">
        <a className="btn btn-primary" href={project.links.demo}>
          {isId ? "Demo Langsung" : "Live Demo"}
        </a>
        <a className="btn btn-outline" href={project.links.repo}>
          {isId ? "Lihat Repository" : "View Repository"}
        </a>
        <Link className="btn btn-outline" to="/projects">
          {isId ? "Kembali ke Proyek" : "Back to Projects"}
        </Link>
      </section>
    </main>
  );
}
