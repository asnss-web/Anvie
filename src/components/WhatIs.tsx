"use client";
import { useT } from "@/i18n/context";

export default function WhatIs() {
  const { t } = useT();
  return (
    <section className="section cream">
      <div className="container">
        <div className="what">
          <div>
            <span className="eyebrow" style={{ color: "var(--burgundy)" }}>{t.whatis.eyebrow}</span>
            <h2 className="what__title display" style={{ marginTop: 20 }}>
              {t.whatis.titleLine} <em>{t.whatis.titleEm}</em>
            </h2>
            <p className="what__intro">{t.whatis.intro}</p>
          </div>
          <div className="what__list">
            {t.whatis.items.map((it, i) => (
              <div className="what__row" key={i}>
                <div className="what__num">{it.n}</div>
                <div>
                  <div className="what__name">{it.name}</div>
                  <div className="what__desc">{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
