"use client";
import { useT } from "@/i18n/context";

interface TariffsProps {
  onChoose?: (id: string) => void;
}

export default function Tariffs({ onChoose }: TariffsProps) {
  const { t } = useT();

  const handleChoose = (id: string) => {
    if (onChoose) { onChoose(id); return; }
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section deep" id="tariffs">
      <div className="container">
        <div className="tariffs__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>{t.tariffs.eyebrow}</span>
            <h2 className="tariffs__title display" style={{ marginTop: 20 }}>
              {t.tariffs.titleLine1} <em>{t.tariffs.titleEm}</em>
            </h2>
          </div>
          <p className="tariffs__intro">{t.tariffs.intro}</p>
        </div>
        <div className="tariffs">
          {t.tariffs.list.map((tariff) => (
            <div
              key={tariff.id}
              className={`tariff${tariff.elite ? " tariff--elite" : ""}${tariff.popular ? " tariff--popular" : ""}`}
              onClick={() => handleChoose(tariff.id)}
            >
              {tariff.popular && <div className="tariff__badge">{t.tariffs.popularBadge}</div>}
              <div className="tariff__name">{tariff.id}</div>
              <div className="tariff__sub">{tariff.sub}</div>
              <div className="tariff__price">
                <span className="tariff__price-cur">€</span>
                <span className="tariff__price-num">{tariff.price}</span>
                <span className="tariff__price-per">{t.tariffs.perMonth}</span>
              </div>
              <div className="tariff__features">
                {tariff.features.slice(0, 4).map((f, i) => (
                  <div className="tariff__feature" key={i}>{f}</div>
                ))}
              </div>
              <div className="tariff__cta">
                {tariff.id} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
