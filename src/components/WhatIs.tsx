const items = [
  { n: "i",    name: "Speaking sessions",  d: "Small live groups where you actually talk — not just listen." },
  { n: "ii",   name: "Buddy system",       d: "Paired weekly with another participant for outside-class practice." },
  { n: "iii",  name: "Real-life homework", d: "Voice tasks tied to your day, not abstract drills." },
  { n: "iv",   name: "Chat practice",      d: "An always-on community chat that runs in English." },
  { n: "v",    name: "Films & culture",    d: "Real English from movies, songs, slang, idioms — alive language." },
  { n: "vi",   name: "Pronunciation work", d: "Specific feedback on accent, intonation, melody." },
  { n: "vii",  name: "Personal feedback",  d: "Notes on your voice messages, weekly. From a human." },
  { n: "viii", name: "Community",          d: "International peers building the same English-speaking life as you." },
];

export default function WhatIs() {
  return (
    <section className="section cream">
      <div className="container">
        <div className="what">
          <div>
            <span className="eyebrow" style={{ color: "var(--burgundy)" }}>02 — The Concept</span>
            <h2 className="what__title display" style={{ marginTop: 20 }}>
              A space where English becomes part of <em>your identity.</em>
            </h2>
            <p className="what__intro">
              Anvié is built like a small private club, not a classroom. Eight integrated elements work together
              to move English from <em style={{ fontStyle: "italic" }}>something you study</em> into{" "}
              <em style={{ fontStyle: "italic" }}>something you live</em>.
            </p>
          </div>
          <div className="what__list">
            {items.map((it, i) => (
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
