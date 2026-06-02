"use client";
import { useT } from "@/i18n/context";

export default function Problem() {
  const { t } = useT();
  return (
    <section className="section dark" id="concept">
      <div className="container">
        <div className="problem__head">
          <h2 className="problem__title display">
            {t.problem.titleLine1}<br />{t.problem.titleLine2}<br />
            <em>{t.problem.titleEm}</em>
          </h2>
          <p className="problem__lede">{t.problem.lede}</p>
        </div>
        <div className="cards">
          {t.problem.cards.map((c) => (
            <div className="card-problem" key={c.n}>
              <div className="card-problem__num">{c.n}</div>
              <div className="card-problem__title">{c.t}</div>
              <div className="card-problem__body">{c.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
