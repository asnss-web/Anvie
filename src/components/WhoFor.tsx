"use client";
import Image from "next/image";
import { useT } from "@/i18n/context";

export default function WhoFor() {
  const { t } = useT();
  return (
    <section className="section cream">
      <div className="container">
        <span className="eyebrow" style={{ color: "var(--burgundy)" }}>{t.whofor.eyebrow}</span>
        <h2 className="who__title display" style={{ marginTop: 20 }}>
          {t.whofor.title} <em>{t.whofor.titleEm}</em>{t.whofor.titleEnd}
        </h2>
        <div className="who__list">
          {t.whofor.items.map((item, i) => (
            <div className="who-card" key={i}>
              <div className="who-card__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="who-card__text">{item}</div>
            </div>
          ))}
        </div>
        <div className="who__photos">
          <div className="who__photo">
            <Image src="/photo-2.jpg" alt="Anvié — Editorial" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div className="who__photo">
            <Image src="/photo-3.jpg" alt="Anvié — Editorial" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
