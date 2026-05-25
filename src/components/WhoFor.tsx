const items = [
  "You live abroad but still avoid speaking in real life.",
  "You want to travel freely — and not rehearse a sentence in the airport.",
  "You're aiming at an international career or remote-first work.",
  "You're tired of school-like English and ready for something alive.",
  "You want a community — not just a teacher behind a screen.",
  "You want English to feel natural, stylish, and yours.",
];

export default function WhoFor() {
  return (
    <section className="section cream">
      <div className="container">
        <span className="eyebrow" style={{ color: "var(--burgundy)" }}>07 — The People</span>
        <h2 className="who__title display" style={{ marginTop: 20 }}>
          Anvié is <em>for you</em> if…
        </h2>
        <div className="who__list">
          {items.map((t, i) => (
            <div className="who-card" key={i}>
              <div className="who-card__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="who-card__text">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
