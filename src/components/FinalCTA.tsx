"use client";
import { useState } from "react";
import { TARIFFS } from "./Tariffs";

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: "", contact: "", country: "", level: "B1", goal: "", problem: "", when: "ASAP",
  });
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const levels = ["A2", "B1", "B2", "C1", "C2"];
  const whens  = ["ASAP", "This month", "Next month", "Just exploring"];

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="section final" id="apply">
      <div className="container">
        <div className="final__inner">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>09 — The Application</span>
            <h2 className="final__title display" style={{ marginTop: 20 }}>
              Choose the English environment that matches <em>your next level.</em>
            </h2>
            <p className="final__sub">
              Apply and we&apos;ll help you pick the format that fits your goals, your lifestyle, and your
              current level. Every application is read personally.
            </p>
            <div className="final__contact">
              <div className="final__contact-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="2" y="3" width="12" height="10" /><path d="M2 4l6 5 6-5" />
                </svg>
                hello@anvie.space
              </div>
              <div className="final__contact-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M14 11.5v2a1 1 0 0 1-1.1 1A11 11 0 0 1 2.5 4.1 1 1 0 0 1 3.5 3h2a1 1 0 0 1 1 .9c.1.6.2 1.2.5 1.8a1 1 0 0 1-.3 1l-.8.8a9 9 0 0 0 4.6 4.6l.8-.8a1 1 0 0 1 1-.3c.6.2 1.2.4 1.8.5a1 1 0 0 1 .9 1z" />
                </svg>
                @anvie.space — Telegram &amp; Instagram
              </div>
              <div className="final__contact-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="8" cy="8" r="6" /><path d="M2 8h12M8 2c1.5 1.5 2.5 4 2.5 6S9.5 12.5 8 14M8 2C6.5 3.5 5.5 6 5.5 8S6.5 12.5 8 14" />
                </svg>
                Members across EU, UK, US, AE
              </div>
            </div>
          </div>

          <form className="form" onSubmit={submit}>
            {submitted ? (
              <div className="form__success">
                <div className="form__success-h">Application received.</div>
                <div className="form__success-p">
                  We&apos;ll write back within 24 hours to find the right format for you. — A.
                </div>
              </div>
            ) : (
              <>
                <div className="form__h">Apply to join <em>Anvié.</em></div>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label">Name</label>
                    <input className="form__input" placeholder="First name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
                  </div>
                  <div className="form__field">
                    <label className="form__label">Instagram / Telegram</label>
                    <input className="form__input" placeholder="@you" value={form.contact} onChange={(e) => update("contact", e.target.value)} required />
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label">Country / city</label>
                    <input className="form__input" placeholder="Berlin · DE" value={form.country} onChange={(e) => update("country", e.target.value)} />
                  </div>
                  <div className="form__field">
                    <label className="form__label">Start when?</label>
                    <select className="form__select" value={form.when} onChange={(e) => update("when", e.target.value)}>
                      {whens.map((w) => <option key={w}>{w}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form__field">
                  <label className="form__label">Current English level</label>
                  <div className="form__chips">
                    {levels.map((l) => (
                      <button type="button" key={l} className={`form__chip ${form.level === l ? "on" : ""}`} onClick={() => update("level", l)}>{l}</button>
                    ))}
                  </div>
                </div>
                <div className="form__field">
                  <label className="form__label">Preferred format</label>
                  <div className="form__chips">
                    {TARIFFS.map((t) => (
                      <button type="button" key={t.id} className={`form__chip ${selectedTariff === t.id ? "on" : ""}`} onClick={() => setSelectedTariff(t.id)}>
                        {t.id} · €{t.price}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form__field">
                  <label className="form__label">Your main goal</label>
                  <input className="form__input" placeholder="Relocation · career · travel · confidence…" value={form.goal} onChange={(e) => update("goal", e.target.value)} />
                </div>
                <div className="form__field">
                  <label className="form__label">Biggest speaking problem</label>
                  <input className="form__input" placeholder="What blocks you most right now?" value={form.problem} onChange={(e) => update("problem", e.target.value)} />
                </div>
                <button type="submit" className="btn btn--primary form__submit">
                  Apply to join <span className="btn__arrow">→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
