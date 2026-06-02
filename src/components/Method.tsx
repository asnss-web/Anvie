"use client";
import { useT } from "@/i18n/context";

export default function Method() {
  const { t } = useT();
  return (
    <section className="section dark" id="method">
      <div className="container">
        <div className="method__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>{t.method.eyebrow}</span>
            <h2 className="method__title display" style={{ marginTop: 20 }}>
              {t.method.titleLine1} <em>{t.method.titleEm}</em>
            </h2>
          </div>
          <span className="method__count">{t.method.count}</span>
        </div>
        <div className="method__steps">
          {t.method.steps.map((s) => (
            <div className="method-step" key={s.n}>
              <div className="method-step__num">{s.n}</div>
              <div className="method-step__name">{s.name}</div>
              <div className="method-step__desc">{s.d}</div>
              <div className="method-step__tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
