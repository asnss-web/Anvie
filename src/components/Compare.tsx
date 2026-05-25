const school = [
  "Same program for everyone",
  "School atmosphere",
  "Little real speaking time",
  "No community outside lessons",
  "Teacher-centered",
  "Focus on rules, not voice",
];
const anvie = [
  "Adaptive formats — fitted to you",
  "Premium, intimate community",
  "Constant speaking + buddy practice",
  "Always-on chat & cinema nights",
  "You-centered — your goals, your life",
  "Real communication first",
];

export default function Compare() {
  return (
    <section className="section cream">
      <div className="container">
        <div className="compare__head">
          <span className="eyebrow" style={{ color: "var(--burgundy)" }}>05 — The Difference</span>
          <h2 className="compare__title display" style={{ marginTop: 16 }}>
            Not a mass school.<br />Not a recorded course.<br /><em>An environment.</em>
          </h2>
        </div>
        <div className="compare">
          <div className="compare__col compare__col--school">
            <h3 className="compare__h">The typical school</h3>
            <div className="compare__list">
              {school.map((s, i) => (
                <div className="compare__item" key={i}>
                  <span className="compare__mark">×</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="compare__col compare__col--anvie">
            <h3 className="compare__h">Anvié, <em>instead</em></h3>
            <div className="compare__list">
              {anvie.map((s, i) => (
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
