"use client";
import Image from "next/image";
import { useT } from "@/i18n/context";

export default function Founder() {
  const { t } = useT();
  return (
    <section className="section deep" id="founder">
      <div className="container">
        <div className="founder">
          <div className="founder__photo">
            <Image
              src="/founder-portrait.png"
              alt="Anvié — Founder"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="founder__copy">
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>{t.founder.eyebrow}</span>
            <span className="founder__sig">{t.founder.sig}</span>
            <h2 className="founder__title display">
              {t.founder.titleLine1} <em>{t.founder.titleEm}</em>
            </h2>
            <div className="founder__body">
              <p>
                {t.founder.body1Pre}{" "}
                <em style={{ fontStyle: "italic", color: "var(--cream)" }}>{t.founder.bodyEm}</em>{" "}
                {t.founder.body1Post}
              </p>
              <p>{t.founder.body2}</p>
              <p>{t.founder.body3}</p>
            </div>
            <div className="founder__meta">
              <div className="founder__meta-item">
                <span>{t.founder.statYearsLabel}</span>
                <strong>{t.founder.statYears}</strong>
              </div>
              <div className="founder__meta-item">
                <span>{t.founder.statBasedLabel}</span>
                <strong>{t.founder.statBased}</strong>
              </div>
              <div className="founder__meta-item">
                <span>{t.founder.statMentorLabel}</span>
                <strong>{t.founder.statMentor}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
