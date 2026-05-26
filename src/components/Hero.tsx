"use client";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero" id="top">
      <div className="hero__petals" />
      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow eyebrow">Premium English Lifestyle Space · Est. 2026</span>
            <h1 className="hero__title display">
              Start living<br />
              <em>in</em> English.
            </h1>
            <p className="hero__sub">
              Anvié is not another school. It&apos;s an environment where speaking becomes natural,
              community becomes home, and English becomes the language of the life you actually want.
            </p>
            <div className="hero__ctas">
              <button className="btn btn--primary" onClick={() => scrollTo("tariffs")}>
                Choose your format <span className="btn__arrow">→</span>
              </button>
              <button className="btn btn--ghost" onClick={() => scrollTo("apply")}>Apply to join</button>
            </div>
            <div className="hero__meta">
              <div className="hero__meta-item"><strong>5</strong><span>Formats</span></div>
              <div className="hero__meta-item"><strong>EU · US</strong><span>Mentors</span></div>
              <div className="hero__meta-item"><strong>18–35</strong><span>Community</span></div>
              <div className="hero__meta-item"><strong>2</strong><span>Elite spots / mo</span></div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo">
              <Image
                src="/Anvie/hero-portrait.png"
                alt="Anvié — Editorial portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
            <div className="hero__caption">
              <div className="hero__cap-quote">&ldquo;Not a course. <em>A new English-speaking life.</em>&rdquo;</div>
            </div>
            <span className="hero__cap-meta">No. 01 — The Space</span>
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
