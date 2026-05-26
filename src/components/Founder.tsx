import Image from "next/image";

export default function Founder() {
  return (
    <section className="section deep" id="founder">
      <div className="container">
        <div className="founder">
          <div className="founder__photo">
            <Image
              src="/Anvie/founder-portrait.png"
              alt="Anvié — Founder"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="founder__copy">
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>03 — The Founder</span>
            <span className="founder__sig">Anvié is built by a person, not a company.</span>
            <h2 className="founder__title display">
              Created by someone who knows what English <em>can change.</em>
            </h2>
            <div className="founder__body">
              <p>
                I learned English the way most people do — between apps, podcasts, and quiet evenings
                rehearsing conversations I would never actually have. Years passed and the language was
                always <em style={{ fontStyle: "italic", color: "var(--cream)" }}>almost</em> there.
              </p>
              <p>
                Then I moved abroad, started working with an American mentor, and English stopped being a
                subject. It became a passport — to friends, to work, to a version of myself I couldn&apos;t
                reach in any other language.
              </p>
              <p>
                Anvié exists because I want that shift to take less time, and feel like belonging — not like a struggle.
              </p>
            </div>
            <div className="founder__meta">
              <div className="founder__meta-item"><span>Years teaching</span><strong>8</strong></div>
              <div className="founder__meta-item"><span>Based</span><strong>EU · US</strong></div>
              <div className="founder__meta-item"><span>Mentor</span><strong>NYC, USA</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
