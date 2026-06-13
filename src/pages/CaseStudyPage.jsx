import React from "react";
import Seo from "../components/Seo";
import { useLanguage } from "../context/LanguageContext";
import { textOf } from "../utils/i18n";
import caseStudy from "../data/caseStudy";

export default function CaseStudyPage() {
  const { isId } = useLanguage();
  const cs = caseStudy;

  return (
    <main className="container case-layout">
      <Seo
        title={isId ? "Studi Kasus" : "Case Study"}
        description={textOf(cs.problem, isId)}
        path="/case-study"
      />
      <aside className="journey-nav mono reveal">
        <p>{textOf(cs.navJourney, isId)}</p>
        <a href="#problem">01 {textOf(cs.navProblem, isId)}</a>
        <a href="#architecture">02 {textOf(cs.architectureTitle, isId)}</a>
        <a href="#implementation">03 {textOf(cs.technicalTitle, isId)}</a>
        <a href="#outcome">04 {textOf(cs.navOutcome, isId)}</a>
      </aside>

      <section className="case-content">
        <article className="page-head reveal">
          <p className="eyebrow mono">{textOf(cs.eyebrow, isId)}</p>
          <h1>{textOf(cs.title, isId)}</h1>
          <p>{textOf(cs.roleIntro, isId)}</p>
        </article>

        <article id="problem" className="panel reveal">
          <h2>{textOf(cs.navProblem, isId)}</h2>
          <p>{textOf(cs.problem, isId)}</p>
        </article>

        <article id="architecture" className="panel reveal">
          <h2>{textOf(cs.architectureTitle, isId)}</h2>
          <div className="flow-grid mono">
            {cs.architectureSteps.map((step, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="arrow">-&gt;</div>}
                <div className="node">
                  {textOf(step.label, isId)}
                  <br />
                  <span>{textOf(step.sub, isId)}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </article>

        <article id="implementation" className="panel reveal">
          <h2>{textOf(cs.technicalTitle, isId)}</h2>
          <div className="spec-grid">
            {cs.layers.map((layer, i) => (
              <div key={i}>
                <h3>{textOf(layer.title, isId)}</h3>
                <p>{textOf(layer.body, isId)}</p>
              </div>
            ))}
          </div>
        </article>

        <article id="outcome" className="panel reveal">
          <h2>{textOf(cs.navOutcome, isId)}</h2>
          <div className="hero-metrics">
            {cs.outcomes.map((item, i) => (
              <article key={i}>
                <p className="mono">{textOf(item.label, isId)}</p>
                <h3>{item.value}</h3>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
