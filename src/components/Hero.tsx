"use client";
import Image from "next/image";
import { useT } from "@/i18n/context";

export default function Hero() {
  const { t } = useT();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero" id="top">
      <div className="hero__petals" />
      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow eyebrow">{t.hero.eyebrow}</span>
            <h1 className="hero__title display">
              {t.hero.titleLine1}<br />
              <em>{t.hero.titleEm}</em> {t.hero.titleLine2}
            </h1>
            <p className="hero__sub">{t.hero.sub}</p>
            <div className="hero__ctas">
              <button className="btn btn--primary" onClick={() => scrollTo("tariffs")}>
                {t.hero.ctaPrimary} <span className="btn__arrow">→</span>
              </button>
              <button className="btn btn--ghost" onClick={() => scrollTo("apply")}>{t.hero.ctaGhost}</button>
            </div>
            <div className="hero__meta">
              <div className="hero__meta-item"><strong>5</strong><span>{t.hero.statsFormats}</span></div>
              <div className="hero__meta-item"><strong>EU · US</strong><span>{t.hero.statsMentors}</span></div>
              <div className="hero__meta-item"><strong>18–35</strong><span>{t.hero.statsCommunity}</span></div>
              <div className="hero__meta-item"><strong>2</strong><span>{t.hero.statsElite}</span></div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo">
              <Image
                src="/hero-portrait.png"
                alt="Anvié — Editorial portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
            <div className="hero__caption">
              <div className="hero__cap-quote">&ldquo;{t.hero.caption}&rdquo;</div>
            </div>
            <span className="hero__cap-meta">{t.hero.capMeta}</span>
          </div>
        </div>
      </div>

      <div className="hero__ticker">
        <div className="hero__ticker-track">
          <span>
            Speaking Sessions <i>·</i> Buddy System <i>·</i> Voice Feedback <i>·</i> Mini-Groups <i>·</i>
            Cinema Nights <i>·</i> Real English <i>·</i> American Mentor <i>·</i> Lifestyle Community <i>·</i>
            Speaking Sessions <i>·</i> Buddy System <i>·</i> Voice Feedback <i>·</i> Mini-Groups <i>·</i>
            Cinema Nights <i>·</i> Real English <i>·</i> American Mentor <i>·</i> Lifestyle Community <i>·</i>
          </span>
        </div>
      </div>
    </section>
  );
}
