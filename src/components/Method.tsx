const steps = [
  { n: "01", name: "Mini-groups",         d: "Small live circles (4–6 people) where the only way to be in the room is to speak. No hiding behind chat boxes.", tag: "Weekly · 60 min" },
  { n: "02", name: "Buddy system",        d: "Paired with one participant per cycle for outside-session calls, voice notes, and shared practice goals.", tag: "Outside class" },
  { n: "03", name: "Voice homework",      d: "Short voice tasks tied to your week — your coffee order, your day, your opinion. English in your real life.", tag: "Daily · Async" },
  { n: "04", name: "Personal feedback",   d: "Human review of your voice messages: pronunciation, melody, the exact word that almost landed. Weekly notes.", tag: "Weekly review" },
  { n: "05", name: "Culture & real English", d: "Films, songs, slang, idioms, the way people actually talk after midnight in a New York bar. Living language, not curriculum.", tag: "Monthly" },
];

export default function Method() {
  return (
    <section className="section dark" id="method">
      <div className="container">
        <div className="method__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>04 — The Method</span>
            <h2 className="method__title display" style={{ marginTop: 20 }}>
              How you start speaking — <em>naturally.</em>
            </h2>
          </div>
          <span className="method__count">Five elements · One environment</span>
        </div>
        <div className="method__steps">
          {steps.map((s) => (
            <div className="method-step" key={s.n}>
              <div className="method-step__num">{s.n}</div>
              <div className="method-step__name">{s.name}</div>
              <div className="method-step__desc">{s.d}</div>
              <div className="method-step__tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
