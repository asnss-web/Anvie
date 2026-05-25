"use client";

export const TARIFFS = [
  {
    id: "BASE", price: 150,
    sub: "Start regularly",
    for: "For those who want to start speaking regularly and stop learning chaotically.",
    features: [
      "2 group speaking sessions / week",
      "Group chat (always-on English)",
      "Access to materials",
      "Buddy system pairing",
      "Speaking homework",
      "Supportive environment",
    ],
    result: "Regular practice, first speaking confidence, English becomes part of life.",
  },
  {
    id: "SPACE", price: 200,
    sub: "Structure + feedback",
    for: "For those who want more structure, real practice, and personal feedback.",
    features: [
      "Everything in BASE",
      "3 group sessions / week",
      "Monthly voice feedback",
      "Pronunciation work",
      "Speech error correction",
      "Monthly cinema night",
    ],
    result: "Faster growth, better pronunciation, natural understanding of real English.",
  },
  {
    id: "GROWTH", price: 300, popular: true,
    sub: "Mentored progress",
    for: "For faster progress and personal attention — while staying inside the community.",
    features: [
      "Everything in SPACE",
      "Up to 4 sessions / week",
      "Choose group or 1:1 format",
      "1:1 with project teacher",
      "Weekly feedback",
      "Goal-based learning path",
    ],
    result: "Faster results, personal direction, balance of group practice and individual work.",
  },
  {
    id: "PRIVATE", price: 400,
    sub: "Personal experience",
    for: "For those who want personal transformation through English.",
    features: [
      "Everything from previous",
      "Up to 5 sessions / week",
      "1:1 with founder",
      "1:1 with project teacher",
      "Adapted format around your life",
      "Lessons from your favourite films",
      "Cinema sessions every 1–2 weeks",
      "Culture & song immersion",
    ],
    result: "A personal English system built around your lifestyle, taste and goals.",
  },
  {
    id: "ELITE", price: 500, elite: true,
    sub: "Full immersion",
    for: "For a serious goal — relocation, international career, a new level of life.",
    features: [
      "Everything in PRIVATE",
      "Full founder support",
      "Private chat (6 days / week)",
      "Daily voice message correction",
      "Weekly session with native speaker",
      "American English mentor",
      "Slang, abbreviations, natural phrasing",
      "Personal content selection",
      "Priority support",
    ],
    result: "Not just learning. Full English-speaking support and deep immersion.",
  },
];

interface TariffsProps {
  onChoose?: (id: string) => void;
}

export default function Tariffs({ onChoose }: TariffsProps) {
  const handleChoose = (id: string) => {
    if (onChoose) { onChoose(id); return; }
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section deep" id="tariffs">
      <div className="container">
        <div className="tariffs__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>06 — The Formats</span>
            <h2 className="tariffs__title display" style={{ marginTop: 20 }}>
              Choose the English environment that matches <em>your next level.</em>
            </h2>
          </div>
          <p className="tariffs__intro">
            Five formats, one community. Pick the depth — group practice, mentorship, or full immersion.
            Every tier shares the same atmosphere; the difference is how close you sit to it.
          </p>
        </div>
        <div className="tariffs">
          {TARIFFS.map((t) => (
            <div
              key={t.id}
              className={`tariff ${t.elite ? "tariff--elite" : ""} ${t.popular ? "tariff--popular" : ""}`}
              onClick={() => handleChoose(t.id)}
            >
              {t.popular && <div className="tariff__badge">Most chosen · Optimal</div>}
              <div className="tariff__name">{t.id}</div>
              <div className="tariff__sub">{t.sub}</div>
              <div className="tariff__price">
                <span className="tariff__price-cur">€</span>
                <span className="tariff__price-num">{t.price}</span>
                <span className="tariff__price-per">/ month</span>
              </div>
              <p className="tariff__for">{t.for}</p>
              <div className="tariff__features">
                {t.features.map((f, i) => (
                  <div className="tariff__feature" key={i}>{f}</div>
                ))}
              </div>
              <div className="tariff__result">
                <div className="tariff__result-label">The result</div>
                <div className="tariff__result-text">{t.result}</div>
              </div>
              <div className="tariff__cta">
                {t.elite ? "Apply for Elite →" : `Choose ${t.id} →`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
