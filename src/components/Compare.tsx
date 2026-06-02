"use client";
import { useT } from "@/i18n/context";

export default function Compare() {
  const { t } = useT();
  return (
    <section className="section cream">
      <div className="container">
        <div className="compare__head">
          <span className="eyebrow" style={{ color: "var(--burgundy)" }}>{t.compare.eyebrow}</span>
          <h2 className="compare__title display" style={{ marginTop: 16 }}>
            {t.compare.titleLine1}<br />{t.compare.titleLine2}<br />
            <em>{t.compare.titleEm}</em>
          </h2>
        </div>
        <div className="compare">
          <div className="compare__col compare__col--school">
            <h3 className="compare__h">{t.compare.schoolH}</h3>
            <div className="compare__list">
              {t.compare.school.map((s, i) => (
                <div className="compare__item" key={i}>
                  <span className="compare__mark">×</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="compare__col compare__col--anvie">
            <h3 className="compare__h">{t.compare.anvieH} <em>{t.compare.anvieHEm}</em></h3>
            <div className="compare__list">
              {t.compare.anvie.map((s, i) => (
                <div className="compare__item" key={i}>
                  <span className="compare__mark">✓</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
