import React from "react";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import { experienceTimeline, getSiteUrl, siteProfile, skillRadar } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import { textOf } from "../utils/i18n";

export default function AboutPage() {
  const { isId } = useLanguage();
  const siteUrl = getSiteUrl();
  const copy = {
    seoDescription: isId
      ? "Tentang Zidan: IoT Engineer dan Fullstack Programmer dengan fokus integrasi device, backend realtime, dan dashboard operasional."
      : "About Zidan: IoT Engineer and Fullstack Programmer focused on device integration, realtime backends, and operational dashboards.",
    eyebrow: isId ? "TENTANG ENGINEER" : "ABOUT ENGINEER",
    role: isId ? "Peran" : "Role",
    location: isId ? "Lokasi" : "Location",
    availability: isId ? "Ketersediaan" : "Availability",
    timeline: isId ? "Timeline Pengalaman" : "Experience Timeline",
    skillRadar: isId ? "Radar Skill" : "Skill Radar",
    skillNote: isId
      ? "Representasi kekuatan teknis berbasis pengalaman implementasi."
      : "A practical representation of technical strengths based on implementation experience."
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: textOf(siteProfile.role, isId),
    description: textOf(siteProfile.summary, isId),
    email: siteProfile.email,
    url: `${siteUrl}/about`,
    sameAs: [siteProfile.linkedin, siteProfile.github]
  };

  return (
    <main className="container">
      <Seo
        title="About"
        description={copy.seoDescription}
        path="/about"
      />
      <JsonLd id="about-person" data={personSchema} />

      <section className="page-head reveal">
        <p className="eyebrow mono">{copy.eyebrow}</p>
        <h1>{siteProfile.name}</h1>
        <p>{textOf(siteProfile.summary, isId)}</p>
      </section>

      <section className="about-stats reveal">
        <article className="panel">
          <p className="mono">{copy.role}</p>
          <h3>{textOf(siteProfile.role, isId)}</h3>
        </article>
        <article className="panel">
          <p className="mono">{copy.location}</p>
          <h3>{textOf(siteProfile.location, isId)}</h3>
        </article>
        <article className="panel">
          <p className="mono">{copy.availability}</p>
          <h3>{textOf(siteProfile.availability, isId)}</h3>
        </article>
      </section>

      <section className="about-grid reveal">
        <article className="panel">
          <h2>{copy.timeline}</h2>
          <div className="timeline">
            {experienceTimeline.map((item) => (
              <div className="timeline-item" key={`${textOf(item.period, true)}-${textOf(item.role, true)}`}>
                <p className="mono timeline-period">{textOf(item.period, isId)}</p>
                <h3>{textOf(item.role, isId)}</h3>
                <p className="timeline-org">{textOf(item.organization, isId)}</p>
                <ul className="journey">
                  {item.highlights.map((highlight) => (
                    <li key={textOf(highlight, true)}>{textOf(highlight, isId)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>{copy.skillRadar}</h2>
          <p className="skill-note">{copy.skillNote}</p>
          <div className="skill-list">
            {skillRadar.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-head">
                  <p>{skill.name}</p>
                  <span className="mono">{skill.level}%</span>
                </div>
                <div className="skill-track" role="presentation">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
                <p className="mono skill-group">{textOf(skill.group, isId)}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
