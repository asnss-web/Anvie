const cards = [
  {
    n: "01",
    t: "You understand, but freeze when speaking.",
    b: "You know the grammar. You read articles. But the moment a real conversation starts, your tongue forgets the words it knew yesterday.",
  },
  {
    n: "02",
    t: "You study, but never actually use it.",
    b: "Apps, courses, textbooks, marathons — and yet English still lives in a separate folder of your brain, not in your daily life.",
  },
  {
    n: "03",
    t: "You want confidence, not more grammar stress.",
    b: "What you need isn't another lesson. It's a place where English is the air you breathe — without pressure, judgement, or school flashbacks.",
  },
];

export default function Problem() {
  return (
    <section className="section dark" id="concept">
      <div className="container">
        <div className="problem__head">
          <h2 className="problem__title display">
            You don&apos;t need<br />another textbook.<br /><em>You need an environment.</em>
          </h2>
          <p className="problem__lede">
            Most people already know enough English to start speaking — fear, missing practice, and
            school-shaped formats are what keep them stuck. Anvié replaces all of it with one thing: an environment.
          </p>
        </div>
        <div className="cards">
          {cards.map((c) => (
            <div className="card-problem" key={c.n}>
              <div className="card-problem__num">{c.n}</div>
              <div className="card-problem__title">{c.t}</div>
              <div className="card-problem__body">{c.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
